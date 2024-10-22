import React, { useEffect, useState } from 'react';
import './Users.css';
import { toast } from 'react-toastify';
import axios from 'axios';

const UserManagement = ({ url }) => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('user');
  const [currentUserId, setCurrentUserId] = useState(null);

  const fetchAllUsers = async () => {
    try {
      const response = await axios.get(`${url}/api/user/list`);
      if (response.data && response.data.success) {
        setUsers(response.data.data || []);
      } else {
        toast.error('Error fetching users');
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      toast.error('Error fetching users');
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !email) {
      toast.error('Please fill out both name and email.');
      return;
    }

    try {
      const userPayload = { name, email, role };
      let response;

      if (currentUserId) {
        response = await axios.put(`${url}/api/user/update/${currentUserId}`, userPayload);
      } else {
        response = await axios.post(`${url}/api/user/add`, userPayload);
      }

      if (response.data && response.data.success) {
        toast.success(currentUserId ? 'User updated successfully' : 'User added successfully');
        fetchAllUsers();
        resetForm();
      } else {
        toast.error('Error adding/updating user');
      }
    } catch (error) {
      console.error('Error adding/updating user:', error);
      toast.error('Error adding/updating user');
    }
  };

  const handleEdit = (user) => {
    setName(user.name);
    setEmail(user.email);
    setRole(user.role);
    setCurrentUserId(user._id);
  };

  const handleDelete = async (userId) => {
    if (!userId) return;

    try {
      const response = await axios.delete(`${url}/api/user/delete`, { data: { _id: userId } });
      if (response.data && response.data.success) {
        toast.success('User deleted successfully');
        fetchAllUsers();
      } else {
        toast.error('Error deleting user');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
      toast.error('Error deleting user');
    }
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setRole('user');
    setCurrentUserId(null);
  };

  return (
    <div className="user-management">
      <h3>User Management</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">{currentUserId ? 'Update User' : 'Add User'}</button>
        {currentUserId && <button type="button" onClick={resetForm}>Cancel</button>}
      </form>

      <div className="user-list">
        {users.length > 0 ? (
          users.map((user) => (
            <div key={user._id} className="user-item">
              <p>{user.name} - {user.email} ({user.role})</p>
              <button onClick={() => handleEdit(user)}>Edit</button>
              <button onClick={() => handleDelete(user._id)}>Delete</button>
            </div>
          ))
        ) : (
          <p>No users found</p>
        )}
      </div>
    </div>
  );
};

export default UserManagement;

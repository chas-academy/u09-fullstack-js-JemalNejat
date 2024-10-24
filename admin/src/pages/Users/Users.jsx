import React, { useContext, useEffect, useState } from 'react';
import './Users.css';
import { toast } from 'react-toastify';
import axios from 'axios';

import StoreContext from '@frontend/context/StoreContext';




const UserManagement = () => {
  const { token, url } = useContext(StoreContext);
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('user');
  const [currentUserId, setCurrentUserId] = useState(null);

  const fetchAllUsers = async () => {
    try {
      const response = await axios.get(`${url}/api/admin/users`, {headers: {token}});

      console.log("Users response", response);

      if (response.data && response.data.success) {
        console.log("Users response data", response.data.users);

        setUsers(response.data.users || []);
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

    const userPayload = { name, email, role };

    try {
      let response;
      if (currentUserId) {
        // Update existing user
        response = await axios.put(`${url}/api/admin/users/${currentUserId}`, userPayload, {headers:{token}});
      } else {
        // Add new user
        response = await axios.post(`${url}/api/admin/users`, userPayload, {headers:{token}});
      }

      if (response.data && response.data.success) {
        toast.success(currentUserId ? 'User updated successfully' : 'User added successfully');
        fetchAllUsers(); // Refresh the user list after submission
        resetForm(); // Reset form fields
      } else {
        toast.error('Error adding/updating user: ' + (response.data.message || ''));
      }
    } catch (error) {
      console.error('Error adding/updating user:', error);
      toast.error('Error adding/updating user: ' + (error.response?.data?.message || ''));
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
      const response = await axios.delete(`${url}/api/admin/users/${userId}`, {headers:{token}});
      if (response.data && response.data.success) {
        toast.success('User deleted successfully');
        fetchAllUsers(); // Refresh the user list
      } else {
        toast.error('Error deleting user');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
      toast.error('Error deleting user: ' + (error.response?.data?.message || ''));
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

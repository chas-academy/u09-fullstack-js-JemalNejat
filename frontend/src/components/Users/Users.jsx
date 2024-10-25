import React, { useEffect, useState } from 'react';
import './Users.css';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Sidebar } from '../../pages/Admin/AdminDashboard';  
import { Navbar } from '../../pages/Admin/AdminDashboard'; 

const UserManagement = ({ url, token }) => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('user');
  const [currentUserId, setCurrentUserId] = useState(null);

  const fetchAllUsers = async () => {
    try {
      const response = await axios.get(`${url}/api/admin/users`, {
        headers: { token },
      });

      if (response.data.success) {
        setUsers(response.data.users || []);
      } else {
        toast.error('Error fetching users');
      }
    } catch (error) {
      toast.error(`Error fetching users: ${error.message}`);
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
        response = await axios.put(`${url}/api/admin/users/${currentUserId}`, userPayload, {
          headers: { token },
        });
      } else {
        response = await axios.post(`${url}/api/admin/users`, userPayload, {
          headers: { token },
        });
      }

      if (response.data.success) {
        toast.success(currentUserId ? 'User updated successfully' : 'User added successfully');
        fetchAllUsers();
        resetForm();
      } else {
        toast.error('Error adding/updating user');
      }
    } catch (error) {
      toast.error(`Error adding/updating user: ${error.message}`);
    }
  };

  const handleEdit = (user) => {
    setName(user.name);
    setEmail(user.email);
    setRole(user.role);
    setCurrentUserId(user._id);
  };

  const handleDelete = async (userId) => {
    try {
      const response = await axios.delete(`${url}/api/admin/users/${userId}`, {
        headers: { token },
      });
      if (response.data.success) {
        toast.success('User deleted successfully');
        fetchAllUsers();
      } else {
        toast.error('Error deleting user');
      }
    } catch (error) {
      toast.error(`Error deleting user: ${error.message}`);
    }
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setRole('user');
    setCurrentUserId(null);
  };

  return (
    <div className="admin-dashboard">
      <Navbar />
      <hr />
      <div className="app-content"> 
        <hr />
        <Sidebar />
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
      </div>
    </div>
  );
};

export default UserManagement;

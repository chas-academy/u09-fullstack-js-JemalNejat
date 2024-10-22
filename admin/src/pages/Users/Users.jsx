/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Users.css'; // You may want to create a specific CSS file for users
import { toast } from 'react-toastify';
import axios from 'axios';

const UserManagement = ({ url }) => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('user'); // Default role
  const [currentUserId, setCurrentUserId] = useState(null); // For update functionality

  const fetchAllUsers = async () => {
    try {
      const response = await axios.get(`${url}/api/users/list`);
      if (response.data.success) {
        setUsers(response.data.data);
      } else {
        toast.error('Error fetching users');
      }
    } catch (error) {
      console.error(error);
      toast.error('Error fetching users');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = currentUserId
        ? await axios.put(`${url}/api/users/update/${currentUserId}`, { name, email, role })
        : await axios.post(`${url}/api/users/add`, { name, email, role });

      if (response.data.success) {
        toast.success(currentUserId ? 'User updated successfully' : 'User added successfully');
        fetchAllUsers(); // Refresh the user list
        resetForm(); // Reset the form
      } else {
        toast.error('Error adding/updating user');
      }
    } catch (error) {
      console.error(error);
      toast.error('Error adding/updating user');
    }
  };

  const handleEdit = (user) => {
    setName(user.name);
    setEmail(user.email);
    setRole(user.role);
    setCurrentUserId(user._id); // Set ID for update
  };

  const handleDelete = async (userId) => {
    try {
      const response = await axios.delete(`${url}/api/users/delete`, { data: { _id: userId } });
      if (response.data.success) {
        toast.success('User deleted successfully');
        fetchAllUsers(); // Refresh the user list
      } else {
        toast.error('Error deleting user');
      }
    } catch (error) {
      console.error(error);
      toast.error('Error deleting user');
    }
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setRole('user');
    setCurrentUserId(null); // Reset the current user ID
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <div className='user-management'>
      <h3>User Management</h3>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button type='submit'>{currentUserId ? 'Update User' : 'Add User'}</button>
        {currentUserId && <button type='button' onClick={resetForm}>Cancel</button>}
      </form>
      
      <div className='user-list'>
        {users.map((user) => (
          <div key={user._id} className='user-item'>
            <p>{user.name} - {user.email} ({user.role})</p>
            <button onClick={() => handleEdit(user)}>Edit</button>
            <button onClick={() => handleDelete(user._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserManagement;

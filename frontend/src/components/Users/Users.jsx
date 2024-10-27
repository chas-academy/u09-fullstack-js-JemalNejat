import React, { useContext, useEffect, useState } from 'react';
import './Users.css';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Sidebar, Navbar } from '../../pages/Admin/AdminDashboard';


import { StoreContext } from '../../context/StoreContext';


const UserManagement = () => {
 const url = "https://u09-fullstack-js-jemalnejat-backend.onrender.com";
 const { token } = useContext(StoreContext);
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('user');
  const [currentUserId, setCurrentUserId] = useState(null);

  // Fetch all users on initial render
     const fetchAllUsers = async () => {
       if (!token) {
           toast.error('You must be logged in to view users.');
           return;
       }
       try {
           const response = await axios.get(`${url}/api/admin/users`, {
               headers: { Authorization: `Bearer ${token}` },
           });
           if (response.data.success) {
               setUsers(response.data.users || []);
           } else {
               toast.error('Error fetching users');
           }
       } catch (error) {
           console.error('Error fetching users:', error);
           toast.error(error.response?.data?.message || 'Error fetching users');
       }
   };
 fetchAllUsers();


  useEffect(() => {
    fetchAllUsers(); // Load users when component mounts
  }, [token]);

  // Handle adding/updating user
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
          headers: { Authorization: `Bearer ${token}` },
        });
      } else {
        response = await axios.post(`${url}/api/admin/users`, userPayload, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }

      if (response.data.success) {
        toast.success(currentUserId ? 'User updated successfully' : 'User added successfully');
        fetchAllUsers();
        resetForm(); // Reset form after adding/updating user
      }
    } catch (error) {
      console.error('Error adding/updating user:', error);
      toast.error(error.response?.data?.message || 'Error adding/updating user');
    }
  };
 

  // Edit an existing user by pre-filling the form
  const handleEdit = (user) => {
    setName(user.name);
    setEmail(user.email);
    setRole(user.role);
    setCurrentUserId(user._id);
  };


  // Delete a user
  const delateUser = async (userId) => {
    if (!userId || !token) return;
    try {
      const response = await axios.delete(`${url}/api/admin/users/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.data.success) {
        toast.success('User deleted successfully');
        fetchAllUsers();
      } else {
        toast.error('Error deleting user');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
      toast.error(error.response?.data?.message || 'Error deleting user');
    }
  };
   delateUser();


 
  // Reset form fields
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
                  <p>
                    {user.name} - {user.email} ({user.role})
                  </p>
                  <button onClick={() => handleEdit(user)}>Edit</button>
                  <button onClick={() => delateUser(user._id)}>Delete</button>
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


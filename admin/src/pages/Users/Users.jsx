import React, { useEffect, useState } from 'react';
import './Users.css';
import { toast } from 'react-toastify';
import axios from 'axios';

const UserManagement = ({ url }) => {
  const [users, setUsers] = useState([]); // State for storing users
  const [name, setName] = useState(''); // State for name input
  const [email, setEmail] = useState(''); // State for email input
  const [role, setRole] = useState('user'); // Default role state
  const [currentUserId, setCurrentUserId] = useState(null); // State for editing user

  // Function to fetch all users
  const fetchAllUsers = async () => {
    try {
      const response = await axios.get(`${url}/api/user/list`); // Fetching users from API
      if (response.data.success) {
        setUsers(response.data.data || []); // Ensure users is an array
      } else {
        toast.error('Error fetching users'); // Show error if fetch fails
      }
    } catch (error) {
      console.error('Fetch Error:', error); // Log the error for debugging
      toast.error('Error fetching users'); // Notify user of the error
    }
  };

  // Fetch users on component mount
  useEffect(() => {
    fetchAllUsers(); // Call the function to fetch users when the component mounts
  }, []);

  // Function to handle form submission for adding or updating user
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    if (!name || !email) {
      toast.error('Please fill all fields');
      return;
    }

    try {
      const response = currentUserId
        ? await axios.put(`${url}/api/user/update/${currentUserId}`, { name, email, role })
        : await axios.post(`${url}/api/user/add`, { name, email, role });

      if (response.data.success) {
        toast.success(currentUserId ? 'User updated successfully' : 'User added successfully');
        fetchAllUsers(); // Refresh the user list after submission
        resetForm(); // Reset form fields
      } else {
        toast.error('Error adding/updating user');
      }
    } catch (error) {
      console.error('Submit Error:', error); // Log the error for debugging
      toast.error('Error adding/updating user');
    }
  };

  // Function to handle user editing
  const handleEdit = (user) => {
    setName(user.name); // Set form fields with user data
    setEmail(user.email);
    setRole(user.role);
    setCurrentUserId(user._id); // Store current user ID for updates
  };

  // Function to handle user deletion
  const handleDelete = async (userId) => {
    try {
      const response = await axios.delete(`${url}/api/user/delete`, { data: { _id: userId } });
      if (response.data.success) {
        toast.success('User deleted successfully'); // Notify deletion success
        fetchAllUsers(); // Refresh the user list
      } else {
        toast.error('Error deleting user'); // Notify error
      }
    } catch (error) {
      console.error('Delete Error:', error); // Log the error for debugging
      toast.error('Error deleting user');
    }
  };

  // Function to reset form fields
  const resetForm = () => {
    setName(''); // Reset name field
    setEmail(''); // Reset email field
    setRole('user'); // Reset role to default
    setCurrentUserId(null); // Clear current user ID
  };

  return (
    <div className="user-management">
      <h3>User Management</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)} // Update name state on change
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update email state on change
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
        {users.length > 0 ? ( // Check if users exist
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

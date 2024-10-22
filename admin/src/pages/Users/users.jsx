/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './users.css';
import { toast } from "react-toastify";
import axios from "axios";
 



const Users = ({ url }) => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null); // For editing a user
  const [newUser, setNewUser] = useState({
    firstName: '',
    lastName: '',
    street: '',
    city: '',
    state: '',
    country: '',
    zipcode: '',
    phone: ''
  });

  // Fetch all users
  const fetchAllUsers = async () => {
    const response = await axios.get(url + "/api/user/list");
    if (response.data.success) {
      setUsers(response.data.data);
    } else {
      toast.error("Error fetching users");
    }
  };

  // Add new user
  const addUserHandler = async () => {
    const response = await axios.post(url + "/api/user/create", newUser);
    if (response.data.success) {
      toast.success("User added successfully");
      setNewUser({
        firstName: '',
        lastName: '',
        street: '',
        city: '',
        state: '',
        country: '',
        zipcode: '',
        phone: ''
      });
      fetchAllUsers(); // Refresh user list
    } else {
      toast.error("Error adding user");
    }
  };

  // Edit user
  const updateUserHandler = async (userId) => {
    const response = await axios.put(url + `/api/user/update/${userId}`, editingUser);
    if (response.data.success) {
      toast.success("User updated successfully");
      setEditingUser(null); // Reset editing mode
      fetchAllUsers(); // Refresh user list
    } else {
      toast.error("Error updating user");
    }
  };

  // Delete user
  const deleteUserHandler = async (userId) => {
    const response = await axios.delete(url + `/api/user/delete/${userId}`);
    if (response.data.success) {
      toast.success("User deleted successfully");
      fetchAllUsers(); // Refresh user list
    } else {
      toast.error("Error deleting user");
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <div className='user add'>
      <h3>User Management Page</h3>
      <div className="user-form">
        <input
          type="text"
          placeholder="First Name"
          value={newUser.firstName}
          onChange={(e) => setNewUser({ ...newUser, firstName: e.target.value })}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={newUser.lastName}
          onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}
        />
        <input
          type="text"
          placeholder="Street"
          value={newUser.street}
          onChange={(e) => setNewUser({ ...newUser, street: e.target.value })}
        />
        <input
          type="text"
          placeholder="City"
          value={newUser.city}
          onChange={(e) => setNewUser({ ...newUser, city: e.target.value })}
        />
        <input
          type="text"
          placeholder="State"
          value={newUser.state}
          onChange={(e) => setNewUser({ ...newUser, state: e.target.value })}
        />
        <input
          type="text"
          placeholder="Country"
          value={newUser.country}
          onChange={(e) => setNewUser({ ...newUser, country: e.target.value })}
        />
        <input
          type="text"
          placeholder="Zipcode"
          value={newUser.zipcode}
          onChange={(e) => setNewUser({ ...newUser, zipcode: e.target.value })}
        />
        <input
          type="text"
          placeholder="Phone"
          value={newUser.phone}
          onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}
        />
        <button onClick={addUserHandler}>Add User</button>
      </div>

      <div className='user-list'>
        {users.map((user, index) => (
          <div key={index} className='user-item'>



           
            <div>
              <p className='user-item-name'>{user.firstName} {user.lastName}</p>
              <div className="user-item-address">
                <p>{user.street},</p>
                <p>{user.city}, {user.state}, {user.country}, {user.zipcode}</p>
              </div>
              <p className='user-item-phone'>{user.phone}</p>
            </div>

            {/* Edit user */}
            {editingUser && editingUser._id === user._id ? (
              <div className="edit-user-form">
                <input
                  type="text"
                  placeholder="First Name"
                  value={editingUser.firstName}
                  onChange={(e) => setEditingUser({ ...editingUser, firstName: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={editingUser.lastName}
                  onChange={(e) => setEditingUser({ ...editingUser, lastName: e.target.value })}
                />
                {/* Add more inputs for address */}
                <button onClick={() => updateUserHandler(user._id)}>Update User</button>
              </div>
            ) : (
              <>
                <button onClick={() => setEditingUser(user)}>Edit</button>
                <button onClick={() => deleteUserHandler(user._id)}>Delete</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;

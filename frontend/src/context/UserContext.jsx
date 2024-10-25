
   import React, { createContext, useContext, useState } from 'react';
   import axios from 'axios';
   import { toast } from 'react-toastify';

   const UserContext = createContext();

   export const UserProvider = ({ children }) => {
     const [users, setUsers] = useState([]);
     const [loading, setLoading] = useState(false);

     const fetchAllUsers = async (token, url) => {
       if (!token) {
         toast.error('You must be logged in to view users.');
         return;
       }
       setLoading(true);
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
       } finally {
         setLoading(false);
       }
     };

     const addUser = async (token, url, userPayload) => {
       try {
         const response = await axios.post(`${url}/api/admin/users`, userPayload, {
           headers: { Authorization: `Bearer ${token}` },
         });
         if (response.data.success) {
           toast.success('User added successfully');
           fetchAllUsers(token, url);
         } else {
           toast.error('Error adding user');
         }
       } catch (error) {
         console.error('Error adding user:', error);
         toast.error(error.response?.data?.message || 'Error adding user');
       }
     };

     const updateUser = async (token, url, userId, userPayload) => {
       try {
         const response = await axios.put(`${url}/api/admin/users/${userId}`, userPayload, {
           headers: { Authorization: `Bearer ${token}` },
         });
         if (response.data.success) {
           toast.success('User updated successfully');
           fetchAllUsers(token, url);
         } else {
           toast.error('Error updating user');
         }
       } catch (error) {
         console.error('Error updating user:', error);
         toast.error(error.response?.data?.message || 'Error updating user');
       }
     };

     const deleteUser = async (token, url, userId) => {
       try {
         const response = await axios.delete(`${url}/api/admin/users/${userId}`, {
           headers: { Authorization: `Bearer ${token}` },
         });
         if (response.data.success) {
           toast.success('User deleted successfully');
           fetchAllUsers(token, url);
         } else {
           toast.error('Error deleting user');
         }
       } catch (error) {
         console.error('Error deleting user:', error);
         toast.error(error.response?.data?.message || 'Error deleting user');
       }
     };

     return (
       <UserContext.Provider value={{ users, loading, fetchAllUsers, addUser, updateUser, deleteUser }}>
         {children}
       </UserContext.Provider>
     );
   };

   export const useUserContext = () => useContext(UserContext);

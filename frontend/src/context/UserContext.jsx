/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const UserContext = createContext(null);

const UserProvider = (props) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const url = "https://u09-fullstack-js-jemalnejat-backend.onrender.com"; // Adjust to your API URL
    const [token, setToken] = useState("");

    // Fetch all users
    const fetchAllUsers = async () => {
        if (!token) {
            toast.error("You must be logged in to view users.");
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
                toast.error("Error fetching users");
            }
        } catch (error) {
            console.error("Error fetching users:", error);
            toast.error(error.response?.data?.message || "Error fetching users");
        } finally {
            setLoading(false);
        }
    };

    // Add a user
    const addUser = async (userPayload) => {
        if (!token) {
            toast.error("You must be logged in to add a user.");
            return;
        }
        try {
            const response = await axios.post(`${url}/api/admin/users`, userPayload, {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (response.data.success) {
                toast.success("User added successfully");
                fetchAllUsers();
            } else {
                toast.error("Error adding user");
            }
        } catch (error) {
            console.error("Error adding user:", error);
            toast.error(error.response?.data?.message || "Error adding user");
        }
    };

    // Update a user
    const updateUser = async (userId, userPayload) => {
        if (!token) {
            toast.error("You must be logged in to update a user.");
            return;
        }
        try {
            const response = await axios.put(`${url}/api/admin/users/${userId}`, userPayload, {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (response.data.success) {
                toast.success("User updated successfully");
                fetchAllUsers();
            } else {
                toast.error("Error updating user");
            }
        } catch (error) {
            console.error("Error updating user:", error);
            toast.error(error.response?.data?.message || "Error updating user");
        }
    };

    // Delete a user
    const deleteUser = async (userId) => {
        if (!token) {
            toast.error("You must be logged in to delete a user.");
            return;
        }
        try {
            const response = await axios.delete(`${url}/api/admin/users/${userId}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (response.data.success) {
                toast.success("User deleted successfully");
                fetchAllUsers();
            } else {
                toast.error("Error deleting user");
            }
        } catch (error) {
            console.error("Error deleting user:", error);
            toast.error(error.response?.data?.message || "Error deleting user");
        }
    };

    // Load users from local storage
    useEffect(() => {
        const loadToken = () => {
            const storedToken = localStorage.getItem("token");
            if (storedToken) {
                setToken(storedToken);
                fetchAllUsers();
            }
        };
        loadToken();
    }, []);

    const contextValue = {
        users,
        loading,
        addUser,
        updateUser,
        deleteUser,
        fetchAllUsers,
        token,
        setToken,
    };

    return (
        <UserContext.Provider value={contextValue}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserProvider;

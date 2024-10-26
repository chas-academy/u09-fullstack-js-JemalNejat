import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const UserContext = createContext(null);

const UserProvider = (props) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const url = "https://u09-fullstack-js-jemalnejat-backend.onrender.com";
    const [token, setToken] = useState(localStorage.getItem("token") || "");

    useEffect(() => {
        if (token) {
            localStorage.setItem("token", token);
        } else {
            localStorage.removeItem("token");
        }
    }, [token]);

    const fetchAllUsers = async () => {
        if (!token) {
            toast.error("Please log in to view users.");
            return;
        }

        setLoading(true);
        try {
            const response = await axios.get(`${url}/api/admin/users`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (response.data.success) {
                setUsers(response.data.users);
            } else {
                toast.error("Error fetching users");
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Error fetching users");
        } finally {
            setLoading(false);
        }
    };

    const addUser = async (userPayload) => {
        if (!token) {
            toast.error("Please log in to add a user.");
            return;
        }

        try {
            const response = await axios.post(`${url}/api/admin/users`, userPayload, {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (response.data.success) {
                toast.success("User added successfully");
                setUsers(prevUsers => [...prevUsers, response.data.user]); // Optimistic update
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Error adding user");
        }
    };

    const updateUser = async (userId, userPayload) => {
        if (!token) {
            toast.error("Please log in to update a user.");
            return;
        }

        try {
            const response = await axios.put(`${url}/api/admin/users/${userId}`, userPayload, {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (response.data.success) {
                toast.success("User updated successfully");
                setUsers(prevUsers => 
                    prevUsers.map(user => user.id === userId ? response.data.user : user)
                ); // Optimistic update
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Error updating user");
        }
    };

    const deleteUser = async (userId) => {
        if (!token) {
            toast.error("Please log in to delete a user.");
            return;
        }

        try {
            const response = await axios.delete(`${url}/api/admin/users/${userId}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (response.data.success) {
                toast.success("User deleted successfully");
                setUsers(prevUsers => prevUsers.filter(user => user.id !== userId)); // Optimistic update
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Error deleting user");
        }
    };

    const contextValue = {
        users,
        loading,
        token,
        setToken,
        addUser,
        updateUser,
        deleteUser,
        fetchAllUsers,
    };

    return (
        <UserContext.Provider value={contextValue}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserProvider;

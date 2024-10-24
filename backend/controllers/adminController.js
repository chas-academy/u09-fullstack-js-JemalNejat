import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import validator from "validator";

// Add user
const addUser = async (req, res) => {
    const { name, password, email } = req.body;
    try {
        // Checking if user already exists
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "User already exists" });
        }

        // Validating email format and strong password
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email!" });
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" });
        }

        // Hashing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new userModel({
            name: name,
            email: email,
            role: "user",
            password: hashedPassword,
        });
        await newUser.save();
        res.json({ success: true, message: "User added successfully" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

// Update user
const updateUser = async (req, res) => {
    const { name, password, email, role } = req.body;
    try {
        // Checking if user exists
        const dbUser = await userModel.findOne({ email });
        if (!dbUser) {
            return res.json({ success: false, message: "Cannot find user to update" });
        }

        // Validating email format and strong password
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email!" });
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" });
        }

        // Hashing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const updatedUser = new userModel({
            name: name,
            email: email,
            role: role,
            password: hashedPassword,
        });
        await updatedUser.save();
        res.json({ success: true, message: "User updated successfully" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

// Delete user
const deleteUser = async (req, res) => {
    const { email } = req.body;
    try {
        const exists = await userModel.findOneAndDelete({ email });
        if (!exists) {
            return res.json({ success: false, message: "Cannot find user to delete" });
        }
        res.json({ success: true, message: "User deleted successfully" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

// Fetch all users
const fetchAllUsers = async (req, res) => {
    try {
        const users = await userModel.find();
        res.json({ success: true, users });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: "Error fetching users" });
    }
};

export { addUser, updateUser, deleteUser, fetchAllUsers };

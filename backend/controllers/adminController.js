import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import validator from "validator";

// Add user

const addUser = async (req, res) => {
  const { name, password, email, role } = req.body;

  try {
    // Checking if user already exists
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User already exists" });
    }

    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email!",
      });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter a strong password",
      });
    }

    // Hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new userModel({
      name: name,
      email: email,
      role: role || "user", // Default to user if no role is provided
      password: hashedPassword,
    });
    await newUser.save();
    res.json({ success: true, message: "User added successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error adding user" });
  }
};

// Update user

const updateUser = async (req, res) => {
  const { name, password, email, role } = req.body;
  const userId = req.params.id; // Get the user ID from the request parameters
  try {
    // Find the user by ID
    const dbUser = await userModel.findById(userId);
    if (!dbUser) {
      return res.json({
        success: false,
        message: "Cannot find user to update",
      });
    }

    // Update user fields
    dbUser.name = name;
    dbUser.email = email;
    dbUser.role = role;

    // Update password if provided
    if (password) {
      if (password.length < 8) {
        return res.json({
          success: false,
          message: "Please enter a strong password",
        });
      }
      const salt = await bcrypt.genSalt(10);
      dbUser.password = await bcrypt.hash(password, salt);
    }

    await dbUser.save();
    res.json({ success: true, message: "User updated successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error updating user" });
  }
};

// Delete user
const deleteUser = async (req, res) => {
  const userId = req.params.id; // Extract user ID from the request parameters
  try {
    const exists = await userModel.findByIdAndDelete(userId); // Use findByIdAndDelete to remove the user by ID
    if (!exists) {
      return res.json({
        success: false,
        message: "Cannot find user to delete",
      });
    }
    res.json({ success: true, message: "User deleted successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error deleting user" });
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

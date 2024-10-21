import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import validator from "validator"

//add user
const addUser = async (req, res) => {
  const { name, password, email } = req.body;
  try {
    //checking is user already exists
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User already exists" });
    }
    //validating email format and strong password
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Please enter valid email!" });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter strong password",
      });
    }
    //hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new userModel({
       name:name,
       email:email,
       role:"user",
       password:hashedPassword 
    })
    const user = await newUser.save()
    res.json({success:true, "User added successfully"})
  } catch (error) {
    console.log(error);
    res.json({success:false,message:"Error"})

  }
};

//update user
const updateUser = async (req, res) => {
  const { name, password, email, role } = req.body;
  try {
    //checking is user already exists
    const dbUser = await userModel.findOne({ email });
    if (!dbUser) {
      return res.json({ success: false, message: "Cannot find user to update" });
    }
    //validating email format and strong password
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Please enter valid email!" });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter strong password",
      });
    }
    //hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const updateUser = new userModel({
       name:name,
       email:email,
       role:role,
       password: hashedPassword 
    })
    const user = await updateUser.save()
    res.json({success:true, "User updated successfully"})
  } catch (error) {
    console.log(error);
    res.json({success:false,message:"Error"})
  }
};

//delete user
const deleteUser = async (req, res) => {
  const { email } = req.body;
  try {
    //checking is user already exists
    const exists = await userModel.findOneAndDelete({ email });
    if (!exists) {
      return res.json({ success: false, message: "Cannot find user to delete" });
    }
    res.json({success:true, "User deleted successfully"})
  } catch (error) {
    console.log(error);
    res.json({success:false,message:"Error"})
  }
};

export { addUser, updateUser, deleteUser };

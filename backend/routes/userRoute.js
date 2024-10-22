import express from "express"
import { loginUser,registerUser,loginAdmin } from "../controllers/userController.js";
 import { addUser, updateUser, deleteUser, fetchAllUsers } from "../controllers/adminController.js";

const userRouter = express.Router()

userRouter.post("/register",registerUser)
userRouter.post("/login",loginUser)
userRouter.post("/login/admin", loginAdmin); 
 // Fetch all users
  
   userRouter.get('/list', fetchAllUsers);

   // Add user
   userRouter.post('/add', addUser);

   // Update user
   userRouter.put('/update/:id', updateUser);

   // Delete user
   userRouter.delete('/delete', deleteUser);

export default userRouter;











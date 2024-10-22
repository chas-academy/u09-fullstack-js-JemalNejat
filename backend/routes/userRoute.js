import express from "express"
import { loginUser,registerUser,loginAdmin } from "../controllers/userController.js";
 import { addUser, updateUser, deleteUser, fetchAllUsers } from "../controllers/userController.js";

const userRouter = express.Router()

userRouter.post("/register",registerUser)
userRouter.post("/login",loginUser)
userRouter.post("/login/admin", loginAdmin); 
 // Fetch all users
   router.get('/list', fetchAllUsers); // Add this line to fetch users

   // Add user
   router.post('/add', addUser);

   // Update user
   router.put('/update/:id', updateUser);

   // Delete user
   router.delete('/delete', deleteUser);

export default userRouter;


 
 
  

  



import express from "express"
import { loginUser,registerUser,loginAdmin } from "../controllers/userController.js";
 import { addUser, updateUser, deleteUser, fetchAllUsers } from "../controllers/adminController.js";

const userRouter = express.Router()

userRouter.post("/register",registerUser)
userRouter.post("/login",loginUser)
userRouter.post("/login/admin", loginAdmin); 
 
  
   userRouter.get('/list', fetchAllUsers);
   userRouter.post('/add', addUser);
   userRouter.put('/update/:id', updateUser);
   userRouter.delete('/delete', deleteUser);

export default userRouter;











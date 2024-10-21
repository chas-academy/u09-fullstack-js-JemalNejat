import express from "express"
import { addUser, updateUser, deleteUser } from "../controllers/adminController.js"
 
import adminMiddleware from "../middleware/admin.js"; 
import authMiddleware from '../middleware/auth.js';

const adminRouter = express.Router()

adminRouter.post("/users/add", [authMiddleware, adminMiddleware], addUser)
adminRouter.put("/users/update", [authMiddleware, adminMiddleware], updateUser)
adminRouter.delete("/users/delete", [authMiddleware, adminMiddleware], deleteUser)

export default adminRouter;

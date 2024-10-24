import express from "express";
import { addUser, updateUser, deleteUser, fetchAllUsers } from "../controllers/adminController.js";
 
import adminMiddleware from "../middleware/admin.js"; 
import authMiddleware from '../middleware/auth.js';

const adminRouter = express.Router();

adminRouter.get("/users", [authMiddleware, adminMiddleware], fetchAllUsers);
adminRouter.post("/users", [authMiddleware, adminMiddleware], addUser);
adminRouter.put("/users/:id", [authMiddleware, adminMiddleware], updateUser);
adminRouter.delete("/users/:id", [authMiddleware, adminMiddleware], deleteUser);

export default adminRouter;

import express from "express"
import { addToCart,RemoveFromCart,getCart } from "../controllers/cartController.js"
import authMiddleware from "../middleware/auth.js";
import adminMiddleware from "../middleware/admin.js";

const cartRouter = express.Router();

cartRouter.post("/add",[authMiddleware, adminMiddleware], addToCart)
cartRouter.post("/remove",[authMiddleware, adminMiddleware],RemoveFromCart)
cartRouter.post("/get",[authMiddleware, adminMiddleware],getCart)

export default cartRouter;
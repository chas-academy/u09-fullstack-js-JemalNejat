import express from "express";
import {
  addToCart,
  RemoveFromCart,
  getCart,
} from "../controllers/cartController.js";
import authMiddleware from "../middleware/auth.js";

const cartRouter = express.Router();

cartRouter.post("/add", [authMiddleware], addToCart);
cartRouter.post("/remove", [authMiddleware], RemoveFromCart);
cartRouter.post("/get", [authMiddleware], getCart);

export default cartRouter;

import mongoose from "mongoose";

// Define user schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: {type:String,default:user},
    password: { type: String, required: true },
    cartData: { type: Object, default: {} },
}, { minimize: false });

// Create or retrieve the user model
const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;

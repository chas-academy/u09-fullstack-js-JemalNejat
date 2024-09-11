import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://nejatjemal:Najat1979@cluster0.5c8ngyb.mongodb.net/U09').then(()=>console.log("DB Connected"));
}
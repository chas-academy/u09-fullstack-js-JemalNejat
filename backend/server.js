import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import adminRouter from "./routes/adminRoute.js"; 
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"

import 'dotenv/config'

// app config
const app = express()
const port = process.env.PORT || 4000;

// midlleware 
app.use(express.json())
app.use(cors())

// db connection
connectDB();

// api endpoint 
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)
app.use("/api/admin",adminRouter)

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
console.log(`Server Started on http://localhost:${port}`)
})
//mongodb+srv://nejatjemal:<db_password>@cluster0.5c8ngyb.mongodb.net/?

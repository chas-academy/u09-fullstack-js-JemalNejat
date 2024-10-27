import Stripe from "stripe";
import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import { response } from "express";
import 'dotenv/config'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Placing user order for frontend
const placeOrder = async (req, res) => {
    const frontend_url = "https://u09-fullstack-js-jemalnejat-frontend.onrender.com/"
    try {
        const newOrder = new orderModel({
            userId:req.body.userId,
            items:req.body.items,
            amount:req.body.amount,
            address:req.body.address,
            status: "Food processing"

        })
        await newOrder.save();
        await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}});
        const line_items = req.body.items.map((item)=>({
            price_data:{
                currency:"sek",
                product_data:{
                    name:item.name
                },
                unit_amount:item.price*100
            },
            quantity:item.quantity  
        }))
         line_items.push({
            price_data:{
                currency:"sek",
                product_data:{
                    name:"Delivery Charges"
                },
                unit_amount:20*100
            },
            quantity:1
         })
         const session = await stripe.checkout.sessions.create({
            line_items:line_items,
            mode:'payment',
            success_url:`${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url:`${frontend_url}/verify?success=false&orderId=${newOrder._id}`
         })
        
        res.json({ success: true, session_url: session.url });

    }catch (error) {
        console.log(error);
       
        res.json({ success: false, message: "Error" });




    }
};
const verifyOrder = async (req, res) => {
   const { orderId, success } = req.body;

   // Basic validation for inputs
   if (!orderId || typeof success === 'undefined') {
       return res.status(400).json({ success: false, message: "Invalid input" });
   }

   try {
       if (success === "true") {
           // Update the order's payment status to true
           const updateResult = await orderModel.findByIdAndUpdate(
               orderId,
               { payment: true },
               { new: true } // Option to return the updated document
           );

           if (!updateResult) {
               // If no document was found with the provided orderId
               return res.status(404).json({ success: false, message: "Order not found" });
           }

           res.json({ success: true, message: "Paid", order: updateResult });
       } else {
           // Delete the order if payment was not successful
           const deleteResult = await orderModel.findByIdAndDelete(orderId);

           if (!deleteResult) {
               // If no document was found with the provided orderId
               return res.status(404).json({ success: false, message: "Order not found" });
           }

           res.json({ success: false, message: "Not Paid", deletedOrderId: orderId });
       }
   } catch (error) {
       console.error('Error in verifyOrder:', error);
       res.status(500).json({ success: false, message: "Server error" });
   }
};

//user order for fronten
const userOrders = async (req,res) => {
try {
 const orders = await orderModel.find({userId:req.body.userId})
 res.json({success:true,data:orders})
}catch (error) {
    console.log(error);
    res.json({success:false,message:"Error"})


}
}
//listin orders for admin panel
const listOrders = async (req,res) => {
    try {
          const orders = await orderModel.find({});
          res.json({success:true,data:orders})
    }catch (error) {
        console.log(error);
    res.json({success:false,message:"Error"})

    }

}
//api for apdating order status
const updateStatus = async (req,res) => {
    try {
          await orderModel.findByIdAndUpdate(req.body.orderId,{status:req.body.status});
          res.json({success:true,message:"Status Updated"})
    }catch (error) {
        console.log(error);
    res.json({success:false,message:"Error"})

    }

}


export { placeOrder,verifyOrder,userOrders,listOrders,updateStatus }

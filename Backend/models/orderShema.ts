import mongoose from "mongoose";
import { orderInterface } from "../interfaces/order";

const orderSchema= new mongoose.Schema<orderInterface>({
    
     userId:{
        type:String,
        required:true
     },
     products:[
    {
        productId:{
            type:String,
            required:true
        },
        quantity:{
            type:Number,
            required:true,
            default:1
        }
    }
     ],
    amount:{
        type:Number,
        required:true
    },
    address:{
       type:Object,
       required:true,
    },
    status:{
        type:String,
        default:"pending"
    }
},{timestamps:true})

export const orderModel= mongoose.model("order",orderSchema)
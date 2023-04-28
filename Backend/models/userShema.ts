import { user } from "../interfaces/user";
import mongoose from "mongoose";

const userSchema= new mongoose.Schema<user>({
   firstName:{
    type:String,
    required:true
   },
   lastName:{
    type:String,
    required:true
   },
   email:{
    type:String,
    required:true,
    unique:true
   },
   password:{
    type:String,
    required:true
   },
   isAdmin:{
    type:Boolean,
    default:false
   }
})

export const userModel = mongoose.model("user",userSchema)
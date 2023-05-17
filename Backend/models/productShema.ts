import mongoose from "mongoose";
import { productInterface } from "../interfaces/product";

const productSchema=new mongoose.Schema<productInterface>({

 title:{
    type:String,
    required:true
 },
 description:{
    type:String,
    required:true
 },
 image:{
    type:String,
    required:true,
 },
 size:{
    type:Number,
    required:true
 },
 color:{
    type:String,
    required:true
 },
 prize:{
    type:Number,
    required:true
 },
},{timestamps:true})

export const productModel=mongoose.model('products',productSchema)
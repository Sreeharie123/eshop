import mongoose from "mongoose"
import { category } from "../interfaces/categories"


const categorySchema=new mongoose.Schema<category>(
    {
        categoryName:{
            type:String,
            required:true,
            unique:true
        },
        quantity:{
            type:Number,
            required:true
        }
    
    }
)

export const categoryModel=mongoose.model('category',categorySchema)
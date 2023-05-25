import { Request, Response } from "express"
import { category } from "../interfaces/categories"
import { categoryModel } from "../models/categorySchema"


export const addCategory=async(req:Request,res:Response)=>{
    try {
    const newCategory=new categoryModel<category>(
      {
          categoryName:req.body.categoryName,
          quantity:req.body.quantity,
          imgUrl:req.body.imgUrl
      }
    )
    if(!newCategory) res.status(400).json("Category is not found")
     
    const uniqCategoryName=await categoryModel.findOne({categoryName:req.body.categoryName})
  
    if(uniqCategoryName?.categoryName==req.body.categoryName) return res.status(400).json("Category name is already exist")
  
    const saveCategory=await newCategory.save()
  
  
    res.status(200).json(saveCategory)
    } catch (error) {
       res.status(500).json(error)
    }
  
  }

  export const editCategory=async(req:Request,res:Response)=>{
    try {
        const updatedCategory=await categoryModel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        if(!updatedCategory) res.status(400).json("category is not updated")
          
        res.status(200).json(updatedCategory)
    } catch (error) {
        res.status(500).json("Id is not valid")
    }
}


export const deleteCategory=async (req:Request,res:Response)=>{
    try {
         const deletedCategory=categoryModel.findByIdAndDelete(req.params.id)
         res.status(200).json("category is deleted successfully")
    } catch (error) {
        res.status(500).json(error)
    }
}


export const viewCategory=async (req:Request,res:Response)=>{
    try {
        const allCategory= await categoryModel.find()
        if(!allCategory) res.status(400).json("No category is found")
        res.status(200).json(allCategory)

    } catch (error) {
        res.status(500).json(error) 
    }
}


export const singleCategory=async (req:Request,res:Response)=>{
    try {
        const singleCategory=await categoryModel.findById(req.params.id)
        res.status(200).json(singleCategory)
    } catch (error) {
        res.status(500).json(error) 
    }
}
import express from "express"
import { categoryModel } from "../models/categorySchema"
import { category } from "../interfaces/categories"

const route=express.Router()

//Add categories
route.post('/add',async(req,res)=>{
  try {
  const newCategory=new categoryModel<category>(
    {
        categoryName:req.body.categoryName,
        quantity:req.body.quantity
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

})

//Edit categories
route.put('/edit/:id',async(req,res)=>{
    try {
        const updatedCategory=await categoryModel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        if(!updatedCategory) res.status(400).json("category is not updated")
          
        res.status(200).json(updatedCategory)
    } catch (error) {
        res.status(500).json("Id is not valid")
    }
})

//Delete category
route.delete('/delete/:id',async (req,res)=>{
    try {
         const deletedCategory=categoryModel.findByIdAndDelete(req.params.id)
         res.status(200).json("category is deleted successfully")
    } catch (error) {
        res.status(500).json(error)
    }
})

//view category
route.get('/all',async (req,res)=>{
    try {
        const allCategory= await categoryModel.find()
        if(!allCategory) res.status(400).json("No category is found")
        res.status(200).json(allCategory)

    } catch (error) {
        res.status(500).json(error) 
    }
})

//view single category
route.get('singleCategory/:id',async (req,res)=>{
    try {
        const singleCategory=await categoryModel.findById(req.params.id)
        res.status(200).json(singleCategory)
    } catch (error) {
        res.status(500).json(error) 
    }
})

export const categoryRoute=route
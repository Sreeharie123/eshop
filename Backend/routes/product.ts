import express from "express"
const router=express.Router()
import { verifyTokenAndAdmin } from "../middlewares/verify"
import { productModel } from "../models/productShema"
import { productInterface } from "../interfaces/product"

//Create Product
router.post('/create',verifyTokenAndAdmin,async(req,res)=>{
    const product= new productModel<productInterface>({
        title:req.body.title,
        description:req.body.description,
        image:req.body.image,
        categories:req.body.categories,
        color:req.body.color,
        prize:req.body.prize,
        size:req.body.size
    })
    try {
        const savedProduct=await product.save()
        res.status(200).json(savedProduct)
    } catch (error) {
        res.status(500).json(error)
    }
})

//update Product
router.put('/update/:ProductId',verifyTokenAndAdmin,async(req,res)=>{
    try {
        const updatedProduct= await productModel.findByIdAndUpdate(req.params.ProductId,
            {
                $set:req.body
            },{new:true})
            res.status(200).json(updatedProduct)
    } catch (error) {
        res.status(500).json(error)
    }
})

//delete Product
router.delete('/delete/:productId',verifyTokenAndAdmin,async(req,res)=>{
    try {
        const deletedProduct= await productModel.findByIdAndDelete(req.params.productId)
        res.status(200).json("Product deleted Successfully")
    } catch (error) {
        res.status(200).json(error)
    }
})

//Get Products
router.get('/all',async(req,res)=>{
    try {
        const allProduct= await productModel.find()
        res.status(200).json(allProduct)
    } catch (error) {
      res.status(400).json(error)  
    }
})

//Get SingleProduct
router.get('/single/:productId',async(req,res)=>{
    try {
        const singleProduct=await productModel.findById(req.params.productId)
        res.status(200).json(singleProduct)
    } catch (error) {
        res.status(500).json(error)
    }
})


router.get('/allCategory',async(req,res)=>{
   try {
    const allCategory=await productModel.aggregate(
        [
            {$group:{_id:"$categories"}},
            { $project: { _id: 0, categories: "$_id" } }
        ]
    )
    res.status(200).json(allCategory)
   } catch (error) {
    res.status(500).json(error)
   }
})

export const product=router
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

//Get



export const product=router

const express= require('express')
const router=express.Router()
const productModel=require('../model/productSchema')
const {ObjectId}=require('mongodb')

router.post('/create',async (req,res)=>{
    const product=new productModel({
        name:req.body.name,
        description:req.body.description,
        prize:req.body.prize,
        stock:req.body.stock,
        categories:req.body.categories,
        reviews:req.body.reviews
    })
    try {
        const saveProduct=await product.save()
        res.status(201).send(saveProduct)
    } catch (error) {
        res.status(500).send(error)
    }
  
})

router.put('/update/:id',async(req,res)=>{
    const updatedData=req.body
    const id=req.params.id
    const updatedProduct= await productModel.updateOne(
        {_id:new ObjectId(id)},
        {$set:updatedData})
        if(!updatedProduct) return res.status(502).send('Not updated product')
        res.send(updatedProduct)
})

router.delete('/delete/:id',async(req,res)=>{
    const id=req.params.id
    const deletedProduct=await productModel.deleteOne(
        {_id:new ObjectId(id)}
    )
    if(!deletedProduct) return res.status(502).send('Not updated product')
    res.send(deletedProduct)
})

module.exports=router

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
    try {
        const updatedProduct= await productModel.updateOne(
            {_id:new ObjectId(id)},
            {$set:updatedData})
            if(!updatedProduct) return res.status(502).send('Not updated the product')
            res.send(updatedProduct)
        
    } catch (error) {
        res.send("Id is not valid")
    }
})

router.delete('/delete/:id',async(req,res)=>{
    const id=req.params.id
    const deletedProduct=await productModel.deleteOne(
        {_id:new ObjectId(id)}
    )
    if(!deletedProduct) return res.status(502).send('Not deleted the product')
    res.send(deletedProduct)
})

router.get('/every',async (req,res)=>{
    const allProducts=await productModel.find()
    if(!allProducts) return res.status(502).send('Not get all product')
    res.send(allProducts)
})

router.get('/unique/:id', async (req,res)=>{
    const id=req.params.id
    const singleProduct=await productModel.findById(id)
    if(!singleProduct) return res.status(502).send('Not get single product')
    res.send(singleProduct)
})

module.exports=router
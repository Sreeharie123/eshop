import express from "express"
import { verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization } from "../middlewares/verify"
import { orderModel } from "../models/orderShema"
const router=express.Router()


//create
router.post('/create/:id',verifyTokenAndAuthorization,async(req,res)=>{
    const newOrder=new orderModel({
        userId:req.params.id,
        products:req.body.products,
        address:req.body.address,
        amount:req.body.amount,
        status:req.body.status
    })
    try {
        const order=await newOrder.save()
        res.status(200).json(order)
    } catch (error) {
        res.status(500).json(error)
    }
})

//update
router.put('/update/:id',verifyTokenAndAuthorization,async(req,res)=>{
    try {
        const updateOrder=await orderModel.updateOne(
            {userId:req.params.id},
            {$set:req.body},
            {new:true}
            )
            if(updateOrder.modifiedCount==0) return res.status(400).json("order is null")
      res.status(200).json(updateOrder)
    } catch (error) {
        res.status(200).json(error)
    }
})


//Delete
router.delete('/delete/:id',verifyTokenAndAdmin,async(req,res)=>{
    try {
        const deletedOrder=await orderModel.deleteOne({userId:req.params.id})
        res.status(200).json(deletedOrder)

    } catch (error) {
        res.status(500).json(error)
    }
})

//Get User order
 router.get('/user/:id',verifyTokenAndAuthorization,async(req,res)=>{
    try {
        const userOrder=await orderModel.find({userId:req.params.id})
        res.status(200).json(userOrder)
    } catch (error) {
        res.status(500).json(error)
    }
 })

//Ger All orders
router.get('/all',verifyTokenAndAdmin,async(req,res)=>{
    try {
        const allOrders=await orderModel.find()
        res.status(200).json(allOrders)
    } catch (error) {
        res.status(500).json(error)
    }
})


export const order =router
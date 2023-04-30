import express from "express"
import { verifyTokenAndAuthorization } from "../middlewares/verify"
import { cartModel } from "../models/cartSchema"
import { cartInterface } from "../interfaces/cart"
const router=express.Router()


//Create Cart
router.post('/create/:id',verifyTokenAndAuthorization,async(req,res)=>{
    const newProduct={productId:req.body.products[0].productId, quantity:req.body.products[0].quantity}
    const newCart= new cartModel<cartInterface>({
             userId:req.params.id,
             products:[
                {
                   productId:req.body.products[0].productId,
                   quantity:req.body.products[0].quantity
                }
             ]
    })
    const cart=await cartModel.find({userId:req.params.id})
   if(cart.length===0){
    try {
        const saveNewCart=await newCart.save()
        res.status(500).json(saveNewCart)
    } catch (error) {
        res.status(500).json(error)
    }
   }else{
    const insertProduct=await cartModel.updateOne({userId:req.params.id},
        {$push:{products: newProduct}},{new:true})
      res.status(200).json(insertProduct)
   }
       
})

export const cart=router

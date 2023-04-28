import express from "express"
import { checkEmail } from "../middlewares/verify"
import { userModel } from "../models/userShema"
import bcrypt from 'bcrypt'
const router=express.Router()
router.get('/register',checkEmail,async(req,res)=>{
    const salt = await bcrypt.genSalt(10)
    const hashPass = await bcrypt.hash(req.body.password, salt)
    const newUser= new userModel({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        password:hashPass
    })
    try {
        const user=await newUser.save()
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)

    }  
})



export const user=router
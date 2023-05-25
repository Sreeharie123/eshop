import { Request, Response } from "express"
import { fullUser } from "../interfaces/user"
import { userModel } from "../models/userShema"
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"

export const login = async(req:Request,res:Response)=>{
    const user=await userModel.findOne<fullUser>({email:req.body.email})
    if(!user) return res.status(500).json("There is no user with this email")

    const realPassword=await bcrypt.compare(req.body.password,user._doc.password)
    if(!realPassword) return res.status(500).json("password is wrong")
    
    const Secrete_jwt_Key=process.env.JWT_KEY as string

    const AccessToken= jwt.sign({
        id:user._doc._id,
        isAdmin:user._doc.isAdmin
    },Secrete_jwt_Key,{expiresIn:"3d"})
    const{password,...others}=user._doc
    res.status(200).json({...others,AccessToken})
}


export const register= async(req:Request,res:Response)=>{
    try {
    const salt = await bcrypt.genSalt(10)
    const hashPass = await bcrypt.hash(req.body.password, salt)
    const newUser= new userModel({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        password:hashPass
    })
        const user=await newUser.save()
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)

    }  
}
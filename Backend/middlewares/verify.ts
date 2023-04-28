import { NextFunction, Request, Response } from "express";
import { userModel } from "../models/userShema";

export async function checkEmail(req:Request,res:Response,next:NextFunction){
const userEmail= await userModel.findOne({email:req.body.email})
if(userEmail) return res.status(500).json("Email is already exist")
next()
}

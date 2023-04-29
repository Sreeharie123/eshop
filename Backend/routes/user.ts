import express from "express";
import { userModel } from "../models/userShema";
import { verifyTokenAndAdmin, verifyTokenAndAuthorization } from "../middlewares/verify";

const router = express.Router();

//User Update
router.put("/update/:id", verifyTokenAndAuthorization,async(req, res) => {
    const { error } = req.body
    if (error) return res.status(500).send(error[0].message)
    try {
        const updatedUser =await userModel.findByIdAndUpdate(
            req.params.id,
            {
              $set: req.body,
            },
            { new: true })
            res.status(200).json(updatedUser)
    } catch (error) {
        res.status(500).json(error)
    }
});

//user delete
router.delete("/delete/:id",verifyTokenAndAuthorization,async(req,res)=>{
    const {error}=req.body
    if(error) return res.status(500).json(error[0].message)
    try {
        const deleteUser=await userModel.findByIdAndDelete(req.params.id)
        res.status(200).json("Deleted successfully")
    } catch (error) {
        res.status(500).json(error)
    }
})

//Get Single User Details
router.get('/singleUser/:id',verifyTokenAndAdmin,async(req,res)=>{
    try {
        const user= await userModel.findById(req.params.id)
         res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
})

//Get allUser
router.get('/allUser',verifyTokenAndAdmin,async(req,res)=>{
    try {
        const allUser=await userModel.find()
        res.status(500).json(allUser)
    } catch (error) {
        res.status(500).json(error)
    }
})

export const user=router
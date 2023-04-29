import express from "express";
import { userModel } from "../models/userShema";
import { verifyTokenAndAuthorization } from "../middlewares/verify";

const router = express.Router();

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

export const user=router
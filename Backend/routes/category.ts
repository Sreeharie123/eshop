import express from "express"
import { addCategory, deleteCategory, editCategory, singleCategory, viewCategory } from "../controller/category"
import { verifyToken, verifyTokenAndAdmin } from "../middlewares/verify"

const route=express.Router()

//Add categories
route.post('/add',verifyTokenAndAdmin,addCategory)

//Edit categories
route.put('/edit/:id',verifyTokenAndAdmin,editCategory)

//Delete category
route.delete('/delete/:id',verifyTokenAndAdmin,deleteCategory)

//view category
route.get('/all',verifyToken,viewCategory)

//view single category
route.get('singleCategory/:id',verifyToken,singleCategory)

export const categoryRoute=route
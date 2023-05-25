import express from "express"
import { checkEmail } from "../middlewares/verify"
import { login, register } from "../controller/reg"
const router=express.Router()

//Create User
router.post('/register',checkEmail,register)

//Login User
router.post('/login',login)

export const auth=router
import express, { urlencoded } from "express"
import { checkEmail } from "../middlewares/verify"
import { login, register } from "../controller/reg"
const router=express.Router()

//Create User
router.post('/register',checkEmail,login)

//Login User
router.post('/login',register)

export const auth=router
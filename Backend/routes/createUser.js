const express=require('express')
const router=require('express').Router()
const userModel=require('../model/userSchma')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

router.post('/signup',check, async (req,res)=>{

    const salt=await bcrypt.genSalt(10)
    const hashPass=await bcrypt.hash(req.body.password,salt)
    const newUser={
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        password:hashPass
    }

    try{
        const user=await userModel.create(newUser)
        res.send(user)
    }catch(err){
      res.send(err)
    }
})

async function check(req,res,next){
    const userEmail=await userModel.findOne({email:req.body.email})
    if(userEmail){
    return res.status(500).send('Already existed user')
    }
      next()
    
}

router.post('/login',async(req,res)=>{
     const userOne=await userModel.findOne({email:req.body.email})
     if(!userOne) return res.status(400).send("User not register")
     const decrypt=await bcrypt.compare(req.body.password,userOne.password)
     if(!decrypt) return res.status(400).send("password is wrong")
     const token=jwt.sign({id:userOne.id},process.env.JWTKEY,{expiresIn:'3d'})
     res.send({token,userOne}) 

})

router.post('/verifyToken', (req, res) => {
    const token = req.body.token
    if (token) {
        try {
            const secret = process.env.JWTKEY;

            const decodedToken = jwt.verify(token, secret);
            return res.status(200).send(true)
        } catch {
            return res.status(500).send('leo');
        }
    } else {
        return res.status(500).send('shah')
    }
})


module.exports=router

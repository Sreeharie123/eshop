import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { auth } from './routes/auth';
import cors from 'cors'
import {user} from './routes/user'
const app = express();
const port = 4000;
app.use(cors())
app.use(express.json())
dotenv.config();
const mongooseUrl=process.env.URL as string

mongoose.connect(mongooseUrl).then(()=>{
  console.log("database connected successfully")
})

app.use("/auth",auth)
app.use('/user',user)


app.listen(port, function () {
    console.log(`App is listening on port ${port} !`);
});
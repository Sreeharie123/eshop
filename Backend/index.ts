import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { auth } from './routes/auth';
import cors from 'cors'
import {user} from './routes/user'
import { product } from './routes/product';
import { cart } from './routes/cart';
import { order } from './routes/order';
import { categoryRoute } from './routes/category';

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
app.use('/product',product)
app.use('/cart',cart)
app.use('/order',order)
app.use('/categories',categoryRoute)

app.listen(port, function () {
    console.log(`App is listening on port ${port} !`);
});
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
const app = express();
const port = 8000;
app.use(express.json())
dotenv.config();
const mongooseUrl=process.env.URL as string

mongoose.connect(mongooseUrl).then(()=>{
  console.log("database connected successfully")
})

app.get('/', (req, res) => {
    res.send('Hello world!');
});











app.listen(port, function () {
    console.log(`App is listening on port ${port} !`);
});
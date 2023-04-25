//import the express library
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const dotenv = require('dotenv');
const userCreate=require('./routes/createUser')
const product=require('./routes/product')


//config dotenv
dotenv.config()

app.use(express.json())
mongoose
  .connect(process.env.URL)
  .then((data) => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log(error);
  });

  
  app.use('/user',userCreate)
  app.use('/product',product)
  



//listening the port 4000
app.listen(process.env.PORT || 5000, () => {
  console.log("Server running on port 5000 ");
});


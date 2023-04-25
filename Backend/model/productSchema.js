const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    prize:{
        type:Number,
        required:true
    },
    stock:{
        type:Number,
        required:true
    },
    categories:{
        type:Array,
        required:true
    },
    reviews:{
        type:Array
    }
})

module.exports=mongoose.model("products",productSchema)


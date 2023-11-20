const mongoose=require("mongoose");
const product_schema=new mongoose.Schema({
    id:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    image_url:{
        type:String,
        required:true
    }

})


const Product=new mongoose.model("Product",product_schema);

module.exports = Product;
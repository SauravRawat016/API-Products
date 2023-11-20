const mongoose = require("mongoose");

const URL="mongodb+srv://Saurav_Rawat:a1b2c3@cluster0.kwh07ci.mongodb.net/userdb?retryWrites=true&w=majority";

mongoose.connect(URL,{
}).then(()=>{
    console.log("Connection successful");
}).catch((err)=>{
    console.log("Connection failed");
})
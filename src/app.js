const express=require("express");
const path=require("path");
const app = express();
const hbs=require("hbs");


require("./db/conn.js");

const Product=require("./models/registers.js")

const port = process.env.PORT || 3000;

const static_path=path.join(__dirname,"../public");
const Template_path=path.join(__dirname,"../Template/views");
const partials_path=path.join(__dirname,"../Template/partials");

app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views",Template_path);
hbs.registerPartials(partials_path);

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.get("/",(req,res)=>{
    res.render("index")
});

app.get("/register",(req,res)=>{
    res.render("register");
})



app.post("/register",async(req,res)=>{
try{
    const n_product=new Product({
        id : new Date().getTime(),
        name : req.body.name,
        price:req.body.price,
        gender:req.body.gender,
        image_url : req.body.image_url,
        
    })

    const registered=await n_product.save();
    res.status(201).render(index);
}
catch(err){
res.status(400).send(err);
}
})

app.listen(port,()=>{
    console.log(`Server is running at port no .${port} `);
})
const express = require("express");
const port = 8000;

const app = express();

app.set("view engine","ejs");
app.use(express.urlencoded());


app.get("/",(req,res)=>{
    res.render("index");
})

app.get("/about",(req,res)=>{
    res.render("about");
})


app.post("/insert",(req,res)=>{
    console.log(req.body);
    res.redirect("/")
})

app.listen(port,(err)=>{
    err ? console.log(err) :  console.log(`server Started at http://localhost:${port}`);
    
})
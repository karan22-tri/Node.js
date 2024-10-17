const express = require("express")
const port = 1008

const app = express()
const db = require("./config/db")
const adminSchema = require("./config/dbSchema")


app.set("view engine","ejs")
app.use(express.urlencoded());



app.get("/",async(req,res)=>{
    let data = await adminSchema.find({})
    res.render("index",{data});
})

app.post("/insert",async(req,res)=>{
    let data = await adminSchema.create(req.body)
   data && res.redirect("back")
})

app.get("/delete",async(req,res)=>{
    let deletedata = await adminSchema.findByIdAndDelete(req.query.id)
    deletedata && res.redirect("back")
})

app.get("/edit",async(req,res)=>{
    let singledata = await adminSchema.findById(req.query.id)
    singledata && res.render("edit",{singledata})
})

app.post("/update",async(req,res)=>{
    let data = await adminSchema.findByIdAndUpdate(req.body.id,req.body)
    data && res.redirect("/")
})

app.listen(port,(err)=>{
    err ? console.log(err) : console.log(`server started at http://localhost:${port}`)
})
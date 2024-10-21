const express = require("express")
const port = 1008

const app = express()
const db = require("./config/db")
const path = require("path")
const fs = require("fs")
const adminSchema = require("./config/dbSchema")
const multer = require("multer")

const Storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,"uploads/")
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname + "-" + Date.now())
    }
})

const upload = multer({ storage: Storage}).single("image")

app.set("view engine","ejs")
app.use(express.urlencoded());
app.use("/uploads",express.static(path.join(__dirname,"uploads")))


app.get("/",async(req,res)=>{
    let data = await adminSchema.find({})
    res.render("index",{data});
})

app.post("/insert",upload,async(req,res)=>{
    req.body.image = req.file.path
    let data = await adminSchema.create(req.body)
   data && res.redirect("back")
})

app.get("/delete",async(req,res)=>{
    let singledata = await adminSchema.findById(req.query.id)
    console.log(singledata)
    fs.unlinkSync(singledata.image)
    let deletedata = await adminSchema.findByIdAndDelete(req.query.id)
    deletedata && res.redirect("back")
})

app.get("/edit",async(req,res)=>{
    let singledata = await adminSchema.findById(req.query.id)
    singledata && res.render("edit",{singledata})
})

app.post("/update",upload,async(req,res)=>{
    let img = "";
    let singledata = await adminSchema.findById(req.body.id)
    req.file ? img = req.file.path : img = singledata.image
    req.file && fs.unlinkSync(singledata.image)
    req.body.image = img
    let data = await adminSchema.findByIdAndUpdate(req.body.id,req.body)
    data && res.redirect("/")
})

app.listen(port,(err)=>{
    err ? console.log(err) : console.log(`server started at http://localhost:${port}`)
})
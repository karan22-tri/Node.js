const express=require('express')

const Routes=express.Router();
const multer=require('multer');
const ProductCtl=require('../controllers/ProductCtl')
const passport=require('passport');


const Storage=multer.diskStorage({
  destination : (req,file,cb)=>{
   cb(null,"uploads/")
  },
  filename : (req,file,cb) =>{
   cb(null,file.fieldname+"-"+Date.now())
  }
  
})

const uploadspics=multer({storage : Storage}).single("image")



Routes.get("/addviewproduct",ProductCtl.addviewproduct);
Routes.post("/insertproduct",uploadspics,ProductCtl.insertProduct);
Routes.get("/viewproduct",ProductCtl.viewproduct);
Routes.delete("/deleteproduct",ProductCtl.deleteproduct)
Routes.get("/editroduct",ProductCtl.editproduct)
Routes.put("/updateproduct",ProductCtl.updateproduct)


module.exports=Routes;
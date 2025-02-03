const express = require("express");
const routes = express.Router();


const adminctl = require("../controllers/adminctl");


const passport=require('passport');

// const passport=require('../config/Passport')

const multer=require('multer');

const Storage=multer.diskStorage({
  destination : (req,file,cb)=>{
    cb(null,"uploads/")
  },
  filename : (req,file,cb)=>{
    cb(null,file.fieldname+"-"+Date.now());
  }
})

const Uploadspic=multer({storage:Storage}).single("img")




routes.post("/registor",adminctl.registor);
routes.post("/",adminctl.login);
routes.get("/logout",adminctl.Logout)




module.exports = routes; 
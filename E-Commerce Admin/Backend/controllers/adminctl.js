const UserModel=require("../model/AdminSchema");
const bcrypt=require('bcryptjs');
let path=require('path');
const fs=require('fs');
const { log } = require("console");



module.exports.registor=async(req,res)=>{
   
    const user=await UserModel.findOne({email : req.body.email})
  
    if(user){
  
      res.status(400).json({msg : "User already existed..."})
  
    }
    else {
  
      req.body.password=await bcrypt.hash(req.body.password,7)
      
      const data=await UserModel.create(req.body)
  
      data ? res.status(200).json({msg : "Registor Successfully.."}) : 
             res.status(400).json({msg : "Invaild Registor Try again..."});
  
    }
  
  }


  module.exports.login=async(req,res)=>{
    const user=await UserModel.findOne({email : req.body.email});
    console.log(user)
 
    if(user){
 
       if(await bcrypt.compare(req.body.password,user.password)){
           res.status(200).json({msg : "Login Successfully...."})
       }
       else {
        res.status(400).json({msg : "invaild Try again..."})
          
       }
    }
    else {
        res.status(400).json({msg : "User not Found..."})
      
    }
 }

module.exports.Logout=(req,res)=>{
       
 req.session.destroy();

 res.status(202).json({msg : "logout successfully..."})
}


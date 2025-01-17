const authModel = require("../Model/AuthModel");
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken')

module.exports.logout=async(req,res)=>{
    res.clearCookie("jwt", {
        httpOnly: true, 
        secure: process.env.NODE_ENV === "production", 
        sameSite: "strict", 
      });
}

module.exports.registration=async(req,res)=>{
 
    try {

        const user=await authModel.findOne({email : req.body.email});
       

        if(user){
            res.status(404).json({msg : "User already Registar..."})
        }
        else {

            req.body.password=await bcrypt.hash(req.body.password,7)

            const data=await authModel.create(req.body)

            data ? res.status(200).json({msg : `successfully created ${req.body.role}`}) : res.status(400).json({msg : "data not Created try"})
        }
      

    }
    catch(err){
        res.status(400).json({msg : "Vaildation Error Try Again...!!",err : err})
    }
}

module.exports.login =async(req,res)=>{
    const user= await authModel.findOne({email : req.body.email})

    if(user){
       if(await bcrypt.compare(req.body.password,user.password)){
          const token=jwt.sign({user : user},"Taskmanagement",{expiresIn : "1h"})
          
          res.cookie("jwt", token, {
            httpOnly: true,    
            secure: true,       
            sameSite: "strict", 
            maxAge: 3600000      
          });

          res.status(200).json({msg : `login Successfully by ${user.name}`,userdata : user,token : token});
       }
       else {
        res.status(404).json({msg : "email or password Wrongh try Again ....!! "})
       }
    }
    else {
        res.status(404).json({msg : "user not Found.."})
    }
    
}

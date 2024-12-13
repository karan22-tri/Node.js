const UserModel=require("../model/AdminSchema");
let path=require('path');
const fs=require('fs');
const userMain = require("../model/mainSchema")
const mailer=require('../config/mailer')

module.exports.Signup=(req,res)=>{
    res.render("Signup")
}

module.exports.SignUpData = async(req,res)=>{
    console.log(req.body);
    
    let data = await userMain.create(req.body)
    data && res.redirect("/login")  
}

module.exports.Login=(req,res)=>{
    
    res.render("Login")
}

module.exports.Logout=(req,res)=>{
    res.redirect("/")   
}

module.exports.userlogin=async(req,res)=>{
   res.redirect("/dashboard")      
}

module.exports.table=(req,res)=>{
    
    res.render("table")
}
module.exports.dashboard=async(req,res)=>{
    
    res.render("dashboard")

}
module.exports.AddForm=async(req,res)=>{

    res.render("AddForm")
    
}
module.exports.ViewForm=async(req,res)=>{
    const data=await UserModel.find({})

     data ?  res.render("ViewForm",{data}) : res.redirect("/")    
            
}
module.exports.insserdata=async(req,res)=>{

    
    try{
       
        req.body.img=req.file.path;
        const data=await UserModel.create(req.body);
        console.log(req.body);
        res.redirect("/ViewForm");  
    }
    catch (err){
        console.log(err);
        
    }
}
module.exports.deletedata=async(req,res)=>{
    try{
        const singledata=await UserModel.findById(req.query.id);
        if(singledata){
            const imgPath = path.join(__dirname, '..', singledata.img);
            fs.unlinkSync(imgPath);
            await UserModel.findByIdAndDelete(req.query.id);
            res.redirect("back");
        }else{
            console.log("Data not found");
            res.redirect("back");
        }
    }catch(err){
        console.log(err);
    }
}

module.exports.editdata=async(req,res)=>{

    const editdata=await UserModel.findById(req.query.id)

    editdata ?  res.render("EditForm",{editdata}) : res.redirect("/")

   
}

module.exports.updatedata = async(req,res) => {
    try {
        const singledata = await UserModel.findById(req.query.id);
        if (!singledata) {
            console.log("Record not found");
            return res.redirect("/ViewForm");
        }

        if (req.file) {
            // Only try to delete if there's an existing image path
            if (singledata.img && singledata.img.trim() !== '') {
                const imgPath = path.join(__dirname, '..', singledata.img);
                // Check if file exists before trying to delete
                if (fs.existsSync(imgPath)) {
                    fs.unlinkSync(imgPath);
                }
            }
            req.body.img = req.file.path;
        } else {
            req.body.img = singledata.img;
        }

        const updatedata = await UserModel.findByIdAndUpdate(req.query.id, req.body);
        res.redirect("/ViewForm");
    } catch(err) {
        console.log("Error in updatedata:", err);
        res.redirect("/ViewForm");
    }
}


module.exports.changepass=(req,res)=>{
    res.render("changepass")
}
module.exports.newpass=async(req,res)=>{
    let admindata=await UserModel.findById(req.user.id);

    if(admindata){
        if(req.body.oldpass==admindata.password){
            if(req.body.newpass==req.body.confirmpass){
                const Newpassword=await UserModel.findByIdAndUpdate(admindata.id,{password : req.body.newpass});

             Newpassword ? res.redirect("/logout") : console.log("Password is not changed");
             
            }
            else {
                console.log("new password and confirm password is diffrent");
                res.redirect("/changepass");
                
            }
        }
        else {
       res.redirect("/changepass");    
        }
    }
    else {
        res.redirect("/changepass");                                
    }
    
}

module.exports.forgetpass=async(req,res)=>{
    let adminData=await UserModel.findOne({email : req.body.email})

    if(!adminData){
         return res.redirect("/")
    }
    let otp = Math.floor(Math.random()* 100000 + 800000 );
    mailer.sendOtp(req.body.email,otp);
    
   req.session.otp=otp;
   req.session.adminId=adminData.id;
   

  
   res.render("newpass");
   
    
}

module.exports.checkOtp=async(req,res)=>{
    let otp =req.session.otp
    let adminId=req.session.adminId;
    console.log(adminId)
    
    if(req.body.otp==otp){
         if(req.body.newpass==req.body.confirmpass){
            let changeAuth=await UserModel.findByIdAndUpdate(adminId , {
                password: req.body.newpass});
                  
            

            changeAuth && res.redirect("/")
            
         }
         
         else{
            res.redirect("/");
         }
     
    }
    else {
        res.redirect("/");
    }
    
}
module.exports.viewuser = async(req,res)=>{
    res.render("viewuser")
  }
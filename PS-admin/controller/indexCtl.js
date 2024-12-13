const adminSchema = require("../model/adminSchema")
const mainSchema = require("../model/mainSchema")
const fs = require("fs")

module.exports.SignUp = (req,res)=>{
    res.render("signup")
}

module.exports.SignUpData = async(req,res)=>{
    let data = await adminSchema.create(req.body)
    data && res.redirect("/login")  
}

module.exports.Login = async(req,res)=>{
    res.render("login")
}

module.exports.LoginData = async(req,res)=>{
    let admin = await adminSchema.findOne({"email":req.body.email})
    admin && res.redirect("/dashboard")    
}

module.exports.LogOut = async(req,res)=>{
    req.session.destroy();
    res.redirect("/")
}

module.exports.Dashbord = async(req,res) =>{
  res.render("dashboard")
}

module.exports.AddTask = async(req,res)=>{
    let data = await mainSchema.find({});
    res.render("addadmin")
}

module.exports.ViewTask = async(req,res)=>{
    let data = await mainSchema.find({});
  res.render("viewadmin", { data })
}

module.exports.addData = async(req,res)=>{
    req.body.image = req.file.path;
    let data = await mainSchema.create(req.body);
    data && res.redirect("viewadmin");
  }
  
  module.exports.deleteData = async (req, res) => {
    let singledata = await mainSchema.findById(req.query.id);
    fs.unlinkSync(singledata.image);
    let deleteData = await mainSchema.findByIdAndDelete(req.query.id);
    deleteData && res.redirect("viewadmin");
  };
  
  module.exports.EditData = async (req, res) => {
    let user = await mainSchema.findById(req.query.id);
    user && res.render("edit", { user });
  };
  
  module.exports.updateData = async (req, res) => {
    let img = "";
    let singledata = await mainSchema.findById(req.body.id)   
    req.file ? img = req.file.path : img = singledata.image
    req.file && fs.unlinkSync(singledata.image)
    req.body.image = img
    let updatedData = await mainSchema.findByIdAndUpdate(req.body.id, req.body);
    updatedData && res.redirect("/");
  };

  module.exports.viewuser = async(req,res)=>{
    res.render("viewuser")
  }
  
  module.exports.ChangePass =  async(req,res)=>{
    res.render("changepass")
  }

  module.exports.checkPass = async (req,res)=>{
    let user = req.user;
    if(req.body.oldPass == user.password){
      if(req.body.newPass !== user.password){
        if(req.body.newPass == req.body.confirmPass){
          let passChange = await adminSchema.findByIdAndUpdate(user.id,{
            password : req.body.newPass,
          });
          res.redirect("/logout");
        }else{
          console.log("new password not matched with confirm password");
        }
      }else{
        console.log("new password and old password must be different");
      }
    }else{
      console.log("old password is wrong");

    }
  };

  module.exports.forgetpass=async(req,res)=>{
    let adminData= await adminSchema.findOne({email : req.body.email})

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
 
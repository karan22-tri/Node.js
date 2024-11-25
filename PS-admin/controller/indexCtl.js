const adminSchema = require("../model/adminSchema")


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

module.exports.AddTask = (req,res)=>{
    res.render("addadmin")
}

module.exports.ViewTask = (req,res)=>{
    res.render("viewadmin")
}
const AdminSchema = require("../model/adminSchema");
const dbSchema = require("../model/dbSchema")


module.exports.Signup = (req,res)=>{
    res.render("register")
}
module.exports.Login = (req,res)=>{
    res.render("login")
}
module.exports.Signupdata = async(req,res)=>{
    let data = await dbSchema.create(req.body);
    data && res.redirect("/login");
}
module.exports.LoginAdmin = async(req,res)=>{
    
    let admin = await dbSchema.findOne({"email":req.body.email})

    if (!admin) {
        return console.log("User not found")
    }
    if(req.body.password==admin.password){
        res.cookie ("adminData",admin)
        res.redirect("dashboard")
    }
}
module.exports.Logout = (req,res)=>{
    res.clearCookie("adminData");
    res.redirect("/")
}
module.exports.Homepage = (req,res)=>{
    let admin = req.cookies.adminData
    admin ? res.render("dashboard") : res.redirect("/")
}

module.exports.Formpage = async(req,res)=>{
    if(req.cookies.adminData){
        let data = await AdminSchema.find({});
     res.render("form")
    }else{
        res.redirect("/")
    }
}
module.exports.Viewpage = async(req,res)=>{
    if(req.cookies.adminData){

    let data = await AdminSchema.find({});
    let KID = data.filter(i=>i.user_id == req.cookies.adminData._id )
    res.render("viewdata",{KID})
}else{
    res.redirect("/")
}
}
module.exports.Adddata = async(req,res)=>{
    req.body.user_id = req.cookies.adminData._id
    console.log(req.body)
    let data = await AdminSchema.create(req.body);
    data && res.redirect("form"); 
}
module.exports.DeleteData = async(req,res)=>{
    let data = await AdminSchema.findByIdAndDelete(req.query.id);
    data && res.redirect("dashboard");  
}
module.exports.EditPage = async(req,res)=>{
    let data = await AdminSchema.findById(req.query.id)
    data && res.render("editdata",{data});
}
module.exports.UpdateData = async(req,res)=>{
    let data = await AdminSchema.findByIdAndUpdate(req.body.id,req.body)
    data && res.redirect("form");     
}
const AdminSchema = require("../model/schema");
const fs = require("fs")

module.exports.loginPage = async(req,res) =>{
res.render("login")
}

module.exports.HomePage = async(req,res) =>{
res.render("dashboard")
}

module.exports.addAdminData = async(req,res) =>{
  let data = await AdminSchema.find({});
  res.render("addadmin")
}

module.exports.viewAdminData = async(req,res) =>{
  let data = await AdminSchema.find({});
  res.render("viewadmin", { data }   )
}

module.exports.addData = async(req,res)=>{
  req.body.image = req.file.path;
  let data = await AdminSchema.create(req.body);
  data && res.redirect("viewadmin");
}

module.exports.deleteData = async (req, res) => {
  let singledata = await AdminSchema.findById(req.query.id);
  fs.unlinkSync(singledata.image);
  let deleteData = await AdminSchema.findByIdAndDelete(req.query.id);
  deleteData && res.redirect("viewadmin");
};

module.exports.EditData = async (req, res) => {
  let user = await AdminSchema.findById(req.query.id);
  user && res.render("edit", { user });
};

module.exports.updateData = async (req, res) => {
  let img = "";
  let singledata = await AdminSchema.findById(req.body.id)   
  req.file ? img = req.file.path : img = singledata.image
  req.file && fs.unlinkSync(singledata.image)
  req.body.image = img
  let updatedData = await AdminSchema.findByIdAndUpdate(req.body.id, req.body);
  updatedData && res.redirect("/");
};
const AdminSchema = require("../model/schema");

module.exports.HomePage = async(req,res) =>{
  req.render("index")
}

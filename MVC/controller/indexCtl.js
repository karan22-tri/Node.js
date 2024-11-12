let admin = require("../model/dbSchema");
const fs = require("fs");

module.exports.Homepage = async (req, res) => {
    let data = await admin.find({});
    res.render("index", { data });
};

module.exports.AddData = async (req, res) => {
    console.log(req.body)
    console.log(req.file); 
    req.body.image = req.file.path;
    let data = await admin.create(req.body);
    data && res.redirect("/");
};

module.exports.deleteData = async (req, res) => {
    let singledata = await admin.findById(req.query.id);
    fs.unlinkSync(singledata.image);
    let delData = await admin.findByIdAndDelete(req.query.id);
    delData && res.redirect("/");
};

module.exports.EditData = async (req, res) => {
    let user = await admin.findById(req.query.id);
    user && res.render("edit", { user });
};


module.exports.updateData = async (req, res) => {
    let img = "";
    let singledata = await admin.findById(req.body.id)
    req.file ? img = req.file.path : img = singledata.image
    req.file && fs.unlinkSync(singledata.image)
    req.body.image = img
    let updatedData = await admin.findByIdAndUpdate(req.body.id, req.body);
    updatedData && res.redirect("/");
};
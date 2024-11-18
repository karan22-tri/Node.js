const express = require("express");
const route = express.Router();
const indexCtl = require("../controller/indexCtl");
const multer = require("../middleware/multer")

route.get("/",indexCtl.loginPage);
route.post("/login",indexCtl.loginAdmin);
route.get("/dashboard", indexCtl.HomePage);
route.get("/addadmin", indexCtl.addAdminData);
route.get("/viewadmin", indexCtl.viewAdminData);
route.post("/insert",multer,indexCtl.addData)
route.get("/delete", indexCtl.deleteData)
route.get("/edit" , indexCtl.EditData)
route.post("/update",multer ,indexCtl.updateData)


module.exports = route;
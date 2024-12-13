const express = require("express");
const route = express.Router();
const indexCtl = require("../controller/indexCtl");
const passport = require("passport")
const multer = require("../middleware/multer")


route.get("/", indexCtl.SignUp)
route.post("/sendData", indexCtl.SignUpData)
route.get("/login",indexCtl.Login)
route.post("/loginData",
    passport.authenticate("local",{failureRedirect:"/login"}),
    indexCtl.LoginData
)
route.get("/logout", indexCtl.LogOut)
route.get("/dashboard", passport.checkAuthentication, indexCtl.Dashbord)
route.get("/addadmin", passport.checkAuthentication, indexCtl.AddTask);
route.get("/viewadmin", passport.checkAuthentication, indexCtl.ViewTask);
route.post("/insert",multer,indexCtl.addData)
route.get("/delete", indexCtl.deleteData)
route.get("/edit" ,passport.checkAuthentication, indexCtl.EditData)
route.post("/update", multer,indexCtl.updateData)
route.get("/viewuser",indexCtl.viewuser)
route.get("/changepass",indexCtl.ChangePass)
route.post("/checkPass",indexCtl.checkPass)
route.post("/forgetPass",indexCtl.forgetpass)
route.post("/checkOtp",indexCtl.checkOtp)

module.exports = route;
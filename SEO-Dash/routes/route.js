const express = require("express");
const route = express.Router();
const indexCtl = require("../controller/indexCtl");

route.get("/", indexCtl.Signup);
route.post("/register",indexCtl.Signupdata);
route.get("/login", indexCtl.Login);
route.post("/logindata",indexCtl.LoginAdmin)
route.get("/dashboard", indexCtl.Homepage);
route.get("/form", indexCtl.Formpage);
route.get("/viewdata",indexCtl.Viewpage);
route.post("/insert",indexCtl.Adddata)
route.get("/delete",indexCtl.DeleteData)
route.get("/edit",indexCtl.EditPage)
route.post("/update",indexCtl.UpdateData)
route.get("/logout",indexCtl.Logout);

module.exports = route;
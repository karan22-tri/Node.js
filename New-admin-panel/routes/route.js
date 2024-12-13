const express = require("express")
const route = express.Router();
const indexCtl = require("../controller/indexCtl")

route.get("/",indexCtl.Homepage);
route.get("/addadmin",indexCtl.Addadmin)
route.get("/viewadmin",indexCtl.Viewadmin)


module.exports = route;
const express = require("express");
const route = express.Router();
const ctl = require("../controller/indexCtl")


route.get("/",indexCtl.HomePage)



module.exports=route;
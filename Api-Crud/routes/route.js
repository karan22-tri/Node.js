const express = require("express")
const route = express.Router()
const indexCtl =require("../controller/indexCtl")

route.get("/",indexCtl.Home)
route.post("/add", indexCtl.AddData)
route.get("/edit/:id", indexCtl.EditData)
route.put("/update/:id", indexCtl.UpdateData)
route.delete("/delete/:id", indexCtl.DeleteData)

module.exports = route;

const express = require("express")
const route = express.Router()
const indedxCtl = require("../Controller/indexCtl")
const multer = require("../middleware/multer")


route.get("/",indedxCtl.viewData)
route.post("/add",multer,indedxCtl.addData)
route.put("/update/:id",indedxCtl.updateData)
route.delete("/delete/:id",indedxCtl.deleteData)

module.exports = route;

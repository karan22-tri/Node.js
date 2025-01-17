
const express = require("express");


const uploads=require("../Middleware/multer")
const routes=express.Router();
const projectCtl = require("../Controller/projectController");


routes.post("/createpr",uploads,projectCtl.createPR);
routes.get("/viewpr",projectCtl.getPR);
routes.get("/editpr/:id",projectCtl.editPR);
routes.put("/updatepr/:id",uploads,projectCtl.updatePR);
routes.delete("/deletepr/:id",projectCtl.deletePR);

module.exports=routes;



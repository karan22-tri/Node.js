
const express = require("express");


const uploads=require("../Middleware/multer")
const routes=express.Router();

const roomCtl=require("../Controller/roomController")

routes.post("/createroom",uploads,roomCtl.createRoom);
routes.get("/viewroom",roomCtl.getRooms);
routes.delete("/deleteroom/:id",roomCtl.deleteRoom);

module.exports=routes;



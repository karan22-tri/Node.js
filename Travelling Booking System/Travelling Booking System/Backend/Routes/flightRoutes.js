
const express = require("express");


const uploads=require("../Middleware/multer");;
const routes=express.Router();

const flightCtl=require("../Controller/flightController")

routes.post("/createflight",uploads,flightCtl.createFlight);
routes.get("/viewflight",flightCtl.getFlights);
routes.delete("/deleteflight/:id",flightCtl.deleteFlight);

module.exports=routes;



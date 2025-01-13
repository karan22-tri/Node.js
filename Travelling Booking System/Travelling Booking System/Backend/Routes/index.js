const express=require('express');


const routes=express.Router();




routes.use("/",require("./Registration"));
routes.use("/rooms",require("./roomRoutes"));
routes.use("/flights",require("./flightRoutes"));



module.exports=routes;
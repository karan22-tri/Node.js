const express=require('express');


const routes=express.Router();


routes.use("/",require("./authRoute"));
routes.use("/project",require("./projectRoutes"));
routes.use("/task",require("./taskRoutes"));



module.exports=routes;
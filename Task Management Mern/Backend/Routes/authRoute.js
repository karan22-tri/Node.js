const express = require("express");
const routes = express.Router();
const authCtl = require("../Controller/authController");


routes.post("/registration",authCtl.registration)
routes.post("/Login",authCtl.login)
routes.get("/logout",authCtl.logout);


module.exports = routes;
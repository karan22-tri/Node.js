const express=require('express');

const routes=express.Router();
const RegistrationCtl=require('../Controller/RegistrationCtl');



routes.post("/registration",RegistrationCtl.registration)
routes.post("/Login",RegistrationCtl.login)
routes.get("/logout",RegistrationCtl.logout);

module.exports=routes;
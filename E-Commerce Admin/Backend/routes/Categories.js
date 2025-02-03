const express=require('express');
const route=express.Router();
const CategoriesCtl=require('../controllers/CategoriesCtl');

const passport=require('passport');



route.post("/addcat",CategoriesCtl.addcat)
route.get("/viewcat",CategoriesCtl.viewcat);
route.delete("/deletecat",CategoriesCtl.deletecat);
route.get("/editcat",CategoriesCtl.editcat)
route.put("/updatecat",CategoriesCtl.updatecat)
module.exports=route;
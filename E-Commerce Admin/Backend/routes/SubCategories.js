const express=require('express');
const route=express.Router();

const SubCategoriesCtl=require("../controllers/SubCategoriesCtl");


route.post("/subcat",SubCategoriesCtl.addSubCategory);
route.get("/viewsubcat",SubCategoriesCtl.viewSubCategory);
route.delete("/deletesubcat",SubCategoriesCtl.deleteSubCategory);
route.get("/editsubcat",SubCategoriesCtl.editSubCategory);
route.put("/updatesubcat",SubCategoriesCtl.updateSubCategory);

module.exports=route;
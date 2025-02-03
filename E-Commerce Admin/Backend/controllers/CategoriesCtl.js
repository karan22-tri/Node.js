const UserCatModel=require('../model/CategoriesSchema');
const path=require('path')
const fs=require('fs')

module.exports.addcat=async(req,res)=>{
  const addcategories=await UserCatModel.create(req.body)

  addcategories ? res.status(200).json({msg : "Categories add Successfully..."}) : 
                  res.status(404).json({msg : "invaild Try again...."});
}

module.exports.viewcat=async(req,res)=>{
  const data=await UserCatModel.find({});

  data ? res.status(200).json({msg : "ViewCategories : " ,data}) : console.log("data is not found in view");
  
}


module.exports.deletecat=async(req,res)=>{


  // const singledata=await UserCatModel.findById(req.query.id);
  
  const deletedata=await UserCatModel.findByIdAndDelete(req.query.id)

  deletedata ? res.status(200).json({msg : "ViewCategories : " ,data}) : console.log("data is not found in view");9
  
}

module.exports.editcat=async(req,res)=>{

  const editdata=await UserCatModel.findById(req.query.id);

  editdata ? res.status(200).json({msg : "EditCategories : " ,editdata}) : console.log("data is not found in view");
  
}

module.exports.updatecat=async(req,res)=>{
   const updateID=await UserCatModel.findById(req.query.id);

   const updatedata=req.body;

   const updatecat=await UserCatModel.findByIdAndUpdate(updateID,updatedata);


   updatecat ? res.status(200).json({msg : "Categories update Successfully..."}) : 
               res.status(400).json({msg : "Categories not update Try again..."});


     
}



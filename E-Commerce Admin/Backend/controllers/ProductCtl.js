const ProductModel=require('../model/ProductSchema');
const UserCatModel=require('../model/CategoriesSchema');
const UserSubCatModel = require('../model/SubCategoriesSchema');
const path = require('path');


module.exports.addviewproduct=async(req,res)=>{

  const catdata = await UserCatModel.find({})
  const subcatdata=await UserSubCatModel.find({})

  // res.render("AddProduct",{catdata,subcatdata});

  res.status(200).json({msg : "Addproduct",catdata,subcatdata});
  
}

module.exports.insertProduct=async(req,res)=>{

  if(!req.file){
  res.status(404).json({msg : "Image not found.."})
  }else {
    let image=req.file.path.replace(/\\/g,"/")
    req.body.image=image;
    console.log(req.body)
    let data=await ProductModel.create(req.body)

    data ? res.status(202).json({msg : "Product Created Successfully"}) : console.log("product not cretaed...");
  }

   console.log(req.file)
   console.log(req.body)

  // let data = await ProductModel.create(req.body);
  // data ? res.status(200).json({msg : "Product created successfully "}) : 
  //        res.status(400).json({msg : "Product not created..."});
  
}


module.exports.viewproduct=async(req,res)=>{
   const data =await ProductModel.find({}).populate('categoryId').populate('subcategoryId')

  //  viewdata ? res.render("ViewProduct",{viewdata}) : console.log("do not show data");
   
  data ? res.status(200).json(data) : 
             res.status(400).json({msg : data})
}

module.exports.deleteproduct=async(req,res)=>{
   const deleteproduct=await ProductModel.findByIdAndDelete(req.query.id)

   deleteproduct ? res.status(200).json({msg : "Product deleted.."}) : 
                   res.status(400).json({msg : "product not delete try again..."});

}

module.exports.editproduct=async(req,res)=>{
  const editproduct=await ProductModel.findById(req.query.id);

  editproduct ? res.status(200).json({msg : "Editdata",editproduct}) : 
  res.status(400).json({msg : "data is not found in view"});

}

module.exports.updateproduct=async(req,res)=>{
  const updateId=await ProductModel.findById(req.query.id);
  const updatedata=req.body;

  const updateProduct=await ProductModel.findByIdAndUpdate(updateId,updatedata);


  updateProduct ? res.status(200).json({msg : "Product update Successfully..."}) : 
  res.status(400).json({msg : "Product not update Try again..."});
  
}
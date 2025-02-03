const mongoose=require('mongoose');

const productSchema=mongoose.Schema(
  {
    prname : {
      type : String,
      required : true,
    },
    prprice : {
      type : String,
      required : true,
    },
    subcategoryId : {
      type : mongoose.Schema.Types.ObjectId,
      ref : "Sub-Categories",
  
    },
    categoryId : {
     type : mongoose.Schema.Types.ObjectId,
     ref : "Categories",
    
    },
    rating : {
      type : String,
      required :true,
    },
    descripation : {
     type : String,
     required : true,
    },
    image :{ 
      type : String,
      required : true
    }
  },{timestamps : true})

const ProductModel=mongoose.model("Products",productSchema);

module.exports=ProductModel;
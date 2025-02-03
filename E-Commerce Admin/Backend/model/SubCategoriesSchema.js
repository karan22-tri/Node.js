const mongoose = require('mongoose');

const userSubcat=mongoose.Schema({
  subCategories : {
    type :String,
    required : true,

  },
  categoriesId: {
    type : mongoose.Schema.Types.ObjectId,
    ref : "Categories",
    required : true,
  }

},{timestamps : true})

const UserSubCatModel=mongoose.model("Sub-Categories",userSubcat)

module.exports=UserSubCatModel;
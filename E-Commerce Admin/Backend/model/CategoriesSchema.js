const mongoose=require('mongoose');

const userCatSchema=mongoose.Schema({
  categories : {
    type : String,
    required: true
  }
},{timestamps : true})

const UserCatModel=mongoose.model("Categories",userCatSchema);

module.exports=UserCatModel;
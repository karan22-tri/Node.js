const mongoose=require('mongoose');


const AuthSchema=mongoose.Schema({
  name : {
    type : String,
    required : true,
  },
  email : {
    type : String,
    required : true,
  },
  contact : {
    type : String,
    required : true,
  },
  role : {
    type : String,
    required : true,
    enum : ['admin','user']
  },
  password : {
    type : String,
    required : true,
  }

},{timestamps : true})

const AuthModel=mongoose.model("Registration",AuthSchema);


module.exports=AuthModel;
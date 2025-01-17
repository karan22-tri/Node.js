const mongoose = require("mongoose");

const authSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
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
      password:{
        type:String,
        required:true
    },
})

const model = mongoose.model("authSchema",authSchema);

module.exports = model;

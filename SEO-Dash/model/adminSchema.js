const mongoose = require("mongoose")

const schema = mongoose.Schema({
    name:{ 
        type:String,
       required:true
   },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    user_id:{
        type:String,
        required:true
    }
})

const admin = mongoose.model("seo-admin-schema",schema)

module.exports = admin;

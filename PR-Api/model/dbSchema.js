const mongoose = require("mongoose")


const schema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    sub:{
        type:String,
        required:true
    },
     image:{
        type:String,
        required:true
    }
})


const mainSchema = mongoose.model("pr-api-schema",schema)


module.exports =  mainSchema;

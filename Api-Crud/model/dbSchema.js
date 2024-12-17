const mongoose = require("mongoose")

const schema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    sub:{
        type:String,
        required:true
    }
})


const dbSchema = mongoose.model("api-Schema",schema);

module.exports = dbSchema;


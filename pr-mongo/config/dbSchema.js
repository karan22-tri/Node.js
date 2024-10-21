const mongoose = require("mongoose")

const schema = mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    }
})


const admin = mongoose.model("Books",schema);

module.exports = admin;
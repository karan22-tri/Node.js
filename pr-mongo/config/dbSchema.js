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
    date:{
        type:Date,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})


const admin = mongoose.model("Books",schema);

module.exports = admin;
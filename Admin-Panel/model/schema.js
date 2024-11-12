const mongoose = require("mongoose")

const schema = mongoose.model({
    name:{
        type:String,
        required:true
    }
})

const admin = mongoose.Schema("panel",schema)

module.exports = admin;
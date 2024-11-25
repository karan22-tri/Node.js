const mongoose = require("mongoose")

const schema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    hobby: {
        type: Array,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true, 
    }
})

const mainSchema = mongoose.model("admin-panel",schema)

module.exports = mainSchema;
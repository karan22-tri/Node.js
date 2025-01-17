const mongoose = require("mongoose")

const projectdb = mongoose.Schema({
    projectName:{
        type:String,
        required:true
    },
    projectType:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true
    }
})


const projectModel = mongoose.model("projectSchema",projectdb);

module.exports = projectModel;

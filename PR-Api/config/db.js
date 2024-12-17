const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1/PR-API")


const db = mongoose.connection

db.once("opne",(err)=>{
    err ? console.log(err) : console.log("MongoDb Connected")
})

module.exports = db;
 
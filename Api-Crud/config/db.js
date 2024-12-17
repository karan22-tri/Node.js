const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1/api-crud")

const db = mongoose.connection;

db.once("open",(err)=>{
    err ? console.log(err) : console.log("MONGO DB Connected")
})

module.exports = db;

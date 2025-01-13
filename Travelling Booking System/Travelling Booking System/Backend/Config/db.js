const mongoose=require('mongoose')

const db=mongoose.connect('mongodb://localhost:27017/travelling-booking')
.then(()=>console.log("MongoDB Connected...."))
.catch((err)=>console.log(err))



module.exports=db;
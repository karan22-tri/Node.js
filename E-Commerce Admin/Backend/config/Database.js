const mongoose=require('mongoose');

let db = mongoose.connect('mongodb+srv://trivedikaran88:12345@cluster0.v1rob.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>console.log("MongoDb Connected...."))
.catch((err)=>console.log(err))


module.exports=db;

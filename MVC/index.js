const express= require("express");
const port = 1008;

const app=express();
const db = require("./config/db");
const path=require("path");

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
app.use("/",require("./routes/route"))
app.use("/uploads",express.static(path.join(__dirname,"uploads")));



app.listen(port,(err)=>{
    err?console.log(err) : console.log(`server started at http://localhost:${port}`)
})
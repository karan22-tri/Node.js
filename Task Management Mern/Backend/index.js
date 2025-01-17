const express = require("express");
const port =  8001;
const path = require("path");
const app = express();
const db = require("./Config/db");

const cookieParser = require('cookie-parser')
const cors=require('cors');


app.use(cors({origin : "http://localhost:5173",credentials : true}));

app.use(express.json());

app.use(express.urlencoded())
app.use(cookieParser());

app.use("/uploads",express.static(path.join(__dirname,"uploads")))

app.use("/",require("./Routes/index"));


app.listen(port,(err)=>{
    err ? console.log(err) : console.log(`Server started at http://localhost:${port}`);
})



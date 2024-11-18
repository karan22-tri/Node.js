const express = require("express")
const port = 1008;
const path = require("path");

const app = express();
const db = require("./config/admindb");
const cookieParser = require("cookie-parser");


app.set("view engine","ejs")
app.use(express.urlencoded())
app.use(cookieParser());
app.use("/", require("./routes/route"))
app.use("/public",express.static(path.join(__dirname,"public")))

app.listen(port,(err)=>{
    err ? console.log(err) : console.log(`server started at http://localhost:${port}`)
})
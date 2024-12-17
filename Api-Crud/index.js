const express = require("express")
const port = 7001;

const app = express();
const db = require("./config/db")

app.use(express.urlencoded())

app.use("/",require("./routes/route"))

app.listen(port,(err)=>{
    err ? console.log(err) : console.log(`server started at http://localhost:${port}`)
})
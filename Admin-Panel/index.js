const express = require("express")
const port = 9001


const app = express();
const path = require("path");
const db = require("./config/db");
const cookieParser = require("cookie-parser");
app.set("view engine", "ejs")

app.use(express.urlencoded())
app.use(cookieParser());
app.use("/", require("./routes/route"))
app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/upload", express.static(path.join(__dirname, "upload")));


app.listen(port, (err) => {
    err ? console.log(err) : console.log(`server started at http://localhost:${port}`)
})
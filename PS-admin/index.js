const express = require("express")
const port = 7001
const db = require("./config/db")
const path = require("path")
const cookie = require("cookie-parser")
const passport = require("./middleware/PassportLocalSt")
const session = require("express-session")


const app = express()

const flash =require('connect-flash');

const connectflash=require('./middleware/connectFlash')
const mailer=require('./middleware/mailer')

app.set("view engine","ejs")
app.use(express.urlencoded())
app.use(flash())


app.use(
    session({
        name: "local",
        secret: "local",
        resave: true,
        saveUninitialized: false,
        cookie: {maxAge : 100*100*60,httpOnly:true}
    })
)

app.use(passport.initialize())
app.use(passport.session())
app.use(cookie())
app.use(passport.AuthenticatedUser)

app.use(connectflash.setflash)  

app.use("/public",express.static(path.join(__dirname,"public")))
app.use("/upload", express.static(path.join(__dirname, "upload")));



app.use("/",require("./routes/route"))

app.listen(port,(err)=>{
    err ? console.log(err) : console.log(`server started at http://localhost:${port}`)
})






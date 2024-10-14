const express = require("express");
const port = 1009;
const path = require("path");
const app = express({ extended: true });


app.set("view engine", "ejs");
app.use(express.urlencoded());
app.use("/public", express.static(path.join(__dirname, "public")))
let users = [
    {
        id: 1,
        name: "Karan",
        subject: "Full-stack",
        age: 22
    },
    {
        id: 2,
        name: "Sanjay",
        subject: "Node-js",
        age: 20
    },
    {
        id: 3,
        name: "Jayesh",
        subject: "Java",
        age: 19
    }
]

const middle = (req, res, next) => {

    let ageee = req.body.age;
    console.log(ageee)
    if(ageee > 18){
        console.log("Congratulation Your age is aligable");
        next();
     res.redirect("back")
    }else{
        console.log('sorry Your age is not aligable')
        res.redirect("back")
    }
}


app.get("/", (req, res) => {
    res.render("index", { users });
})

app.post("/insert", middle, (req, res) => {
    req.body.id = users.length + 1
    console.log(req.body)
    users.push(req.body);
    res.redirect("back")
})

app.get("/delete", (req, res) => {
    let data = users.filter((item) => item.id != req.query.Id);
    users = data
    res.redirect("back")
})

app.get("/edit", (req, res) => {
    let singleData = users.find((item) => item.id == req.query.Id);
    singleData && res.render("edit", { singleData })
})

app.post("/update", (req, res) => {
    users.map((e, i) => {
        e.id == req.body.id ? users[i] = req.body : e
    })
    res.redirect("/")
})
app.listen(port, (err) => {
    err ? console.log(err) : console.log(`server Started at http://localhost:${port}`);
})
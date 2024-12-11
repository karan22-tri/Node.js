const express = require("express")
const route = express.Router()

route.get("/dashboard",indexCtl.Homepage);
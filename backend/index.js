const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')
const expressSession = require('express-session')

const UserRounter = require("./rount/user")

mongoose.connect("mongodb+srv://admin:2319@cluster0.kdh9hcl.mongodb.net/review-product");
const loggedIn = null


const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(expressSession({
    secret: "node secret"
}))
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true
}))
app.use("/auth", UserRounter)





app.listen(3001, () => {
    console.log("server is running")
})
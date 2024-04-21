const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const dotenv = require('dotenv')
dotenv.config()
const EmployeeModel = require("./models/Employee")
const UserRounter = require("./rount/user")

const app = express()
app.use(express.json())
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true
}))
app.use(cookieParser())
app.use("/auth", UserRounter)

mongoose.connect("mongodb+srv://admin:2319@cluster0.kdh9hcl.mongodb.net/review-product");



app.listen(3001, () => {
    console.log("server is running")
})
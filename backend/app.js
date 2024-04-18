const express = require("express")
const mongoose  =require('mongoose')
const cors = require('cors')
const RegisterModel = require('./models/Employee')
const EmployeeModel = require("./models/Employee")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://admin:2319@cluster0.kdh9hcl.mongodb.net/review-product");

app.post('/register', (req, res) =>{
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))

})

app.listen(3001, () =>{
    console.log("server is runnong")
})
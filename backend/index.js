const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')
const bcrypt = require('bcrypt')
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

// app.post('/login', (req, res) => {
//     const { email, password } = req.body;
//     EmployeeModel.findOne({ email: email})
//     .then(user => {
//         if (user) {
//             bcrypt.compare(password, user.password, (err, response) => {
//                 if (response) {
//                     res.json("Success")
//                 } else{
//                     res.json("Password is not correct")
//                 }
//             })
            
//         } else {
//             res.json("No record exited")
//         }
//     })
// })

// app.post('/register', (req, res) => {
//     const { name, email, password } = req.body;
//     bcrypt.hash(password, 10)
//         .then(hash => {
//             EmployeeModel.create({ name, email, password: hash })
//                 .then(employees => res.json(employees))
//                 .catch(err => res.json(err))
//         }).catch(err => console.log(err.message))

// })

app.listen(3001, () => {
    console.log("server is running")
})
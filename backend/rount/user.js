const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const EmployeeModel = require('../models/Employee')
const PostModel = require('../models/post')
const UserRounter = express.Router()

UserRounter.post('/register', async (req, res) => {
    const{name,email,password} =req.body
    EmployeeModel.create(req.body).then(() =>{
        return res.json({ status: true, message: "Recode registed" })
    }).catch((err)=>{
        return res.json({ status: false, message:"Please fill in complete information" })
    })
    const user = await EmployeeModel.findOne({ email })
    if (user) {
        return res.json({ message: "User already exit" })
    }

})

UserRounter.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await EmployeeModel.findOne({ email })
    if (!user) {
        return res.json({ message: "User is not registed" })
    }
    const validPassword = await bcrypt.compare(password, user.password)
    if (!validPassword) {
        return res.json({ message: "Password is not correct" })
    }

    const token = jwt.sign({ username: user.name }, process.env.KEY, { expiresIn: '2h' })
    res.cookie('token', token, { httpOnly: true, maxAge: 360000 })
    return res.json({ status: true, message: "Login successfully" })
})

UserRounter.post('/post', async (req, res) => {
   PostModel.create(req.body)
   .then(post => res.json(post))
   .catch(err => res.json(err))

})

module.exports = UserRounter
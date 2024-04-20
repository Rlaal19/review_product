const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const EmployeeModel = require('../models/Employee')
const UserRounter = express.Router()

UserRounter.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    const user = await EmployeeModel.findOne({ email })
    if (user) {
        return res.json({ message: "User already exit" })
    }
    const hashpassword = await bcrypt.hash(password, 10)
    const newUser = new EmployeeModel({
        name,
        email,
        password: hashpassword
    })
    await newUser.save()
    return res.json({ status: true, message: "Recode registed" })

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


module.exports = UserRounter
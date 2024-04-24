const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const EmployeeModel = require('../models/Employee')
const PostModel = require('../models/Addpost')
const UserRounter = express.Router()
const redirectIfAuth = require('../middleware/redirectIfAuth')

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
    EmployeeModel.findOne({ email:email }).then((user) =>{
        if (user) {
            let cmp = bcrypt.compare(password,user.password).then((match) =>{
                if(match){
                    req.session.userId = user
                    console.log(req.session.userId)
                    // res.render('home')
                    return res.json({ status: true, message: "Login successfully"})
                }
                else{
                    return res.json({ status: false, message: "Password not match" })
                }
            })
        }else{
            return res.json({status: false, message: "User is not registed" })
        }
    })
})

UserRounter.get("/section", async(req, res) => {
    const loggedIn = req.session.userId ? true : false;
    console.log("Section")
    console.log(req.session.userId)
    // const loggedIn = true;
    res.json({ loggedIn });
});

UserRounter.get("/logout", (req, res) => {
     req.session.destroy()
     return res.json({status: true, message: "Bye bye" })
    
});

UserRounter.get('/home', async(req,res) =>{
    const Userdata = await EmployeeModel.findById(req.session.userId)
    console.log(Userdata)
    res.json({Userdata})
})

UserRounter.post('/post', (req, res) => {
    // let Userdata = await EmployeeModel.findById(req.session.userId)
   PostModel.create(req.body)
   .then(post => res.json(post))
   .catch(err => res.json(err))

})


module.exports = UserRounter
const express = require('express')
const bcrypt = require('bcrypt')
const multer = require('multer')
const EmployeeModel = require('../models/Employee')
const PostModel = require('../models/Addpost')
const UserRounter = express.Router()


UserRounter.post('/register', async (req, res) => {
    const{name,email,password} =req.body
    if(name && email && password){
        const user = await EmployeeModel.findOne({ email })
        if (user) {
            return res.json({ message: "This email has been registered before" })
        }else{
            EmployeeModel.create({
                name,
                email,
                password
            })
            return res.json({ status: true, message: "Recode registed" })
        }

    }else{
        return res.json({ status: false, message:"Please fill in complete information" })
    }

})

UserRounter.post('/login', async (req, res) => {
    const { email, password } = req.body;
    // const user = await EmployeeModel.findOne({ email:email })
    EmployeeModel.findOne({ email:email }).then((user) =>{
        if (user) {
            let cmp = bcrypt.compare(password,user.password).then((match) =>{
                if(match){
                    req.session.userId = user
                    req.session.name = user.name
                    // console.log("name: ",req.session.name)

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
    // const loggedIn = true;
    res.json({ loggedIn });
});

UserRounter.get("/logout", (req, res) => {
     req.session.destroy()
     return res.json({status: true, message: "Bye bye" })
    
});

UserRounter.get('/home', async(req,res) =>{
    const Userdata = await EmployeeModel.findById(req.session.userId)
    res.json({Userdata})
})

// const stroge = multer.diskStorage({
//     destination: (req,file, cb)=>{
//         cb(null,'../public/Images')
//     },
//     filename: (req,file,cb) =>{
//         const filedate = Date.now()
//         cb(null, filedate + file.originalname)
//     }
// })

// const upload = multer({
//     stroge: stroge
// })

UserRounter.post('/post', async(req, res) => {
    const {title, descript,userData} = req.body
    const date = Date()
    console.log(date);
    console.log(userData.Userdata.name)
    console.log(title)
    console.log(descript)
    // const image = req.file.filename;
    try{
        if(userData.Userdata.name && title && descript){
            // console.log(image)
            await PostModel.create({
                user: userData.Userdata.name,
                title: title, 
                descript: descript,
                date: date})
            res.json({status:true, message: "Post success"})
        }else{
            res.json({status:false, message: "กรุณากรอกข้อมูลให้ครบ"})
        }

    }catch(err){
        res.json({status: err})
    }

})
UserRounter.get('/showpost', async(req,res) =>{
    const Data = await PostModel.find().sort({date : -1})
    console.log((Data))
    // console.log(typeof Data.data)
    res.json((Data))
})

module.exports = UserRounter
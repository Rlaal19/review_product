const express = require('express')
const multer = require('multer')
const Product2Model = require('../models/Productv2')
const GroupModel = require('../models/Groupproduct')
const AdminRounter = express.Router()

AdminRounter.post('/addproduct', async (req, res) => {
    const { group, score, image, title, descript, linksp, linklz } = req.body
    try {
        if (group && score && image && title && descript && linksp && linklz) {
            await Product2Model.create({
                group: group,
                score: score,
                imgae: image,
                name: title,
                descript: descript,
                linksp: linksp,
                linklz: linklz,
            })
            res.json({ status: true, message: "Add product success" })
        } else {
            res.json({ status: false, message: "กรุณากรอกข้อมูลให้ครบ" })
        }

    } catch (err) {
        res.json({ status: err })
    }
})

AdminRounter.post('/addgroup',async (req,res) =>{
    const {group} = req.body
    try {
        if (group) {
            await GroupModel.create({
                group: group, 
            })
            res.json({ status: true, message: "Add group product success" })
        } else {
            res.json({ status: false, message: "กรุณากรอกข้อมูล" })
        }

    } catch (err) {
        res.json({ status: err })
    }
})

AdminRounter.get('/addgroup', async (req,res)=>{
    const Data = await GroupModel.find()
    console.log(Data)
    res.json((Data))
})

AdminRounter.get('/product', async (req,res)=>{
    const Data = await Product2Model
    .find()
    .populate('group')
    console.log(Data)
    res.json((Data))
})
module.exports = AdminRounter
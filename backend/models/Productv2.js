const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema

const ProductSchema = new mongoose.Schema({
    group:{
        type:ObjectId,
        ref:"group"
    },
    score:String,
    imgae: String,
    name:String,
    descript:String,
    linksp:String,
    linklz:String,
})

const Product2Model = mongoose.model("productv2", ProductSchema)
module.exports = Product2Model
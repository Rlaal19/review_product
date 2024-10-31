const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    group:String,
    score:String,
    imgae: String,
    name:String,
    descript:Array,
    linksp:String,
    linklz:String,
})

const ProductModel = mongoose.model("product", ProductSchema)
module.exports = ProductModel
const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    name:String,
    title: String,
    descript:String 
})

const PostModel = mongoose.model("post", PostSchema)
module.exports = PostModel
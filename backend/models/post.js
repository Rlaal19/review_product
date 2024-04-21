const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    title: String,
    descript:String 
})

const PostModel = mongoose.model("post", PostSchema)
module.exports = PostModel
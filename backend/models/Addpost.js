const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    user:String,
    title:String,
    descript:String,
    date:Date
})

const PostModel = mongoose.model("post", PostSchema)
module.exports = PostModel
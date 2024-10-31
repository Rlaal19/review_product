const mongoose = require('mongoose')

const GroupSchema = new mongoose.Schema({
    group:String,
})

const GroupModel = mongoose.model("group", GroupSchema)
module.exports = GroupModel
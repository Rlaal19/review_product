const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const EmployeeSchema = new mongoose.Schema({
    name: {type:String, required:[true, 'Plese provide name']},
    email: {type:String, required:[true, 'Plese provide email'], unique:true},
    password: {type:String, required:[true, 'Plese provide password']},
})
EmployeeSchema.pre('save',function(next){
    const user = this
    bcrypt.hash(user.password, 10).then(hash =>{
        user.password = hash
        next()
    }).catch(err =>{
        console.error(err)
    })
})
const EmployeeModel = mongoose.model("employees", EmployeeSchema)
module.exports = EmployeeModel
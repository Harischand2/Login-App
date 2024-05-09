const mongoose = require('mongoose')
const {model, Schema} = mongoose
const userSchema = new Schema({
    firstname: String,
    lastname: String,
    email: {type: String, unique: true},
    password: String
})
const userModel = model('User', userSchema)
module.exports = userModel

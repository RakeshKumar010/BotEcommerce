const mongoose = require('mongoose')
const userMobel =mongoose.Schema({
    name:String,
    email:String,
    password:String,
    address:String,
    mobile:Number
})

module.exports = mongoose.model('users',userMobel)
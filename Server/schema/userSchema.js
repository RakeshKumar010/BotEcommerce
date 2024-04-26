const mongoose = require('mongoose')
const userMobel =mongoose.Schema({
    email:String,
    pass:String,
})

module.exports = mongoose.model('users',userMobel)
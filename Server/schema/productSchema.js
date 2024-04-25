const mongoose = require('mongoose')
const productModel =mongoose.Schema({
    title:String,
    image:String,
    rating:String,
    price:String,
})

module.exports = mongoose.model('products',productModel)
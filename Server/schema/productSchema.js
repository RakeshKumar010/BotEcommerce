const mongoose = require('mongoose')
const productModel =mongoose.Schema({
    title:String,
    image:String,
    rating:String,
    price:String,
    vendor:String,
    type:String,
    availability:String,
 
})

module.exports = mongoose.model('products',productModel)
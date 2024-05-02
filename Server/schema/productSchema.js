const mongoose = require('mongoose')
const productModel =mongoose.Schema({
    title:String,
    image:String,
    rating:String,
    price:String,
    offer:String,
    fabric:String,
    dispatchTime:String,
    pieces:String,
    availability:String,
    point:String,
 
})

module.exports = mongoose.model('products',productModel)
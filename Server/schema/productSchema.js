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
    selectedSizes: [String],
    points:[String],
 
})

module.exports = mongoose.model('products',productModel)
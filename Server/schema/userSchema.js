const mongoose = require("mongoose");
const userMobel = mongoose.Schema({
  clientId:String,
  name:String,
  email:String,
  pass:String,
  addProduct:String,
  editProduct:String,
  deleteProduct:String,
  addCoupon:String,
  editCoupon:String,
  deleteCoupon:String,
  sAdmin:{type: String, default: '0' }
});

module.exports = mongoose.model('users',userMobel);

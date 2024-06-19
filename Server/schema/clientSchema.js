const mongoose = require("mongoose");
const clientMobel = mongoose.Schema({
  clientId:String,
  name:String,
  domain:String,
  email:String,
  number:String,
  pass:String,
  expiryDate:String,
  addProduct:String,
  editProduct:String,
  deleteProduct:String,
  addCoupon:String,
  editCoupon:String,
  deleteCoupon:String,
  sAdmin:{ type: String, default: '1' },
  status:{ type: String, default: '1' },
 
});

module.exports = mongoose.model('clients',clientMobel);

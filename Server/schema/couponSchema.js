const mongoose = require("mongoose");
const couponMobel = mongoose.Schema({
  clientId:String,
  title: String,
  discount: String,
  code: String,
  expiryDate: String,
});

module.exports = mongoose.model("coupons", couponMobel);

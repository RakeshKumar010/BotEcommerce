const mongoose = require("mongoose");
const couponMobel = mongoose.Schema({
  title: String,
  discount: String,
  code: String,
  expiryDate: String,
});

module.exports = mongoose.model("coupons", couponMobel);

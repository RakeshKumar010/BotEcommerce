const mongoose = require("mongoose");
const clientMobel = mongoose.Schema({
  name:String,
  email:String,
  number:String,
  pass:String,
  expireDate:String,
  active:String
});

module.exports = mongoose.model('clients',clientMobel);

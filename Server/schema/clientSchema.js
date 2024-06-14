const mongoose = require("mongoose");
const clientMobel = mongoose.Schema({
  name:String,
  domain:String,
  email:String,
  number:String,
  pass:String,
  expiryDate:String,
  sAdmin:{ type: String, default: '1' },
  status:{ type: String, default: '1' }
});

module.exports = mongoose.model('clients',clientMobel);

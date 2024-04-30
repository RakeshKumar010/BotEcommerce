const mongoose = require("mongoose");
const userMobel = mongoose.Schema({
  name:String,
  email:String,
  pass:String,
});

module.exports = mongoose.model('users',userMobel);

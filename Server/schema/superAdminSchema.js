const mongoose = require("mongoose");
const superAdminMobel = mongoose.Schema({
  name:String,
  email:String,
  pass:String,
});

module.exports = mongoose.model('superAdmins',superAdminMobel);

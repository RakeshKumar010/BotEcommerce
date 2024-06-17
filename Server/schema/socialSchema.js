const mongoose = require("mongoose");
const socialMobel = mongoose.Schema({
  clientId:String,
  facebook: String,
  insta: String,
  youtube: String,
  twitter: String,
});

module.exports = mongoose.model("socials", socialMobel);

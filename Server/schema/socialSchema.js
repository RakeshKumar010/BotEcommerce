const mongoose = require("mongoose");
const socialMobel = mongoose.Schema({
  facebook: String,
  insta: String,
  youtube: String,
  twitter: String,
});

module.exports = mongoose.model("socials", socialMobel);

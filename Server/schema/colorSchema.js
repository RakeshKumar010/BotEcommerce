const mongoose = require("mongoose");
const colorMobel = mongoose.Schema({
  clientId:String,
  color: String,
});

module.exports = mongoose.model("colors", colorMobel);

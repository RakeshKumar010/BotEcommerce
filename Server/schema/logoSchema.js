const mongoose = require("mongoose");
const logoMobel = mongoose.Schema({
  clientId:String,
  logo: String,
});

module.exports = mongoose.model("logos", logoMobel);

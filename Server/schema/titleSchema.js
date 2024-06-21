const mongoose = require("mongoose");
const titleMobel = mongoose.Schema({
  clientId:String,
  title: String,
});

module.exports = mongoose.model("titles", titleMobel);

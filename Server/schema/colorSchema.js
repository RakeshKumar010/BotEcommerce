const mongoose = require("mongoose");
const colorMobel = mongoose.Schema({
  color: String,
});

module.exports = mongoose.model("colors", colorMobel);

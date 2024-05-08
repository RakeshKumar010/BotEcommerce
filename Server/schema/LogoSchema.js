const mongoose = require("mongoose");
const logoMobel = mongoose.Schema({
  logo: String,
});

module.exports = mongoose.model("logos", logoMobel);

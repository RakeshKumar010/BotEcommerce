const mongoose = require("mongoose");
const carouselMobel = mongoose.Schema({
  clientId:String,
  carousel: String
});

module.exports = mongoose.model("carousels", carouselMobel);

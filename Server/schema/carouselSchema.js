const mongoose = require("mongoose");
const carouselMobel = mongoose.Schema({
  carousel: String,
});

module.exports = mongoose.model("carousels", carouselMobel);

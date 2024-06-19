const mongoose = require("mongoose");
const bannerMobel = mongoose.Schema({
  clientId:String,
  banner: String,
});

module.exports = mongoose.model("banners", bannerMobel);

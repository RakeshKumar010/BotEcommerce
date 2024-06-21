const mongoose = require("mongoose");
const faviconMobel = mongoose.Schema({
  clientId:String,
  favicon: String,
});

module.exports = mongoose.model("favicons", faviconMobel);

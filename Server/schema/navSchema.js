const mongoose = require("mongoose");
const navMobel = mongoose.Schema({
  clientId:String,
  nav1: String,
  nav2: String,
  nav3: String,
  nav4: String,
  nav5: String,
});

module.exports = mongoose.model("navs", navMobel);

const mongoose = require("mongoose");
const productModel = mongoose.Schema({
  title: String,
  section: String,
  image: [String],
  rating: String,
  price: String,
  offer: String,
  fabric: String,
  dispatchTime: String,
  pieces: String,
  availability: String,
  selectedSizes: [String],
  points: [String],
  recycleId: { type: String, default: '0' },
});

module.exports = mongoose.model("products", productModel);

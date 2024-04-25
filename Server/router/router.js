const express = require("express");
const app = express.Router();
const productModel = require("../schema/productSchema");

app.get("/product", async (req, res) => {
  let result = await productModel.find();
  res.send(result);
});

app.post("/add-products", async (req, res) => {
  let result = new productModel(req.body);
  result = await result.save();
  res.send(result);
  console.log(result);
});

app.get("/:id", async (req, res) => {
  let result = await productModel.findOne({ _id: req.params.id });

  res.send(result);
});

app.delete("/:id", async (req, res) => {
  let result = await productModel.deleteOne({ _id: req.params.id });
  res.send(result);
});

module.exports = app;

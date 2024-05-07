const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const express = require("express");
const app = express.Router();
const productModel = require("../schema/productSchema");
const userSchema = require("../schema/userSchema");
const couponSchema = require("../schema/couponSchema");

app.post("/add-products", upload.array("image"), async (req, res) => {
  try {
    let productData = req.body;
    productData.image = req.files.map((file) => file.path); // Add image paths to product data

    let result = new productModel(productData);
    result = await result.save();
    res.send(result);
    console.log(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while saving the product.");
  }
});

app.get("/product", async (req, res) => {
  let result = await productModel.find();
  res.send(result);
});

app.get("/coupon", async (req, res) => {
  let result = await couponSchema.find();
  res.send(result);
});
app.get("/admins", async (req, res) => {
  let result = await userSchema.find();
  res.send(result);
});
app.delete("/admins/:id", async (req, res) => {
  let result = await userSchema.deleteOne({ _id: req.params.id });
  res.send(result);
});
app.put("/admins/:id", async (req, res) => {
  let result = await userSchema.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  res.send(result);
});

app.get("/:id", async (req, res) => {
  let result = await productModel.findOne({ _id: req.params.id });
  res.send(result);
});
app.get("/coupon/:id", async (req, res) => {
  let result = await couponSchema.findOne({ _id: req.params.id });
  res.send(result);
});
app.delete("/coupon/:id", async (req, res) => {
  let result = await couponSchema.deleteOne({ _id: req.params.id });
  res.send(result);
});

app.put("/coupon/:id", async (req, res) => {
  let result = await couponSchema.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  res.send(result);
});

app.delete("/:id", async (req, res) => {
  let result = await productModel.deleteOne({ _id: req.params.id });
  res.send(result);
});
app.post("/sign-up", async (req, res) => {
  let result = await new userSchema(req.body);
  result = await result.save();
  res.send(result);
});
app.post("/add-coupon", async (req, res) => {
  let result = await new couponSchema(req.body);
  result = await result.save();
  res.send(result);
});

app.post("/login", async (req, res) => {
  let result = await userSchema.findOne({
    email: req.body.email,
    pass: req.body.pass,
  });
  if (result) {
    res.status(200).send("OK");
  } else {
    res.status(401).send("Invalid Information");
    console.log("Login failed for:", req.body.email);
  }
});

module.exports = app;

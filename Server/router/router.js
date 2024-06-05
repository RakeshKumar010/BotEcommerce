const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const express = require("express");
const app = express.Router();
const productModel = require("../schema/productSchema");
const userSchema = require("../schema/userSchema");
const couponSchema = require("../schema/couponSchema");
const productSchema = require("../schema/productSchema");
const LogoSchema = require("../schema/LogoSchema");
const carouselSchema=require("../schema/carouselSchema")

// post
app.post("/add-products", upload.array("image"), async (req, res) => {
  try {
    let productData = req.body;
    productData.image = req.files.map((file) => file.path); // Add image paths to product data

    let result = new productModel(productData);
    result = await result.save();
    res.send(result);
    
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while saving the product.");
  }
});
app.put("/product/:id", upload.array("image"), async (req, res) => {
  try {
    let productData = req.body;
    if (req.files) {
      productData.image = req.files.map((file) => file.path); // Add new image paths to product data
    }

    let result = await productSchema.updateOne(
      { _id: req.params.id },
      { $set: productData }
    );
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occurred while updating the product.");
  }
});

app.post("/add-logo", upload.single("image"), async (req, res) => {
  try {
    let logoData = {};
    logoData.logo = req.file.path; // Add image paths to logo data
    let result = new LogoSchema(logoData);
    result = await result.save();
    res.send(result);
  
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while saving the product.");
  }
});

app.post("/add-carousel", upload.single("image"), async (req, res) => {
  try {
    let carouselData = {};
    carouselData.carousel = req.file.path; // Add image paths to carousel data
    let result = new carouselSchema(carouselData);
    result = await result.save();
    res.send(result);
  
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while saving the product.");
  }
});

app.post("/admins", async (req, res) => {
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

//get
app.get("/product", async (req, res) => {
  let result = await productModel.find({ recycleId: "0" });
  res.send(result);
});
app.get("/",  (req, res) => {
   
  res.send({'mess':'Api is ok'});
});
app.get("/product/recycle-bin", async (req, res) => {
  let result = await productModel.find({ recycleId: "1" });
  res.send(result);
});
app.get("/coupon", async (req, res) => {
  let result = await couponSchema.find();
  res.send(result);
});
app.get("/coupon/:code", async (req, res) => {
  let result = await couponSchema.findOne({code:req.params.code});
  res.send(result);
});
app.get("/admins", async (req, res) => {
  let result = await userSchema.find();
  res.send(result);
});
app.get("/add-logo", async (req, res) => {
  let result = await LogoSchema.find();
  res.send(result);
});
app.get("/carousel", async (req, res) => {
  let result = await carouselSchema.find();
  res.send(result);
});
app.get("/admins/:id", async (req, res) => {
  let result = await userSchema.findOne({ _id: req.params.id });
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

// delete
app.delete("/carousel/:id", async (req, res) => {
  let result = await carouselSchema.deleteOne({ _id: req.params.id });
  res.send(result);
});
app.delete("/admins/:id", async (req, res) => {
  let result = await userSchema.deleteOne({ _id: req.params.id });
  res.send(result);
});
app.delete("/coupon/:id", async (req, res) => {
  let result = await couponSchema.deleteOne({ _id: req.params.id });
  res.send(result);
});
app.delete("/:id", async (req, res) => {
  let result = await productModel.deleteOne({ _id: req.params.id });
  res.send(result);
});

// put
app.put("/admins/:id", async (req, res) => {
  let result = await userSchema.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  res.send(result);
});
app.put("/product/:id", async (req, res) => {
  let result = await productSchema.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  res.send(result);
});
app.put("/recycle/:id", async (req, res) => {
  let result = await productSchema.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  res.send(result);
});
app.put("/restore/:id", async (req, res) => {
  let result = await productSchema.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  res.send(result);
});

app.put("/coupon/:id", async (req, res) => {
  let result = await couponSchema.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  res.send(result);
});

module.exports = app;

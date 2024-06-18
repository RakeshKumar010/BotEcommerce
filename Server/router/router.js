const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const express = require("express");
const app = express.Router();
const userSchema = require("../schema/userSchema");
const couponSchema = require("../schema/couponSchema");
const logoSchema = require("../schema/logoSchema");
const carouselSchema = require("../schema/carouselSchema");
const colorSchema = require("../schema/colorSchema");
const navSchema = require("../schema/navSchema");
const socialSchema = require("../schema/socialSchema");
const superAdminSchema = require("../schema/superAdminSchema");
const clientSchema = require("../schema/clientSchema");
const productSchema = require("../schema/productSchema");
 

// post
app.post("/add-products", upload.array("image"), async (req, res) => {
  try {
    let productData = req.body;
    productData.image = req.files.map((file) => file.path); // Add image paths to product data

    let result = new productSchema(productData);
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
    if (req.files && req.files.length > 0) {
      // Only add image paths if images are uploaded
      productData.image = req.files.map((file) => file.path);
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
 
app.post("/add-carousel", upload.single("image"), async (req, res) => {
  try {
    let carouselData = req.body;
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
app.post("/add-social-link", async (req, res) => {
  let result = await new socialSchema(req.body);
  result = await result.save();
  res.send(result);
});
app.post("/add-super-admin", async (req, res) => {
  let result = await new superAdminSchema(req.body);
  result = await result.save();
  res.send(result);
});
app.post("/add-coupon", async (req, res) => {
  let result = await new couponSchema(req.body);
  result = await result.save();
  res.send(result);
});
app.post("/add-client", async (req, res) => {
  let result = await new clientSchema(req.body);
  result = await result.save();
  res.send(result);
});
app.post("/add-color", async (req, res) => {
  let result = await new colorSchema(req.body);
  result = await result.save();
  res.send(result);
});
app.post("/add-nav-item", async (req, res) => {
  let result = await new navSchema(req.body);
  result = await result.save();
  res.send(result);
});
app.post("/add-logo", upload.single("image"), async (req, res) => {
  let logoData = req.body;
  logoData.logo = req.file.path;
  let result = await new logoSchema(logoData);
  result = await result.save();
  res.send(result);
});


app.post("/login", async (req, res) => {
  let result = await clientSchema.findOne({
    email: req.body.email,
    pass: req.body.pass,
  });
 
  if (result) {
   
    if(result.status=="1"){

      res.send(result)
    }else{
      res.status(200).send({"status":"deactivate"})
    }
  } else {
    res.status(401).send({"status":"Invalid Information"});
    console.log("Login failed for:", req.body.email);
  }
});
app.post("/super-admin-login", async (req, res) => {
  let result = await superAdminSchema.findOne({
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
  let result = await productSchema.find({ recycleId: "0" });
  res.send(result);
});
app.get("/", (req, res) => {
  res.send({ mess: "Api is ok" });
});
app.get("/product/recycle-bin", async (req, res) => {
  let result = await productSchema.find({ recycleId: "1" });
  res.send(result);
});
app.get("/coupon", async (req, res) => {
  let result = await couponSchema.find();
  res.send(result);
});
app.get("/show-client", async (req, res) => {
  let result = await clientSchema.find();
  res.send(result);
});
app.get("/nav-item", async (req, res) => {
  let result = await navSchema.find();
  res.send(result);
});
app.get("/client/:domain", async (req, res) => {
  let result = await clientSchema.findOne({ domain: req.params.domain });
  res.send(result);

});
app.get("/show-client/:id", async (req, res) => {
  let result = await clientSchema.findOne({ _id: req.params.id });
  res.send(result);

});
app.get("/coupon/:code", async (req, res) => {
  let result = await couponSchema.findOne({ code: req.params.code });
  res.send(result);
});
app.get("/admins", async (req, res) => {
  let result = await userSchema.find();
  res.send(result);
});
app.get("/logo", async (req, res) => {
  let result = await logoSchema.find();
  res.send(result);
});
app.get("/carousel", async (req, res) => {
  let result = await carouselSchema.find();
  res.send(result);
});
app.get("/color", async (req, res) => {
  let result = await colorSchema.find()
  res.send(result);
});
app.get("/social", async (req, res) => {
  let result = await socialSchema.find()
  res.send(result);
});
app.get("/admins/:id", async (req, res) => {
  let result = await userSchema.findOne({ _id: req.params.id });
  res.send(result);
});


app.get("/:id", async (req, res) => {
  let result = await productSchema.findOne({ _id: req.params.id });
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
app.delete("/delete-client/:id", async (req, res) => {
  let result = await clientSchema.deleteOne({ _id: req.params.id });
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
  let result = await productSchema.deleteOne({ _id: req.params.id });
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
app.put("/edit-client/:id", async (req, res) => {
  let result = await clientSchema.updateOne(
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
 

app.put("/coupon/:id", async (req, res) => {
  let result = await couponSchema.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  res.send(result);
});
app.put("/update-social-link/:id", async (req, res) => {
  let result = await socialSchema.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  res.send(result);
});
app.put("/update-logo/:id", upload.single("image"), async (req, res) => {
  let logoData = {};
  logoData.logo = req.file.path; // Add image paths to logo data
  let result = await logoSchema.updateOne(
    { _id: req.params.id },
    { $set: logoData }
  );

  res.send(result);
});
app.put("/update-color/:id", async (req, res) => {
  let result = await colorSchema.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  res.send(result);
});
app.put("/update-nav-item/:id", async (req, res) => {
  let result = await navSchema.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
   
  res.send(result);

});


module.exports = app;







const multer = require("multer");
const express = require("express");
const app = express.Router();
const couponSchema = require("../schema/couponSchema");
const logoSchema = require("../schema/logoSchema");
const carouselSchema = require("../schema/carouselSchema");
const colorSchema = require("../schema/colorSchema");
const navSchema = require("../schema/navSchema");
const cloudinary = require("../utils/cloudinary");
const socialSchema = require("../schema/socialSchema");
const superAdminSchema = require("../schema/superAdminSchema");
const clientSchema = require("../schema/clientSchema");
const productSchema = require("../schema/productSchema");
const bannerSchema = require("../schema/bannerSchema");
const titleSchema = require("../schema/titleSchema");
const faviconSchema = require("../schema/faviconSchema");
const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

// post

app.put(
  "/update-logo/:id",
  upload.fields([{ name: "image", maxCount: 1 }]),
  async (req, res) => {
    try {
      let logoData = req.body;
      const uploadToCloudinary = async (filePath) => {
        return await cloudinary.uploader.upload(filePath);
      };
      if (req.files.image) {
        const result = await uploadToCloudinary(req.files.image[0].path);
        logoData.logo = result.secure_url; // Add Cloudinary URL to product data
      }
      let result = await logoSchema.updateOne(
        { _id: req.params.id },
        { $set: logoData }
      );
      res.send(result);
    } catch (error) {
      console.error(error);
      res.status(500).send("An error occurred while saving the product.");
    }
  }
);

app.post(
  "/add-carousel",
  upload.fields([{ name: "image", maxCount: 1 }]),
  async (req, res) => {
    try {
      let carouselData = req.body;
      const uploadToCloudinary = async (filePath) => {
        return await cloudinary.uploader.upload(filePath);
      };
      if (req.files.image) {
        const result = await uploadToCloudinary(req.files.image[0].path);
        carouselData.carousel = result.secure_url; // Add Cloudinary URL to product data
      }

      let result = new carouselSchema(carouselData);
      result = await result.save();
      res.send(result);
    } catch (error) {
      console.error(error);
      res.status(500).send("An error occurred while saving the product.");
    }
  }
);

app.post(
  "/add-products",
  upload.fields([{ name: "image", maxCount: 10 }]),
  async (req, res) => {
    try {
      let productData = req.body;
      const uploadToCloudinary = async (filePath) => {
        return await cloudinary.uploader.upload(filePath);
      };
      if (req.files.image) {
        const productResults = await Promise.all(
          req.files.image.map((file) => uploadToCloudinary(file.path))
        );
        productData.image = productResults.map((result) => result.secure_url); // Add Cloudinary URLs to product data
      }

      let result = new productSchema(productData);
      result = await result.save();
      res.send(result);
    } catch (error) {
      console.error(error);
      res.status(500).send("An error occurred while saving the product.");
    }
  }
);
app.put(
  "/product/:id",
  upload.fields([{ name: "image", maxCount: 10 }]),
  async (req, res) => {
    try {
      let productData = req.body;
      const uploadToCloudinary = async (filePath) => {
        return await cloudinary.uploader.upload(filePath);
      };
      if (req.files.image) {
        const productResults = await Promise.all(
          req.files.image.map((file) => uploadToCloudinary(file.path))
        );
        productData.image = productResults.map((result) => result.secure_url); // Add Cloudinary URLs to product data
      }

      let result = await productSchema.updateOne(
        { _id: req.params.id },
        { $set: productData }
      );

      res.send(result);
    } catch (error) {
      console.error(error);
      res.status(500).send("An error occurred while saving the product.");
    }
  }
);

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

// app.post("/admins", async (req, res) => {
//   let result = await new userSchema(req.body);
//   result = await result.save();
//   res.send(result);
// });
app.post("/add-social-link", async (req, res) => {
  let result = await new socialSchema(req.body);
  result = await result.save();
  res.send(result);
});
app.post("/add-title", async (req, res) => {
  let result = await new titleSchema(req.body);
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

app.post(
  "/add-logo",
  upload.fields([{ name: "image", maxCount: 1 }]),
  async (req, res) => {
    try {
      let logoData = req.body;
      const uploadToCloudinary = async (filePath) => {
        return await cloudinary.uploader.upload(filePath);
      };
      if (req.files.image) {
        const result = await uploadToCloudinary(req.files.image[0].path);
        logoData.image = result.secure_url; // Add Cloudinary URL to product data
      }
      let result = new logoSchema(logoData);
      result = await result.save();
      res.send(result);
    } catch (error) {
      console.error(error);
      res.status(500).send("An error occurred while saving the product.");
    }
  }
);

app.post("/add-favicon", upload.single("image"), async (req, res) => {
  let faviconData = req.body;
  faviconData.favicon = req.file.path;
  let result = await new faviconSchema(faviconData);
  result = await result.save();
  res.send(result);
});

app.post("/add-banner", upload.single("image"), async (req, res) => {
  let bannerData = req.body;
  bannerData.banner = req.file.path;
  let result = await new bannerSchema(bannerData);
  result = await result.save();
  res.send(result);
});

app.post("/login", async (req, res) => {
  let result = await clientSchema.findOne({
    email: req.body.email,
    pass: req.body.pass,
  });

  if (result) {
    if (result.status == "1") {
      res.send(result);
    } else {
      res.status(200).send({ status: "deactivate" });
    }
  } else {
    res.status(401).send({ status: "Invalid Information" });
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
app.get("/title", async (req, res) => {
  let result = await titleSchema.find();
  res.send(result);
});
app.get("/favicon", async (req, res) => {
  let result = await faviconSchema.find();
  res.send(result);
});
app.get("/product/:clientId", async (req, res) => {
  let result = await productSchema.find({
    clientId: req.params.clientId,
    recycleId: "0",
  });
  res.send(result);
});
app.get("/", (req, res) => {
  res.send({ mess: "Api is ok" });
});
app.get("/deleted-product", async (req, res) => {
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

 
app.get("/show-client/:id", async (req, res) => {
  let result = await clientSchema.findOne({ _id: req.params.id });
  res.send(result);
});

app.get("/coupon/:code", async (req, res) => {
  let result = await couponSchema.findOne({ code: req.params.code });
  res.send(result);
});
 
 
app.get("/banner", async (req, res) => {
  let result = await bannerSchema.find();
  res.send(result);
});
app.get("/carousel", async (req, res) => {
  let result = await carouselSchema.find();
  res.send(result);
});
app.get("/color", async (req, res) => {
  let result = await colorSchema.find();
  res.send(result);
});
app.get("/social", async (req, res) => {
  let result = await socialSchema.find();
  res.send(result);
});
// app.get("/admins/:id", async (req, res) => {
//   let result = await userSchema.findOne({ _id: req.params.id });
//   res.send(result);
// });

app.get("/:id", async (req, res) => {
  let result = await productSchema.findOne({
    _id: req.params.id,
  });
  res.send(result);
});

app.get("/coupon-id/:id", async (req, res) => {
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
// app.delete("/admins/:id", async (req, res) => {
//   let result = await userSchema.deleteOne({ _id: req.params.id });
//   res.send(result);
// });
app.delete("/coupon/:id", async (req, res) => {
  let result = await couponSchema.deleteOne({ _id: req.params.id });
  res.send(result);
});
app.delete("/:id", async (req, res) => {
  let result = await productSchema.deleteOne({ _id: req.params.id });
  res.send(result);
});

// put
 

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

app.put("/update-favicon/:id", upload.single("image"), async (req, res) => {
  let faviconData = {};
  faviconData.favicon = req.file.path; // Add image paths to favicon data
  let result = await faviconSchema.updateOne(
    { _id: req.params.id },
    { $set: faviconData }
  );

  res.send(result);
});

app.put("/update-banner/:id", upload.single("image"), async (req, res) => {
  let bannerData = {};
  bannerData.banner = req.file.path; // Add image paths to banner data
  let result = await bannerSchema.updateOne(
    { _id: req.params.id },
    { $set: bannerData }
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
app.put("/update-title/:id", async (req, res) => {
  let result = await titleSchema.updateOne(
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

const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const Product = require("../models/products");
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

router.post("/", upload.array("productImage"), (req, res, next) => {
  console.log(req.file);
  const newProduct = new Product({
    name: req.body.name,
    price: req.body.price,
    desc: req.body.desc,
    productImage: req.file.path,
  });
  newProduct
    .save()
    .then((result) => {
      res.status(200).json({
        message: "Product added successfully",
        createedProduct: {
          name: result.name,
          price: result.price,
          desc: result.desc,
        },
        request: {
          type: "GET",
          url: "http://localhost:3001/products/" + result._id,
        },
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = router;

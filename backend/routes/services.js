const express = require("express");
const multer = require("multer");
const Service = require("../models/Services");
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./serviceImages/");
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

router.post("/", upload.single("serviceImage"), (req, res, next) => {
  const newService = new Service({
    serviceTitle: req.body.serviceTitle,
    description: req.body.description,
    serviceImage: req.file.path,
  });
  newService
    .save()
    .then((result) => {
      res.status(200).json({
        message: "Product added successfully",
        createdService: {
          serviceTitle: result.serviceTitle,
          description: result.description,
        },
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});

router.get("/", (req, res, next) => {
  Service.find()
    .select("serviceTitle description _id serviceImage")
    .exec()
    .then((docs) => {
      const respose = {
        services: docs.map((doc) => {
          return {
            _id: doc._id,
            serviceTitle: doc.serviceTitle,
            description: doc.description,
            serviceImage: doc.serviceImage,
          };
        }),
      };
      res.status(200).json(respose);
    })
    .catch((err) => {
      res.status(500).json({
        message: "No Record Found",
        error: err,
      });
    });
});

module.exports = router;

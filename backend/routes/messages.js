const express = require("express");
const mongoose = require("mongoose");
const Message = require("../models/Messages");
const router = express.Router();

router.post("/", (req, res, next) => {
  const newMessage = new Message({
    userName: req.body.userName,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    subject: req.body.subject,
    message: req.body.message,
  });
  newMessage
    .save()
    .then((result) => {
      res.status(200).json({
        message: "Message sent",
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});
module.exports = router;

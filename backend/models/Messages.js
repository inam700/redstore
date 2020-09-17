const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
});

module.exports = mongoose.model("Message", messageSchema);

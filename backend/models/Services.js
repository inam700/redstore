const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema({
  serviceTitle: { type: String, required: true },
  description: { type: String, required: true },
  serviceImage: { type: String, required: true },
});

module.exports = mongoose.model("Service", serviceSchema);

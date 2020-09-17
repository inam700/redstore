const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const productRoutes = require("./routes/products");
const messageRoutes = require("./routes/messages");
const serviceRoutes = require("./routes/services");

const app = express();
const PORT = process.env.PORT || 3001;

//MongoDB Connection
// require("dotenv").config();
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://127.0.0.1:27017/redstore", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());

app.use("/images", express.static("images"));
app.use("/serviceImages", express.static("serviceImages"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routes
app.use("/products", productRoutes);
app.use("/add_message", messageRoutes);
app.use("/services", serviceRoutes);

app.listen(PORT, (req, res) => {
  console.log(`Server is Running on PORT ${PORT}`);
});

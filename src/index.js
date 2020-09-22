require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("../src/routes");

app.use(cors());
app.use(express.json());
app.use(routes);

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(process.env.PORT || 3333);

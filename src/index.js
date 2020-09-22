const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("../src/routes");

app.use(cors());
app.use(express.json());
app.use(routes);

const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://city-action:Armall102030@cluster0.ja6oz.mongodb.net/city-action?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.listen(3333);

const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 4000;

const catagories = require("./data/catagories.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Nice to meet you!");
});

app.get("/news-catagories", (req, res) => {
  res.send(catagories);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

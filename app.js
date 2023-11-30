const express = require("express");
const app = express();
const cors = require("cors");



app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("hello");
});

app.post("/", async (req, res) => {

  await newComment.save();
  res.send("new Comment");
});

app.get("/hello", (req, res) => {
  res.send("<h1>Hello world </h1>");
});

module.exports = app;

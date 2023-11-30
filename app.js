const express = require("express");
const app = express();
const cors = require("cors");
const Comment = require("./models/user.model");
require("./config/db");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", async (req, res) => {
  const allComments = await Comment.find();
  res.send(allComments);
});

app.post("/", async (req, res) => {
  const newComment = new Comment({
    username: req.body.username,
    comment: req.body.comment,
  });
  await newComment.save();
  res.send(newComment);
});

app.get("/hello", (req, res) => {
  res.send("<h1>Hello world </h1>");
});

module.exports = app;

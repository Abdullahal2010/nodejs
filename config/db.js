const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://commment:commmentP@cluster0.engdssy.mongodb.net/commentDB"
  )
  .then(() => {
    console.log(`mongodb atlas is connected successfully`);
  })
  .catch((err) => {
    console.log({
      message: "mongodb atlas is failed to connect",
      error: err,
    });
  });

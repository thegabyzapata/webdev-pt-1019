const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    username: String,
    password: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("user", schema);

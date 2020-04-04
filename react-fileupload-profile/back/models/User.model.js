const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    username: String,
    password: String,
    profilePic: Object,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", schema);

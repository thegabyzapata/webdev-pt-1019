const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    taName: String,
    taFrase: String,
    taMola: { type: Boolean, default: false }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("fraseta", schema);

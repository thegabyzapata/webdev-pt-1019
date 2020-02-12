const mongoose = require("mongoose");
const schema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    quantity: { type: Number, required: true }
  },
  {
    timestamps: true
  }
);

const model = mongoose.model("ventas", schema);

module.exports = model;

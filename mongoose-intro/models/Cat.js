const mongoose = require("mongoose");

// https://mongoosejs.com/docs/validation.html
const catSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    edad: Number,
    aficiones: { type: [String], default: ["Ninguna"] }
  },
  {
    timestamps: true
  }
);

const catModel = mongoose.model("cat", catSchema);
module.exports = catModel;

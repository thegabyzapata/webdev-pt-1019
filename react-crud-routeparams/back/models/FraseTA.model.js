const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema.Types;

const schema = new mongoose.Schema(
  {
    ta: { type: ObjectId, ref: "ta" },
    creator: { type: ObjectId, ref: "user" },
    frase: String,
    valoracion: [
      {
        stars: Number,
        user: { type: ObjectId, ref: "user" }
      }
    ]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("frase", schema);

const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const schema = new mongoose.Schema(
  {
    nombre: String,
    edad: Number,
    system_user: { type: ObjectId, ref: "user" }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("ta", schema);

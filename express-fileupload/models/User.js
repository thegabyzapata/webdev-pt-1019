const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    username: { type: String, unique: true, index: true },
    password: String,
    githubId: { type: Number },
    picture: { type: String, default: "https://via.placeholder.com/150" },
    visitas: { type: Number, default: 0 }
  },
  {
    timestamps: true
  }
);

const model = mongoose.model("user", schema);

model.collection
  .createIndexes([
    {
      key: { username: 1 },
      name: "username"
    }
  ])
  .catch(e => console.log(e));

module.exports = model;

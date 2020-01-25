const mongoose = require("mongoose");
require("dotenv").config();

const dbUrl = process.env.DBURL;

mongoose
  .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`Connected to db: ${dbUrl}`);
    return mongoose.disconnect();
  })
  .then(() => {
    console.log("Disconnected from db!");
  })
  .catch(e => {
    console.log("Error in database");
  });

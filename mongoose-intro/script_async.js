const mongoose = require("mongoose");
const Cat = require("./models/Cat");
const _ = require("lodash");
require("dotenv").config();

const dbUrl = process.env.DBURL;

// Main function
(async () => {
  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Connection Ready");

    // Delete the data
    await Cat.collection.drop();
    console.log("Data deleted");

    // Create the data
    /*for (let i = 0; i < 10; i++) {
      await Cat.create({ name: `Garfield${i}`, edad: 10 });
    }*/

    // Create the data refactor
    const cats = await Promise.all(
      _.range(10).map(i => Cat.create({ name: `Garfield${i}`, edad: 10 }))
    );
    console.log(cats);

    console.log("Data created!");
  } catch (error) {
    console.log("ERROR");
    console.log(error);
  } finally {
    // Disconnect from database
    await mongoose.disconnect();
    console.log("disconnected");
  }
})();

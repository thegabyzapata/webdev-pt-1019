const withDbConnection = require("./withDbConnection");
const Cat = require("./models/Cat");

withDbConnection(async () => {
  /*
  const cats = await Cat.find({ name: "Garfield5" });
  console.log(cats);
  cats[0].name = "Felix";
  await cats[0].save();
  */

  const cat = await Cat.findOne({ name: "Garfield1" });
  if (cat) {
    cat.name = "Felix";
    await cat.save();
    console.log("Saved cat");
  } else {
    console.log("no cat found");
  }
});

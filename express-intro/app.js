const express = require("express");
const _ = require("lodash");
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.get("/static/homer.jpg", (req, res) => {
  res.sendFile(__dirname + "/static/lisa.png");
});

app.use("/static", express.static("static"));

app.get("/", (req, res) => {
  const color = _.sample(["red", "blue", "green", "pink", "hotpink"]);
  const owner = _.sample(["Marc", "Diego", "Giorgio", "Alejandro", "Simon"]);
  res.render("index", { owner, color });
});

app.get("/about", (req, res) => {
  res.render("about", { nombre: "<b>pepe</b>" });
});

// Inicia el servidor en el puerto que toque
const port = 3000;
app.listen(port, () => console.log(`Ready express on port ${port}`));

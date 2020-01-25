const express = require("express");
const bodyParser = require("body-parser");
const listaRouter = require("./routes/listaCompraRoutes");
const morgan = require("morgan");

const app = express();

app.set("view engine", "hbs");
app.use(morgan("dev"));

app.use("/public", express.static(__dirname + "/static"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*
app.use((req, res, next) => {
  console.log("METHOD:", req.method);
  console.log("QUERYPARAMS:", req.query);
  console.log("BODY:", req.body);
  next();
});
*/

app.use("/", listaRouter);

const port = 3000;
new Promise(resolve => app.listen(port, resolve)).then(() => {
  console.log(`Ready on port ${port}`);
});

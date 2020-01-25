const { Router } = require("express");

const router = new Router();

const lista = [];

router.get("/", (req, res) => {
  res.render("home", { lista });
});

router.get("/create", (req, res) => {
  res.render("create");
});

/*
router.get("/receive", (req, res) => {
  // query parameters for this request
  console.log(req.query);

  const { item, quantity } = req.query;
  lista.push({ item, quantity });
  console.log(`Añadir a la lista de la compra (x${quantity}) ${item}`);
  res.redirect("/");
});*/

router.post("/create", (req, res, next) => {
  // query parameters for this request
  console.log(req.query);
  console.log(req.body);

  const { item, quantity } = req.body;
  lista.push({ item, quantity });
  console.log(`Añadir a la lista de la compra (x${quantity}) ${item}`);
  res.redirect("/");
});

module.exports = router;

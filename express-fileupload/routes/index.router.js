const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../lib/isLoggedMiddleware");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/private", isLoggedIn(), (req, res, next) => {
  res.render("private");
});

router.get("/private2", isLoggedIn("/"), (req, res, next) => {
  res.render("private2");
});

module.exports = router;

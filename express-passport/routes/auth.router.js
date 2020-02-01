const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { hashPassword, checkHashed } = require("../lib/hashing");
const { debug, err } = require("@faable/flogg");

// router.get("/register", (req, res, next) => {
//   Promise.reject("MAL")
//     .then(() => res.render("auth/register"))
//     .catch(e => {
//       next(e);
//     });
// });

// router.get("/register", async (req, res, next) => {
//   try {
//     await Promise.reject("MAL");
//     res.render("auth/register");
//   } catch (e) {
//     err(e);
//     next(e);
//   }
// });

router.get("/register", (req, res, next) => {
  debug("Hola");
  res.render("auth/register");
});

router.post("/register", async (req, res, next) => {
  const { username, password } = req.body;
  const existingUser = await User.findOne({ username });
  if (!existingUser) {
    const newUser = await User.create({
      username,
      password: hashPassword(password)
    });
    debug(newUser);
    return res.redirect("/auth/register");
  } else {
    debug("User already exists with this username");
    debug(existingUser);
    req.flash("User already exists with this username");
    return res.redirect("/auth/register");
  }
});

router.get("/login", (req, res, next) => {
  res.render("auth/login");
});

router.post("/login", async (req, res, next) => {
  const { username, password } = req.body;
  const existingUser = await User.findOne({ username });

  // this user does not exist
  if (!existingUser) {
    debug("user does not exist");
    req.flash("Bad credentials");
    return res.redirect("/auth/login");
  }

  // password missmatch
  if (!checkHashed(password, existingUser.password)) {
    debug("password missmatch");
    req.flash("Bad credentials");
    return res.redirect("/auth/login");
  }

  // User login successful
  debug(`Welcome ${existingUser.username}`);

  // CONFIGURA LA SESION DE USUARIO
  req.session.currentUser = existingUser;

  return res.redirect("/");
});

router.get("/logout", async (req, res, next) => {
  req.session.currentUser = null;
  return res.redirect("/");
});

module.exports = router;

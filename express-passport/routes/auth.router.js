const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { hashPassword, checkHashed } = require("../lib/hashing");
const { debug, err } = require("@faable/flogg");
const passport = require("passport");
const { isLoggedIn, isLoggedOut } = require("../lib/isLoggedMiddleware");

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

router.get("/register", isLoggedOut(), (req, res, next) => {
  debug("Hola");
  res.render("auth/register");
});

router.post("/register", isLoggedOut(), async (req, res, next) => {
  const { username, password } = req.body;
  const existingUser = await User.findOne({ username });
  if (!existingUser) {
    const newUser = await User.create({
      username,
      password: hashPassword(password)
    });
    debug(newUser);
    req.flash(`Created user ${username}`);

    return res.redirect("/");
  } else {
    debug("User already exists with this username");
    debug(existingUser);
    req.flash("User already exists with this username");
    return res.redirect("/auth/register");
  }
});

router.get("/login", isLoggedOut(), (req, res, next) => {
  res.render("auth/login");
});

router.post(
  "/login",
  isLoggedOut(),
  passport.authenticate("local", { successRedirect: "/", failureRedirect: "/" })
);

router.get("/login/github", isLoggedOut(), passport.authenticate("github"));
router.get(
  "/github/callback",
  isLoggedOut(),
  passport.authenticate("github", {
    failureRedirect: "/"
  }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect("/");
  }
);

router.get("/logout", isLoggedIn(), async (req, res, next) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;

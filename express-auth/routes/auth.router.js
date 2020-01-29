const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { hashPassword, checkHashed } = require("../lib/hashing");

router.get("/register", (req, res, next) => {
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
    console.log(newUser);
    return res.redirect("/");
  } else {
    console.log("User already exists with this username");
    console.log(existingUser);
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
    console.log("user does not exist");
    return res.redirect("/auth/login");
  }

  // password missmatch
  if (!checkHashed(password, existingUser.password)) {
    console.log("password missmatch");
    return res.redirect("/auth/login");
  }

  // User login successful
  console.log(`Welcome ${existingUser.username}`);
  req.session.currentUser = existingUser;
  return res.redirect("/");
});

router.get("/logout", async (req, res, next) => {
  req.session.currentUser = null;
  return res.redirect("/");
});

module.exports = router;

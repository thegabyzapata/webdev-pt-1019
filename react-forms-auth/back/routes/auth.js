const express = require("express");
const UserModel = require("../models/User.model");
const passport = require("passport");
const _ = require("lodash");
const router = express.Router();

// REGISTER A USER
router.post("/signup", async (req, res, next) => {
  const { username, password } = req.body;
  // Create the user
  const newUser = await UserModel.create({ username, password });

  // Directly login user
  req.logIn(newUser, err => {
    res.json(_.pick(req.user, ["username", "_id", "createdAt", "updatedAt"]));
  });
});

// LOGIN
router.post("/login", passport.authenticate("local"), (req, res) => {
  // Return the logged in user
  res.json(_.pick(req.user, ["username", "_id", "createdAt", "updatedAt"]));
});

module.exports = router;

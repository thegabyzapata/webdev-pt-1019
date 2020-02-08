const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../lib/isLoggedMiddleware");
const { upload } = require("../lib/multerLocalStoreMiddleware");

const { asyncController } = require("../lib/asyncControler");

router.get("/settings", isLoggedIn(), (req, res, next) => {
  res.render("user/settings");
});

router.post(
  "/settings",
  isLoggedIn(),
  upload.single("profilepic"),
  asyncController(async (req, res, next) => {
    console.log("BODY");
    console.log(req.body);
    console.log(req.file);
    const { username } = req.body;
    const loggedUser = req.user;

    // Update user in database
    loggedUser.username = username;
    await loggedUser.save();

    req.flash("info", "Updated user!");
    res.redirect("/user/settings");
  })
);

module.exports = router;

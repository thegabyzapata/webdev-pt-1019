const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../lib/isLoggedMiddleware");
const { upload, uploadCloud } = require("../lib/multerMiddleware");

const { asyncController } = require("../lib/asyncControler");

router.get("/settings", isLoggedIn(), (req, res, next) => {
  res.render("user/settings");
});

router.post(
  "/settings",
  isLoggedIn(),
  uploadCloud.single("profilepic"),
  asyncController(async (req, res, next) => {
    console.log("BODY");
    console.log(req.body);
    console.log(req.file);
    const { username } = req.body;
    const loggedUser = req.user;

    // Update user in database
    loggedUser.username = username;
    if (req.file) {
      loggedUser.picture = req.file;
    }
    await loggedUser.save();

    req.flash("info", "Updated user!");
    res.redirect("/user/settings");
  })
);

module.exports = router;

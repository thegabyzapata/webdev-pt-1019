import { Router } from "express";
import { upload, uploadCloudinaryAvatar } from "../middleware/uploader";
const User = require("../models/User.model");
const router = Router();

router.post(
  "/profilepic",
  uploadCloudinaryAvatar.single("avatar"),
  async (req, res) => {
    console.log(req.file);
    const user = req.user;

    // if there was previous profile pic, delete it

    // Set the new profile pic
    user.profilePic = req.file;
    const updatedUser = await user.save();

    return res.json({ status: "Uploaded completed", user: updatedUser });
  }
);

module.exports = router;

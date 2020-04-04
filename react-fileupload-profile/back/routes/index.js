import { Router } from "express";
import { upload } from "../middleware/uploader";
const User = require("../models/User.model");
export const router = Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.json({ status: "Welcome" });
});

router.post("/profilepic", upload.single("avatar"), async (req, res) => {
  console.log(req.file);
  const user = req.user;

  // if there was previous profile pic, delete it

  // Set the new profile pic
  user.profilePic = req.file;
  const updatedUser = await user.save();

  return res.json({ status: "Uploaded completed", user: updatedUser });
});

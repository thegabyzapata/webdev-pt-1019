import React from "react";
import { withProtected } from "../../lib/protectRoute.hoc";
import { useUser, useUserSetter } from "../../lib/auth.api";
import { useForm } from "react-hook-form";
import { changeAvatar } from "../../lib/user.api";
import _ from "lodash";

const cloudinary = require("cloudinary-core");
const cl = cloudinary.Cloudinary.new({ cloud_name: "driuopbnh" });

export const ProfilePage = withProtected(() => {
  const user = useUser();
  const setUser = useUserSetter();
  const { handleSubmit, register } = useForm();

  const onSubmit = (values) => {
    const myAvatar = values.avatar[0];
    console.log(myAvatar);
    changeAvatar(myAvatar)
      .then((res) => {
        console.log("Changed File");
        setUser(res.data.user);
      })
      .catch((e) => {
        console.log("Error uploading file");
        console.log(e);
      });
  };

  let imgPath;
  if (user.profilePic) {
    // LOCAL FILE
    const localPath = _.get(user, "profilePic.path");
    if (localPath) {
      imgPath = `http://localhost:3000/${localPath}`;
    } else {
      // CLOUDINARY FILE
      //imgPath = _.get(user, "profilePic.url");
      const imgID = _.get(user, "profilePic.public_id");
      console.log("Generate image", imgID);
      imgPath = cl.url(imgID, { width: 200, crop: "fit" });
      console.log(imgPath);
    }
  }

  return (
    <div>
      <h2>Profile of {user.username}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ padding: "10px 0" }}>
          {imgPath && (
            <div>
              <img
                src={imgPath}
                width="200"
                style={{ border: "1px solid red" }}
              />
            </div>
          )}
          <input name="avatar" type="file" ref={register()} />
        </div>

        <button type="submit">Change Profile Pic</button>
      </form>
    </div>
  );
});

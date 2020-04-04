import React from "react";
import { withProtected } from "../../lib/protectRoute.hoc";
import { useUser, useUserSetter } from "../../lib/auth.api";
import { useForm } from "react-hook-form";
import { changeAvatar } from "../../lib/user.api";

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

  return (
    <div>
      <h2>Profile of {user.username}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ padding: "10px 0" }}>
          <div>
            <img
              src={`http://localhost:3000/${user.profilePic?.path}`}
              width="200"
              style={{ border: "1px solid red" }}
            />
          </div>
          <input name="avatar" type="file" ref={register()} />
        </div>
        <button type="submit">Change Profile Pic</button>
      </form>
    </div>
  );
});

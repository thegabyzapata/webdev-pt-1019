import { api } from "./api";

export const changeAvatar = async (avatarFile) => {
  const data = new FormData();
  data.append("avatar", avatarFile);
  return api.post("/profilepic", data);
};

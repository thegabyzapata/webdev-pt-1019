import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

export const changeAvatar = async (avatarFile) => {
  const data = new FormData();
  data.append("avatar", avatarFile);
  return api.post("/profilepic", data);
};

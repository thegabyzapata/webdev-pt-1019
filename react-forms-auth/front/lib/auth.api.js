import axios from "axios";
import React, { useContext } from "react";

export const UserContext = React.createContext();

export const useUser = () => {
  const userState = useContext(UserContext);
  return userState.user;
};

export const useUserSetter = () => {
  const userState = useContext(UserContext);
  return userState.setUser;
};

export const useUserLogout = () => {
  const userState = useContext(UserContext);
  return () => {
    console.log("log out!");
    userState.setUser(null);
  };
};

const api = axios.create({ baseURL: "http://localhost:3000" });

export const doSignup = async (username, password) => {
  // Axios post a ruta /auth/signup en servidor
  // para crear un usuario en mongodb
  console.log(`Registrando usuario...`);
  console.log(username, password);
  const res = await api.post("/auth/signup", {
    username,
    password
  });
  console.log("Created User");
  console.log(res.data);
  return res.data;
};

export const doLogin = async (username, password) => {
  console.log("Do Login");
  const res = await api.post("/auth/login", {
    username,
    password
  });
  console.log(res.data);
  return res.data;
};

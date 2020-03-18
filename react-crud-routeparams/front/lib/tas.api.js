import axios from "axios";
import _ from "lodash";

const instance = axios.create({ baseURL: "http://localhost:3000" });

export const listAllTas = async () => {
  const res = await instance.get(`/ta`);
  console.log(res.data);
  return res.data;
};

export const deleteTa = async idTa => {
  const res = await instance.get(`/ta/delete/${idTa}`);
  console.log(res.data);
  return res.data;
};

export const getFrasesFromTa = async idTa => {
  const res = await instance.get(`/frase`);
  // Filter for specific ta
  const all = _.filter(res.data, { ta: { _id: idTa } });

  console.log(all);
  return all;
};

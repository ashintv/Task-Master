import axios from "axios";

const API = axios.create({
  baseURL: "https://taskmaster-backend-str1.onrender.com/api/",
});

export const loginUser = async (credentials) => {
  const res = await API.post("/auth/login/", credentials);
  return res.data;
};
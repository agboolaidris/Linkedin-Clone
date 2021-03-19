import axios from "axios";

export const register = (data) => axios.post("/auth/register", data);

export const login = (data) =>
  axios.post("/auth/login", data, { withCredentials: true });

export const persistance = () =>
  axios.get("/auth/persistence", { withCredentials: true });

export const logout = () =>
  axios.post("/auth/logout", {}, { withCredentials: true });

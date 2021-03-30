import axios from "axios";

export const getUserProfile = () =>
  axios.get("/profile", { withCredentials: true });

export const postUserProfile = (data) =>
  axios.post("/profile", data, { withCredentials: true });

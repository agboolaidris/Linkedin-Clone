import axios from "axios";

export const getUserProfile = () =>
  axios.get("/profile", { withCredentials: true });

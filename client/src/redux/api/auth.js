import axios from "axios";

export const register = (data) => axios.post("/auth/register", data);

import axios from "axios";

const api = axios.create({
  baseURL: "/api",
  withCredentials: true, // cookies enabled
});

export default api;
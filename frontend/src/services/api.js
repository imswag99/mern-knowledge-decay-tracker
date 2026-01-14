import axios from "axios";

const api = axios.create({
  baseURL: "https://mern-knowledge-decay-tracker.onrender.com/api",
  withCredentials: true, // cookies enabled
});

export default api;
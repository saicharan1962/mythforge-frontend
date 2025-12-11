// src/api/api.js
import axios from "axios";

const api = axios.create({
  baseURL:
    "https://mythforgedb-afabdpb4chbtbffs.centralus-01.azurewebsites.net/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach token for every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Global error handler
api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/auth";
    } else {
      console.error("API Error:", err.response?.data || err.message);
    }
    return Promise.reject(err);
  }
);

export default api;

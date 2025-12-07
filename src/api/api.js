// src/api/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5001/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach token to every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  } else {
    console.warn("⚠️ No auth token found in localStorage");
  }
  return config;
});

// Handle errors globally
api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      console.error("🔒 Unauthorized — Redirecting to /auth");
      localStorage.removeItem("token");
      window.location.href = "/auth";
    } else if (err.response) {
      console.error(
        `❌ API Error [${err.response.status}]:`,
        err.response.data || err.response.statusText
      );
    } else {
      console.error("❌ API Connection Error:", err.message);
    }

    return Promise.reject(err);
  }
);

export default api;

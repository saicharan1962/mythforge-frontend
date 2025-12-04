// src/api/api.js
import axios from "axios";

/**
 * Create a preconfigured Axios instance for MythForge API calls
 * Backend: http://localhost:5001/api
 */
const api = axios.create({
  baseURL: "http://localhost:5001/api", // ✅ matches your backend port and prefix
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Request interceptor
 * Attach JWT token to every outgoing request
 */
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  } else {
    console.warn("⚠️ No auth token found in localStorage");
  }
  return config;
});

/**
 * Response interceptor
 * If backend responds 401 => clear token and redirect to login
 */
api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      console.error("🔒 Unauthorized — Redirecting to /auth");
      localStorage.removeItem("token");
      window.location.href = "/auth"; // Redirect to login page
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
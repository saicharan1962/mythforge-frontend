// src/pages/Auth.jsx
import React, { useState, useEffect } from "react";
import api from "../api/api";
import "./Auth.css";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // 🔥 Clear old messages when switching between Login / Signup
  useEffect(() => {
    setMessage("");
  }, [isLogin]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🔥 FIX: remove leftover error message BEFORE starting login
    setMessage("");

    try {
      if (isLogin) {
        const res = await api.post("/auth/login", {
          email: formData.email,
          password: formData.password,
        });

        const token = res.data.token;
        localStorage.setItem("token", token);

        setMessage("✅ Login successful!");

        // Fetch user role & redirect
        const userRes = await api.get("/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const role = userRes.data?.user?.role || "user";

        window.location.href =
          role === "admin" ? "/admin/dashboard" : "/dashboard";
      } else {
        await api.post("/auth/register", formData);
        setMessage("🎉 Registration successful! You can now log in.");
        setIsLogin(true);
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ " + (err.response?.data?.message || "Server error"));
    }
  };

  return (
    <div
      className="auth-container"
      style={{
        backgroundImage: `url("/assets/constellation.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="auth-box">
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          {/* Password Field */}
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                // Open eye (hide toggle)
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="#FFD700"
                  width="20"
                  height="20"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.875 18.825A10.05 10.05 0 0112 19
                     c-5 0 -9.27 -3.11 -11 -7
                     1.02 -2.37 2.9 -4.38 5.27 -5.56m3.32 -1.13A9.99 9.99 0 0112 5
                     c5 0 9.27 3.11 11 7
                     a9.984 9.984 0 01 -4.66 5.33M15 12
                     a3 3 0 11 -6 0 3 3 0 016 0z"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18" />
                </svg>
              ) : (
                // Closed eye (show toggle)
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="#FFD700"
                  width="20"
                  height="20"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.458 12
                     C3.732 7.943 7.523 5 12 5
                     c4.477 0 8.268 2.943 9.542 7
                     -1.274 4.057 -5.065 7 -9.542 7
                     c-4.477 0 -8.268 -2.943 -9.542 -7z"
                  />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              )}
            </button>
          </div>

          <button type="submit">
            {isLogin ? "Login" : "Create Account"}
          </button>
        </form>

        <p className="switch-mode">
          {isLogin ? (
            <>
              Not a member?{" "}
              <span onClick={() => setIsLogin(false)}>Sign up</span>
            </>
          ) : (
            <>
              Already a member?{" "}
              <span onClick={() => setIsLogin(true)}>Login</span>
            </>
          )}
        </p>

        {message && <p className="auth-message">{message}</p>}
      </div>
    </div>
  );
};

export default AuthPage;
  
// src/pages/Dashboard.jsx
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./Dashboard.css";

export default function Dashboard() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (!user) {
    return (
      <div className="dashboard-loading">
        <h2>Loading user data...</h2>
      </div>
    );
  }

  return (
    <div className="dashboard-fullscreen">
      {/* === Top Navbar === */}
      <nav className="dashboard-navbar">
        <h1 className="navbar-title">Welcome to MythForge</h1>
        <button className="btn logout" onClick={handleLogout}> Logout</button>
      </nav>

      {/* === Main Content === */}
      <div className="dashboard-main">
        <h2 className="user-greeting">Hello, {user.username}!</h2>
        <p className="user-info"><strong>Email:</strong> {user.email}</p>

        <div className="main-buttons">
          <button className="btn create" onClick={() => navigate("/create")}>
            ✍️ Create Myth Narrative
          </button>
          <button className="btn view" onClick={() => navigate("/myths")}>
            📜 View My Myths
          </button>
          <button className="btn share" onClick={() => navigate("/share")}>
            🌠 Share Your Myth
          </button>
        </div>
      </div>
    </div>
  );
}
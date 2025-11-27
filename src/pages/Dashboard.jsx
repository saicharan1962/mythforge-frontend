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
      <div className="dashboard-container">
        <div className="welcome-card">
          <h2>Loading user data...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <div className="welcome-card">
        <h1>Welcome to MythForge</h1>
        <h2>Hello, {user.username}!</h2>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role}</p>

        {user.role === "user" && (
          <div className="role-panel user">
            <h3>🧙‍♂️ User Dashboard</h3>
            <p>Create, explore, and share your mythic journey.</p>
            <div className="dashboard-buttons">
              <button className="btn create" onClick={() => navigate("/create")}>
                ✍️ Create Myth Narrative
              </button>
              <button className="btn view" onClick={() => navigate("/myths")}>
                📜 View My Myths
              </button>
              <button className="btn share" onClick={() => navigate("/share")}>
                🌠 Share Your Myth
              </button>
              <button className="btn logout" onClick={handleLogout}>
                🚪 Logout
              </button>
            </div>
          </div>
        )}

        {user.role === "admin" && (
          <div className="role-panel admin">
            <h3>👑 Admin Control Panel</h3>
            <p>Manage users, myths, and global platform policies.</p>
            <div className="dashboard-buttons">
              <button className="btn manage-users" onClick={() => navigate("/admin/users")}>
                🧩 Manage Users (IAM)
              </button>
              <button className="btn manage-myths" onClick={() => navigate("/admin/myths")}>
                ⚡ Manage Myths
              </button>
              <button className="btn analytics" onClick={() => navigate("/admin/analytics")}>
                📊 Platform Analytics
              </button>
              <button className="btn logout" onClick={handleLogout}>
                🚪 Logout
              </button>
            </div>
          </div>
        )}

        {user.role === "guest" && (
          <div className="role-panel guest">
            <h3>👤 Guest Mode</h3>
            <p>You are browsing in guest mode. Please register or log in to unlock full MythForge functionality.</p>
            <button className="btn create" onClick={() => navigate("/auth")}>
              🔑 Log In / Register
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

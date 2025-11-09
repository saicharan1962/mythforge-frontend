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

  return (
    <div className="dashboard-container">
      <div className="welcome-card">
        <h1>Welcome to MythForge</h1>
        {user ? (
          <>
            <h2>Hello, {user.username}!</h2>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Role:</strong> {user.role}</p>

            <div className="dashboard-buttons">
              <button className="btn create" onClick={() => navigate("/create")}>
                ✍️ Create Myth
              </button>
              <button className="btn view" onClick={() => navigate("/myths")}>
                📜 View Myths
              </button>
              <button className="btn ai" onClick={() => navigate("/mythai")}>
                🤖 Ask the AI
              </button>
              <button className="btn logout" onClick={handleLogout}>
                🚪 Logout
              </button>
            </div>

            {/* Role-based section */}
            {user.role === "admin" && (
              <div className="role-panel admin">
                <h3>👑 Admin Panel</h3>
                <p>You have administrative privileges and can manage all users and myths.</p>
              </div>
            )}

            {user.role === "user" && (
              <div className="role-panel user">
                <h3>🧙‍♂️ User Dashboard</h3>
                <p>Welcome back! You can create new myths or consult the AI for inspiration.</p>
              </div>
            )}

            {user.role === "guest" && (
              <div className="role-panel guest">
                <h3>👤 Guest Mode</h3>
                <p>Please register or log in to unlock full MythForge functionality.</p>
              </div>
            )}
          </>
        ) : (
          <p>Loading user data...</p>
        )}
      </div>
    </div>
  );
}

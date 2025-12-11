<<<<<<< HEAD
//Myth.jsx//

import React from "react";
=======
// src/pages/Myths.jsx
import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
import { AuthContext } from "../context/AuthContext";
import "./Myths.css";
>>>>>>> 1e8ab34ccebd63190b456adfbd7c97fe23cbaaab

export default function Myths() {
  const { user, logout } = useContext(AuthContext);
  const [myths, setMyths] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const testConnection = async () => {
      try {
        const ping = await api.get("/ping");
        console.log("✅ Backend Ping Success:", ping.data);
      } catch (err) {
        console.error("❌ Cannot reach backend:", err.message);
      }
    };

    const fetchMyths = async () => {
      try {
        console.log("⚙️ Fetching myths from backend...");
        const res = await api.get("/myths");
        console.log("✅ Myths response:", res.data);
        setMyths(res.data.myths || []);
      } catch (error) {
        console.error("🚨 Error fetching myths:", error);
        alert("Error fetching myths — check backend connection or token.");
      } finally {
        setLoading(false);
      }
    };

    testConnection();
    fetchMyths();
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleBack = () => {
    navigate("/dashboard");
  };

  const handleViewMyth = (myth) => {
    navigate(`/myth/${myth.myth_id}`);
  };

  if (loading) {
    return (
      <div className="myths-loading">
        🔮 Retrieving your mythic chronicles...
      </div>
    );
  }

  return (
    <div className="myths-fullscreen">
      {/* === Navbar === */}
      <nav className="dashboard-navbar">
        <h1 className="navbar-title">Your Created Myths</h1>
        <div className="nav-buttons">
          <button className="btn back" onClick={handleBack}>
             Dashboard
          </button>
          <button className="btn logout" onClick={handleLogout}>
             Logout
          </button>
        </div>
      </nav>

      {/* === Myth List Section === */}
      <div className="myths-container">
        {myths.length === 0 ? (
          <p className="empty-msg">No myths yet — forge some tales!</p>
        ) : (
          <ul className="myths-grid">
            {myths.map((myth) => (
              <li
                key={myth.myth_id}
                className="myth-card"
                onClick={() => handleViewMyth(myth)}
              >
                <h2>{myth.title}</h2>
                <p>🕰 {new Date(myth.created_at).toLocaleString()}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
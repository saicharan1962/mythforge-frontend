// src/pages/Myths.jsx
import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
import { AuthContext } from "../context/AuthContext";
import "./Myths.css";

export default function Myths() {
  const { logout } = useContext(AuthContext);
  const [myths, setMyths] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMyths = async () => {
      try {
        const res = await api.get("/myths");
        setMyths(res.data.myths || []);
      } catch (error) {
        console.error("Error fetching myths:", error);
      } finally {
        setLoading(false);
      }
    };
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
    return <div className="myths-loading">Retrieving your chronicles...</div>;
  }

  return (
    <div className="myths-fullscreen">
      <nav className="dashboard-navbar">
        <h1 className="navbar-title">Your Created Myths</h1>
        <div className="nav-buttons">
          <button className="btn back" onClick={handleBack}>Dashboard</button>
          <button className="btn logout" onClick={handleLogout}>Logout</button>
        </div>
      </nav>

      <div className="myths-container">
        {myths.length === 0 ? (
          <p className="empty-msg">No myths yet — forge one!</p>
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

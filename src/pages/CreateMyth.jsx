import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
import { AuthContext } from "../context/AuthContext";
import "./CreateMyth.css";

const CreateMyth = () => {
  const [event, setEvent] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!event.trim()) return alert("Please describe your life event.");

    setLoading(true);
    try {
      // Backend automatically chooses deity & creates narrative
      const res = await api.post("/myths", { event });

      // Navigate to the new myth detail
      if (res.data?.myth?.myth_id) {
        navigate(`/myth/${res.data.myth.myth_id}`);
      } else {
        alert("Myth created successfully!");
        navigate("/myths");
      }
    } catch (err) {
      console.error("Myth creation failed:", err);
      alert("Failed to create myth. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <>
      {/* === Navbar === */}
      <nav className="dashboard-navbar">
        <h1 className="navbar-title">Forge Your Myth</h1>
        <div className="nav-buttons">
          <button className="btn back" onClick={handleDashboard}>
            Dashboard
          </button>
          <button className="btn logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>

      {/* === Create Form === */}
      <div className="create-page">
        <div className="create-card">
          <form onSubmit={handleSubmit}>
            <textarea
              placeholder="Describe your life event..."
              value={event}
              onChange={(e) => setEvent(e.target.value)}
              required
            />
            <button type="submit" disabled={loading}>
              {loading ? "Forging your myth..." : "Generate Myth Narrative"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateMyth;
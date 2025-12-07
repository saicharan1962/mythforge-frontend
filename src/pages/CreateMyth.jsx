// src/pages/CreateMyth.jsx 
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
import { AuthContext } from "../context/AuthContext";
import "./CreateMyth.css";

const CreateMyth = () => {
  const [event, setEvent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!event.trim()) {
      setError("Please describe your life event before forging a myth.");
      return;
    }

    setLoading(true);

    try {
      // STEP 1: Save the life event
      const today = new Date().toLocaleDateString("en-CA");

      const lifeEventRes = await api.post("/life-events", {
        title: event.split("\n")[0].slice(0, 100) || "My Life Event",
        description: event.trim(),
        event_type: "general",
        event_date: today,
      });

      const lifeEvent = lifeEventRes.data;
      console.log("Life Event Saved:", lifeEvent);

      if (!lifeEvent?.event_id) {
        throw new Error("Life event was created but no ID was returned.");
      }

      // ⭐⭐⭐ STEP 2 FIXED — Generate myth using the EVENT TEXT ⭐⭐⭐
      console.log("Generating myth from event text:", event);

      const mythRes = await api.post("/myths", {
  event_id: lifeEvent.event_id
});

      const myth = mythRes.data?.myth || mythRes.data;

      if (myth?.myth_id) {
        navigate(`/myth/${myth.myth_id}`);
      } else {
        console.warn("Myth created without myth_id, redirecting to list");
        navigate("/myths");
      }

    } catch (err) {
      console.error("Myth creation failed:", err);

      const msg =
        err.response?.data?.error ||
        err.message ||
        "Something went wrong. Please try again.";

      setError(msg);
      setTimeout(() => setError(""), 8000);

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
      {/* Navbar */}
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

      {/* Main Create Form */}
      <div className="create-page">
        <div className="create-card">
          <h2>Tell your story. We’ll turn it into legend.</h2>

          {error && <div className="error-banner">{error}</div>}

          <form onSubmit={handleSubmit}>
            <textarea
              placeholder="I once climbed a mountain at sunrise...
I lost someone I loved...
I started a new chapter in a new city...
The day everything changed was..."
              value={event}
              onChange={(e) => setEvent(e.target.value)}
              rows={10}
              disabled={loading}
              autoFocus
            />

            <button
              type="submit"
              disabled={loading || !event.trim()}
              className={loading ? "loading" : ""}
            >
              {loading ? (
                <>
                  <span className="spinner"></span>
                  Forging Your Myth...
                </>
              ) : (
                "Generate Myth Narrative"
              )}
            </button>
          </form>

          <p className="hint">
            Be honest. Be raw. The deeper the truth, the greater the myth.
          </p>
        </div>
      </div>
    </>
  );
};

export default CreateMyth;

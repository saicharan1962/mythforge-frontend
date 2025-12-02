// src/pages/CreateMyth.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

const CreateMyth = () => {
  const [event, setEvent] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!event.trim()) return alert("Please describe your life event.");

    setLoading(true);
    try {
      // 🔹 Backend will determine god & narrative automatically (no manual input)
      const res = await api.post("/myths", { event });

      // Navigate to newly created myth (optional)
      if (res.data?.myth?.myth_id) {
        navigate(`/myth/${res.data.myth.myth_id}`);
      } else {
        alert("Myth created successfully!");
      }
    } catch (err) {
      console.error("Myth creation failed:", err);
      alert("Failed to create myth. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="create-page">
      <div className="create-card">
        <h2>Forge Your Myth</h2>
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
  );
};

export default CreateMyth;

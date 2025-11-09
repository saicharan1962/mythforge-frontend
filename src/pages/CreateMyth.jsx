import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

const gods = ["Zeus", "Athena", "Apollo", "Aphrodite", "Poseidon", "Hera", "Hades", "Persephone"];

const CreateMyth = () => {
  const [event, setEvent] = useState("");
  const [god, setGod] = useState(gods[0]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.post("/myths/create", { event, god });
      navigate(`/myth/${res.data.myth_id}`);
    } catch (err) {
      alert("Failed to create myth");
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
          <select value={god} onChange={(e) => setGod(e.target.value)}>
            {gods.map(g => <option key={g} value={g}>{g}</option>)}
          </select>
          <button type="submit" disabled={loading}>
            {loading ? "Invoking..." : "Generate My Myth"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateMyth;
// src/pages/MythDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/api";
<<<<<<< HEAD
import "./MythDetail.css";
=======
import html2canvas from "html2canvas";
import "./MythDetail.css";
import parchment from "../assets/parchment.png";
>>>>>>> 1e8ab34ccebd63190b456adfbd7c97fe23cbaaab

export default function MythDetail() {
  const { id } = useParams();
  const [myth, setMyth] = useState(null);
  const [loading, setLoading] = useState(true);
<<<<<<< HEAD
=======
  const [theme, setTheme] = useState("epic");
>>>>>>> 1e8ab34ccebd63190b456adfbd7c97fe23cbaaab
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMyth = async () => {
      try {
        const res = await api.get(`/myths/${id}`);
        setMyth(res.data.myth);
      } catch (err) {
        console.error("Failed to fetch myth:", err);
        alert("Myth not found.");
        navigate("/dashboard");
      } finally {
        setLoading(false);
      }
    };
    fetchMyth();
  }, [id, navigate]);

<<<<<<< HEAD
  if (loading)
    return <div className="myth-loading">Forging your tale...</div>;

  if (!myth)
    return <div className="myth-error">Myth not found.</div>;

  return (
    <div className="myth-detail-container">
      <div className="myth-detail-card">
        <h1>{myth.title}</h1>
        <p className="myth-date">
          🕰️ {new Date(myth.created_at).toLocaleString()}
        </p>
        <div className="myth-narrative">
          <p>{myth.narrative}</p>
        </div>
      </div>
=======
  // ⭐⭐⭐ FIXED DOWNLOAD FUNCTION (High-contrast temporary mode)
  const downloadScroll = async () => {
    const card = document.getElementById("myth-card");

    // 1️⃣ Add temporary high-contrast visibility class
    card.classList.add("download-capture");

    // Give browser a moment to apply new CSS
    await new Promise((r) => setTimeout(r, 50));

    // 2️⃣ Generate screenshot
    const canvas = await html2canvas(card, {
      scale: 2,
      useCORS: true,
      backgroundColor: null,
    });

    // 3️⃣ Remove temporary class
    card.classList.remove("download-capture");

    // 4️⃣ Download
    const link = document.createElement("a");
    link.download = `${myth.title}_myth.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  if (loading) return <div className="myth-loading">🔮 Forging your tale...</div>;
  if (!myth) return <div className="myth-error">Myth not found.</div>;

  return (
    <div className="myth-detail-container">
      {/* Parchment Card */}
      <div
        id="myth-card"
        className={`parchment-card ${theme}`}
        style={{ "--parchment-image": `url(${parchment})` }}
      >
        <h1 className="parchment-title">{myth.title}</h1>

        <p className="myth-date">
          🕰️ {new Date(myth.created_at).toLocaleString()}
        </p>

        <div className="parchment-content">
          {myth.narrative.replace(/^"|"$/g, "")}
        </div>
      </div>

      <div className="button-row">
        <button className="scroll-btn" onClick={downloadScroll}>
          📜 Download Myth
        </button>
      </div>
>>>>>>> 1e8ab34ccebd63190b456adfbd7c97fe23cbaaab
    </div>
  );
}

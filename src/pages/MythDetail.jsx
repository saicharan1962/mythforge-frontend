// src/pages/MythDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/api";
import html2canvas from "html2canvas";
import "./MythDetail.css";
import parchment from "../assets/parchment.png";

export default function MythDetail() {
  const { id } = useParams();
  const [myth, setMyth] = useState(null);
  const [loading, setLoading] = useState(true);
  const [theme] = useState("epic");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMyth = async () => {
      try {
        const res = await api.get(`/myths/${id}`);
        setMyth(res.data.myth);
      } catch (err) {
        console.error("Failed to fetch myth:", err);
        navigate("/dashboard");
      } finally {
        setLoading(false);
      }
    };
    fetchMyth();
  }, [id, navigate]);

  const downloadScroll = async () => {
    const card = document.getElementById("myth-card");
    card.classList.add("download-capture");
    await new Promise((r) => setTimeout(r, 50));

    const canvas = await html2canvas(card, { scale: 2, useCORS: true });
    card.classList.remove("download-capture");

    const link = document.createElement("a");
    link.download = `${myth.title}_myth.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  if (loading) return <div className="myth-loading">Forging your tale...</div>;
  if (!myth) return <div className="myth-error">Myth not found.</div>;

  return (
    <div className="myth-detail-container">
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
          {myth.narrative?.replace(/^"|"$/g, "")}
        </div>
      </div>

      <div className="button-row">
        <button className="scroll-btn" onClick={downloadScroll}>
          📜 Download Myth
        </button>
      </div>
    </div>
  );
}

// src/pages/MythDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/api";
import "./MythDetail.css";

export default function MythDetail() {
  const { id } = useParams();
  const [myth, setMyth] = useState(null);
  const [loading, setLoading] = useState(true);
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
    </div>
  );
}

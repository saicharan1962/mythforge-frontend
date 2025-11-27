// src/pages/Verify.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/api";
import "./Verify.css";

export default function Verify() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [msg, setMsg] = useState("⏳ Verifying your account...");
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    api
      .get(`/auth/verify/${token}`)
      .then((res) => {
        setMsg(res.data.message);
        setStatus("success");
      })
      .catch(() => {
        setMsg("❌ Invalid or expired verification link.");
        setStatus("error");
      });
  }, [token]);

  return (
    <div className="verify-container">
      <div className={`verify-card ${status}`}>
        <h1>{msg}</h1>

        <button
          className="verify-btn"
          onClick={() => navigate("/auth")}
        >
          Go to Login
        </button>
      </div>
    </div>
  );
}

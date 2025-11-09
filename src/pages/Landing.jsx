import React from "react";
import "./Landing.css";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <div
      className="landing"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/MythForge_hero_painting.png"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="hero">
        <div className="buttons">
          <button
            className="btn get-started"
            onClick={() => navigate("/create")}
          >
            Begin Your Divine Journey
          </button>

          <button
            className="btn explore"
            onClick={() => navigate("/chronicles")}
          >
            Explore the Chronicles of Olympus
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;

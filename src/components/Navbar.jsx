import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">MythForge</Link>
      <div className="nav-links">
        {user ? (
          <>
            <Link to="/dashboard">Home</Link>
            <Link to="/create">Create Myth</Link>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
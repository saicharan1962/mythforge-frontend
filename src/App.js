import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

// Page imports
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreateMyth from "./pages/CreateMyth";
import Myths from "./pages/Myths";
import Chronicles from "./pages/Chronicles"; // ✅ You forgot this import

import "./App.css";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chronicles" element={<Chronicles />} /> {/* ✅ Works now */}

          {/* Protected or main routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create" element={<CreateMyth />} />
          <Route path="/myths" element={<Myths />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;

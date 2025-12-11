// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import Landing from "./pages/Landing";
import AuthPage from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import CreateMyth from "./pages/CreateMyth";
import Myths from "./pages/Myths";
import Chronicles from "./pages/Chronicles";
import AdminDashboard from "./pages/AdminDashboard";
import Verify from "./pages/Verify";
import MythDetail from "./pages/MythDetail"; // ✅ new import

import "./App.css";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/chronicles" element={<Chronicles />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/verify/:token" element={<Verify />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create" element={<CreateMyth />} />
          <Route path="/myths" element={<Myths />} />
          <Route path="/myth/:id" element={<MythDetail />} /> {/* ✅ new route */}
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;



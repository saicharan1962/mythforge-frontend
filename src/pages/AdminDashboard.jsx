// src/pages/AdminDashboard.jsx
import React, { useEffect, useState } from "react";
import api from "../api/api";
import "./AdminDashboard.css";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await api.get("/auth/all-users");
      setUsers(res.data.users || []);
    } catch (err) {
      console.error("Fetch users error:", err);
    }
  };

  const toggleActive = async (userId) => {
    try {
      await api.patch(`/auth/toggle-active/${userId}`);
      fetchUsers(); // Refresh list
    } catch (err) {
      console.error("Toggle active error:", err);
      alert("Failed to update user status");
    }
  };

  return (
    <div className="admin-container">
      <div className="admin-card">
        <h1 className="admin-title">👑 Admin Dashboard</h1>
        <p className="admin-subtitle">Manage MythForge Users</p>

        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Role</th>
              <th>Verified</th>
              <th>Active</th>
            </tr>
          </thead>

          <tbody>
            {users.map((u) => (
              <tr key={u.user_id}>
                <td>{u.user_id}</td>
                <td>{u.username}</td>
                <td>{u.email}</td>
                <td>{u.role}</td>
                <td>{u.is_verified ? "✔️" : "❌"}</td>

                <td>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={u.is_active}
                      onChange={() => toggleActive(u.user_id)}
                    />
                    <span className="slider round"></span>
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

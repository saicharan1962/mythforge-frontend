import { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

const API_BASE_URL = "https://mythforgedb-afabdpb4chbtbffs.centralus-01.azurewebsites.net/api";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const register = async (formData) => {
    try {
      const res = await axios.post(`${API_BASE_URL}/auth/register`, formData);
      return res.data;
    } catch (err) {
      console.error("SIGNUP ERROR:", err);
      throw new Error("Signup failed. Try again.");
    }
  };

  const login = async (formData) => {
    try {
      const res = await axios.post(`${API_BASE_URL}/auth/login`, formData);
      setUser(res.data.user);
      return res.data;
    } catch (err) {
      console.error("LOGIN ERROR:", err);
      throw new Error("Login failed. Check your details.");
    }
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./Components/hooks/useAuth";
import AuthProvider from "./Components/context/AuthProvider";
import Account from "./Components/Auth/Account";
import Dashboard from "./Components/dashboard/Dashboard";
import Navbar from "./Components/Navbar";
import { Chart } from "./Components/chart/chart";
import Welcome from "./Components/Auth/Welcome";
import "./index.css";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/" />;
};

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
           <Route path="/" element={<Welcome />} /> 
           <Route path="/login" element={<Account />} />
           <Route path="/chart" element={<Chart/>} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
    
  );
}

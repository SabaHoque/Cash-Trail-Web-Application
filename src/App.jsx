import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./Components/hooks/useAuth";
import AuthProvider from "./Components/context/AuthProvider";
import Account from "./Components/Auth/Account";
import Dashboard from "./Components/dashboard/Dashboard";
import Navbar from "./Components/Navbar";
import Welcome from "./Components/Auth/Welcome";
import Income from "./Components/pages/Income";
import CategorizedTransaction from "./Components/pages/CategorizedTransaction";
import Chart from "./Components/charts/chart";

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

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/income"
            element={
              <ProtectedRoute>
                <Income />
              </ProtectedRoute>
            }
          />
          <Route
            path="/categorized-transactions"
            element={
              <ProtectedRoute>
                <CategorizedTransaction />
              </ProtectedRoute>
            }
          />
          <Route
            path="/chart"
            element={
              <ProtectedRoute>
                <Chart />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

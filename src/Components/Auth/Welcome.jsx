import React from "react";
import { useNavigate } from "react-router-dom";
import "./Welcome.css"; 

export default function Welcome() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="welcome-container">
      <h1>Welcome to <span className="highlight">Cash Trail</span></h1>
      <p className="subtext">Track your income, monitor your expenses, and stay in control of your finances — all in one sleek and secure app</p>
      <button className="login-button" onClick={handleLoginClick}>
        Login
      </button>
    </div>
  );
}

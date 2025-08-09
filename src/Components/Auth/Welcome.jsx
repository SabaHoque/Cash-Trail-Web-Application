import React from "react";
import { useNavigate } from "react-router-dom";
import "./Welcome.css";

export default function Welcome() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  // Features to display below hero
  const features = [
    {
      title: "Easy Income & Expense Tracking",
      desc: "Add and categorize your transactions effortlessly.",
    },
    {
      title: "Visual Charts & Reports",
      desc: "See your financial trends at a glance.",
    },
    {
      title: "Secure & Private",
      desc: "Your data is safe with our secure login system.",
    },
  ];

  return (
    <div className="welcome-container">
      <header className="welcome-hero">
        <h1>
          Welcome to <span className="highlight">Cash Trail</span>
        </h1>
        <p className="subtext">
          Track your income, monitor your expenses, and stay in control of
          your finances — all in one sleek and secure app
        </p>
        <button className="login-button" onClick={handleLoginClick}>
          Login
        </button>
      </header>

      <section className="features">
        {features.map(({ title, desc }) => (
          <div key={title} className="feature-box">
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}



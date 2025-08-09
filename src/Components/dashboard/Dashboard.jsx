import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard" style={{ padding: "20px", display: "flex", gap: "40px", flexWrap: "wrap" }}>
      <h2 style={{ width: "100%" }}>Welcome to Your Dashboard</h2>

      
      <div
        style={{
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "8px",
          width: "300px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
        }}
      >
        <h3>Add Income</h3>
        <form className="transaction-form">
          <input type="text" placeholder="Title" style={{ width: "100%", marginBottom: "8px", padding: "8px" }} />
          <input type="number" placeholder="Amount" style={{ width: "100%", marginBottom: "8px", padding: "8px" }} />
          <select style={{ width: "100%", marginBottom: "8px", padding: "8px" }}>
            <option value="income">Income</option>
          </select>
          <input type="text" placeholder="Category" style={{ width: "100%", marginBottom: "8px", padding: "8px" }} />
          <button
            type="button"
            onClick={() => navigate("/income")}
            style={{ padding: "8px 16px", cursor: "pointer", width: "100%" }}
          >
            Add Income 
          </button>
        </form>
      </div>

      
      <div
        style={{
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "8px",
          width: "300px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
        }}
      >
        <h3>Add Expense</h3>
        <form className="transaction-form">
          <input type="text" placeholder="Title" style={{ width: "100%", marginBottom: "8px", padding: "8px" }} />
          <input type="number" placeholder="Amount" style={{ width: "100%", marginBottom: "8px", padding: "8px" }} />
          <select style={{ width: "100%", marginBottom: "8px", padding: "8px" }}>
            <option value="expense">Expense</option>
          </select>
          <input type="text" placeholder="Category" style={{ width: "100%", marginBottom: "8px", padding: "8px" }} />
          <button
            type="button"
            onClick={() => navigate("/income")}
            style={{ padding: "8px 16px", cursor: "pointer", width: "100%" }}
          >
            Add Expense
          </button>
        </form>
      </div>

      <div style={{ width: "100%", marginTop: "30px" }}>
        <button
          type="button"
          onClick={() => navigate("/chart")}
          style={{ padding: "10px 20px", cursor: "pointer", marginRight: "20px" }}
        >
          See Chart
        </button>

        <button
          type="button"
          onClick={() => navigate("/categorized-transactions")}
          style={{ padding: "10px 20px", cursor: "pointer" }}
        >
          Categorized Transactions
        </button>
      </div>
    </div>
  );
}

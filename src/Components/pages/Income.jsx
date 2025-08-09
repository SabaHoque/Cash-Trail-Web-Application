import React, { useState } from "react";
import { useTransactions } from "../context/useTransactions";
import { useNavigate } from "react-router-dom";

export default function Income() {
  const { addTransaction, transactions } = useTransactions();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    amount: "",
    category: "food",
    type: "income"
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({ ...form, amount: parseFloat(form.amount) });
    setForm({ title: "", amount: "", category: "food", type: "income" });
  };

  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add Income / Expense</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={form.amount}
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
          required
        />
        <select
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        >
          <option value="food">Food</option>
          <option value="transport">Transport</option>
          <option value="grocery">Grocery</option>
        </select>
        <select
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <button type="submit" style={{ marginTop: "10px" }}>Add</button>
      </form>

      <h3>Total Income: ${totalIncome}</h3>
      <h3>Total Expense: ${totalExpense}</h3>

      <button
        onClick={() => navigate("/dashboard")}
        style={{ marginTop: "20px", padding: "8px 16px", cursor: "pointer" }}
      >
        Back to Dashboard
      </button>
    </div>
  );
}

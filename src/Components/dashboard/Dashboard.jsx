import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function groupEntriesByDate(entries) {
  return entries.reduce((groups, entry) => {
    const date = entry.date;
    if (!groups[date]) groups[date] = [];
    groups[date].push(entry);
    return groups;
  }, {});
}

function prepareChartData(incomeEntries, expenseEntries) {
  const incomeByDate = incomeEntries.reduce((acc, entry) => {
    acc[entry.date] = (acc[entry.date] || 0) + entry.amount;
    return acc;
  }, {});

  const expenseByDate = expenseEntries.reduce((acc, entry) => {
    acc[entry.date] = (acc[entry.date] || 0) + entry.amount;
    return acc;
  }, {});

  const allDates = Array.from(
    new Set([...Object.keys(incomeByDate), ...Object.keys(expenseByDate)])
  ).sort();

  return allDates.map((date) => ({
    date,
    Income: incomeByDate[date] || 0,
    Expense: expenseByDate[date] || 0,
  }));
}

export default function Dashboard() {
  const [incomeEntries, setIncomeEntries] = useState([]);
  const [expenseEntries, setExpenseEntries] = useState([]);

  const today = new Date().toISOString().slice(0, 10);

  // Income form state
  const [incomeTitle, setIncomeTitle] = useState("");
  const [incomeAmount, setIncomeAmount] = useState("");
  const [incomeDate, setIncomeDate] = useState(today);

  // Expense form state
  const [expenseTitle, setExpenseTitle] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseCategory, setExpenseCategory] = useState("");
  const [expenseDate, setExpenseDate] = useState(today);

  const handleAddIncome = () => {
    if (!incomeTitle || !incomeAmount || !incomeDate)
      return alert("Please fill all income fields");

    const newIncome = {
      id: Date.now(),
      title: incomeTitle,
      amount: parseFloat(incomeAmount),
      date: incomeDate,
    };

    setIncomeEntries((prev) => [newIncome, ...prev]);
    setIncomeTitle("");
    setIncomeAmount("");
    setIncomeDate(today);
  };

  const handleAddExpense = () => {
    if (!expenseTitle || !expenseAmount || !expenseDate)
      return alert("Please fill all expense fields");

    const newExpense = {
      id: Date.now(),
      title: expenseTitle,
      amount: parseFloat(expenseAmount),
      category: expenseCategory,
      date: expenseDate,
    };

    setExpenseEntries((prev) => [newExpense, ...prev]);
    setExpenseTitle("");
    setExpenseAmount("");
    setExpenseCategory("");
    setExpenseDate(today);
  };

  const groupedIncome = groupEntriesByDate(incomeEntries);
  const groupedExpense = groupEntriesByDate(expenseEntries);

  const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  const chartData = prepareChartData(incomeEntries, expenseEntries);

  
  const gradientStart = "#667eea";
  const gradientEnd = "#764ba2";

  return (
    <div
      className="dashboard"
      style={{
        padding: "20px",
        color: "white",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        maxWidth: "900px",
        margin: "0 auto",
        background: `linear-gradient(135deg, ${gradientStart} 0%, ${gradientEnd} 100%)`,
        borderRadius: "16px",
        boxShadow: "0 0 20px rgba(255, 76, 76, 0.6)",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "40px", fontWeight: "700" }}>
        Welcome to Your Dashboard
      </h2>

      {/* Forms */}
      <div
        style={{
          display: "flex",
          gap: "40px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {/* Income Form */}
        <div
          style={{
            flex: "1 1 300px",
            padding: "25px",
            borderRadius: "16px",
            background: `linear-gradient(135deg, ${gradientEnd} 0%, ${gradientStart} 100%)`,
            boxShadow: "0 0 20px rgba(255, 76, 76, 0.6)",
          }}
        >
          <h3 style={{ fontWeight: "600", marginBottom: "15px" }}>Add Income</h3>
          <input
            type="text"
            placeholder="Title"
            value={incomeTitle}
            onChange={(e) => setIncomeTitle(e.target.value)}
            style={{
              width: "100%",
              marginBottom: "12px",
              padding: "10px",
              borderRadius: "12px",
              border: "none",
              background: "rgba(255 255 255 / 0.15)",
              color: "white",
              fontWeight: "600",
            }}
          />
          <input
            type="number"
            placeholder="Amount"
            value={incomeAmount}
            onChange={(e) => setIncomeAmount(e.target.value)}
            style={{
              width: "100%",
              marginBottom: "12px",
              padding: "10px",
              borderRadius: "12px",
              border: "none",
              background: "rgba(255 255 255 / 0.15)",
              color: "white",
              fontWeight: "600",
            }}
          />
          <input
            type="date"
            value={incomeDate}
            onChange={(e) => setIncomeDate(e.target.value)}
            style={{
              width: "100%",
              marginBottom: "12px",
              padding: "10px",
              borderRadius: "12px",
              border: "none",
              background: "rgba(255 255 255 / 0.15)",
              color: "white",
              fontWeight: "600",
            }}
          />
          <button
            onClick={handleAddIncome}
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: gradientEnd,
              border: "none",
              borderRadius: "30px",
              fontWeight: "700",
              cursor: "pointer",
              boxShadow: `0 5px 15px ${gradientEnd}`,
              transition: "background-color 0.3s ease",
              color: "white",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = gradientStart)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = gradientEnd)}
          >
            Add Income
          </button>
        </div>

        {/* Expense Form */}
        <div
          style={{
            flex: "1 1 300px",
            padding: "25px",
            borderRadius: "16px",
            background: `linear-gradient(135deg, ${gradientEnd} 0%, ${gradientStart} 100%)`,
            boxShadow: "0 0 20px rgba(255, 76, 76, 0.6)",
          }}
        >
          <h3 style={{ fontWeight: "600", marginBottom: "15px" }}>Add Expense</h3>
          <input
            type="text"
            placeholder="Title"
            value={expenseTitle}
            onChange={(e) => setExpenseTitle(e.target.value)}
            style={{
              width: "100%",
              marginBottom: "12px",
              padding: "10px",
              borderRadius: "12px",
              border: "none",
              background: "rgba(255 255 255 / 0.15)",
              color: "white",
              fontWeight: "600",
            }}
          />
          <input
            type="number"
            placeholder="Amount"
            value={expenseAmount}
            onChange={(e) => setExpenseAmount(e.target.value)}
            style={{
              width: "100%",
              marginBottom: "12px",
              padding: "10px",
              borderRadius: "12px",
              border: "none",
              background: "rgba(255 255 255 / 0.15)",
              color: "white",
              fontWeight: "600",
            }}
          />
          <input
            type="date"
            value={expenseDate}
            onChange={(e) => setExpenseDate(e.target.value)}
            style={{
              width: "100%",
              marginBottom: "12px",
              padding: "10px",
              borderRadius: "12px",
              border: "none",
              background: "rgba(255 255 255 / 0.15)",
              color: "white",
              fontWeight: "600",
            }}
          />
          <input
            type="text"
            placeholder="Category"
            value={expenseCategory}
            onChange={(e) => setExpenseCategory(e.target.value)}
            style={{
              width: "100%",
              marginBottom: "12px",
              padding: "10px",
              borderRadius: "12px",
              border: "none",
              background: "rgba(255 255 255 / 0.15)",
              color: "white",
              fontWeight: "600",
            }}
          />
          <button
            onClick={handleAddExpense}
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: gradientEnd,
              border: "none",
              borderRadius: "30px",
              fontWeight: "700",
              cursor: "pointer",
              boxShadow: `0 5px 15px ${gradientEnd}`,
              transition: "background-color 0.3s ease",
              color: "white",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = gradientStart)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = gradientEnd)}
          >
            Add Expense
          </button>
        </div>
      </div>

      {/* Chart */}
      <div
        style={{
          marginTop: "60px",
          height: "320px",
          padding: "20px",
          borderRadius: "16px",
          background: `linear-gradient(135deg, ${gradientStart} 0%, ${gradientEnd} 100%)`,
          boxShadow: "0 0 20px rgba(255, 76, 76, 0.6)",
        }}
      >
        <h3 style={{ textAlign: "center", marginBottom: "20px", fontWeight: "700" }}>
          Income & Expenses Over Time
        </h3>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid stroke="rgba(255,255,255,0.2)" strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tick={{ fill: "white" }}
              interval={"preserveStartEnd"}
              tickFormatter={(str) =>
                new Date(str).toLocaleDateString(undefined, { month: "short", day: "numeric" })
              }
            />
            <YAxis tick={{ fill: "white" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: gradientEnd,
                borderRadius: "8px",
                color: "white",
              }}
              itemStyle={{ color: "#ff4c4c" }}
            />
            <Legend wrapperStyle={{ color: "white" }} />
            <Line
              type="monotone"
              dataKey="Income"
              stroke="#a3ffae"
              strokeWidth={3}
              dot={{ stroke: "#66bb6a", strokeWidth: 2, r: 4, fill: "#4caf50" }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="Expense"
              stroke="#ff7961"
              strokeWidth={3}
              dot={{ stroke: "#d32f2f", strokeWidth: 2, r: 4, fill: "#f44336" }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Entries by Date */}
      <div style={{ marginTop: "60px" }}>
        <h3 style={{ fontWeight: "700" }}>Income Entries by Date</h3>
        {incomeEntries.length === 0 && <p style={{ color: "#ccc" }}>No income added yet.</p>}
        {Object.keys(groupedIncome)
          .sort((a, b) => new Date(b) - new Date(a))
          .map((date) => (
            <div key={date} style={{ marginBottom: "30px" }}>
              <h4>{formatDate(date)}</h4>
              <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
                {groupedIncome[date].map((entry) => (
                  <div
                    key={entry.id}
                    style={{
                      background: `linear-gradient(135deg, ${gradientEnd}, ${gradientStart})`,
                      padding: "15px",
                      borderRadius: "16px",
                      minWidth: "250px",
                      boxShadow: "0 0 20px rgba(255, 76, 76, 0.6)",
                      color: "white",
                      fontWeight: "600",
                    }}
                  >
                    <strong>{entry.title}</strong>
                    <p>Amount: ${entry.amount.toFixed(2)}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>

      <div style={{ marginTop: "60px", marginBottom: "60px" }}>
        <h3 style={{ fontWeight: "700" }}>Expense Entries by Date</h3>
        {expenseEntries.length === 0 && <p style={{ color: "#ccc" }}>No expense added yet.</p>}
        {Object.keys(groupedExpense)
          .sort((a, b) => new Date(b) - new Date(a))
          .map((date) => (
            <div key={date} style={{ marginBottom: "30px" }}>
              <h4>{formatDate(date)}</h4>
              <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
                {groupedExpense[date].map((entry) => (
                  <div
                    key={entry.id}
                    style={{
                      background: `linear-gradient(135deg, ${gradientEnd}, ${gradientStart})`,
                      padding: "15px",
                      borderRadius: "16px",
                      minWidth: "250px",
                      boxShadow: "0 0 20px rgba(255, 76, 76, 0.6)",
                      color: "white",
                      fontWeight: "600",
                    }}
                  >
                    <strong>{entry.title}</strong>
                    <p>Amount: ${entry.amount.toFixed(2)}</p>
                    <p>Category: {entry.category || "N/A"}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

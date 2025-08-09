import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const containerStyle = {
    padding: "40px 20px",
    display: "flex",
    gap: "40px",
    flexWrap: "wrap",
    justifyContent: "center",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    minHeight: "100vh",
    color: "#fff",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const boxStyle = {
    background: "rgba(0,0,0,0.85)",
    padding: "30px",
    borderRadius: "30px",
    width: "320px",
    boxShadow: "0 5px 20px rgba(255, 76, 76, 0.5)",
    color: "white",
  };

  const inputStyle = {
    width: "100%",
    padding: "14px",
    marginBottom: "15px",
    borderRadius: "30px",
    border: "none",
    backgroundColor: "#2b2b2b",
    color: "#fff",
    fontSize: "1rem",
  };

  const buttonStyle = {
    backgroundColor: "#ff4c4c",
    color: "white",
    padding: "14px",
    width: "100%",
    borderRadius: "30px",
    border: "none",
    fontWeight: 600,
    fontSize: "1.1rem",
    cursor: "pointer",
    boxShadow: "0 5px 15px rgba(255, 76, 76, 0.6)",
    transition: "background-color 0.3s ease",
  };

  const buttonHoverStyle = {
    backgroundColor: "#cc3a3a",
  };

  const [incomeBtnHover, setIncomeBtnHover] = React.useState(false);
  const [expenseBtnHover, setExpenseBtnHover] = React.useState(false);
  const [chartBtnHover, setChartBtnHover] = React.useState(false);
  const [catBtnHover, setCatBtnHover] = React.useState(false);

  return (
    <div style={containerStyle}>
      <h2 style={{ width: "100%", textAlign: "center", marginBottom: "40px", fontWeight: 700, fontSize: "2rem" }}>
        Welcome to Your Dashboard
      </h2>

      <div style={boxStyle}>
        <h3 style={{ marginBottom: "20px", fontWeight: 700 }}>Add Income</h3>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Title" style={inputStyle} />
          <input type="number" placeholder="Amount" style={inputStyle} />
          <select style={{ ...inputStyle, cursor: "not-allowed" }} value="income" disabled>
            <option value="income">Income</option>
          </select>
          <input type="text" placeholder="Category" style={inputStyle} />
          <button
            type="button"
            style={incomeBtnHover ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}
            onClick={() => navigate("/income")}
            onMouseEnter={() => setIncomeBtnHover(true)}
            onMouseLeave={() => setIncomeBtnHover(false)}
          >
            Add Income
          </button>
        </form>
      </div>

      <div style={boxStyle}>
        <h3 style={{ marginBottom: "20px", fontWeight: 700 }}>Add Expense</h3>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Title" style={inputStyle} />
          <input type="number" placeholder="Amount" style={inputStyle} />
          <select style={{ ...inputStyle, cursor: "not-allowed" }} value="expense" disabled>
            <option value="expense">Expense</option>
          </select>
          <input type="text" placeholder="Category" style={inputStyle} />
          <button
            type="button"
            style={expenseBtnHover ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}
            onClick={() => navigate("/income")}
            onMouseEnter={() => setExpenseBtnHover(true)}
            onMouseLeave={() => setExpenseBtnHover(false)}
          >
            Add Expense
          </button>
        </form>
      </div>

      <div style={{ width: "100%", marginTop: "40px", textAlign: "center" }}>
        <button
          type="button"
          onClick={() => navigate("/chart")}
          style={chartBtnHover ? { ...buttonStyle, maxWidth: 200, marginRight: 20, ...buttonHoverStyle } : { ...buttonStyle, maxWidth: 200, marginRight: 20 }}
          onMouseEnter={() => setChartBtnHover(true)}
          onMouseLeave={() => setChartBtnHover(false)}
        >
          See Chart
        </button>

        <button
          type="button"
          onClick={() => navigate("/categorized-transactions")}
          style={catBtnHover ? { ...buttonStyle, maxWidth: 250, ...buttonHoverStyle } : { ...buttonStyle, maxWidth: 250 }}
          onMouseEnter={() => setCatBtnHover(true)}
          onMouseLeave={() => setCatBtnHover(false)}
        >
          Categorized Transactions
        </button>
      </div>
    </div>
  );
}

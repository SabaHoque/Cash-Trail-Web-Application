export default function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Welcome to Your Dashboard</h2>
      <form className="transaction-form">
        <input type="text" placeholder="Title" />
        <input type="number" placeholder="Amount" />
        <select>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <input type="text" placeholder="Category" />
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
}

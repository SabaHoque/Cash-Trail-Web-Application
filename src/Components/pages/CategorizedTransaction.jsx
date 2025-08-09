import { useTransactions } from "../context/useTransactions";


export default function CategorizedTransactions() {
  const { transactions } = useTransactions();

  const categories = transactions.reduce((acc, t) => {
    acc[t.category] = acc[t.category] ? [...acc[t.category], t] : [t];
    return acc;
  }, {});

  return (
    <div>
      <h2>Categorized Transactions</h2>
      {Object.keys(categories).length === 0 && <p>No transactions yet.</p>}
      {Object.keys(categories).map((cat) => (
        <div key={cat}>
          <h3>{cat}</h3>
          <ul>
            {categories[cat].map((t) => (
              <li key={t.id}>
                {t.title} - ${t.amount} ({t.type})
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

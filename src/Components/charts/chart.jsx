import { Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from "chart.js";
import { useTransactions } from "../context/useTransactions";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export default function ChartPage() {
  const { transactions } = useTransactions();

  // Line Chart
  const lineData = {
    labels: transactions.map((t) => new Date(t.id).toLocaleDateString()),
    datasets: [
      {
        label: "Amount",
        data: transactions.map((t) => t.amount),
        borderColor: "blue",
        backgroundColor: "lightblue",
      },
    ],
  };

  // Pie Chart
  const categoryTotals = transactions.reduce((acc, t) => {
    acc[t.category] = (acc[t.category] || 0) + t.amount;
    return acc;
  }, {});

  const pieData = {
    labels: Object.keys(categoryTotals),
    datasets: [
      {
        data: Object.values(categoryTotals),
        backgroundColor: ["red", "green", "orange", "purple", "cyan"],
      },
    ],
  };

  return (
    <div>
      <h2>Charts</h2>
      <div style={{ width: "500px", margin: "auto" }}>
        <h3>Line Graph</h3>
        <Line data={lineData} />
      </div>
      <div style={{ width: "400px", margin: "auto", marginTop: "20px" }}>
        <h3>Pie Chart</h3>
        <Pie data={pieData} />
      </div>
    </div>
  );
}

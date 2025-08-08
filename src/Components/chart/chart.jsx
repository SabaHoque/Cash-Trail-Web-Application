
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from "chart.js";
import { Bar, Pie, Line } from "react-chartjs-2";

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

const labels = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];

const dataBar = {
  labels,
  datasets: [
    {
      label: "Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: "rgba(75, 192, 192, 0.5)",
    },
  ],
};

const dataPie = {
  labels,
  datasets: [
    {
      label: "Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: ["red", "blue", "yellow", "green", "purple", "orange"],
    },
  ],
};

const dataLine = {
  labels,
  datasets: [
    {
      label: "Votes over Time",
      data: [12, 19, 3, 5, 2, 3],
      borderColor: "blue",
      backgroundColor: "rgba(54, 162, 235, 0.2)",
    },
  ],
};

export const Chart = () => {
  return (
    <div style={{ width: "600px", margin: "40px auto" }}>
      <h3>Bar Chart</h3>
      <Bar data={dataBar} />

      <h3>Pie Chart</h3>
      <Pie data={dataPie} />

      <h3>Line Chart</h3>
      <Line data={dataLine} />
    </div>
  );
};

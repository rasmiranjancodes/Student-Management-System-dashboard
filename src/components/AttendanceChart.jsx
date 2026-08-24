import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

import { Bar } from "react-chartjs-2";
import { useStudent } from "../Context/StudentContext";


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement
);

function AttendanceChart() {
  const { students } = useStudent();

  const data = {
    labels: students.map(
      (student) => student.firstName
    ),

    datasets: [
      {
        label: "Attendance",

        data: students.map(
          (student) => student.attendance
        ),

        backgroundColor: students.map((student) => {
          if (student.attendance >= 90) return "#10b981";

          if (student.attendance >= 80) return "#f59e0b";

          return "#ef4444";
        }),
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return (
    <div className="bg-white p-5 rounded-lg shadow">

      <h2 className="font-bold mb-5">
        Attendance Distribution
      </h2>

      <Bar
        data={data}
        options={options}
      />

    </div>
  );
}

export default AttendanceChart;


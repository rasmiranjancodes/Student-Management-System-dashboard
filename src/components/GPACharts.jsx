import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from "chart.js";
import { useStudent } from "../Context/StudentContext";
import {Bar} from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

function GPACharts() {
  const { students } = useStudent();

  const grade10 = students.filter(
    (student) => student.grade === "Grade 10"
  ).length;
  const grade11 = students.filter(
    (student) => student.grade === "Grade 11"
  ).length;
  const grade12 = students.filter(
    (student) => student.grade === "Grade 12"
  ).length;

  const data = {
    labels: ["Grade 10", "Grade 11", "Grade 12"],

    datasets: [
      {
        label: "Students",
        data: [grade10, grade11, grade12],
        backgroundColor: [
          "#3b82f6",
          "#10b981",
          "#f59e0b",
        ],
      },
    ],
  };
  return (
    <>
      <div className="bg-white p-5 rounded-lg shadow">

        <h2 className="font-bold mb-5">
          Students by Grade
        </h2>

        <Bar data={data} />

      </div>
    </>
  )
}

export default GPACharts


import AttendanceChart from "../components/AttendanceChart";
import GPACharts from "../components/GPACharts";
import StateCard from "../components/StateCard";
import TopStudent from "../components/TopStudent";
import { useStudent } from "../Context/StudentContext"
import { MdDownload, MdPeople, MdGrade, MdEventNote, MdPersonOff } from "react-icons/md"


function Reports() {
  const { students } = useStudent();

  const totalStudents = students.length;

   const averageAttendance = Math.round(
    students.reduce((sum, student) => sum + student.attendance, 0) /
      totalStudents
  );

  const onLeave = students.filter(
    (s) => s.status === "On Leave"
  ).length;

  const averageGPA =
    (
      students.reduce((sum, s) => sum + s.gpa, 0) /
      students.length
    ).toFixed(2);

  return (
    <>
    <div>
      {/* Page Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-4xl font-bold text-slate-900">📊 Reports & Analytics</h1>
          <p className="text-slate-500 mt-2">Comprehensive overview of your student data</p>
        </div>

        <button className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-semibold hover:scale-105">
          <MdDownload className="text-xl" />
          Export CSV
        </button>
      </div>

      {/* Key Metrics Cards */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <StateCard
            title="Total Students"
            value={totalStudents}
            icon={MdPeople}
            gradient="from-blue-600 to-cyan-600"
          />

          <StateCard
            title="Average GPA"
            value={averageGPA}
            icon={MdGrade}
            gradient="from-purple-600 to-pink-600"
          />

          <StateCard
            title="Avg Attendance"
            value={`${averageAttendance}%`}
            icon={MdEventNote}
            gradient="from-green-600 to-emerald-600"
          />
          
          <StateCard
            title="On Leave"
            value={onLeave}
            icon={MdPersonOff}
            gradient="from-orange-600 to-red-600"
          />
      </div>

      {/* Charts Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-100">
          <GPACharts />
        </div>
        <TopStudent />
      </div>

      {/* Attendance Chart */}
      <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-100">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">👥 Attendance Distribution</h2>
        <AttendanceChart />
      </div>
    </div>
    </>
  )
}

export default Reports




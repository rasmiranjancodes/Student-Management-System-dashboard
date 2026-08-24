import StateCard from "../components/StateCard"
import { useStudent } from "../Context/StudentContext"
import RecentStudents from "../components/RecentStudent";
import TopStudent from "../components/TopStudent";
import { MdPeople, MdGrade, MdEventNote, MdPersonOff } from "react-icons/md"

function DashBoard() {
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
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900">Dashboard</h1>
          <p className="text-slate-500 mt-2">Welcome to your Student Management System</p>
        </div>

        {/* Statistics Cards */}
        <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2 mb-8">
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

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Students - Takes 2 columns */}
          <div className="lg:col-span-2">
            <RecentStudents />
          </div>

          {/* Top Students */}
          <div>
            <TopStudent />
          </div>
        </div>
      </div>
    </>
  )
}

export default DashBoard



import { useParams, useNavigate } from "react-router";
import { useState } from "react";
import { useStudent } from "../Context/StudentContext";
import AddEditStudent from "../components/AddEditStudent";
import { IoArrowBack } from "react-icons/io5";
import { MdEmail, MdLocationOn, MdCake, MdWc } from "react-icons/md";

function StudentDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { students, updateStudent } = useStudent();
  const [isOpen, setIsOpen] = useState(false);

  // Find the student by ID
  const student = students.find((s) => s.id === id);

  if (!student) {
    return (
      <div>
        <div className="bg-white rounded-2xl shadow-lg p-12 text-center max-w-lg mx-auto border border-slate-100">
          <h2 className="text-3xl font-bold text-red-600 mb-4">❌ Student Not Found</h2>
          <p className="text-slate-600 mb-8 text-lg">The student with ID "{id}" does not exist.</p>
          <button
            onClick={() => navigate("/students")}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold flex items-center gap-2 mx-auto"
          >
            <IoArrowBack />
            Back to Students
          </button>
        </div>
      </div>
    );
  }

  // Calculate age from DOB
  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const handleSave = (studentData) => {
    updateStudent(studentData);
    setIsOpen(false);
  };

  return (
    <>
      <div>
        {/* Back Button */}
        <button
          onClick={() => navigate("/students")}
          className="flex items-center gap-2 bg-slate-200 hover:bg-slate-300 text-slate-700 px-5 py-2.5 rounded-lg transition-all duration-300 font-medium mb-8"
        >
          <IoArrowBack className="text-lg" />
          Back to Students
        </button>       
        {/* Header Section with Background */}        
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl shadow-xl p-8 mb-8 text-white relative overflow-hidden">          
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-10 -mt-10"></div>         
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-8 -mb-8"></div>                 
           <div className="relative flex justify-between items-start z-10">            
            <div>             
               <h1 className="text-5xl font-bold">               {student.firstName} {student.lastName}
              </h1>
              <p className="text-blue-100 mt-3 text-lg">Student ID: <span className="font-semibold">{student.id}</span></p >
            </div >
 < div className ="flex flex-col gap-4 items-end">
              <button
                onClick={() => setIsOpen(true)}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold hover:scale-105"
              >
                ✏️ Edit Student
              </button>
              <span
                className={`px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wide ${
                  student.status === "Active"
                    ? "bg-green-400 text-green-900"
                    : "bg-orange-400 text-orange-900"
                }`}
              >
                {student.status}
              </span>
            </div>
          </div>
        </div>

        {/* Key Metrics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* GPA Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100 hover:shadow-xl transition-all duration-300">
            <h3 className="text-slate-600 font-semibold mb-6 uppercase tracking-wide text-sm">📊 GPA</h3>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-5xl font-bold text-blue-600">{student.gpa}</div>
                <p className="text-xs text-slate-500 mt-2 font-medium">out of 4.0</p>
              </div>
              <div className="relative w-28 h-28">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#e2e8f0"
                    strokeWidth="6"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="6"
                    strokeDasharray={`${(student.gpa / 4.0) * 282.7} 282.7`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-bold text-slate-700">
                    {((student.gpa / 4.0) * 100).toFixed(0)}%
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Attendance Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100 hover:shadow-xl transition-all duration-300">
            <h3 className="text-slate-600 font-semibold mb-6 uppercase tracking-wide text-sm">📅 Attendance</h3>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-5xl font-bold text-green-600">{student.attendance}%</div>
                <p className="text-xs text-slate-500 mt-2 font-medium">present in class</p>
              </div>
              <div className="relative w-28 h-28">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#e2e8f0"
                    strokeWidth="6"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="6"
                    strokeDasharray={`${(student.attendance / 100) * 282.7} 282.7`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-bold text-slate-700">
                    {student.attendance}%
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Status Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100 hover:shadow-xl transition-all duration-300">
            <h3 className="text-slate-600 font-semibold mb-6 uppercase tracking-wide text-sm">🎓 Academic Info</h3>
            <div className="space-y-5">
              <div>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wide mb-2">Grade</p>
                <p className="text-3xl font-bold text-purple-600">{student.grade}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wide mb-2">Enrolled Year</p>
                <p className="text-2xl font-semibold text-slate-800">{student.enrolledYear}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Information Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Personal Details */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              👤 Personal Information
            </h2>
            <div className="space-y-5">
              <div className="pb-4 border-b border-slate-100">
                <label className="text-xs text-slate-500 font-semibold uppercase tracking-wide block mb-2">First Name</label>
                <p className="text-lg font-semibold text-slate-800">{student.firstName}</p>
              </div>
              <div className="pb-4 border-b border-slate-100">
                <label className="text-xs text-slate-500 font-semibold uppercase tracking-wide block mb-2">Last Name</label>
                <p className="text-lg font-semibold text-slate-800">{student.lastName}</p>
              </div>
              <div className="pb-4 border-b border-slate-100 flex items-start gap-3">
                <MdCake className="text-xl text-purple-600 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <label className="text-xs text-slate-500 font-semibold uppercase tracking-wide block mb-2">Date of Birth</label>
                  <p className="text-lg font-semibold text-slate-800">
                    {new Date(student.dob).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <p className="text-sm text-slate-500 mt-1">({calculateAge(student.dob)} years old)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MdWc className="text-xl text-pink-600 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <label className="text-xs text-slate-500 font-semibold uppercase tracking-wide block mb-2">Gender</label>
                  <p className="text-lg font-semibold text-slate-800">{student.gender}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact & Address */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              📞 Contact & Address
            </h2>
            <div className="space-y-5">
              <div className="pb-4 border-b border-slate-100 flex items-start gap-3">
                <MdEmail className="text-xl text-blue-600 mt-1 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <label className="text-xs text-slate-500 font-semibold uppercase tracking-wide block mb-2">Email Address</label>
                  <p className="text-lg font-semibold text-blue-600 break-all">{student.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MdLocationOn className="text-xl text-red-600 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <label className="text-xs text-slate-500 font-semibold uppercase tracking-wide block mb-2">Address</label>
                  <p className="text-lg font-semibold text-slate-800">{student.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      <AddEditStudent
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        editStudent={student}
        onSave={handleSave}
      />
    </>
  );
}

export default StudentDetails;




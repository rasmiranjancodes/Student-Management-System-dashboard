import { useStudent } from "../Context/StudentContext";
import { MdArrowForward } from "react-icons/md";

function RecentStudents() {
    const { students } = useStudent();

    const recentStudents = students.slice(0, 5);

    const getInitials = (firstName, lastName) => {
        return `${firstName[0]}${lastName[0]}`;
    };

    const gradients = [
        "from-purple-600 to-blue-600",
        "from-green-600 to-cyan-600",
        "from-orange-600 to-red-600",
        "from-blue-600 to-indigo-600",
        "from-yellow-600 to-orange-600",
    ];

    return (
        <div className="bg-white rounded-3xl shadow-xl p-8 mt-10">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h2 className="text-2xl font-bold text-slate-900">
                        📚 Recent Students
                    </h2>
                    <p className="text-sm text-slate-500 mt-1">Latest enrolled students</p>
                </div>

                <button className="flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group">
                    View all
                    <MdArrowForward className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            {/* Students Grid */}
            <div className="space-y-3">
                {recentStudents.map((student, index) => (
                    <div
                        key={student.id}
                        className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-slate-50 to-blue-50 hover:shadow-md transition-all duration-300 border border-slate-100 hover:border-blue-200">

                        {/* Left */}
                        <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white bg-gradient-to-r ${gradients[index % gradients.length]} shadow-lg`}>
                                {getInitials(student.firstName, student.lastName)}
                            </div>

                            <div>
                                <h3 className="font-semibold text-slate-900 text-lg">
                                    {student.firstName} {student.lastName}
                                </h3>

                                <p className="text-slate-500 text-sm">
                                    {student.grade} • {student.id}
                                </p>
                            </div>
                        </div>

                        {/* Right */}
                        <div className="flex items-center gap-4">
                            <div className="text-right">
                                <p className="text-xs text-slate-500 uppercase tracking-wide font-medium">GPA</p>
                                <p className="text-lg font-bold text-slate-900">{student.gpa}</p>
                            </div>

                            <span className={`px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r ${gradients[index % gradients.length]} text-white shadow-md`}>
                                {student.status}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RecentStudents;



import { CgAdd } from "react-icons/cg";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useStudent } from "../Context/StudentContext";
import { FiSearch, FiFilter } from "react-icons/fi";
import { MdEdit, MdDelete, MdVisibility } from "react-icons/md";
import AddEditStudent from "../components/AddEditStudent";

function Students() {
    const navigate = useNavigate();
    const { students, addStudent, updateStudent, deleteStudent } = useStudent();
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");
    const [isOpen, setIsOpen] = useState(false);
    const [editStudent, setEditStudent] = useState(null);

    const filteredStudents = students.filter((student) => {
        const matchesSearch = `${student.firstName} ${student.lastName} ${student.id} ${student.grade} ${student.email}`
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesFilter =
            filter === "All"
                ? true
                : student.status === filter;

        return matchesSearch && matchesFilter;
    });

    return (
        <>
            <div>
                {/* Page Header */}
                <div className="flex justify-between items-start mb-8">
                    <div>
                        <h1 className="text-4xl font-bold text-slate-900">📚 Students</h1>
                        <p className="text-slate-500 mt-2">Manage all your students in one place</p>
                    </div>

                    <button
                        onClick={() => {
                            setEditStudent(null);
                            setIsOpen(true);
                        }}
                        className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-semibold hover:scale-105"
                    >
                        <CgAdd className="text-xl" />
                        <span>Add Student</span>
                    </button>
                </div>

                {/* Search & Filter Bar */}
                <div className="flex flex-col md:flex-row items-center gap-4 mb-8 bg-white p-5 rounded-2xl shadow-md border border-slate-100">
                    {/* Search Box */}
                    <div className="relative w-full md:w-96">
                        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
                        <input
                            type="text"
                            placeholder="Search by name, ID, email, grade..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition placeholder-slate-400"
                        />
                    </div>

                    {/* Filter Dropdown */}
                    <div className="relative w-full md:w-48">
                        <FiFilter className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
                        <select
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            className="w-full appearance-none pl-10 pr-8 py-3 border border-slate-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer transition"
                        >
                            <option value="All">All Students</option>
                            <option value="Active">Active</option>
                            <option value="On Leave">On Leave</option>
                        </select>
                        <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                            ▼
                        </div>
                    </div>

                    {/* Results Counter */}
                    <div className="ml-auto text-slate-600 font-medium">
                        {filteredStudents.length} students found
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gradient-to-r from-slate-50 to-blue-50 border-b border-slate-200">
                                <tr className="text-left text-slate-700 font-bold text-sm">
                                    <th className="p-5">ID</th>
                                    <th className="p-5">Name</th>
                                    <th className="p-5">Grade</th>
                                    <th className="p-5">Email</th>
                                    <th className="p-5">GPA</th>
                                    <th className="p-5">Attendance</th>
                                    <th className="p-5">Status</th>
                                    <th className="p-5 text-center">Actions</th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-slate-100">
                                {filteredStudents.length > 0 ? (
                                    filteredStudents.map((student, idx) => (
                                        <tr key={student.id} className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-colors duration-200">
                                            <td className="p-5 font-semibold text-slate-700">{student.id}</td>
                                            <td className="p-5 font-medium text-slate-900">
                                                {student.firstName} {student.lastName}
                                            </td>
                                            <td className="p-5 text-slate-600">{student.grade}</td>
                                            <td className="p-5 text-slate-600 text-sm">{student.email}</td>
                                            <td className="p-5">
                                                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">
                                                    {student.gpa}
                                                </span>
                                            </td>
                                            <td className="p-5">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-16 bg-slate-200 rounded-full h-2 overflow-hidden">
                                                        <div 
                                                            className="h-full bg-gradient-to-r from-green-500 to-emerald-500" 
                                                            style={{width: `${student.attendance}%`}}
                                                        ></div>
                                                    </div>
                                                    <span className="text-sm font-semibold text-slate-700 w-8">{student.attendance}%</span>
                                                </div>
                                            </td>
                                            <td className="p-5">
                                                <span
                                                    className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide ${
                                                        student.status === "Active"
                                                            ? "bg-green-100 text-green-700"
                                                            : "bg-orange-100 text-orange-700"
                                                    }`}
                                                >
                                                    {student.status}
                                                </span>
                                            </td>
                                            <td className="p-5">
                                                <div className="flex items-center justify-center gap-2">
                                                    <button 
                                                        onClick={() => navigate(`/students/${student.id}`)}
                                                        className="bg-cyan-500 hover:bg-cyan-600 text-white p-2 rounded-lg transition-all duration-200 hover:shadow-lg"
                                                        title="View Details"
                                                    >
                                                        <MdVisibility className="text-lg" />
                                                    </button>

                                                    <button
                                                        onClick={() => {
                                                            setEditStudent(student);
                                                            setIsOpen(true);
                                                        }}
                                                        className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition-all duration-200 hover:shadow-lg"
                                                        title="Edit Student"
                                                    >
                                                        <MdEdit className="text-lg" />
                                                    </button>

                                                    <button
                                                        onClick={() => {
                                                            if (window.confirm(`Are you sure you want to delete ${student.firstName} ${student.lastName}?`)) {
                                                                deleteStudent(student.id);
                                                            }
                                                        }}
                                                        className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg transition-all duration-200 hover:shadow-lg"
                                                        title="Delete Student"
                                                    >
                                                        <MdDelete className="text-lg" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="8" className="p-8 text-center text-slate-500">
                                            <p className="text-lg font-medium">No students found</p>
                                            <p className="text-sm mt-1">Try adjusting your search or filters</p>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Add/Edit Modal */}
            <AddEditStudent
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                editStudent={editStudent}
                onSave={(studentData) => {
                    if (editStudent) {
                        updateStudent(studentData);
                    } else {
                        addStudent(studentData);
                    }
                }}
            />
        </>
    )
}

export default Students




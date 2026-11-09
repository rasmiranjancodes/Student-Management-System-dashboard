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
                <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">📚 Students</h1>
                        <p className="mt-2 text-sm text-slate-500 sm:text-base">Manage all your students in one place</p>
                    </div>

                    <button
                        onClick={() => {
                            setEditStudent(null);
                            setIsOpen(true);
                        }}
                        className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 px-5 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-xl sm:w-auto"
                    >
                        <CgAdd className="text-xl" />
                        <span>Add Student</span>
                    </button>
                </div>

                {/* Search & Filter Bar */}
                <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-md sm:p-5 lg:flex-row lg:items-center">
                    {/* Search Box */}
                    <div className="relative w-full lg:w-96">
                        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-lg text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search by name, ID, email, grade..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full rounded-lg border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm text-slate-700 placeholder-slate-400 transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Filter Dropdown */}
                    <div className="relative w-full lg:w-48">
                        <FiFilter className="absolute left-3 top-1/2 -translate-y-1/2 text-lg text-slate-400" />
                        <select
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            className="w-full appearance-none rounded-lg border border-slate-200 bg-white py-3 pl-10 pr-8 text-sm text-slate-700 transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    <div className="text-sm font-medium text-slate-600 lg:ml-auto">
                        {filteredStudents.length} students found
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-lg">
                    <div className="overflow-x-auto">
                        <table className="min-w-[900px] w-full">
                            <thead className="border-b border-slate-200 bg-gradient-to-r from-slate-50 to-blue-50">
                                <tr className="text-left text-sm font-bold text-slate-700">
                                    <th className="p-3 sm:p-5">ID</th>
                                    <th className="p-3 sm:p-5">Name</th>
                                    <th className="p-3 sm:p-5">Grade</th>
                                    <th className="p-3 sm:p-5">Email</th>
                                    <th className="p-3 sm:p-5">GPA</th>
                                    <th className="p-3 sm:p-5">Attendance</th>
                                    <th className="p-3 sm:p-5">Status</th>
                                    <th className="p-3 text-center sm:p-5">Actions</th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-slate-100">
                                {filteredStudents.length > 0 ? (
                                    filteredStudents.map((student, idx) => (
                                        <tr key={student.id} className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-colors duration-200">
                                            <td className="p-3 font-semibold text-slate-700 sm:p-5">{student.id}</td>
                                            <td className="p-3 font-medium text-slate-900 sm:p-5">
                                                {student.firstName} {student.lastName}
                                            </td>
                                            <td className="p-3 text-slate-600 sm:p-5">{student.grade}</td>
                                            <td className="p-3 text-sm text-slate-600 sm:p-5">{student.email}</td>
                                            <td className="p-3 sm:p-5">
                                                <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-700">
                                                    {student.gpa}
                                                </span>
                                            </td>
                                            <td className="p-3 sm:p-5">
                                                <div className="flex items-center gap-2">
                                                    <div className="h-2 w-16 overflow-hidden rounded-full bg-slate-200">
                                                        <div 
                                                            className="h-full bg-gradient-to-r from-green-500 to-emerald-500" 
                                                            style={{width: `${student.attendance}%`}}
                                                        ></div>
                                                    </div>
                                                    <span className="w-8 text-sm font-semibold text-slate-700">{student.attendance}%</span>
                                                </div>
                                            </td>
                                            <td className="p-3 sm:p-5">
                                                <span
                                                    className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide ${
                                                        student.status === "Active"
                                                            ? "bg-green-100 text-green-700"
                                                            : "bg-orange-100 text-orange-700"
                                                    }`}
                                                >
                                                    {student.status}
                                                </span>
                                            </td>
                                            <td className="p-3 sm:p-5">
                                                <div className="flex items-center justify-center gap-2">
                                                    <button 
                                                        onClick={() => navigate(`/students/${student.id}`)}
                                                        className="rounded-lg bg-cyan-500 p-2 text-white transition-all duration-200 hover:bg-cyan-600 hover:shadow-lg"
                                                        title="View Details"
                                                    >
                                                        <MdVisibility className="text-lg" />
                                                    </button>

                                                    <button
                                                        onClick={() => {
                                                            setEditStudent(student);
                                                            setIsOpen(true);
                                                        }}
                                                        className="rounded-lg bg-blue-500 p-2 text-white transition-all duration-200 hover:bg-blue-600 hover:shadow-lg"
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
                                                        className="rounded-lg bg-red-500 p-2 text-white transition-all duration-200 hover:bg-red-600 hover:shadow-lg"
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




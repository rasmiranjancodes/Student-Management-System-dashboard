import { useState, useEffect } from "react"
import { RxCross2 } from "react-icons/rx";
const initialState = {
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    email: "",
    grade: "Grade 10",
    gpa: "",
    attendance: "",
    subjects: "",
    address: "",
    status: "Active",
};

function AddEditStudent({ editStudent, isOpen, onClose, onSave }) {

    const [student, setStudent] = useState(initialState);

    useEffect(() => {
        if (editStudent) {
            setStudent(editStudent);
        } else {
            setStudent(initialState);
        }
    }, [editStudent]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setStudent((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!student.firstName ||
            !student.lastName ||
            !student.email
        ) {
            alert("Please fill required fields");
            return;
        }

        onSave(student);
        setStudent(initialState);
        onClose();
    };
    if (!isOpen) return null;

    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-5">
                <div className="w-full max-w-5xl max-h-[90vh] bg-zinc-900 rounded-2xl shadow-2xl flex flex-col">
                    {/* Header */}

                    <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-zinc-900 border-b border-zinc-700">
                        <h2 className="text-2xl font-bold text-white">
                            {editStudent ? "Edit student" : "Add student"}
                        </h2>
                        <button onClick={onClose} className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition text-white">
                            <RxCross2 size={22} />
                        </button>
                    </div>

                    <form onSubmit={handleSubmit}
                        className="flex-1 overflow-y-auto p-8 space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* first Name */}
                            <div>
                                <label className="mb-2 flex items-center gap-2 text-gray-300">
                                    First Name
                                </label>
                                <input type="text"
                                    name="firstName"
                                    value={student.firstName}
                                    onChange={handleChange}
                                    className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition" />
                            </div>

                            {/* Last Name */}
                            <div>
                                <label className="mb-2 flex items-center gap-2 text-gray-300">
                                    Last Name
                                </label>

                                <input type="text"
                                    name="lastName"
                                    value={student.lastName}
                                    onChange={handleChange}
                                    className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition" />
                            </div>

                            {/* DOB */}
                            <div>
                                <label className="mb-2 flex items-center gap-2 text-gray-300">
                                    Date of Birth
                                </label>

                                <input
                                    type="date"
                                    name="dob"
                                    value={student.dob}
                                    onChange={handleChange}
                                    className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition"
                                />
                            </div>

                            {/* Gender */}
                            <div>
                                <label className="mb-2 flex items-center gap-2 text-gray-300">
                                    Gender
                                </label>

                                <select
                                    name="gender"
                                    value={student.gender}
                                    onChange={handleChange}
                                    className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition"
                                >
                                    <option value="">Select</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            {/* Email */}
                            <div>
                                <label className="mb-2 flex items-center gap-2 text-gray-300">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    value={student.email}
                                    onChange={handleChange}
                                    className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition"
                                />
                            </div>

                            {/* Grade */}
                            <div>
                                <label className="mb-2 flex items-center gap-2 text-gray-300">
                                    Grade
                                </label>

                                <select
                                    name="grade"
                                    value={student.grade}
                                    onChange={handleChange}
                                    className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition"
                                >
                                    <option>Grade 8</option>
                                    <option>Grade 9</option>
                                    <option>Grade 10</option>
                                    <option>Grade 11</option>
                                    <option>Grade 12</option>
                                </select>
                            </div>

                            {/* GPA */}
                            <div>
                                <label className="mb-2 flex items-center gap-2 text-gray-300">
                                    GPA (0-4)
                                </label>

                                <input
                                    type="number"
                                    step="0.1"
                                    name="gpa"
                                    value={student.gpa}
                                    onChange={handleChange}
                                    className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition"
                                />
                            </div>

                            {/* Attendance */}
                            <div>
                                <label className="mb-2 flex items-center gap-2 text-gray-300">
                                    Attendance %
                                </label>

                                <input
                                    type="number"
                                    name="attendance"
                                    value={student.attendance}
                                    onChange={handleChange}
                                    className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition"
                                />
                            </div>
                        </div>

                        {/* Subjects */}
                        <div>
                            <label className="mb-2 flex items-center gap-2 text-gray-300">
                                Subjects
                            </label>

                            <input
                                type="text"
                                name="subjects"
                                value={student.subjects}
                                onChange={handleChange}
                                placeholder="Mathematics, Physics, English"
                                className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition"
                            />
                        </div>

                        {/* Address */}
                        <div>
                            <label className="mb-2 flex items-center gap-2 text-gray-300">
                                Address
                            </label>

                            <textarea
                                rows={3}
                                name="address"
                                value={student.address}
                                onChange={handleChange}
                                className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition"
                            />
                        </div>

                        {/* Status */}

                        <div>
                            <label className="mb-2 flex items-center gap-2 text-gray-300">
                                Status
                            </label>

                            <select
                                name="status"
                                value={student.status}
                                onChange={handleChange}
                                className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition"
                            >
                                <option>Active</option>
                                <option>Inactive</option>
                            </select>
                        </div>

                        {/* Buttons */}

                        <div className="flex justify-end gap-4 pt-4">
                            <button
                                type="button"
                                onClick={onClose}
                                className="px-7 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition"
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                className="px-6 py-3 rounded-lg text-white bg-blue-600 hover:bg-blue-700"
                            >
                                {editStudent ? "Update Student" : "Add Student"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddEditStudent


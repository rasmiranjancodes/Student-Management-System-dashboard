import { NavLink } from "react-router";
import { MdDashboard, MdPeople, MdAssessment, MdClose } from "react-icons/md";

function SideBar({ isOpen, onClose }) {
    return (
        <aside
            className={`fixed inset-y-0 left-0 z-40 w-72 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 shadow-2xl transition-transform duration-300 ${
                isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
            }`}
        >
            <button
                type="button"
                onClick={onClose}
                className="absolute right-4 top-4 rounded-lg border border-slate-600 p-2 text-slate-300 transition hover:bg-slate-700 hover:text-white lg:hidden"
                aria-label="Close menu"
            >
                <MdClose className="text-xl" />
            </button>

            <div className="border-b border-slate-700 p-6 pb-5">
                <div className="mb-2 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500">
                        <span className="text-lg font-bold text-white">S</span>
                    </div>
                    <h1 className="text-2xl font-bold text-white">SMS</h1>
                </div>
                <p className="ml-13 text-xs text-slate-400">Student Management System</p>
            </div>

            <nav className="space-y-3 p-6">
                <NavLink
                    to="/"
                    onClick={onClose}
                    className={({ isActive }) =>
                        `flex items-center gap-3 rounded-lg px-4 py-3 transition-all duration-300 ${
                            isActive
                                ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/50"
                                : "text-slate-300 hover:bg-slate-700/50 hover:text-white"
                        }`
                    }
                >
                    <MdDashboard className="text-xl" />
                    <span className="font-medium">Dashboard</span>
                </NavLink>

                <NavLink
                    to="/students"
                    onClick={onClose}
                    className={({ isActive }) =>
                        `flex items-center gap-3 rounded-lg px-4 py-3 transition-all duration-300 ${
                            isActive
                                ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/50"
                                : "text-slate-300 hover:bg-slate-700/50 hover:text-white"
                        }`
                    }
                >
                    <MdPeople className="text-xl" />
                    <span className="font-medium">Students</span>
                </NavLink>

                <NavLink
                    to="/reports"
                    onClick={onClose}
                    className={({ isActive }) =>
                        `flex items-center gap-3 rounded-lg px-4 py-3 transition-all duration-300 ${
                            isActive
                                ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/50"
                                : "text-slate-300 hover:bg-slate-700/50 hover:text-white"
                        }`
                    }
                >
                    <MdAssessment className="text-xl" />
                    <span className="font-medium">Reports</span>
                </NavLink>
            </nav>

            <div className="absolute bottom-6 left-6 right-6">
                <div className="rounded-lg border border-slate-600 bg-slate-700/30 p-4">
                    <p className="text-center text-xs text-slate-400">© 2024 SMS v1.0</p>
                </div>
            </div>
        </aside>
    );
}

export default SideBar;


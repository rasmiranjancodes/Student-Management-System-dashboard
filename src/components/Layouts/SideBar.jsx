import { NavLink } from "react-router"
import { MdDashboard, MdPeople, MdAssessment } from "react-icons/md"

function SideBar() {
    return (
        <>
            <div className="w-72 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 min-h-screen shadow-2xl fixed left-0 top-0">
                {/* Brand Section */}
                <div className="p-8 border-b border-slate-700">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">S</span>
                        </div>
                        <h1 className="text-2xl font-bold text-white">
                            SMS
                        </h1>
                    </div>
                    <p className="text-xs text-slate-400 ml-13">
                        Student Management System
                    </p>
                </div>

                {/* Navigation Links */}
                <nav className="p-6 space-y-3">
                    <NavLink to="/"
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                                isActive 
                                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/50" 
                                    : "text-slate-300 hover:bg-slate-700/50 hover:text-white"
                            }`}>
                        <MdDashboard className="text-xl" />
                        <span className="font-medium">Dashboard</span>
                    </NavLink>
                    
                    <NavLink to="/students"
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                                isActive 
                                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/50" 
                                    : "text-slate-300 hover:bg-slate-700/50 hover:text-white"
                            }`}>
                        <MdPeople className="text-xl" />
                        <span className="font-medium">Students</span>
                    </NavLink>
                    
                    <NavLink to="/reports"
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                                isActive 
                                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/50" 
                                    : "text-slate-300 hover:bg-slate-700/50 hover:text-white"
                            }`}>
                        <MdAssessment className="text-xl" />
                        <span className="font-medium">Reports</span>
                    </NavLink>
                </nav>

                {/* Footer */}
                <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600">
                        <p className="text-xs text-slate-400 text-center">© 2024 SMS v1.0</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideBar


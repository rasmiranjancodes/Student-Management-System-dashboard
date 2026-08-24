
import { MdNotifications, MdSearch, MdSettings } from "react-icons/md"
import { useStudent } from "../../Context/StudentContext"

function TopBar() {
    const { students } = useStudent()

    return (
        <>
            <div className="flex justify-between items-center px-8 py-6 bg-white border-b border-slate-200 shadow-sm fixed top-0 right-0 left-72 z-50">
                {/* Left Section */}
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">
                        Student Management System
                    </h1>
                    <p className="text-sm text-slate-500 mt-1">Welcome back! Here's your dashboard overview.</p>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-6">
                    {/* Search Bar */}
                    <div className="hidden lg:flex items-center gap-2 bg-slate-100 rounded-lg px-4 py-2.5">
                        <MdSearch className="text-slate-400 text-xl" />
                        <input 
                            type="text" 
                            placeholder="Search..." 
                            className="bg-transparent text-sm text-slate-700 placeholder-slate-400 outline-none w-40"
                        />
                    </div>

                    {/* Stats Badge */}
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-lg px-4 py-2.5 font-semibold text-slate-700">
                        <span className="text-sm">📊 {students.length} Students</span>
                    </div>

                    {/* Icons */}
                    <button className="relative p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                        <MdNotifications className="text-2xl" />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>

                    <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                        <MdSettings className="text-2xl" />
                    </button>

                    {/* Profile Avatar */}
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold cursor-pointer hover:shadow-lg hover:shadow-blue-500/50 transition-shadow">
                        A
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopBar



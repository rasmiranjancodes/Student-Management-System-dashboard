import { MdNotifications, MdSearch, MdSettings, MdMenu } from "react-icons/md";
import { useStudent } from "../../Context/StudentContext";

function TopBar({ onMenuToggle }) {
    const { students } = useStudent();

    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur-sm lg:left-72">
            <div className="flex items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
                <div className="flex min-w-0 items-center gap-3">
                    <button
                        type="button"
                        onClick={onMenuToggle}
                        className="rounded-lg border border-slate-200 p-2 text-slate-700 transition hover:bg-slate-100 lg:hidden"
                        aria-label="Toggle menu"
                    >
                        <MdMenu className="text-2xl" />
                    </button>

                    <div className="min-w-0">
                        <h1 className="truncate text-lg font-bold text-slate-900 sm:text-2xl lg:text-3xl">
                            Student Management System
                        </h1>
                        <p className="mt-1 hidden text-sm text-slate-500 sm:block">
                            Welcome back! Here's your dashboard overview.
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-4 lg:gap-6">
                    <div className="hidden items-center gap-2 rounded-lg bg-slate-100 px-4 py-2.5 lg:flex">
                        <MdSearch className="text-xl text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-40 bg-transparent text-sm text-slate-700 placeholder-slate-400 outline-none"
                        />
                    </div>

                    <div className="rounded-lg border border-blue-200 bg-gradient-to-r from-blue-50 to-cyan-50 px-2 py-2 text-xs font-semibold text-slate-700 sm:px-4 sm:text-sm">
                        <span>📊 {students.length} Students</span>
                    </div>

                    <button className="relative rounded-lg p-2 text-slate-600 transition hover:bg-slate-100">
                        <MdNotifications className="text-2xl" />
                        <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500"></span>
                    </button>

                    <button className="rounded-lg p-2 text-slate-600 transition hover:bg-slate-100">
                        <MdSettings className="text-2xl" />
                    </button>

                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 font-bold text-white shadow-lg shadow-blue-500/30 transition hover:shadow-blue-500/50 sm:h-10 sm:w-10">
                        A
                    </div>
                </div>
            </div>
        </header>
    );
}

export default TopBar;



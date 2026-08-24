import { useStudent } from "../Context/StudentContext"
import { MdEmojiEvents } from "react-icons/md"


function TopStudent() {
    const { students } = useStudent();

    const topStudents = [...students]
        .sort((a, b) => b.gpa - a.gpa)
        .slice(0, 5);

    const getMedalEmoji = (index) => {
        if (index === 0) return "🥇";
        if (index === 1) return "🥈";
        if (index === 2) return "🥉";
        return "⭐";
    };

    return (
        <>
            <div className="bg-white rounded-3xl shadow-xl p-8 h-full">
                {/* Header */}
                <div className="flex items-center gap-3 mb-8">
                    <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-3 rounded-xl">
                        <MdEmojiEvents className="text-white text-2xl" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">🏆 Top Performers</h2>
                        <p className="text-sm text-slate-500">Highest GPA Students</p>
                    </div>
                </div>

                {/* Students List */}
                <div className="space-y-3">
                    {topStudents.map((student, index) => (
                        <div key={student.id} className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-slate-50 to-amber-50 hover:shadow-md transition-all duration-300 border border-slate-100 hover:border-amber-200">
                            {/* Rank & Name */}
                            <div className="flex items-center gap-4 flex-1">
                                <div className="text-2xl font-bold text-slate-400 w-8 text-center">
                                    {getMedalEmoji(index)}
                                </div>

                                <div>
                                    <h3 className="font-semibold text-slate-900">
                                        {student.firstName} {student.lastName}
                                    </h3>

                                    <p className="text-slate-500 text-xs">
                                        {student.grade}
                                    </p>
                                </div>
                            </div>

                            {/* GPA Badge */}
                            <div className="flex flex-col items-end">
                                <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold px-4 py-1.5 rounded-full text-sm shadow-lg">
                                    {student.gpa}
                                </span>
                                <p className="text-xs text-slate-500 mt-1 font-medium">out of 4.0</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default TopStudent


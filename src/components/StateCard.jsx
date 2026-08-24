

function StateCard({ title, value, icon: Icon, gradient = "from-blue-600 to-cyan-600" }) {

    return (
        <>
            <div className={`bg-gradient-to-br ${gradient} rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-2xl hover:scale-105 text-white cursor-pointer group`}>
                {/* Icon Background */}
                <div className="flex justify-between items-start mb-4">
                    {Icon && (
                        <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl group-hover:bg-white/30 transition-all">
                            <Icon className="text-3xl" />
                        </div>
                    )}
                </div>

                {/* Content */}
                <h3 className="text-sm font-medium opacity-90 mb-2 uppercase tracking-wider">{title}</h3>
                <h2 className="text-4xl font-bold">{value}</h2>
            </div>
        </>
    )
}

export default StateCard


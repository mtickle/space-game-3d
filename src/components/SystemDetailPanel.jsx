
const SystemDetailPanel = ({ system, onClose }) => {
    // Use a conditional class to slide the panel in and out
    const panelClasses = system
        ? 'transform-none'
        : '-translate-x-full';

    return (
        <div
            className={`absolute top-0 left-0 h-full w-80 bg-black/70 text-white font-mono p-5 border-r border-gray-700 backdrop-blur-sm overflow-y-auto transition-transform duration-500 ease-in-out ${panelClasses}`}
        >
            {system && (
                <>
                    <div>
                        <h2 className="text-2xl font-bold text-cyan-400 mb-2">{system.starName}</h2>
                        <p className="text-sm text-gray-400 mb-6">{system.starDescription}</p>
                    </div>

                    <div>
                        <h3 className="border-b border-gray-600 pb-2 mb-3 text-lg">Planets ({system.planets.length})</h3>
                        <ul className="list-none p-0 space-y-4">
                            {system.planets.map(planet => (
                                <li key={planet.planetId}>
                                    <strong style={{ color: planet.planetColor }}>{planet.planetName}</strong>
                                    <span className="text-xs text-gray-500 ml-2">({planet.planetType})</span>
                                    <p className="text-xs mt-1 ml-2 text-gray-400">Moons: {planet.moons.length}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <button
                        onClick={onClose}
                        className="absolute bottom-5 left-5 right-5 py-3 px-4 bg-gray-800/80 border border-gray-600 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                        Back to Galaxy
                    </button>
                </>
            )}
        </div>
    );
};

export default SystemDetailPanel;

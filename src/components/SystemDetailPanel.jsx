
const SystemDetailPanel = ({ system, onClose }) => {
    if (!system) return null;

    return (
        <div style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '300px',
            height: '100%',
            backgroundColor: 'rgba(10, 10, 20, 0.85)',
            color: 'white',
            fontFamily: 'monospace',
            padding: '20px',
            overflowY: 'auto',
            borderRight: '1px solid #444',
            backdropFilter: 'blur(5px)',
            transition: 'transform 0.5s ease-in-out',
            transform: system ? 'translateX(0)' : 'translateX(-100%)',
        }}>
            <h2 style={{ fontSize: '1.5em', color: '#00ff88', marginBottom: '10px' }}>{system.starName}</h2>
            <p style={{ fontSize: '0.8em', color: '#aaa', marginBottom: '20px' }}>{system.starDescription}</p>

            <h3 style={{ borderBottom: '1px solid #444', paddingBottom: '5px', marginBottom: '10px' }}>Planets ({system.planets.length})</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {system.planets.map(planet => (
                    <li key={planet.planetId} style={{ marginBottom: '15px' }}>
                        <strong style={{ color: planet.planetColor }}>{planet.planetName}</strong>
                        <span style={{ fontSize: '0.8em', color: '#aaa', marginLeft: '10px' }}>({planet.planetType})</span>
                        <p style={{ fontSize: '0.7em', margin: '5px 0 0 10px' }}>Moons: {planet.moons.length}</p>
                    </li>
                ))}
            </ul>
            <button
                onClick={onClose}
                style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '20px',
                    width: 'calc(100% - 40px)',
                    padding: '10px',
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    color: 'white',
                    border: '1px solid white',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}
            >
                Back to Galaxy
            </button>
        </div>
    );
};

export default SystemDetailPanel;

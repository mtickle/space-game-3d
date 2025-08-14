import { Home, RefreshCw, RotateCcw } from 'lucide-react'; // Added RefreshCw for the reset icon
import { useEffect, useState } from 'react';

const Footer = ({ camera, controls, onFlyHome, stars }) => {
    const [cameraPosition, setCameraPosition] = useState({ x: 0, y: 0, z: 0 });

    useEffect(() => {
        if (!controls) return;

        const updatePosition = () => {
            if (camera) {
                setCameraPosition({
                    x: Math.round(camera.position.x),
                    y: Math.round(camera.position.y),
                    z: Math.round(camera.position.z),
                });
            }
        };

        controls.addEventListener('change', updatePosition);
        updatePosition(); // Initial call
        return () => controls.removeEventListener('change', updatePosition);
    }, [camera, controls]);

    const resetView = () => {
        if (controls && camera) {
            controls.target.set(0, 0, 0);
            camera.position.set(0, 0, 100);
        }
    };

    // --- NEW: Function to handle resetting the galaxy ---
    const handleResetGalaxy = () => {
        // Use a confirmation dialog to prevent accidental resets
        if (window.confirm("Are you sure you want to reset the entire galaxy? This will clear all home and visited system data.")) {
            localStorage.clear();
            window.location.reload();
        }
    };

    return (
        <div className="absolute bottom-0 left-0 right-0 bg-black/80 border-t-2 border-cyan-500 p-3 flex justify-between items-center text-sm text-cyan-300 font-mono">
            <div>
                <span>Systems Loaded: {stars.length}</span>
                <span className="mx-4">|</span>
                <span>
                    Coords: ({cameraPosition.x}, {cameraPosition.y}, {cameraPosition.z})
                </span>
            </div>
            <div className="flex items-center gap-6">
                <button
                    onClick={onFlyHome}
                    className="flex items-center gap-2 hover:text-white transition-colors"
                    title="Fly to Home System"
                >
                    <Home size={18} />
                    <span>Home</span>
                </button>
                <button
                    onClick={resetView}
                    className="flex items-center gap-2 hover:text-white transition-colors"
                    title="Reset View"
                >
                    <RotateCcw size={16} />
                    <span>Reset</span>
                </button>
                {/* --- NEW: Reset Galaxy Button --- */}
                <button
                    onClick={handleResetGalaxy}
                    className="flex items-center gap-2 text-red-400 hover:text-red-200 transition-colors"
                    title="Reset Galaxy"
                >
                    <RefreshCw size={16} />
                    <span>Reset Galaxy</span>
                </button>
            </div>
        </div>
    );
};

export default Footer;

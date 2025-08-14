import { useEffect, useRef } from 'react';

const MiniMap = ({ stars, cameraPosition }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || !stars) return;
        const ctx = canvas.getContext('2d');
        const { width, height } = canvas;

        // Clear canvas
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.fillRect(0, 0, width, height);

        ctx.save();
        ctx.translate(width / 2, height / 2);

        // Draw stars
        stars.forEach(star => {
            const dx = star.x - cameraPosition.x;
            const dz = star.z - cameraPosition.z;

            // Simple projection onto the 2D map
            const mapX = dx * 0.1;
            const mapZ = dz * 0.1;

            ctx.fillStyle = star.color;
            ctx.beginPath();
            ctx.arc(mapX, mapZ, 2, 0, Math.PI * 2);
            ctx.fill();
        });

        // Draw player indicator
        ctx.fillStyle = '#00ff88';
        ctx.beginPath();
        ctx.arc(0, 0, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.restore();

    }, [stars, cameraPosition]);

    return <canvas ref={canvasRef} width="200" height="200" className="border border-gray-700 rounded-md"></canvas>;
};


const UIPanel = ({ onFlyHome, stars, cameraPosition }) => {
    return (
        <div className="absolute bottom-5 left-5 text-white font-mono flex flex-col items-center space-y-4">
            <button
                onClick={onFlyHome}
                className="py-2 px-4 bg-gray-800/80 border border-gray-600 rounded-lg hover:bg-gray-700 transition-colors"
            >
                Fly Home
            </button>
            {/* <MiniMap stars={stars} cameraPosition={cameraPosition} /> */}
        </div>
    );
};

export default UIPanel;

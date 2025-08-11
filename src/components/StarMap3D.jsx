import { useCallback, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import SystemDetailPanel from './SystemDetailPanel'; // Import the component

const SECTOR_SIZE = 500; // This MUST match your API's SECTOR_SIZE

const StarMap3D = () => {
    const mountRef = useRef(null);
    const [stars, setStars] = useState([]);
    const [hoveredStar, setHoveredStar] = useState(null);
    const [selectedStar, setSelectedStar] = useState(null);
    const [activeSystemDetails, setActiveSystemDetails] = useState(null);

    const sceneRef = useRef(null);
    const cameraRef = useRef(null);
    const rendererRef = useRef(null);
    const controlsRef = useRef(null);
    const starMeshes = useRef([]);
    const planetMeshes = useRef([]); // --- NEW: Ref to hold planet meshes
    const loadedSectors = useRef(new Set());
    const animationFrameId = useRef(null);
    const lastCameraPosition = useRef(new THREE.Vector3());

    const fetchStarsForSector = useCallback(async (sectorX, sectorY, sectorZ) => {
        const sectorId = `${sectorX},${sectorY},${sectorZ}`;
        if (loadedSectors.current.has(sectorId)) return;
        loadedSectors.current.add(sectorId);

        try {
            const apiKey = import.meta.env.VITE_API_KEY;
            const baseUrl = import.meta.env.VITE_API_BASE_URL;
            const response = await fetch(`${baseUrl}/api/generateStars3d?sectorX=${sectorX}&sectorY=${sectorY}&sectorZ=${sectorZ}`, {
                headers: { 'x-api-key': apiKey }
            });
            if (!response.ok) throw new Error(`Network error for sector ${sectorId}`);
            const newStars = await response.json();
            setStars(prevStars => [...prevStars, ...newStars]);
        } catch (error) {
            console.error(`Failed to fetch stars for sector ${sectorId}:`, error);
            loadedSectors.current.delete(sectorId);
        }
    }, []);

    const fetchSystemDetails = useCallback(async (star) => {
        if (!star || !star.id) return;
        console.log(`Fetching details for ${star.name}...`);
        try {
            const apiKey = import.meta.env.VITE_API_KEY;
            const baseUrl = import.meta.env.VITE_API_BASE_URL;
            let response = await fetch(`${baseUrl}/api/v1/systems/${star.id}`, {
                headers: { 'x-api-key': apiKey }
            });

            if (response.status === 404) {
                response = await fetch(`${baseUrl}/api/v1/systems`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', 'x-api-key': apiKey },
                    body: JSON.stringify(star),
                });
            }

            if (!response.ok) throw new Error('Failed to fetch or create system details');

            const fullSystem = await response.json();
            setActiveSystemDetails(fullSystem);

        } catch (error) {
            console.error(error);
        }
    }, []);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 5000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });

        sceneRef.current = scene;
        cameraRef.current = camera;
        rendererRef.current = renderer;

        scene.background = new THREE.Color(0x050515);
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.zoomSpeed = 2.5;
        controlsRef.current = controls;

        scene.add(createStarfield());
        camera.position.z = 100;

        const clock = new THREE.Clock(); // --- NEW: Clock for smooth animation

        const animate = () => {
            animationFrameId.current = requestAnimationFrame(animate);

            const delta = clock.getDelta(); // Time since last frame

            // --- NEW: Animate Planets ---
            planetMeshes.current.forEach(planet => {
                planet.userData.angle += planet.userData.speed * delta * 10; // Use delta for frame-rate independence
                const starPos = planet.userData.starPosition;
                planet.position.x = starPos.x + Math.cos(planet.userData.angle) * planet.userData.orbitRadius;
                planet.position.z = starPos.z + Math.sin(planet.userData.angle) * planet.userData.orbitRadius;
                planet.rotation.y += 0.005;
            });

            controls.update();
            renderer.render(scene, camera);
        };
        animate();

        const onCameraMoveEnd = () => {
            const { x, y, z } = camera.position;
            const sectorX = Math.floor(x / SECTOR_SIZE);
            const sectorY = Math.floor(y / SECTOR_SIZE);
            const sectorZ = Math.floor(z / SECTOR_SIZE);
            for (let i = -1; i <= 1; i++) {
                for (let j = -1; j <= 1; j++) {
                    fetchStarsForSector(sectorX + i, sectorY + j, sectorZ);
                }
            }
        };
        controls.addEventListener('end', onCameraMoveEnd);

        const initialSectorX = 0, initialSectorY = 0, initialSectorZ = 0;
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                fetchStarsForSector(initialSectorX + i, initialSectorY + j, initialSectorZ);
            }
        }

        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();

        const handleMouseMove = (event) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObjects(starMeshes.current);
            if (intersects.length > 0) {
                const starData = intersects[0].object.userData;
                setHoveredStar({ ...starData, screenX: event.clientX, screenY: event.clientY });
            } else {
                setHoveredStar(null);
            }
        };

        const handleMouseClick = (event) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObjects(starMeshes.current);

            if (intersects.length > 0) {
                const starData = intersects[0].object.userData;
                lastCameraPosition.current.copy(camera.position);
                setSelectedStar(starData);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('click', handleMouseClick);

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        let currentMount = mountRef.current;
        return () => {
            cancelAnimationFrame(animationFrameId.current);
            controls.removeEventListener('end', onCameraMoveEnd);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('click', handleMouseClick);
            renderer.dispose();
            if (currentMount) {
                currentMount.removeChild(renderer.domElement);
            }
        };
    }, [fetchStarsForSector]);

    useEffect(() => {
        const scene = sceneRef.current;
        if (!scene) return;

        const currentStarIds = new Set(starMeshes.current.map(mesh => mesh.userData.id));
        const newStars = stars.filter(star => !currentStarIds.has(star.id));

        newStars.forEach(starData => {
            const starGroup = new THREE.Group();
            const starGeometry = new THREE.SphereGeometry(starData.size, 32, 32);
            const starMaterial = new THREE.MeshBasicMaterial({ color: starData.color });
            const starMesh = new THREE.Mesh(starGeometry, starMaterial);
            starMesh.userData = starData;

            const glowSprite = new THREE.Sprite(new THREE.SpriteMaterial({
                map: createGlowTexture(starData.color),
                transparent: true,
                blending: THREE.AdditiveBlending,
            }));
            glowSprite.scale.set(starData.size * 3, starData.size * 3, 1);

            const light = new THREE.PointLight(starData.color, 2, 150);

            starGroup.add(starMesh, glowSprite, light);
            starGroup.position.set(starData.x, starData.y, starData.z);

            scene.add(starGroup);
            starMeshes.current.push(starMesh);
        });
    }, [stars]);

    useEffect(() => {
        const camera = cameraRef.current;
        const controls = controlsRef.current;

        if (selectedStar && camera && controls) {
            fetchSystemDetails(selectedStar);
            const targetPosition = new THREE.Vector3(selectedStar.x, selectedStar.y, selectedStar.z);
            const cameraTargetPosition = targetPosition.clone().add(new THREE.Vector3(-20, 5, selectedStar.size * 8));
            const startPosition = camera.position.clone();
            const startTarget = controls.target.clone();
            let t = 0;

            const animateFocus = () => {
                t += 0.02;
                if (t > 1) t = 1;
                camera.position.lerpVectors(startPosition, cameraTargetPosition, t);
                controls.target.lerpVectors(startTarget, targetPosition, t);
                if (t < 1) {
                    requestAnimationFrame(animateFocus);
                }
            };
            animateFocus();
        }
    }, [selectedStar, fetchSystemDetails]);

    // --- NEW: Create and remove planets when a system is selected/deselected ---
    useEffect(() => {
        const scene = sceneRef.current;
        if (!scene) return;

        // Clear any old planets from the scene
        planetMeshes.current.forEach(planet => scene.remove(planet));
        planetMeshes.current = [];

        if (activeSystemDetails && activeSystemDetails.planets) {
            const starPosition = new THREE.Vector3(activeSystemDetails.starX, activeSystemDetails.starY, activeSystemDetails.starZ);

            activeSystemDetails.planets.forEach(planetData => {
                const planetGeometry = new THREE.SphereGeometry(planetData.planetSize * 0.2, 32, 32); // Scale planets down
                const planetMaterial = new THREE.MeshStandardMaterial({
                    color: planetData.planetColor,
                    roughness: 0.8,
                    metalness: 0.1
                });
                const planetMesh = new THREE.Mesh(planetGeometry, planetMaterial);

                // Store data needed for animation
                planetMesh.userData = {
                    orbitRadius: planetData.orbitRadius * 0.5, // Scale orbit down
                    speed: Math.random() * 0.5 + 0.1,
                    angle: Math.random() * Math.PI * 2,
                    starPosition: starPosition
                };

                scene.add(planetMesh);
                planetMeshes.current.push(planetMesh);
            });
        }
    }, [activeSystemDetails]);

    const returnToGalaxyView = () => {
        setSelectedStar(null);
        setActiveSystemDetails(null);
        const camera = cameraRef.current;
        const controls = controlsRef.current;

        if (camera && controls) {
            const startPosition = camera.position.clone();
            const startTarget = controls.target.clone();
            let t = 0;

            const animateReturn = () => {
                t += 0.02;
                if (t > 1) t = 1;
                camera.position.lerpVectors(startPosition, lastCameraPosition.current, t);
                controls.target.lerpVectors(startTarget, new THREE.Vector3(0, 0, 0), t);
                if (t < 1) {
                    requestAnimationFrame(animateReturn);
                }
            };
            animateReturn();
        }
    };

    function createGlowTexture(color) {
        const canvas = document.createElement('canvas');
        canvas.width = 128;
        canvas.height = 128;
        const context = canvas.getContext('2d');
        const gradient = context.createRadialGradient(64, 64, 0, 64, 64, 64);
        const starColor = new THREE.Color(color);
        gradient.addColorStop(0.0, 'rgba(255, 255, 255, 0.8)');
        gradient.addColorStop(0.3, `rgba(${starColor.r * 255}, ${starColor.g * 255}, ${starColor.b * 255}, 0.5)`);
        gradient.addColorStop(1.0, 'rgba(0,0,0,0)');
        context.fillStyle = gradient;
        context.fillRect(0, 0, 128, 128);
        return new THREE.CanvasTexture(canvas);
    }

    function createStarfield() {
        const starVertices = [];
        for (let i = 0; i < 2000; i++) {
            const x = THREE.MathUtils.randFloatSpread(4000);
            const y = THREE.MathUtils.randFloatSpread(4000);
            const z = THREE.MathUtils.randFloatSpread(4000);
            starVertices.push(x, y, z);
        }
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
        const material = new THREE.PointsMaterial({ color: 0xffffff, size: 0.2 });
        return new THREE.Points(geometry, material);
    }

    return (
        <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
            <div ref={mountRef} />
            {hoveredStar && (
                <div style={{
                    position: 'absolute',
                    left: hoveredStar.screenX + 15,
                    top: hoveredStar.screenY + 15,
                    color: 'white',
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    padding: '5px 10px',
                    borderRadius: '5px',
                    pointerEvents: 'none',
                    fontFamily: 'monospace'
                }}>
                    {hoveredStar.name}
                </div>
            )}
            <SystemDetailPanel system={activeSystemDetails} onClose={returnToGalaxyView} />
        </div>
    );
};

export default StarMap3D;

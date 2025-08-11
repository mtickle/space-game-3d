import { useCallback, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const SECTOR_SIZE = 500; // This MUST match your API's SECTOR_SIZE

const StarMap3D = () => {
    const mountRef = useRef(null);
    const [stars, setStars] = useState([]);
    const [hoveredStar, setHoveredStar] = useState(null);
    const [selectedStar, setSelectedStar] = useState(null);

    // --- REFACTORED: Refs are initialized to null ---
    // The Three.js objects will be created inside the useEffect hook.
    const sceneRef = useRef(null);
    const cameraRef = useRef(null);
    const rendererRef = useRef(null);
    const controlsRef = useRef(null);
    const starMeshes = useRef([]);
    const loadedSectors = useRef(new Set());
    const selectionIndicatorRef = useRef(null);

    // --- Function to fetch stars for a specific sector from your API ---
    const fetchStarsForSector = useCallback(async (sectorX, sectorY, sectorZ) => {
        const sectorId = `${sectorX},${sectorY},${sectorZ}`;
        if (loadedSectors.current.has(sectorId)) return;
        loadedSectors.current.add(sectorId);
        console.log(`Fetching stars for sector: ${sectorId}`);

        try {
            const apiKey = import.meta.env.VITE_API_KEY;
            const baseUrl = import.meta.env.VITE_API_BASE_URL;
            const response = await fetch(`${baseUrl}/api/generateStars3d?sectorX=${sectorX}&sectorY=${sectorY}&sectorZ=${sectorZ}`, {
                headers: { 'x-api-key': apiKey }
            });

            if (!response.ok) throw new Error(`Network response was not ok for sector ${sectorId}`);

            const newStars = await response.json();
            setStars(prevStars => [...prevStars, ...newStars]);
        } catch (error) {
            console.error(`Failed to fetch stars for sector ${sectorId}:`, error);
            loadedSectors.current.delete(sectorId);
        }
    }, []);

    // --- Setup the scene and event listeners once on mount ---
    useEffect(() => {
        // --- REFACTORED: Initialize Three.js objects here to prevent re-creation ---
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
        controlsRef.current = controls;

        scene.add(createStarfield());
        camera.position.z = 100;

        // Create the selection indicator (a white ring)
        const ringGeometry = new THREE.RingGeometry(1, 1.2, 32);
        const ringMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
        selectionIndicatorRef.current = new THREE.Mesh(ringGeometry, ringMaterial);
        selectionIndicatorRef.current.visible = false; // Hide it initially
        scene.add(selectionIndicatorRef.current);

        const animate = () => {
            requestAnimationFrame(animate);
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
        onCameraMoveEnd();

        // --- Raycasting for Hover and Click ---
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
                setSelectedStar(starData);
                console.log("Selected Star:", starData);
            } else {
                setSelectedStar(null); // Deselect if clicking on empty space
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
            controls.removeEventListener('end', onCameraMoveEnd);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('click', handleMouseClick);

            // --- PROPER CLEANUP ---
            renderer.dispose(); // This is crucial to release the WebGL context
            if (currentMount) {
                currentMount.removeChild(renderer.domElement);
            }
        };
    }, [fetchStarsForSector]);

    // --- Update the scene when stars data changes ---
    useEffect(() => {
        const scene = sceneRef.current;
        if (!scene) return; // Guard clause

        const currentStarIds = new Set(starMeshes.current.map(mesh => mesh.userData.id));
        const newStars = stars.filter(star => !currentStarIds.has(star.id));

        newStars.forEach(starData => {
            const starGroup = new THREE.Group();
            const starGeometry = new THREE.SphereGeometry(starData.size, 32, 32);
            const starMaterial = new THREE.MeshBasicMaterial({ color: starData.color });
            const starMesh = new THREE.Mesh(starGeometry, starMaterial);
            starMesh.userData = starData;

            const glowMaterial = new THREE.SpriteMaterial({
                map: createGlowTexture(starData.color),
                transparent: true,
                blending: THREE.AdditiveBlending,
                opacity: 0.7
            });
            const glowSprite = new THREE.Sprite(glowMaterial);
            glowSprite.scale.set(starData.size * 3, starData.size * 3, 1);

            const light = new THREE.PointLight(starData.color, 2, 150);

            starGroup.add(starMesh);
            starGroup.add(glowSprite);
            starGroup.add(light);
            starGroup.position.set(starData.x, starData.y, starData.z);

            scene.add(starGroup);
            starMeshes.current.push(starMesh);
        });
    }, [stars]);

    // --- Update selection indicator when a star is selected ---
    useEffect(() => {
        const indicator = selectionIndicatorRef.current;
        if (selectedStar && indicator) {
            indicator.position.set(selectedStar.x, selectedStar.y, selectedStar.z);
            indicator.scale.set(selectedStar.size * 1.5, selectedStar.size * 1.5, 1);
            indicator.visible = true;
        } else if (indicator) {
            indicator.visible = false;
        }
    }, [selectedStar]);

    // --- Helper Functions ---
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
        for (let i = 0; i < 20000; i++) {
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
        </div>
    );
};

export default StarMap3D;

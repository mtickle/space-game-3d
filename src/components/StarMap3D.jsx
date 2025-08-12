import { useCallback, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { createFlareTexture, createGlowTexture, createSeamlessStarTexture } from '../utils/textureUtils';
import SystemDetailPanel from './SystemDetailPanel';

const SECTOR_SIZE = 500;

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
    const planetMeshes = useRef([]);
    const orbitLines = useRef([]);
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

        // --- FIX: Add an ambient light to the scene ---
        // This provides a soft, global light so planets are not black.
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
        scene.add(ambientLight);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.zoomSpeed = 2.5;
        controlsRef.current = controls;

        scene.add(createStarfield());
        camera.position.z = 100;

        const clock = new THREE.Clock();

        const animate = () => {
            animationFrameId.current = requestAnimationFrame(animate);
            const delta = clock.getDelta();

            starMeshes.current.forEach(starMesh => {
                starMesh.rotation.y += 0.05 * delta;
                if (starMesh.parent) {
                    const flare = starMesh.parent.children.find(c => c.userData?.isFlare);
                    if (flare) flare.rotation.y -= 0.02 * delta;
                }
            });

            planetMeshes.current.forEach(planet => {
                planet.userData.angle += planet.userData.speed * delta;
                const starPos = planet.userData.starPosition;
                planet.position.x = starPos.x + Math.cos(planet.userData.angle) * planet.userData.orbitRadius;
                planet.position.y = starPos.y;
                planet.position.z = starPos.z + Math.sin(planet.userData.angle) * planet.userData.orbitRadius;
                planet.rotation.y += 0.05;
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
            const starMaterial = new THREE.MeshBasicMaterial({
                map: createSeamlessStarTexture(starData.color),
            });
            const starMesh = new THREE.Mesh(starGeometry, starMaterial);
            starMesh.userData = starData;

            const flareGeometry = new THREE.SphereGeometry(starData.size * 1.3, 32, 32);
            const flareMaterial = new THREE.MeshBasicMaterial({
                map: createFlareTexture(),
                transparent: true,
                blending: THREE.AdditiveBlending,
                depthWrite: false,
                side: THREE.DoubleSide
            });
            const flareMesh = new THREE.Mesh(flareGeometry, flareMaterial);
            flareMesh.userData.isFlare = true;

            const glowSprite = new THREE.Sprite(new THREE.SpriteMaterial({
                map: createGlowTexture(starData.color),
                transparent: true,
                blending: THREE.AdditiveBlending
            }));
            glowSprite.scale.set(starData.size * 3, starData.size * 3, 1);

            const light = new THREE.PointLight(starData.color, 2, 150);

            starGroup.add(starMesh, flareMesh, glowSprite, light);
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
            const cameraTargetPosition = targetPosition.clone().add(new THREE.Vector3(0, 80, 50));
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

    useEffect(() => {
        const scene = sceneRef.current;
        if (!scene) return;

        planetMeshes.current.forEach(planetMesh => scene.remove(planetMesh));
        planetMeshes.current = [];
        orbitLines.current.forEach(line => scene.remove(line));
        orbitLines.current = [];

        if (activeSystemDetails && activeSystemDetails.planets && selectedStar) {
            const starPosition = new THREE.Vector3(selectedStar.x, selectedStar.y, selectedStar.z);

            activeSystemDetails.planets.forEach(planetData => {
                const orbitRadius = planetData.orbitRadius * 1.5;
                const planetGeometry = new THREE.SphereGeometry(planetData.planetSize * 0.2, 16, 16);
                const planetMaterial = new THREE.MeshStandardMaterial({
                    color: planetData.planetColor,
                    roughness: 0.8,
                    metalness: 0.1
                });
                const planetMesh = new THREE.Mesh(planetGeometry, planetMaterial);

                planetMesh.userData = {
                    orbitRadius: orbitRadius,
                    speed: (Math.random() * 0.2 + 0.05) / (orbitRadius / 50),
                    angle: Math.random() * Math.PI * 2,
                    starPosition: starPosition
                };

                const orbitGeometry = new THREE.BufferGeometry().setFromPoints(
                    new THREE.Path().absarc(0, 0, orbitRadius, 0, Math.PI * 2, false).getSpacedPoints(128)
                );
                const orbitMaterial = new THREE.LineBasicMaterial({ color: 0x444444 });
                const orbitLine = new THREE.Line(orbitGeometry, orbitMaterial);
                orbitLine.position.copy(starPosition);
                orbitLine.rotation.x = Math.PI / 2;

                scene.add(orbitLine);
                scene.add(planetMesh);
                orbitLines.current.push(orbitLine);
                planetMeshes.current.push(planetMesh);
            });
        }
    }, [activeSystemDetails, selectedStar]);

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

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
    const [hoveredPlanet, setHoveredPlanet] = useState(null);
    const [homeSystem, setHomeSystem] = useState(null);

    const sceneRef = useRef(null);
    const cameraRef = useRef(null);
    const rendererRef = useRef(null);
    const controlsRef = useRef(null);
    const starMeshes = useRef([]);
    const planetMeshes = useRef([]);
    const planetGroups = useRef([]);
    const orbitLines = useRef([]);
    const loadedSectors = useRef(new Set());
    const animationFrameId = useRef(null);
    const lastCameraPosition = useRef(new THREE.Vector3());

    // Load home system from localStorage on mount
    useEffect(() => {
        const savedHome = localStorage.getItem('homeSystem');
        if (savedHome) setHomeSystem(JSON.parse(savedHome));
    }, []);

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

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
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

            planetGroups.current.forEach(group => {
                group.userData.angle += group.userData.speed * delta;
                const starPos = group.userData.starPosition;
                group.position.x = starPos.x + Math.cos(group.userData.angle) * group.userData.orbitRadius;
                group.position.y = starPos.y;
                group.position.z = starPos.z + Math.sin(group.userData.angle) * group.userData.orbitRadius;
                group.rotation.y += 0.05;
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

        onCameraMoveEnd();

        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();

        const handleMouseMove = (event) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
            raycaster.setFromCamera(mouse, camera);

            const allMeshes = [...starMeshes.current, ...planetMeshes.current];
            const intersects = raycaster.intersectObjects(allMeshes);

            if (intersects.length > 0) {
                const intersectedObject = intersects[0].object;
                const data = intersectedObject.userData;

                if (data.isPlanet) {
                    setHoveredPlanet({ ...data, screenX: event.clientX, screenY: event.clientY });
                    setHoveredStar(null);
                } else {
                    setHoveredStar({ ...data, screenX: event.clientX, screenY: event.clientY });
                    setHoveredPlanet(null);
                }
            } else {
                setHoveredStar(null);
                setHoveredPlanet(null);
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

        const handleContextMenu = (event) => {
            event.preventDefault();
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObjects(starMeshes.current);

            if (intersects.length > 0) {
                const starData = intersects[0].object.userData;
                setHomeSystem(starData);
                localStorage.setItem('homeSystem', JSON.stringify(starData));
                console.log("Home system set to:", starData.name);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('click', handleMouseClick);
        window.addEventListener('contextmenu', handleContextMenu);

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
            window.removeEventListener('contextmenu', handleContextMenu);
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
            const cameraTargetPosition = targetPosition.clone().add(new THREE.Vector3(0, 80, 100));
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

        planetGroups.current.forEach(group => scene.remove(group));
        planetGroups.current = [];
        planetMeshes.current = [];
        orbitLines.current.forEach(line => scene.remove(line));
        orbitLines.current = [];

        if (activeSystemDetails && activeSystemDetails.planets && selectedStar) {
            const starPosition = new THREE.Vector3(selectedStar.x, selectedStar.y, selectedStar.z);

            activeSystemDetails.planets.forEach(planetData => {
                const orbitRadius = planetData.orbitRadius * 1.5;
                const planetSize = planetData.planetSize * 0.2;
                const planetGeometry = new THREE.SphereGeometry(planetSize, 16, 16);

                const planetMaterial = new THREE.MeshBasicMaterial({
                    color: planetData.planetColor,
                });
                const planetMesh = new THREE.Mesh(planetGeometry, planetMaterial);
                planetMesh.userData = { ...planetData, isPlanet: true };

                const outlineMaterial = new THREE.MeshBasicMaterial({
                    color: 0x000000,
                    side: THREE.BackSide
                });
                const outlineMesh = new THREE.Mesh(planetGeometry, outlineMaterial);
                outlineMesh.scale.multiplyScalar(1.15);

                const planetGroup = new THREE.Group();
                planetGroup.add(outlineMesh);
                planetGroup.add(planetMesh);

                planetGroup.userData = {
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
                scene.add(planetGroup);
                orbitLines.current.push(orbitLine);
                planetGroups.current.push(planetGroup);
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

    // --- NEW: flyHome function ---
    const flyHome = () => {
        if (homeSystem) {
            setSelectedStar(homeSystem);
        } else {
            // Using a simple alert for now. Could be a more elegant UI element.
            alert("No home system set! Right-click a star to set it as your home.");
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
            {hoveredPlanet && (
                <div style={{
                    position: 'absolute',
                    left: hoveredPlanet.screenX + 15,
                    top: hoveredPlanet.screenY + 15,
                    color: 'white',
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    padding: '5px 10px',
                    borderRadius: '5px',
                    pointerEvents: 'none',
                    fontFamily: 'monospace'
                }}>
                    {hoveredPlanet.planetName}
                </div>
            )}
            <SystemDetailPanel system={activeSystemDetails} onClose={returnToGalaxyView} />
            {/* --- RE-ADDED UIPanel --- */}
            {/* <UIPanel
                onFlyHome={flyHome}
                stars={stars}
                cameraPosition={cameraRef.current?.position || new THREE.Vector3()}
            /> */}
        </div>
    );
};

export default StarMap3D;

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// We'll assume you create this file to handle API calls
// import { fetchStars, fetchSystemDetails } from '../utils/apiUtils'; 

const StarMap3D = () => {
    const mountRef = useRef(null);
    const [stars, setStars] = useState([]);
    const sceneRef = useRef(new THREE.Scene());
    const cameraRef = useRef(new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000));
    const rendererRef = useRef(new THREE.WebGLRenderer({ antialias: true }));
    const controlsRef = useRef();
    const starMeshes = useRef([]); // Keep track of the star meshes for raycasting

    // --- Step 1: Fetch initial stars from the API ---
    useEffect(() => {
        const getStars = async () => {
            try {
                // Replace with your actual fetchStars function from apiUtils.js
                // const starData = await fetchStars(); 

                // For now, we'll continue to simulate the API call
                const starData = Array.from({ length: 100 }, () => ({
                    id: `star-${Math.random().toString(36).substr(2, 9)}`,
                    name: 'Generated Star',
                    color: new THREE.Color(Math.random(), Math.random(), Math.random()),
                    size: Math.random() * 0.8 + 0.3,
                    x: THREE.MathUtils.randFloatSpread(500),
                    y: THREE.MathUtils.randFloatSpread(500),
                    z: THREE.MathUtils.randFloatSpread(500)
                }));
                setStars(starData);
            } catch (error) {
                console.error("Failed to fetch stars:", error);
            }
        };
        getStars();
    }, []);

    // --- Step 2: Setup the Three.js scene and handle clicks ---
    useEffect(() => {
        const scene = sceneRef.current;
        const camera = cameraRef.current;
        const renderer = rendererRef.current;

        scene.background = new THREE.Color(0x1a1a2e);
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controlsRef.current = controls;

        const starfield = createStarfield();
        scene.add(starfield);

        camera.position.z = 50;

        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };
        animate();

        // --- Step 3: Add click handler for raycasting ---
        const handleStarClick = (event) => {
            const raycaster = new THREE.Raycaster();
            const mouse = new THREE.Vector2();

            // Calculate mouse position in normalized device coordinates (-1 to +1)
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

            raycaster.setFromCamera(mouse, camera);

            // Check for intersections
            const intersects = raycaster.intersectObjects(starMeshes.current);

            if (intersects.length > 0) {
                const clickedStarMesh = intersects[0].object;
                const starData = clickedStarMesh.userData; // Get the data we attached
                console.log(`Clicked on star: ${starData.name} (ID: ${starData.id})`);

                // Here you would call your API to get the full system details
                // fetchSystemDetails(starData).then(fullSystem => {
                //     console.log("Received full system:", fullSystem);
                //     // You could then set this as the active system in your state
                // });
            }
        };

        window.addEventListener('click', handleStarClick);

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        let currentMount = mountRef.current;
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('click', handleStarClick);
            if (currentMount) {
                currentMount.removeChild(renderer.domElement);
            }
        };
    }, []);

    // --- Step 4: Update the scene when stars data changes ---
    useEffect(() => {
        const scene = sceneRef.current;

        // Clear old stars before adding new ones
        starMeshes.current.forEach(mesh => scene.remove(mesh));
        starMeshes.current = [];

        stars.forEach(starData => {
            const starGeometry = new THREE.SphereGeometry(starData.size, 16, 16);
            const starMaterial = new THREE.MeshBasicMaterial({
                color: starData.color,
                map: createGlowTexture(starData.color),
                transparent: true,
            });
            const starMesh = new THREE.Mesh(starGeometry, starMaterial);
            starMesh.position.set(starData.x, starData.y, starData.z);

            // --- Crucial: Attach the star's data to the 3D object ---
            starMesh.userData = starData;

            scene.add(starMesh);
            starMeshes.current.push(starMesh);
        });
    }, [stars]); // This effect re-runs whenever the stars state changes

    // --- Helper Functions ---
    function createGlowTexture(color) {
        const canvas = document.createElement('canvas');
        canvas.width = 128;
        canvas.height = 128;
        const context = canvas.getContext('2d');
        const gradient = context.createRadialGradient(64, 64, 0, 64, 64, 64);
        const starColor = new THREE.Color(color);
        gradient.addColorStop(0.1, 'rgba(255, 255, 255, 1.0)');
        gradient.addColorStop(0.4, `rgba(${starColor.r * 255}, ${starColor.g * 255}, ${starColor.b * 255}, 0.8)`);
        gradient.addColorStop(1.0, `rgba(${starColor.r * 255}, ${starColor.g * 255}, ${starColor.b * 255}, 0.0)`);
        context.fillStyle = gradient;
        context.fillRect(0, 0, 128, 128);
        return new THREE.CanvasTexture(canvas);
    }

    function createStarfield() {
        const starVertices = [];
        for (let i = 0; i < 10000; i++) {
            const x = THREE.MathUtils.randFloatSpread(2000);
            const y = THREE.MathUtils.randFloatSpread(2000);
            const z = THREE.MathUtils.randFloatSpread(2000);
            starVertices.push(x, y, z);
        }
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
        const material = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });
        return new THREE.Points(geometry, material);
    }

    return <div ref={mountRef} />;
};

export default StarMap3D;

// /camila-portfolio/camila-portfolio/src/js/three-scene.js

import * as THREE from 'three';

let scene, camera, renderer, volleyball, guitar, flute, piano, ukulele;

function init() {
    // Create the scene
    scene = new THREE.Scene();
    
    // Set up camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Set up renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Load textures and models
    loadAssets();

    // Add event listeners
    window.addEventListener('resize', onWindowResize, false);
    document.addEventListener('mousemove', onMouseMove, false);

    // Start animation loop
    animate();
}

function loadAssets() {
    const textureLoader = new THREE.TextureLoader();
    const modelLoader = new THREE.GLTFLoader();

    // Load volleyball texture
    textureLoader.load('assets/textures/volleyball_texture.jpg', (texture) => {
        const volleyballGeometry = new THREE.SphereGeometry(1, 32, 32);
        const volleyballMaterial = new THREE.MeshBasicMaterial({ map: texture });
        volleyball = new THREE.Mesh(volleyballGeometry, volleyballMaterial);
        scene.add(volleyball);
    });

    // Load guitar model
    modelLoader.load('assets/models/guitar.glb', (guitarModel) => {
        guitar = guitarModel.scene;
        guitar.position.set(-2, 0, 0);
        scene.add(guitar);
    });

    // Load other instruments similarly...
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function onMouseMove(event) {
    const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

    // Update 3D elements based on mouse position
    volleyball.rotation.x += 0.01 * mouseY;
    volleyball.rotation.y += 0.01 * mouseX;
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

init();
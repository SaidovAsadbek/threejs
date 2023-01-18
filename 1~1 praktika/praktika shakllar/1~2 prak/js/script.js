// Scene Settings
const scene = new THREE.Scene();

// Camera Settings
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 3;

// loader
const loader = new THREE.TextureLoader().load('shoes.jpg');

// Renderer Settings
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setClearColor("#000");
renderer.setSize(window.innerWidth, window.innerHeight);
// bu tiniqlashtirib beradi..
renderer.setPixelRatio(devicePixelRatio);
document.body.appendChild(renderer.domElement);

// window resize events Settings
window.addEventListener("resize", () => {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    renderer.setSize(windowWidth, windowHeight);
    camera.aspect = windowWidth / windowHeight;
    camera.updateProjectionMatrix();
});


// Controls Settings
controls = new THREE.OrbitControls(camera, renderer.domElement);

// Geometry Shape Settings
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
    color: "#f7f7f7",
    // wireframe: true
});
const mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh);

// plane
const planeGeometry = new THREE.PlaneGeometry(10, 10, 10, 10);
const materialPlane = new THREE.MeshPhongMaterial({
    color: 0xff0000,
    side: THREE.DoubleSide,
    // siniq qilish
    flatShading: THREE.FlatShading,
    map: loader
});
const plane = new THREE.Mesh(planeGeometry, materialPlane);
scene.add(plane);

// light
const light = new THREE.DirectionalLight(0xFFFFFF, 1);
light.position.set(0, 0, 1);
scene.add(light);

// position and array[] 
const { array } = plane.geometry.attributes.position;
for (let i = 0; i < array.length; i += 3) {
    const x = array[i];
    const y = array[i + 1];
    const z = array[i + 2];
    array[i + 2] = z + Math.random();
}

// render Settings
const render = function () {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}

render();
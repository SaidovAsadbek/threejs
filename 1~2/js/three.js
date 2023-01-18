//scene
var scene = new THREE.Scene();
// camera
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight);
camera.position.z = 5;

// renderer
var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setClearColor("black");
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// resize
window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix();
});

// geometry
var geometry = new THREE.SphereGeometry(1, 10, 100);
var material = new THREE.MeshLambertMaterial({ color: 0xf7f7f7 });

var mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// light
var light = new THREE.PointLight(0xf7f7f7, 1, 1000);
light.position.set(10, 0, 25);
scene.add(light);

var render = function () {
    requestAnimationFrame(render);
    mesh.rotation.x += 0.04;
    // mesh.rotation.y += 0.03;
    renderer.render(scene, camera);
}

render();
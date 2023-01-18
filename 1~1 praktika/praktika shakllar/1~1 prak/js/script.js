// Scene
var scene = new THREE.Scene();

// Camera
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight);
camera.position.z = 2;

// renderer
var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setClearColor("#292929");
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

// window resize
window.addEventListener("resize", (e) => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();
});

// boxGeometry
var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshLambertMaterial({ color: 0xf7f7f7 });

var mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

// lights
var light = new THREE.PointLight(0xf7f7f7, 1, 1000);
light.position.set(10, 0, 25);
scene.add(light);


var animate = function () {

    mesh.rotation.set(45, 45, 0);

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

animate();
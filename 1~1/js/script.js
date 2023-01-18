// Three.js tutorial
var scene = new THREE.Scene();
// Camera
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;


// Renderer 
var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setClearColor("#e5e5e5");
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();
});

// Raycaster docs
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

// controls
const controls = new THREE.OrbitControls(camera, renderer.domElement);


// Geometry shakllar uchun kerak
// SphereGeometry
// var geometry = new THREE.SphereGeometry(1, 4, 4);
// BoxGeometry
var geometry = new THREE.BoxGeometry(1, 1, 1);

var material = new THREE.MeshLambertMaterial({ color: 0xF7f7f7 });
// bu menimcha geometry va materialni bitta qilib beradi
var mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);


// bu 2-kub
var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshLambertMaterial({ color: 0xF7f7f7 });
// mesh.position.y = 2;

// misol
meshX = -10;
for (var i = 0; i < 15; i++) {
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = (Math.random() - 0.5) * 10;
    mesh.position.y = (Math.random() - 0.5) * 10;
    mesh.position.z = (Math.random() - 0.5) * 10;
    scene.add(mesh);
    meshX += 1;
}

// bu tarzda yozsak ham buladi.
// mesh.position.x = -2;
// mesh.position.y = 2;
// mesh.position.z = -2;

// bu tepadagini qisqatmasi
// 1-x
// 2-y
// 3-z
// mesh.position.set(-2, 2, -2);
// bundan tashqari position emas rotate orqali qilsa ham buladi.

// mesh.rotation.set(45, 45, 0);


// scale 
// 1-x tepa va pass
// 2-y usti va tagi
// 3-z o'ng va chap
// mesh.scale.set(2, 2, 2);

// bu 1 holati
// var light = new THREE.PointLight(0xFFFFFF, 1, 500);
// light.position.set(10, 0, 25);
// scene.add(light);

// bular esa misol uchun
var light = new THREE.PointLight(0xFFFFFF, 1, 1000);
light.position.set(0, 0, 0);
scene.add(light);
// bular esa misol uchun
// bu misol uchun
var light = new THREE.PointLight(0xFFFFFF, 2, 1000);
light.position.set(0, 0, 25);
scene.add(light);

// render() yaratib ekran kichrayib katta buganda bg qora bulmasligi uchun; animatsiya tugri bulishini taminlaydi.
var render = function () {

    // render() ishi bu animatsiya bulyapti
    requestAnimationFrame(render);

    // mesh rotation
    // rotation  requestAnimationFrame bu orqali kubikni x , y uqi buylab aylantirayapti
    // mesh.rotation.x += 0.02;
    // mesh.scale.x -= 0.01;
    // mesh.rotation.y += 0.02;
    // mesh.rotation.z += 0.02;

    renderer.render(scene, camera);
}
// bu raycaster uchun misol function
function onMouseMove(e) {
    e.preventDefault();
    // cursor surilishi client qayerga surishini hisoblab keyin ishlaydi.
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (e.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    var intersects = raycaster.intersectObjects(scene.children, true);

    for (var i = 0; i < intersects.length; i++) {
        // intersects[i].object.material.color.set(0xff0000);
        this.tl = new TimelineMax({});
        this.tl.to(intersects[i].object.scale, 1, { x: 2, ease: Expo.easeOut });
        this.tl.to(intersects[i].object.scale, .5, { x: .5, ease: Expo.easeOut });
        this.tl.to(intersects[i].object.position, .5, { x: 2, ease: Expo.easeOut });
        this.tl.to(intersects[i].object.rotation, .5, { y: Math.PI * .5, ease: Expo.easeOut }, "=-1.5");
    }

}

render();

// tl bu TimelineMax vaqt
// this.tl = new TimelineMax().delay(.3);
// this.tl = new TimelineMax({ paused: true });
// this.tl.to(this.mesh.scale, 1, { x: 2, ease: Expo.easeOut });
// this.tl.to(this.mesh.scale, .5, { x: .5, ease: Expo.easeOut });
// this.tl.to(this.mesh.position, .5, { x: 2, ease: Expo.easeOut });
// this.tl.to(this.mesh.rotation, .5, { y: Math.PI * .5, ease: Expo.easeOut }, "=-1.5");
// this.tl.to(this.mesh.rotation, .5, { x: Math.PI * -.2, ease: Expo.easeOut });

// document.body.addEventListener("click", () => {
//     this.tl.play();
// });

// raycaster ga misol

window.addEventListener("mousemove", onMouseMove);

// console.log(this.tl);
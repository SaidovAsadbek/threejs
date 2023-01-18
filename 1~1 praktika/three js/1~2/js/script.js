// scene
var scene = new THREE.Scene();

// camera
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 3;

// renderer
var renderer = new THREE.WebGLRenderer();
renderer.setClearColor("black");
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// resize
window.addEventListener("resize", () => {
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

// controls
controls = new THREE.OrbitControls(camera, renderer.domElement);


// create the shape
var Geometry = new THREE.BoxGeometry(3, 3, 3);

var CubeMaterials = [
    new THREE.MeshBasicMaterial({
        color: 0xFFFFFF, // rang berish
        side: THREE.DoubleSide
    }),
    // new THREE.MeshBasicMaterial({
    //     map: new THREE.TextureLoader().load("nimadir.jpg"),
    //     side: THREE.DoubleSide
    // }), // right side
    new THREE.MeshLambertMaterial({
        map: new THREE.TextureLoader().load("Oybek.jpg"),
        side: THREE.DoubleSide // DoubleSide ni FrontSide , BackSide qilsak usha tomoni kurinadi. 
    }), // left side
    new THREE.MeshPhongMaterial({
        map: new THREE.TextureLoader().load("Kasalhona.jpg"),
        side: THREE.DoubleSide
    }), // top side
    new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load("madaniyat.jpg"),
        side: THREE.DoubleSide
    }), // bottom
    new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load("soliq.jpg"),
        side: THREE.DoubleSide
    }), // front
    new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load("madaniyat 3.jpg"),
        side: THREE.DoubleSide
    }) // back
];

var material = new THREE.MeshFaceMaterial(CubeMaterials);

// silinder
// var Geometry = new THREE.CylinderGeometry(10, 10, 10, 3);

// circle aylana
// var Geometry = new THREE.CircleGeometry(10, 30);

// cone uchburchaksimon
// var Geometry = new THREE.ConeGeometry(10, 10, 3);
// var Geometry = new THREE.DodecahedronGeometry(10, 1);

// EdgesGeometry
// const Geometry = new THREE.BoxGeometry(100, 100, 100);
// var edges = new THREE.EdgesGeometry(Geometry);
// var line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({
//     color: 0xffffff
// }));
// scene.add(line);

// aylana narsa
// var Geometry = new THREE.IcosahedronGeometry(5, 0);


// misol
// container

// const points = [];
// for (let i = 0; i < 10; i++) {
//     points.push(new THREE.Vector2(Math.sin(i * 0.2) * 10 + 5, (i - 5) * 2));
// }
// const Geometry = new THREE.LatheGeometry(points, 4, 4, 10);


// create a material or image texture
// var material = new THREE.MeshBasicMaterial({
//     color: 0xffff00,
//     // wireframe: false
//     wireframe: true
// });

var cube = new THREE.Mesh(Geometry, material);
scene.add(cube);


// lights

var ambientLight = new THREE.AmbientLight(0xFFFFFF, 1);

scene.add(ambientLight);

// pastki tomoni
var floorGeometry = new THREE.BoxGeometry(10, 1, 10);
var floorMaterial = new THREE.MeshLambertMaterial({
    map: new THREE.TextureLoader().load("pol.jpg"),
    side: THREE.DoubleSide
});
var floorCube = new THREE.Mesh(floorGeometry, floorMaterial);
floorCube.position.y = -5;
scene.add(floorCube);


// top tomoni
var floorTopGeometry = new THREE.BoxGeometry(10, 1, 10);
var floorTopMaterial = new THREE.MeshLambertMaterial({
    map: new THREE.TextureLoader().load("pol.jpg"),
    side: THREE.DoubleSide
});
var floorTopCube = new THREE.Mesh(floorTopGeometry, floorTopMaterial);
floorTopCube.position.y = 5;
scene.add(floorTopCube);



// front tomoni
var cellingGeometry = new THREE.BoxGeometry(1, 10, 10);
var cellingMaterial = new THREE.MeshLambertMaterial({
    map: new THREE.TextureLoader().load("wall.jpg"),
    side: THREE.DoubleSide
});
var cellingCube = new THREE.Mesh(cellingGeometry, cellingMaterial);
cellingCube.position.z = 5;
cellingCube.rotation.set(0, 1.58, 0);
scene.add(cellingCube);

// back tomoni
var backGeometry = new THREE.BoxGeometry(1, 10, 10);
var backMaterial = new THREE.MeshLambertMaterial({
    map: new THREE.TextureLoader().load("wallHack.png"),
    side: THREE.DoubleSide
});
var backCube = new THREE.Mesh(backGeometry, backMaterial);
backCube.position.z = -5;
backCube.rotation.set(0, 1.58, 0);
scene.add(backCube);


// left tomoni
var leftGeometry = new THREE.BoxGeometry(0.1, 10, 10);
var leftMaterial = new THREE.MeshLambertMaterial({
    map: new THREE.TextureLoader().load("wall.jpg"),
    side: THREE.DoubleSide
});
var leftCube = new THREE.Mesh(leftGeometry, leftMaterial);
leftCube.position.x = -5;
scene.add(leftCube);

// right tomoni
var rightGeometry = new THREE.BoxGeometry(0.1, 10, 10);
var rightMaterial = new THREE.MeshLambertMaterial({
    map: new THREE.TextureLoader().load("wall.jpg"),
    side: THREE.DoubleSide
});
var rightCube = new THREE.Mesh(rightGeometry, rightMaterial);
rightCube.position.x = 5;
scene.add(rightCube);

var light1 = new THREE.PointLight(0xFF0040, 4, 50);
scene.add(light1);
var light2 = new THREE.PointLight(0xFFFF00, 2, 50);
scene.add(light2);
var light3 = new THREE.PointLight(0x80FF80, 8, 50);
scene.add(light3);

///
// var directionalLight = new THREE.DirectionalLight(0xFFFFFF, 1);
// directionalLight.position.set(0, 1, 0);
// scene.add(directionalLight);


// var spotLight = new THREE.SpotLight(0xFF45F6, 25);
// spotLight.position.set(0, 3, 0);
// scene.add(spotLight);

// game logic
var update = function () {
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.005;

    var time = Date.now() * 0.0005;
    light1.position.x = Math.sin(time * 0.7) * 30;
    light1.position.y = Math.cos(time * 0.5) * 40;
    light1.position.z = Math.cos(time * 0.3) * 30;

    light2.position.x = Math.cos(time * 0.3) * 30;
    light2.position.y = Math.sin(time * 0.5) * 40;
    light2.position.z = Math.sin(time * 0.7) * 30;

    light3.position.x = Math.sin(time * 0.7) * 30;
    light3.position.y = Math.cos(time * 0.3) * 40;
    light3.position.z = Math.sin(time * 0.5) * 30;
};

// draw Scene
var render = function () {
    renderer.render(scene, camera);
};

// Run Game loop (update , render, repaet)
var GameLoop = function () {
    requestAnimationFrame(GameLoop);
    update();
    render();
};

GameLoop();
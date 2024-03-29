import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// 创建场景
const scene = new THREE.Scene();

// 创建摄像机
const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 3000);
camera.position.set(292, 223, 185); //相机在Three.js三维坐标系中的位置
camera.lookAt(0, 0, 0); //相机观察目标指向Three.js坐标系原点




// 创建一个立方体
const geometry = new THREE.BoxGeometry(50, 50, 50);
const material = new THREE.MeshLambertMaterial({ color: 0x00ffff });
const cube = new THREE.Mesh(geometry, material);
cube.position.set(50,50,50)
scene.add(cube);

// 创建渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 添加坐标抽辅助线
const axesHelper = new THREE.AxesHelper(200);
scene.add(axesHelper)

// 创建 OrbitControls 控制器
const controls = new OrbitControls(camera, renderer.domElement);
controls.update(); // 必须在第一次使用控制器时调用一次以确保其正确工作
controls.addEventListener("change", () => {
    renderer.render(scene, camera);
})

// 设置光源
// 创建点光源
const pointLight = new THREE.PointLight(0xffff00, 10); // 白色，强度为 2.0
pointLight.position.set(0, 50, 0); // 设置光源位置，注意位置的高度
pointLight.distance = 100; // 设置光源的照射范围为 500
scene.add(pointLight);
// 创建光源辅助器
const pointLightHelper = new THREE.PointLightHelper( pointLight, 5 );
scene.add( pointLightHelper );

// 平行光
const directionalLight = new THREE.DirectionalLight(0xff00f0, 10);
directionalLight.position.set(100, 0, 0);
scene.add(directionalLight);
// 创建光源辅助器
const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 5); // 第二个参数表示辅助器的大小
scene.add(directionalLightHelper);
// 创建环境光
const ambientLight = new THREE.AmbientLight(0x00ffff); // 灰色环境光
scene.add(ambientLight);


// renderer.render(scene, camera);
// 渲染循环
function animate() {
    requestAnimationFrame(animate);

    // cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}



animate();

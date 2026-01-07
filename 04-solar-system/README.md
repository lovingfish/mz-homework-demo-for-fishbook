# 太阳系动态星图设计

## 任务目标

开发一个交互式的太阳系动态星图可视化应用，展示行星运动轨迹。

## 交付形式

- 交互式太阳系可视化 Web 应用
- HTML5 Canvas / Three.js 动画
- 支持用户交互（缩放、旋转、点击行星等）

## 技术栈

### 方案一: Canvas 2D
- **渲染**: HTML5 Canvas API
- **动画**: requestAnimationFrame
- **难度**: 中等

### 方案二: Three.js 3D
- **渲染**: Three.js
- **相机**: OrbitControls
- **难度**: 较高，效果更好

### 推荐: Three.js（更炫酷）

## 核心功能

### 1. 天体展示
```javascript
// 行星数据结构
{
  name: "地球",
  radius: 1,
  distance: 10,      // 距离太阳的距离
  color: 0x2233ff,
  speed: 0.01,       // 公转速度
  rotationSpeed: 0.02 // 自转速度
}
```

### 2. 动画效果
- 行星公转（围绕太阳）
- 行星自转
- 轨道线显示
- 星空背景

### 3. 交互功能
- 鼠标拖拽旋转视角
- 滚轮缩放
- 点击行星显示信息
- 时间速度控制（暂停/加速/减速）

## 整合接口规范

### 独立运行

```bash
# 本地开发
npm install
npm run dev
# 访问: http://localhost:3000
```

### 接入博客

博客将在 `./projects/04-solar-system/index.html` 路径下展示。

**方式一: 全屏子页面**

```html
<!-- 博客页面链接 -->
<a href="./projects/04-solar-system/index.html" target="_blank">
  查看太阳系星图 →
</a>
```

**方式二: 内嵌展示**

```html
<iframe
  src="./projects/04-solar-system/index.html"
  width="100%"
  height="600px"
  frameborder="0">
</iframe>
```

### 配置接口

```javascript
// js/solar-config.js
const SOLAR_CONFIG = {
  animationSpeed: 1,      // 动画速度倍率
  showOrbits: true,       // 显示轨道
  showLabels: true,       // 显示标签
  cameraDistance: 100,    // 相机距离
  // 可根据需要调整
};
```

## 文件结构

```
04-solar-system/
├── index.html          # 主页面
├── css/
│   └── solar.css       # 样式文件
├── js/
│   ├── main.js         # 主入口
│   ├── solar-system.js # 太阳系逻辑
│   ├── planet.js       # 行星类
│   └── config.js       # 配置文件
├── assets/
│   ├── textures/       # 纹理贴图（可选）
│   └── icons/          # 图标
├── screenshots/        # 演示截图
└── README.md           # 本文件
```

## 开发步骤 (Three.js)

### 1. 安装依赖

```bash
npm install three
```

### 2. 基础场景

```javascript
import * as THREE from 'three';

// 场景
const scene = new THREE.Scene();

// 相机
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 50;

// 渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.element);

// 动画循环
function animate() {
  requestAnimationFrame(animate);
  // 更新行星位置
  updatePlanets();
  renderer.render(scene, camera);
}
animate();
```

### 3. 创建太阳

```javascript
const sunGeometry = new THREE.SphereGeometry(5, 32, 32);
const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sun);

// 太阳光照
const sunLight = new THREE.PointLight(0xffffff, 1, 100);
sunLight.position.set(0, 0, 0);
scene.add(sunLight);
```

### 4. 创建行星

```javascript
const planets = [
  { name: '水星', radius: 0.8, distance: 10, speed: 0.04, color: 0xaaaaaa },
  { name: '金星', radius: 1.2, distance: 15, speed: 0.03, color: 0xffaa00 },
  { name: '地球', radius: 1.3, distance: 20, speed: 0.02, color: 0x2233ff },
  { name: '火星', radius: 1.0, distance: 25, speed: 0.018, color: 0xff3300 },
  // ... 更多行星
];

function createPlanet(data) {
  const geometry = new THREE.SphereGeometry(data.radius, 32, 32);
  const material = new THREE.MeshStandardMaterial({ color: data.color });
  const planet = new THREE.Mesh(geometry, material);

  // 轨道线
  const orbitGeometry = new THREE.RingGeometry(data.distance - 0.1, data.distance + 0.1, 64);
  const orbitMaterial = new THREE.MeshBasicMaterial({ color: 0x444444 });
  const orbit = new THREE.Mesh(orbitGeometry, orbitMaterial);
  orbit.rotation.x = Math.PI / 2;
  scene.add(orbit);

  return { mesh: planet, data, angle: Math.random() * Math.PI * 2 };
}

planets.forEach(p => {
  const planetObj = createPlanet(p);
  scene.add(planetObj.mesh);
});
```

### 5. 动画更新

```javascript
function updatePlanets() {
  planets.forEach(planet => {
    planet.angle += planet.data.speed;
    planet.mesh.position.x = Math.cos(planet.angle) * planet.data.distance;
    planet.mesh.position.z = Math.sin(planet.angle) * planet.data.distance;
    planet.mesh.rotation.y += 0.01;
  });
}
```

### 6. 添加控制

```javascript
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// 在 animate 中更新
controls.update();
```

## UI 布局

```html
<div id="solar-system">
  <div id="info-panel">
    <h2>太阳系</h2>
    <div id="planet-info">点击行星查看信息</div>
  </div>
  <div id="controls">
    <button onclick="toggleOrbits()">显示轨道</button>
    <button onclick="changeSpeed(0.5)">减速</button>
    <button onclick="changeSpeed(2)">加速</button>
    <button onclick="togglePause()">暂停</button>
  </div>
</div>
```

## 测试清单

- [ ] 所有行星显示正确
- [ ] 公转动画流畅
- [ ] 相机控制正常
- [ ] 点击行星显示信息
- [ ] 速度控制有效
- [ ] 响应式适配
- [ ] 在iframe中正常显示

## 状态

- 状态: 未完成
- 优先级: 中
- 依赖: 无（可独立开发）

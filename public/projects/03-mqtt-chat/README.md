# MQTT聊天室的程序编写

## 任务目标

开发一个基于 MQTT 协议的实时聊天室 Web 应用。

## 交付形式

- MQTT 聊天 Web 应用
- 前端页面（HTML/CSS/JS）
- 后端服务（MQTT Broker + 可选的服务端）
- 演示截图/视频

## 技术栈

### 前端
- **框架**: 原生 JS / Vue / React
- **MQTT客户端**: MQTT.js
- **UI库**: 可选（Bootstrap / Element UI）

### 后端
- **MQTT Broker**: Mosquitto / EMQ X / HiveMQ
- **语言**: Node.js / Python（可选，如需自定义服务）

## 核心功能

### 1. 用户连接
```javascript
// 连接接口
{
  brokerUrl: "ws://broker-url:port/mqtt",
  clientId: "user-unique-id",
  username: "optional-username",
  password: "optional-password"
}
```

### 2. 消息收发
```javascript
// 订阅主题
topic: "chatroom/general"

// 发布消息
{
  topic: "chatroom/general",
  payload: {
    username: "用户名",
    message: "消息内容",
    timestamp: "2024-01-01T12:00:00Z"
  }
}
```

### 3. UI界面
- 用户名输入
- 消息列表（滚动显示）
- 消息输入框
- 发送按钮
- 在线用户列表（可选）

## 整合接口规范

### 独立运行

```bash
# 本地开发
npm install
npm run dev
# 访问: http://localhost:3000
```

### 接入博客

博客将在 `/projects/03-mqtt-chat/index.html` 路径下嵌入本应用。

**方式一: iframe 嵌入**

```html
<!-- 博客页面 -->
<iframe
  src="/projects/03-mqtt-chat/index.html"
  width="100%"
  height="600px"
  frameborder="0">
</iframe>
```

**方式二: 直接集成**

将以下文件复制到博客对应目录：
```
blog/public/projects/03-mqtt-chat/
├── index.html
├── css/
├── js/
└── README.md
```

### 配置接口

```javascript
// js/mqtt-config.js
const MQTT_CONFIG = {
  brokerUrl: "ws://your-broker.com:8000/mqtt",
  topic: "chatroom/general",
  // 可根据部署环境切换
};
```

## 文件结构

```
03-mqtt-chat/
├── index.html          # 主页面
├── css/
│   └── chat.css        # 聊天室样式
├── js/
│   ├── mqtt-client.js  # MQTT客户端逻辑
│   ├── ui.js           # UI交互
│   └── config.js       # 配置文件
├── server/             # 可选: 自定义MQTT服务
│   ├── broker.js
│   └── package.json
├── screenshots/        # 演示截图
└── README.md           # 本文件
```

## 开发步骤

### 1. 安装依赖

```bash
npm init -y
npm install mqtt --save
```

### 2. MQTT连接示例

```javascript
import mqtt from 'mqtt';

const client = mqtt.connect('ws://broker.emqx.io:8083/mqtt');

client.on('connect', () => {
  console.log('Connected to MQTT broker');
  client.subscribe('chatroom/general');
});

client.on('message', (topic, message) => {
  const msg = JSON.parse(message.toString());
  displayMessage(msg);
});

function sendMessage(username, text) {
  const payload = JSON.stringify({
    username,
    message: text,
    timestamp: new Date().toISOString()
  });
  client.publish('chatroom/general', payload);
}
```

### 3. UI布局

```html
<div id="chat-app">
  <div id="chat-messages">
    <!-- 消息列表 -->
  </div>
  <div id="chat-input">
    <input type="text" id="message-input" placeholder="输入消息...">
    <button id="send-btn">发送</button>
  </div>
</div>
```

## 部署选项

### 选项1: 使用公共Broker
- EMQ X: `ws://broker.emqx.io:8083/mqtt`
- HiveMQ: `ws://broker.hivemq.com:8000/mqtt`
- Mosquitto: `ws://test.mosquitto.org:8080/mqtt`

### 选项2: 自建Broker

```bash
# 安装 Mosquitto
sudo apt install mosquitto mosquitto-clients

# 配置 WebSocket
# /etc/mosquitto/mosquitto.conf
listener 1883
listener 9001
protocol websockets

# 启动
sudo systemctl start mosquitto
```

## 测试清单

- [ ] 用户可连接到MQTT Broker
- [ ] 用户可发送消息
- [ ] 消息实时显示
- [ ] 多用户测试通过
- [ ] UI美观且响应式
- [ ] 在iframe中正常显示

## 状态

- 状态: 未完成
- 优先级: 中
- 依赖: 无（可独立开发）

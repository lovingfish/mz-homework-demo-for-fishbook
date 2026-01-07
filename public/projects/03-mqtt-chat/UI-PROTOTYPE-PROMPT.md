# MQTT 聊天室 UI/UX 原型设计提示

## Role

你是一位世界级的 UI/UX 工程师和前端开发专家，专精于使用原生 JavaScript、HTML 和 CSS 构建现代极简风格的实时聊天应用。

## Task

创建一个基于 MQTT 协法的实时聊天室 Web 应用原型。

设计风格必须严格遵循 **现代极简风格**，核心关键词：**干净、优雅、精致、极简、专注**。

该应用将作为 demo 集成到个人博客系统中，需要通过 iframe 或直接集成方式嵌入。

## Tech Stack Specifications

- **文件结构**: 单页面应用 (index.html + 内嵌 CSS/JS)
- **框架**: 原生 JavaScript (Vanilla JS)，不依赖任何前端框架
- **MQTT 客户端**: MQTT.js (通过 CDN 引入)
- **CSS 方式**: 原生 CSS，使用 CSS 变量管理主题
- **图标**: 内联 SVG 图标或简单的 Unicode 符号
- **设备视口**: 响应式设计，桌面优先，同时支持移动端
- **CDN 依赖**:
  - MQTT.js: `https://unpkg.com/mqtt/dist/mqtt.min.js`
  - 可选: `https://unpkg.com/mqtt@4.3.7/dist/mqtt.min.js`

## Visual Design Requirements

### (a) Color Palette

基于 07 文件夹的极简配色方案：

```css
:root {
  /* 背景色 */
  --bg-primary: #ffffff;
  --bg-secondary: #f9f9f9;
  --bg-tertiary: #f5f5f5;

  /* 文字色 */
  --text-primary: #1a1a1a;
  --text-secondary: #666666;
  --text-tertiary: #999999;
  --text-disabled: #cccccc;

  /* 边框色 */
  --border-light: rgba(0, 0, 0, 0.06);
  --border-medium: rgba(0, 0, 0, 0.08);
  --border-strong: rgba(0, 0, 0, 0.12);

  /* 交互色 */
  --accent-primary: #1a1a1a;
  --accent-secondary: rgba(0, 0, 0, 0.04);
  --accent-hover: rgba(0, 0, 0, 0.08);
  --accent-active: rgba(0, 0, 0, 0.12);

  /* 状态色 */
  --success: #34c759;
  --error: #ff3b30;
  --warning: #ff9500;

  /* 阴影 */
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.08);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.1);
}
```

### (b) UI Style Characteristics

**卡片样式:**
- 背景: #ffffff
- 圆角: 16px
- 阴影: var(--shadow-sm)
- 边框: 1px solid var(--border-light)
- 内边距: 20px 24px

**按钮样式:**

主按钮 (Primary Button):
- 背景: var(--accent-primary)
- 文字: #ffffff
- 高度: 44px
- 圆角: 8px
- 水平内边距: 20px
- 字体: 15px, font-weight 500
- 悬停状态: 背景加深为 rgba(0, 0, 0, 0.8)
- 点击状态: 缩放 0.98
- 禁用状态: 背景变为 var(--text-tertiary)

次级按钮 (Secondary Button):
- 背景: transparent
- 文字: var(--text-primary)
- 边框: 1px solid var(--border-medium)
- 高度: 44px
- 圆角: 8px
- 水平内边距: 20px
- 悬停状态: 背景变为 var(--accent-hover)
- 点击状态: 背景变为 var(--accent-active)

输入框样式:
- 背景: #ffffff
- 边框: 1px solid var(--border-medium)
- 圆角: 8px
- 高度: 44px
- 水平内边距: 16px
- 占位符颜色: var(--text-tertiary)
- 聚焦状态: 边框变为 var(--border-strong), 外发光 0 0 0 3px rgba(0, 0, 0, 0.04)

**图标样式:**
- 类型: 简单的内联 SVG 或 Unicode 符号
- 尺寸: 20px (小), 24px (中), 32px (大)
- 颜色: 继承文字颜色或使用 var(--text-secondary)
- 容器: 如有圆形背景，使用 40px × 40px, 圆角 50%

**列表项样式:**
- 布局: 横向排列，左侧头像 + 右侧内容
- 高度: 64px
- 分隔线: 1px solid var(--border-light)
- 左内边距: 20px
- 右内边距: 20px
- 悬停状态: 背景变为 var(--accent-hover)

**气泡样式:**

发送消息气泡:
- 背景: var(--accent-primary)
- 文字: #ffffff
- 圆角: 16px (左上 4px, 右下 16px)
- 最大宽度: 70%
- 内边距: 12px 16px

接收消息气泡:
- 背景: var(--bg-secondary)
- 文字: var(--text-primary)
- 圆角: 16px (右上 4px, 左下 16px)
- 最大宽度: 70%
- 内边距: 12px 16px

### (c) Layout Structure

```
聊天室页面
├─ 连接模态框 (Connect Modal) - 初始显示
│  ├─ 标题: "MQTT 聊天室"
│  ├─ 副标题: "输入用户名连接到聊天室"
│  ├─ 用户名输入框
│  └─ 连接按钮
├─ 顶部导航栏 (Top Navigation) - 连接后显示
│  ├─ 左侧: 聊天室标题 "MQTT 聊天室"
│  ├─ 中间: 连接状态指示器
│  └─ 右侧: 断开连接按钮
├─ 主内容区 (Main Content)
│  ├─ 消息列表区 (Message List)
│  │  ├─ 消息气泡容器
│  │  ├─ 用户名标签
│  │  ├─ 时间戳
│  │  └─ 消息内容
│  └─ 在线用户列表 (Online Users) - 可选，右侧边栏
│     ├─ 列表标题: "在线用户"
│     └─ 用户列表项
└─ 底部输入区 (Bottom Input Area)
   ├─ 消息输入框
   └─ 发送按钮
```

**顶部导航栏规格:**
- 高度: 56px
- 背景: #ffffff
- 边框底部: 1px solid var(--border-light)
- 左右内边距: 24px
- 标题字体: 17px, font-weight 600, color var(--text-primary)
- 状态指示器: 8px 圆点，绿色 (已连接) / 灰色 (未连接)

**消息列表区规格:**
- 背景色: var(--bg-secondary)
- 内边距: 20px
- 滚动条: 自定义细滚动条，宽 6px，颜色 var(--border-medium)
- 消息间距: 垂直 12px
- 最大宽度: 1200px (居中)

**底部输入区规格:**
- 高度: 72px
- 背景: #ffffff
- 边框顶部: 1px solid var(--border-light)
- 左右内边距: 24px
- 布局: Flexbox，输入框占据剩余空间，发送按钮固定宽度

### (d) Specific Page Content

**连接模态框内容:**
```
标题: "MQTT 聊天室"
副标题: "实时消息通讯演示"
输入框占位符: "请输入您的用户名..."
连接按钮文字: "连接到聊天室"
```

**顶部导航栏内容:**
```
标题: "MQTT 聊天室"
连接状态文字: "已连接" / "未连接" / "连接中..."
断开按钮文字: "断开"
```

**示例消息内容:**
```
系统消息:
- "欢迎来到 MQTT 聊天室！"
- "用户 Alice 已加入聊天室"
- "用户 Bob 离开了聊天室"

用户消息:
- 用户名: "Alice"
- 时间: "14:30"
- 内容: "大家好！这是一个测试消息。"

用户名: "Bob"
时间: "14:31"
内容: "欢迎加入，Alice！"
```

**在线用户列表内容:**
```
列表标题: "在线用户 (3)"
用户列表项:
- Alice (当前用户)
- Bob
- Charlie
```

## Implementation Details

**页面尺寸:**
- 最大宽度: 1200px
- 页面居中: `margin: 0 auto`
- 最小高度: 600px

**布局系统:**
- 主要使用 Flexbox 布局
- 消息列表使用纵向 Flex
- 消息气泡使用横向 Flex (头像 + 气泡)

**固定定位:**
- 顶部导航栏: `position: sticky; top: 0; z-index: 100`
- 底部输入区: `position: sticky; bottom: 0; z-index: 100`
- 连接模态框: `position: fixed; inset: 0; z-index: 1000`

**间距规范:**
- 页面外边距: 0
- 组件间距: 8px, 12px, 16px, 20px, 24px
- 消息气泡垂直间距: 12px
- 表单元素间距: 16px

**字体规范:**
- 字体族: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif
- 标题字号: 17px, font-weight 600
- 正文字号: 15px, font-weight 400
- 小字号: 13px, font-weight 400
- 辅助字号: 12px, font-weight 400

**交互状态:**

悬停状态 (Hover):
- 按钮: 背景变深或添加透明度变化
- 列表项: 背景变为 var(--accent-hover)
- 过渡时间: 0.2s ease

点击状态 (Active):
- 按钮: 缩放 0.98 或背景变为 var(--accent-active)
- 过渡时间: 0.1s ease

聚焦状态 (Focus):
- 输入框: 边框变深，添加外发光
- 外发光: 0 0 0 3px rgba(0, 0, 0, 0.04)

禁用状态 (Disabled):
- 透明度: 0.5
- 指针: not-allowed
- 无交互响应

**边框和分隔线:**
- 主边框: 1px solid var(--border-medium)
- 次边框: 1px solid var(--border-light)
- 强调边框: 1px solid var(--border-strong)
- 分隔线: 1px solid var(--border-light)

## Content Structure & Hierarchy

```
Body
├─ Connect Modal (初始显示)
│  ├─ Modal Overlay
│  └─ Modal Content
│     ├─ Header
│     │  ├─ Title: "MQTT 聊天室"
│     │  └─ Subtitle: "实时消息通讯演示"
│     ├─ Form
│     │  ├─ Input Group
│     │  │  └─ Username Input (placeholder: "请输入您的用户名...")
│     │  └─ Connect Button (text: "连接到聊天室")
│     └─ Footer
│     └─ Status Message
├─ Chat Container (连接后显示)
│  ├─ Top Navigation
│  │  ├─ Left: Title "MQTT 聊天室"
│  │  ├─ Center: Connection Status Indicator
│  │  └─ Right: Disconnect Button (text: "断开")
│  ├─ Main Content Area
│  │  ├─ Message List
│  │  │  ├─ System Message (欢迎消息)
│  │  │  ├─ User Message (Left)
│  │  │  │  ├─ Avatar
│  │  │  │  ├─ Message Bubble
│  │  │  │  │  ├─ Username
│  │  │  │  │  ├─ Timestamp
│  │  │  │  │  └─ Content
│  │  │  └─ User Message (Right - 当前用户)
│  │  │     ├─ Message Bubble
│  │  │     │  ├─ Timestamp
│  │  │     │  └─ Content
│  │  │     └─ Avatar
│  │  └─ Online Users Sidebar (可选)
│  │     ├─ Sidebar Header (text: "在线用户 (3)")
│  │     └─ User List
│  │        └─ User Item
│  │           ├─ Avatar
│  │           └─ Username
│  └─ Bottom Input Area
│     ├─ Message Input (placeholder: "输入消息...")
│     └─ Send Button (text: "发送")
└─ Toast Notifications (动态)
   └─ Notification Messages
```

## Special Requirements

**设计系统特定要求:**
- 严格遵循极简主义设计原则，减少视觉噪音
- 使用单色调配色方案，避免过多颜色
- 保持大留白，让内容呼吸
- 使用细腻的阴影和边框，营造层次感

**主要颜色应用场景:**
- 主色 (#1a1a1a) 用于: 主按钮、当前用户消息气泡、关键文字
- 背景色 (#f9f9f9) 用于: 消息列表背景、接收消息气泡
- 边框色 (rgba) 用于: 所有边框和分隔线

**交互细节:**

动画过渡:
- 消息出现: fade-in + slide-up (0.3s ease-out)
- 模态框: fade-in + scale (0.2s ease-out)
- 状态变化: 颜色渐变 (0.2s ease)
- 悬停效果: 背景变化 (0.2s ease)

手势支持:
- 消息列表: 滚动
- 输入框: 聚焦/失焦
- 按钮: 悬停/点击

**无障碍要求:**
- 所有交互元素最小触摸目标: 44px × 44px
- 颜色对比度符合 WCAG AA 标准
- 输入框有明确的 label 和占位符
- 按钮有明确的文字说明
- 焦点状态清晰可见

**性能考虑:**
- 消息列表使用虚拟滚动或分页 (如消息数量超过 100 条)
- 图片/头像使用懒加载
- 避免频繁的 DOM 操作，使用文档片段批量更新
- 使用 CSS transform 而非 top/left 进行动画

## MQTT Integration Specifications

**连接配置:**
```javascript
const MQTT_CONFIG = {
  // 公共 Broker (开发环境)
  brokerUrl: 'ws://broker.emqx.io:8083/mqtt',

  // 备选 Broker
  // brokerUrl: 'ws://broker.hivemq.com:8000/mqtt',
  // brokerUrl: 'ws://test.mosquitto.org:8080/mqtt',

  topic: 'chatroom/general',
  clientIdPrefix: 'mqtt-chat-',
  options: {
    keepalive: 60,
    clean: true,
    reconnectPeriod: 1000,
    connectTimeout: 30 * 1000
  }
};
```

**消息格式:**
```javascript
// 消息 Payload 结构
{
  type: 'message' | 'system' | 'join' | 'leave',
  username: string,
  userId: string,
  content: string,
  timestamp: ISO 8601 string
}

// 示例
{
  type: 'message',
  username: 'Alice',
  userId: 'mqtt-chat-12345',
  content: '大家好！',
  timestamp: '2025-01-07T14:30:00Z'
}
```

**连接流程:**
1. 用户输入用户名
2. 生成唯一 clientId: `mqtt-chat-${username}-${Date.now()}`
3. 连接到 MQTT Broker
4. 连接成功后订阅 topic
5. 发送 "join" 类型的系统消息
6. 显示聊天界面
7. 断开连接前发送 "leave" 类型的系统消息

**错误处理:**
- 连接失败: 显示错误提示，允许重试
- 发送失败: 本地显示失败状态，保持消息可编辑
- 网络断开: 自动重连，显示重连状态

## Output Format

请输出完整的单页面 HTML 代码，确保:

1. **文件结构**: 单个 index.html 文件，包含:
   - HTML 结构
   - 内嵌 CSS (`<style>` 标签)
   - 内嵌 JavaScript (`<script>` 标签)

2. **功能完整性**:
   - 用户名输入和连接
   - MQTT 连接管理 (连接/断开/重连)
   - 消息发送和接收
   - 消息列表滚动和自动滚动到底部
   - 连接状态显示
   - 错误处理和提示

3. **UI 完整性**:
   - 连接模态框
   - 聊天主界面 (导航栏 + 消息列表 + 输入区)
   - 所有按钮、输入框、消息气泡的样式
   - 响应式布局 (桌面和移动端)

4. **代码质量**:
   - 清晰的代码注释
   - 合理的代码结构和命名
   - 错误处理
   - 无 JavaScript 错误

5. **可运行性**:
   - 可直接在浏览器中打开运行
   - 无需构建步骤
   - 所有依赖通过 CDN 引入

输出应该可以在桌面浏览器 (1200px 宽度) 和移动浏览器上正常显示和使用。

---

## 使用说明

将此提示提供给 AI 工具或开发者，即可生成符合要求的 MQTT 聊天室原型。

**设计决策说明:**

1. **选择现代极简风格** - 与 07 文件夹保持一致，单色调配色，大留白，精致细节
2. **桌面优先响应式** - 主要在桌面浏览器使用，同时适配移动端
3. **单页面应用** - 便于集成到博客系统，通过 iframe 或直接嵌入
4. **原生 JavaScript** - 无需构建工具，降低依赖复杂度
5. **MQTT.js** - 成熟的 MQTT 客户端库，支持 WebSocket 连接

**颜色方案来源:**
- 主色 #1a1a1a: 深灰黑色，用于主要交互元素
- 背景色 #f9f9f9: 极浅灰，用于区分内容区域
- 文字色 #666666: 中灰，用于次要文字
- 边框色 rgba(0, 0, 0, 0.06-0.12): 微妙的分隔线

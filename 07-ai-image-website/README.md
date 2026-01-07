# AI应用:编写带图片的网站

## 任务概述

使用 AI 工具生成一个 AI 梗图展示网站，采用图片轮播的形式展示 AI 生成的趣味图片。

## 状态

- 状态: ✅ **已完成**
- 完成日期: 2025年1月

## 项目简介

这是一个简约风格的 AI 梗图展示网站，主要功能包括：
- 图片轮播展示（4张 AI 生成的趣味图片）
- 支持鼠标点击切换
- 支持键盘方向键切换
- 支持触摸滑动（移动端）
- 支持鼠标拖动（桌面端）
- 底部指示器和图片标题显示

## 文件结构

```
07-ai-image-website/
├── index.html              # 主页面
├── css/
│   └── style.css           # 样式文件（从原 HTML 提取）
├── js/
│   └── main.js             # 脚本文件（从原 HTML 提取）
├── ai-meme-gallery.html    # 原始单文件版本（保留备份）
└── README.md               # 本文件
```

## 技术栈

- **前端**: 纯 HTML / CSS / JavaScript（无框架）
- **设计风格**: 简约、现代
- **响应式**: 支持桌面、平板、手机
- **交互**: 支持点击、键盘、触摸、拖动

## 运行方式

### 本地运行

```bash
# 方式1: 直接双击打开
index.html

# 方式2: 使用本地服务器（推荐）
python -m http.server 8000
# 然后访问 http://localhost:8000
```

### 在线访问

直接将项目文件夹部署到任何静态网站托管服务即可。

## 展示的图片

| 序号 | 标题 | 图片链接 |
|------|------|----------|
| 1 | Gemini | https://media.makomako.dpdns.org/images/2025/12/gemini |
| 2 | Claude | https://media.makomako.dpdns.org/images/2025/11/claude |
| 3 | Codex | https://media.makomako.dpdns.org/images/2025/11/lapwing-codex |
| 4 | DeepSeek | https://media.makomako.dpdns.org/images/2025/11/DeepSeek |

## 整合接口规范

### 接入博客

将此网站整合到博客的 `./projects/ai-images-site/` 路径下。

#### 方式一: iframe 嵌入（推荐）

```html
<!-- 博客页面 -->
<div class="project-showcase">
  <h1>AI 梗图展示</h1>
  <iframe
    src="./projects/ai-images-site/index.html"
    width="100%"
    height="800px"
    frameborder="0">
  </iframe>
</div>
```

#### 方式二: 直接集成

将整个文件夹复制到博客目录:
```bash
cp -r 07-ai-image-website/* blog/public/projects/ai-images-site/
```

### 路径配置

所有资源已使用相对路径，可直接复制使用：

```html
<!-- CSS -->
<link rel="stylesheet" href="css/style.css">

<!-- JavaScript -->
<script src="js/main.js"></script>

<!-- 图片（使用外部链接，无需修改） -->
<img src="https://media.makomako.dpdns.org/..." alt="...">
```

## 功能特性

### 交互方式
- **点击按钮**: 左右箭头按钮切换图片
- **键盘控制**: ← → 方向键切换
- **触摸滑动**: 移动端左右滑动切换
- **鼠标拖动**: 桌面端拖动切换

### 响应式适配
- **桌面** (>768px): 完整布局，16:9 比例
- **平板** (≤768px): 4:3 比例，调整按钮大小
- **手机** (≤480px): 1:1 比例，垂直布局

### UI 细节
- 圆角卡片设计
- 平滑过渡动画
- 悬停状态反馈
- 底部指示器高亮
- 图片标题和计数器

## 代码风格

保持了原有的代码风格：
- 简洁的命名
- 清晰的注释
- 统一的缩进
- 模块化的函数

## 浏览器兼容性

- ✅ Chrome / Edge (最新版)
- ✅ Firefox (最新版)
- ✅ Safari (最新版)
- ✅ 移动端浏览器

## 验证清单

- [x] 在浏览器中打开正常
- [x] 所有图片加载正常
- [x] 响应式布局正常
- [x] 所有交互方式可用
- [x] 可放入 iframe
- [x] 代码结构清晰

## 原始文件

保留了原始的单文件版本 `ai-meme-gallery.html`，可单独运行或作为备份参考。

## 备注

- 图片使用外部图床，无需本地存储
- 代码已分离为 HTML/CSS/JS，便于维护
- 保持了原有的简约设计风格
- 可直接部署或接入博客

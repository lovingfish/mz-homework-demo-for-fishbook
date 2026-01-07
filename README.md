# 个人博客 - 期末作业展示

基于 Vite + Vue 3 构建的个人博客网站，用于展示期末作业项目。

## 技术栈

- **前端框架**: Vue 3
- **构建工具**: Vite
- **路由**: Vue Router 4
- **样式**: CSS3

## 快速开始

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
npm run dev
```

访问终端输出的 `Local` 地址（默认 `http://127.0.0.1:8000`；若 8000 被占用会自动换端口）。

### 构建生产版本

```bash
npm run build
```

构建产物在 `dist` 目录。

### 预览构建结果

```bash
npm run preview
```

## 云服务器部署

### 1. 阿里云 ECS 部署

#### 准备工作

1. 购买阿里云 ECS 服务器
2. 安装 Nginx：
```bash
# CentOS/RHEL
sudo yum install nginx -y

# Ubuntu/Debian
sudo apt-get install nginx -y
```

#### 部署步骤

**方式一：直接上传构建产物**

```bash
# 1. 在本地构建
npm run build

# 2. 上传 dist 目录到服务器
scp -r dist/* user@your-server-ip:/var/www/html/

# 3. 配置 Nginx
sudo nano /etc/nginx/nginx.conf
```

Nginx 配置示例：
```nginx
server {
    listen 80;
    server_name your-domain.com;

    root /var/www/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # 处理静态文件
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

```bash
# 4. 重启 Nginx
sudo systemctl restart nginx
sudo systemctl enable nginx
```

**方式二：使用 Git 部署**

```bash
# 1. 在服务器上克隆代码
cd /var/www
git clone your-repo-url html

# 2. 安装依赖并构建
cd html
npm install
npm run build

# 3. 配置 Nginx 指向 dist 目录
```

### 2. 使用云OSS静态托管

#### 阿里云 OSS

1. 开通阿里云 OSS 服务
2. 创建 Bucket，设置为公共读
3. 上传 `dist` 目录内容
4. 配置静态网站托管

```bash
# 使用 ossutil 上传
ossutil cp dist/ oss://your-bucket/ -rf -u
```

### 3. 使用 CDN 加速

配置 CDN 加速 OSS 或 ECS 源站：

1. 开通阿里云 CDN
2. 添加加速域名
3. 配置源站信息（OSS 或 ECS IP）
4. 配置缓存规则

### 4. 域名配置

1. 购买域名
2. 解析域名到服务器 IP 或 CNAME 到 CDN 域名
3. （可选）配置 SSL 证书

```bash
# 使用 Let's Encrypt 免费证书
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

## 项目结构

```
.
├── package.json              # npm配置
├── vite.config.js           # Vite配置
├── index.html               # HTML入口
├── src/
│   ├── main.js             # 主入口
│   ├── App.vue             # 根组件
│   ├── assets/             # 静态资源
│   │   └── css/
│   │       └── main.css    # 全局样式
│   ├── components/         # 组件
│   │   ├── Header.vue
│   │   ├── Footer.vue
│   │   └── ProjectCard.vue
│   └── views/              # 页面
│       ├── Home.vue        # 首页
│       ├── Projects.vue    # 项目列表
│       ├── ProjectDetail.vue  # 项目详情
│       ├── Posts.vue       # 文章列表
│       ├── PostDetail.vue  # 文章详情
│       └── About.vue       # 关于
├── public/                 # 公共静态文件
│   └── projects/           # 已完成项目
│       ├── mqtt-chat/
│       ├── solar-system/
│       └── ai-images-site/
└── dist/                   # 构建输出
```

## 已集成项目

1. **MQTT聊天室** - 实时聊天应用
2. **太阳系动态星图** - 3D可视化
3. **AI梗图展示** - 图片轮播
4. **快应用设计** - 移动应用
5. **AI制作视频** - 视频生成
6. **AI手办视频** - 图片转视频
7. **AI八大神经网络简述** - 技术文章

## 常见问题

### 1. 端口被占用

```bash
# 修改端口
npm run dev -- --port 3000
```

### 2. Nginx 404 错误

确保配置了 `try_files` 指令：
```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

### 3. 静态资源 404

检查 `vite.config.js` 中的 `base` 配置，如果部署到子目录需要设置：
```javascript
base: '/your-subdirectory/'
```

## 许可证

MIT

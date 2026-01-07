# 阿里云服务器创建和网页分享

## 任务目标

在阿里云服务器上部署个人博客，使其能通过公网访问。

## 交付形式

- 部署在阿里云的博客网站
- 可访问的公网 URL
- 配置文档（包含服务器信息、域名等）

## 技术栈

- **云服务提供商**: 阿里云
- **服务器**: ECS（云服务器）
- **Web 服务器**: Nginx / Apache
- **操作系统**: Ubuntu / CentOS
- **域名**: 阿里云域名（可选）

## 实施步骤

### 1. 服务器准备

```bash
# 购买/使用现有阿里云 ECS 实例
# 系统配置建议:
- CPU: 1核或以上
- 内存: 1GB或以上
- 硬盘: 20GB或以上
- 带宽: 1Mbps或以上
```

### 2. 环境安装

```bash
# 安装 Nginx
sudo apt update
sudo apt install nginx

# 或安装 Apache
sudo apt install apache2

# 安装 Node.js（如需动态功能）
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install -y nodejs
```

### 3. 网站部署

```bash
# 上传网站文件
scp -r ./blog/* user@your-server-ip:/var/www/html/

# 或使用 Git
git clone <your-repo> /var/www/html/
```

### 4. Nginx 配置

```nginx
# /etc/nginx/sites-available/blog
server {
    listen 80;
    server_name your-domain.com;  # 或服务器IP

    root /var/www/html;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }

    # 静态资源缓存
    location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Gzip 压缩
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml;
}
```

### 5. 启用配置

```bash
# 创建软链接
sudo ln -s /etc/nginx/sites-available/blog /etc/nginx/sites-enabled/

# 测试配置
sudo nginx -t

# 重启 Nginx
sudo systemctl restart nginx
```

### 6. 安全配置

```bash
# 配置防火墙
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw allow 22/tcp
sudo ufw enable

# SSL 证书（Let's Encrypt）
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

### 7. 域名配置（可选）

在阿里云域名解析中添加：

```
类型: A记录
主机记录: @
记录值: your-server-ip
```

## 整合接口规范

### 与博客框架的对接

部署完成后，需要：

1. **更新配置文件**

```javascript
// js/config.js
const CONFIG = {
  baseURL: 'https://your-domain.com',  // 或 http://your-ip
  apiURL: 'https://your-domain.com/api',
  // ...
};
```

2. **确保资源路径正确**

```html
<!-- 使用相对路径 -->
<link rel="stylesheet" href="/css/main.css">
<script src="/js/main.js"></script>
<img src="/assets/images/logo.png">
```

3. **测试清单**

- [ ] 首页可访问
- [ ] 所有子页面可访问
- [ ] 视频可正常播放
- [ ] 静态资源加载正常
- [ ] 移动端适配正常
- [ ] HTTPS 正常工作（如已配置）

## 文件结构

```
02-aliyun-deployment/
├── nginx.conf             # Nginx 配置文件
├── deploy.sh              # 自动部署脚本
├── server-info.txt        # 服务器信息记录
│   # 包含: IP、域名、用户名、密码提示等
├── ssl-cert/              # SSL 证书（如自签名）
└── README.md              # 本文件
```

## 配置文档模板

`server-info.txt` 应包含：

```
服务器信息
===================================
服务器IP: xxx.xxx.xxx.xxx
域名: your-domain.com (如已配置)
SSH用户: ubuntu / root
SSH端口: 22
Web根目录: /var/www/html
Nginx配置: /etc/nginx/sites-available/blog
部署时间: YYYY-MM-DD
备注: [任何特殊配置说明]
```

## 注意事项

1. **安全性**
   - 不要在代码中硬编码密码
   - 定期更新系统和软件包
   - 配置防火墙规则
   - 使用强密码

2. **性能**
   - 启用 Gzip 压缩
   - 配置静态资源缓存
   - 优化图片大小

3. **备份**
   - 定期备份网站文件
   - 定期备份数据库（如使用）

## 状态

- 状态: 未完成
- 依赖: 01-blog-framework（博客框架）

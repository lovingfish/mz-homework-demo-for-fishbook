<template>
  <header class="header">
    <div class="container">
      <h1 class="site-title">个人博客</h1>
      <p class="site-subtitle">期末作业展示</p>
      <nav class="nav">
        <router-link to="/" class="nav-link">首页</router-link>
        <router-link to="/projects" class="nav-link">项目</router-link>
        <router-link to="/posts" class="nav-link">文章</router-link>
        <router-link to="/about" class="nav-link">关于</router-link>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  background: #1a1a1a;
  color: #fff;
  padding: 2rem 0;
  text-align: center;
}

.site-title {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #fff;
}

.site-subtitle {
  font-size: 0.95rem;
  opacity: 0.8;
  margin-bottom: 1.5rem;
}

.nav {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  opacity: 0.8;
  transition: opacity 0.2s;
}

.nav-link:hover,
.nav-link.router-link-active {
  opacity: 1;
}

@media (max-width: 768px) {
  .site-title {
    font-size: 1.5rem;
  }
  .nav {
    gap: 1rem;
  }
}
</style>

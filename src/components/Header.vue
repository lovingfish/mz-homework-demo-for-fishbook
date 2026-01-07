<template>
  <header class="header">
    <div class="header-inner">
      <router-link to="/" class="logo">
        <span class="logo-text">Blog</span>
      </router-link>
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
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 1rem 1.5rem;
  background: rgba(250, 250, 250, 0.8);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}

.header-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo-text {
  font-family: 'Outfit', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--primary);
}

.nav {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-link {
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-family: 'Outfit', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-muted);
  transition: color 0.2s, background 0.2s;
}

.nav-link:hover {
  color: var(--primary);
  background: rgba(0, 0, 0, 0.04);
}

.nav-link.router-link-active {
  color: var(--primary);
  background: rgba(0, 0, 0, 0.06);
}

@media (max-width: 768px) {
  .header { padding: 0.75rem 1rem; }
  .nav { gap: 0; }
  .nav-link { padding: 0.5rem 0.75rem; font-size: 0.85rem; }
}
</style>

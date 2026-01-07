<template>
  <div class="container">
    <section class="hero">
      <h1>欢迎来到我的博客</h1>
      <p>展示编程项目和AI应用实践</p>
    </section>

    <section class="section">
      <div class="section-header">
        <h2>最新项目</h2>
        <router-link to="/projects" class="link-more">查看全部</router-link>
      </div>
      <div class="grid">
        <ProjectCard v-for="project in featuredProjects" :key="project.id" :project="project" />
      </div>
    </section>

    <section class="section">
      <div class="section-header">
        <h2>最新文章</h2>
        <router-link to="/posts" class="link-more">查看全部</router-link>
      </div>
      <div class="article-list">
        <router-link v-for="post in posts" :key="post.id" :to="`/posts/${post.id}`" class="article-item">
          <div class="article-content">
            <h3>{{ post.title }}</h3>
            <p>{{ post.description }}</p>
          </div>
          <span class="article-date">{{ post.date }}</span>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'

const featuredProjects = ref([
  {
    id: 'mqtt-chat',
    title: 'MQTT聊天室',
    type: 'web-app',
    description: '实时聊天应用，基于MQTT协议',
    iframe: true
  },
  {
    id: 'solar-system',
    title: '太阳系动态星图',
    type: '3d-viz',
    description: 'Three.js实现的3D太阳系可视化',
    iframe: true
  },
  {
    id: 'ai-images',
    title: 'AI梗图展示',
    type: 'gallery',
    description: 'AI生成的趣味图片轮播',
    iframe: true
  }
])

const posts = ref([
  {
    id: 'ai-neural-networks',
    title: 'AI八大神经网络简述',
    description: '介绍八大经典神经网络架构及其应用',
    date: '2025-01'
  }
])
</script>

<style scoped>
.hero {
  text-align: center;
  padding: 4rem 0 3rem;
}

.hero h1 {
  margin-bottom: 0.75rem;
}

.hero p {
  font-size: 1.125rem;
  max-width: 500px;
  margin: 0 auto;
}

.section {
  margin-bottom: 4rem;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.section-header h2 {
  margin: 0;
}

.link-more {
  font-family: 'Outfit', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--accent);
}

.link-more:hover {
  text-decoration: underline;
}

.article-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.article-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.5rem;
  box-shadow: var(--shadow);
  transition: box-shadow 0.25s, transform 0.25s;
  cursor: pointer;
}

.article-item:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-hover);
}

.article-content h3 {
  margin-bottom: 0.25rem;
  color: var(--primary);
}

.article-content p {
  margin: 0;
}

.article-date {
  flex-shrink: 0;
  font-size: 0.85rem;
  color: var(--text-muted);
}

@media (max-width: 768px) {
  .hero { padding: 3rem 0 2rem; }
  .article-item { flex-direction: column; align-items: flex-start; }
}
</style>

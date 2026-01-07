<template>
  <div class="container">
    <section class="hero">
      <h1>欢迎</h1>
      <p>这是一个用于展示期末作业的个人博客网站，包含多个编程项目和AI应用实践。</p>
    </section>

    <section class="section">
      <h2>最新项目</h2>
      <div class="grid">
        <ProjectCard v-for="project in featuredProjects" :key="project.id" :project="project" />
      </div>
      <div style="text-align: center; margin-top: 2rem;">
        <router-link to="/projects" class="btn btn-outline">查看所有项目 →</router-link>
      </div>
    </section>

    <section class="section">
      <h2>最新文章</h2>
      <div class="article-list">
        <router-link v-for="post in posts" :key="post.id" :to="`/posts/${post.id}`" class="article-item">
          <h3>{{ post.title }}</h3>
          <p>{{ post.description }}</p>
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
  padding: 3rem 0;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.1rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}

.section {
  margin-bottom: 4rem;
}

.section h2 {
  margin-bottom: 1.5rem;
}

.article-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.article-item {
  display: block;
  background: #f9f9f9;
  border-radius: 12px;
  padding: 1.5rem;
  transition: transform 0.2s;
}

.article-item:hover {
  transform: translateX(4px);
}

.article-item h3 {
  margin-bottom: 0.5rem;
  color: #1a1a1a;
}

.article-item p {
  margin: 0;
  color: #666;
}

.article-date {
  display: inline-block;
  margin-top: 0.5rem;
  font-size: 0.85rem;
  color: #999;
}
</style>

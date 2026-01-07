<template>
  <div class="container">
    <div class="page-header">
      <h1>文章</h1>
      <p>技术分享与学习笔记</p>
    </div>
    <div class="article-list">
      <router-link v-for="post in posts" :key="post.id" :to="`/posts/${post.id}`" class="article-item">
        <div class="article-content">
          <h2>{{ post.title }}</h2>
          <p>{{ post.description }}</p>
        </div>
        <div class="article-meta">
          <span class="article-category">{{ post.category }}</span>
          <span class="article-date">{{ post.date }}</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const posts = ref([
  {
    id: 'ai-neural-networks',
    title: 'AI八大神经网络简述',
    description: '介绍八大经典神经网络架构及其应用，包括感知机、MLP、CNN、RNN、LSTM、GAN、Transformer和GNN',
    date: '2025-01',
    category: 'AI'
  }
])
</script>

<style scoped>
.page-header {
  margin-bottom: 2.5rem;
}

.page-header h1 {
  margin-bottom: 0.5rem;
}

.page-header p {
  margin: 0;
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
  gap: 1.5rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.75rem;
  box-shadow: var(--shadow);
  transition: box-shadow 0.25s, transform 0.25s;
  cursor: pointer;
}

.article-item:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-hover);
}

.article-content h2 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: var(--primary);
}

.article-content p {
  margin: 0;
  line-height: 1.6;
}

.article-meta {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
}

.article-category {
  padding: 0.25rem 0.75rem;
  background: var(--accent);
  color: #fff;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 500;
}

.article-date {
  font-size: 0.85rem;
  color: var(--text-muted);
}

@media (max-width: 768px) {
  .article-item {
    flex-direction: column;
    align-items: flex-start;
  }
  .article-meta {
    flex-direction: row;
    align-items: center;
  }
}
</style>

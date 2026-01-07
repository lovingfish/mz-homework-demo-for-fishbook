<template>
  <div class="container">
    <h1>文章</h1>
    <div class="article-list">
      <router-link v-for="post in posts" :key="post.id" :to="`/posts/${post.id}`" class="article-item">
        <h2>{{ post.title }}</h2>
        <p>{{ post.description }}</p>
        <span class="article-meta">
          <span class="article-date">{{ post.date }}</span>
          <span class="article-category">{{ post.category }}</span>
        </span>
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
h1 {
  margin-bottom: 2rem;
}

.article-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.article-item {
  display: block;
  background: #f9f9f9;
  border-radius: 12px;
  padding: 2rem;
  transition: transform 0.2s;
}

.article-item:hover {
  transform: translateX(4px);
}

.article-item h2 {
  font-size: 1.3rem;
  margin-bottom: 0.75rem;
  color: #1a1a1a;
}

.article-item p {
  margin: 0;
  color: #666;
  line-height: 1.6;
}

.article-meta {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.article-date,
.article-category {
  font-size: 0.85rem;
  color: #999;
}
</style>

<template>
  <div class="project-card">
    <div class="project-icon">{{ icon }}</div>
    <h3>{{ project.title }}</h3>
    <p>{{ project.description }}</p>
    <div class="project-meta">
      <span class="project-type">{{ typeLabel }}</span>
    </div>
    <div class="project-actions">
      <template v-if="project.iframe">
        <router-link :to="`/projects/${project.id}`" class="btn">查看</router-link>
      </template>
      <template v-else-if="project.videoUrl">
        <a :href="project.videoUrl" target="_blank" class="btn">播放</a>
        <a :href="project.downloadUrl" class="btn btn-outline" download>下载</a>
      </template>
      <template v-else-if="project.downloadUrl">
        <a :href="project.downloadUrl" target="_blank" class="btn">下载</a>
      </template>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})

const icon = computed(() => {
  const icons = {
    'web-app': '💬',
    '3d-viz': '🪐',
    'gallery': '🖼️',
    'mobile-app': '📱',
    'video': '🎬',
    'article': '📝'
  }
  return icons[props.project.type] || '📦'
})

const typeLabel = computed(() => {
  const labels = {
    'web-app': 'Web应用',
    '3d-viz': '3D可视化',
    'gallery': '图片展示',
    'mobile-app': '移动应用',
    'video': '视频',
    'article': '文章'
  }
  return labels[props.project.type] || '项目'
})
</script>

<style scoped>
.project-card {
  background: #f9f9f9;
  border-radius: 12px;
  padding: 2rem;
  transition: transform 0.2s, box-shadow 0.2s;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.project-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.project-card h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #1a1a1a;
}

.project-card p {
  color: #666;
  font-size: 0.95rem;
  margin-bottom: 1rem;
}

.project-meta {
  margin-bottom: 1rem;
}

.project-type {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: #e0e0e0;
  border-radius: 12px;
  font-size: 0.75rem;
  color: #666;
}

.project-actions {
  display: flex;
  gap: 0.5rem;
}
</style>

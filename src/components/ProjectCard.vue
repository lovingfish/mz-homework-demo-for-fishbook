<template>
  <div class="project-card">
    <div class="project-icon" v-html="icon"></div>
    <h3>{{ project.title }}</h3>
    <p>{{ project.description }}</p>
    <span class="project-type">{{ typeLabel }}</span>
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
    'web-app': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
    '3d-viz': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>',
    'gallery': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>',
    'mobile-app': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>',
    'video': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/></svg>',
    'article': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>'
  }
  return icons[props.project.type] || '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>'
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
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.75rem;
  box-shadow: var(--shadow);
  transition: box-shadow 0.25s, transform 0.25s;
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-hover);
}

.project-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg);
  border-radius: 12px;
  margin-bottom: 1rem;
  color: var(--accent);
}

.project-icon :deep(svg) {
  width: 24px;
  height: 24px;
}

.project-card h3 {
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
  color: var(--primary);
}

.project-card p {
  flex: 1;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.project-type {
  display: inline-block;
  width: fit-content;
  padding: 0.25rem 0.75rem;
  background: var(--bg);
  border-radius: 6px;
  font-size: 0.75rem;
  color: var(--text-muted);
  margin-bottom: 1rem;
}

.project-actions {
  display: flex;
  gap: 0.5rem;
}
</style>

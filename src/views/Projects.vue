<template>
  <div class="container">
    <div class="page-header">
      <h1>项目</h1>
      <p>编程作业和AI应用项目展示</p>
    </div>
    <div class="grid">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'

const projects = ref([
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
  },
  {
    id: 'quickapp',
    title: '快应用设计',
    type: 'mobile-app',
    description: '使用灵光APP设计的快应用',
    downloadUrl: 'https://media.makomako.dpdns.org/images/2025/12/gemini'
  },
  {
    id: 'ai-video',
    title: 'AI制作视频',
    type: 'video',
    description: '使用AI工具生成的视频作品',
    videoUrl: 'https://media.makomako.dpdns.org/images/2025/12/moonshot',
    downloadUrl: 'https://media.makomako.dpdns.org/images/2025/12/moonshot'
  },
  {
    id: 'ai-figure-video',
    title: 'AI手办视频',
    type: 'video',
    description: 'AI生成手办图片并转化为视频',
    videoUrl: 'https://media.makomako.dpdns.org/images/2025/12/moonshot',
    downloadUrl: 'https://media.makomako.dpdns.org/images/2025/12/moonshot'
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
</style>

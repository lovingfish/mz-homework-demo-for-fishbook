<template>
  <div class="container">
    <router-link to="/projects" class="back-link">← 返回项目列表</router-link>

    <div v-if="project">
      <h1>{{ project.title }}</h1>
      <p class="project-description">{{ project.description }}</p>

      <div class="project-meta">
        <span class="project-type">{{ typeLabel }}</span>
        <span v-for="tech in project.tech" :key="tech" class="tech-tag">{{ tech }}</span>
      </div>

      <div class="project-content">
        <iframe
          v-if="project.iframe"
          :src="project.path"
          class="project-iframe"
          frameborder="0">
        </iframe>

        <div v-else-if="project.videoUrl" class="video-wrapper">
          <video controls width="100%">
            <source :src="project.videoUrl" type="video/mp4">
            您的浏览器不支持视频播放。
          </video>
          <div class="video-actions">
            <a :href="project.downloadUrl" class="btn" download>下载视频</a>
          </div>
        </div>

        <div v-else-if="project.downloadUrl" class="download-wrapper">
          <div class="download-box">
            <p>该项目需要下载后查看</p>
            <a :href="project.downloadUrl" target="_blank" class="btn">下载</a>
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      <h1>项目不存在</h1>
      <router-link to="/projects" class="btn">返回项目列表</router-link>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const projects = ref({
  'mqtt-chat': {
    id: 'mqtt-chat',
    title: 'MQTT聊天室',
    type: 'web-app',
    description: '实时聊天应用，基于MQTT协议实现。支持实时消息收发、在线用户列表、系统通知等功能。',
    path: 'projects/03-mqtt-chat/index.html',
    iframe: true,
    tech: ['HTML/CSS/JS', 'MQTT.js']
  },
  'solar-system': {
    id: 'solar-system',
    title: '太阳系动态星图',
    type: '3d-viz',
    description: '使用Three.js实现的3D太阳系可视化。包含太阳和6大行星，支持公转自转动画、鼠标交互、速度控制等功能。',
    path: 'projects/04-solar-system/index.html',
    iframe: true,
    tech: ['Three.js', 'JavaScript']
  },
  'ai-images': {
    id: 'ai-images',
    title: 'AI梗图展示',
    type: 'gallery',
    description: 'AI生成的趣味图片轮播展示。支持点击切换、键盘控制、触摸滑动、鼠标拖动等多种交互方式。',
    path: 'projects/ai-images-site/index.html',
    iframe: true,
    tech: ['HTML/CSS/JS']
  },
  'quickapp': {
    id: 'quickapp',
    title: '快应用设计',
    type: 'mobile-app',
    description: '使用灵光APP设计的快应用。',
    downloadUrl: 'https://media.makomako.dpdns.org/images/2025/12/gemini',
    tech: ['灵光APP']
  },
  'ai-video': {
    id: 'ai-video',
    title: 'AI制作视频',
    type: 'video',
    description: '使用AI工具生成的视频作品。',
    videoUrl: 'https://media.makomako.dpdns.org/images/2025/12/moonshot',
    downloadUrl: 'https://media.makomako.dpdns.org/images/2025/12/moonshot',
    tech: ['AI视频生成']
  },
  'ai-figure-video': {
    id: 'ai-figure-video',
    title: 'AI手办视频',
    type: 'video',
    description: 'AI生成手办图片并转化为视频。',
    videoUrl: 'https://media.makomako.dpdns.org/images/2025/12/moonshot',
    downloadUrl: 'https://media.makomako.dpdns.org/images/2025/12/moonshot',
    tech: ['AI图片生成', 'AI视频生成']
  }
})

const project = computed(() => {
  return projects.value[route.params.id]
})

const typeLabel = computed(() => {
  const labels = {
    'web-app': 'Web应用',
    '3d-viz': '3D可视化',
    'gallery': '图片展示',
    'mobile-app': '移动应用',
    'video': '视频'
  }
  return project.value ? labels[project.value.type] : ''
})
</script>

<style scoped>
.back-link {
  display: inline-block;
  margin-bottom: 2rem;
  color: #666;
  text-decoration: none;
}

.back-link:hover {
  color: #1a1a1a;
}

h1 {
  margin-bottom: 1rem;
}

.project-description {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 1.5rem;
}

.project-meta {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.project-type,
.tech-tag {
  display: inline-block;
  padding: 0.35rem 0.85rem;
  background: #e0e0e0;
  border-radius: 16px;
  font-size: 0.85rem;
  color: #666;
}

.project-type {
  background: #1a1a1a;
  color: #fff;
}

.project-iframe {
  width: 100%;
  min-height: 600px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  background: #fff;
}

.video-wrapper {
  background: #000;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 2rem;
}

.video-wrapper video {
  width: 100%;
  display: block;
}

.video-actions {
  padding: 1.5rem;
  text-align: center;
}

.download-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
}

.download-box {
  text-align: center;
}

.download-box p {
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .project-iframe {
    min-height: 400px;
  }
}
</style>

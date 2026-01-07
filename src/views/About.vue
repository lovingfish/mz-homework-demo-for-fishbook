<template>
  <div class="container">
    <div class="page-header">
      <h1>关于</h1>
      <p>期末作业展示博客</p>
    </div>

    <div class="about-content">
      <section class="about-section">
        <h2>简介</h2>
        <p>这是一个用于展示期末作业的个人博客网站，包含了多个编程项目和AI应用实践，涵盖Web开发、3D可视化、AI应用等多个领域。</p>
      </section>

      <section class="about-section">
        <h2>技术栈</h2>
        <div class="tech-list">
          <span class="tech-tag">Vue 3</span>
          <span class="tech-tag">Vite</span>
          <span class="tech-tag">Vue Router 4</span>
          <span class="tech-tag">CSS3</span>
        </div>
      </section>

      <section class="about-section">
        <h2>项目列表</h2>
        <ul class="project-list">
          <li>MQTT聊天室 - 实时聊天应用</li>
          <li>太阳系动态星图 - 3D可视化</li>
          <li>AI梗图展示 - 图片轮播</li>
          <li>快应用设计 - 移动应用</li>
          <li>AI制作视频 - 视频生成</li>
          <li>AI手办视频 - 图片转视频</li>
          <li>AI八大神经网络简述 - 技术文章</li>
        </ul>
      </section>
    </div>
  </div>
</template>

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

.about-content {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 2rem;
  box-shadow: var(--shadow);
}

.about-section {
  margin-bottom: 2rem;
}

.about-section:last-child {
  margin-bottom: 0;
}

.about-section h2 {
  font-size: 1.125rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--border);
}

.about-section p {
  margin: 0;
  line-height: 1.8;
}

.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  padding: 0.375rem 0.875rem;
  background: var(--bg);
  border-radius: 6px;
  font-size: 0.875rem;
  color: var(--text-muted);
}

.project-list {
  margin: 0;
  padding-left: 1.25rem;
}

.project-list li {
  margin-bottom: 0.5rem;
  color: var(--text-muted);
  line-height: 1.6;
}

.project-list li:last-child {
  margin-bottom: 0;
}
</style>

<template>
  <div class="container">
    <router-link to="/posts" class="back-link">← 返回文章列表</router-link>

    <article v-if="post" class="article">
      <h1>{{ post.title }}</h1>
      <p class="meta">发布于 {{ post.date }} | 分类: {{ post.category }} | 标签: {{ post.tags }}</p>

      <div class="intro">
        <h2>前言</h2>
        <p>神经网络是人工智能领域的核心技术，从1957年感知机诞生到2018年图神经网络的出现，历经六十余年发展。本文梳理八大经典神经网络架构，帮助理解AI技术的演进脉络。</p>
      </div>

      <div class="networks">
        <div v-for="network in networks" :key="network.id" class="network">
          <h2>{{ network.title }}</h2>
          <div class="network-header">
            <span v-for="tag in network.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
          <div class="section">
            <h3>核心原理</h3>
            <p>{{ network.principle }}</p>
          </div>
          <div class="section">
            <h3>应用场景</h3>
            <ul>
              <li v-for="app in network.applications" :key="app">{{ app }}</li>
            </ul>
          </div>
          <div class="pros-cons">
            <div class="pros">
              <h4>优点</h4>
              <ul>
                <li v-for="pro in network.pros" :key="pro">{{ pro }}</li>
              </ul>
            </div>
            <div class="cons">
              <h4>缺点</h4>
              <ul>
                <li v-for="con in network.cons" :key="con">{{ con }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const posts = ref({
  'ai-neural-networks': {
    id: 'ai-neural-networks',
    title: 'AI八大神经网络简述',
    date: '2025-01',
    category: 'AI',
    tags: '神经网络, 深度学习'
  }
})

const networks = ref([
  {
    id: 'perceptron',
    title: '1. 感知机 (Perceptron)',
    tags: ['年份: 1957', '提出者: Frank Rosenblatt'],
    principle: '最基础的神经网络单元，模拟单个神经元的工作方式。接收输入信号，加权求和后通过激活函数输出。公式: y = f(Σ(wᵢxᵢ) + b)',
    applications: ['简单的二分类问题（线性可分）', '逻辑门电路实现'],
    pros: ['结构简单，易于理解', '计算效率高'],
    cons: ['只能解决线性可分问题', '无法处理XOR等复杂问题']
  },
  {
    id: 'mlp',
    title: '2. 多层感知机 (MLP)',
    tags: ['年份: 1986', '突破: 反向传播算法'],
    principle: '在感知机基础上引入隐藏层，通过反向传播算法调整权重，实现非线性映射。结构: 输入层 → 隐藏层(多层) → 输出层',
    applications: ['通用函数拟合', '分类与回归任务', '特征提取与转换'],
    pros: ['通用近似能力', '可解决非线性问题'],
    cons: ['参数量大，易过拟合', '难以处理序列和图像数据']
  },
  {
    id: 'cnn',
    title: '3. 卷积神经网络 (CNN)',
    tags: ['年份: 1998 (LeNet-5)', '代表作: ResNet, VGG'],
    principle: '通过卷积层提取局部特征，池化层降维，全连接层输出结果。具备局部连接和权重共享特性。结构: 卷积层 → 池化层 → 全连接层',
    applications: ['图像分类、目标检测', '人脸识别', '医疗影像分析'],
    pros: ['自动提取特征', '平移不变性', '参数量相对较少'],
    cons: ['需要大量标注数据', '计算资源消耗大']
  },
  {
    id: 'rnn',
    title: '4. 循环神经网络 (RNN)',
    tags: ['年份: 1986', '特点: 处理序列数据'],
    principle: '引入循环连接，能够处理变长序列数据。隐藏状态在时间步间传递，保留历史信息。',
    applications: ['自然语言处理', '语音识别', '时间序列预测'],
    pros: ['处理序列数据', '保留时序信息'],
    cons: ['梯度消失/爆炸问题', '难以学习长期依赖']
  },
  {
    id: 'lstm',
    title: '5. 长短期记忆网络 (LSTM)',
    tags: ['年份: 1997', '提出者: Hochreiter & Schmidhuber'],
    principle: '通过门控机制（遗忘门、输入门、输出门）解决RNN的长期依赖问题。',
    applications: ['机器翻译', '文本生成', '语音合成'],
    pros: ['解决长期依赖问题', '门控机制灵活'],
    cons: ['计算复杂度高', '参数量较大']
  },
  {
    id: 'gan',
    title: '6. 生成对抗网络 (GAN)',
    tags: ['年份: 2014', '提出者: Ian Goodfellow'],
    principle: '由生成器和判别器组成，通过对抗训练使生成器产生逼真样本。',
    applications: ['图像生成', '风格迁移', '数据增强'],
    pros: ['生成质量高', '无需显式建模'],
    cons: ['训练不稳定', '模式崩塌问题']
  },
  {
    id: 'transformer',
    title: '7. Transformer',
    tags: ['年份: 2017', '代表作: GPT, BERT'],
    principle: '基于自注意力机制，并行处理序列数据，打破了RNN的序列限制。',
    applications: ['大规模语言模型', '机器翻译', '文本理解'],
    pros: ['并行计算', '捕捉长距离依赖', '性能优异'],
    cons: ['计算资源需求大', '需要大量数据']
  },
  {
    id: 'gnn',
    title: '8. 图神经网络 (GNN)',
    tags: ['年份: 2018', '特点: 处理图结构数据'],
    principle: '在图结构上进行消息传递和聚合，提取节点和图的特征表示。',
    applications: ['社交网络分析', '分子性质预测', '推荐系统'],
    pros: ['处理非欧几里得数据', '保留图结构信息'],
    cons: ['图规模限制', '过平滑问题']
  }
])

const post = computed(() => {
  return posts.value[route.params.id]
})
</script>

<style scoped>
.back-link {
  display: inline-block;
  margin-bottom: 2rem;
  color: #666;
  text-decoration: none;
}

.article {
  background: #fff;
  padding: 3rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  max-width: 900px;
  margin: 0 auto;
}

h1 {
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
  color: #1a1a1a;
  border-bottom: 3px solid #3b82f6;
  padding-bottom: 0.5rem;
}

.meta {
  color: #666;
  margin-bottom: 2rem;
  font-size: 0.95rem;
}

.intro {
  background: #f0f9ff;
  padding: 1.5rem;
  border-radius: 6px;
  border-left: 4px solid #3b82f6;
  margin-bottom: 2.5rem;
}

.intro h2 {
  font-size: 1.3rem;
  margin-bottom: 0.75rem;
  color: #1a1a1a;
}

.networks {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.network {
  padding: 2rem;
  background: #fafafa;
  border-radius: 8px;
  border: 1px solid #e5e5e5;
}

.network h2 {
  font-size: 1.6rem;
  color: #1e40af;
  margin-bottom: 1rem;
}

.network-header {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.tag {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: #e0e7ff;
  color: #3730a3;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
}

.section {
  margin-bottom: 1.25rem;
}

.section h3 {
  font-size: 1.1rem;
  color: #475569;
  margin-bottom: 0.5rem;
}

.section ul {
  margin-left: 1.25rem;
}

.section li {
  margin-bottom: 0.5rem;
  color: #666;
}

.pros-cons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  margin-top: 1rem;
}

.pros,
.cons {
  padding: 1rem;
  border-radius: 6px;
}

.pros {
  background: #dcfce7;
}

.cons {
  background: #fee2e2;
}

.pros h4,
.cons h4 {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.pros h4 { color: #166534; }
.cons h4 { color: #991b1b; }

.pros ul,
.cons ul {
  margin-left: 1rem;
}

.pros li,
.cons li {
  margin-bottom: 0.4rem;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .article {
    padding: 1.5rem;
  }

  .pros-cons {
    grid-template-columns: 1fr;
  }

  h1 {
    font-size: 1.8rem;
  }
}
</style>

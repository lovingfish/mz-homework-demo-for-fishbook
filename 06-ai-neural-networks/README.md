# AI八大神经网络的简述

## 任务目标

撰写一篇技术文章，简述人工智能领域的八大经典神经网络架构及其应用。

## 交付形式

- Markdown 格式的技术文章
- 包含文字说明、架构图、示意图
- 配套的图片资源

## 技术栈

- **文档格式**: Markdown
- **绘图工具**:
  - Draw.io / Excalidraw（架构图）
  - PowerPoint / Keynote（示意图）
  - 在线工具: ProcessOn、Figma
- **图片格式**: PNG / SVG（推荐矢量图）

## 八大神经网络

### 1. 感知机 (Perceptron)
- **年份**: 1957
- **特点**: 最基础的神经网络单元
- **应用**: 二分类问题

### 2. 多层感知机 (MLP)
- **年份**: 1986
- **特点**: 引入隐藏层，反向传播
- **应用**: 通用拟合

### 3. 卷积神经网络 (CNN)
- **年份**: 1998 (LeNet-5)
- **特点**: 局部连接、权重共享
- **应用**: 图像识别、计算机视觉

### 4. 循环神经网络 (RNN)
- **年份**: 1986
- **特点**: 处理序列数据
- **应用**: 时序预测、NLP

### 5. 长短期记忆网络 (LSTM)
- **年份**: 1997
- **特点**: 解决梯度消失
- **应用**: 语音识别、机器翻译

### 6. 生成对抗网络 (GAN)
- **年份**: 2014
- **特点**: 生成器+判别器对抗
- **应用**: 图像生成、风格迁移

### 7. Transformer
- **年份**: 2017
- **特点**: 自注意力机制
- **应用**: 大语言模型 (GPT、BERT)

### 8. 图神经网络 (GNN)
- **年份**: 2018
- **特点**: 处理图结构数据
- **应用**: 社交网络、分子结构

## 文章结构

```markdown
# AI八大神经网络简述

## 前言
- 神经网络发展历程
- 为什么学习这些架构

## 1. 感知机 (Perceptron)
### 原理
### 架构图
### 应用场景
### 优缺点

## 2. 多层感知机 (MLP)
### ...
（重复结构）

## 总结与展望
```

## 整合接口规范

### 博客文章展示

文章将作为博客的一篇文章发布。

**方案一: 纯 Markdown**

```markdown
文件路径: /posts/ai-neural-networks.md

文章元数据:
---
title: "AI八大神经网络简述"
date: "2024-01-01"
category: "AI"
tags: ["神经网络", "深度学习"]
---
```

**方案二: 转换为 HTML**

如果博客不支持 Markdown，需要转换为 HTML:

```bash
# 使用工具转换
npm install -g markdown-it
markdown-it input.md > output.html
```

### 图片资源

```
/assets/images/neural-networks/
├── perceptron.png
├── mlp.png
├── cnn.png
├── rnn.png
├── lstm.png
├── gan.png
├── transformer.png
└── gnn.png
```

在 Markdown 中引用:

```markdown
## 1. 感知机

![感知机架构](/assets/images/neural-networks/perceptron.png)

感知机是最基础的神经网络...
```

## 文件结构

```
06-ai-neural-networks/
├── article.md              # 文章源文件
├── images/                 # 配套图片
│   ├── perceptron.svg
│   ├── mlp.svg
│   ├── cnn.svg
│   ├── rnn.svg
│   ├── lstm.svg
│   ├── gan.svg
│   ├── transformer.svg
│   └── gnn.svg
├── diagrams/               # 架构图源文件
│   ├── drawio/            # Draw.io 源文件
│   └── excalidraw/        # Excalidraw 源文件
├── references/             # 参考资料
│   └── links.md
└── README.md               # 本文件
```

## 内容模板

### 每个网络的结构

```markdown
## [序号]. [网络名称] ([英文缩写])

### 简介
- 年份
- 提出者
- 核心创新点

### 架构图
![架构图](/assets/images/neural-networks/xxx.png)

### 工作原理
1. 第一步
2. 第二步
...

### 数学公式
- 关键公式说明

### 应用场景
- 场景1
- 场景2
...

### 优缺点
**优点**:
- 优点1
- 优点2

**缺点**:
- 缺点1
- 缺点2

### 代码示例 (可选)
```python
# 简单代码示例
```

### 小结
```

## 绘图建议

### 使用 Draw.io

1. 下载: https://app.diagrams.net/
2. 创建网络架构图
3. 导出为 SVG 或 PNG
4. 保存源文件 (.drawio)

### 推荐的图示元素

- **节点**: 圆形或矩形
- **连接**: 箭头表示数据流
- **层次**: 从左到右或从上到下
- **标注**: 层名称、参数量

## 测试清单

- [ ] 八个网络全部覆盖
- [ ] 每个网络有架构图
- [ ] 文字说明清晰
- [ ] 公式正确（如有）
- [ ] 图片清晰
- [ ] 在博客中显示正常

## 参考资源

- [深度学习圣经](http://www.deeplearningbook.org/)
- [神经网络动物园](https://www.asimovinstitute.org/neural-network-zoo)
- [Distill.pub](https://distill.pub/) - 可视化论文

## 状态

- 状态: 未完成
- 优先级: 中
- 依赖: 无（可独立完成）

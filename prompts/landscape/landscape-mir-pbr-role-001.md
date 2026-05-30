---
id: "landscape-mir-pbr-role-001"
title: "氛围转换（需传参考图）"
category: landscape
subcategory: "01_建筑室内空间设计"
aesthetic: null
tags: ["建筑", "渲染", "暖色调", "黄昏", "湖水", "树木", "倒影", "写实"]
recommended_models: 
  - banana-pro
recommended_params:
  aspect_ratio: null
  quality: null
  style_strength: null
sample_outputs: []
quality_tier: B
author: "ChunqiGuo02"
source: "Leader Prompt Gallery (https://www.leaderai.top/mid-api/lab/image_prompt/index.html)"
language: mixed
created_at: 2026-05-30
version: "1.0.0"
related_to: []
---

# 正文 prompt
Role / 角色定位
你是一位顶级建筑可视化专家（如 MIR 或 Luxigon 资深渲染师），精通摄影光学、物理材质（PBR）以及顶级商业建筑图的氛围营造。你的任务是提取**参考图（Image 1）的色彩空间、光影调性和艺术氛围，并将其精准应用到目标结构图（Image 2）**上。

Core Objectives / 核心任务指令
1. 结构与几何保真 (Structural Fidelity)
严禁改动： 必须严格保留 Image 2 的原始几何结构、建筑轮廓、窗户排布和构图透视。

元素继承： 继承 Image 2 中的特定设计元素（例如：网格状立面、内部发光灯管、前景的球形灯与植被分布）。

2. 风格提取与应用 (Atmosphere Extraction)
氛围迁移： 从 Image 1 中提取核心调性（如：清晨的冷暖对比、自然光的漫反射、柔和的雾气、或高级的中性色调）。

光影逻辑： 将 Image 1 的光影逻辑（Lighting Logic）应用到 Image 2。如果参考图是自然光，则赋予目标图真实的光学衰减和环境遮蔽（AO）。
3. 材质与质感重塑 (Material Hyper-realism)
质感升级： 基于 Image 2 的材质基础，应用 MIR 级别的真实纹理：

光影交互： 强化物体表面的间接照明和光能传递（Global Illumination），确保光源（如内部灯带）对材质表面的反射符合真实物理法则。
品质：8K分辨率，照片级真实感，虚幻引擎5.4渲染，Octane渲染风格，建筑摄影。氛围：大气深度，电影级光照，情绪化，优雅，精致，自然。细节：微纹理，粗糙度贴图，基于物理的渲染（PBR），高动态范围（HDR），光线追踪反射。

## 来源备注
- 源站作者：leaderai
- 源站 UUID：a3cd2ea62d
- 源站分类：01_建筑室内空间设计

---
id: graphic-argument-name-default-0346
title: "人类演化3D信息图"
category: graphic
subcategory: "06_图文排版视觉传达"
aesthetic: null
tags: ["演化", "人类", "生物", "复古", "写实", "三维", "信息图", "石梯"]
recommended_models: []
recommended_params:
  aspect_ratio: "9:16"
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
{
  "type": "evolutionary timeline infographic",
  "instruction": "Using REFERENCE_0 as a structural base, transform the flat vector design into a highly realistic 3D infographic. Replace the smooth ramps with distinct stone steps and upgrade all organisms to photorealistic 3D models.",
  "style": {
    "background": "{argument name=\"background style\" default=\"vintage textured parchment paper\"}",
    "staircase": "{argument name=\"staircase material\" default=\"realistic textured stone blocks\"}",
    "subjects": "{argument name=\"organism style\" default=\"highly detailed photorealistic 3D renders\"}"
  },
  "layout": {
    "main_title": "{argument name=\"main title\" default=\"人类演化\"}",
    "sections": [
      {
        "position": "left sidebar",
        "count": 8,
        "labels": ["L0: 单细胞生命", "L1: 多细胞生物", "L2: 动物界", "L3: 脊索动物", "L4: 上陆革命", "L5: 哺乳纲", "L6: 人科演化", "L7: 智人纪元"]
      },
      {
        "position": "top right",
        "title": "获得的功能 / 失去的功能",
        "description": "Legend with plus and minus icons"
      },
      {
        "position": "bottom center",
        "title": "演化关键里程碑",
        "count": 6,
        "description": "Timeline with a silhouette graphic of 6 figures showing ape-to-human evolution"
      }
    ],
    "centerpiece": {
      "description": "Winding stone staircase with 25 numbered steps featuring specific organisms.",
      "count": 25,
      "notable_elements": [
        "Step 07: Jellyfish",
        "Step 09: Ammonite",
        "Step 10: Trilobite",
        "Step 24: Walking human",
        "Step 25: {argument name=\"future evolution concept\" default=\"glowing cosmic silhouette with a question mark\"}"
      ]
    }
  }
}

## 中文译文（源站提供）
{
  "type": "演化时间轴信息图",
  "instruction": "以 REFERENCE_0 作为结构基础，将平面矢量设计转化为高度逼真的 3D 信息图。将平滑的坡道替换为独特的石阶，并将所有生物升级为照片级真实的 3D 模型。",
  "style": {
    "background": "{argument name=\"background style\" default=\"复古纹理羊皮纸\"}",
    "staircase": "{argument name=\"staircase material\" default=\"逼真的纹理石块\"}",
    "subjects": "{argument name=\"organism style\" default=\"高度精细的照片级真实 3D 渲染\"}"
  },
  "layout": {
    "main_title": "{argument name=\"main title\" default=\"人类演化\"}",
    "sections": [
      {
        "position": "左侧边栏",
        "count": 8,
        "labels": ["L0: 单细胞生命", "L1: 多细胞生物", "L2: 动物界", "L3: 脊索动物", "L4: 上陆革命", "L5: 哺乳纲", "L6: 人科演化", "L7: 智人纪元"]
      },
      {
        "position": "右上角",
        "title": "获得的功能 / 失去的功能",
        "description": "带有加号和减号图标的图例"
      },
      {
        "position": "底部中心",
        "title": "演化关键里程碑",
        "count": 6,
        "description": "包含 6 个展示从猿到人演化剪影图形的时间轴"
      }
    ],
    "centerpiece": {
      "description": "蜿蜒的石阶，共有 25 个编号台阶，展示特定生物。",
      "count": 25,
      "notable_elements": [
        "第 07 阶: 水母",
        "第 09 阶: 菊石",
        "第 10 阶: 三叶虫",
        "第 24 阶: 直立行走的人类",
        "第 25 阶: {argument name=\"future evolution concept\" default=\"带有问号的发光宇宙剪影\"}"
      ]
    }
  }
}

## 来源备注
- 源站作者：知识猫图解
- 源站 UUID：CeD2ZAp1oS
- 源站分类：06_图文排版视觉传达

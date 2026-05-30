---
id: architecture-task-constraints-modification-0179
title: "高层建筑蓝调时刻氛围渲染"
category: architecture
subcategory: "01_建筑室内空间设计"
aesthetic: null
tags: ["城市", "建筑", "摩天楼", "傍晚", "蓝调", "车流", "夜景", "写字楼"]
recommended_models: 
  - banana-pro
recommended_params:
  aspect_ratio: "1:1"
  quality: null
  style_strength: null
sample_outputs: []
quality_tier: A
author: "ChunqiGuo02"
source: "Leader Prompt Gallery (https://www.leaderai.top/mid-api/lab/image_prompt/index.html)"
language: mixed
created_at: 2026-05-30
version: "1.0.0"
related_to: []
---

# 正文 prompt
{

  "task": "基于用户上传底图生成渲染图",

  "constraints": {

    "composition": "严格遵循参考图的构图和视角",

    "modification": "完全不要修改构图特征",

    "operation": "仅对原图进行渲染操作"

  },

  "input": {

    "base_image": "用户上传底图",

  },

  "output": {

    "type": "渲染图",

    "description": "保持原有构图不变的渲染效果图"

  },

  "style_requirements": {

    "image_style_analysis": {

      "theme_and_subject": [

        "现代商业建筑",

        "玻璃幕墙",

        "城市街景"

      ],

      "atmosphere_and_mood": [

        "现代都市",

        "繁华",

        "通透",

        "动感十足",

        "科技感"

      ],

      "color_palette": [

        "蓝调时刻 (Blue Hour)",

        "冷峻天蓝",

        "室内暖黄",

        "鲜红车轨",

        "强烈冷暖对比"

      ],

      "lighting_and_shadow": [

        "暮光自然光",

        "大面积内透光",

        "玻璃镜面反射",

        "流动的光轨"

      ],

      "art_style_and_technique": [

        "专业建筑摄影",

        "长曝光 (慢门)",

        "广角透视",

        "高解析度",

        "写实记录"

      ],

      "composition": [

        "低角度仰拍",

        "强烈的透视收敛线",

        "横向流动引导线",

        "动静结合",

        "硬朗几何切割"

      ]

    }

  }

}

## 来源备注
- 源站作者：阿真
- 源站 UUID：yu42q5oj36
- 源站分类：01_建筑室内空间设计

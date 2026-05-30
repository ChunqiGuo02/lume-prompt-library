---
id: misc-depth-texture-map-0191
title: "提取图片Depth深度贴图"
category: misc
subcategory: "11_图像编辑与修复增强"
aesthetic: null
tags: ["深度贴图", "灰度图", "男性", "肖像", "街道", "行人", "汽车", "眼镜"]
recommended_models: 
  - banana-pro
recommended_params:
  aspect_ratio: "4:3"
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

  "输入处理": {

    "操作类型": "格式转换",

    "源数据": "用户上传图片",

    "目标格式": "depth_texture"

  },

  "核心指令": {

    "转换目标": "生成深度贴图",

    "约束条件": {

      "结构保持": "完全不变",

      "允许修改": "仅深度数值",

      "禁止修改": ["几何结构", "构图", "比例", "纹理细节"]

    }

  },

  "输出要求": {

    "贴图类型": "depth_map",

    "质量等级": "high",

    "结构一致性": "100%"

  }

}

## 来源备注
- 源站作者：阿真
- 源站 UUID：Ith9ByBuPh
- 源站分类：11_图像编辑与修复增强

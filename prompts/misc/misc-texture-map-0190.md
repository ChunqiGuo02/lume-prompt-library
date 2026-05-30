---
id: misc-texture-map-0190
title: "提取图片AO环境光遮蔽贴图"
category: misc
subcategory: "11_图像编辑与修复增强"
aesthetic: null
tags: ["黑白", "肖像", "男性", "青年", "眼镜", "短发", "街景", "城市"]
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

    "目标格式": "ao_texture"

  },

  "核心指令": {

    "转换目标": "生成环境光遮蔽贴图",

    "约束条件": {

      "结构保持": "完全不变",

      "允许修改": "仅遮蔽强度",

      "禁止修改": ["几何结构", "构图", "比例", "纹理细节"]

    }

  },

  "输出要求": {

    "贴图类型": "ao_map",

    "质量等级": "high",

    "结构一致性": "100%"

  }

}

## 来源备注
- 源站作者：阿真
- 源站 UUID：traw5wi8Ep
- 源站分类：11_图像编辑与修复增强

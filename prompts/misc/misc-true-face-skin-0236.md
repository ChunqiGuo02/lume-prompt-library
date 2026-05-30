---
id: misc-true-face-skin-0236
title: "老照片高清修复与人像还原-2"
category: misc
subcategory: "11_图像编辑与修复增强"
aesthetic: null
tags: ["欧美女性", "老照片", "破损", "复古", "暖色调", "棕调", "肖像", "人像"]
recommended_models: 
  - banana-pro
recommended_params:
  aspect_ratio: "2:3"
  quality: null
  style_strength: null
sample_outputs: []
quality_tier: A
author: "ChunqiGuo02"
source: "Leader Prompt Gallery (https://www.leaderai.top/mid-api/lab/image_prompt/index.html)"
language: en
created_at: 2026-05-30
version: "1.0.0"
related_to: []
---

# 正文 prompt
{
  "task": "image-to-image restoration",
  "input_image": "output_from_prompt_1",
  "reference_image": {
    "type": "face_reference",
    "description": "Same face as damaged photo, identity must remain unchanged"
  },
  "restoration_settings": {
    "restore_face": true,
    "restore_skin_texture": true,
    "remove_damage": true,
    "preserve_expression": true,
    "preserve_pose": true
  },
  "image_settings": {
    "aspect_ratio": "2:3 portrait",
    "resolution": "8K ultra-HD",
    "color_mode": "natural warm color",
    "clarity": "high-end modern portrait"
  },
  "subject": {
    "pose": "unchanged from damaged photo",
    "expression": "same gentle smile",
    "details": "natural skin texture, realistic eyes, clean hair detail"
  },
  "lighting": {
    "type": "soft cinematic studio lighting",
    "quality": "even, flattering, modern"
  },
  "background": {
    "style": "clean neutral studio backdrop",
    "look": "soft bokeh, no texture damage"
  },
  "quality_targets": [
    "no scratches",
    "no folds",
    "no stains",
    "no blur",
    "no aging artifacts"
  ],
  "realism": "photorealistic modern portrait photography",
  "negative_prompt": [
    "face alteration",
    "identity change",
    "over-smoothing",
    "plastic skin",
    "artistic illustration look"
  ]
}

## 中文译文（源站提供）
```json
{
  "task": "图像到图像修复",
  "input_image": "output_from_prompt_1",
  "reference_image": {
    "type": "面部参考",
    "description": "与受损照片中的面部相同，身份必须保持不变"
  },
  "restoration_settings": {
    "restore_face": true,
    "restore_skin_texture": true,
    "remove_damage": true,
    "preserve_expression": true,
    "preserve_pose": true
  },
  "image_settings": {
    "aspect_ratio": "2:3 肖像",
    "resolution": "8K 超高清",
    "color_mode": "自然暖色调",
    "clarity": "高端现代肖像"
  },
  "subject": {
    "pose": "与受损照片保持不变",
    "expression": "相同的温柔微笑",
    "details": "自然肤质，逼真的眼睛，清晰的发丝细节"
  },
  "lighting": {
    "type": "柔和电影工作室灯光",
    "quality": "均匀、讨人喜欢、现代"
  },
  "background": {
    "style": "干净中性工作室背景",
    "look": "柔和散景，无纹理损坏"
  },
  "quality_targets": [
    "无划痕",
    "无折痕",
    "无污渍",
    "无模糊",
    "无老化痕迹"
  ],
  "realism": "逼真的现代肖像摄影",
  "negative_prompt": [
    "面部改变",
    "身份改变",
    "过度平滑",
    "塑料皮肤",
    "艺术插画效果"
  ]
}
```

## 来源备注
- 源站作者：Johnn
- 源站 UUID：ZMo5B0zjDj
- 源站分类：11_图像编辑与修复增强

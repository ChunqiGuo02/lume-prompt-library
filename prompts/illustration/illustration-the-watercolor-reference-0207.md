---
id: illustration-the-watercolor-reference-0207
title: "精准复刻人脸的水墨融合艺术肖像"
category: illustration
subcategory: "07_艺术插画创意风格"
aesthetic: null
tags: ["水彩", "水墨", "手绘", "女性", "肖像", "坐姿", "传统", "服饰"]
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
  "prompt": "Use the uploaded reference image to **preserve 100% of the facial features, identity, age, skin tone, and expression** of the woman. Do not alter facial structure or proportions. Create a **fine-art ink and watercolor fusion illustration** with realistic facial likeness. The face is rendered with soft watercolor tones, while contours, eyes, hair strands, and fabric edges are defined using expressive black ink linework. Hair follows the exact reference, loosely styled with natural flyaway strands. Clothing: traditional or elegant attire inspired by the reference, rendered in muted watercolor shades. Background: abstract ink splashes and watercolor blooms, with controlled negative space and organic paper texture. Composition slightly off-center for an artistic editorial feel. Visible hand-drawn sketch lines, flowing ink strokes, layered watercolor washes, high-detail, museum-quality illustration.",
  "negative_prompt": "blurry, low quality, deformed, extra limbs, bad anatomy, watermark, text overlay, anime, cartoon, photorealistic, overexposed, underexposed, ugly face, bad hands, face altered, identity changed, flat colors, digital plastic look",
  "parameters": {
    "steps": 50,
    "cfg_scale": 7.0,
    "sampler": "Euler a or DPM++ 2M Karras",
    "strength": 0.52,
    "noise": 0.28,
    "width": 832,
    "height": 1216,
    "aspect_ratio": "2:3"
  },
  "usage_instructions": "Upload your image in img2img or reference mode. Keep strength around 0.5–0.55 to ensure **exact face matching** while applying ink-and-watercolor artistic style. Increase slightly only for background variation."
}

## 中文译文（源站提供）
```json
{
  "prompt": "使用上传的参考图片，**100% 保留**该女性的**面部特征、身份、年龄、肤色和表情**。请勿改变面部结构或比例。创作一幅**融合了水墨和水彩的艺术插画**，面部特征需逼真。面部以柔和的水彩色调呈现，而轮廓、眼睛、发丝和衣物边缘则使用富有表现力的黑色墨线勾勒。发型需与参考图片完全一致，松散自然，带有零星的飞发。服装：受参考图片启发的传统或优雅服饰，以柔和的水彩色调呈现。背景：抽象的水墨飞溅和水彩晕染，留有受控的负空间和有机的纸张纹理。构图略微偏离中心，以营造艺术编辑感。可见手绘草图线条、流畅的墨迹、分层的水彩晕染、高细节、博物馆品质的插画。",
  "negative_prompt": "模糊、低质量、变形、多余肢体、解剖结构错误、水印、文字叠加、动漫、卡通、照片级真实感、过曝、欠曝、丑陋的面部、糟糕的手部、面部改变、身份改变、平面色彩、数字塑料感",
  "parameters": {
    "steps": 50,
    "cfg_scale": 7.0,
    "sampler": "Euler a or DPM++ 2M Karras",
    "strength": 0.52,
    "noise": 0.28,
    "width": 832,
    "height": 1216,
    "aspect_ratio": "2:3"
  },
  "usage_instructions": "在 img2img 或参考模式下上传您的图片。将强度保持在 0.5–0.55 左右，以确保**精确匹配面部**，同时应用水墨水彩艺术风格。仅在需要背景变化时略微增加强度。"
}
```

## 来源备注
- 源站作者：Gagan Singh
- 源站 UUID：Wpt8n89Vd4
- 源站分类：07_艺术插画创意风格

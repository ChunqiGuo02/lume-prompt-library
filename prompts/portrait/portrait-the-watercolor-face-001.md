---
id: "portrait-the-watercolor-face-001"
title: "星空水彩肖像生成：保留人脸细节，融合星云纹理"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["水彩", "肖像", "星空", "星系", "星云", "男性", "胡须", "梦幻"]
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
  "prompt": "Use the uploaded reference image to **preserve 100% of the facial features, identity, age, skin tone, and expression** of the person. Do not alter facial structure or proportions. Create a **cosmic galaxy watercolor portrait** where the face remains soft and realistic but is gently merged with nebula textures. Hair follows the exact reference style, with subtle stardust highlights woven through the strands. Clothing: simple dark or neutral attire that fades into swirling galaxy patterns. Background: deep space filled with vibrant nebulas, glowing stars, floating light particles, and watercolor galaxies in shades of indigo, teal, violet, and cosmic blue. Soft ethereal rim light outlines the silhouette. Fine pencil sketch lines mixed with watercolor bleeds, smooth gradients, dreamy depth, cinematic and artistic masterpiece quality.",
  "negative_prompt": "blurry, low quality, deformed, extra limbs, bad anatomy, watermark, text overlay, anime, cartoon, overexposed, underexposed, ugly face, bad hands, face altered, identity changed, harsh lighting, plastic skin, flat colors",
  "parameters": {
    "steps": 50,
    "cfg_scale": 7.2,
    "sampler": "Euler a or DPM++ 2M Karras",
    "strength": 0.53,
    "noise": 0.28,
    "width": 832,
    "height": 1216,
    "aspect_ratio": "2:3"
  },
  "usage_instructions": "Upload your image in img2img or reference mode. Keep strength around 0.5–0.55 to keep the face **100% matching**, while blending the portrait into a cosmic watercolor universe."
}

## 中文译文（源站提供）
```json
{
  "prompt": "使用上传的参考图片，**100% 保留人物的面部特征、身份、年龄、肤色和表情**。不要改变面部结构或比例。创作一幅**宇宙星系水彩肖像**，其中脸部保持柔和逼真，但与星云纹理柔和融合。头发遵循精确的参考风格，发丝中编织着微妙的星尘高光。服装：简单的深色或中性服装，融入旋转的星系图案。背景：深邃的太空，充满活力的星云、闪烁的星星、漂浮的光粒子，以及靛蓝、青色、紫罗兰和宇宙蓝色调的水彩星系。柔和的空灵轮廓光勾勒出剪影。精细的铅笔素描线条与水彩晕染、平滑的渐变、梦幻般的景深、电影般的艺术杰作品质。",
  "negative_prompt": "模糊、低质量、变形、多余肢体、糟糕的解剖结构、水印、文字叠加、动漫、卡通、过曝、欠曝、丑陋的脸、糟糕的手、脸部改变、身份改变、刺眼的灯光、塑料皮肤、扁平的颜色",
  "parameters": {
    "steps": 50,
    "cfg_scale": 7.2,
    "sampler": "Euler a or DPM++ 2M Karras",
    "strength": 0.53,
    "noise": 0.28,
    "width": 832,
    "height": 1216,
    "aspect_ratio": "2:3"
  },
  "usage_instructions": "在 img2img 或参考模式下上传您的图片。将强度保持在 0.5–0.55 左右，以使面部**100% 匹配**，同时将肖像融入宇宙水彩世界。"
}
```

## 来源备注
- 源站作者：Gagan Singh
- 源站 UUID：ZKIw631gBm
- 源站分类：05_人物肖像与写实摄影

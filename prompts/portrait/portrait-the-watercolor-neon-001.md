---
id: "portrait-the-watercolor-neon-001"
title: "赛博朋克水彩风格人物肖像生成提示词"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["赛博朋克", "水彩", "插画", "霓虹", "都市", "夜景", "男性", "酒杯"]
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
  "prompt": "Use the uploaded reference image to **preserve 100% of the facial features, identity, age, skin tone, and expression** of the person. Do not change facial proportions. Create a **neon cyberpunk watercolor fusion illustration**: face painted softly in watercolor while surrounded by glowing neon light effects. Hair follows the exact reference style with subtle luminous highlights. Clothing: futuristic urban attire (sleek jacket, metallic or holographic fabric accents) rendered with painterly strokes. Background: dark night city with glowing neon signs, holograms, light streaks, digital rain, and watercolor splashes blending into a cyberpunk skyline. Cool color palette of electric blue, magenta, violet, and teal. Dramatic rim lighting around the silhouette, soft glow on skin, fine sketch lines mixed with watercolor bleeds. High-detail, cinematic, artistic, futuristic masterpiece quality.",
  "negative_prompt": "blurry, low quality, deformed, extra limbs, bad anatomy, watermark, text overlay, anime, cartoon, overexposed, underexposed, ugly face, bad hands, face altered, identity changed, flat colors, plastic skin, harsh outlines",
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
  "usage_instructions": "Upload your image in img2img or reference mode. Keep strength around 0.5–0.55 for **perfect face matching** while transforming the scene into a neon cyberpunk watercolor world."
}

## 中文译文（源站提供）
```json
{
  "prompt": "使用上传的参考图片，**100% 保留人物的面部特征、身份、年龄、肤色和表情**。不要改变面部比例。创作一幅**霓虹赛博朋克水彩融合插画**：面部以柔和的水彩绘制，周围环绕着发光的霓虹灯效果。发型与参考图片完全一致，带有微妙的发光高光。服装：未来都市服装（时尚夹克，金属或全息面料点缀），以绘画笔触呈现。背景：黑暗的夜城，带有发光的霓虹灯牌、全息图、光线轨迹、数字雨和水彩飞溅，融入赛博朋克天际线。冷色调，包括电光蓝、洋红、紫罗兰和青色。轮廓周围有戏剧性的边缘光，皮肤上有柔和的光晕，精细的素描线条与水彩晕染混合。高细节、电影感、艺术性、未来主义杰作品质。",
  "negative_prompt": "模糊、低质量、变形、多余肢体、糟糕的解剖结构、水印、文字叠加、动漫、卡通、曝光过度、曝光不足、丑陋的脸、糟糕的手、面部改变、身份改变、扁平的颜色、塑料皮肤、生硬的轮廓",
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
  "usage_instructions": "在 img2img 或参考模式下上传您的图片。将强度保持在 0.5–0.55 左右，以实现**完美的面部匹配**，同时将场景转换为霓虹赛博朋克水彩世界。"
}
```

## 来源备注
- 源站作者：Gagan Singh
- 源站 UUID：GURJcHK406
- 源站分类：05_人物肖像与写实摄影

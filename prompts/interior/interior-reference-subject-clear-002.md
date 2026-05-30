---
id: "interior-reference-subject-clear-002"
title: "东京酒店深夜和风浴袍写真"
category: interior
subcategory: "05_人物肖像与写实摄影"
aesthetic: japanese-zen-garden
tags: ["电影感", "写实", "胶片", "酒店", "浴室", "暖色调", "女性", "丝绸"]
recommended_models: 
  - banana-pro
recommended_params:
  aspect_ratio: "3:4"
  quality: null
  style_strength: null
sample_outputs: []
quality_tier: A
author: "ChunqiGuo02"
source: "Leader Prompt Gallery (https://www.leaderai.top/mid-api/lab/image_prompt/index.html)"
language: en
created_at: 2026-05-30
version: "1.0.0"
related_to: ["interior-reference-subject-clear-001"]
---

# 正文 prompt
{
  "image_generation_request": {
    "title": "Cinematic Tokyo Hotel Portrait",
    "version": "2.0",
    "mode": "photorealistic_portrait",
    "reference_settings": {
      "use_reference_image": true,
      "reference_type": "face_likeness",
      "strength": 0.85
    },
    "prompt_components": {
      "subject": {
        "description": "Precise facial likeness of reference subject, clear and natural skin.",
        "pose": "Standing, relaxed pose, holding a clear glass of liquid.",
        "expression": "Calm and introspective, gaze directed slightly to the side (not at camera)."
      },
      "attire": {
        "item": "Dark silk kimono robe with a deep V-neckline revealing collarbones.",
        "details": "Exquisite Japanese embroidery of flowers and koi carp in gold, red, and muted green tones."
      },
      "environment": {
        "location": "Dimly lit, luxurious bathroom.",
        "background_elements": "Large mirror behind subject revealing a soft, unobtrusive reflection of their figure.",
        "atmosphere": "Tokyo hotel aesthetic, quiet late-night mood."
      },
      "lighting": {
        "type": "Warm tungsten light, moody shadows.",
        "effects": "Cinematic glow, dramatic contrast."
      },
      "technical_photography": {
        "camera": "35mm film photography",
        "lens_settings": "f/1.8 aperture, shallow depth of field.",
        "texture": "Soft grain, slight film noise, high dynamic range.",
        "style": "High-end fashion shoot, luxury editorial style, ultra-detail."
      }
    },
    "concatenated_prompt": "Ultra-cinematic low-light portrait of the subject standing in a dimly lit, luxurious bathroom, a large mirror behind them revealing a soft, unobtrusive reflection. They wear a dark silk kimono robe with a deep V-neckline, revealing collarbones and upper chest, adorned with exquisite Japanese embroidery of flowers and koi carp in gold, red, and muted green tones. Clear and natural skin, calm and introspective expression, gaze directed slightly to the side. Holding a clear glass of liquid, relaxed pose. Warm tungsten light, moody shadows, cinematic glow, shallow depth of field. Aesthetic of a high-end fashion shoot, Tokyo hotel atmosphere, quiet late-night mood. 35mm film effect, f/1.8 aperture, soft grain, natural skin tones, dramatic contrast, realistic reflections, slight film noise, photorealism, ultra-detail, high dynamic range, professional fashion photography, luxury editorial style.",
    "negative_prompt": "direct eye contact, bright daylight, harsh fluorescent light, flat lighting, smiling, stiff pose, messy background, distorted reflection, bad anatomy, distorted hands, missing fingers, extra limbs, cartoon, illustration, 3d render, plastic skin, overexposed, low resolution, blurry.",
    "parameters": {
      "aspect_ratio": "2:3",
      "sampler": "DPM++ 2M Karras",
    }

## 中文译文（源站提供）
```json
{
  "image_generation_request": {
    "title": "东京酒店电影感肖像",
    "version": "2.0",
    "mode": "photorealistic_portrait",
    "reference_settings": {
      "use_reference_image": true,
      "reference_type": "face_likeness",
      "strength": 0.85
    },
    "prompt_components": {
      "subject": {
        "description": "参考对象的精确面部相似度，皮肤清晰自然。",
        "pose": "站立，姿态放松，手持一杯透明液体。",
        "expression": "平静而内省，目光略微侧向一边（不看镜头）。"
      },
      "attire": {
        "item": "深色丝绸和服长袍，深 V 领口露出锁骨。",
        "details": "精致的日式刺绣，金色、红色和柔和的绿色调的花卉和锦鲤图案。"
      },
      "environment": {
        "location": "光线昏暗的豪华浴室。",
        "background_elements": "主体身后有一面大镜子，映出其柔和、不显眼的倒影。",
        "atmosphere": "东京酒店美学，宁静的深夜氛围。"
      },
      "lighting": {
        "type": "暖钨丝灯光， moody 阴影。",
        "effects": "电影般的光晕",
        "contrast": "戏剧性对比。"
      },
      "technical_photography": {
        "camera": "35mm 胶片摄影",
        "lens_settings": "f/1.8 光圈，浅景深。",
        "texture": "柔和的颗粒感，轻微的胶片噪点，高动态范围。",
        "style": "高端时尚摄影，奢华编辑风格，超细节。"
      }
    },
    "concatenated_prompt": "主体站在光线昏暗的豪华浴室中，身后有一面大镜子，映出其柔和、不显眼的倒影，拍摄一张超电影感的低光肖像。他们身穿深色丝绸和服长袍，深 V 领口露出锁骨和上胸部，上面饰有精致的日式刺绣，金色、红色和柔和的绿色调的花卉和锦鲤图案。皮肤清晰自然，表情平静而内省，目光略微侧向一边。手持一杯透明液体，姿态放松。暖钨丝灯光，moody 阴影，电影般的光晕，浅景深。高端时尚摄影美学，东京酒店氛围，宁静的深夜心情。35mm 胶片效果，f/1.8 光圈，柔和颗粒感，自然肤色，戏剧性对比，逼真倒影，轻微胶片噪点，写实主义，超细节，高动态范围，专业时尚摄影，奢华编辑风格。",
    "negative_prompt": "直视镜头，明亮日光，刺眼荧光灯，平面照明，微笑，僵硬姿势，杂乱背景，扭曲倒影，糟糕解剖结构，扭曲的手，缺失手指，多余肢体，卡通，插画，3D 渲染，塑料皮肤，过曝，低分辨率，模糊。",
    "parameters": {
      "aspect_ratio": "2:3",
      "sampler": "DPM++ 2M Karras"
    }
  }
}
```

## 来源备注
- 源站作者：Melisa♡
- 源站 UUID：B91M43rb0z
- 源站分类：05_人物肖像与写实摄影

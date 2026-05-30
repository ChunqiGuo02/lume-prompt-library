---
id: "portrait-restoration-prompt-professional-001"
title: "老照片高清修复与智能还原"
category: portrait
subcategory: "11_图像编辑与修复增强"
aesthetic: null
tags: ["老照片", "裂纹", "破损", "黑白", "复古", "怀旧", "儿童", "合影"]
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
language: en
created_at: 2026-05-30
version: "1.0.0"
related_to: []
---

# 正文 prompt
{ "task": "image_restoration_upscale", "positive_prompt":
"Restore and enhance the provided image. Preserve original identity, facial structure, proportions and composition. High-fidelity photo restoration, ultra-realistic, natural skin texture, accurate details, professional photographic look. 4K output, sharp but natural focus, modern cinematic lighting, subtle volumetric lighting, professional color grading, depth of field, HDR. Shot on Arri Alexa, raw photo aesthetic, masterpiece.",
"negative_prompt": "Creative reinterpretation, style change, identity alteration, face reshaping, exaggerated features, cartoonish, painting, illustration, over-sharpening, plastic skin, blur, noise, film grain, jpeg artifacts, distortion, bad anatomy, overexposed, underexposed, washed out colors.", "parameters":
{ "steps": 30, "cfg_scale": 6.5, "denoising_strength": 0.45,
"upscaler": "4x_NMKD_Siax_200k", "target_resolution": "4K" } }

## 中文译文（源站提供）
```json
{
  "task": "image_restoration_upscale",
  "positive_prompt": "修复并增强所提供的图像。保留原始特征、面部结构、比例和构图。高保真照片修复，超现实，自然的皮肤纹理，精确的细节，专业的摄影外观。4K 输出，锐利而自然的焦点，现代电影级照明，微妙的体积光，专业的色彩分级，景深，HDR。使用 Arri Alexa 拍摄，原始照片美学，杰作。",
  "negative_prompt": "创意再诠释，风格改变，特征改变，面部重塑，夸张的特征，卡通化，绘画，插图，过度锐化，塑料皮肤，模糊，噪点，胶片颗粒，jpeg 伪影，失真，糟糕的解剖结构，过曝，欠曝，褪色。",
  "parameters": {
    "steps": 30,
    "cfg_scale": 6.5,
    "denoising_strength": 0.45,
    "upscaler": "4x_NMKD_Siax_200k",
    "target_resolution": "4K"
  }
}
```

## 来源备注
- 源站作者：WasifAI
- 源站 UUID：EbJeF3zmcH
- 源站分类：11_图像编辑与修复增强

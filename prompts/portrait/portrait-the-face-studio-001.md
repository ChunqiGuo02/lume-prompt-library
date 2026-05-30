---
id: "portrait-the-face-studio-001"
title: "精准换脸：保留原图构图与光影的超写实肖像"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["写实", "肖像", "女性", "银发", "蓝眼", "红色", "黑色", "西装"]
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
related_to: []
---

# 正文 prompt
{
  "Ultra-realistic studio portrait of a young woman in a three-quarter profile pose, head slightly turned toward the camera. She is wearing a black textured blazer over a dark top with minimal accessories, including a small hoop earring. Background is a solid deep red studio backdrop with a smooth gradient. Lighting is soft, diffused studio lighting with gentle shadows and even skin tones. Replace ONLY the face and hairstyle using the reference image. Keep body, pose, clothing, background, lighting, camera angle, framing, and image quality exactly the same. Ensure the new face matches the original head size, angle, and expression with seamless skin blending and natural hair integration. Photorealistic, cinematic quality, sharp focus on eyes, shallow depth of field.",
  "negative_prompt": "face distortion, wrong head size, mismatched skin tone, altered pose, changed clothing, different background, lighting mismatch, blurry face, artifacts, unrealistic hair, over-smoothing",
  "style": "photorealistic",
  "camera": {
    "shot": "close-up portrait",
    "angle": "three-quarter view",
    "depth_of_field": "shallow"
  },
  "lighting": "soft studio lighting",
  "background": "solid deep red",
  "quality": "high resolution",
  "face_swap": {
    "enabled": true,
    "change_only": ["face", "hairstyle"],
    "preserve": ["pose", "body", "clothing", "background", "lighting", "camera_angle"]
  }
}

## 中文译文（源站提供）
```json
{
  "Ultra-realistic studio portrait of a young woman in a three-quarter profile pose, head slightly turned toward the camera. She is wearing a black textured blazer over a dark top with minimal accessories, including a small hoop earring. Background is a solid deep red studio backdrop with a smooth gradient. Lighting is soft, diffused studio lighting with gentle shadows and even skin tones. Replace ONLY the face and hairstyle using the reference image. Keep body, pose, clothing, background, lighting, camera angle, framing, and image quality exactly the same. Ensure the new face matches the original head size, angle, and expression with seamless skin blending and natural hair integration. Photorealistic, cinematic quality, sharp focus on eyes, shallow depth of field.": "一张年轻女性的超写实影棚肖像照，她呈四分之三侧身姿势，头部略微转向镜头。她身穿黑色纹理西装外套和深色上衣，配饰极简，包括一枚小耳环。背景是纯深红色影棚背景布，带有平滑的渐变效果。光线是柔和、漫射的影棚灯光，带有轻柔的阴影和均匀的肤色。仅使用参考图像替换面部和发型。保持身体、姿势、服装、背景、光线、拍摄角度、构图和图像质量完全不变。确保新面部与原始头部大小、角度和表情匹配，皮肤融合无缝，发型自然融合。照片级写实，电影级画质，眼睛对焦锐利，景深较浅。",
  "negative_prompt": "面部扭曲, 头部大小错误, 肤色不匹配, 姿势改变, 服装改变, 背景不同, 光线不匹配, 面部模糊, 伪影, 不真实的头发, 过度平滑",
  "style": "写实",
  "camera": {
    "shot": "特写肖像",
    "angle": "四分之三视角",
    "depth_of_field": "浅景深"
  },
  "lighting": "柔和影棚光",
  "background": "纯深红色",
  "quality": "高分辨率",
  "face_swap": {
    "enabled": true,
    "change_only": ["face", "hairstyle"],
    "preserve": ["pose", "body", "clothing", "background", "lighting", "camera_angle"]
  }
}
```

## 来源备注
- 源站作者：K
- 源站 UUID：PKkdfv1dIB
- 源站分类：05_人物肖像与写实摄影

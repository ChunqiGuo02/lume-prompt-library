---
id: "architecture-the-hair-face-001"
title: "风中飘逸的诗意肖像"
category: architecture
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["肖像", "动态", "浅蓝", "刺绣", "薄纱", "风", "黑发", "优雅"]
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
  "type": "image_generation_prompt",
  "output_goal": "Create a cinematic close portrait where wind-driven hair and flowing fabric actively shape the moment. The scene must feel alive, captured mid-motion, with the face and hair as the emotional center.",
  "subject": {
    "face": "refined facial structure, sharp clarity, expressive eyes looking toward the viewer",
    "expression": "soft yet intense, aware, present",
    "skin": "natural tone with realistic texture, no artificial smoothing"
  },
  "hair": {
    "style": "loose, natural hair",
    "motion": "strong directional wind pushing hair forward and sideways",
    "detail": "individual strands clearly visible, crossing near the eyes, cheek, and lips",
    "priority": "hair flow must dominate the foreground and interact with the face"
  },
  "wardrobe": {
    "dress": "{"dress color" "light blue"} embroidered gown with delicate floral details",
    "dupatta": "sheer fabric sweeping across the frame",
    "motion": "fabric pulled in the same wind direction as the hair, layered and dynamic"
  },
  "pose": {
    "body": "mid-turn, graceful twist",
    "head": "turned toward camera, close and intimate"
  },
  "environment": {
    "setting": "elegant architectural exterior",
    "background": "softly blurred, unobtrusive"
  },
  "lighting": {
    "type": "natural daylight",
    "quality": "soft cinematic highlights emphasizing hair strands and facial contours"
  },
  "camera": {
    "framing": "tight mid-shot to close portrait",
    "distance": "subject very close to camera",
    "depth_of_field": "shallow, creamy separation"
  },
  "style": "cinematic poetic realism with dominant motion",
  "negative_prompt": "calm hair, floating hair, static strands, distant framing, stiff pose, beauty filters, HDR, anime look"
}

## 中文译文（源站提供）
```json
{
  "type": "image_generation_prompt",
  "output_goal": "创作一幅电影般的特写肖像，其中被风吹拂的头发和飘逸的织物共同塑造出这一瞬间。画面必须充满生机，捕捉到运动中的状态，以面部和头发作为情感中心。",
  "subject": {
    "face": "精致的五官结构，清晰锐利，富有表现力的眼睛看向观者",
    "expression": "柔和而深邃，警觉，专注",
    "skin": "自然的肤色，真实的纹理，无人工平滑处理"
  },
  "hair": {
    "style": "蓬松自然的头发",
    "motion": "强劲的定向风将头发向前和向侧面吹拂",
    "detail": "发丝清晰可见，在眼睛、脸颊和嘴唇附近交错",
    "priority": "发丝的流动必须主导前景并与面部互动"
  },
  "wardrobe": {
    "dress": "{\"dress color\" \"light blue\"} 刺绣礼服，带有精致的花卉细节",
    "dupatta": "薄纱织物掠过画面",
    "motion": "织物与头发在同一风向中飘动，富有层次感和动感"
  },
  "pose": {
    "body": "转身中，优雅的扭动",
    "head": "头部转向镜头，近距离且亲密"
  },
  "environment": {
    "setting": "优雅的建筑外部",
    "background": "柔和模糊，不显突兀"
  },
  "lighting": {
    "type": "自然日光",
    "quality": "柔和的电影感高光，强调发丝和面部轮廓"
  },
  "camera": {
    "framing": "紧凑的中景到特写肖像",
    "distance": "主体非常接近镜头",
    "depth_of_field": "浅景深，奶油般的分离效果"
  },
  "style": "电影般的诗意现实主义，以动感为主导",
  "negative_prompt": "平静的头发，漂浮的头发，静态的发丝，远距离构图，僵硬的姿势，美颜滤镜，HDR，动漫风格"
}
```

## 来源备注
- 源站作者：Saul Goodman
- 源站 UUID：gys4IorMw3
- 源站分类：05_人物肖像与写实摄影

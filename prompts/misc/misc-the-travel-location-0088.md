---
id: misc-the-travel-location-0088
title: "生成个性化极地旅行手账"
category: misc
subcategory: "08_图像分析信息拆解"
aesthetic: null
tags: ["旅行", "拼贴", "手账", "雪景", "极光", "极夜", "红色", "清冷"]
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
language: mixed
created_at: 2026-05-30
version: "1.0.0"
related_to: []
---

# 正文 prompt
按照这个思路简单调整了一下。经纬度改成输入地名！
然后希望模型帮我手写一些心情和记录一下。
也改成了，根据我上传的人物五官特征去生成图片！
{
"scene_location": "{地名、经纬度均可}",
"subject": {
"source_face": "Use the uploaded image. Reconstruct the person's facial features with 100% accuracy.",
"identity_style": "Make the character naturally blend into the environment as if traveling at this location."
},
"environment_and_time": {
"use_real_local_time": true,
"use_real_weather": true,
"mood_sync": "Match the lighting, temperature, and atmosphere of the location's real-time weather."
},
"wardrobe": {
"style": "Model should automatically choose a travel-friendly outfit suitable for the current weather of the location.",
"adaptive": true
},
"photo_album_style": {
"layout": "Fashionable, irregular layout similar to modern travel zines and creative photo journals.",
"composition_types": [
"square photos",
"vertical photos",
"horizontal photos",
"full-bleed edge-to-edge images",
"collaged overlapping images",
"images with torn-paper edges",
"seamlessly blended photos"
],
"arrangement": "Organic, asymmetrical, stylish, mixed-media scrapbook aesthetics."
},
"handwritten_notes": {
"style": "Blue + red pen handwritten notes",
"language_mix": "Casual Chinese & English mixed handwriting",
"content_generation": "AI should analyze each image and write short vlog-style captions that match the mood, weather, moment, and experience — like a personal travel diary.",
"tone": "Playful, intimate, reflective, simple travel impressions. Include short descriptions, feelings, and mini travel observations."
},
"photographic_style": {
"type": "Highly realistic travel photography",
"camera_behavior": "Match real travel photo sensations — candid, natural, atmospheric.",
"integration": "Make the person appear genuinely present at the location (lighting, shadows, reflections, environment response)."
},
"output": {
"format": "Travel photo album series",
"ratio": "Mixed ratios (not fixed)",
"sequence": "Multiple pages or spreads forming a complete stylish photo journal."
}
}

## 中文译文（源站提供）
{
  "scene_location": "{地名, 经纬度（可选）}",
  "subject": {
    "source_face": "使用上传的图片，以100%的准确度重建人物的面部特征。",
    "identity_style": "让角色自然地融入环境，仿佛真的身处该地点。"
  },
  "environment_and_time": {
    "use_real_local_time": true,
    "use_real_weather": true,
    "mood_sync": "使图片中的光线、温度和氛围与实际地点的实时天气相匹配。"
  },
  "wardrobe": {
    "style": "模型应根据当前地点的天气自动选择适合旅行的服装。",
    "adaptive": true
  },
  "photo_album_style": {
    "layout": "时尚、不规则的布局，类似于现代旅行杂志和创意照片日记。",
    "composition_types": [
      "方形照片",
      "竖版照片",
      "横版照片",
      "全屏边缘对齐的照片",
      "拼贴式重叠照片",
      "边缘有撕裂痕迹的照片",
      "无缝融合的照片"
    ],
    "arrangement": "有机、不对称、时尚的混合媒体剪贴簿风格。"
  },
  "handwritten_notes": {
    "style": "用蓝色和红色笔书写的手写笔记",
    "language_mix": "随意的中英文混合书写",
    "content_generation": "AI应分析每张照片，并撰写符合当时心情、天气、场景和体验的短篇vlog风格的文字说明——就像个人旅行日记一样。",
    "tone": "轻松愉快、亲切自然、富有反思性的旅行感悟，包括简短的描述、感受和旅行观察。"
  },
  "photographic_style": {
    "type": "高度真实的旅行摄影",
    "camera_behavior": "模拟真实的旅行摄影效果——自然、真实、富有氛围感。",
    "integration": "让人物在照片中看起来仿佛真的存在于该地点（包括光线、阴影、反射和环境的互动）。"
  },
  "output": {
    "format": "旅行照片相册系列",
    "ratio": "多种比例（不固定）",
    "sequence": "多页或跨页的内容构成一本完整的时尚照片日记。"
  }
}
```

## 来源备注
- 源站作者：虎小象
- 源站 UUID：XMJZIZ21Gw
- 源站分类：08_图像分析信息拆解

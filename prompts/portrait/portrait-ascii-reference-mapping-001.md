---
id: "portrait-ascii-reference-mapping-001"
title: "ASCII艺术肖像生成器"
category: portrait
subcategory: "04_创意脑洞特效合成"
aesthetic: null
tags: ["字符画", "人像", "暖色调", "黑色", "竖版", "高清", "强对比", "艺术"]
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
  "style": "full_ascii_portrait",
  "canvas": {
    "background_color": "black",
    "aspect_ratio": "vertical"
  },
  "subject": {
    "reference": "Face_of_uploaded_reference_image_person",
    "pose": "front_view",
    "lighting": "soft_direct_light",
  },
  "ascii_rendering": {
    "character_set": ["f", "r", "i", "d", "a"],
    "color_mapping": "warm_mexican_palette",
    "brightness_mapping": "heavier_letters_for_highlights_lighter_for_shadows",
    "resolution": "very_high"
  },
  "effects": {
    "contrast": "strong",
  }
}

## 中文译文（源站提供）
{
"style": "完整ASCII肖像",
"canvas": {
"background_color": "黑色",
"aspect_ratio": "垂直"
},
"subject": {
"reference": "上传参考图像人物的面部",
"pose": "正面视图",
"lighting": "柔和直射光"
},
"ascii_rendering": {
"character_set": ["f", "r", "i", "d", "a"],
"color_mapping": "温暖的墨西哥调色板",
"brightness_mapping": "高光部分使用较粗的字母，阴影部分使用较细的字母",
"resolution": "非常高"
},
"effects": {
"contrast": "强"
}
}

## 来源备注
- 源站作者：NanoBanana_labs
- 源站 UUID：2ab0445349
- 源站分类：04_创意脑洞特效合成

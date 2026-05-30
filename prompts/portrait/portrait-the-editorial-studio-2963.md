---
id: portrait-the-editorial-studio-2963
title: "黑白时尚人像精修"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["黑白", "时尚", "女性", "西装", "皮鞋", "椅子", "极简", "优雅"]
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
  "type": "image_edit_prompt",
  "style": "black-and-white, cinematic, high-fashion editorial",
  "identity_preservation": {
    "use_attached_image": true,
    "alter_face": false,
    "notes": "Preserve the woman’s facial features, proportions, hairstyle, and expression exactly as in the original image."
  },
  "subject": {
    "gender": "female",
    "wardrobe": {
      "outfit": "{"outfit" "tailored dark suit with sharp, clean lines"}",
      "footwear": "polished black shoes"
    },
    "pose": {
      "seating": "sitting on a simple modern chair",
      "posture": "leaning slightly forward",
      "hands": "clasped together",
      "expression": "introspective and confident"
    }
  },
  "environment": {
    "location": "minimalist fashion studio",
    "background": {
      "color": "plain smooth gray",
      "style": "clean and distraction-free"
    }
  },
  "lighting": {
    "type": "controlled studio lighting",
    "quality": "soft and sculpted",
    "effects": [
      "defined shadows",
      "highlighted facial structure",
      "enhanced fabric texture"
    ]
  },
  "color_grading": {
    "mode": "black and white",
    "contrast": "high",
    "tone": "elegant, timeless"
  },
  "composition": {
    "crop": "vertical 4:5",
    "focus": "subject-centered",
    "style": "cinematic editorial portrait"
  },
  "quality": {
    "realism": "highly realistic",
    "detail_level": "fine texture detail in skin and clothing"
  },
  "output_goal": "Transform the original image into a refined, powerful black-and-white editorial portrait of a woman in a minimalist studio, preserving her identity while emphasizing elegance, confidence, and timeless style."
}

## 中文译文（源站提供）
```json
{
  "type": "image_edit_prompt",
  "style": "黑白、电影感、时尚杂志风格",
  "identity_preservation": {
    "use_attached_image": true,
    "alter_face": false,
    "notes": "精确保留原图中女性的面部特征、比例、发型和表情。"
  },
  "subject": {
    "gender": "女性",
    "wardrobe": {
      "outfit": "{\"outfit\" \"剪裁合身、线条利落的深色西装\"}",
      "footwear": "擦亮的黑色皮鞋"
    },
    "pose": {
      "seating": "坐在简约的现代椅子上",
      "posture": "身体略微前倾",
      "hands": "双手交握",
      "expression": "内省而自信"
    }
  },
  "environment": {
    "location": "极简主义时尚摄影棚",
    "background": {
      "color": "纯净光滑的灰色",
      "style": "干净、无干扰"
    }
  },
  "lighting": {
    "type": "受控的影棚灯光",
    "quality": "柔和且富有雕塑感",
    "effects": [
      "清晰的阴影",
      "突出面部结构",
      "增强织物纹理"
    ]
  },
  "color_grading": {
    "mode": "黑白",
    "contrast": "高对比度",
    "tone": "优雅、永恒"
  },
  "composition": {
    "crop": "垂直 4:5",
    "focus": "主体居中",
    "style": "电影感杂志肖像"
  },
  "quality": {
    "realism": "高度写实",
    "detail_level": "皮肤和服装的精细纹理细节"
  },
  "output_goal": "将原始图像转换为一张精致、有力的黑白杂志肖像，描绘一位身处极简主义影棚的女性，在保留其身份特征的同时，强调优雅、自信和永恒的风格。"
}
```

## 来源备注
- 源站作者：𝗦𝗮𝗻𝗶𝗮
- 源站 UUID：oxoZof8Vpt
- 源站分类：05_人物肖像与写实摄影

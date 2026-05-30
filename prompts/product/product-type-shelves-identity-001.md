---
id: "product-type-shelves-identity-001"
title: "超写实女性超市购物场景生成提示词"
category: product
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["超市", "购物", "女性", "写实", "生活", "休闲", "货架", "购物篮"]
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
  "style": "ultra-realistic lifestyle photography, cinematic yet natural",
  "aspect_ratio": "3:4",
  "identity_preservation": {
    "use_reference_image": true,
    "strict_identity_lock": true,
    "alter_face": false,
    "alter_proportions": false,
    "notes": "Strict adherence to the facial reference photo. Preserve exact facial features, proportions, skin texture, and natural expression."
  },
  "environment": {
    "location": "modern premium supermarket",
    "layout": "wide aisle with fully stocked shelves on both sides",
    "details": [
      "realistic product packaging",
      "clean organized shelves",
      "premium market atmosphere"
    ]
  },
  "subject": {
    "gender": "female",
    "body_type": "fit, natural physique",
    "pose": {
      "action": "walking naturally between shelves",
      "hands": {
        "left": "casually holding a shopping basket",
        "right": "reaching toward a product on the shelf"
      }
    },
    "expression": "relaxed, confident, candid",
    "wardrobe": {
      "top": "clean white t-shirt",
      "bottom": "fitted blue jeans",
      "footwear": "minimal white sneakers"
    }
  },
  "lighting": {
    "type": "soft overhead supermarket lighting",
    "effects": [
      "realistic reflections on product packaging",
      "true-to-life color rendering",
      "natural skin tones"
    ]
  },
  "camera": {
    "shot_type": "full-body",
    "distance": "slight distance",
    "angle": "eye-level",
    "depth_of_field": "shallow depth of field with foreground sharp and background shelves slightly blurred",
    "quality": "photographic realism"
  },
  "quality": {
    "realism": "maximum realism",
    "details": "high detail in clothing, skin, and environment",
    "style": "cinematic but natural, no stylization"
  },
  "constraints": [
    "No stylization",
    "No distortion",
    "No beauty filters",
    "No artificial poses",
    "No text, logos, or watermarks",
    "No exaggerated lighting"
  ],
  "output_goal": "Create a hyper-realistic, candid full-body photo of a woman shopping in a modern premium supermarket aisle, preserving her exact facial identity and proportions with a natural, cinematic photographic look."
}

## 中文译文（源站提供）
```json
{
  "type": "image_generation_prompt",
  "style": "超现实生活方式摄影，电影感而自然",
  "aspect_ratio": "3:4",
  "identity_preservation": {
    "use_reference_image": true,
    "strict_identity_lock": true,
    "alter_face": false,
    "alter_proportions": false,
    "notes": "严格遵循面部参考照片。保留精确的面部特征、比例、皮肤纹理和自然表情。"
  },
  "environment": {
    "location": "现代高端超市",
    "layout": "宽敞的过道，两侧货架摆满商品",
    "details": [
      "逼真的产品包装",
      "整洁有序的货架",
      "高端市场氛围"
    ]
  },
  "subject": {
    "gender": "女性",
    "body_type": "健美，自然体型",
    "pose": {
      "action": "在货架间自然行走",
      "hands": {
        "left": "随意提着一个购物篮",
        "right": "伸手去拿货架上的商品"
      }
    },
    "expression": "放松、自信、自然",
    "wardrobe": {
      "top": "干净的白色 T 恤",
      "bottom": "修身蓝色牛仔裤",
      "footwear": "简约白色运动鞋"
    }
  },
  "lighting": {
    "type": "柔和的超市顶灯",
    "effects": [
      "产品包装上的逼真反光",
      "真实色彩还原",
      "自然的肤色"
    ]
  },
  "camera": {
    "shot_type": "全身照",
    "distance": "稍远距离",
    "angle": "平视",
    "depth_of_field": "浅景深，前景清晰，背景货架略微模糊",
    "quality": "摄影写实主义"
  },
  "quality": {
    "realism": "最大程度的真实感",
    "details": "服装、皮肤和环境的高细节",
    "style": "电影感但自然，无风格化"
  },
  "constraints": [
    "无风格化",
    "无扭曲",
    "无美颜滤镜",
    "无人工姿势",
    "无文字、标志或水印",
    "无夸张灯光"
  ],
  "output_goal": "创作一张超现实、自然的女性全身照，她在现代高端超市过道购物，精确保留其面部特征和比例，呈现自然、电影感的摄影效果。"
}
```

## 来源备注
- 源站作者：𝗦𝗮𝗻𝗶𝗮
- 源站 UUID：u0c1VvGxDG
- 源站分类：05_人物肖像与写实摄影

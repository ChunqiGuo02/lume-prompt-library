---
id: "interior-the-outfit-uploaded-001"
title: "同人多场景时尚写真集"
category: interior
subcategory: "09_故事分镜角色设定"
aesthetic: null
tags: ["拼图", "日系", "女生", "生日", "蛋糕", "街拍", "自拍", "时尚"]
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
  "image_layout": "2x2 grid collage featuring four distinct photographs of the same female subject.",

  "identity_lock": {
    "reference": "uploaded image",
    "rules": [
      "Preserve the exact same face, facial structure, body shape, skin tone, and overall identity as the uploaded reference image",
      "Do NOT change the person’s appearance, age, ethnicity, or attractiveness",
      "The subject must clearly be the same individual in all four panels"
    ]
  },

  "clothing_rules": {
    "base_rule": "Clothing may either match the uploaded image exactly OR be naturally inferred outfits that the same person would realistically wear",
    "constraints": [
      "No drastic style change",
      "No costume-like outfits",
      "Outfits must feel coherent with the subject’s real-life fashion sense"
    ]
  },

  "panels": [
    {
      "position": "top_left",
      "setting": "Outdoors at night, dark background with softly illuminated green foliage",
      "action": "She holds a cake in one hand and licks frosting from the index finger of the other hand",
      "outfit": {
        "description": "A sleek, night-out look that fits the subject’s real style (can match the uploaded outfit or a realistic alternative)",
        "jewelry": "Gold-toned accessories such as a wristwatch, bracelet, rings, and small hoop earrings"
      },
      "props": {
        "item": "Round white frosted cake",
        "details": [
          "Red cherries on top",
          "Clean white piping along the edges",
          "Black icing text on the cake"
        ]
      },
      "mood": "Playful, confident, slightly cheeky"
    },

    {
      "position": "top_right",
      "setting": "Daytime upscale city street with storefronts and trees",
      "action": "She leans casually out of the open door of a black luxury car, looking directly at the camera",
      "outfit": {
        "description": "Casual-chic daytime outfit consistent with her identity (may reuse the uploaded outfit or a plausible streetwear variation)",
        "accessories": "Minimal jewelry, small shoulder bag"
      },
      "lighting": "Bright natural daylight with realistic shadows",
      "mood": "Confident, aspirational, influencer-like"
    },

    {
      "position": "bottom_left",
      "setting": "Indoor hallway with beige walls and wooden flooring",
      "action": "Full-body mirror selfie",
      "outfit": {
        "description": "A coordinated outfit suitable for an indoor mirror selfie, consistent with her fashion sense",
        "accessories": "Designer-style handbag, stacked bracelets"
      },
      "background_details": [
        "Large gold-framed mirror leaning against the wall",
        "Minimal interior decor such as dried plants",
        "Doorway visible in the reflection"
      ],
      "mood": "Stylish, composed, fashion-focused"
    },

    {
      "position": "bottom_right",
      "setting": "Inside a vehicle or near a window during gold"

## 中文译文（源站提供）
```json
{
  "image_layout": "2x2 网格拼贴画，展示同一位女性主体的四张不同照片。",

  "identity_lock": {
    "reference": "上传的图片",
    "rules": [
      "保留与上传参考图片完全相同的面部、面部结构、体型、肤色和整体身份",
      "不要改变人物的外貌、年龄、种族或吸引力",
      "所有四个面板中的主体必须清晰地是同一个人"
    ]
  },

  "clothing_rules": {
    "base_rule": "服装可以与上传的图片完全一致，也可以是同一个人会实际穿着的自然推断出的服装",
    "constraints": [
      "没有剧烈的风格变化",
      "没有类似戏服的服装",
      "服装必须与主体的真实时尚品味保持一致"
    ]
  },

  "panels": [
    {
      "position": "左上",
      "setting": "夜晚的户外，黑暗的背景，柔和灯光下的绿色植物",
      "action": "她一手拿着蛋糕，另一只手的食指舔着糖霜",
      "outfit": {
        "description": "时尚的夜间外出造型，符合主体的真实风格（可以与上传的服装一致，也可以是真实的替代品）",
        "jewelry": "金色调配饰，如腕表、手链、戒指和小型耳环"
      },
      "props": {
        "item": "圆形白色糖霜蛋糕",
        "details": [
          "顶部有红色樱桃",
          "边缘有干净的白色裱花",
          "蛋糕上有黑色糖霜文字"
        ]
      },
      "mood": "俏皮、自信、略带顽皮"
    },

    {
      "position": "右上",
      "setting": "白天高档城市街道，有店面和树木",
      "action": "她随意地靠在一辆黑色豪车的开着车门上，直视镜头",
      "outfit": {
        "description": "休闲别致的日间服装，与她的身份一致（可以重复使用上传的服装，或是一种合理的街头服饰变体）",
        "accessories": "极简首饰，小号单肩包"
      },
      "lighting": "明亮的自然日光，带有真实的阴影",
      "mood": "自信、有抱负、像网红一样"
    },

    {
      "position": "左下",
      "setting": "室内走廊，米色墙壁和木地板",
      "action": "全身镜子自拍",
      "outfit": {
        "description": "适合室内镜子自拍的协调服装，与她的时尚品味一致",
        "accessories": "设计师风格手袋，叠戴手链"
      },
      "background_details": [
        "靠墙放置的大型金色边框镜子",
        "极简的室内装饰，如干花",
        "反射中可见的门道"
      ],
      "mood": "时尚、沉着、注重时尚"
    },

    {
      "position": "右下",
      "setting": "黄金时段在车内或窗边"
    }
  ]
}
```

## 来源备注
- 源站作者：iX | AI Video Creator
- 源站 UUID：OBBVKHj2rK
- 源站分类：09_故事分镜角色设定

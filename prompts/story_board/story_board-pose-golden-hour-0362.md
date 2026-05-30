---
id: story_board-pose-golden-hour-0362
title: "黄金时刻男性肖像九宫格写真生成预设"
category: story_board
subcategory: "09_故事分镜角色设定"
aesthetic: null
tags: ["男性", "肖像", "拼贴", "暖色调", "室内", "棕发", "休闲", "柔和"]
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
related_to: ["landscape-pose-golden-hour-001"]
---

# 正文 prompt
{
  "image_generation": {
    "face": {
      "preserve_original": true,
      "reference_match": true,
      "description": "Maintain the same facial structure, skin tone, eye shape, and natural expressions across all frames, with consistent identity in each pose."
    },
    "photo_style": {
      "type": "golden hour portrait collage",
      "camera_angle": "varied close-up and medium portrait angles",
      "lighting": "warm golden hour sunlight casting soft window shadows",
      "mood": "soft, calm, intimate, aesthetic",
      "texture": "natural skin texture, soft highlights, gentle contrast",
      "focus": "sharp focus on face with smooth background falloff"
    },
    "subject": {
      "gender": "{"gender" "male"}",
      "age": "young adult",
      "poses": [
        "looking upward toward light",
        "soft smile facing camera",
        "side profile with downward gaze",
        "over-the-shoulder glance",
        "direct close-up with relaxed lips",
        "hand in hair casual pose",
        "head tilted back toward light",
        "clean side profile portrait",
        "thoughtful pose with hand near chin"
      ],
      "expression": "natural, minimal, relaxed, emotionally subtle",
      "hair": {
        "style": "long straight hair worn loose",
        "color": "light to medium brown",
        "details": "natural shine with soft light highlights"
      },
      "clothing": {
        "type": "casual minimalist outfit",
        "details": "simple dark t-shirt with no visible branding"
      }
    },
    "composition": {
      "layout": "3x3 grid collage",
      "consistency": "uniform lighting and background across all frames",
      "framing": "clean portrait framing with slight pose variation"
    },
    "environment": {
      "setting": "indoor space near a window",
      "background": "plain wall with warm sunlight and shadow patterns",
      "atmosphere": "quiet, minimal, artistic indoor ambiance"
    },
    "aesthetic": {
      "style": "Instagram aesthetic portrait set",
      "features": [
        "golden hour light",
        "window shadow patterns",
        "minimal makeup",
        "natural expressions",
        "clean editorial portrait look"
      ]
    }
  }
}

## 中文译文（源站提供）
```json
{
  "image_generation": {
    "face": {
      "preserve_original": true,
      "reference_match": true,
      "description": "在所有画面中保持相同的面部结构、肤色、眼睛形状和自然表情，在每个姿势中保持一致的身份。"
    },
    "photo_style": {
      "type": "黄金时段肖像拼贴",
      "camera_angle": "多样的特写和中景肖像角度",
      "lighting": "温暖的黄金时段阳光投射出柔和的窗影",
      "mood": "柔和、平静、亲密、唯美",
      "texture": "自然的皮肤纹理、柔和的高光、轻微的对比度",
      "focus": "面部清晰对焦，背景平滑虚化"
    },
    "subject": {
      "gender": "{\"gender\" \"male\"}",
      "age": "青年",
      "poses": [
        "向上看向光源",
        "面对镜头，露出浅笑",
        "侧面轮廓，目光向下",
        "回眸一瞥",
        "放松嘴唇的直接特写",
        "手插在头发里的随意姿势",
        "头部向后仰，面向光源",
        "干净的侧面肖像",
        "手靠近下巴的沉思姿势"
      ],
      "expression": "自然、极简、放松、情感微妙",
      "hair": {
        "style": "长直发，自然散落",
        "color": "浅棕色至中棕色",
        "details": "自然光泽，带有柔和的浅色高光"
      },
      "clothing": {
        "type": "休闲极简服装",
        "details": "简单的深色 T 恤，无可见品牌标识"
      }
    },
    "composition": {
      "layout": "3x3 网格拼贴",
      "consistency": "所有画面光线和背景统一",
      "framing": "干净的肖像构图，姿势略有变化"
    },
    "environment": {
      "setting": "窗户旁的室内空间",
      "background": "纯色墙壁，带有温暖的阳光和阴影图案",
      "atmosphere": "安静、极简、艺术的室内氛围"
    },
    "aesthetic": {
      "style": "Instagram 风格肖像组图",
      "features": [
        "黄金时段光线",
        "窗影图案",
        "淡妆",
        "自然表情",
        "干净的杂志肖像风格"
      ]
    }
  }
}
```

## 来源备注
- 源站作者：Harboriis
- 源站 UUID：41f2wydwTH
- 源站分类：09_故事分镜角色设定

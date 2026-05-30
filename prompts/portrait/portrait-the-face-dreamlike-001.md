---
id: "portrait-the-face-dreamlike-001"
title: "保留原貌的梦幻光影肖像"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["女性", "黑发", "墨镜", "项链", "毛衣", "白色", "暖光", "肖像"]
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
related_to: ["portrait-the-face-dreamlike-002"]
---

# 正文 prompt
{
  "type": "image_generation_prompt",
  "style": "dreamlike, cinematic, ultra-realistic portrait",
  "identity_preservation": {
    "use_reference_image": true,
    "alter_face": false,
    "strict_identity_lock": true,
    "notes": "Do not change the face in any way. Preserve 100% of the facial features, structure, skin texture, and likeness from the uploaded image."
  },
  "subject": {
    "gender": "female",
    "pose": {
      "head_position": "gently lowered",
      "expression": "calm, introspective, serene",
      "body_language": "relaxed and natural"
    },
    "appearance": {
      "hair": {
        "color": "black",
        "style": "tousled, natural movement"
      },
      "accessories": [
        "sunglasses creating a cool, effortless aura",
        "single thin silver necklace"
      ]
    }
  },
  "wardrobe": {
    "top": "white oversized knitted shirt made of soft, textured fabric"
  },
  "environment": {
    "background": {
      "color": "neutral cream wall",
      "style": "minimalist and clean"
    }
  },
  "lighting": {
    "type": "natural sunlight",
    "tone": "warm amber",
    "effects": [
      "soft glow brushing the face and shoulder",
      "cinematic warmth against the neutral background",
      "gentle highlights with smooth falloff"
    ]
  },
  "mood": {
    "atmosphere": "dreamlike, cinematic, peaceful",
    "emotion": "soft confidence and quiet elegance"
  },
  "quality": {
    "realism": "ultra-realistic",
    "detail_level": "high detail in skin texture, fabric weave, and lighting transitions"
  },
  "output_goal": "Create a dreamlike, cinematic portrait of a young woman wearing an oversized white knitted shirt, bathed in warm amber sunlight against a cream wall, while preserving her face exactly as in the reference image."
}

## 中文译文（源站提供）
```json
{
  "type": "image_generation_prompt",
  "style": "梦幻般的、电影般的、超写实肖像",
  "identity_preservation": {
    "use_reference_image": true,
    "alter_face": false,
    "strict_identity_lock": true,
    "notes": "不要以任何方式改变面部。100% 保留上传图像中的面部特征、结构、皮肤纹理和相似度。"
  },
  "subject": {
    "gender": "女性",
    "pose": {
      "head_position": "头部微微下垂",
      "expression": "平静、内省、安详",
      "body_language": "放松自然"
    },
    "appearance": {
      "hair": {
        "color": "黑色",
        "style": "蓬松、自然飘逸"
      },
      "accessories": [
        "墨镜营造出酷炫、随性的氛围",
        "一条细细的银色项链"
      ]
    }
  },
  "wardrobe": {
    "top": "白色宽松针织衫，由柔软有质感的面料制成"
  },
  "environment": {
    "background": {
      "color": "中性米色墙壁",
      "style": "极简主义、干净整洁"
    }
  },
  "lighting": {
    "type": "自然阳光",
    "tone": "暖琥珀色",
    "effects": [
      "柔和的光线轻拂面部和肩部",
      "中性背景下的电影般暖意",
      "柔和的高光，平滑的衰减"
    ]
  },
  "mood": {
    "atmosphere": "梦幻般的、电影般的、宁静的",
    "emotion": "柔和的自信和沉静的优雅"
  },
  "quality": {
    "realism": "超写实",
    "detail_level": "皮肤纹理、织物编织和光线过渡处的高细节"
  },
  "output_goal": "创作一幅梦幻般的、电影般的年轻女性肖像，她穿着一件宽松的白色针织衫，在米色墙壁的映衬下沐浴在温暖的琥珀色阳光中，同时精确保留参考图像中的面部特征。"
}
```

## 来源备注
- 源站作者：𝗦𝗮𝗻𝗶𝗮
- 源站 UUID：LRaW1CAlMO
- 源站分类：05_人物肖像与写实摄影

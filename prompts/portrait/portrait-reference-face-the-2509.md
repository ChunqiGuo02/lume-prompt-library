---
id: portrait-reference-face-the-2509
title: "镜前自拍橙裙少女写真"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["对镜", "自拍", "橙色", "短裙", "高跟", "凉鞋", "蝴蝶", "干花"]
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
  "image_generation_prompt": {
    "subject": {
      "reference_adherence": "Strictly match the provided reference photo face exactly",
      "facial_features": [
        "Preserve exact face shape",
        "Match eye structure and eyebrow shape",
        "Retain lip shape and natural color"
      ],
      "hair": "black", exact hairstyle from reference",
      "makeup": "Natural style as per reference",
      "expression": "Soft, calm, looking at phone screen"
    },

    "apparel": {
      "main_garment": "Soft pastel pink, romantic corset-style mini dress inspired by a fairy-core aesthetic. Off-shoulder neckline with delicate gathered fabric, lace-up corset bodice that cinches the waist, and a flowy chiffon skirt with layered movement. Long, sheer, flared sleeves that drape gracefully with light fabric transparency. Dress matches exactly the reference pink dress in color, silhouette, and romantic style.",
      "fabric_physics": "Lightweight chiffon and satin blend, airy movement, natural folds, soft wind-like flow",
      "footwear": "Pastel blush pink satin high-heeled sandals with a square toe. Delicate thin straps adorned with embroidered 3D butterfly appliqués across the front and ankle straps. Slim feminine heel, elegant fairy-core aesthetic, matching exactly the reference butterfly heels in color, texture, and romantic detail.",
      "accessories": [
        "Silver necklace",
        "Silver bracelet",
        "Silver rings"
      ]
    },

    "pose_and_action": {
      "type": "Full-body mirror selfie",
      "stance": "Squatting low gracefully, one knee forward, leaning slightly toward mirror",
      "head_position": "Tilted slightly downward",
      "hands": {
        "right_hand": "Holding phone vertically in front of face",
        "left_hand": "Resting gently on knee"
      },
      "props": " {\"phone model\" \"IPhone 16 pro max Silver Color\"} 
    },

    "environment": {
      "location": "Charming floral cafe interior",
      "background": "Romantic European-style floral cafe with stone-textured walls, hanging wicker baskets, dried flower arrangements, pastel floral bouquets, vintage wooden shelves, rustic beams, and soft decorative mirrors. Warm neutral stone tones mixed with soft pinks, greens, creams, and lavender florals. Cozy, aesthetic, feminine atmosphere.",
      "flooring": "Vintage patterned tile floor with subtle reflections"
    },

    "lighting_and_atmosphere": {
      "quality": "Soft, ambient cafe lighting with gentle highlights",
      "mood": "Feminine, romantic, elegant, fairy-core, social media aesthetic"
    },

    "technical_specifications": {
      "quality": "8K resolution, photorealistic, high fidelity",
      "focus": "Sharp focus on face and outfit",
      "perspective": "Eye-level mirror perspective",
      "aspect_ratio": "{\"aspect ratio\" \"4:5\"}"
    }
  },

  "negative_prompt": [
    "Incorrect face",
    "Wrong hairstyle",
    "Extra limbs",
    "Distorted proportions",
    "Different dress color or "
  ]
}

## 中文译文（源站提供）
```json
{
  "image_generation_prompt": {
    "subject": {
      "reference_adherence": "严格匹配提供的参考照片中的面部特征",
      "facial_features": [
        "保留精确的脸型",
        "匹配眼睛结构和眉毛形状",
        "保持唇形和自然唇色"
      ],
      "hair": "黑色，发型与参考图完全一致",
      "makeup": "自然风格，与参考图一致",
      "expression": "柔和、平静，看着手机屏幕"
    },
    "apparel": {
      "main_garment": "柔和的淡粉色浪漫紧身胸衣式迷你连衣裙，灵感来自仙女系美学。露肩领口，带有精致的褶皱面料，系带紧身胸衣收紧腰部，飘逸的雪纺裙摆分层摆动。长款、透明、喇叭袖，轻盈面料透明，优雅垂坠。连衣裙的颜色、轮廓和浪漫风格与参考图中的粉色连衣裙完全一致。",
      "fabric_physics": "轻盈雪纺和缎面混纺，飘逸感，自然褶皱，如微风般轻柔流动",
      "footwear": "淡腮粉色缎面方头高跟凉鞋。精致的细带上装饰有刺绣的 3D 蝴蝶贴花，分布在鞋面和踝带处。纤细的女性化鞋跟，优雅的仙女系美学，颜色、质地和浪漫细节与参考图中的蝴蝶高跟鞋完全一致。",
      "accessories": [
        "银项链",
        "银手链",
        "银戒指"
      ]
    },
    "pose_and_action": {
      "type": "全身镜面自拍",
      "stance": "优雅地低蹲，一膝向前，身体略微倾向镜子",
      "head_position": "头部略微向下倾斜",
      "hands": {
        "right_hand": "在脸前垂直握持手机",
        "left_hand": "轻轻放在膝盖上"
      },
      "props": "{\"phone model\" \"IPhone 16 pro max Silver Color\"}"
    },
    "environment": {
      "location": "迷人的花卉咖啡馆内部",
      "background": "浪漫的欧式花卉咖啡馆，石质纹理墙壁，悬挂的柳条篮，干花布置，淡雅的花束，复古木质置物架，乡村风格横梁，以及柔和的装饰镜。温暖的中性石色调与柔和的粉色、绿色、奶油色和薰衣草色花卉混合。舒适、美观、女性化的氛围。",
      "flooring": "带有微妙反光的复古图案瓷砖地板"
    },
    "lighting_and_atmosphere": {
      "quality": "柔和的环境咖啡馆照明，带有轻微高光",
      "mood": "女性化、浪漫、优雅、仙女系、社交媒体美学"
    },
    "technical_specifications": {
      "quality": "8K 分辨率，照片级真实感，高保真",
      "focus": "面部和服装清晰对焦",
      "perspective": "与视线平齐的镜面视角",
      "aspect_ratio": "{\"aspect ratio\" \"4:5\"}"
    }
  },
  "negative_prompt": [
    "不正确的脸部",
    "错误的发型",
    "多余的肢体",
    "比例失真",
    "连衣裙颜色不同"
  ]
}
```

## 来源备注
- 源站作者：ANKIT PATEL 🇮🇳 | AI
- 源站 UUID：fw2M9PX6qz
- 源站分类：05_人物肖像与写实摄影

---
id: portrait-the-facial-face-1513
title: "海上摩托自拍写真"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["写实", "大海", "自拍", "女生", "救生衣", "摩托艇", "晴天", "自然光"]
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
  "style": "realistic, vibrant, photorealistic action portrait",
  "identity_preservation": {
    "use_reference_image": true,
    "alter_face": false,
    "strict_identity_lock": true,
    "notes": "Use the attached reference image as a strict source. Keep the woman’s facial features, facial structure, skin texture, hair type, and accessories exactly the same with 100% fidelity."
  },
  "subject": {
    "gender": "female",
    "pose": {
      "activity": "riding a jet ski",
      "camera_angle": "selfie angle",
      "framing": "head and chest visible",
      "expression": "natural, relaxed, adventurous"
    },
    "appearance": {
      "hair": {
        "color": "dark",
        "style": "natural",
        "notes": "No long hair, no sunglasses"
      }
    },
    "wardrobe": {
      "life_jacket": "black life jacket"
    }
  },
  "environment": {
    "location": "open ocean",
    "water": "slightly rippled ocean surface",
    "sky": {
      "condition": "clear blue sky",
      "lighting": "bright natural sunlight"
    },
    "background": {
      "elements": [
        "other people riding jet skis in the distance"
      ],
      "focus": "softly blurred to create depth and motion"
    }
  },
  "lighting": {
    "type": "natural daylight",
    "quality": "bright, clean, and realistic",
    "effects": [
      "natural highlights on skin and water",
      "sense of motion and energy"
    ]
  },
  "camera": {
    "look": "selfie action shot",
    "focus": "sharp focus on face and upper body",
    "movement": "slight motion feel from riding",
    "quality": "high clarity and sharpness"
  },
  "mood": {
    "atmosphere": "lively, adventurous, energetic",
    "tone": "fresh, fun, and dynamic"
  },
  "quality": {
    "realism": "highly photorealistic",
    "detail_level": "sharp details in face, water, and lighting",
    "color_accuracy": "natural colors, no artificial tones"
  },
  "negative_prompt": [
    "blurry face",
    "distorted proportions",
    "unrealistic lighting",
    "deformed hands",
    "wrong facial structure",
    "incorrect accessories",
    "extra people in the foreground",
    "disfigured body",
    "cartoon style",
    "painting",
    "artificial colors",
    "low quality",
    "watermark",
    "text",
    "long hair"
  ],
  "output_goal": "Create a realistic, vibrant, and energetic selfie-style ocean portrait of a woman riding a jet ski, preserving her exact facial identity while conveying motion, sunlight, and adventure."
}

## 中文译文（源站提供）
```json
{
  "type": "image_generation_prompt",
  "style": "写实、生动、逼真的动作肖像",
  "identity_preservation": {
    "use_reference_image": true,
    "alter_face": false,
    "strict_identity_lock": true,
    "notes": "严格使用所附参考图像作为来源。以 100% 的保真度保持女性的面部特征、面部结构、皮肤纹理、发型和配饰完全一致。"
  },
  "subject": {
    "gender": "女性",
    "pose": {
      "activity": "骑水上摩托艇",
      "camera_angle": "自拍角度",
      "framing": "头部和胸部可见",
      "expression": "自然、放松、充满冒险精神"
    },
    "appearance": {
      "hair": {
        "color": "深色",
        "style": "自然",
        "notes": "不要长发，不要戴墨镜"
      }
    },
    "wardrobe": {
      "life_jacket": "黑色救生衣"
    }
  },
  "environment": {
    "location": "开阔的海洋",
    "water": "略带涟漪的海面",
    "sky": {
      "condition": "晴朗的蓝天",
      "lighting": "明亮的自然阳光"
    },
    "background": {
      "elements": [
        "远处有其他人骑水上摩托艇"
      ],
      "focus": "柔和模糊以营造景深和动感"
    }
  },
  "lighting": {
    "type": "自然日光",
    "quality": "明亮、干净、真实",
    "effects": [
      "皮肤和水面上的自然高光",
      "动感和活力感"
    ]
  },
  "camera": {
    "look": "自拍动作镜头",
    "focus": "面部和上半身清晰对焦",
    "movement": "骑行带来的轻微动感",
    "quality": "高清晰度和锐度"
  },
  "mood": {
    "atmosphere": "活泼、冒险、充满活力",
    "tone": "清新、有趣、动感"
  },
  "quality": {
    "realism": "高度逼真",
    "detail_level": "面部、水面和光线细节清晰",
    "color_accuracy": "自然色彩，无人工色调"
  },
  "negative_prompt": [
    "模糊的脸",
    "扭曲的比例",
    "不真实的灯光",
    "变形的手",
    "错误的面部结构",
    "不正确的配饰",
    "前景中有多余的人",
    "身体畸形",
    "卡通风格",
    "绘画",
    "人工色彩",
    "低质量",
    "水印",
    "文字",
    "长发"
  ],
  "output_goal": "创作一张逼真、生动、充满活力的自拍式海洋肖像，描绘一名女性骑水上摩托艇的场景，同时保留其精确的面部特征，并传达动感、阳光和冒险精神。"
}
```

## 来源备注
- 源站作者：𝗦𝗮𝗻𝗶𝗮
- 源站 UUID：flK3dp3y07
- 源站分类：05_人物肖像与写实摄影

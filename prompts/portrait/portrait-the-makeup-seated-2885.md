---
id: portrait-the-makeup-seated-2885
title: "高端美容院内，专业化妆师为顾客精致上妆的超写实8K肖像。"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["化妆", "美妆", "沙龙", "现代", "职业", "写实", "轻奢", "干净"]
recommended_models: 
  - banana-pro
recommended_params:
  aspect_ratio: "9:16"
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
  "aspect_ratio": "16:9",
  "quality": "ultra-realistic 8K",
  "identity_lock": {
    "use_uploaded_face_only": true,
    "strict_identity_preservation": true,
    "notes": "The seated woman must match the uploaded reference image exactly. No changes to facial structure, proportions, skin tone, hair texture, eye color, or identifying features."
  },
  "scene_description": {
    "main_subject": {
      "gender": "female",
      "role": "client",
      "appearance": {
        "body_type": "fit feminine body with light natural muscle tone (realistic, not exaggerated)",
        "outfit": "white fitted t-shirt and blue jean pants",
        "pose": "sitting elegantly in a modern salon chair, hands resting calmly on her lap",
        "expression": "poised, serene, relaxed"
      }
    },
    "secondary_subject": {
      "gender": "female",
      "role": "professional makeup artist",
      "appearance": {
        "hair": "long wavy brown hair in a high ponytail",
        "outfit": "fitted black long-sleeve top and high-waisted black pants",
        "posture": "standing beside the client, focused attentively while applying light makeup"
      }
    }
  },
  "environment": {
    "location": "luxury modern beauty salon",
    "details": [
      "white marble countertops",
      "large vanity mirrors framed with bright LED lights",
      "organized makeup brushes, palettes, and cosmetic bottles",
      "cream-colored walls",
      "sleek contemporary salon chairs"
    ],
    "atmosphere": "clean, elegant, professional, high-end"
  },
  "lighting": {
    "type": "soft diffused studio lighting",
    "sources": [
      "LED vanity mirror lights",
      "warm ambient salon lighting"
    ],
    "effects": [
      "even illumination on skin",
      "subtle warm highlights on hair",
      "soft realistic shadows for depth",
      "natural reflections on marble and mirrors"
    ]
  },
  "camera": {
    "angle": "eye-level frontal view of the seated woman, slight side profile of the makeup artist",
    "lens": "85mm portrait lens look",
    "depth_of_field": "shallow depth of field, sharp focus on the seated woman's face",
    "resolution": "7680x4320 (8K UHD)"
  },
  "style": {
    "photography_type": "hyper-realistic editorial beauty photography",
    "rendering": [
      "realistic skin texture with pores",
      "natural makeup details",
      "realistic hair strands",
      "accurate fabric folds",
      "no stylization",
      "no cartoon or CGI look"
    ]
  },
  "constraints": [
    "Do not alter the seated woman's face",
    "No beautification or face reshaping",
    "No gender swap",
    "No AI-style smoothing",
    "No distortion",
    "No text or watermark"
  ],
  "output_goal": "Create an ultra-realistic 8K cinematic beauty salon portrait featuring two women, with the seated woman using the user's uploaded photo as an exact facial reference, and a professional makeup artist applying light makeup in "
}

## 中文译文（源站提供）
```json
{
  "type": "image_generation_prompt",
  "aspect_ratio": "16:9",
  "quality": "ultra-realistic 8K",
  "identity_lock": {
    "use_uploaded_face_only": true,
    "strict_identity_preservation": true,
    "notes": "坐着的女性必须与上传的参考图片完全一致。面部结构、比例、肤色、发质、眼睛颜色或任何识别特征均不得改变。"
  },
  "scene_description": {
    "main_subject": {
      "gender": "female",
      "role": "client",
      "appearance": {
        "body_type": "健美女性身材，带有轻微自然肌肉线条（真实，不夸张）",
        "outfit": "白色修身 T 恤和蓝色牛仔裤",
        "pose": "优雅地坐在现代沙龙椅中，双手平静地放在膝盖上",
        "expression": "沉着、宁静、放松"
      }
    },
    "secondary_subject": {
      "gender": "female",
      "role": "专业化妆师",
      "appearance": {
        "hair": "高马尾长波浪棕发",
        "outfit": "修身黑色长袖上衣和高腰黑色裤子",
        "posture": "站在客户旁边，专注地涂抹淡妆"
      }
    }
  },
  "environment": {
    "location": "豪华现代美容沙龙",
    "details": [
      "白色大理石台面",
      "带明亮 LED 灯框的大梳妆镜",
      "摆放整齐的化妆刷、调色板和化妆品瓶",
      "米色墙壁",
      "时尚现代的沙龙椅"
    ],
    "atmosphere": "干净、优雅、专业、高端"
  },
  "lighting": {
    "type": "柔和漫射影棚灯光",
    "sources": [
      "LED 梳妆镜灯",
      "温馨的沙龙环境光"
    ],
    "effects": [
      "皮肤均匀照明",
      "头发上微妙的暖色高光",
      "柔和逼真的阴影增加深度",
      "大理石和镜子上的自然反射"
    ]
  },
  "camera": {
    "angle": "坐着的女性的平视正面视角，化妆师的轻微侧面轮廓",
    "lens": "85mm 人像镜头效果",
    "depth_of_field": "浅景深，对坐着的女性面部清晰对焦",
    "resolution": "7680x4320 (8K UHD)"
  },
  "style": {
    "photography_type": "超现实编辑美容摄影",
    "rendering": [
      "带有毛孔的逼真皮肤纹理",
      "自然妆容细节",
      "逼真的发丝",
      "准确的织物褶皱",
      "无风格化",
      "无卡通或 CGI 外观"
    ]
  },
  "constraints": [
    "不得改变坐着的女性的面部",
    "无美化或面部重塑",
    "无性别转换",
    "无 AI 风格平滑",
    "无失真",
    "无文字或水印"
  ],
  "output_goal": "创建一个超现实的 8K 电影级美容沙龙肖像，描绘两位女性，其中坐着的女性的面部需精确参照用户上传的照片，一位专业化妆师正在涂抹淡妆。"
}
```

## 来源备注
- 源站作者：𝗦𝗮𝗻𝗶𝗮
- 源站 UUID：ybKXQ7iwvK
- 源站分类：05_人物肖像与写实摄影

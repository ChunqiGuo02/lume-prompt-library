---
id: portrait-the-face-alter-0259
title: "伦敦塔桥前的写真肖像生成提示"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["伦敦", "塔桥", "河流", "女性", "长发", "黑色", "大衣", "晴天"]
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
  "aspect_ratio": "3:4",
  "style": "photorealistic travel portrait, cinematic daylight",
  "identity_preservation": {
    "use_reference_image": true,
    "strict_identity_lock": true,
    "alter_face": false,
    "alter_features": false,
    "notes": "Preserve the subject’s face, hair, and natural features exactly as in the reference image."
  },
  "subject": {
    "gender": "female",
    "pose": {
      "body": "standing by a riverside railing",
      "orientation": "body slightly angled toward the river",
      "head": "turned to face the camera"
    },
    "expression": "natural, calm, soft smile",
    "appearance": {
      "hair": "long, loose, naturally wavy",
      "wardrobe": "black long coat, elegant and minimal"
    }
  },
  "environment": {
    "location": "{"location" "London riverside promenade"}",
    "landmarks": [
      "Tower Bridge clearly visible",
      "River Thames",
      "modern London skyline in the distance"
    ],
    "time_of_day": "clear daytime",
    "weather": "sunny with blue sky"
  },
  "lighting": {
    "type": "natural daylight",
    "direction": "side and front sunlight",
    "effects": [
      "soft shadows",
      "natural highlights on hair and coat",
      "clear architectural detail"
    ]
  },
  "camera": {
    "shot_type": "medium-full shot",
    "angle": "eye-level",
    "focus": "sharp focus on subject",
    "depth_of_field": "moderate, background slightly softened",
    "quality": "HD / ultra-clear"
  },
  "quality": {
    "resolution": "high definition",
    "realism": "photorealistic",
    "detail_level": "high detail in architecture, water, and textures"
  },
  "constraints": [
    "Do not change facial features",
    "Do not alter clothing style",
    "No text, logos, or watermarks",
    "No artificial filters",
    "No distortion of landmarks"
  ],
  "output_goal": "Create an HD, photorealistic image of the same woman at Tower Bridge, keeping the original setting and outfit, but with her head turned to look directly at the camera in natural daylight."
}

## 中文译文（源站提供）
```json
{
  "type": "image_generation_prompt",
  "aspect_ratio": "3:4",
  "style": "逼真的旅行肖像，电影般的日光",
  "identity_preservation": {
    "use_reference_image": true,
    "strict_identity_lock": true,
    "alter_face": false,
    "alter_features": false,
    "notes": "精确保留主体在参考图像中的面部、头发和自然特征。"
  },
  "subject": {
    "gender": "女性",
    "pose": {
      "body": "站在河畔栏杆旁",
      "orientation": "身体略微朝向河流",
      "head": "头部转向面对镜头"
    },
    "expression": "自然、平静、柔和的微笑",
    "appearance": {
      "hair": "长发、散开、自然波浪",
      "wardrobe": "黑色长外套，优雅简约"
    }
  },
  "environment": {
    "location": "{\"location\" \"伦敦河畔长廊\"}",
    "landmarks": [
      "清晰可见的伦敦塔桥",
      "泰晤士河",
      "远处现代的伦敦天际线"
    ],
    "time_of_day": "晴朗的白天",
    "weather": "阳光明媚，蓝天白云"
  },
  "lighting": {
    "type": "自然日光",
    "direction": "侧面和正面阳光",
    "effects": [
      "柔和的阴影",
      "头发和外套上的自然高光",
      "清晰的建筑细节"
    ]
  },
  "camera": {
    "shot_type": "中景全身照",
    "angle": "平视",
    "focus": "主体对焦清晰",
    "depth_of_field": "适中，背景略微柔化",
    "quality": "高清 / 超清晰"
  },
  "quality": {
    "resolution": "高清晰度",
    "realism": "逼真",
    "detail_level": "建筑、水面和纹理细节丰富"
  },
  "constraints": [
    "不要改变面部特征",
    "不要改变服装风格",
    "无文字、标志或水印",
    "无人工滤镜",
    "地标无扭曲"
  ],
  "output_goal": "创建一张高清、逼真的图像，描绘同一位女性在伦敦塔桥，保持原始背景和服装，但她的头部转向直接看向镜头，置于自然日光下。"
}
```

## 来源备注
- 源站作者：𝗦𝗮𝗻𝗶𝗮
- 源站 UUID：wr5xgJu4Ti
- 源站分类：05_人物肖像与写实摄影

---
id: portrait-the-not-face-0750
title: "夜拍 candid 风真实感手机照片编辑指导"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["夜景", "天台", "少女", "白发", "雀斑", "休闲", "手机", "饮品"]
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
  "task": "photo_editing",
  "instruction": "Edit the photo according to the description without changing the face in the slightest. The face must remain 100% authentic and identical to the original.",
  "photo_style": {
    "type": "candid_smartphone_photo",
    "aspect_ratio": "3:4",
    "time": "night",
    "device": "low-end Android phone",
    "shooting_style": "handheld, rushed, imperfect",
    "quality": "realistic, unpolished"
  },
  "subject": {
    "gender": "female",
    "age_appearance": "early 20s",
    "ethnicity": "Indonesian",
    "expression": {
      "mood": "soft, youthful, naturally cute",
      "face": "relaxed",
      "lips": "gently closed",
      "eyes": "calm and warm",
      "smile": "none"
    },
    "vibe": [
      "girl-next-door",
      "young",
      "fresh",
      "everyday",
      "not model-like",
      "not glamorous",
      "not influencer",
      "not styled"
    ]
  },
  "pose_and_action": {
    "seating": "sitting casually",
    "moment": "unplanned, unposed",
    "hands": {
      "one_hand": "holding a glass of drink",
      "other_hand": "using phone"
    },
    "attention": "focused on her phone, unaware of camera"
  },
  "clothing_and_appearance": {
    "top": {
      "type": "plain long-sleeved top",
      "color": "White",
      "style": "simple, fitted, no patterns"
    },
    "hair": {
      "length": "waist-length",
      "color": "Platinum white",
      "texture": "smooth, straight, natural",
      "style": "flowing freely"
    },
    "skin": {
      "look": "clean, youthful, lightly smooth",
      "details": "subtle pores, mild natural variation",
      "health": "healthy and soft",
      "restrictions": [
        "no beauty filter",
        "no retouching",
        "no AI-polished skin",
        "no plastic look"
      ]
    }
  },
  "camera_angle_and_framing": {
    "angle": "slightly from the side and slightly behind",
    "perspective": "authentic candid",
    "framing": "medium-wide",
    "visibility": "upper body and part of table visible",
    "composition": "subject slightly smaller in frame, minor imbalance"
  },
  "lighting": {
    "type": "harsh and imperfect",
    "sources": [
      "rooftop café lights",
      "city street lights"
    ],
    "effects": [
      "uneven exposure",
      "blown highlights",
      "deep shadows",
      "imperfect white balance"
    ]
  },
  "focus_and_quality": {
    "focus": "slightly more on subject",
    "background_blur": "soft blur due to low light and camera limitations",
    "restrictions": [
      "not portrait mode blur",
      "not artificial bokeh"
    ],
    "artifacts": [
      "visible digital noise",
      "grain",
      "slight motion blur",
      "imperfect focus accuracy",
      "limited dynamic range"
    ]
  },
  "background": {
    "location": "Jakarta rooftop café",
    "elements": [
      "tables",
      "railing",
      "other people casually visible",
      "distant Jakart"
    ]
  }
}

## 中文译文（源站提供）
```json
{
  "task": "photo_editing",
  "instruction": "根据描述编辑照片，但面部不得有丝毫改变。面部必须 100% 真实，与原图完全一致。",
  "photo_style": {
    "type": "抓拍的智能手机照片",
    "aspect_ratio": "3:4",
    "time": "夜晚",
    "device": "低端安卓手机",
    "shooting_style": "手持，仓促，不完美",
    "quality": "真实，未经修饰"
  },
  "subject": {
    "gender": "女性",
    "age_appearance": "20 岁出头",
    "ethnicity": "印度尼西亚人",
    "expression": {
      "mood": "柔和，年轻，自然可爱",
      "face": "放松",
      "lips": "轻轻合拢",
      "eyes": "平静而温暖",
      "smile": "无"
    },
    "vibe": [
      "邻家女孩",
      "年轻",
      "清新",
      "日常",
      "非模特",
      "不华丽",
      "非网红",
      "未造型"
    ]
  },
  "pose_and_action": {
    "seating": "随意坐着",
    "moment": "非计划，非摆拍",
    "hands": {
      "one_hand": "拿着一杯饮料",
      "other_hand": "正在使用手机"
    },
    "attention": "专注于手机，未察觉到相机"
  },
  "clothing_and_appearance": {
    "top": {
      "type": "纯色长袖上衣",
      "color": "白色",
      "style": "简约，修身，无图案"
    },
    "hair": {
      "length": "及腰",
      "color": "铂金色",
      "texture": "光滑，直发，自然",
      "style": "自由飘逸"
    },
    "skin": {
      "look": "干净，年轻，略微光滑",
      "details": "细微毛孔，轻微自然纹理",
      "health": "健康柔软",
      "restrictions": [
        "无美颜滤镜",
        "无修饰",
        "无 AI 磨皮",
        "无塑料感"
      ]
    }
  },
  "camera_angle_and_framing": {
    "angle": "略微侧面和略微后方",
    "perspective": "真实的抓拍",
    "framing": "中广角",
    "visibility": "上半身和部分桌子可见",
    "composition": "主体在画面中略小，轻微失衡"
  },
  "lighting": {
    "type": "刺眼且不完美",
    "sources": [
      "屋顶咖啡馆灯光",
      "城市街灯"
    ],
    "effects": [
      "曝光不均",
      "高光溢出",
      "深色阴影",
      "白平衡不完美"
    ]
  },
  "focus_and_quality": {
    "focus": "略微更聚焦于主体",
    "background_blur": "由于弱光和相机限制造成的柔和模糊",
    "restrictions": [
      "非人像模式模糊",
      "非人工散景"
    ],
    "artifacts": [
      "可见的数字噪点",
      "颗粒感",
      "轻微运动模糊",
      "对焦精度不完美",
      "有限的动态范围"
    ]
  },
  "background": {
    "location": "雅加达屋顶咖啡馆",
    "elements": [
      "桌子",
      "栏杆",
      "其他人随意可见",
      "远处的雅加达城市景观"
    ]
  }
}
```

## 来源备注
- 源站作者：Sudee🥀
- 源站 UUID：9xZzzILjq2
- 源站分类：05_人物肖像与写实摄影

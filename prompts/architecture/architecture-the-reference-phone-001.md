---
id: "architecture-the-reference-phone-001"
title: "夜景咖啡馆 candid 手机抓拍真人复刻"
category: architecture
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["夜晚", "城市", "天台", "女生", "手机", "饮品", "休闲", "抓拍"]
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
  "task": "photo_editing",
  "instruction": "Replicate the exact appearance of the person from the reference image—including their face, hair, and the specific clothing they are wearing. Place this person into the pose and setting described below. The subject should be performing the actions (sitting, using phone, holding drink) while maintaining their visual identity and attire from the reference photo.",
  "photo_style": {
    "type": "candid_smartphone_photo",
    "aspect_ratio": "3:4",
    "time": "night",
    "device": "low-end Android phone",
    "shooting_style": "handheld, rushed, imperfect",
    "quality": "realistic, unpolished"
  },
  "subject": {
    "appearance_reference": "EXACT match of the person's face, features, and hair from reference image",
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
    "seating": "sitting casually at a café table",
    "moment": "unplanned, unposed",
    "hands": {
      "one_hand": "holding a glass of drink",
      "other_hand": "using phone"
    },
    "attention": "focused on her phone, unaware of camera (candid)"
  },
  "clothing_and_appearance": {
    "attire": {
      "requirement": "MUST be an exact replica of the clothing (style, color, material) worn in the reference image",
      "fit": "retained from reference but adapted to the sitting pose"
    },
    "hair": {
      "style": "matches reference image",
      "detail": "flowing naturally in the night breeze"
    },
    "skin": {
      "look": "matches reference image",
      "restrictions": [
        "no beauty filter",
        "no retouching",
        "no AI-polished skin"
      ]
    }
  },
  "camera_angle_and_framing": {
    "angle": "slightly from the side and slightly behind",
    "perspective": "authentic candid",
    "framing": "medium-wide",
    "visibility": "upper body and part of table visible"
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
    "artifacts": [
      "visible digital noise",
      "grain",
      "slight motion blur",
      "imperfect focus accuracy"
    ]
  },
  "background":

## 中文译文（源站提供）
```json
{
  "task": "photo_editing",
  "instruction": "精确复制参考图像中人物的外观——包括他们的脸部、头发以及所穿的特定服装。将此人置于下方描述的姿势和场景中。主体应在保持其视觉特征和参考照片中服装的同时，执行这些动作（坐着、使用手机、拿着饮料）。",
  "photo_style": {
    "type": "抓拍的智能手机照片",
    "aspect_ratio": "3:4",
    "time": "夜晚",
    "device": "低端安卓手机",
    "shooting_style": "手持、仓促、不完美",
    "quality": "真实、未经修饰"
  },
  "subject": {
    "appearance_reference": "与参考图像中人物的脸部、特征和头发完全匹配",
    "vibe": [
      "邻家女孩",
      "年轻",
      "清新",
      "日常",
      "非模特般",
      "不华丽",
      "非网红",
      "未经造型"
    ]
  },
  "pose_and_action": {
    "seating": "随意地坐在咖啡馆的桌旁",
    "moment": "非计划、非摆拍",
    "hands": {
      "one_hand": "拿着一杯饮料",
      "other_hand": "使用手机"
    },
    "attention": "专注于手机，未察觉到相机（抓拍）"
  },
  "clothing_and_appearance": {
    "attire": {
      "requirement": "必须与参考图像中穿着的服装（款式、颜色、材质）完全一致",
      "fit": "保留参考图像中的合身度，但适应坐姿"
    },
    "hair": {
      "style": "与参考图像匹配",
      "detail": "在夜风中自然飘动"
    },
    "skin": {
      "look": "与参考图像匹配",
      "restrictions": [
        "无美颜滤镜",
        "无修饰",
        "无 AI 磨皮"
      ]
    }
  },
  "camera_angle_and_framing": {
    "angle": "略微从侧面和略微从后面",
    "perspective": "真实的抓拍视角",
    "framing": "中广角",
    "visibility": "上半身和部分桌子可见"
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
      "深邃阴影",
      "白平衡不完美"
    ]
  },
  "focus_and_quality": {
    "focus": "略微更侧重于主体",
    "background_blur": "由于弱光和相机限制造成的柔和模糊",
    "artifacts": [
      "可见的数字噪点",
      "颗粒感",
      "轻微的运动模糊",
      "对焦精度不完美"
    ]
  },
  "background": "模糊的城市夜景，有霓虹灯和远处的车辆灯光"
}
```

## 来源备注
- 源站作者：BeautyVerse
- 源站 UUID：Wi7ibKWkW2
- 源站分类：05_人物肖像与写实摄影

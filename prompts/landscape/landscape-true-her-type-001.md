---
id: "landscape-true-her-type-001"
title: "饥饿少女居家四格写真"
category: landscape
subcategory: "09_故事分镜角色设定"
aesthetic: japanese-zen-garden
tags: ["日系", "日常", "写真", "自然光", "白色", "家居", "女生", "温柔"]
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
language: mixed
created_at: 2026-05-30
version: "1.0.0"
related_to: []
---

# 正文 prompt
{
  "layout": {
    "type": "2x2 grid",
    "description": "画面を4等分した2×2構成。各フレームに同一人物を使用し、距離・構図・アングル・視点をすべて変える。"
  },
  "source": {
    "mode": "image_reference",
    "reference_images": {
      "primary": "base_person_image"
    },
    "preserve": {
      "same_person": true,
      "identity_lock": true,
      "keep_face": true,
      "keep_hairstyle": true,
      "keep_outfit": true
    }
  },
  "subject": {
    "person": "Japanese woman",
    "emotion": "hungry but playful, slightly tired, relatable"
  },
  "poses": {
    "variation_rule": "each frame uses a different composition and angle",
    "base_shot_type": "middle shot",
    "frame_variations": [
      "sitting at a small apartment table, shoulders slightly slumped, holding her stomach with one hand, faint amused smile",
      "leaning back in a chair, head tilted up, eyes half-closed, one hand resting on her stomach as if enduring hunger",
      "standing in the kitchen area, arms loosely crossed over her midsection, looking toward the fridge with a resigned playful expression",
      "sitting on the sofa, knees drawn slightly up, one hand pressing lightly on her stomach, soft laugh at her own situation"
    ]
  },
  "accessories": {
    "handheld_item": "empty plate or nothing in hands"
  },
  "environment": {
    "location": "small apartment interior",
    "room_type": "kitchen and living area",
    "time": "late afternoon",
    "context": "missed lunch, waiting until dinner",
    "details": [
      "simple dining table",
      "compact kitchen",
      "sofa and low table",
      "everyday lived-in apartment feel"
    ]
  },
  "lighting": {
    "primary": "soft natural daylight from window",
    "secondary": "subtle indoor ambient light"
  },
  "camera": {
    "shot_type": "middle shot",
    "lens_feel": "slight wide-angle",
    "framing": "waist-up, subject centered with gentle variation per frame"
  },
  "color_tone": "natural color, neutral skin tones, realistic indoor daylight balance",
  "image_quality": {
    "realism": "photorealistic",
    "style": "casual everyday snapshot"
  }
}

## 中文译文（源站提供）
```json
{
  "layout": {
    "type": "2x2 网格",
    "description": "一个 2x2 的构图，将屏幕分成四部分。每个画面都使用同一个人，但改变了距离、构图、角度和视角。"
  },
  "source": {
    "mode": "图像参考",
    "reference_images": {
      "primary": "base_person_image"
    },
    "preserve": {
      "same_person": true,
      "identity_lock": true,
      "keep_face": true,
      "keep_hairstyle": true,
      "keep_outfit": true
    }
  },
  "subject": {
    "person": "日本女性",
    "emotion": "饥饿但俏皮，略显疲惫，引人共鸣"
  },
  "poses": {
    "variation_rule": "每个画面都采用不同的构图和角度",
    "base_shot_type": "中景",
    "frame_variations": [
      "坐在小公寓餐桌旁，肩膀微塌，一只手捂着肚子，带着一丝淡淡的、有趣的微笑",
      "靠在椅子上，头微微仰起，眼睛半闭，一只手放在肚子上，仿佛在忍受饥饿",
      "站在厨房区域，双臂随意交叉在腰部，带着一种无奈而俏皮的表情看向冰箱",
      "坐在沙发上，膝盖微曲，一只手轻轻按着肚子，对自己的处境发出柔和的笑声"
    ]
  },
  "accessories": {
    "handheld_item": "空盘子或手中无物"
  },
  "environment": {
    "location": "小公寓室内",
    "room_type": "厨房和起居区",
    "time": "傍晚时分",
    "context": "错过了午餐，正在等待晚餐",
    "details": [
      "简单的餐桌",
      "紧凑型厨房",
      "沙发和矮桌",
      "日常居家感"
    ]
  },
  "lighting": {
    "primary": "窗户透进的柔和自然日光",
    "secondary": "微妙的室内环境光"
  },
  "camera": {
    "shot_type": "中景",
    "lens_feel": "略微广角",
    "framing": "腰部以上，主体居中，每个画面略有变化"
  },
  "color_tone": "自然色彩，中性肤色，逼真的室内日光平衡",
  "image_quality": {
    "realism": "超现实主义",
    "style": "休闲日常快照"
  }
}
```

## 来源备注
- 源站作者：SDT🌿
- 源站 UUID：tZL2LIfofs
- 源站分类：09_故事分镜角色设定

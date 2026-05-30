---
id: "landscape-camping-open-quality-001"
title: "星空下的越野露营夜景"
category: landscape
subcategory: "15_特定场景环境生成"
aesthetic: null
tags: ["夜晚", "露营", "篝火", "越野车", "沙漠", "星空", "暖光", "深蓝"]
recommended_models: 
  - banana-pro
recommended_params:
  aspect_ratio: "1:1"
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
  "image_prompt": {
    "quality": "{argument name="quality" default="8K hyper-realistic"}",
    "style": "moody night outdoor camping scene, cinematic lighting, deep blue ambient tones",
    "face_preservation": {
      "use_reference_face": true,
      "accuracy": "match exactly"
    },
    "scene": {
      "environment": "{argument name="environment" default="open desert plain at night"}",
      "lighting": "warm campfire glow against dark blue surroundings"
    },
    "subject": {
      "description": "man sitting on a folding chair near a bright campfire, relaxed posture",
      "outfit": "dark outdoor jacket, hat, rugged camping look"
    },
    "vehicle": {
      "type": "off-road SUV with rooftop tent open",
      "details": "rear doors open, interior camping lights on, large tires, adventure setup"
    },
    "composition": "wide-shot, fire in foreground, man on right, SUV on left, strong contrast",
    "signature": "VIVEK HY"
  }
}

## 中文译文（源站提供）
```json
{
  "image_prompt": {
    "quality": "{argument name=\"quality\" default=\"8K 超现实\"}",
    "style": "情绪化的夜间户外露营场景，电影级灯光，深蓝色环境色调",
    "face_preservation": {
      "use_reference_face": true,
      "accuracy": "精确匹配"
    },
    "scene": {
      "environment": "{argument name=\"environment\" default=\"夜间开阔的沙漠平原\"}",
      "lighting": "温暖的篝火光芒映衬着深蓝色环境"
    },
    "subject": {
      "description": "一名男子坐在篝火旁的折叠椅上，姿态放松",
      "outfit": "深色户外夹克，帽子，粗犷的露营装扮"
    },
    "vehicle": {
      "type": "带开放式车顶帐篷的越野 SUV",
      "details": "后门打开，车内露营灯亮着，大轮胎，探险装备"
    },
    "composition": "广角镜头，前景是篝火，男子在右侧，SUV 在左侧，强烈对比",
    "signature": "VIVEK HY"
  }
}
```

## 来源备注
- 源站作者：Vivek HY
- 源站 UUID：BvOq9hYtIb
- 源站分类：15_特定场景环境生成

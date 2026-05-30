---
id: "architecture-layer-subject-top-001"
title: "艺术馆内金发美女时尚写真生成提示词"
category: architecture
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["女性", "金发", "长发", "灰色", "牛仔", "短裤", "美术馆", "抽象"]
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
related_to: []
---

# 正文 prompt
{
  "meta_data": {
    "prompt_version": "2.0",
    "use_case": "Photorealistic Image Generation",
    "main_subject_count": 1
  },
  "subject_layer": {
    "anatomy": {
      "demographics": {
        "gender": "Female",
        "age_group": "Young adult",
        "ethnicity": "Western",
        "skin_tone": "Tanned"
      },
      "face_detail": {
        "same_as_reference": true,
        "expression": "Slight smirk",
        "makeup": "Natural"
      },
      "hair": {
        "color": "Blonde",
        "length": "Long",
        "style": "Straight"
      },
      "body": {
        "pose": "Standing confidently",
        "attire": {
          "top": "Sexy grey halter-neck draped top with deep plunge neckline",
          "bottom": "Light blue denim mini shorts"
        }
      }
    }
  },
  "environment_layer": {
    "location": "Modern bright art gallery",
    "elements": [
      "Contemporary abstract paintings",
      "White walls",
      "High ceiling with skylight",
      "Polished concrete floor"
    ],
    "lighting": "Soft natural gallery lighting"
  },
  "photography_layer": {
    "style": "Professional fashion photography",
    "resolution": "8k",
    "details": "Ultra detailed, realistic"
  }
}

## 中文译文（源站提供）
```json
{
  "meta_data": {
    "prompt_version": "2.0",
    "use_case": "Photorealistic Image Generation",
    "main_subject_count": 1
  },
  "subject_layer": {
    "anatomy": {
      "demographics": {
        "gender": "女性",
        "age_group": "青年",
        "ethnicity": "西方人",
        "skin_tone": "晒黑的肤色"
      },
      "face_detail": {
        "same_as_reference": true,
        "expression": "略带嘲讽的笑容",
        "makeup": "自然妆"
      },
      "hair": {
        "color": "金色",
        "length": "长发",
        "style": "直发"
      },
      "body": {
        "pose": "自信地站立",
        "attire": {
          "top": "性感灰色挂脖垂坠式深 V 领上衣",
          "bottom": "浅蓝色牛仔迷你短裤"
        }
      }
    }
  },
  "environment_layer": {
    "location": "现代明亮的艺术画廊",
    "elements": [
      "当代抽象画作",
      "白色墙壁",
      "带天窗的高天花板",
      "抛光混凝土地面"
    ],
    "lighting": "柔和的自然画廊灯光"
  },
  "photography_layer": {
    "style": "专业时尚摄影",
    "resolution": "8k",
    "details": "超细节，逼真"
  }
}
```

## 来源备注
- 源站作者：Sharon Riley
- 源站 UUID：tyWrCJtprK
- 源站分类：05_人物肖像与写实摄影

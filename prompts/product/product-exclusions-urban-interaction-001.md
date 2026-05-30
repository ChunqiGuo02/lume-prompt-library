---
id: "product-exclusions-urban-interaction-001"
title: "霓虹都市夜拍人像预设"
category: product
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["人像", "竖屏", "夜晚", "都市", "街头", "霓虹", "女性", "写实"]
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
related_to: ["product-exclusions-urban-interaction-002"]
---

# 正文 prompt
{
  "request_id": "portrait_neon_urban_001",
  "configuration": {
    "model": "v6.0_or_latest",
    "output_settings": {
      "dimensions": {
        "width": 1080,
        "height": 1920,
        "aspect_ratio": "9:16",
        "target_resolution": "64K DSLR"
      }
    }
  },
  "scene_composition": {
    "subject": {
      "entity": "Young woman",
      "pose": "Standing confidently",
      "action": "Extending index finger forward toward camera lens",
      "interaction": "Dynamic gesture / POV interaction",
      "wardrobe": {
        "outerwear": "White striped baseball-style shirt",
        "undergarment": "Light inner shirt",
        "bottoms": "Cargo pants",
        "accessories": [
          "Necklace",
          "Crossbody bag"
        ]
      }
    },
    "environment": {
      "location": "Urban street",
      "time_of_day": "Night",
      "ambience": "Neon-lit",
      "background_elements": [
        "Colorful city lights",
        "Blurred passersby"
      ]
    },
    "cinematography": {
      "camera": {
        "perspective": "Wide-angle",
        "depth_of_field": "Soft bokeh",
        "motion": "Slight motion blur"
      },
      "lighting": {
        "style": "Cinematic",
        "primary_sources": ["Neon street lights", "City glow"]
      },
      "ui_overlay": {
        "enabled": true,
        "aesthetic": "Smartphone video recording",
        "on_screen_elements": [
          "REC 00:00:00",
          "8K/60fps",
          "Frame brackets",
          "VIDEO indicator",
          "CINEMATIC indicator"
        ]
      }
    }
  },
  "technical_rendering": {
    "style": "Hyper-realistic",
    "engines": [
      "Octane Render",
      "Unreal Engine 5"
    ]
  },
  "negative_prompt": {
    "stylistic_exclusions": [
      "cartoon",
      "illustration",
      "anime"
    ],
    "quality_exclusions": [
      "low quality",
      "pixelated",
      "blurry"
    ],
    "anatomical_exclusions": [
      "bad anatomy",
      "deformed hands",
      "extra fingers",
      "missing limbs",
      "bad proportions"
    ],
    "branding_exclusions": [
      "watermark (except for requested UI overlays)"
    ]
  }
}

## 中文译文（源站提供）
```json
{
  "request_id": "portrait_neon_urban_001",
  "configuration": {
    "model": "v6.0_or_latest",
    "output_settings": {
      "dimensions": {
        "width": 1080,
        "height": 1920,
        "aspect_ratio": "9:16",
        "target_resolution": "64K DSLR"
      }
    }
  },
  "scene_composition": {
    "subject": {
      "entity": "年轻女性",
      "pose": "自信站立",
      "action": "食指向前指向镜头",
      "interaction": "动态手势 / POV 互动",
      "wardrobe": {
        "outerwear": "白色条纹棒球衫",
        "undergarment": "浅色内搭",
        "bottoms": "工装裤",
        "accessories": [
          "项链",
          "斜挎包"
        ]
      }
    },
    "environment": {
      "location": "城市街道",
      "time_of_day": "夜晚",
      "ambience": "霓虹灯光",
      "background_elements": [
        "五彩斑斓的城市灯光",
        "模糊的路人"
      ]
    },
    "cinematography": {
      "camera": {
        "perspective": "广角",
        "depth_of_field": "柔和的散景",
        "motion": "轻微的运动模糊"
      },
      "lighting": {
        "style": "电影级",
        "primary_sources": ["霓虹路灯", "城市光晕"]
      },
      "ui_overlay": {
        "enabled": true,
        "aesthetic": "智能手机视频录制",
        "on_screen_elements": [
          "REC 00:00:00",
          "8K/60fps",
          "取景框",
          "VIDEO 指示器",
          "CINEMATIC 指示器"
        ]
      }
    }
  },
  "technical_rendering": {
    "style": "超现实主义",
    "engines": [
      "Octane Render",
      "Unreal Engine 5"
    ]
  },
  "negative_prompt": {
    "stylistic_exclusions": [
      "卡通",
      "插画",
      "动漫"
    ],
    "quality_exclusions": [
      "低质量",
      "像素化",
      "模糊"
    ],
    "anatomical_exclusions": [
      "解剖结构错误",
      "手部畸形",
      "多余手指",
      "肢体缺失",
      "比例失调"
    ],
    "branding_exclusions": [
      "水印（请求的 UI 叠加层除外）"
    ]
  }
}
```

## 来源备注
- 源站作者：Melis✨
- 源站 UUID：oeRAj3A9j1
- 源站分类：05_人物肖像与写实摄影

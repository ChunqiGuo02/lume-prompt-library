---
id: portrait-refraction-skin-editorial-1429
title: "棱镜折射时尚人像特写"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["现代", "简约", "高级", "平静", "棱镜", "折射", "彩虹", "人像"]
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
  "metadata": {
    "version": "1.1",
    "project": "Prism Refraction Editorial Close-Up",
    "style_preset": "modern_editorial"
  },
  "canvas_settings": {
    "dimensions": { "width": 1200, "height": 1200, "unit": "px" },
    "format": { "aspect_ratio": "1:1", "orientation": "square" }
  },
  "environment": {
    "location": {
      "setting": "minimal studio corner",
      "era": "contemporary",
      "atmosphere": "clean, premium, calm, gallery-like"
    },
    "lighting": {
      "primary_source": {
        "type": "large window light",
        "position": "camera-left",
        "temperature": "soft daylight",
        "behavior": "broad wrap, gentle falloff"
      },
      "modifier": {
        "type": "white bounce card",
        "position": "camera-right",
        "behavior": "soft fill without flattening"
      },
      "global_contrast": "medium"
    },
    "background_elements": {
      "wall": { "material": "matte plaster", "color": "{"wall color" "warm gray"}", "pattern": "smooth" }
    }
  },
  "props_and_optics": {
    "foreground_tool": {
      "item": "handheld optical prism",
      "use": "placed near lens to create controlled refraction fragments",
      "behavior": "rainbow edge splitting, geometric layering, no face obstruction on main eye"
    }
  },
  "character_model": {
    "identity": { "gender": "female", "age": "mid 20s", "ethnicity": "light to medium skin tone" },
    "anatomy_details": {
      "skin": "natural realistic texture, subtle freckles, visible pores",
      "hair": { "color": "{"hair color" "auburn"}", "style": "sleek straight, tucked behind one ear", "parting": "side" }
    },
    "performance": {
      "pose": "close-up, chin slightly down, eyes toward lens",
      "expression": "soft confidence, neutral lips"
    },
    "wardrobe": {
      "item": "structured blazer",
      "color": "cream",
      "finish": "matte fabric, fine weave"
    }
  },
  "cinematography": {
    "camera": { "angle": "eye-level", "framing": "tight close-up", "focus": "near eye razor-sharp" },
    "optics": {
      "technique": "prism refraction",
      "depth_of_field": "very shallow",
      "background_blur": "smooth creamy bokeh"
    },
    "color_profile": {
      "dominant": ["warm gray", "cream", "natural skin tones"],
      "accents": ["subtle rainbow refraction"],
      "grading": "clean editorial, gentle contrast, accurate color"
    }
  },
  "render_quality": {
    "positive_attributes": [
      "high resolution",
      "photorealistic",
      "realistic catchlights",
      "sharp skin micro-texture",
      "controlled refraction clarity"
    ],
    "negative_prompt": [
      "cartoon",
      "anime",
      "illustration",
      "milky haze",
      "overexposed skin",
      "blurred eyes",
      "double face",
      "distorted anatomy",
      "extra limbs"
    ]
  }
}

## 中文译文（源站提供）
```json
{
  "metadata": {
    "version": "1.1",
    "project": "棱镜折射特写编辑",
    "style_preset": "modern_editorial"
  },
  "canvas_settings": {
    "dimensions": { "width": 1200, "height": 1200, "unit": "px" },
    "format": { "aspect_ratio": "1:1", "orientation": "square" }
  },
  "environment": {
    "location": {
      "setting": "极简工作室一角",
      "era": "当代",
      "atmosphere": "干净、高级、平静、画廊般"
    },
    "lighting": {
      "primary_source": {
        "type": "大窗户光线",
        "position": "相机左侧",
        "temperature": "柔和日光",
        "behavior": "宽泛包裹、柔和衰减"
      },
      "modifier": {
        "type": "白色反光板",
        "position": "相机右侧",
        "behavior": "柔和补光，不使画面扁平"
      },
      "global_contrast": "中等"
    },
    "background_elements": {
      "wall": { "material": "哑光石膏", "color": "{\"wall color\" \"暖灰色\"}", "pattern": "平滑" }
    }
  },
  "props_and_optics": {
    "foreground_tool": {
      "item": "手持光学棱镜",
      "use": "放置在镜头附近，以产生受控的折射碎片",
      "behavior": "彩虹边缘分裂、几何分层、不遮挡主眼部"
    }
  },
  "character_model": {
    "identity": { "gender": "女性", "age": "20多岁", "ethnicity": "浅至中等肤色" },
    "anatomy_details": {
      "skin": "自然逼真的纹理、细微雀斑、可见毛孔",
      "hair": { "color": "{\"hair color\" \"赤褐色\"}", "style": "光滑直发，一侧别在耳后", "parting": "侧分" }
    },
    "performance": {
      "pose": "特写，下巴微收，眼睛看向镜头",
      "expression": "柔和自信，嘴唇自然"
    },
    "wardrobe": {
      "item": "结构化西装外套",
      "color": "米色",
      "finish": "哑光面料，细密编织"
    }
  },
  "cinematography": {
    "camera": { "angle": "视线水平", "framing": "紧密特写", "focus": "近眼部锐利对焦" },
    "optics": {
      "technique": "棱镜折射",
      "depth_of_field": "景深极浅",
      "background_blur": "柔滑奶油般焦外虚化"
    },
    "color_profile": {
      "dominant": ["暖灰色", "米色", "自然肤色"],
      "accents": ["细微彩虹折射"],
      "grading": "干净编辑风格、柔和对比度、色彩准确"
    }
  },
  "render_quality": {
    "positive_attributes": [
      "高分辨率",
      "照片级真实感",
      "逼真眼神光",
      "皮肤微纹理锐利",
      "受控折射清晰度"
    ],
    "negative_prompt": [
      "卡通",
      "动漫",
      "插画",
      "乳白色雾霾",
      "皮肤过曝",
      "眼睛模糊",
      "双面",
      "解剖扭曲",
      "多余肢体"
    ]
  }
}
```

## 来源备注
- 源站作者：Ahmet Muhammed Ertuğrul
- 源站 UUID：YkxeTEws3N
- 源站分类：05_人物肖像与写实摄影

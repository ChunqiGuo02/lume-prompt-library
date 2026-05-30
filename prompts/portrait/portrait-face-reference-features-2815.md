---
id: portrait-face-reference-features-2815
title: "高定礼服写真：精准复刻明星面容与奢华氛围"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["女性", "礼服", "银色", "优雅", "奢华", "肖像", "沉静", "精致"]
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
related_to: ["landscape-face-reference-features-002"]
---

# 正文 prompt
{
  "image_request": {
    "identity_lock": {
      "face_reference": "Use the uploaded reference image",
      "constraints": [
        "Preserve exact facial features",
        "No face alteration",
        "No morphing or beautification",
        "Maintain true bone structure, proportions, and asymmetry"
      ]
    },
    "subject": {
      "type": "Adult woman {\"subject name\" \"Sydney Sweeney\"} ",
      "style": "Luxury high-fashion editorial portrait"
    },
    "face_and_expression": {
      "features": "Striking, refined facial features identical to reference",
      "expression": "Calm, confident, elegant",
      "skin": {
        "finish": "Natural, flawless, realistic texture",
        "tone": "Warm, even, unedited"
      }
    },
    "makeup": {
      "style": "Luxury nude makeup",
      "color_palette": "Brown and bronze tones",
      "eyes": {
        "shadow": "Softly smudged bronze-brown",
        "liner": "Subtle, diffused",
        "lashes": "Defined but natural"
      },
      "contour": "Soft sculpting with bronzed warmth",
      "lips": {
        "shape": "Naturally full",
        "finish": "Glossy, well-contoured nude-bronze"
      },
      "overall": "Elegant, high-end, polished without excess"
    },
    "hair": {
      "color": "Deep dark brown / black",
      "length": "Very long",
      "style": "Voluminous, flowing waves",
      "finish": "Glossy, luxurious, red-carpet ready"
    },
    "wardrobe": {
      "dress": {
        "type": "Gala gown",
        "material": "Fully covered in silver crystals",
        "effect": "Intensely reflective, high sparkle",
        "straps": "Thin straps",
        "neckline": "Extremely deep V-neck",
        "slit": "High thigh slit",
        "fit": "Figure-enhancing, elegant, couture-level"
      }
    },
    "lighting": {
      "style": "Cinematic editorial lighting",
      "quality": "Bright highlights on crystals, soft sculpting on face",
      "mood": "Luxurious, dramatic, red-carpet glamour",
      "contrast": "Balanced with refined shadows"
    },
    "camera_and_quality": {
      "resolution": "Ultra-HD 8K",
      "realism": "Hyper-realistic photographic quality",
      "focus": "Sharp focus on face, hair, and crystal details",
      "depth_of_field": "Natural, editorial"
    },
    "aesthetic": {
      "theme": "High-glamour evening couture",
      "vibe": [
        "Elegant",
        "Powerful",
        "Luxury",
        "Timeless"
      ]
    },
    "negative_prompt": [
      "face alteration",
      "beauty morphing",
      "cartoon",
      "CGI",
      "3D render",
      "plastic skin",
      "over-retouching",
      "low detail",
      "blur",
      "illustration" Ratio 3.4
    ]
  }
   }

## 中文译文（源站提供）
```json
{
  "image_request": {
    "identity_lock": {
      "face_reference": "使用上传的参考图片",
      "constraints": [
        "保留精确的面部特征",
        "无面部改动",
        "无变形或美化",
        "保持真实的骨骼结构、比例和不对称性"
      ]
    },
    "subject": {
      "type": "成年女性 {\"subject name\" \"Sydney Sweeney\"} ",
      "style": "奢华高级时装编辑肖像"
    },
    "face_and_expression": {
      "features": "与参考图片完全一致的引人注目、精致的面部特征",
      "expression": "平静、自信、优雅",
      "skin": {
        "finish": "自然、无瑕、真实的质感",
        "tone": "温暖、均匀、未经修饰"
      }
    },
    "makeup": {
      "style": "奢华裸妆",
      "color_palette": "棕色和古铜色调",
      "eyes": {
        "shadow": "柔和晕染的古铜棕色",
        "liner": "微妙、柔和的眼线",
        "lashes": "清晰但自然的睫毛"
      },
      "contour": "柔和塑形，带有古铜色的暖意",
      "lips": {
        "shape": "自然饱满",
        "finish": "光泽、轮廓分明的裸古铜色"
      },
      "overall": "优雅、高端、精致而不冗余"
    },
    "hair": {
      "color": "深棕色/黑色",
      "length": "超长",
      "style": "蓬松、飘逸的波浪",
      "finish": "光泽、奢华、适合红毯造型"
    },
    "wardrobe": {
      "dress": {
        "type": "晚礼服",
        "material": "全身覆盖银色水晶",
        "effect": "强烈反光，高闪耀度",
        "straps": "细肩带",
        "neckline": "极深 V 领",
        "slit": "高开衩",
        "fit": "修饰身材、优雅、高级定制级别"
      }
    },
    "lighting": {
      "style": "电影级编辑灯光",
      "quality": "水晶上的明亮高光，面部柔和塑形",
      "mood": "奢华、戏剧性、红毯魅力",
      "contrast": "与精致阴影平衡"
    },
    "camera_and_quality": {
      "resolution": "超高清 8K",
      "realism": "超现实摄影品质",
      "focus": "面部、头发和水晶细节清晰对焦",
      "depth_of_field": "自然、编辑风格"
    },
    "aesthetic": {
      "theme": "华丽晚装定制",
      "vibe": [
        "优雅",
        "强大",
        "奢华",
        "永恒"
      ]
    },
    "negative_prompt": [
      "面部改动",
      "美颜变形",
      "卡通",
      "CGI",
      "3D 渲染",
      "塑料皮肤",
      "过度修饰",
      "低细节",
      "模糊",
      "插画"
    ]
  }
}
```

## 来源备注
- 源站作者：Artificial intelligence (Ai),Open Ai
- 源站 UUID：ZcPLDgvEn7
- 源站分类：05_人物肖像与写实摄影

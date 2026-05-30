---
id: portrait-reference-true-identity-1654
title: "现代厨房中男子专注制作芝士 Nachos 的写实生活照"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["厨房", "男士", "做饭", "芝士", "玉米片", "暖光", "写实", "居家"]
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
  "generation_request": {
    "meta_data": {
      "tool": "NanoBanana Pro",
      "task_type": "photorealistic_single_image_with_identity_lock",
      "version": "v1.0_KITCHEN_COOKING_CANDID_ONE_REF",
      "priority": "high"
    },
    "references": {
      "reference_images": {
        "primary_subject": "UPLOAD_MALE_REFERENCE_IMAGE (REQUIRED)"
      },
      "reference_rules": {
        "exactly_one_reference_only": true,
        "preserve_identity_primary": true,
        "identity_lock_strength": 0.995,
        "face_similarity_priority": "MAX",
        "strict_face_match": true,
        "no_identity_drift": true,
        "no_face_morphing": true,
        "no_beautification": true,
        "preserve_skin_texture": true
      }
    },
    "output_settings": {
      "aspect_ratio": "4:5",
      "orientation": "portrait",
      "resolution_target": "ultra_high_res",
      "render_style": "ultra_photoreal_candid_lifestyle",
      "sharpness": "crisp_but_natural",
      "film_grain": "subtle_analog"
    },
    "hard_constraints": [
      "Single subject only (the referenced male). No extra people.",
      "Face must match the reference exactly.",
      "No text, no logos, or watermarks.",
      "Realistic anatomy: no extra fingers/limbs."
    ],
    "creative_prompt": {
      "scene_summary": "Photoreal candid lifestyle photo in a modern home kitchen at night. The same man from the reference is leaning over a stovetop, cooking nachos in a large pan and grating cheese over them. Warm under-cabinet lighting, cozy intimate vibe, natural imperfections and texture.",
      "environment": {
        "location": "modern kitchen",
        "details": [
          "white square tile backsplash",
          "black induction cooktop",
          "under-cabinet light casting warm highlights",
          "countertop with casual items (mortar & pestle, tray, paper towel)"
        ],
        "time": "evening / night indoor"
      },
      "subject": {
        "identity": "EXACT same face as reference",
        "wardrobe": {
          "top": "{\"top wear\" \"shirtless OR sleeveless dark tank top\"} (choose the more realistic based on reference body/skin tone)",
          "bottom": "dark casual pants"
        },
        "pose_action": {
          "action": "grating cheese with both hands over a pan of nachos",
          "body_language": "leaning forward, focused on cooking",
          "expression": "soft concentration, subtle smile optional"
        },
        "details_to_keep_real": [
          "realistic arm hair and skin pores",
          "natural shadows on muscles",
          "accurate hands holding grater and cheese block"
        ]
      },
      "food_prop": {
        "dish": "nachos in a large pan",
        "topping": "freshly grated cheese falling onto chips",
        "realism_notes": "crispy chip texture, cheese strands visible, no plastic look"
      },
      "camera": {
        "style": "candid handheld phone photo look",
        "lens_feel": "28-"
      }
    }
  }
}

## 中文译文（源站提供）
```json
{
  "generation_request": {
    "meta_data": {
      "tool": "NanoBanana Pro",
      "task_type": "photorealistic_single_image_with_identity_lock",
      "version": "v1.0_KITCHEN_COOKING_CANDID_ONE_REF",
      "priority": "high"
    },
    "references": {
      "reference_images": {
        "primary_subject": "UPLOAD_MALE_REFERENCE_IMAGE (REQUIRED)"
      },
      "reference_rules": {
        "exactly_one_reference_only": true,
        "preserve_identity_primary": true,
        "identity_lock_strength": 0.995,
        "face_similarity_priority": "MAX",
        "strict_face_match": true,
        "no_identity_drift": true,
        "no_face_morphing": true,
        "no_beautification": true,
        "preserve_skin_texture": true
      }
    },
    "output_settings": {
      "aspect_ratio": "4:5",
      "orientation": "portrait",
      "resolution_target": "ultra_high_res",
      "render_style": "ultra_photoreal_candid_lifestyle",
      "sharpness": "crisp_but_natural",
      "film_grain": "subtle_analog"
    },
    "hard_constraints": [
      "仅限单个主体（参考图中的男性）。无其他人物。",
      "面部必须与参考图完全匹配。",
      "无文字、无标志或水印。",
      "逼真的解剖结构：无多余的手指/肢体。"
    ],
    "creative_prompt": {
      "scene_summary": "在现代家居厨房内，夜晚，一张真实的抓拍生活照。参考图中的同一位男性正俯身在炉灶前，在一个大平底锅里烹饪玉米片，并往上面撒奶酪碎。橱柜下方的暖光照明，营造出舒适温馨的氛围，带有自然的瑕疵和纹理。",
      "environment": {
        "location": "现代厨房",
        "details": [
          "白色方形瓷砖防溅板",
          "黑色电磁炉",
          "橱柜下方的灯光投射出温暖的高光",
          "台面上有随意摆放的物品（研钵和研杵、托盘、纸巾）"
        ],
        "time": "傍晚/室内夜晚"
      },
      "subject": {
        "identity": "与参考图中的面部完全相同",
        "wardrobe": {
          "top": "{\"top wear\" \"赤膊或无袖深色背心\"}（根据参考图中的身体/肤色选择更真实的）",
          "bottom": "深色休闲裤"
        },
        "pose_action": {
          "action": "双手在玉米片平底锅上方擦奶酪",
          "body_language": "身体前倾，专注于烹饪",
          "expression": "柔和专注，可选择带有一丝微笑"
        },
        "details_to_keep_real": [
          "逼真的手臂毛发和皮肤毛孔",
          "肌肉上的自然阴影",
          "准确地手持擦丝器和奶酪块"
        ]
      },
      "food_prop": {
        "dish": "大平底锅里的玉米片",
        "topping": "新鲜擦碎的奶酪落到薯片上",
        "realism_notes": "酥脆的薯片质感，奶酪丝可见，无塑料感"
      },
      "camera": {
        "style": "抓拍手持手机照片效果",
        "lens_feel": "28-"
      }
    }
  }
}
```

## 来源备注
- 源站作者：Özge
- 源站 UUID：8buAETXiFr
- 源站分类：05_人物肖像与写实摄影

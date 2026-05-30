---
id: portrait-true-reference-pose-1060
title: "情侣草地瑜伽飞机式欢乐抓拍"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["情侣", "户外", "草地", "山丘", "浪漫", "欢笑", "自然", "日光"]
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
      "task_type": "photoreal_romantic_candid_outdoor",
      "version": "v1.0_ACROYOGA_AIRPLANE_PICNIC_MEADOW_DAYLIGHT_NO_TEXT",
      "priority": "highest"
    },
    "references": {
      "reference_image_1": {
        "source": "UPLOAD_REFERENCE_IMAGE (REQUIRED)",
        "purpose": "FACE_IDENTITY_LOCK_FEMALE",
        "strict_lock": true,
        "face_similarity_priority": "MAX",
        "no_identity_blending": true,
        "no_beautify": true,
        "no_age_shift": true,
        "preserve_skin_texture": true,
        "preserve_facial_proportions": true
      },
      "reference_image_2": {
        "source": "UPLOAD_REFERENCE_IMAGE (REQUIRED)",
        "purpose": "POSE_COMPOSITION_LOCK_ACROYOGA_AIRPLANE",
        "strict_lock": true,
        "preserve_pose": true,
        "preserve_composition": true
      }
    },
    "output_settings": {
      "aspect_ratio": "4:5",
      "orientation": "portrait",
      "resolution_target": "ultra_high_res",
      "render_style": "candid_editorial_photoreal",
      "sharpness": "natural_crisp_faces",
      "film_grain": "subtle_35mm",
      "color_grade": "soft_daylight_natural_greens",
      "dynamic_range": "natural_not_hdr",
      "skin_rendering": "real_texture_no_filter"
    },
    "creative_prompt": {
      "scene_summary": "Ultra-photorealistic candid outdoor couple photo in a green meadow during soft daylight. A playful acro-yoga 'airplane' moment: the man lies on his back on a red picnic blanket and lifts the woman horizontally above him with both hands (supporting her torso/waist area). The woman stretches both arms wide like flying, laughing toward camera. Realistic proportions, safe stable pose, spontaneous joyful vibe.",
      "environment": {
        "location": "open grassy meadow with rolling hills",
        "background": "soft-focus hills, a few trees, cloudy sky, distant people very small",
        "lighting": "natural overcast daylight, soft shadows, no flash"
      },
      "subjects": {
        "female": {
          "identity": "MATCH_REFERENCE_FACE_EXACTLY",
          "wardrobe": "white casual set (sleeveless top + loose pants), clean and sporty",
          "expression": "big genuine laugh, eyes smiling",
          "pose": "horizontal flying pose, arms wide, legs extended, body straight",
          "hands_nails": "short_natural_nails_clear_or_nude_polish_not_acrylic",
          "no_rings": "no_engagement_ring_no_solitaire"
        },
        "male": {
          "wardrobe": "light blue hoodie + light denim jeans",
          "pose": "lying on back, arms extended upward supporting her securely, relaxed face"
        }
      },
      "props": {
        "picnic": "{"picnic blanket color" "red"} blanket, small bag and casual picnic items at edge (subtle, not branded)"
      },
      "camera_style": {
        "framing": "vertical 4:5, full scene including blanket and both bodies, slight wide-an"
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
      "task_type": "photoreal_romantic_candid_outdoor",
      "version": "v1.0_ACROYOGA_AIRPLANE_PICNIC_MEADOW_DAYLIGHT_NO_TEXT",
      "priority": "highest"
    },
    "references": {
      "reference_image_1": {
        "source": "UPLOAD_REFERENCE_IMAGE (REQUIRED)",
        "purpose": "FACE_IDENTITY_LOCK_FEMALE",
        "strict_lock": true,
        "face_similarity_priority": "MAX",
        "no_identity_blending": true,
        "no_beautify": true,
        "no_age_shift": true,
        "preserve_skin_texture": true,
        "preserve_facial_proportions": true
      },
      "reference_image_2": {
        "source": "UPLOAD_REFERENCE_IMAGE (REQUIRED)",
        "purpose": "POSE_COMPOSITION_LOCK_ACROYOGA_AIRPLANE",
        "strict_lock": true,
        "preserve_pose": true,
        "preserve_composition": true
      }
    },
    "output_settings": {
      "aspect_ratio": "4:5",
      "orientation": "portrait",
      "resolution_target": "ultra_high_res",
      "render_style": "candid_editorial_photoreal",
      "sharpness": "natural_crisp_faces",
      "film_grain": "subtle_35mm",
      "color_grade": "soft_daylight_natural_greens",
      "dynamic_range": "natural_not_hdr",
      "skin_rendering": "real_texture_no_filter"
    },
    "creative_prompt": {
      "scene_summary": "在柔和的日光下，青翠草地上拍摄的超逼真户外情侣抓拍照片。一个有趣的空中瑜伽“飞机”时刻：男人仰卧在红色野餐毯上，双手（支撑她的躯干/腰部区域）将女人水平举起。女人双臂张开，像在飞翔一样，笑着看向镜头。比例真实，姿势安全稳定，充满自发欢乐的氛围。",
      "environment": {
        "location": "开阔的草地，有连绵起伏的山丘",
        "background": "柔焦的山丘，几棵树，多云的天空，远处的人非常小",
        "lighting": "自然阴天日光，柔和的阴影，无闪光灯"
      },
      "subjects": {
        "female": {
          "identity": "MATCH_REFERENCE_FACE_EXACTLY",
          "wardrobe": "白色休闲套装（无袖上衣 + 宽松裤），干净且运动风",
          "expression": "真诚的大笑，眼睛带笑",
          "pose": "水平飞翔姿势，双臂张开，双腿伸展，身体挺直",
          "hands_nails": "短而自然的指甲，透明或裸色指甲油，非亚克力",
          "no_rings": "无订婚戒指，无单钻戒指"
        },
        "male": {
          "wardrobe": "浅蓝色连帽衫 + 浅色牛仔裤",
          "pose": "仰卧，双臂向上伸展，稳固地支撑着她，面部放松"
        }
      },
      "props": {
        "picnic": "{\"picnic blanket color\" \"red\"} 毯子，边缘有小包和休闲野餐物品（不显眼，无品牌）"
      },
      "camera_style": {
        "framing": "垂直 4:5，包含毯子和两人全身的完整场景，略微广角"
      }
    }
  }
}
```

## 来源备注
- 源站作者：Özge Döner
- 源站 UUID：cAsZv1lqlh
- 源站分类：05_人物肖像与写实摄影

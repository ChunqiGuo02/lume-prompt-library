---
id: portrait-true-flash-reference-0997
title: "巴黎夜景下情侣浪漫合影写真"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["巴黎", "铁塔", "夜晚", "情侣", "浪漫", "闪光", "奢华", "礼服"]
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
      "task_type": "photoreal_cinematic_flash_night_editorial_couple",
      "version": "v1.0_PARIS_EIFFEL_TOWER_NIGHT_FLASH_COUPLE_GLAM_NO_AI_LOOK",
      "priority": "highest"
    },

    "references": {
      "reference_image_1": {
        "source": "UPLOAD_REFERENCE_IMAGE (OPTIONAL)",
        "purpose": "COUPLE_POSE_COMPOSITION_STYLE_ANCHOR",
        "strict_lock": true,
        "preserve_pose": true,
        "preserve_body_proportions": true,
        "no_body_rescale": true,
        "no_identity_blending": true
      },
      "reference_image_2": {
        "source": "UPLOAD_REFERENCE_IMAGE (OPTIONAL)",
        "purpose": "FEMALE_FACE_IDENTITY_LOCK",
        "strict_lock": true,
        "face_similarity_priority": "MAX",
        "no_beautify": true,
        "no_age_shift": true,
        "preserve_skin_texture": true,
        "preserve_facial_proportions": true
      },
      "reference_image_3": {
        "source": "UPLOAD_REFERENCE_IMAGE (OPTIONAL)",
        "purpose": "MALE_FACE_IDENTITY_LOCK",
        "strict_lock": true,
        "face_similarity_priority": "MAX",
        "no_beautify": true,
        "no_age_shift": true,
        "preserve_skin_texture": true,
        "preserve_facial_proportions": true
      }
    },

    "output_settings": {
      "aspect_ratio": "3:4",
      "orientation": "portrait",
      "resolution_target": "ultra_high_res",
      "render_style": "cinematic_flash_editorial",
      "sharpness": "flash_crisp_subject_soft_background_bokeh",
      "film_grain": "very_subtle_35mm",
      "color_grade": "warm_night_flash_neutral_skin",
      "dynamic_range": "natural_not_hdr",
      "skin_rendering": "real_texture_editorial_finish"
    },

    "creative_prompt": {
      "scene_summary": "Ultra-photorealistic nighttime couple portrait in Paris with the Eiffel Tower glowing softly in the background bokeh. A well-dressed man in a classic black tuxedo holds and lifts his partner in a playful romantic pose. The woman wears a silver crystal fringe mini dress with a matching sparkly choker and sheer opera gloves. Both are smiling and making warm eye contact, captured like a candid red-carpet afterparty moment with on-camera flash.",

      "environment": {
        "location": "Paris night garden / terrace viewpoint",
        "background": "Eiffel Tower lights visible as soft bokeh, dark foliage silhouettes, distant city lights",
        "lighting": "direct on-camera flash as key light, minimal ambient spill, realistic falloff into dark background",
        "atmosphere": "luxury nightlife, romantic, celebratory"
      },

      "subjects": {
        "male": {
          "wardrobe": "black tuxedo jacket, white dress shirt, black bow tie, tailored trousers, polished black shoes",
          "grooming": "neat haircut, natural beard or light stubble, realistic skin texture",
          "pose": "supportive lift/hold with secure grip "
        }
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
      "task_type": "photoreal_cinematic_flash_night_editorial_couple",
      "version": "v1.0_PARIS_EIFFEL_TOWER_NIGHT_FLASH_COUPLE_GLAM_NO_AI_LOOK",
      "priority": "highest"
    },
    "references": {
      "reference_image_1": {
        "source": "UPLOAD_REFERENCE_IMAGE (OPTIONAL)",
        "purpose": "COUPLE_POSE_COMPOSITION_STYLE_ANCHOR",
        "strict_lock": true,
        "preserve_pose": true,
        "preserve_body_proportions": true,
        "no_body_rescale": true,
        "no_identity_blending": true
      },
      "reference_image_2": {
        "source": "UPLOAD_REFERENCE_IMAGE (OPTIONAL)",
        "purpose": "FEMALE_FACE_IDENTITY_LOCK",
        "strict_lock": true,
        "face_similarity_priority": "MAX",
        "no_beautify": true,
        "no_age_shift": true,
        "preserve_skin_texture": true,
        "preserve_facial_proportions": true
      },
      "reference_image_3": {
        "source": "UPLOAD_REFERENCE_IMAGE (OPTIONAL)",
        "purpose": "MALE_FACE_IDENTITY_LOCK",
        "strict_lock": true,
        "face_similarity_priority": "MAX",
        "no_beautify": true,
        "no_age_shift": true,
        "preserve_skin_texture": true,
        "preserve_facial_proportions": true
      }
    },
    "output_settings": {
      "aspect_ratio": "3:4",
      "orientation": "portrait",
      "resolution_target": "ultra_high_res",
      "render_style": "cinematic_flash_editorial",
      "sharpness": "flash_crisp_subject_soft_background_bokeh",
      "film_grain": "very_subtle_35mm",
      "color_grade": "warm_night_flash_neutral_skin",
      "dynamic_range": "natural_not_hdr",
      "skin_rendering": "real_texture_editorial_finish"
    },
    "creative_prompt": {
      "scene_summary": "在巴黎拍摄的超写实夜间情侣肖像，背景中埃菲尔铁塔柔和地发光，呈现散景效果。一位穿着经典黑色燕尾服的男士，衣着考究，以俏皮浪漫的姿势抱起他的伴侣。女士身穿银色水晶流苏迷你连衣裙，搭配闪亮项圈和薄纱歌剧手套。两人都面带微笑，深情对视，仿佛是红毯派对后被相机闪光灯捕捉到的抓拍瞬间。",
      "environment": {
        "location": "巴黎夜间花园/露台观景点",
        "background": "埃菲尔铁塔灯光呈现柔和散景，深色树叶剪影，远处城市灯光",
        "lighting": "直射机顶闪光灯作为主光源，环境光溢出极少，背景逐渐变暗，光线衰减真实",
        "atmosphere": "奢华夜生活，浪漫，庆祝"
      },
      "subjects": {
        "male": {
          "wardrobe": "黑色燕尾服夹克，白色正装衬衫，黑色领结，定制长裤，擦亮的黑皮鞋",
          "grooming": "整洁发型，自然胡须或浅胡茬，真实皮肤纹理",
          "pose": "支撑性抱起/托举，抓握稳固"
        }
      }
    }
  }
}
```

## 来源备注
- 源站作者：Özge Döner
- 源站 UUID：oz1HKf9v9z
- 源站分类：05_人物肖像与写实摄影

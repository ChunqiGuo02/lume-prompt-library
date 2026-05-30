---
id: portrait-true-face-reference-0430
title: "卡普里岛游艇时尚写真：蓝白条纹长裙与海蚀拱门背景"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["游艇", "地中海", "度假", "旅行", "时尚", "条纹", "长裙", "蓝色"]
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
      "task_type": "photoreal_luxury_travel_editorial",
      "version": "v1.0_YACHT_CAPRI_FARAGLIONI_STRIPED_DRESS_EN",
      "priority": "highest",
      "language": "en"
    },
    "references": {
      "reference_image_face": {
        "source": "UPLOAD_REFERENCE_IMAGE (REQUIRED)",
        "purpose": "FACE_IDENTITY_LOCK",
        "strict_lock": true,
        "face_similarity_priority": "MAX",
        "no_identity_blending": true,
        "no_beautify": true,
        "no_age_shift": true,
        "preserve_skin_texture": true,
        "preserve_facial_proportions": true
      },
      "reference_image_scene": {
        "source": "UPLOAD_REFERENCE_IMAGE (OPTIONAL)",
        "purpose": "POSE_COMPOSITION_LIGHTING_ANCHOR",
        "strict_lock": false,
        "preserve_pose": true,
        "preserve_composition": true,
        "preserve_mood": true
      }
    },
    "global_constraints": {
      "rating": "PG-13",
      "no_explicit_sexual_content": true,
      "no_nudity": true,
      "no_text": true,
      "no_logos": true,
      "no_watermark": true
    },
    "output_settings": {
      "aspect_ratio": "4:5",
      "orientation": "portrait",
      "resolution_target": "ultra_high_res",
      "render_style": "ultra_photoreal_luxury_editorial_film_still",
      "sharpness": "crisp_but_natural",
      "film_grain": "subtle_modern_film",
      "color_grade": "mediterranean_noon_clean",
      "dynamic_range": "natural_not_hdr",
      "skin_rendering": "real_texture_no_retouch"
    },
    "global_rules": {
      "camera_language": "50mm, eye-level, fashion editorial, shallow depth of field, focus on face and fabric texture",
      "lighting_language": "bright Mediterranean noon sun with soft bounce fill, realistic shadows, no flash",
      "authenticity_markers": "no AI glow, no HDR, realistic sea reflections, natural skin texture, correct hands"
    },
    "creative_prompt": {
      "scene_summary": "A luxury travel fashion editorial portrait on a yacht in the Mediterranean, with dramatic limestone sea stacks and deep blue water in the background. The same adult woman (face MUST match the reference 100%) is seated on the yacht deck in a flowing {"dress color" "blue-and-white"} striped maxi dress with a matching scarf detail. Calm, elegant expression, effortless vacation glamour.",
      "subject_details": {
        "count": 1,
        "description": "adult woman, exact same identity as reference",
        "expression": "soft confident smile, relaxed gaze to camera",
        "face_visibility": "full face clearly visible, sharp focus for identity match",
        "skin_and_face": "natural texture, no retouch, realistic pores",
        "hair": "long dark hair, natural shine, slightly wind-touched strands"
      },
      "wardrobe_and_style": {
        "outfit": "blue-and-white striped flowing maxi dress, thin straps, fitted bodice, voluminous ski"
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
      "task_type": "photoreal_luxury_travel_editorial",
      "version": "v1.0_YACHT_CAPRI_FARAGLIONI_STRIPED_DRESS_EN",
      "priority": "highest",
      "language": "en"
    },
    "references": {
      "reference_image_face": {
        "source": "UPLOAD_REFERENCE_IMAGE (REQUIRED)",
        "purpose": "FACE_IDENTITY_LOCK",
        "strict_lock": true,
        "face_similarity_priority": "MAX",
        "no_identity_blending": true,
        "no_beautify": true,
        "no_age_shift": true,
        "preserve_skin_texture": true,
        "preserve_facial_proportions": true
      },
      "reference_image_scene": {
        "source": "UPLOAD_REFERENCE_IMAGE (OPTIONAL)",
        "purpose": "POSE_COMPOSITION_LIGHTING_ANCHOR",
        "strict_lock": false,
        "preserve_pose": true,
        "preserve_composition": true,
        "preserve_mood": true
      }
    },
    "global_constraints": {
      "rating": "PG-13",
      "no_explicit_sexual_content": true,
      "no_nudity": true,
      "no_text": true,
      "no_logos": true,
      "no_watermark": true
    },
    "output_settings": {
      "aspect_ratio": "4:5",
      "orientation": "portrait",
      "resolution_target": "ultra_high_res",
      "render_style": "ultra_photoreal_luxury_editorial_film_still",
      "sharpness": "crisp_but_natural",
      "film_grain": "subtle_modern_film",
      "color_grade": "mediterranean_noon_clean",
      "dynamic_range": "natural_not_hdr",
      "skin_rendering": "real_texture_no_retouch"
    },
    "global_rules": {
      "camera_language": "50mm, eye-level, fashion editorial, shallow depth of field, focus on face and fabric texture",
      "lighting_language": "bright Mediterranean noon sun with soft bounce fill, realistic shadows, no flash",
      "authenticity_markers": "no AI glow, no HDR, realistic sea reflections, natural skin texture, correct hands"
    },
    "creative_prompt": {
      "scene_summary": "一幅在地中海游艇上的奢华旅行时尚编辑肖像，背景是壮丽的石灰岩海蚀柱和深蓝色海水。同一位成年女性（面部必须与参考图像 100% 匹配）坐在游艇甲板上，身穿一件飘逸的 {\"dress color\" \"blue-and-white\"} 条纹长裙，配有同款围巾细节。表情平静优雅，展现轻松的度假魅力。",
      "subject_details": {
        "count": 1,
        "description": "成年女性，与参考图像身份完全一致",
        "expression": "自信的浅笑，放松地凝视镜头",
        "face_visibility": "面部完全可见，清晰对焦以匹配身份",
        "skin_and_face": "自然纹理，未经修饰，毛孔真实可见",
        "hair": "深色长发，自然光泽，发丝略带风吹痕迹"
      },
      "wardrobe_and_style": {
        "outfit": "蓝白条纹飘逸长裙，细肩带，修身胸衣，蓬松裙摆"
      }
    }
  }
}
```

## 来源备注
- 源站作者：Özge Döner
- 源站 UUID：wsDdzraMKw
- 源站分类：05_人物肖像与写实摄影

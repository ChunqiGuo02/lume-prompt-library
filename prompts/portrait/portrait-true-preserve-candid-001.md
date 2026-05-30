---
id: "portrait-true-preserve-candid-001"
title: "赛道看台情侣 candid 生活照生成"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["赛车场", "情侣", "户外", "晴天", "休闲", "写实", "红色", "墨镜"]
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
      "task_type": "photoreal_candid_couple_racetrack_lifestyle",
      "version": "v1.0_RACEWEEKEND_CANDID_COUPLE_GRANDSTAND_NO_TEXT_EN",
      "priority": "highest",
      "language": "en"
    },
    "references": {
      "reference_image_face_female": {
        "source": "UPLOAD_REFERENCE_IMAGE (REQUIRED)",
        "purpose": "FACE_IDENTITY_LOCK_FEMALE",
        "strict_lock": true,
        "face_similarity_priority": "MAX",
        "no_identity_blending": true,
        "no_beautify": true,
        "no_age_shift": true,
        "preserve_skin_texture": true,
        "preserve_facial_proportions": true,
        "preserve_moles_freckles_scars": true,
        "preserve_eye_shape": true,
        "preserve_nose_shape": true,
        "preserve_lip_shape": true,
        "preserve_jawline": true
      },
      "reference_image_style": {
        "source": "UPLOAD_REFERENCE_IMAGE (OPTIONAL)",
        "purpose": "STYLE_COMPOSITION_ANCHOR",
        "strict_lock": false,
        "preserve_lighting": true,
        "preserve_palette": true,
        "preserve_vibe": true,
        "preserve_composition": true
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
      "render_style": "ultra_photoreal_candid_lifestyle_editorial",
      "sharpness": "crisp_but_natural",
      "film_grain": "subtle",
      "color_grade": "daylight_film_clean",
      "dynamic_range": "natural_not_hdr",
      "skin_rendering": "real_texture_no_retouch"
    },
    "global_rules": {
      "camera_language": "35mm candid photo, slight handheld feel, natural perspective, sharp focus on faces, realistic crowd depth",
      "lighting_language": "bright overcast-to-sunny daylight, soft shadows, no harsh flash",
      "authenticity_markers": "no AI glow, no HDR, accurate hands and fingers, no warped railings, identity must match reference exactly"
    },
    "creative_prompt": {
      "scene_summary": "A photoreal candid couple photo at a modern racing circuit grandstand. The adult woman (face EXACTLY matching the reference) stands in front, leaning on a metal barrier with relaxed posture. Her partner stands behind her with one arm around her waist in a natural, affectionate pose. Background shows a racetrack curve, grandstands, and a big screen in the distance, all softly blurred. Absolutely no readable brand names or text anywhere (screens, banners, track boards must be blank/unreadable).",
      "wardrobe_and_style": {
        "female_outfit": "{"female outfit" "red sporty crop top with a small blank shield-shaped patch (NO logo), low-rise blue jeans, black small rectangular sunglasses, gold c"}"
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
      "task_type": "photoreal_candid_couple_racetrack_lifestyle",
      "version": "v1.0_RACEWEEKEND_CANDID_COUPLE_GRANDSTAND_NO_TEXT_EN",
      "priority": "highest",
      "language": "en"
    },
    "references": {
      "reference_image_face_female": {
        "source": "UPLOAD_REFERENCE_IMAGE (REQUIRED)",
        "purpose": "FACE_IDENTITY_LOCK_FEMALE",
        "strict_lock": true,
        "face_similarity_priority": "MAX",
        "no_identity_blending": true,
        "no_beautify": true,
        "no_age_shift": true,
        "preserve_skin_texture": true,
        "preserve_facial_proportions": true,
        "preserve_moles_freckles_scars": true,
        "preserve_eye_shape": true,
        "preserve_nose_shape": true,
        "preserve_lip_shape": true,
        "preserve_jawline": true
      },
      "reference_image_style": {
        "source": "UPLOAD_REFERENCE_IMAGE (OPTIONAL)",
        "purpose": "STYLE_COMPOSITION_ANCHOR",
        "strict_lock": false,
        "preserve_lighting": true,
        "preserve_palette": true,
        "preserve_vibe": true,
        "preserve_composition": true
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
      "render_style": "ultra_photoreal_candid_lifestyle_editorial",
      "sharpness": "crisp_but_natural",
      "film_grain": "subtle",
      "color_grade": "daylight_film_clean",
      "dynamic_range": "natural_not_hdr",
      "skin_rendering": "real_texture_no_retouch"
    },
    "global_rules": {
      "camera_language": "35mm 抓拍照片，略带手持感，自然透视，面部对焦清晰，人群景深真实",
      "lighting_language": "明亮阴天至晴天的日光，柔和阴影，无刺眼闪光",
      "authenticity_markers": "无 AI 光晕，无 HDR，手部和手指准确，无扭曲栏杆，身份必须与参考图完全匹配"
    },
    "creative_prompt": {
      "scene_summary": "一张在现代赛车场看台上的写实抓拍情侣照。成年女性（面部与参考图完全匹配）站在前方，姿态放松地靠在金属栏杆上。她的伴侣站在她身后，一只手臂自然地环绕着她的腰部，姿态亲昵。背景显示赛道弯道、看台和远处的大屏幕，所有这些都柔和模糊。绝对不能有任何可读的品牌名称或文字（屏幕、横幅、赛道板必须空白/不可读）。",
      "wardrobe_and_style": {
        "female_outfit": "{\"female outfit\" \"红色运动露脐上衣，带有一个小的空白盾形补丁（无标志），低腰蓝色牛仔裤，黑色小矩形太阳镜，金色 c\"}"
      }
    }
  }
}
```

## 来源备注
- 源站作者：Özge Döner
- 源站 UUID：lCrFLDj7Qw
- 源站分类：05_人物肖像与写实摄影

---
id: "landscape-true-anime-reference-001"
title: "雨夜码头狂奔：真人与动漫角色的电影级冒险"
category: landscape
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["路飞", "暴雨", "港口", "码头", "奔跑", "写实", "动漫", "阴天"]
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
      "task_type": "cinematic_anime_reality_action_adventure",
      "version": "onepiece_storm_harbor_v7_CINEMATIC_GROUNDED_NO_STICKER",
      "priority": "highest"
    },

    "references": {
      "reference_image_1": {
        "source": "UPLOAD_REFERENCE_IMAGE (REQUIRED)",
        "purpose": "REFERENCE_PERSON_IDENTITY_AND_SCALE_ANCHOR",
        "strict_lock": true,
        "face_similarity_priority": "MAX",
        "preserve_body_proportions": true,
        "no_body_rescale": true,
        "no_identity_blending": true,
        "no_beautify": true,
        "no_age_shift": true,
        "preserve_skin_texture": true,
        "preserve_facial_proportions": true,
        "preserve_expression": true
      }
    },

    "output_settings": {
      "aspect_ratio": "16:9",
      "resolution_target": "ultra_high_res",
      "render_style": "cinematic_film_still",
      "sharpness": "crisp_but_natural",
      "film_grain": "subtle_true_35mm",
      "dynamic_range": "natural_not_hdr",
      "color_grade": "darker_stormy_maritime_noir_realism_low_saturation"
    },

    "camera": {
      "lens": "50mm_equivalent",
      "camera_height": "eye_level",
      "movement": "handheld_urgent_run_energy",
      "aperture": "f/2.8",
      "shutter_speed": "1/800",
      "iso": 800,
      "white_balance": "cool_4600K",
      "exposure_bias": "-0.5EV",
      "focus_priority": "reference_person_eyes_then_anime_character_face",
      "faces_must_be_sharp": true,
      "background_motion_blur_only": true,
      "depth_of_field_rule": "MATCH_REAL_LIVE_ACTION_DOF"
    },

    "global_rules": {
      "reality_rule": "REFERENCE PERSON AND ENVIRONMENT ARE FULLY PHOTOREAL LIVE-ACTION",
      "anime_rule": "ANIME CHARACTER REMAINS CEL-SHADED BUT MUST BE PHYSICALLY GROUNDED IN LIGHT, SHADOW, WEATHER, AND DEPTH",
      "scale_rule": [
        "ANIME CHARACTER HEIGHT WITHIN ±5% OF REFERENCE PERSON",
        "REALISTIC HUMAN BODY PROPORTIONS ONLY",
        "NO GIANT OR MINIATURE SCALE"
      ],
      "camera_rule": [
        "50MM LENS ONLY",
        "EYE-LEVEL CAMERA",
        "SAME CAMERA PLANE FOR ALL SUBJECTS",
        "NO WIDE-ANGLE DISTORTION"
      ],
      "action_rule": "SCENE MUST SHOW ACTIVE MOTION AND URGENCY, MID-STRIDE, WIND RESISTANCE, SPRAY IN AIR"
    },

    "lighting_rules": {
      "source": "overcast storm daylight + subtle practical harbor lights",
      "noir_exposure": "slightly underexposed low-key storm look",
      "shadows": [
        "MATCHED SHADOW DIRECTION",
        "CONTACT SHADOWS AT FEET",
        "CONSISTENT SHADOW SOFTNESS FROM OVERCAST SKY"
      ],
      "anime_lighting_match": "ANIME CHARACTER RECEIVES THE SAME OVERCAST KEY + WET DECK BOUNCE (WITHOUT BECOMING REALISTIC)"
    },

    "creative_prompt": {
      "story_context": "A high-stakes adventure sprint on a stormy harbor pier. Wind and sea spray whip across the frame. The referen"
}
}

## 中文译文（源站提供）
```json
{
  "generation_request": {
    "meta_data": {
      "tool": "NanoBanana Pro",
      "task_type": "cinematic_anime_reality_action_adventure",
      "version": "onepiece_storm_harbor_v7_CINEMATIC_GROUNDED_NO_STICKER",
      "priority": "highest"
    },

    "references": {
      "reference_image_1": {
        "source": "UPLOAD_REFERENCE_IMAGE (REQUIRED)",
        "purpose": "REFERENCE_PERSON_IDENTITY_AND_SCALE_ANCHOR",
        "strict_lock": true,
        "face_similarity_priority": "MAX",
        "preserve_body_proportions": true,
        "no_body_rescale": true,
        "no_identity_blending": true,
        "no_beautify": true,
        "no_age_shift": true,
        "preserve_skin_texture": true,
        "preserve_facial_proportions": true,
        "preserve_expression": true
      }
    },

    "output_settings": {
      "aspect_ratio": "16:9",
      "resolution_target": "ultra_high_res",
      "render_style": "cinematic_film_still",
      "sharpness": "crisp_but_natural",
      "film_grain": "subtle_true_35mm",
      "dynamic_range": "natural_not_hdr",
      "color_grade": "darker_stormy_maritime_noir_realism_low_saturation"
    },

    "camera": {
      "lens": "50mm_equivalent",
      "camera_height": "eye_level",
      "movement": "handheld_urgent_run_energy",
      "aperture": "f/2.8",
      "shutter_speed": "1/800",
      "iso": 800,
      "white_balance": "cool_4600K",
      "exposure_bias": "-0.5EV",
      "focus_priority": "reference_person_eyes_then_anime_character_face",
      "faces_must_be_sharp": true,
      "background_motion_blur_only": true,
      "depth_of_field_rule": "MATCH_REAL_LIVE_ACTION_DOF"
    },

    "global_rules": {
      "reality_rule": "参考人物和环境必须完全是照片级的真人实景",
      "anime_rule": "动漫角色保持赛璐珞风格，但必须在光线、阴影、天气和景深方面符合物理规律",
      "scale_rule": [
        "动漫角色身高在参考人物身高的 ±5% 范围内",
        "仅限真实人体比例",
        "无巨大或微缩比例"
      ],
      "camera_rule": [
        "仅限 50mm 镜头",
        "平视视角",
        "所有主体处于同一相机平面",
        "无广角畸变"
      ],
      "action_rule": "场景必须展现积极的运动和紧迫感，处于奔跑中，有风阻，水花飞溅"
    },

    "lighting_rules": {
      "source": "阴沉暴风雨的白天 + 微妙的港口实用灯光",
      "noir_exposure": "略微欠曝的低调暴风雨效果",
      "shadows": [
        "匹配的阴影方向",
        "脚部的接触阴影",
        "阴沉天空下一致的阴影柔和度"
      ],
      "anime_lighting_match": "动漫角色接收相同的阴沉主光 + 湿甲板反弹光（但不变得真实）"
    },

    "creative_prompt": {
      "story_context": "在暴风雨的港口码头上进行一场高风险的冒险冲刺。风和海浪的飞沫拍打着画面。参考人物"
    }
  }
}
```

## 来源备注
- 源站作者：Özge Döner
- 源站 UUID：vHykdxQle5
- 源站分类：05_人物肖像与写实摄影

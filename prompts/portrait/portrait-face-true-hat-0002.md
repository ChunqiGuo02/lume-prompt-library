---
id: portrait-face-true-hat-0002
title: "1920s noir风格男性角色电影级写真生成"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["男性", "礼帽", "风衣", "复古", "黑夜", "烟雾", "神秘", "悬疑"]
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
  "type": "image_to_image",
  "mode": "face_influence",
  "identity_strength": "medium",
  "aspect_ratio": "3:4",
  "orientation": "vertical",
  "quality": "8K",
  "realism": "hyper_cinematic",

  "face_reference": {
    "use_uploaded_image": true,
    "identity_lock": false,
    "influence_level": "high",
    "preserve_overall_look": true,
    "allow_minor_variation": true,
    "stylization_allowed": "subtle"
  },

  "subject": {
    "gender": "male",
    "age_group": "young_adult",
    "framing": "half_body",
    "pose": {
      "body_position": "standing_slightly_angled",
      "hand_1": "holding_trenchcoat_lapel",
      "hand_2": "relaxed_by_side",
      "head_angle": "tilted_down_slightly",
      "eye_direction": "looking_up_from_shadow_under_hat",
      "expression": "mysterious_calm_intense"
    }
  },

  "wardrobe": {
    "theme": "1920s_noir_gangster",
    "outfit": {
      "hat": "dark_fedora_low_over_eyes",
      "coat": "long_dark_trench_coat",
      "suit": "dark_three_piece_underneath",
      "tie": "classic_loose"
    },
    "fabric_texture": "visible_wool_and_felt",
    "era_accuracy": "1920s"
  },

  "environment": {
    "setting": "dimly_lit_alley_or_bar_entrance",
    "time": "night",
    "background_elements": [
      "wet_cobblestone",
      "faint_glowing_lamp",
      "blurred_city_shadows"
    ],
    "atmosphere": {
      "mood": "noir_mysterious_threatening",
      "smoke": "thin_cigarette_smoke"
    }
  },

  "lighting": {
    "style": "low_key_noir",
    "primary_source": "side_glow_from_lamp",
    "secondary_source": "soft_fill_from_back",
    "contrast": "high",
    "shadow_style": "hat_cast_shadow_over_eyes",
    "highlight_focus": [
      "hat_edge",
      "face_jawline",
      "coat_texture"
    ]
  },

  "camera": {
    "lens": "85mm",
    "aperture": "f1.4",
    "depth_of_field": "shallow",
    "focus_priority": "eyes_under_hat",
    "angle": "slightly_low",
    "framing_style": "cinematic_half_body"
  },

  "color_grading": {
    "style": "moody_noir",
    "palette": "deep_blacks_greys_amber_lights",
    "contrast": "strong",
    "blacks": "crushed",
    "highlights": "subtle_glow"
  },

  "render_settings": {
    "detail_level": "ultra_high",
    "sharpness": "high_on_face_and_fabric",
    "noise": "minimal",
    "film_grain": "subtle",
    "realism_boost": true
  },

  "negative_prompt": [
    "cartoon",
    "anime",
    "illustration",
    "painterly",
    "plastic_skin",
    "face_distortion",
    "bad_anatomy",
    "extra_limbs",
    "low_resolution",
    "soft_focus",
    "modern_elements",
    "logos",
    "text"
  ]
}

## 中文译文（源站提供）
```json
{
  "type": "image_to_image",
  "mode": "face_influence",
  "identity_strength": "medium",
  "aspect_ratio": "3:4",
  "orientation": "vertical",
  "quality": "8K",
  "realism": "hyper_cinematic",

  "face_reference": {
    "use_uploaded_image": true,
    "identity_lock": false,
    "influence_level": "high",
    "preserve_overall_look": true,
    "allow_minor_variation": true,
    "stylization_allowed": "subtle"
  },

  "subject": {
    "gender": "male",
    "age_group": "young_adult",
    "framing": "half_body",
    "pose": {
      "body_position": "standing_slightly_angled",
      "hand_1": "holding_trenchcoat_lapel",
      "hand_2": "relaxed_by_side",
      "head_angle": "tilted_down_slightly",
      "eye_direction": "looking_up_from_shadow_under_hat",
      "expression": "mysterious_calm_intense"
    }
  },

  "wardrobe": {
    "theme": "1920s_noir_gangster",
    "outfit": {
      "hat": "dark_fedora_low_over_eyes",
      "coat": "long_dark_trench_coat",
      "suit": "dark_three_piece_underneath",
      "tie": "classic_loose"
    },
    "fabric_texture": "visible_wool_and_felt",
    "era_accuracy": "1920s"
  },

  "environment": {
    "setting": "dimly_lit_alley_or_bar_entrance",
    "time": "night",
    "background_elements": [
      "wet_cobblestone",
      "faint_glowing_lamp",
      "blurred_city_shadows"
    ],
    "atmosphere": {
      "mood": "noir_mysterious_threatening",
      "smoke": "thin_cigarette_smoke"
    }
  },

  "lighting": {
    "style": "low_key_noir",
    "primary_source": "side_glow_from_lamp",
    "secondary_source": "soft_fill_from_back",
    "contrast": "high",
    "shadow_style": "hat_cast_shadow_over_eyes",
    "highlight_focus": [
      "hat_edge",
      "face_jawline",
      "coat_texture"
    ]
  },

  "camera": {
    "lens": "85mm",
    "aperture": "f1.4",
    "depth_of_field": "shallow",
    "focus_priority": "eyes_under_hat",
    "angle": "slightly_low",
    "framing_style": "cinematic_half_body"
  },

  "color_grading": {
    "style": "moody_noir",
    "palette": "deep_blacks_greys_amber_lights",
    "contrast": "strong",
    "blacks": "crushed",
    "highlights": "subtle_glow"
  },

  "render_settings": {
    "detail_level": "ultra_high",
    "sharpness": "high_on_face_and_fabric",
    "noise": "minimal",
    "film_grain": "subtle",
    "realism_boost": true
  },

  "negative_prompt": [
    "cartoon",
    "anime",
    "illustration",
    "painterly",
    "plastic_skin",
    "face_distortion",
    "bad_anatomy",
    "extra_limbs",
    "low_resolution",
    "soft_focus",
    "modern_elements",
    "logos",
    "text"
  ]
}
```

## 来源备注
- 源站作者：Gagan Singh
- 源站 UUID：oD3gYJfyuO
- 源站分类：05_人物肖像与写实摄影

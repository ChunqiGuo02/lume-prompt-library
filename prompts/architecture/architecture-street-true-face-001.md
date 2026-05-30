---
id: "architecture-street-true-face-001"
title: "雨夜街头1920s黑帮男子肖像生成"
category: architecture
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["男性", "香烟", "雨夜", "夜晚", "复古", "黑帮", "电影感", "冷色调"]
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
  "realism": "ultra_cinematic_photorealism",

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
      "body_position": "walking_forward",
      "movement": "slow_confident_stride",
      "hand_1": "holding_lit_cigarette",
      "hand_2": "inside_overcoat_pocket",
      "shoulders": "square_relaxed",
      "head_angle": "slightly_tilted",
      "eye_direction": "looking_directly_at_camera",
      "expression": "cold_fearless_authoritative"
    }
  },

  "wardrobe": {
    "theme": "1920s_street_gangster",
    "outfit": {
      "overcoat": "long_dark_wool_coat",
      "suit": "dark_three_piece_underneath",
      "waistcoat": "buttoned",
      "tie": "loosened",
      "cap": "flat_cap_worn_low"
    },
    "fabric_texture": "heavy_wool_visible",
    "weather_effects": "slightly_wet_fabric",
    "era_accuracy": "1920s"
  },

  "environment": {
    "setting": "1920s_city_street",
    "time": "night",
    "weather": "light_rain",
    "street_elements": [
      "wet_cobblestone_road",
      "vintage_street_lamps",
      "brick_buildings",
      "old_shopfronts"
    ],
    "atmosphere": {
      "mood": "dark_gritty_gangster",
      "smoke": "cigarette_smoke_mixing_with_rain"
    },
    "background": {
      "people": "distant_blurred_figures",
      "lights": "street_lamps_reflections",
      "bokeh": "rainy_light_bokeh"
    }
  },

  "lighting": {
    "style": "cinematic_night_lighting",
    "primary_source": "warm_street_lamps",
    "secondary_source": "cool_moonlight_fill",
    "contrast": "very_high",
    "shadow_style": "deep_hard_shadows",
    "highlight_focus": [
      "face",
      "eyes",
      "rain_drops",
      "coat_texture"
    ]
  },

  "camera": {
    "lens": "85mm",
    "aperture": "f1.4",
    "depth_of_field": "ultra_shallow",
    "focus_priority": "eyes",
    "motion_feel": "cinematic_freeze",
    "angle": "eye_level"
  },

  "color_grading": {
    "style": "neo_noir_film",
    "palette": "cool_blues_greys_warm_amber_lights",
    "contrast": "strong",
    "blacks": "crushed",
    "highlights": "glowing"
  },

  "render_settings": {
    "detail_level": "ultra_high",
    "sharpness": "high",
    "noise": "minimal",
    "film_grain": "cinematic_subtle",
    "realism_boost": true
  },

  "negative_prompt": [
    "cartoon",
    "anime",
    "illustration",
    "painterly_style",
    "plastic_skin",
    "face_warping",
    "bad_anatomy",
    "extra_limbs",
    "low_resolution",
    "overexposed",
    "modern_objects",
    "cars_modern",
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
  "realism": "ultra_cinematic_photorealism",

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
      "body_position": "walking_forward",
      "movement": "slow_confident_stride",
      "hand_1": "holding_lit_cigarette",
      "hand_2": "inside_overcoat_pocket",
      "shoulders": "square_relaxed",
      "head_angle": "slightly_tilted",
      "eye_direction": "looking_directly_at_camera",
      "expression": "cold_fearless_authoritative"
    }
  },

  "wardrobe": {
    "theme": "1920s_street_gangster",
    "outfit": {
      "overcoat": "long_dark_wool_coat",
      "suit": "dark_three_piece_underneath",
      "waistcoat": "buttoned",
      "tie": "loosened",
      "cap": "flat_cap_worn_low"
    },
    "fabric_texture": "heavy_wool_visible",
    "weather_effects": "slightly_wet_fabric",
    "era_accuracy": "1920s"
  },

  "environment": {
    "setting": "1920s_city_street",
    "time": "night",
    "weather": "light_rain",
    "street_elements": [
      "wet_cobblestone_road",
      "vintage_street_lamps",
      "brick_buildings",
      "old_shopfronts"
    ],
    "atmosphere": {
      "mood": "dark_gritty_gangster",
      "smoke": "cigarette_smoke_mixing_with_rain"
    },
    "background": {
      "people": "distant_blurred_figures",
      "lights": "street_lamps_reflections",
      "bokeh": "rainy_light_bokeh"
    }
  },

  "lighting": {
    "style": "cinematic_night_lighting",
    "primary_source": "warm_street_lamps",
    "secondary_source": "cool_moonlight_fill",
    "contrast": "very_high",
    "shadow_style": "deep_hard_shadows",
    "highlight_focus": [
      "face",
      "eyes",
      "rain_drops",
      "coat_texture"
    ]
  },

  "camera": {
    "lens": "85mm",
    "aperture": "f1.4",
    "depth_of_field": "ultra_shallow",
    "focus_priority": "eyes",
    "motion_feel": "cinematic_freeze",
    "angle": "eye_level"
  },

  "color_grading": {
    "style": "neo_noir_film",
    "palette": "cool_blues_greys_warm_amber_lights",
    "contrast": "strong",
    "blacks": "crushed",
    "highlights": "glowing"
  },

  "render_settings": {
    "detail_level": "ultra_high",
    "sharpness": "high",
    "noise": "minimal",
    "film_grain": "cinematic_subtle",
    "realism_boost": true
  },

  "negative_prompt": [
    "cartoon",
    "anime",
    "illustration",
    "painterly_style",
    "plastic_skin",
    "face_warping",
    "bad_anatomy",
    "extra_limbs",
    "low_resolution",
    "overexposed",
    "modern_objects",
    "cars_modern",
    "logos",
    "text"
  ]
}
```

## 来源备注
- 源站作者：Gagan Singh
- 源站 UUID：olJAPsIvZS
- 源站分类：05_人物肖像与写实摄影

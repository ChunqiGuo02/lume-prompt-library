---
id: portrait-reference-the-exact-0974
title: "山顶云海少女cosplay写真生成预设"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["蓝发", "可爱", "山顶", "蓝天", "白云", "少女", "比耶", "广角"]
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
related_to: []
---

# 正文 prompt
{
  "reference_priority": {
    "character_face": "STRICT_REFER_TO_IMAGE",
    "outfit_and_hair_logic": "FORCE_EXACT_REPLICA_FROM_REFERENCE",
    "footwear_logic": "FORCE_EXACT_REPLICA_FROM_REFERENCE",
    "consistency_weight": "MAXIMUM"
  },
  "subject": {
    "type": "woman_identity_perfectly_matched_to_reference_image",
    "framing": "extreme_high-angle_bird's-eye_view_full-body_shot",
    "identity_lock": "maintaining_identical_facial_features_from_reference",
    "features": {
      "eyes": "looking_up_at_camera_with_a_bright_friendly_gaze",
      "hair": "EXACT_REPLICATE_HAIRSTYLE_FROM_REFERENCE: length, color, texture, and style must be identical, no headwear",
      "expression": "cheerful_and_cute_expression_with_a_playful_smile"
    },
    "pose_structural_lock": {
      "overall": "standing_confidently_at_the_highest_point_of_a_rugged_mountain_peak",
      "arms": "right_hand_raised_near_the_eye_making_a_peace_sign_V-sign_YA_gesture",
      "hands": "fingers_clearly_formed_into_a_peace_sign_near_the_face",
      "shoulders": "slightly_slouched_creating_a_top-down_foreshortening_effect",
      "perspective": "heavy_wide-angle_distortion_making_the_head_look_larger_than_feet"
    }
  },
  "apparel_specification": {
    "logic": "CLOTHING_AND_FOOTWEAR_MUST_BE_AN_EXACT_CLONE_OF_REFERENCE_IMAGE",
    "outfit_main_piece": {
      "top": "Identical_inner_layer_as_seen_in_reference",
      "bottom": "Identical_pants_from_reference_image",
      "footwear": "EXACT_REPLICATE_FOOTWEAR_FROM_REFERENCE: replicate the specific shoes, colors, and design from the reference image exactly"
    }
  },
  "environment": {
    "setting": "the_summit_of_a_high_mountain_with_jagged_rocks_and_a_cliff_edge",
    "lighting": "bright_natural_daylight_with_soft_clouds_b"
  },
  "text_in_clouds": "{"cloud text" "YOUR TEXT HERE"}"
}

## 中文译文（源站提供）
```json
{
  "reference_priority": {
    "character_face": "STRICT_REFER_TO_IMAGE",
    "outfit_and_hair_logic": "FORCE_EXACT_REPLICA_FROM_REFERENCE",
    "footwear_logic": "FORCE_EXACT_REPLICA_FROM_REFERENCE",
    "consistency_weight": "MAXIMUM"
  },
  "subject": {
    "type": "woman_identity_perfectly_matched_to_reference_image",
    "framing": "extreme_high-angle_bird's-eye_view_full-body_shot",
    "identity_lock": "maintaining_identical_facial_features_from_reference",
    "features": {
      "eyes": "looking_up_at_camera_with_a_bright_friendly_gaze",
      "hair": "EXACT_REPLICATE_HAIRSTYLE_FROM_REFERENCE: length, color, texture, and style must be identical, no headwear",
      "expression": "cheerful_and_cute_expression_with_a_playful_smile"
    },
    "pose_structural_lock": {
      "overall": "standing_confidently_at_the_highest_point_of_a_rugged_mountain_peak",
      "arms": "right_hand_raised_near_the_eye_making_a_peace_sign_V-sign_YA_gesture",
      "hands": "fingers_clearly_formed_into_a_peace_sign_near_the_face",
      "shoulders": "slightly_slouched_creating_a_top-down_foreshortening_effect",
      "perspective": "heavy_wide-angle_distortion_making_the_head_look_larger_than_feet"
    }
  },
  "apparel_specification": {
    "logic": "CLOTHING_AND_FOOTWEAR_MUST_BE_AN_EXACT_CLONE_OF_REFERENCE_IMAGE",
    "outfit_main_piece": {
      "top": "Identical_inner_layer_as_seen_in_reference",
      "bottom": "Identical_pants_from_reference_image",
      "footwear": "EXACT_REPLICATE_FOOTWEAR_FROM_REFERENCE: replicate the specific shoes, colors, and design from the reference image exactly"
    }
  },
  "environment": {
    "setting": "the_summit_of_a_high_mountain_with_jagged_rocks_and_a_cliff_edge",
    "lighting": "bright_natural_daylight_with_soft_clouds_b"
  },
  "text_in_clouds": "{\"cloud text\" \"YOUR TEXT HERE\"}"
}
```

## 来源备注
- 源站作者：BeautyVerse
- 源站 UUID：vKUXWGXWuE
- 源站分类：05_人物肖像与写实摄影

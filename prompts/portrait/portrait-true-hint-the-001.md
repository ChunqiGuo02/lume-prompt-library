---
id: "portrait-true-hint-the-001"
title: "花丛少女持手机展示社交动态"
category: portrait
subcategory: "14_社交媒体营销"
aesthetic: null
tags: ["蓝发", "少女", "鲜花", "花园", "手机", "写实", "清新", "甜美"]
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
"edit_type": "extreme_wide_angle_phone_edit",
"source": {
"_hint": "Base for editing the person, clothes, and atmosphere of the original image. No new characters.",
"mode": "EDIT",
"reference_images": {
"first": "base_photo_person_and_environment",
"second": "screen_content_for_phone"
},
"preserve_from_first": {
"_hint": "Fixed settings to treat face, hairstyle, and outfit as the same person.",
"same_person_or_group": true,
"same_faces": true,
"same_hairstyles": true,
"same_outfits": true,
"same_environment_style": true
}
},
"identity": {
"_hint": "Unification of expression. Maintain identity without breaking it.",
"keep_identity_consistent": true,
"all_people_clearly_recognizable_as_original": true,
"expression": "bright_natural_smile"
},
"camera_effect": {
"_hint": "Beautifully stabilize the exaggerated perspective when the phone is brought close.",
"perspective": "extreme_wide_angle",
"style": "dynamic_photorealistic",
"near_objects_appear_large": true,
"far_objects_recede_dramatically": true,
"allow_view_from_above_or_below": true
},
"pose": {
"_hint": "Prohibit same pose as original. Emphasize hand movements to prevent distortion.",
"pose_can_change": true,
"must_be_completely_different_from_reference": true,
"do_not_replicate_or_approximate_original_pose": true,
"style_tags": [
"stylish",
"complex",
"fluid",
"powerful"
],
"focus_on_expressive_hands": true,
"avoid_arm_distortion": true,
"allow_multiple_body_parts_near_lens": true
},
"phone": {
"_hint": "Phone-specific area. Define holding style, orientation, and naturalness of hands.",
"allowed": true,
"holding_styles": [
"one_handed",
"two_handed",
"low_angle",
"high_angle",
"tilted",
"sideways",
"near_chest",
"near_hip",
"casual_carry",
"partially_toward_lens"
],
"rules": {
"_hint": "Avoid forcing the phone toward the lens; aim for a composition where the screen is visible with a natural hold.",
"each_person_may_hold_one_phone": true,
"priority_is_natural_and_relaxed_body_structure": true,
"do_not_force_phone_directly_toward_camera": true,
"screen_should_be_naturally_visible_when_possible": true
}
},
"screen_replacement": {
"_hint": "Replacement screen. No UI, no distortion, natural embedding.",
"target": "visible_phone_screen",
"use_second_reference_image_as_content": true,
"overlay_cleanly_on_visible_screen_area": true,
"fit_without_distortion": true,
"respect_screen_shape": true,
"no_additional_cropping": true,
"ui_constraints": {
"_hint": "Completely prohibit generation of SNS bars or app frames.",
"no_ui": true,
"no_icons": true,
"no_status_bar": true,
"no_app_frame": true,
"show_only_content_from_second_reference": true
}
},
"environment": {
"_hint": "Keep the atmosphere of the original photo, but designed generally not to depend on specific season or weather.",
"preserve_environment_style_from_reference": true,
"lighting_consistent_with_reference": true,
"expand_space_for_wide_angle_view": true,
"keep_texture_and_color_tone_consistent": true
},
"composition": {
"_hint": "Stabilization of dynamic composition caused by phone proximity.",
"dynamic_but_readable": true,
"extreme_depth_emphasis": true,
"allow_phone_close_to_lens": true,
"keep_all_people_visually_balanced": true
},
"constraints": {
"_hint": "Protection settings to prohibit unintended changes.",
"no_new_characters": true,
"no_change_in_age_or_gender_presentation": true,
"no_costume_change": true,
"no_change_to_reference_location_type": true,
"respect_original_photographic_style": true
}
}

## 中文译文（源站提供）
{
  "edit_type": "extreme_wide_angle_phone_edit",
  "source": {
    "_hint": "用于编辑原始图片中人物的形象、服装和场景氛围。不允许添加新的角色。",
    "mode": "EDIT",
    "reference_images": {
      "first": "base_photo_person_and_environment",
      "second": "screen_content_for_phone"
    },
    "preserve_from_first": {
      "_hint": "保持面部、发型和服装的一致性，视为同一人物。",
      "same_person_or_group": true,
      "same_faces": true,
      "same_hairstyles": true,
      "same_outfits": true,
      "same_environment_style": true
    }
  },
  "identity": {
    "_hint": "保持人物表情的一致性。在修改过程中要确保人物身份的辨识度。",
    "keep_identity_consistent": true,
    "all_people_clearly_recognizable_as_original": true,
    "expression": "bright_natural_smile"
  },
  "camera_effect": {
    "_hint": "当手机靠近拍摄对象时，能够稳定画面并修正夸张的视角效果。",
    "perspective": "extreme_wide_angle",
    "style": "dynamic_photorealistic",
    "near_objects_appear_large": true,
    "far_objects_recede_dramatically": true,
    "allow_view_from_above_or_below": true
  },
  "pose": {
    "_hint": "禁止使用与原始照片相同的姿势。强调手部动作以避免画面变形。",
    "pose_can_change": true,
    "must_be_completely_different_from_reference": true,
    "do_not_replicate_or_approximate_original_pose": true,
    "style_tags": [
      "stylish",
      "complex",
      "fluid",
      "powerful"
    ],
    "focus_on_expressive_hands": true,
    "avoid_arm_distortion": true,
    "allow_multiple_body_parts_near_lens": true
  },
  "phone": {
    "_hint": "与手机相关的调整部分。需要定义持机的姿势、角度以及手部的自然姿态。",
    "allowed": true,
    "holding_styles": [
      "one_handed",
      "two_handed",
      "low_angle",
      "high_angle",
      "tilted",
      "sideways",
      "near_chest",
      "near_hip",
      "casual_carry",
      "partially_toward_lens"
    ],
    "rules": {
      "_hint": "避免将手机强行对准镜头；应保持屏幕在自然持机状态下清晰可见。",
      "each_person_may_hold_one_phone": true,
      "priority_is_natural_and_relaxed_body_structure": true,
      "do_not_force_phone_directly_toward_camera": true,
      "screen_should_be_naturally_visible_when_possible": true
    }
  },
  "screen_replacement": {
    "_hint": "替换后的手机屏幕。不允许出现任何用户界面元素，画面应保持自然且无失真。",
    "target": "visible_phone_screen",
    "use_second_reference_image_as_content": true,
    "overlay_cleanly_on_visible_screen_area": true,
    "fit_without_distortion": true,
    "respect_screen_shape": true,
    "no_additional_cropping": true,
    "ui_constraints": {
      "_hint": "严禁添加社交媒体栏或应用程序框架等界面元素。",
      "no_ui": true,
      "no_icons": true,
      "no_status_bar": true,
      "no_app_frame": true,
      "show_only_content_from_second_reference": true
    }
  },
  "environment": {
    "_hint": "保留原始照片的场景氛围，但设计时尽量不依赖特定的季节或天气条件。",
    "preserve_environment_style_from_reference": true,
    "lighting_consistent_with_reference": true,
    "expand_space_for_wide_angle_view": true,
    "keep_texture_and_color_tone_consistent": true
  },
  "composition": {
    "_hint": "在手机靠近拍摄对象的情况下，保持画面的稳定性和可读性。",
    "dynamic_but_readable": true,
    "extreme_depth_emphasis": true,
    "allow_phone_close_to_lens": true,
    "keep_all_people_visually_balanced": true
  },
  "constraints": {
    "_hint": "设置相关限制以防止不必要的修改。",
    "no_new_characters": true,
    "no_change_in_age_or_gender_presentation": true,
    "no_costume_change": true,
    "no_change_to_reference_location_type": true,
    "respect_original_photographic_style": true
  }
}

## 来源备注
- 源站作者：BeautyVerse
- 源站 UUID：3LBpNBfIE7
- 源站分类：14_社交媒体营销

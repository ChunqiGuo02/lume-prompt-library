---
id: "landscape-true-phone-pose-001"
title: "海边少女手机互动四格写真"
category: landscape
subcategory: "14_社交媒体营销"
aesthetic: null
tags: ["海边", "少女", "粉色", "甜美", "清新", "手机", "日系", "毛绒"]
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
language: mixed
created_at: 2026-05-30
version: "1.0.0"
related_to: []
---

# 正文 prompt
nano banana pro
①人物の写真をアップロード
②スマホに映したい画像をアップロード
③この JSON をそのまま貼る
2×2グリットで生成
{
"layout": {
"type": "grid_2x2"
},
"global": {
"edit_type": "phone_motion_edit",
"source": {
"mode": "EDIT",
"reference_images": {
"first": "base_photo_person_and_environment",
"second": "screen_content_for_phone"
},
"preserve_from_first": {
"same_person_or_group": true,
"same_faces": true,
"same_hairstyles": true,
"same_outfits": true,
"same_environment_style": true
}
},
"identity": {
"keep_identity_consistent": true,
"expression": "bright_natural_smile"
},
"phone": {
"allowed": true,
"holding_styles": [
"one_handed",
"two_handed",
"near_chest",
"near_hip",
"tilted",
"sideways",
"partially_toward_lens"
],
"rules": {
"each_person_may_hold_one_phone": true,
"screen_should_be_naturally_visible": true,
"do_not_force_phone_directly_toward_camera": true
}
},
"screen_replacement": {
"use_second_reference_image_as_content": true,
"fit_without_distortion": true,
"no_ui": true
},
"environment": {
"preserve_environment_style_from_reference": true,
"lighting_consistent_with_reference": true
},
"constraints": {
"no_new_characters": true,
"no_costume_change": true,
"no_change_to_reference_location_type": true
}
},
"panels": [
{
"id": "panel_1",
"role": "soft_intro",
"edit": true,
"pose": {
"pose_can_change": true,
"style_tags": ["walk", "soft_motion", "side_by_side"],
"focus_on_expressive_hands": true
}
},
{
"id": "panel_2",
"role": "phone_view_soft",
"edit": true,
"pose": {
"pose_can_change": true,
"style_tags": ["looking_at_phone", "face_close", "natural_pose"],
"focus_on_expressive_hands": true
}
},
{
"id": "panel_3",
"role": "phone_forward",
"edit": true,
"pose": {
"pose_can_change": true,
"style_tags": ["hand_forward", "phone_front_soft", "arm_extended"],
"focus_on_expressive_hands": true
},
"camera_effect": {
"perspective": "wide_angle",
"near_objects_appear_large": true
}
},
{
"id": "panel_4",
"role": "jump_cut",
"edit": true,
"use_preset": "jump_frame"
}
],
"pose_presets": {
"jump_frame": {
"pose": {
"pose_can_change": true,
"style_tags": ["jump", "lively", "mid_air"],
"focus_on_expressive_hands": true
},
"camera_effect": {
"perspective": "wide_angle",
"allow_view_from_below": true
}
}
}
}

## 中文译文（源站提供）
① 上传人物照片  
② 上传想要显示在手机屏幕上的图片  
③ 直接粘贴以下 JSON 代码  
以 2×2 的网格格式生成图片：  
```json  
{
  "layout": {
    "type": "grid_2x2"
  },  
  "global": {
    "edit_type": "phone_motion_edit",
    "source": {
      "mode": "EDIT",
      "reference_images": {
        "first": "base_photo_person_and_environment",
        "second": "screen_content_for_phone"
      }
    }
  }  
}  
```

## 来源备注
- 源站作者：SDT🌿
- 源站 UUID：27fd3ea6fc
- 源站分类：14_社交媒体营销

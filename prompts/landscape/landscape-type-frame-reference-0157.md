---
id: landscape-type-frame-reference-0157
title: "红毯女星多角度写真"
category: landscape
subcategory: "15_特定场景环境生成"
aesthetic: null
tags: ["红毯", "时尚", "写真", "黑色", "亮片", "礼服", "钻石", "红唇"]
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
    "generation_request": {
      "meta_data": { "tool": "NanoBananaPro", "task_type": "photorealistic_multi_panel_grid", "version": "v1.0" },
      "output_settings": { "layout": { "type": "2x2_grid", "border": "thin_white_gutter", "frame_consistency_rule": "same_person_same_outfit" }, "aspect_ratio": "4:5", "resolution": "ultra_high_res", "render_style": "high_contrast_drama" },
      "reference_constraints": { "character_reference_image": "UPLOAD_REF_IMAGE", "use_reference_face_only": true, "identity_lock": true, "strict_face_match": true },
      "global_prompt": {
        "scene": "Red Carpet Event / Gala Staircase. Red velvet carpet, photographers in background (blurred), flashing lights.",
        "subject": {
          "type": "influencer",
          "identity": "same person as reference image",
          "hair": "old hollywood waves",
          "makeup": "red lip, sharp contour",
          "outfit": "{argument name="outfit description" default="black sequin gown with high slit, gloves, diamond necklace"}",
          "prop": "clutch bag"
        },
        "camera": { "capture": "paparazzi style", "lens_equivalent": "85mm", "focus": "subject", "depth_of_field": "bokeh lights background" }
      },
      "frames": [
        { "frame_id": "A", "position": "top_left", "shot_type": "over_shoulder", "pose": "Looking back over shoulder, giving 'the look'.", "expression": "confident, fierce" },
        { "frame_id": "B", "position": "top_right", "shot_type": "walking_away", "pose": "Walking up the stairs, train of dress flowing behind.", "expression": "regal" },
        { "frame_id": "C", "position": "bottom_left", "shot_type": "sending_kiss", "pose": "Blowing a kiss to the crowd.", "expression": "charming" },
        { "frame_id": "D", "position": "bottom_right", "shot_type": "detail_jewelry", "pose": "Hand on hip, showcasing the rings and bracelet.", "expression": "n/a" }
      ]
    }
  }

## 中文译文（源站提供）
{
    "generation_request": {
      "meta_data": { "tool": "NanoBananaPro", "task_type": "photorealistic_multi_panel_grid", "version": "v1.0" },
      "output_settings": { "layout": { "type": "2x2_grid", "border": "thin_white_gutter", "frame_consistency_rule": "same_person_same_outfit" }, "aspect_ratio": "4:5", "resolution": "ultra_high_res", "render_style": "high_contrast_drama" },
      "reference_constraints": { "character_reference_image": "UPLOAD_REF_IMAGE", "use_reference_face_only": true, "identity_lock": true, "strict_face_match": true },
      "global_prompt": {
        "scene": "Red Carpet Event / Gala Staircase. Red velvet carpet, photographers in background (blurred), flashing lights.",
        "subject": {
          "type": "influencer",
          "identity": "same person as reference image",
          "hair": "old hollywood waves",
          "makeup": "red lip, sharp contour",
          "outfit": "{argument name="outfit description" default="black sequin gown with high slit, gloves, diamond necklace"}",
          "prop": "clutch bag"
        },
        "camera": { "capture": "paparazzi style", "lens_equivalent": "85mm", "focus": "subject", "depth_of_field": "bokeh lights background" }
      },
      "frames": [
        { "frame_id": "A", "position": "top_left", "shot_type": "over_shoulder", "pose": "Looking back over shoulder, giving 'the look'.", "expression": "confident, fierce" },
        { "frame_id": "B", "position": "top_right", "shot_type": "walking_away", "pose": "Walking up the stairs, train of dress flowing behind.", "expression": "regal" },
        { "frame_id": "C", "position": "bottom_left", "shot_type": "sending_kiss", "pose": "Blowing a kiss to the crowd.", "expression": "charming" },
        { "frame_id": "D", "position": "bottom_right", "shot_type": "detail_jewelry", "pose": "Hand on hip, showcasing the rings and bracelet.", "expression": "n/a" }
      ]
    }
  }

## 来源备注
- 源站作者：Ditherly - Creative AI Hub
- 源站 UUID：uougB2861o
- 源站分类：15_特定场景环境生成

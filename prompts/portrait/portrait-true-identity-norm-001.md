---
id: "portrait-true-identity-norm-001"
title: "精准换脸，保留原图所有细节"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["写实", "人像", "女性", "运动", "街拍", "砖墙", "户外", "迷彩"]
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
  "metadata": {
    "engine_name": "PX-LOCK-X",
    "prompt_version": "pxlockx-1.0.0",
    "generation_goal": "Near pixel-perfect recreation with identity-only replacement",
    "reference_frame_policy": {
      "use_reference_as_ground_truth": true,
      "identity_swap_only": true,
      "no_creative_inference": true
    },
    "units": {
      "angles": "degrees",
      "lengths": "centimeters",
      "coords": "normalized_0_to_1",
      "temperature": "kelvin"
    }
  },

  "identity_replacement": {
    "mode": "identity_only",
    "reference_identity_source": "uploaded_subject_image",
    "replace": {
      "face_identity": true,
      "head_shape": true,
      "hair_color_and_length": true,
      "skin_tone": true,
      "body_identity": true
    },
    "preserve_from_reference": {
      "pose": true,
      "camera": true,
      "lighting": true,
      "environment": true,
      "wardrobe": true,
      "jewelry": true,
      "expression_valence": true,
      "framing_and_crop": true
    },
    "identity_strength": 1.0,
    "no_beautification": true,
    "no_style_transfer": true
  },

  "output_settings": {
    "aspect_ratio": "2:3",
    "resolution_target": "reference_matched",
    "render_style": "photorealistic",
    "color_space": "sRGB",
    "compression": "lossless",
    "dynamic_range": "natural",
    "white_balance_lock": true
  },

  "pixel_coordinates_lock": {
    "lock_enabled": true,
    "reference_frame_dimensions_px_estimate": {
      "width_px": 1024,
      "height_px": 1536
    },
    "crop_boundaries_px_norm": {
      "left_x_norm": 0.0,
      "right_x_norm": 1.0,
      "top_y_norm": 0.0,
      "bottom_y_norm": 1.0
    },
    "primary_subject_bounding_box_norm": {
      "x_min": 0.105,
      "y_min": 0.155,
      "x_max": 0.945,
      "y_max": 0.975
    },
    "head_bounding_box_norm": {
      "x_min": 0.205,
      "y_min": 0.175,
      "x_max": 0.625,
      "y_max": 0.360
    },
    "face_feature_anchors_norm": {
      "left_eye_center": { "x": 0.345, "y": 0.252 },
      "right_eye_center": { "x": 0.445, "y": 0.247 },
      "nose_tip": { "x": 0.405, "y": 0.287 },
      "mouth_center": { "x": 0.403, "y": 0.318 },
      "chin_point": { "x": 0.410, "y": 0.352 }
    }
  },

  "camera_lock": {
    "lock_enabled": true,
    "camera_height_cm": 105.0,
    "camera_to_subject_distance_cm": 230.0,
    "camera_orientation_degrees": {
      "yaw": 8.5,
      "pitch": -3.0,
      "roll": 0.6
    },
    "lens": {
      "focal_length_mm": 85.0,
      "sensor_format": "full_frame",
      "distortion_model": "brown_conrady",
      "distortion_coefficients": { "k1": -0.012, "k2": 0.004 }
    },
    "aperture": {
      "f_number": 2.2,
      "focus_distance_cm": 220.0,
      "focus_target": "face_plane"
    },
    "exposure": {
      "iso": 200,
      "shutter_s": 0.002,
      "exposure_comp_ev": 0.0
    }
  },

  "pose_lock": {
    "lock_enabled": true,
    "pose_type": "deep_squat_crouch",
    "body_facin

## 中文译文（源站提供）
```json
{
  "metadata": {
    "engine_name": "PX-LOCK-X",
    "prompt_version": "pxlockx-1.0.0",
    "generation_goal": "近乎像素级的精确重现，仅替换身份信息",
    "reference_frame_policy": {
      "use_reference_as_ground_truth": true,
      "identity_swap_only": true,
      "no_creative_inference": true
    },
    "units": {
      "angles": "度",
      "lengths": "厘米",
      "coords": "归一化_0_到_1",
      "temperature": "开尔文"
    }
  },
  "identity_replacement": {
    "mode": "仅身份信息",
    "reference_identity_source": "上传的主体图像",
    "replace": {
      "face_identity": true,
      "head_shape": true,
      "hair_color_and_length": true,
      "skin_tone": true,
      "body_identity": true
    },
    "preserve_from_reference": {
      "pose": true,
      "camera": true,
      "lighting": true,
      "environment": true,
      "wardrobe": true,
      "jewelry": true,
      "expression_valence": true,
      "framing_and_crop": true
    },
    "identity_strength": 1.0,
    "no_beautification": true,
    "no_style_transfer": true
  },
  "output_settings": {
    "aspect_ratio": "2:3",
    "resolution_target": "匹配参考",
    "render_style": "照片级真实感",
    "color_space": "sRGB",
    "compression": "无损",
    "dynamic_range": "自然",
    "white_balance_lock": true
  },
  "pixel_coordinates_lock": {
    "lock_enabled": true,
    "reference_frame_dimensions_px_estimate": {
      "width_px": 1024,
      "height_px": 1536
    },
    "crop_boundaries_px_norm": {
      "left_x_norm": 0.0,
      "right_x_norm": 1.0,
      "top_y_norm": 0.0,
      "bottom_y_norm": 1.0
    },
    "primary_subject_bounding_box_norm": {
      "x_min": 0.105,
      "y_min": 0.155,
      "x_max": 0.945,
      "y_max": 0.975
    },
    "head_bounding_box_norm": {
      "x_min": 0.205,
      "y_min": 0.175,
      "x_max": 0.625,
      "y_max": 0.360
    },
    "face_feature_anchors_norm": {
      "left_eye_center": { "x": 0.345, "y": 0.252 },
      "right_eye_center": { "x": 0.445, "y": 0.247 },
      "nose_tip": { "x": 0.405, "y": 0.287 },
      "mouth_center": { "x": 0.403, "y": 0.318 },
      "chin_point": { "x": 0.410, "y": 0.352 }
    }
  },
  "camera_lock": {
    "lock_enabled": true,
    "camera_height_cm": 105.0,
    "camera_to_subject_distance_cm": 230.0,
    "camera_orientation_degrees": {
      "yaw": 8.5,
      "pitch": -3.0,
      "roll": 0.6
    },
    "lens": {
      "focal_length_mm": 85.0,
      "sensor_format": "全画幅",
      "distortion_model": "布朗-康拉迪",
      "distortion_coefficients": { "k1": -0.012, "k2": 0.004 }
    },
    "aperture": {
      "f_number": 2.2,
      "focus_distance_cm": 220.0,
      "focus_target": "面部平面"
    },
    "exposure": {
      "iso": 200,
      "shutter_s": 0.002,
      "exposure_comp_ev": 0.0
    }
  },
  "pose_lock": {
    "lock_enabled": true,
    "pose_type": "深蹲",
    "body_facin": null
  }
}
```

## 来源备注
- 源站作者：Sienna
- 源站 UUID：DYqWoT8k2H
- 源站分类：05_人物肖像与写实摄影

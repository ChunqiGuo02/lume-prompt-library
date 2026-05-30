---
id: portrait-to5-type-false-2911
title: "高角度自拍真实感人像与黑猫场景"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["自拍", "女生", "猫", "黑色", "俯拍", "预览", "室内", "挑染"]
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
  "intent": {
    "image_type": "selfie",
    "era_preset": "modern_standard",
    "notes": "Maximizing physical realism by defining light-material interaction and sensor failure modes."
  },
  "subjects": {
    "count": 1,
    "primary": {
      "type": "person",
      "age_range": "20-25",
      "gender_presentation": "female",
      "region_target": "unspecified",
      "expression": "neutral, looking up",
      "pose": "looking directly into camera from below",
      "gaze": "looking into lens"
    },
    "additional": [
      {
        "type": "black cat",
        "position": "floor level, looking up",
        "material": "dense organic fur with translucent whiskers"
      }
    ]
  },
  "framing_and_perspective": {
    "framing": "high_angle_plunging",
    "subject_fill_ratio": 0.82,
    "camera_angle": "directly_overhead_downward",
    "distance": "arm_length",
    "camera_class": "smartphone_front",
    "lens_equiv_mm": 24,
    "distortion": {
      "type": "mild_barrel",
      "strength_1to5": 4
    },
    "perspective_effects": {
      "foreground_scale_emphasis_1to5": 5,
      "nose_emphasis_1to5": 3,
      "ear_recession_1to5": 4
    },
    "depth_of_field": {
      "mode": "minimal",
      "strength_1to5": 2,
      "focus_target": "eyes"
    }
  },
  "lighting_and_exposure": {
    "key_light": {
      "type": "overhead_panel",
      "direction": "top_down",
      "hardness_1to5": 5,
      "halo_bloom_1to5": 2
    },
    "exposure_behavior": {
      "auto_exposure": true,
      "hdr_tone_mapping_1to5": 4,
      "overall_brightness_1to5": 5,
      "contrast_1to5": 3,
      "shadow_depth_1to5": 2,
      "highlight_overflow_1to5": 5
    },
    "failure_modes_active": {
      "highlight_clipping": true,
      "shadow_chroma_noise": true,
      "denoise_smear": false,
      "sharpen_halos": true,
      "motion_blur": false,
      "jpeg_ringing_banding": false,
      "banding_in_gradients": false,
      "focus_falloff_edge_softness": true
    }
  },
  "computational_pipeline": {
    "skin_smoothing": {
      "method": "edge_aware",
      "strength_1to5": 2,
      "specular_preservation": "required"
    },
    "sharpening": {
      "strength_1to5": 3,
      "halo_risk_1to5": 2
    },
    "noise_and_denoise": {
      "shadow_chroma_noise_1to5": 3,
      "denoise_smear_1to5": 2,
      "grain_strength_1to5": 2
    },
    "compression": {
      "jpeg_artifacts_1to5": 1,
      "banding_risk_1to5": 1
    },
    "white_balance": {
      "mode": "auto",
      "highlight_temp_bias": "cool",
      "shadow_temp_bias": "neutral"
    }
  },
  "region_and_face_feature_sliders": {
    "non_stereotype_policy": "sliders_over_labels",
    "beauty_mark_under_right_eye": false,
    "sliders_1to5": {
      "face_oval_vline_1to5": 3,
      "cheekbone_prominence_1to5": 3,
      "brow_definition_1to5": 3,
      "eye_emphasis_1to5": 4,
      "eyelid_crease_definition_1to5": 3,
      "nose_bridge_definition_1to5": 3,
      "lip_fullness_1to5": 3,

## 中文译文（源站提供）
```json
{
  "intent": {
    "image_type": "自拍",
    "era_preset": "现代标准",
    "notes": "通过定义光线与材料的相互作用以及传感器故障模式，最大限度地提高物理真实感。"
  },
  "subjects": {
    "count": 1,
    "primary": {
      "type": "人物",
      "age_range": "20-25",
      "gender_presentation": "女性",
      "region_target": "未指定",
      "expression": "中性，向上看",
      "pose": "从下方直接看向镜头",
      "gaze": "看向镜头"
    },
    "additional": [
      {
        "type": "黑猫",
        "position": "地板高度，向上看",
        "material": "浓密的有机毛发，带有半透明胡须"
      }
    ]
  },
  "framing_and_perspective": {
    "framing": "高角度俯拍",
    "subject_fill_ratio": 0.82,
    "camera_angle": "正上方俯视",
    "distance": "手臂长度",
    "camera_class": "智能手机前置",
    "lens_equiv_mm": 24,
    "distortion": {
      "type": "轻微桶形畸变",
      "strength_1to5": 4
    },
    "perspective_effects": {
      "foreground_scale_emphasis_1to5": 5,
      "nose_emphasis_1to5": 3,
      "ear_recession_1to5": 4
    },
    "depth_of_field": {
      "mode": "最小",
      "strength_1to5": 2,
      "focus_target": "眼睛"
    }
  },
  "lighting_and_exposure": {
    "key_light": {
      "type": "顶部面板灯",
      "direction": "自上而下",
      "hardness_1to5": 5,
      "halo_bloom_1to5": 2
    },
    "exposure_behavior": {
      "auto_exposure": true,
      "hdr_tone_mapping_1to5": 4,
      "overall_brightness_1to5": 5,
      "contrast_1to5": 3,
      "shadow_depth_1to5": 2,
      "highlight_overflow_1to5": 5
    },
    "failure_modes_active": {
      "highlight_clipping": true,
      "shadow_chroma_noise": true,
      "denoise_smear": false,
      "sharpen_halos": true,
      "motion_blur": false,
      "jpeg_ringing_banding": false,
      "banding_in_gradients": false,
      "focus_falloff_edge_softness": true
    }
  },
  "computational_pipeline": {
    "skin_smoothing": {
      "method": "边缘感知",
      "strength_1to5": 2,
      "specular_preservation": "必需"
    },
    "sharpening": {
      "strength_1to5": 3,
      "halo_risk_1to5": 2
    },
    "noise_and_denoise": {
      "shadow_chroma_noise_1to5": 3,
      "denoise_smear_1to5": 2,
      "grain_strength_1to5": 2
    },
    "compression": {
      "jpeg_artifacts_1to5": 1,
      "banding_risk_1to5": 1
    },
    "white_balance": {
      "mode": "自动",
      "highlight_temp_bias": "冷色",
      "shadow_temp_bias": "中性"
    }
  },
  "region_and_face_feature_sliders": {
    "non_stereotype_policy": "滑块优先于标签",
    "beauty_mark_under_right_eye": false,
    "sliders_1to5": {
      "face_oval_vline_1to5": 3,
      "cheekbone_prominence_1to5": 3,
      "brow_definition_1to5": 3,
      "eye_emphasis_1to5": 4,
      "eyelid_crease_definition_1to5": 3,
      "nose_bridge_definition_1to5": 3,
      "lip_fullness_1to5": 3
    }
  }
}
```

## 来源备注
- 源站作者：Emily
- 源站 UUID：0D404nbP0r
- 源站分类：05_人物肖像与写实摄影

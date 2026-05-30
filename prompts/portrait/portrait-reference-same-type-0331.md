---
id: portrait-reference-same-type-0331
title: "公主风自拍造型指南"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["公主", "皇冠", "金发", "勿忘我", "花束", "自拍", "蓝色", "优雅"]
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
  "reference": {
    "source_image": "uploaded_reference_image",
    "identity_lock": true,
    "strict_face_match": true,
    "face_preservation": "100% identical to the uploaded reference: no changes to facial structure, eyes, nose, lips, brows, skin tone, skin texture, proportions",
    "keep_unique_features": true,
    "no_identity_drift": true
  },

  "subject": {
    "type": "young_adult_woman",
    "ethnicity": "same_as_reference",
    "age": "adult_same_as_reference",
    "eye_color": "same_as_reference",
    "skin_texture": "same_as_reference_natural_with_visible_pores_and_imperfections_no_blur_or_smoothing",
    "expression": "warm_genuine_smile_with_soft_coquette_vibe",

    "makeup": {
      "finish": "matte",
      "blush": "light_pink",
      "eyeshadow": "soft_pink",
      "eyeliner": "thin_black",
      "lashes": "defined",
      "lip_color": "matte_dusty_pink",
      "lip_shape": "same_as_reference"
    },

    "hair": {
      "color": "{"hair color" "BUTTERY_BLONDE (CINDERELLA_VIBE)"}",
      "length": "same_as_reference",
      "texture": "voluminous_defined_curls_glossy",
      "bangs": "same_as_reference_or_keep_visible_match",
      "crown_style": "natural_curl_volume_at_crown_no_braided_crown",
      "side_sections": "curly_face_framing_sections",
      "accessories": [
        "ELEGANT_BLUE_TIARA (delicate, princess style, not plastic)"
      ]
    },

    "nails": {
      "style": "short_coquette",
      "color": "soft_pastel_blue_or_sheer_nude"
    },

    "pose": {
      "type": "mirror_selfie",
      "camera_angle": "slight_downward_diagonal",
      "head_angle": "very_subtle_tilt",
      "body_position": "leaning_forward_slightly",
      "right_arm": "holding_phone",
      "left_arm": "holding_BLUE_FORGET_ME_NOT_BOUQUET_close_to_torso"
    }
  },

  "apparel": {
    "top": {
      "type": "BLUE_CROP_TOP (CINDERELLA_INSPIRED)",
      "pattern": "solid_or_subtle_shimmer",
      "fit": "tight_and_form_fitting",
      "closure": "secure_no_gapping",
      "neckline": "tasteful_covered_no_cleavage_focus",
      "sleeves": "optional_off_shoulder_or_short_sleeves (elegant)",
      "integrity": "top_stays_in_place_no_sliding_no_opening",
      "opacity": "fully_opaque_non_see_through",
      "color_tone": "PALE_CINDERELLA_BLUE_OR_PERIWINKLE"
    },

    "undershirt": {
      "type": "none",
      "material": "n/a",
      "coverage": "top_is_opaque_non_see_through"
    },

    "necklace": {
      "type": "PEARL_NECKLACE",
      "style": "delicate_single_strand",
      "pendant": "none_or_tiny_center_pearl"
    },

    "bottoms": {
      "type": "BLUE_MINI_SKIRT (CINDERELLA_INSPIRED)",
      "details": "opaque_non_see_through_clean_seams",
      "material_hint": "satin_or_soft_tulle_overlay (tasteful)"
    }
  },

  "phone": {
    "model": "iPhone_15_Pro_Max",
    "held_in": "right_hand",
    "case": {
      "design": "SOLID_BLUE_CASE",
      "details": {
        "finish": "matte_or_soft_gloss"
       }
    }
  }
}

## 中文译文（源站提供）
```json
{
  "reference": {
    "source_image": "uploaded_reference_image",
    "identity_lock": true,
    "strict_face_match": true,
    "face_preservation": "100% identical to the uploaded reference: no changes to facial structure, eyes, nose, lips, brows, skin tone, skin texture, proportions",
    "keep_unique_features": true,
    "no_identity_drift": true
  },

  "subject": {
    "type": "young_adult_woman",
    "ethnicity": "same_as_reference",
    "age": "adult_same_as_reference",
    "eye_color": "same_as_reference",
    "skin_texture": "same_as_reference_natural_with_visible_pores_and_imperfections_no_blur_or_smoothing",
    "expression": "warm_genuine_smile_with_soft_coquette_vibe",

    "makeup": {
      "finish": "matte",
      "blush": "light_pink",
      "eyeshadow": "soft_pink",
      "eyeliner": "thin_black",
      "lashes": "defined",
      "lip_color": "matte_dusty_pink",
      "lip_shape": "same_as_reference"
    },

    "hair": {
      "color": "{\"hair color\" \"BUTTERY_BLONDE (CINDERELLA_VIBE)\"}",
      "length": "same_as_reference",
      "texture": "voluminous_defined_curls_glossy",
      "bangs": "same_as_reference_or_keep_visible_match",
      "crown_style": "natural_curl_volume_at_crown_no_braided_crown",
      "side_sections": "curly_face_framing_sections",
      "accessories": [
        "ELEGANT_BLUE_TIARA (delicate, princess style, not plastic)"
      ]
    },

    "nails": {
      "style": "short_coquette",
      "color": "soft_pastel_blue_or_sheer_nude"
    },

    "pose": {
      "type": "mirror_selfie",
      "camera_angle": "slight_downward_diagonal",
      "head_angle": "very_subtle_tilt",
      "body_position": "leaning_forward_slightly",
      "right_arm": "holding_phone",
      "left_arm": "holding_BLUE_FORGET_ME_NOT_BOUQUET_close_to_torso"
    }
  },

  "apparel": {
    "top": {
      "type": "BLUE_CROP_TOP (CINDERELLA_INSPIRED)",
      "pattern": "solid_or_subtle_shimmer",
      "fit": "tight_and_form_fitting",
      "closure": "secure_no_gapping",
      "neckline": "tasteful_covered_no_cleavage_focus",
      "sleeves": "optional_off_shoulder_or_short_sleeves (elegant)",
      "integrity": "top_stays_in_place_no_sliding_no_opening",
      "opacity": "fully_opaque_non_see_through",
      "color_tone": "PALE_CINDERELLA_BLUE_OR_PERIWINKLE"
    },

    "undershirt": {
      "type": "none",
      "material": "n/a",
      "coverage": "top_is_opaque_non_see_through"
    },

    "necklace": {
      "type": "PEARL_NECKLACE",
      "style": "delicate_single_strand",
      "pendant": "none_or_tiny_center_pearl"
    },

    "bottoms": {
      "type": "BLUE_MINI_SKIRT (CINDERELLA_INSPIRED)",
      "details": "opaque_non_see_through_clean_seams",
      "material_hint": "satin_or_soft_tulle_overlay (tasteful)"
    }
  },

  "phone": {
    "model": "iPhone_15_Pro_Max",
    "held_in": "right_hand",
    "case": {
      "design": "SOLID_BLUE_CASE",
      "details": {
        "finish": "matte_or_soft_gloss"
       }
    }
  }
}
```

## 来源备注
- 源站作者：Özge Döner
- 源站 UUID：MXSylMjvTT
- 源站分类：05_人物肖像与写实摄影

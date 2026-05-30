---
id: portrait-product-reference-exact-1984
title: "绿裙模特户外写真，保留原设计细节"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["绿色", "连衣裙", "蕾丝", "中袖", "雪纺", "女装", "礼服", "优雅"]
recommended_models: 
  - banana-pro
recommended_params:
  aspect_ratio: "1:1"
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
  "task_configuration": {
    "type": "GENERATE",
    "sub_type": "lifestyle_product_integration",
    "reference_logic": "STRICT_PRODUCT_PRESERVATION",
    "aesthetic": "cinematic_editorial_photograph"
  },
  "subject_definition": {
    "model": {
      "demographic": "white American female",
      "appearance": "beautiful",
      "visibility": "full_body_standing, face and hair clearly visible and in focus"
    },
    "garment_constraints": {
      "source": "input_reference_image_product",
      "preservation_rules": [
        "exact_design_and_silhouette",
        "exact_fabric_texture_and_weight",
        "exact_color_and_pattern",
        "exact_stitching_and_details"
      ],
      "modification_permission": "NONE"
    },
    "pose": {
      "style": "natural_lifestyle",
      "orientation": "facing_camera_or_slight_angle_to_reveal_product"
    }
  },
  "environment_definition": {
    "location": "outdoor_setting",
    "contextual_logic": "environment_must_thematically_complement_clothing_style_from_reference",
    "realism": "photorealistic_location",
    "atmosphere": "natural_daylight_environment"
  },
  "composition_and_layout": {
    "framing_principles": ["golden_ratio_composition", "cinematic_grid_alignment"],
    "shot_scale": "wide_full_body_shot",
    "margins": {
      "top_margin": "significant_headroom_above_model_hair_for_editing",
      "side_margins": "balanced_negative_space"
    },
    "depth": "shallow_depth_of_field_with_bokeh_background"
  },
  "lighting_and_optics": {
    "quality": "cinematic_outdoor_light",
    "source": "natural_sunlight (golden_hour_or_diffused)",
    "shadows": "soft, defining shadows creating depth",
    "lens_characteristics": "high_quality_prime_lens_look"
  },
  "material_and_texture": {
    "product_rendering": "high_fidelity_texture_match_to_reference",
    "skin_rendering": "natural_photorealistic_skin_texture"
  },
  "constraints_and_prohibitions": {
    "must_not_alter": ["product_identity", "product_details"],
    "must_not_crop": ["model_head", "model_feet", "top_of_hair"],
    "must_not_use": ["studio_background", "flat_lighting", "distorted_perspective"]
  }
}

## 中文译文（源站提供）
```json
{
  "task_configuration": {
    "type": "生成",
    "sub_type": "生活方式产品整合",
    "reference_logic": "严格保留产品",
    "aesthetic": "电影感编辑摄影"
  },
  "subject_definition": {
    "model": {
      "demographic": "美国白人女性",
      "appearance": "美丽",
      "visibility": "全身站立，面部和头发清晰可见且对焦清晰"
    },
    "garment_constraints": {
      "source": "输入参考图片产品",
      "preservation_rules": [
        "精确的设计和轮廓",
        "精确的面料纹理和重量",
        "精确的颜色和图案",
        "精确的缝线和细节"
      ],
      "modification_permission": "无"
    },
    "pose": {
      "style": "自然生活方式",
      "orientation": "面向相机或略微倾斜以展示产品"
    }
  },
  "environment_definition": {
    "location": "户外场景",
    "contextual_logic": "环境必须在主题上与参考服装风格互补",
    "realism": "照片级真实感场景",
    "atmosphere": "自然日光环境"
  },
  "composition_and_layout": {
    "framing_principles": ["黄金比例构图", "电影网格对齐"],
    "shot_scale": "宽幅全身镜头",
    "margins": {
      "top_margin": "模特头发上方留有充足的头部空间以便编辑",
      "side_margins": "平衡的负空间"
    },
    "depth": "浅景深，背景虚化"
  },
  "lighting_and_optics": {
    "quality": "电影感户外光线",
    "source": "自然阳光（黄金时段或漫射）",
    "shadows": "柔和、有层次感的阴影，营造深度",
    "lens_characteristics": "高质量定焦镜头效果"
  },
  "material_and_texture": {
    "product_rendering": "与参考高度一致的纹理渲染",
    "skin_rendering": "自然逼真的皮肤纹理"
  },
  "constraints_and_prohibitions": {
    "must_not_alter": ["产品标识", "产品细节"],
    "must_not_crop": ["模特头部", "模特脚部", "头发顶部"],
    "must_not_use": ["影棚背景", "平光", "扭曲的透视"]
  }
}
```

## 来源备注
- 源站作者：Amanpreet Singh
- 源站 UUID：3IFJPyD6VM
- 源站分类：05_人物肖像与写实摄影

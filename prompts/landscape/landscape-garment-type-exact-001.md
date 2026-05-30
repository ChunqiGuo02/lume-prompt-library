---
id: "landscape-garment-type-exact-001"
title: "精准还原服装细节的商业街拍展示"
category: landscape
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["休闲", "街拍", "户外", "咖啡馆", "商业", "女装", "短裤", "背心"]
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
  "task_configuration": {
    "type": "GENERATE",
    "sub_type": "commercial_lifestyle_showcase",
    "reference_logic": "STRICT_GARMENT_PRESERVATION",
    "render_target": "photorealistic_editorial"
  },
  "subject_definition": {
    "identity": {
      "demographic": "White American Female",
      "physique": "fit",
      "appearance": "beautiful"
    },
    "skin_and_features": {
      "texture": "raw_human_skin",
      "details": [
        "visible_pores",
        "light_blemishes",
        "soft_expression_lines",
        "optional_soft_freckles"
      ],
      "makeup": "minimal_natural",
      "tone": "warm_undertones"
    },
    "attire_constraints": {
      "primary_garment": "{\"garment type\" \"Shorts\"} (from input image)",
      "preservation_rules": [
        "exact_color_hex",
        "exact_fabric_texture",
        "exact_stitching_geometry",
        "exact_hemline_and_fit"
      ],
      "modification_permission": "NONE_for_shorts"
    },
    "pose": {
      "framing": "full_body_standing",
      "orientation": "front_facing_or_slight_3/4_turn",
      "intent": "highlight_garment_cut"
    }
  },
  "environment_definition": {
    "location": "outdoor_urban_setting",
    "type": "city_sidewalk_or_cafe_exterior",
    "aesthetic": "premium_neutral_cinematic",
    "lighting_interaction": "natural_daylight"
  },
  "composition_and_layout": {
    "camera_technique": "commercial_fashion_grid",
    "framing_rules": {
      "visibility": "head_to_toe",
      "margins": {
        "top": "generous_headroom_for_cropping",
        "sides": "clear_negative_space"
      }
    },
    "focus": "garment_centered"
  },
  "lighting_and_optics": {
    "source": "natural_sunlight",
    "quality": "soft_diffused_or_open_shade",
    "shadows": "clean_natural_falloff",
    "exposure_priority": "midtones_and_garment_texture"
  },
  "constraints_and_prohibitions": {
    "must_not_render": [
      "plastic_smooth_skin",
      "over_stylized_filters",
      "studio_backdrop",
      "tight_crop",
      "cut_off_limbs",
      "garment_distortion"
    ],
    "strict_rule": "garment must look identical to reference input"
  }
}

## 中文译文（源站提供）
```json
{
  "task_configuration": {
    "type": "生成",
    "sub_type": "商业生活方式展示",
    "reference_logic": "严格保留服装",
    "render_target": "照片级写实编辑"
  },
  "subject_definition": {
    "identity": {
      "demographic": "美国白人女性",
      "physique": "健美",
      "appearance": "美丽"
    },
    "skin_and_features": {
      "texture": "原始人体皮肤",
      "details": [
        "可见毛孔",
        "轻微瑕疵",
        "柔和表情纹",
        "可选的柔和雀斑"
      ],
      "makeup": "极简自然妆",
      "tone": "暖色调"
    },
    "attire_constraints": {
      "primary_garment": "{\"garment type\" \"Shorts\"}（来自输入图像）",
      "preservation_rules": [
        "精确的颜色十六进制值",
        "精确的面料纹理",
        "精确的缝线几何形状",
        "精确的下摆和合身度"
      ],
      "modification_permission": "短裤不可修改"
    },
    "pose": {
      "framing": "全身站立",
      "orientation": "正面或略微 3/4 转身",
      "intent": "突出服装剪裁"
    }
  },
  "environment_definition": {
    "location": "户外城市环境",
    "type": "城市人行道或咖啡馆外部",
    "aesthetic": "高端中性电影感",
    "lighting_interaction": "自然日光"
  },
  "composition_and_layout": {
    "camera_technique": "商业时尚网格构图",
    "framing_rules": {
      "visibility": "从头到脚",
      "margins": {
        "top": "充足的顶部空间以便裁剪",
        "sides": "清晰的负空间"
      }
    },
    "focus": "服装居中"
  },
  "lighting_and_optics": {
    "source": "自然阳光",
    "quality": "柔和漫射或开放阴影",
    "shadows": "干净自然的衰减",
    "exposure_priority": "中间调和服装纹理"
  },
  "constraints_and_prohibitions": {
    "must_not_render": [
      "塑料般光滑的皮肤",
      "过度风格化的滤镜",
      "影棚背景",
      "紧密裁剪",
      "肢体被切断",
      "服装变形"
    ],
    "strict_rule": "服装必须与参考输入完全一致"
  }
}
```

## 来源备注
- 源站作者：Amanpreet Singh
- 源站 UUID：t7qxqwBDJL
- 源站分类：05_人物肖像与写实摄影

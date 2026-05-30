---
id: "landscape-reference-face-pose-001"
title: "参考人物肖像生成：自然休闲风写真，聚焦面部与姿态，避免正式或"
category: landscape
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["肖像", "男性", "写实", "暖色调", "浅景深", "自然光", "微笑", "街景"]
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
  "reference_usage": {
    "use_reference_for": [
      "face_identity",
      "facial_structure",
      "pose",
      "framing",
      "camera_angle",
      "lighting_style",
      "overall_composition"
    ],
    "do_not_copy": [
      "exact_outfit",
      "formal_corporate_styling",
      "celebrity_association"
    ]
  },
  "scene": {
    "type": "studio",
    "background": "soft_muted_gradient_with_subtle_texture",
    "lighting": "natural_soft_studio_lighting_with_gentle_falloff"
  },
  "subject": {
    "identity": "same_person_as_reference",
    "age_range": "late_20s_to_mid_30s",
    "pose": "relaxed_upright_head_and_shoulders_pose",
    "expression": "calm_confident_approachable_smile",
    "gaze": "direct_eye_contact_with_camera",
    "hair": {
      "style": "short_naturally_styled",
      "color": "dark_brown_or_black"
    },
    "facial_features": "match_reference_face_with_natural_variation"
  },
  "outfit": {
    "type": "smart_casual",
    "top": "solid_color_crewneck_or_lightweight_knit",
    "layer": "casual_blazer_or_unstructured_jacket",
    "colors": "{"outfit colors" "earthy_or_neutral_tones_beige_olive_charcoal"}",
    "styling": "effortless_and_modern_not_formal"
  },
  "camera": {
    "framing": "tight_head_and_upper_torso",
    "angle": "straight_on_or_slightly_above_eye_level",
    "lens": "85mm_portrait",
    "aperture": "f2.8",
    "depth_of_field": "shallow",
    "focus": "sharp_on_eyes_and_face"
  },
  "style": {
    "look": "photorealistic_editorial_casual_portrait",
    "skin_texture": "natural_detailed_realistic",
    "contrast": "soft_clean_with_warm_tones",
    "detail_level": "high"
  },
  "negative_prompt": [
    "formal_suit_and_tie",
    "corporate_headshot_style",
    "celebrity",
    "lookalike",
    "different_face_from_reference",
    "cartoon",
    "illustration",
    "overprocessed_skin",
    "blur",
    "low_resolution"
  ]
}

## 中文译文（源站提供）
```json
{
  "reference_usage": {
    "use_reference_for": [
      "面部识别",
      "面部结构",
      "姿势",
      "构图",
      "拍摄角度",
      "灯光风格",
      "整体构图"
    ],
    "do_not_copy": [
      "完全相同的服装",
      "正式的企业造型",
      "名人联想"
    ]
  },
  "scene": {
    "type": "影棚",
    "background": "柔和的渐变背景，带有微妙的纹理",
    "lighting": "自然柔和的影棚灯光，光线柔和衰减"
  },
  "subject": {
    "identity": "与参考图中的人物相同",
    "age_range": "20 多岁末至 30 多岁中",
    "pose": "放松、直立的头部和肩部姿势",
    "expression": "平静、自信、亲切的微笑",
    "gaze": "与镜头直接眼神交流",
    "hair": {
      "style": "短发，自然造型",
      "color": "深棕色或黑色"
    },
    "facial_features": "与参考面部特征匹配，带有自然变化"
  },
  "outfit": {
    "type": "商务休闲",
    "top": "纯色圆领衫或轻薄针织衫",
    "layer": "休闲西装外套或非结构化夹克",
    "colors": "{\"outfit colors\" \"大地色系或中性色调，米色、橄榄色、炭灰色\"}",
    "styling": "轻松现代，而非正式"
  },
  "camera": {
    "framing": "特写头部和上半身",
    "angle": "正面或略高于视线水平",
    "lens": "85mm 人像镜头",
    "aperture": "f2.8",
    "depth_of_field": "浅景深",
    "focus": "眼睛和面部清晰锐利"
  },
  "style": {
    "look": "写实主义、编辑风格的休闲人像",
    "skin_texture": "自然、细节丰富、真实",
    "contrast": "柔和、干净，带有暖色调",
    "detail_level": "高"
  },
  "negative_prompt": [
    "正装西服和领带",
    "企业证件照风格",
    "名人",
    "相似者",
    "与参考图不同的人脸",
    "卡通",
    "插画",
    "过度处理的皮肤",
    "模糊",
    "低分辨率"
  ]
}
```

## 来源备注
- 源站作者：Johnn
- 源站 UUID：8EtcjfhydA
- 源站分类：05_人物肖像与写实摄影

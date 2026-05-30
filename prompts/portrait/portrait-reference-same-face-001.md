---
id: "portrait-reference-same-face-001"
title: "专业商务人像摄影提示词预设"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["商务", "正装", "男性", "肖像", "影棚", "暖色调", "微笑", "自信"]
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
      "pose",
      "framing",
      "camera_angle",
      "lighting_style",
      "background_style",
      "overall_composition"
    ],
    "do_not_copy": [
      "face",
      "facial_structure",
      "identity",
      "celebrity_likeness"
    ]
  },
  "scene": {
    "type": "studio",
    "background": "smooth_neutral_gradient_same_as_reference",
    "lighting": "soft_balanced_professional_studio_lighting_same_as_reference"
  },
  "subject": {
    "identity": "generic_adult_male_not_a_real_person",
    "age_range": "late_20s_to_mid_30s",
    "pose": "upright_head_and_shoulders_pose_same_as_reference",
    "expression": "confident_friendly_smile_similar_intensity",
    "gaze": "direct_eye_contact_with_camera",
    "hair": {
      "style": "short_neatly_groomed",
      "color": "dark_brown_or_black"
    },
    "facial_features": "original_unique_face_not_matching_reference"
  },
  "outfit": {
    "type": "formal_business",
    "jacket": "tailored_dark_gray_suit",
    "shirt": "clean_white_dress_shirt",
    "tie": "navy_blue_classic"
  },
  "camera": {
    "framing": "tight_head_and_shoulders",
    "angle": "straight_on_same_as_reference",
    "lens": "85mm_portrait",
    "aperture": "f2.8",
    "depth_of_field": "shallow",
    "focus": "razor_sharp_on_face"
  },
  "style": {
    "look": "photorealistic_high-end_corporate_portrait",
    "skin_texture": "natural_realistic",
    "contrast": "clean_professional",
    "detail_level": "high"
  },
  "negative_prompt": [
    "Cristiano Ronaldo",
    "celebrity",
    "famous person",
    "lookalike",
    "same face as reference",
    "identity match",
    "overly stylized",
    "cartoon",
    "illustration",
    "blur",
    "low quality"
  ]
}

## 中文译文（源站提供）
```json
{
  "reference_usage": {
    "use_reference_for": [
      "姿势",
      "构图",
      "拍摄角度",
      "灯光风格",
      "背景风格",
      "整体构图"
    ],
    "do_not_copy": [
      "面部",
      "面部结构",
      "身份",
      "名人肖像"
    ]
  },
  "scene": {
    "type": "影棚",
    "background": "平滑中性渐变，与参考图相同",
    "lighting": "柔和均衡的专业影棚灯光，与参考图相同"
  },
  "subject": {
    "identity": "普通成年男性，非真实人物",
    "age_range": "20 多岁末至 30 岁中",
    "pose": "直立的头部和肩部姿势，与参考图相同",
    "expression": "自信友好的微笑，强度相似",
    "gaze": "与镜头直接眼神接触",
    "hair": {
      "style": "短而整洁",
      "color": "深棕色或黑色"
    },
    "facial_features": "原创独特面部，不与参考图匹配"
  },
  "outfit": {
    "type": "正装",
    "jacket": "修身深灰色西装",
    "shirt": "干净的白色正装衬衫",
    "tie": "海军蓝经典款"
  },
  "camera": {
    "framing": "紧凑的头部和肩部构图",
    "angle": "正面直拍，与参考图相同",
    "lens": "85mm 人像镜头",
    "aperture": "f2.8",
    "depth_of_field": "浅景深",
    "focus": "面部锐利对焦"
  },
  "style": {
    "look": "写实高端商务肖像",
    "skin_texture": "自然逼真",
    "contrast": "干净专业",
    "detail_level": "高"
  },
  "negative_prompt": [
    "C 罗",
    "名人",
    "著名人物",
    "相似者",
    "与参考图相同的面部",
    "身份匹配",
    "过度风格化",
    "卡通",
    "插画",
    "模糊",
    "低质量"
  ]
}
```

## 来源备注
- 源站作者：Johnn
- 源站 UUID：aYUMIxcaai
- 源站分类：05_人物肖像与写实摄影

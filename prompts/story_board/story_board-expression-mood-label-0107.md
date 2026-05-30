---
id: story_board-expression-mood-label-0107
title: "四格情绪人像预设模板"
category: story_board
subcategory: "09_故事分镜角色设定"
aesthetic: null
tags: ["四格", "拼贴", "人像", "写实", "棚拍", "女性", "高马尾", "金耳环"]
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
  "scene": {
    "format": "4_photo_collage",
    "layout": "2_columns_2_rows",
    "aspect_ratio": "3:4",
    "label_position": "top_center_white_text",
    "background": "soft_minimal_studio_backdrop"
  },
  "subject": {
    "identity": "same_girl_from_reference",
    "appearance": {
      "hair": "{"hair style" "dark_brown_high_ponytail"}",
      "skin_tone": "{"skin tone" "warm_tan"}",
      "features": "same_face_structure",
      "accessories": ["{"accessories" "gold_hoop_earrings"}"],
      "outfit": "{"outfit" "bikini"}",
      "visible_area": "upper_body_chest_to_head",
      "makeup": "natural_glow"
    },

    "style": "hyper_realistic_portrait_photography",
    "camera": {
      "lens": "85mm_portrait",
      "framing": "upper_body_close_up",
      "lighting": "soft_diffused_beauty_light",
      "focus": "sharp_on_eyes_and_face"
    }

  },
  "photos": [
       { "mood": "{"mood 1" "ANGRY"}", "expression": "{"expression 1" "tense_brows_narrowed_eyes"}", "label": "Angry" },
   
    { "mood": "{"mood 2" "DEPRESSED"}", "expression": "{"expression 2" "downward_gaze_low_energy"}", "label": "Depressed" },

    { "mood": "{"mood 3" "FLIRTY"}", "expression": "{"expression 3" "half_smirk_head_tilt"}", "label": "Flirty" },

    { "mood": "{"mood 4" "LAUGHING"}", "expression": "{"expression 4" "open_mouth_genuine_laughter"}", "label": "Laughing" }

  ],

  "render_style": {

    "detail": "micro_skin_texture_hair_strands_realistic_shadows",

    "color_grade": "natural_skin_tones_high_dynamic_range"

  }

}

## 中文译文（源站提供）
```json

{
  "scene": {
    "格式"："4张照片拼贴",，
    "布局"："2_columns_2_rows"，
    "aspect_ratio": "3:4",，
    "label_position": "顶部居中白色文本",，
    "背景"："soft_minimal_studio_backdrop"
  },
  "subject": {
    "identity": "与参考图像中的女孩是同一人",，
    "appearance": {
      "头发"："{\"发型\" \"深棕色高马尾\"}",，
      "skin_tone": "{\"肤色\" \"暖棕色\"}",，
      "features": "same_face_structure",，
      "配件"：["{\"配件\" \"金耳环\"}"]，
      "服装"："{\"服装\" \"比基尼\"}",，
      "visible_area": "上半身胸部至头部",，
      “妆容”：“自然光泽”
    },
    "风格"："超写实肖像摄影"，
    "camera": {
      "镜头"："85mm_portrait"，
      “取景方式”：“上半身特写”，
      "lighting": "柔和漫反射美颜光",，
      “focus”：“眼部和面部清晰”
    }
  },
  "photos": [
    { "情绪": "{\"情绪1\" \"愤怒\"}", "表情": "{\"表情1\" \"眉头紧锁_眼睛眯起\"}", "标签": "愤怒" }，
    { "mood": "{\"mood 2\" \"DEPRESSED\"}", "expression": "{\"expression 2\" \"downward_gaze_low_energy\"}", "label": "沮丧" },，
    { "mood": "{\"mood 3\" \"FLIRTY\"}", "expression": "{\"expression 3\" \"half_smirk_head_tilt\"}", "label": "调情" },，
    { "mood": "{\"mood 4\" \"LAUGHING\"}", "expression": "{\"expression 4\" \"open_mouth_genuine_laughter\"}", "label": "大笑" }
  ],
  "render_style": {
    "detail": "micro_skin_texture_hair_strands_realistic_shadows",，
    "color_grade": "自然肤色高动态范围"
  }
}
```

## 来源备注
- 源站作者：Keskin
- 源站 UUID：QHfzxuigLP
- 源站分类：09_故事分镜角色设定

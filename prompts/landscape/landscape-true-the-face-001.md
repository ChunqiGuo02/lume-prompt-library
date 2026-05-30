---
id: "landscape-true-the-face-001"
title: "热带海滩时尚大片：青柠 orchid 亮片裙四格拼图"
category: landscape
subcategory: "09_故事分镜角色设定"
aesthetic: null
tags: ["海滩", "热带", "时尚", "拼贴", "亮片", "兰花", "青柠绿", "薄荷绿"]
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
  "generation_request": {
    "meta_data": {
      "tool": "NanoBanana Pro",
      "task_type": "photoreal_fashion_editorial_collage",
      "version": "v1.0_LIME_ORCHID_SEQUIN_4PANEL_EN",
      "priority": "highest",
      "language": "en"
    },
    "references": {
      "reference_image_subject": {
        "source": "UPLOAD_REFERENCE_IMAGE (REQUIRED)",
        "purpose": "FACE_IDENTITY_LOCK",
        "strict_lock": true,
        "face_similarity_priority": "MAX",
        "no_identity_blending": true,
        "no_beautify": true,
        "no_age_shift": true,
        "preserve_skin_texture": true,
        "preserve_facial_proportions": true
      },
      "reference_image_style": {
        "source": "UPLOAD_REFERENCE_IMAGE (REQUIRED)",
        "purpose": "WARDROBE_MOOD_COMPOSITION_ANCHOR",
        "strict_lock": false,
        "preserve_outfit": true,
        "preserve_color_palette": true,
        "preserve_setting": true,
        "preserve_collage_layout": true
      }
    },
    "global_constraints": {
      "rating": "G",
      "no_nudity": true,
      "no_explicit_content": true,
      "no_text": true,
      "no_logos": true,
      "no_watermark": true
    },
    "output_settings": {
      "aspect_ratio": "9:16",
      "orientation": "portrait",
      "resolution_target": "ultra_high_res",
      "render_style": "high_end_fashion_editorial_photoreal",
      "sharpness": "crisp_but_natural",
      "film_grain": "subtle",
      "color_grade": "warm_tropical_daylight",
      "dynamic_range": "natural_not_hdr",
      "skin_rendering": "real_texture_no_retouch"
    },
    "creative_prompt": {
      "scene_summary": "A 4-panel fashion editorial collage in a tropical beach setting with palm trees and sandy ground. The same woman appears in three panels wearing a {"top color" "lime-green"} halter draped top with an orchid flower clasp at the neckline and a {"skirt color" "mint-green"} sequin mini skirt made of large round reflective discs. One panel is a texture close-up of the sequin discs. The subject’s face must be clearly visible and match the reference identity exactly (100%).",
      "collage_layout": {
        "format": "2x2 grid collage",
        "panel_1": "Full-body front pose by a palm tree, holding a fresh green coconut at hip level, confident relaxed stance, face clearly visible.",
        "panel_2": "Tight neckline close-up showing the orchid flower clasp and draped fabric folds, partial face/jawline acceptable but keep identity consistent, realistic skin texture.",
        "panel_3": "Macro texture close-up of the mint-green round sequin discs (no face), glossy reflective surface detail.",
        "panel_4": "Three-quarter back/side pose looking over shoulder toward camera, face fully visible, palm trees in background, outfit back drape visible."
      },
      "subject": {
        "count": 1,
        "identity": "Use the exact face identity from the subject reference with 100% similarity across panels.",
        "age": "adu"

## 中文译文（源站提供）
```json
{
  "generation_request": {
    "meta_data": {
      "tool": "NanoBanana Pro",
      "task_type": "photoreal_fashion_editorial_collage",
      "version": "v1.0_LIME_ORCHID_SEQUIN_4PANEL_EN",
      "priority": "highest",
      "language": "zh-Hans"
    },
    "references": {
      "reference_image_subject": {
        "source": "UPLOAD_REFERENCE_IMAGE (REQUIRED)",
        "purpose": "FACE_IDENTITY_LOCK",
        "strict_lock": true,
        "face_similarity_priority": "MAX",
        "no_identity_blending": true,
        "no_beautify": true,
        "no_age_shift": true,
        "preserve_skin_texture": true,
        "preserve_facial_proportions": true
      },
      "reference_image_style": {
        "source": "UPLOAD_REFERENCE_IMAGE (REQUIRED)",
        "purpose": "WARDROBE_MOOD_COMPOSITION_ANCHOR",
        "strict_lock": false,
        "preserve_outfit": true,
        "preserve_color_palette": true,
        "preserve_setting": true,
        "preserve_collage_layout": true
      }
    },
    "global_constraints": {
      "rating": "G",
      "no_nudity": true,
      "no_explicit_content": true,
      "no_text": true,
      "no_logos": true,
      "no_watermark": true
    },
    "output_settings": {
      "aspect_ratio": "9:16",
      "orientation": "portrait",
      "resolution_target": "ultra_high_res",
      "render_style": "high_end_fashion_editorial_photoreal",
      "sharpness": "crisp_but_natural",
      "film_grain": "subtle",
      "color_grade": "warm_tropical_daylight",
      "dynamic_range": "natural_not_hdr",
      "skin_rendering": "real_texture_no_retouch"
    },
    "creative_prompt": {
      "scene_summary": "一张四格时尚大片拼贴画，背景为热带海滩，有棕榈树和沙地。同一位女性出现在其中三格中，她身穿一件 {\"top color\" \"lime-green\"} 柠檬绿挂脖垂坠上衣，领口处有一个兰花胸针，搭配一条由大圆形反光亮片制成的 {\"skirt color\" \"mint-green\"} 薄荷绿亮片迷你裙。其中一格是亮片圆盘的特写纹理。主体面部必须清晰可见，并与参考身份完全匹配（100%）。",
      "collage_layout": {
        "format": "2x2 grid collage",
        "panel_1": "棕榈树旁全身正面姿势，手持一个新鲜的绿色椰子，置于臀部高度，自信放松的姿态，面部清晰可见。",
        "panel_2": "领口特写，展示兰花胸针和垂坠面料褶皱，可接受部分面部/下颌线，但需保持身份一致，皮肤纹理真实。",
        "panel_3": "薄荷绿圆形亮片圆盘的微距纹理特写（无面部），表面光泽反光细节。",
        "panel_4": "四分之三背部/侧面姿势，越过肩膀看向镜头，面部完全可见，背景为棕榈树，可见服装背部垂坠效果。"
      },
      "subject": {
        "count": 1,
        "identity": "在所有拼贴格中，使用与主体参考完全一致的面部身份，相似度达 100%。",
        "age": "adult"
      }
    }
  }
}
```

## 来源备注
- 源站作者：Özge Döner
- 源站 UUID：x5DO8B8Dcd
- 源站分类：09_故事分镜角色设定

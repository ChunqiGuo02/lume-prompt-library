---
id: portrait-true-preserve-the-1991
title: "罗马斗兽场红裙旅拍写真"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["罗马", "斗兽场", "建筑", "人像", "红色", "长裙", "玫瑰", "旅行"]
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
      "task_type": "photoreal_travel_editorial_portrait_landmark",
      "version": "v1.0_ROME_COLOSSEUM_RED_DRESS_GOLDEN_HOUR_EDITORIAL_FACELOCK_EN",
      "priority": "highest",
      "language": "en"
    },

    "references": {
      "reference_image_style": {
        "source": "UPLOAD_REFERENCE_IMAGE (REQUIRED)",
        "purpose": "STYLE_COMPOSITION_ANCHOR",
        "strict_lock": true,
        "preserve_composition": true,
        "preserve_lighting": true,
        "preserve_palette": true,
        "preserve_vibe": true
      },
      "reference_image_face": {
        "source": "UPLOAD_REFERENCE_IMAGE (OPTIONAL)",
        "purpose": "FACE_IDENTITY_LOCK",
        "strict_lock": true,
        "face_similarity_priority": "MAX",
        "no_identity_blending": true,
        "no_beautify": true,
        "no_age_shift": true,
        "preserve_skin_texture": true,
        "preserve_facial_proportions": true,
        "preserve_eye_shape": true,
        "preserve_nose_shape": true,
        "preserve_lip_shape": true,
        "preserve_jawline": true
      }
    },

    "global_constraints": {
      "rating": "PG-13",
      "no_nudity": true,
      "no_explicit_sexual_content": true,
      "no_logos": true,
      "no_watermark": true,
      "no_readable_text": true
    },

    "output_settings": {
      "aspect_ratio": "4:5",
      "orientation": "portrait",
      "resolution_target": "ultra_high_res",
      "render_style": "cinematic_photoreal_travel_editorial",
      "sharpness": "crisp_but_natural",
      "film_grain": "subtle_35mm",
      "color_grade": "warm_golden_hour_neutral_stone_red_dress",
      "dynamic_range": "natural_not_hdr",
      "skin_rendering": "real_texture_no_retouch"
    },

    "creative_prompt": {
      "scene_summary": "Create a photoreal travel editorial portrait at the Colosseum in Rome during golden hour. Camera is eye-level with a slightly wide editorial perspective (natural proportions, not distorted). The Colosseum fills the background with strong architectural detail and warm sunlight on the stone.\n\nSubject: one adult woman with very long, dark, wavy hair. She is seated on a low stone wall in the foreground, turned slightly to her left, head angled left with eyes closed or looking away, calm and elegant expression. Natural posture: one hand resting on the wall, the other relaxed.\n\nWardrobe: deep {"dress color" "red/burgundy"} sleeveless cutout dress (tasteful side cutout), flowing maxi skirt with soft volume and realistic fabric folds. Minimal jewelry, clean editorial styling.\n\nProps: a single red rose with a pale stem/leaf placed on the stone wall to the subject’s right (viewer’s right), subtle and romantic.\n\nEnvironment: stone terrace/walkway with layered brick/stone textures in the foreground. Green shrubs/trees partially framing the right side. Clear blue sky.\n\nLighting: warm low-angle sunlight fro"
    }
  }
}

## 中文译文（源站提供）
```json
{
  "generation_request": {
    "meta_data": {
      "tool": "NanoBanana Pro",
      "task_type": "photoreal_travel_editorial_portrait_landmark",
      "version": "v1.0_ROME_COLOSSEUM_RED_DRESS_GOLDEN_HOUR_EDITORIAL_FACELOCK_EN",
      "priority": "highest",
      "language": "en"
    },
    "references": {
      "reference_image_style": {
        "source": "UPLOAD_REFERENCE_IMAGE (REQUIRED)",
        "purpose": "STYLE_COMPOSITION_ANCHOR",
        "strict_lock": true,
        "preserve_composition": true,
        "preserve_lighting": true,
        "preserve_palette": true,
        "preserve_vibe": true
      },
      "reference_image_face": {
        "source": "UPLOAD_REFERENCE_IMAGE (OPTIONAL)",
        "purpose": "FACE_IDENTITY_LOCK",
        "strict_lock": true,
        "face_similarity_priority": "MAX",
        "no_identity_blending": true,
        "no_beautify": true,
        "no_age_shift": true,
        "preserve_skin_texture": true,
        "preserve_facial_proportions": true,
        "preserve_eye_shape": true,
        "preserve_nose_shape": true,
        "preserve_lip_shape": true,
        "preserve_jawline": true
      }
    },
    "global_constraints": {
      "rating": "PG-13",
      "no_nudity": true,
      "no_explicit_sexual_content": true,
      "no_logos": true,
      "no_watermark": true,
      "no_readable_text": true
    },
    "output_settings": {
      "aspect_ratio": "4:5",
      "orientation": "portrait",
      "resolution_target": "ultra_high_res",
      "render_style": "cinematic_photoreal_travel_editorial",
      "sharpness": "crisp_but_natural",
      "film_grain": "subtle_35mm",
      "color_grade": "warm_golden_hour_neutral_stone_red_dress",
      "dynamic_range": "natural_not_hdr",
      "skin_rendering": "real_texture_no_retouch"
    },
    "creative_prompt": {
      "scene_summary": "在罗马斗兽场拍摄一张写实旅行编辑肖像，时间为黄金时段。相机与视线齐平，采用略宽的编辑视角（自然比例，无扭曲）。斗兽场充满背景，建筑细节丰富，石材上洒满温暖的阳光。\n\n主体：一名成年女性，头发极长、深色、波浪状。她坐在前景的低矮石墙上，身体略微转向左侧，头部向左倾斜，双眼紧闭或看向别处，表情平静优雅。姿态自然：一只手搭在墙上，另一只手放松。\n\n服装：深色 {\"dress color\" \"red/burgundy\"} 无袖镂空连衣裙（品味高雅的侧面镂空），飘逸的及踝长裙，柔软蓬松，布料褶皱逼真。极简首饰，干净的编辑造型。\n\n道具：一朵带浅色茎/叶的红玫瑰，放置在主体右侧（观者右侧）的石墙上，微妙而浪漫。\n\n环境：石质露台/人行道，前景有分层的砖石纹理。绿色灌木/树木部分框住右侧。晴朗的蓝天。\n\n光线：温暖的低角度阳光"
    }
  }
}
```

## 来源备注
- 源站作者：Özge Döner
- 源站 UUID：l5NvqCSoYs
- 源站分类：05_人物肖像与写实摄影

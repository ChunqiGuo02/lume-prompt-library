---
id: portrait-true-preserve-the-0179
title: "丛林猴子自拍：女子与猕猴搞笑合影"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["自拍", "猴子", "丛林", "旅行", "搞笑", "绿色", "自然", "户外"]
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
      "task_type": "photoreal_travel_selfie_wide_angle_comedy",
      "version": "v1.0_MONKEY_SELFIE_JUNGLE_PATH_FACELOCK_SAFE_EN",
      "priority": "highest",
      "language": "en"
    },

    "references": {
      "reference_image_style": {
        "source": "UPLOAD_REFERENCE_IMAGE (REQUIRED)",
        "purpose": "STYLE_COMPOSITION_POSE_LIGHTING_ANCHOR",
        "strict_lock": true,
        "preserve_pose": true,
        "preserve_composition": true,
        "preserve_lighting": true,
        "preserve_vibe": true,
        "preserve_palette": true
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
        "preserve_moles_freckles_scars": true,
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
      "aspect_ratio": "9:16",
      "orientation": "portrait",
      "resolution_target": "ultra_high_res",
      "render_style": "cinematic_photoreal_candid",
      "sharpness": "crisp_but_natural",
      "film_grain": "subtle",
      "color_grade": "natural_daylight_warm_green",
      "dynamic_range": "natural_not_hdr",
      "skin_rendering": "real_texture_no_retouch"
    },

    "creative_prompt": {
      "scene_summary": "Create a photoreal travel selfie in a lush tropical forest. Setting: a narrow outdoor walkway/path with wet ground, dense green foliage, tall trees, and a humid jungle atmosphere.\n\nForeground: a macaque monkey extremely close to the camera lens, dominating the frame with a humorous wide-angle distortion. The monkey’s arm reaches forward as if it is taking the selfie. The monkey mouth is open in a funny surprised expression. Realistic fur detail, natural anatomy, no deformation.\n\nBackground: one adult woman behind the monkey, laughing with an open-mouth smile, both hands raised doing a double peace sign. Natural candid joy. Hair in a casual updo with soft bangs framing the face. Light summer outfit ({"outfit color" "white"} dress or top), minimal jewelry. One wrist has a simple yellow wristband (no readable text).\n\nCinematography: smartphone ultra-wide selfie look (14mm equivalent), close perspective, mild lens distortion, natural daylight, soft shadows, realistic skin texture, no heavy retouch, no beauty filter. Keep it fun and spontaneous, high realis"

## 中文译文（源站提供）
```json
{
  "generation_request": {
    "meta_data": {
      "tool": "NanoBanana Pro",
      "task_type": "photoreal_travel_selfie_wide_angle_comedy",
      "version": "v1.0_MONKEY_SELFIE_JUNGLE_PATH_FACELOCK_SAFE_EN",
      "priority": "highest",
      "language": "en"
    },

    "references": {
      "reference_image_style": {
        "source": "UPLOAD_REFERENCE_IMAGE (REQUIRED)",
        "purpose": "STYLE_COMPOSITION_POSE_LIGHTING_ANCHOR",
        "strict_lock": true,
        "preserve_pose": true,
        "preserve_composition": true,
        "preserve_lighting": true,
        "preserve_vibe": true,
        "preserve_palette": true
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
        "preserve_moles_freckles_scars": true,
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
      "aspect_ratio": "9:16",
      "orientation": "portrait",
      "resolution_target": "ultra_high_res",
      "render_style": "cinematic_photoreal_candid",
      "sharpness": "crisp_but_natural",
      "film_grain": "subtle",
      "color_grade": "natural_daylight_warm_green",
      "dynamic_range": "natural_not_hdr",
      "skin_rendering": "real_texture_no_retouch"
    },

    "creative_prompt": {
      "scene_summary": "在郁郁葱葱的热带森林中创作一张超现实旅行自拍。场景：一条狭窄的户外小径/步道，地面潮湿，植被茂密，树木高大，充满潮湿的丛林氛围。\n\n前景：一只猕猴非常靠近镜头，以幽默的广角畸变占据画面主体。猴子的手臂向前伸出，仿佛正在自拍。猴子张着嘴，表情滑稽而惊讶。毛发细节逼真，解剖结构自然，无变形。\n\n背景：猕猴身后有一位成年女性，她张嘴大笑，双手举起，比出双“V”字手势。展现自然率真的喜悦。头发随意盘起，柔软的刘海修饰脸庞。穿着轻薄的夏装（{\"outfit color\" \"white\"} 连衣裙或上衣），佩戴极简首饰。一只手腕上戴着一条简单的黄色腕带（无可读文字）。\n\n电影摄影：智能手机超广角自拍效果（相当于 14 毫米），近距离视角，轻微镜头畸变，自然日光，柔和阴影，逼真皮肤纹理，无过度修饰，无美颜滤镜。保持趣味性和自发性，高度真实感"
    }
  }
}
```

## 来源备注
- 源站作者：Özge Döner
- 源站 UUID：cICLL7SQaD
- 源站分类：05_人物肖像与写实摄影

---
id: "portrait-carousel-the-lock-001"
title: "浪漫情侣夜骑旋转木马，暖光映衬甜蜜对视"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["情侣", "浪漫", "旋转木马", "暖光", "暖色调", "写实", "摄影", "约会"]
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
      "task_type": "photoreal_cinematic_carousel_couple_close_scene",
      "version": "v1.0_CAROUSEL_RIDE_ROMCOM_WARM_LIGHTS_POSE_LOCK",
      "priority": "highest"
    },
    "references": {
      "female_reference_image": {
        "slot": 1,
        "purpose": "FEMALE_IDENTITY_LOCK",
        "strict_identity_lock": true,
        "no_beautify": true
      },
      "male_reference_image": {
        "slot": 2,
        "purpose": "MALE_IDENTITY_LOCK",
        "strict_identity_lock": true,
        "no_beautify": true
      },
      "composition_reference_image": {
        "source": "UPLOAD_REFERENCE_IMAGE (OPTIONAL)",
        "purpose": "EXACT_COMPOSITION_LIGHTING_WARDROBE_ENV_LOCK",
        "strict_lock": true,
        "no_layout_drift": true,
        "preserve_framing": true
      }
    },
    "output_settings": {
      "aspect_ratio": "4:5",
      "orientation": "portrait",
      "resolution": "ultra_high_res",
      "render_style": "ultra_photoreal_cinematic_lifestyle",
      "sharpness": "crisp_faces_natural_texture",
      "film_grain": "subtle_analog",
      "color_grade": "warm_carnival_golden"
    },
    "hard_constraints": [
      "Exactly 2 people only (one female, one male).",
      "Faces must match the uploaded references with maximum similarity (no morphing, no identity drift).",
      "Photorealistic only: natural skin texture, no beauty filter, no plastic smoothing.",
      "Carousel setting: visible ornate ceiling + warm bulbs + carousel poles + painted horses.",
      "Match the reference pose logic: couple on carousel horses, looking at each other and smiling.",
      "No readable text, no logos, no watermark.",
      "Correct anatomy: hands gripping pole naturally, realistic posture seated on carousel horse."
    ],
    "camera": {
      "style": "cinematic lifestyle photo",
      "lens": "35mm",
      "aperture": "f/2.0",
      "focus": "sharp on both faces, gentle falloff to background",
      "shutter_speed": "1/125",
      "iso": 800,
      "white_balance": "warm_tungsten_carnival"
    },
    "lighting": {
      "type": "carousel bulbs + warm ambient",
      "contrast": "medium",
      "highlights": "soft specular on hair and denim, controlled on skin",
      "shadows": "soft, natural falloff"
    },
    "prompt": {
      "scene_summary": "Ultra-photoreal cinematic romcom scene on an indoor carousel at night. The ornate carousel ceiling fills the top of frame with classic decorative molding and rows of warm glowing bulbs. In the foreground, a painted carousel horse head and pole are visible, with rich vintage details (gold trim, colorful saddle accents). \n\nTwo people only: the male sits slightly lower on a carousel horse, holding the vertical pole with both hands and looking up at the female with a soft smile. The female sits on the neighboring horse, leaning slightly toward him, smiling back warmly. Their faces are

## 中文译文（源站提供）
```json
{
  "generation_request": {
    "meta_data": {
      "tool": "NanoBanana Pro",
      "task_type": "photoreal_cinematic_carousel_couple_close_scene",
      "version": "v1.0_CAROUSEL_RIDE_ROMCOM_WARM_LIGHTS_POSE_LOCK",
      "priority": "highest"
    },
    "references": {
      "female_reference_image": {
        "slot": 1,
        "purpose": "FEMALE_IDENTITY_LOCK",
        "strict_identity_lock": true,
        "no_beautify": true
      },
      "male_reference_image": {
        "slot": 2,
        "purpose": "MALE_IDENTITY_LOCK",
        "strict_identity_lock": true,
        "no_beautify": true
      },
      "composition_reference_image": {
        "source": "UPLOAD_REFERENCE_IMAGE (OPTIONAL)",
        "purpose": "EXACT_COMPOSITION_LIGHTING_WARDROBE_ENV_LOCK",
        "strict_lock": true,
        "no_layout_drift": true,
        "preserve_framing": true
      }
    },
    "output_settings": {
      "aspect_ratio": "4:5",
      "orientation": "portrait",
      "resolution": "ultra_high_res",
      "render_style": "ultra_photoreal_cinematic_lifestyle",
      "sharpness": "crisp_faces_natural_texture",
      "film_grain": "subtle_analog",
      "color_grade": "warm_carnival_golden"
    },
    "hard_constraints": [
      "仅限 2 人（一男一女）。",
      "面部必须与上传的参考图高度相似（无变形，无身份漂移）。",
      "仅限超写实：自然皮肤纹理，无美颜滤镜，无塑料感平滑。",
      "旋转木马场景：可见华丽天花板 + 暖色灯泡 + 旋转木马杆 + 彩绘木马。",
      "匹配参考姿势逻辑：情侣坐在旋转木马上，彼此对视并微笑。",
      "无可读文本，无标志，无水印。",
      "正确解剖结构：手自然握住杆子，坐在旋转木马上姿势逼真。"
    ],
    "camera": {
      "style": "电影级生活照",
      "lens": "35mm",
      "aperture": "f/2.0",
      "focus": "双脸清晰，背景柔和虚化",
      "shutter_speed": "1/125",
      "iso": 800,
      "white_balance": "暖钨丝灯嘉年华"
    },
    "lighting": {
      "type": "旋转木马灯泡 + 暖环境光",
      "contrast": "中等",
      "highlights": "头发和牛仔布上有柔和的镜面高光，皮肤上受控",
      "shadows": "柔和，自然衰减"
    },
    "prompt": {
      "scene_summary": "夜晚室内旋转木马上的超写实电影级浪漫喜剧场景。华丽的旋转木马天花板占据画面顶部，带有经典的装饰线条和一排排温暖发光的灯泡。前景中，可见一个彩绘的旋转木马头和杆子，带有丰富的复古细节（金色饰边，彩色马鞍点缀）。\n\n仅限两人：男性略低地坐在旋转木马上，双手握住垂直的杆子，带着柔和的微笑抬头看着女性。女性坐在相邻的木马上，身体略微倾向他，温暖地回以微笑。他们的脸部"
    }
  }
}
```

## 来源备注
- 源站作者：Özge Döner
- 源站 UUID：sAmYa5aGgv
- 源站分类：05_人物肖像与写实摄影

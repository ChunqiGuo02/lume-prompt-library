---
id: portrait-lock-reference-ride-0738
title: "夜市情侣旋转秋千浪漫写真"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["游乐园", "情侣", "夜景", "霓虹", "浪漫", "甜蜜", "欢笑", "飞椅"]
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
      "task_type": "photoreal_cinematic_night_fair_ride_couple_swing_motion_blur",
      "version": "v1.0_AMUSEMENT_SWING_RIDE_NEON_BOKEH_ROMCOM",
      "priority": "highest"
    },
    "references": {
      "female_reference_image": {
        "slot": 1,
        "purpose": "FEMALE_IDENTITY_LOCK",
        "strict_identity_lock": true
      },
      "male_reference_image": {
        "slot": 2,
        "purpose": "MALE_IDENTITY_LOCK",
        "strict_identity_lock": true
      },
      "composition_reference_image": {
        "source": "UPLOAD_REFERENCE_IMAGE (OPTIONAL)",
        "purpose": "EXACT_COMPOSITION_LIGHTING_MOTION_LOCK",
        "strict_lock": true,
        "no_layout_drift": true,
        "preserve_framing": true
      }
    },
    "output_settings": {
      "aspect_ratio": "4:5",
      "orientation": "portrait",
      "resolution": "ultra_high_res",
      "render_style": "ultra_photoreal_cinematic_romcom_night",
      "sharpness": "faces_tack_sharp_background_motion_blur",
      "film_grain": "subtle_analog",
      "color_grade": "teal_magenta_neon_filmic"
    },
    "hard_constraints": [
      "Exactly 2 main people only (one female, one male) in the foreground swing seat.",
      "Faces must match the uploaded references with maximum similarity (no morphing).",
      "Match the reference concept: couple riding a chair-swing amusement ride at night.",
      "Visible swing chains and seat, realistic rigging and perspective.",
      "Cinematic motion blur in background lights, but faces remain sharp.",
      "No text, no logos, no watermark.",
      "Photoreal anatomy: correct hands, legs, and seat interaction."
    ],
    "camera": {
      "style": "cinematic night photography",
      "lens": "35mm",
      "aperture": "f/1.8",
      "focus": "locked on couple faces and torsos",
      "shutter_speed": "1/30",
      "iso": 1600,
      "white_balance": "cool_night_neon"
    },
    "lighting": {
      "type": "mixed neon + ride lights",
      "contrast": "medium_high",
      "highlights": "sparkly bokeh points, controlled on skin",
      "shadows": "soft, lifted by ambient city/ride glow"
    },
    "prompt": {
      "scene_summary": "Ultra-photoreal cinematic romcom night scene at an amusement park. A couple sits together on a chair-swing ride seat, suspended by visible metal chains. They are mid-ride, slightly angled as they swing, laughing and looking at each other. The background is a city-like blur of colorful carnival lights and neon bokeh streaks (strong motion blur), creating a sense of speed and height. The couple remains sharp and well-exposed, with natural skin texture and realistic fabric detail.\n\nWardrobe (match the reference vibe):\n- Male: {"male shirt" "plain white t-shirt"}, light blue jeans, casual sneakers.\n- Female: {"female top" "beige/tan sleeveless top"}, ripped light jeans, white sneakers.\n\nComposition:\n- Couple centered in the frame, sea"
  }
}

## 中文译文（源站提供）
```json
{
  "generation_request": {
    "meta_data": {
      "tool": "NanoBanana Pro",
      "task_type": "photoreal_cinematic_night_fair_ride_couple_swing_motion_blur",
      "version": "v1.0_AMUSEMENT_SWING_RIDE_NEON_BOKEH_ROMCOM",
      "priority": "highest"
    },
    "references": {
      "female_reference_image": {
        "slot": 1,
        "purpose": "FEMALE_IDENTITY_LOCK",
        "strict_identity_lock": true
      },
      "male_reference_image": {
        "slot": 2,
        "purpose": "MALE_IDENTITY_LOCK",
        "strict_identity_lock": true
      },
      "composition_reference_image": {
        "source": "UPLOAD_REFERENCE_IMAGE (OPTIONAL)",
        "purpose": "EXACT_COMPOSITION_LIGHTING_MOTION_LOCK",
        "strict_lock": true,
        "no_layout_drift": true,
        "preserve_framing": true
      }
    },
    "output_settings": {
      "aspect_ratio": "4:5",
      "orientation": "portrait",
      "resolution": "ultra_high_res",
      "render_style": "ultra_photoreal_cinematic_romcom_night",
      "sharpness": "faces_tack_sharp_background_motion_blur",
      "film_grain": "subtle_analog",
      "color_grade": "teal_magenta_neon_filmic"
    },
    "hard_constraints": [
      "前景秋千座椅上仅有 2 个主要人物（一男一女）。",
      "面部必须与上传的参考图最大限度地相似（无变形）。",
      "符合参考概念：一对情侣在夜间乘坐旋转秋千游乐设施。",
      "可见秋千链条和座椅，逼真的索具和透视效果。",
      "背景灯光有电影般的运动模糊，但面部保持清晰。",
      "无文字、无标志、无水印。",
      "照片级逼真解剖结构：正确的手部、腿部和座椅互动。"
    },
    "camera": {
      "style": "cinematic night photography",
      "lens": "35mm",
      "aperture": "f/1.8",
      "focus": "locked on couple faces and torsos",
      "shutter_speed": "1/30",
      "iso": 1600,
      "white_balance": "cool_night_neon"
    },
    "lighting": {
      "type": "mixed neon + ride lights",
      "contrast": "medium_high",
      "highlights": "sparkly bokeh points, controlled on skin",
      "shadows": "soft, lifted by ambient city/ride glow"
    },
    "prompt": {
      "scene_summary": "游乐园内超逼真的电影浪漫喜剧夜景。一对情侣坐在旋转秋千的座椅上，由可见的金属链条悬挂。他们正在游玩中，随着秋千的摆动略微倾斜，互相笑着对视。背景是城市般的彩色嘉年华灯光和霓虹散景条纹（强烈的运动模糊），营造出速度和高度感。情侣保持清晰且曝光良好，皮肤纹理自然，织物细节逼真。\n\n服装（符合参考氛围）：\n- 男：{\"male shirt\" \"plain white t-shirt\"}，浅蓝色牛仔裤，休闲运动鞋。\n- 女：{\"female top\" \"beige/tan sleeveless top\"}，破洞浅色牛仔裤，白色运动鞋。\n\n构图：\n- 情侣居中，海"
    }
  }
}
```

## 来源备注
- 源站作者：Özge
- 源站 UUID：aEuCtLWJkQ
- 源站分类：05_人物肖像与写实摄影

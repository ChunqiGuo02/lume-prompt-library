---
id: portrait-type-reference-frame-0702
title: "复古餐厅少女四格写真"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["复古", "美式", "少女", "餐厅", "奶昔", "樱桃", "双马尾", "雀斑"]
recommended_models: 
  - banana-pro
recommended_params:
  aspect_ratio: "2:3"
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
      "meta_data": { "tool": "NanoBananaPro", "task_type": "photorealistic_multi_panel_grid", "version": "v1.0" },
      "output_settings": { "layout": { "type": "2x2_grid", "border": "thin_white_gutter", "frame_consistency_rule": "same_person_same_outfit" }, "aspect_ratio": "4:5", "resolution": "ultra_high_res", "render_style": "flash_pop_color" },
      "reference_constraints": { "character_reference_image": "{"character reference image" "UPLOAD_REF_IMAGE"}", "use_reference_face_only": true, "identity_lock": true, "strict_face_match": true },
      "global_prompt": {
        "scene": "American Diner, retro 50s style. Red leather booths, checkerboard floor, neon sign outside window.",
        "subject": {
          "type": "influencer",
          "identity": "same person as reference image",
          "hair": "high pigtails with ribbons",
          "makeup": "winged liner, freckles",
          "outfit": "cropped ringer tee, denim shorts, knee high socks, converse",
          "prop": "strawberry milkshake with two straws and cherry"
        },
        "camera": { "capture": "retro flash", "lens_equivalent": "35mm", "focus": "subject", "depth_of_field": "sharp" }
      },
      "frames": [
        { "frame_id": "A", "position": "top_left", "shot_type": "sipping_milkshake", "pose": "Sipping milkshake aggressively, looking up at camera under lashes.", "expression": "playful, innocent" },
        { "frame_id": "B", "position": "top_right", "shot_type": "cherry_bite", "pose": "Holding the cherry by the stem near mouth.", "expression": "seductive, fun" },
        { "frame_id": "C", "position": "bottom_left", "shot_type": "booth_knees", "pose": "Kneeling on the booth seat, looking out the window.", "expression": "bored, waiting" },
        { "frame_id": "D", "position": "bottom_right", "shot_type": "messy_face", "pose": "Swipe of whipped cream on nose, laughing.", "expression": "goofy" }
      ]
    }
  }

## 中文译文（源站提供）
```json
{
    "generation_request": {
      "meta_data": { "tool": "NanoBananaPro", "task_type": "photorealistic_multi_panel_grid", "version": "v1.0" },
      "output_settings": { "layout": { "type": "2x2_grid", "border": "thin_white_gutter", "frame_consistency_rule": "same_person_same_outfit" }, "aspect_ratio": "4:5", "resolution": "ultra_high_res", "render_style": "flash_pop_color" },
      "reference_constraints": { "character_reference_image": "{\"character reference image\" \"UPLOAD_REF_IMAGE\"}", "use_reference_face_only": true, "identity_lock": true, "strict_face_match": true },
      "global_prompt": {
        "scene": "美式餐厅，复古 50 年代风格。红色皮革卡座，棋盘格地板，窗外霓虹灯招牌。",
        "subject": {
          "type": "网红",
          "identity": "与参考图片中的人物相同",
          "hair": "高扎双马尾，系有丝带",
          "makeup": "飞扬眼线，雀斑",
          "outfit": "露脐撞色 T 恤，牛仔短裤，及膝袜，匡威鞋",
          "prop": "草莓奶昔，带两根吸管和一颗樱桃"
        },
        "camera": { "capture": "复古闪光灯", "lens_equivalent": "35mm", "focus": "主体", "depth_of_field": "锐利" }
      },
      "frames": [
        { "frame_id": "A", "position": "top_left", "shot_type": "sipping_milkshake", "pose": "用力吸奶昔，睫毛下方向上看向镜头。", "expression": "俏皮，天真" },
        { "frame_id": "B", "position": "top_right", "shot_type": "cherry_bite", "pose": "手持樱桃梗靠近嘴边。", "expression": "诱惑，有趣" },
        { "frame_id": "C", "position": "bottom_left", "shot_type": "booth_knees", "pose": "跪在卡座上，看向窗外。", "expression": "无聊，等待" },
        { "frame_id": "D", "position": "bottom_right", "shot_type": "messy_face", "pose": "鼻子上沾着奶油，大笑。", "expression": "滑稽" }
      ]
    }
  }
```

## 来源备注
- 源站作者：Ditherly - Creative AI Hub
- 源站 UUID：eqw65zZdv8
- 源站分类：05_人物肖像与写实摄影

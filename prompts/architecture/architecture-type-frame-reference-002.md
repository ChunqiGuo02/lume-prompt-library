---
id: "architecture-type-frame-reference-002"
title: "暗黑学院风图书馆写真"
category: architecture
subcategory: "09_故事分镜角色设定"
aesthetic: null
tags: ["图书馆", "书籍", "复古", "学院风", "暖色调", "氛围感", "人像", "摄影"]
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
      "output_settings": { "layout": { "type": "2x2_grid", "border": "thin_white_gutter", "frame_consistency_rule": "same_person_same_outfit" }, "aspect_ratio": "4:5", "resolution": "ultra_high_res", "render_style": "dark_academia_moody" },
      "reference_constraints": { "character_reference_image": "UPLOAD_REF_IMAGE", "use_reference_face_only": true, "identity_lock": true, "strict_face_match": true },
      "global_prompt": {
        "scene": "Old University Library. towering rows of books, rolling ladder, dust motes in light beams, mahogany tables.",
        "subject": {
          "type": "influencer",
          "identity": "same person as reference image",
          "hair": "half-up half-down with ribbon",
          "makeup": "minimal, flushed cheeks",
          "outfit": "plaid blazer, turtleneck, mini skirt, loafers with socks",
          "prop": "vintage hardcover book"
        },
        "camera": { "capture": "cinematic", "lens_equivalent": "50mm", "focus": "subject", "depth_of_field": "shallow" }
      },
      "frames": [
        { "frame_id": "A", "position": "top_left", "shot_type": "on_ladder", "pose": "Standing on the rolling ladder reaching for a high book.", "expression": "curious, stretching" },
        { "frame_id": "B", "position": "top_right", "shot_type": "reading_floor", "pose": "Sitting on the floor between stacks, book open on lap.", "expression": "engrossed" },
        { "frame_id": "C", "position": "bottom_left", "shot_type": "peeking_through", "pose": "Peeking through a gap in the books on the shelf.", "expression": "playful eye contact" },
        { "frame_id": "D", "position": "bottom_right", "shot_type": "writing_notes", "pose": "Sitting at table, chewing on pen, notebook open.", "expression": "thinking" }
      ]
    }
  }

## 中文译文（源站提供）
"type": "网红",
          "identity": "与参考图片中的人物相同",
          "hair": "半扎发，系有丝带",
          "makeup": "淡妆，脸颊泛红",
          "outfit": "格子西装外套，高领毛衣，迷你裙，乐福鞋配袜子",
          "prop": "复古精装书"
        },
        "camera": { "capture": "电影感", "lens_equivalent": "50mm", "focus": "主体", "depth_of_field": "浅景深" }
      },
      "frames": [
        { "frame_id": "A", "position": "top_left", "shot_type": "on_ladder", "pose": "站在可移动的梯子上，伸手去拿高处的书。", "expression": "好奇，伸展身体" },
        { "frame_id": "B", "position": "top_right", "shot_type": "reading_floor", "pose": "坐在书堆间的地板上，书摊开在腿上。", "expression": "全神贯注" },
        { "frame_id": "C", "position": "bottom_left", "shot_type": "peeking_through", "pose": "从书架书本的缝隙中偷看。", "expression": "俏皮的眼神交流" },
        { "frame_id": "D", "position": "bottom_right", "shot_type": "writing_notes", "pose": "坐在桌旁，咬着笔，笔记本摊开。", "expression": "思考中" }
      ]
    }
  }
```

## 来源备注
- 源站作者：Ditherly - Creative AI Hub
- 源站 UUID：O4ILQIqOpo
- 源站分类：09_故事分镜角色设定

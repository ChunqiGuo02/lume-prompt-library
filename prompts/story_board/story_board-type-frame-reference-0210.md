---
id: story_board-type-frame-reference-0210
title: "柠檬裙少女阿马尔菲海岸写真"
category: story_board
subcategory: "09_故事分镜角色设定"
aesthetic: null
tags: ["度假", "复古", "柠檬", "海边", "暖色", "休闲", "旅拍", "冰淇淋"]
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
    "generation_request": {
      "meta_data": { "tool": "NanoBananaPro", "task_type": "photorealistic_multi_panel_grid", "version": "v1.0" },
      "output_settings": { "layout": { "type": "2x2_grid", "border": "thin_white_gutter", "frame_consistency_rule": "same_person_same_outfit" }, "aspect_ratio": "4:5", "resolution": "ultra_high_res", "render_style": "warm_golden_hour_vintage" },
      "reference_constraints": { "character_reference_image": "UPLOAD_REF_IMAGE", "use_reference_face_only": true, "identity_lock": true, "strict_face_match": true },
      "global_prompt": {
        "scene": "Private terrace in Positano, Amalfi Coast. steep cliffs with colorful houses in background. Sparkly mediterranean sea. Bougainvillea flowers.",
        "subject": {
          "type": "influencer",
          "identity": "same person as reference image",
          "hair": "silk scarf tied around head, big retro sunglasses",
          "makeup": "bronzed goddess, peach lips",
          "outfit": "lemon print sundress, gold jewelry, white sandals",
          "prop": "gelato cone or limoncello spritz"
        },
        "camera": { "capture": "editorial travel", "lens_equivalent": "50mm", "focus": "subject", "depth_of_field": "soft background" }
      },
      "frames": [
        { "frame_id": "A", "position": "top_left", "shot_type": "leaning_balcony", "pose": "Leaning on the terracotta railing, laughing with head thrown back.", "expression": "joyful, candid" },
        { "frame_id": "B", "position": "top_right", "shot_type": "detail_gelato", "pose": "Holding the gelato up to the camera/eye, tongue slightly out playfully.", "expression": "flirty, cute" },
        { "frame_id": "C", "position": "bottom_left", "shot_type": "sitting_chair", "pose": "Sitting cross-legged on a wrought iron chair, adjusting sandal strap.", "expression": "relaxed, candid" },
        { "frame_id": "D", "position": "bottom_right", "shot_type": "back_view", "pose": "Walking away towards the view, hand holding hat/scarf.", "expression": "n/a" }
      ]
    }
  }

## 中文译文（源站提供）
"scene": "阿马尔菲海岸波西塔诺的私人露台。背景是陡峭的悬崖和色彩斑斓的房屋。波光粼粼的地中海。九重葛花。",
      "subject": {
        "type": "influencer",
        "identity": "与参考图像中的人物相同",
        "hair": "头戴丝巾，戴大复古墨镜",
        "makeup": "古铜色女神妆，蜜桃色唇妆",
        "outfit": "柠檬印花连衣裙，金色首饰，白色凉鞋",
        "prop": "意式冰淇淋筒或柠檬酒气泡饮"
      },
      "camera": { "capture": "编辑旅行摄影", "lens_equivalent": "50mm", "focus": "主体", "depth_of_field": "柔和背景" }
    },
    "frames": [
      { "frame_id": "A", "position": "top_left", "shot_type": "leaning_balcony", "pose": "靠在陶土栏杆上，仰头大笑。", "expression": "快乐，自然" },
      { "frame_id": "B", "position": "top_right", "shot_type": "detail_gelato", "pose": "将意式冰淇淋举向镜头/眼睛，舌头俏皮地微伸。", "expression": "妩媚，可爱" },
      { "frame_id": "C", "position": "bottom_left", "shot_type": "sitting_chair", "pose": "盘腿坐在铸铁椅子上，调整凉鞋带。", "expression": "放松，自然" },
      { "frame_id": "D", "position": "bottom_right", "shot_type": "back_view", "pose": "背对镜头走向风景，手扶帽子/围巾。", "expression": "不适用" }
    ]
  }
}
```

## 来源备注
- 源站作者：Ditherly - Creative AI Hub
- 源站 UUID：lWvDn3aq7A
- 源站分类：09_故事分镜角色设定

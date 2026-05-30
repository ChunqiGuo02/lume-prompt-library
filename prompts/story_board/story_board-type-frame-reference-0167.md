---
id: story_board-type-frame-reference-0167
title: "巴黎咖啡馆生活写真"
category: story_board
subcategory: "09_故事分镜角色设定"
aesthetic: null
tags: ["法式", "咖啡馆", "巴黎", "街拍", "牛角包", "咖啡", "白衬衫", "牛仔裤"]
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
      "output_settings": { "layout": { "type": "2x2_grid", "border": "thin_white_gutter", "frame_consistency_rule": "same_person_same_outfit" }, "aspect_ratio": "4:5", "resolution": "ultra_high_res", "render_style": "vintage_film_grain_soft" },
      "reference_constraints": { "character_reference_image": "UPLOAD_REF_IMAGE", "use_reference_face_only": true, "identity_lock": true, "strict_face_match": true },
      "global_prompt": {
        "scene": "Parisian Cafe Terrace. Round marble table, woven chairs. Street view with Haussmann buildings. Morning light.",
        "subject": {
          "type": "influencer",
          "identity": "same person as reference image",
          "hair": "messy bun with curtain bangs",
          "makeup": "french girl red lip, minimal eye",
          "outfit": "oversized white button down shirt, blue jeans, ballet flats",
          "prop": "croissant and cappuccino"
        },
        "camera": { "capture": "lifestyle blog", "lens_equivalent": "50mm", "focus": "subject", "depth_of_field": "blurred street" }
      },
      "frames": [
        { "frame_id": "A", "position": "top_left", "shot_type": "dipping_croissant", "pose": "Dipping croissant into cappuccino foam.", "expression": "anticipation, cute" },
        { "frame_id": "B", "position": "top_right", "shot_type": "laughing_offcamera", "pose": "Laughing at someone across the table, hand covering mouth slightly.", "expression": "genuine joy" },
        { "frame_id": "C", "position": "bottom_left", "shot_type": "flatlay_pov", "pose": "POV shot of hands holding the cup on the table.", "expression": "n/a" },
        { "frame_id": "D", "position": "bottom_right", "shot_type": "people_watching", "pose": "Legs crossed, looking out at the street people watching.", "expression": "observant, chic" }
      ]
    }

## 中文译文（源站提供）
"scene": "巴黎咖啡馆露台。圆形大理石桌，编织椅。街景，可见奥斯曼建筑。清晨光线。",
        "subject": {
          "type": "网红",
          "identity": "与参考图片中的人物相同",
          "hair": "凌乱发髻，带法式刘海",
          "makeup": "法式红唇，淡雅眼妆",
          "outfit": "oversized 白色纽扣衬衫，蓝色牛仔裤，芭蕾平底鞋",
          "prop": "羊角面包和卡布奇诺"
        },
        "camera": { "capture": "生活方式博客", "lens_equivalent": "50mm", "focus": "主体", "depth_of_field": "模糊的街道" }
      },
      "frames": [
        { "frame_id": "A", "position": "top_left", "shot_type": "dipping_croissant", "pose": "将羊角面包蘸入卡布奇诺奶泡中。", "expression": "期待，可爱" },
        { "frame_id": "B", "position": "top_right", "shot_type": "laughing_offcamera", "pose": "对着桌对面的人笑，手微微遮住嘴巴。", "expression": "真诚的喜悦" },
        { "frame_id": "C", "position": "bottom_left", "shot_type": "flatlay_pov", "pose": "手握杯子放在桌上的第一人称视角。", "expression": "不适用" },
        { "frame_id": "D", "position": "bottom_right", "shot_type": "people_watching", "pose": "双腿交叉，向外看街上的人群。", "expression": "专注，时尚" }
      ]
    }
}
```

## 来源备注
- 源站作者：Ditherly - Creative AI Hub
- 源站 UUID：hCHZdiIy7n
- 源站分类：09_故事分镜角色设定

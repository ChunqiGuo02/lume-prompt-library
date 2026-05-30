---
id: story_board-the-type-same-0330
title: "雪山度假时尚写真四格拼图"
category: story_board
subcategory: "09_故事分镜角色设定"
aesthetic: null
tags: ["滑雪", "雪景", "白色", "雪山", "度假", "写真", "冬日", "户外"]
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
    "output_settings": {
      "layout": { "type": "2x2_grid", "border": "thin_white_gutter", "frame_consistency_rule": "same_person_same_outfit_same_resort" },
      "aspect_ratio": "4:5", "resolution": "ultra_high_res", "render_style": "bright_high_exposure_winter"
    },
    "reference_constraints": {
      "character_reference_image": "UPLOAD_REF_IMAGE", "use_reference_face_only": true, "identity_lock": true, "strict_face_match": true
    },
    "global_prompt": {
      "scene": "Wooden balcony of a luxury ski chalet. Snowy mountain peaks in the background. Bright blinding winter sun, blue sky. High-end atmosphere.",
      "subject": {
        "type": "influencer",
        "identity": "same person as reference image",
        "hair": "blown out straight hair with a thick white faux-fur headband",
        "makeup": "sunscreen glow, glossy lips, rosy cheeks from cold",
        "outfit": "fitted white thermal bodysuit, huge white moon boots, oversized mirrored ski goggles (around neck or on head)",
        "prop": "glass of champagne or hot chocolate"
      },
      "camera": { "capture": "portrait mode natural light", "lens_equivalent": "35mm", "focus": "subject", "depth_of_field": "background mountains blurred" }
    },
    "frames": [
      { "frame_id": "A", "position": "top_left", "shot_type": "leaning_railing", "pose": "Leaning back against the wooden railing, holding the drink, looking at the view with a smile.", "expression": "happy, rich vibe" },
      { "frame_id": "B", "position": "top_right", "shot_type": "close_up_goggles", "pose": "Adjusting the ski goggles on top of head. Hand blocking the bright sun from eyes.", "expression": "squinting playfully" },
      { "frame_id": "C", "position": "bottom_left", "shot_type": "sitting_on_snow", "pose": "Sitting on a patch of snow on the deck/bench, legs extended showing off the moon boots.", "expression": "cool, relaxed" },
      { "frame_id": "D", "position": "bottom_right", "shot_type": "looking_back", "pose": "Turned away from camera, looking at the mountains, hair blowing slightly.", "expression": "n/a" }
    ]
  }
}

## 中文译文（源站提供）
```json
{
  "generation_request": {
    "meta_data": { "tool": "NanoBananaPro", "task_type": "photorealistic_multi_panel_grid", "version": "v1.0" },
    "output_settings": {
      "layout": { "type": "2x2_grid", "border": "thin_white_gutter", "frame_consistency_rule": "same_person_same_outfit_same_resort" },
      "aspect_ratio": "4:5", "resolution": "ultra_high_res", "render_style": "bright_high_exposure_winter"
    },
    "reference_constraints": {
      "character_reference_image": "UPLOAD_REF_IMAGE", "use_reference_face_only": true, "identity_lock": true, "strict_face_match": true
    },
    "global_prompt": {
      "scene": "豪华滑雪小屋的木制阳台。背景是白雪皑皑的山峰。明亮刺眼的冬日阳光，蓝天。高端氛围。",
      "subject": {
        "type": "influencer",
        "identity": "与参考图片中的人物相同",
        "hair": "蓬松的直发，戴着厚厚的白色人造毛发带",
        "makeup": "防晒霜带来的光泽，亮泽的嘴唇，因寒冷而泛红的脸颊",
        "outfit": "修身白色保暖紧身衣，巨大白色雪地靴，超大反光滑雪镜（挂在脖子上或戴在头上）",
        "prop": "一杯香槟或热巧克力"
      },
      "camera": { "capture": "人像模式自然光", "lens_equivalent": "35mm", "focus": "主体", "depth_of_field": "背景山脉模糊" }
    },
    "frames": [
      { "frame_id": "A", "position": "top_left", "shot_type": "leaning_railing", "pose": "靠在木制栏杆上，手持饮料，微笑着欣赏风景。", "expression": "开心，富裕感" },
      { "frame_id": "B", "position": "top_right", "shot_type": "close_up_goggles", "pose": "调整头顶的滑雪镜。手挡住刺眼的阳光。", "expression": "俏皮地眯眼" },
      { "frame_id": "C", "position": "bottom_left", "shot_type": "sitting_on_snow", "pose": "坐在甲板/长凳上的一小块雪上，双腿伸直展示雪地靴。", "expression": "酷，放松" },
      { "frame_id": "D", "position": "bottom_right", "shot_type": "looking_back", "pose": "背对镜头，望着群山，头发微风吹拂。", "expression": "不适用" }
    ]
  }
}
```

## 来源备注
- 源站作者：Ditherly - Creative AI Hub
- 源站 UUID：gEj8EnkWvX
- 源站分类：09_故事分镜角色设定

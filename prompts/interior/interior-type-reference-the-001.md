---
id: "interior-type-reference-the-001"
title: "餐厅夜拍四格情绪写真"
category: interior
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["胶片", "抓拍", "餐厅", "约会", "黑色", "金发", "意面", "红酒"]
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
      "layout": { "type": "2x2_grid", "border": "thin_black_gutter", "frame_consistency_rule": "same_person_same_outfit_same_restaurant" },
      "aspect_ratio": "4:5", "resolution": "ultra_high_res", "render_style": "direct_flash_high_contrast_grainy"
    },
    "reference_constraints": {
      "character_reference_image": "{"character reference image" "UPLOAD_REF_IMAGE"}", "use_reference_face_only": true, "identity_lock": true, "strict_face_match": true
    },
    "global_prompt": {
      "scene": "Dimly lit Italian trattoria at night. White tablecloths. Wine glasses. Plate of pasta. Background is dark and blurry.",
      "subject": {
        "type": "influencer",
        "identity": "same person as reference image",
        "hair": "updo with claw clip, messy face-framing pieces",
        "makeup": "glowy skin, brushed up brows, bitten lip look",
        "outfit": "black off-the-shoulder top (tight), gold hoop earrings, layered necklaces",
        "prop": "fork with pasta or glass of red wine"
      },
      "camera": { "capture": "hard flash", "lens_equivalent": "28mm", "focus": "subject", "depth_of_field": "sharp foreground" }
    },
    "frames": [
      { "frame_id": "A", "position": "top_left", "shot_type": "twirling_pasta", "pose": "Looking down at the pasta, twirling a massive amount on a fork. Flash reflecting off the sauce.", "expression": "focused, hungry" },
      { "frame_id": "B", "position": "top_right", "shot_type": "wine_laugh", "pose": "Holding wine glass by the stem, head thrown back laughing at someone across the table. Hand covering mouth slightly.", "expression": "candid joy" },
      { "frame_id": "C", "position": "bottom_left", "shot_type": "flash_blinded", "pose": "Holding hand up to block the flash, eyes squinting, looking directly at lens.", "expression": "playful annoyance" },
      { "frame_id": "D", "position": "bottom_right", "shot_type": "messy_table", "pose": "Leaning elbows on the table, chin in hands, looking seductive/tired. Table is messy with empty plates.", "expression": "sultry" }
    ]
  }
}

## 中文译文（源站提供）
```json
{
  "generation_request": {
    "meta_data": { "tool": "NanoBananaPro", "task_type": "photorealistic_multi_panel_grid", "version": "v1.0" },
    "output_settings": {
      "layout": { "type": "2x2_grid", "border": "thin_black_gutter", "frame_consistency_rule": "same_person_same_outfit_same_restaurant" },
      "aspect_ratio": "4:5", "resolution": "ultra_high_res", "render_style": "direct_flash_high_contrast_grainy"
    },
    "reference_constraints": {
      "character_reference_image": "{\"character reference image\" \"UPLOAD_REF_IMAGE\"}", "use_reference_face_only": true, "identity_lock": true, "strict_face_match": true
    },
    "global_prompt": {
      "scene": "夜晚灯光昏暗的意大利餐馆。白色桌布。葡萄酒杯。一盘意大利面。背景模糊且昏暗。",
      "subject": {
        "type": "influencer",
        "identity": "与参考图片中的人物相同",
        "hair": "盘发，带鲨鱼夹，脸颊两侧有凌乱的碎发",
        "makeup": "光泽肌肤，眉毛向上梳理，咬唇妆",
        "outfit": "黑色露肩上衣（紧身），金色大耳环，叠戴项链",
        "prop": "叉子卷着意大利面或一杯红酒"
      },
      "camera": { "capture": "硬闪光灯", "lens_equivalent": "28mm", "focus": "主体", "depth_of_field": "前景清晰" }
    },
    "frames": [
      { "frame_id": "A", "position": "top_left", "shot_type": "twirling_pasta", "pose": "低头看意大利面，用叉子卷起大量面条。闪光灯反射在酱汁上。", "expression": "专注，饥饿" },
      { "frame_id": "B", "position": "top_right", "shot_type": "wine_laugh", "pose": "手持酒杯，头向后仰，对着桌对面的人大笑。手稍微遮住嘴巴。", "expression": "率真的喜悦" },
      { "frame_id": "C", "position": "bottom_left", "shot_type": "flash_blinded", "pose": "抬手挡住闪光灯，眼睛眯着，直视镜头。", "expression": "调皮的恼怒" },
      { "frame_id": "D", "position": "bottom_right", "shot_type": "messy_table", "pose": "手托下巴，胳膊肘撑在桌上，看起来诱人/疲惫。桌上凌乱地摆放着空盘子。", "expression": "性感迷人" }
    ]
  }
}
```

## 来源备注
- 源站作者：Ditherly - Creative AI Hub
- 源站 UUID：VN19tz7KHS
- 源站分类：05_人物肖像与写实摄影

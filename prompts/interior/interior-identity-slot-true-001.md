---
id: "interior-identity-slot-true-001"
title: "派对双面写真：优雅与随性"
category: interior
subcategory: "09_故事分镜角色设定"
aesthetic: null
tags: ["摄影", "人像", "派对", "马天尼", "披萨", "黑色", "白色", "毛绒"]
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
  "request_metadata": {
    "tool": "NanoBananaPro",
    "task_type": "ultra_photoreal_editorial_duo_panel",
    "quality_preset": "ultra",
    "aspect_ratio": "4:5"
  },
  "references": {
    "character_reference_image": {
      "slot": 1,
      "purpose": "MAIN_SUBJECT_IDENTITY_LOCK",
      "strict_identity_lock": true
    },
    "style_reference_A": {
      "slot": 2,
      "purpose": "WARDROBE_LIGHTING_POSE_VIBE_REF_BLACK_FUR_MARTINI"
    },
    "style_reference_B": {
      "slot": 3,
      "purpose": "WARDROBE_LIGHTING_POSE_VIBE_REF_WHITE_FEATHER_PIZZA"
    },
    "reference_rules": {
      "preserve_uploaded_character_identity": true,
      "identity_lock_strength": 0.995,
      "face_similarity_priority": "MAX",
      "preserve_facial_proportions": true,
      "no_beautify_no_face_morph": true,
      "keep_age_and_gender_consistent": true,
      "do_not_copy_any_unprovided_identity": true
    }
  },
  "output_settings": {
    "layout": {
      "type": "2x1_grid_vertical",
      "border": "thin_white_gutter",
      "frame_consistency_rule": "same_woman_identity_both_panels"
    },
    "resolution": "ultra_high_res",
    "render_style": "photorealistic_flash_editorial_party",
    "sharpness": "high",
    "film_grain": "subtle_35mm",
    "color": "clean_flash_pop"
  },
  "hard_constraints": [
    "EXACTLY 1 subject per panel (same woman in both panels), no extra people",
    "No text, no logos, no watermark",
    "Realistic skin texture (no plastic smoothing), natural pores",
    "Correct hands/fingers, no warping",
    "Keep identity 100% matched to slot 1 in BOTH panels"
  ],
  "prompt": {
    "scene_summary": "Create a two-panel vertical collage (2x1). Same woman (identity locked to slot 1) in both panels. High-end party editorial look with on-camera flash, realistic candid vibe. Use style refs: Panel 1 matches the black fur + martini mood; Panel 2 matches the white feather + pizza mood. No extra people, no text.",
    "global_environment": {
      "location": "indoors, upscale apartment party corner at night",
      "background": "minimal clean wall + subtle window frame in soft focus, no readable text anywhere",
      "lighting": "strong direct on-camera flash with soft ambient fill, realistic shadows, glossy highlights"
    },
    "camera": {
      "type": "flash photography / party snapshot",
      "lens_look": "35mm equivalent",
      "focus": "tack-sharp face, slightly softer background",
      "exposure": "bright flash, crisp contrast"
    },
    "panel_plan": [
      {
        "panel": 1,
        "style_reference": "slot_2",
        "framing": "portrait close-up (head to upper torso), centered",
        "wardrobe": "black fluffy faux-fur coat, deep V neckline, elegant diamond necklace + earrings, manicured nails",
        "prop_action": "holding a martini glass near face, confident editorial stare",
        "expression": "cool, slightly bored/sultry, relaxed eyelids",
        "hair"

## 中文译文（源站提供）
```json
{
  "request_metadata": {
    "tool": "NanoBananaPro",
    "task_type": "ultra_photoreal_editorial_duo_panel",
    "quality_preset": "ultra",
    "aspect_ratio": "4:5"
  },
  "references": {
    "character_reference_image": {
      "slot": 1,
      "purpose": "MAIN_SUBJECT_IDENTITY_LOCK",
      "strict_identity_lock": true
    },
    "style_reference_A": {
      "slot": 2,
      "purpose": "WARDROBE_LIGHTING_POSE_VIBE_REF_BLACK_FUR_MARTINI"
    },
    "style_reference_B": {
      "slot": 3,
      "purpose": "WARDROBE_LIGHTING_POSE_VIBE_REF_WHITE_FEATHER_PIZZA"
    },
    "reference_rules": {
      "preserve_uploaded_character_identity": true,
      "identity_lock_strength": 0.995,
      "face_similarity_priority": "MAX",
      "preserve_facial_proportions": true,
      "no_beautify_no_face_morph": true,
      "keep_age_and_gender_consistent": true,
      "do_not_copy_any_unprovided_identity": true
    }
  },
  "output_settings": {
    "layout": {
      "type": "2x1_grid_vertical",
      "border": "thin_white_gutter",
      "frame_consistency_rule": "same_woman_identity_both_panels"
    },
    "resolution": "ultra_high_res",
    "render_style": "photorealistic_flash_editorial_party",
    "sharpness": "high",
    "film_grain": "subtle_35mm",
    "color": "clean_flash_pop"
  },
  "hard_constraints": [
    "每个面板中只有 1 个主体（两个面板中是同一位女性），没有额外的人物",
    "无文字、无标志、无水印",
    "逼真的皮肤纹理（无塑料感平滑），自然的毛孔",
    "正确的手/手指，无扭曲",
    "两个面板中人物身份与插槽 1 100% 匹配"
  ],
  "prompt": {
    "scene_summary": "创建一个两格垂直拼贴画（2x1）。两个面板中是同一位女性（身份锁定为插槽 1）。高端派对编辑风格，带机内闪光灯，逼真的抓拍感。使用风格参考：面板 1 匹配黑色皮草 + 马提尼酒的氛围；面板 2 匹配白色羽毛 + 披萨的氛围。无额外人物，无文字。",
    "global_environment": {
      "location": "室内，夜晚高档公寓派对角落",
      "background": "极简干净的墙壁 + 柔焦中隐约可见的窗框，无任何可读文字",
      "lighting": "强烈的直射机内闪光灯，带柔和的环境补光，逼真的阴影，光泽高光"
    },
    "camera": {
      "type": "闪光摄影 / 派对快照",
      "lens_look": "35mm 等效焦距",
      "focus": "面部锐利，背景略微柔和",
      "exposure": "明亮闪光，清晰对比度"
    },
    "panel_plan": [
      {
        "panel": 1,
        "style_reference": "slot_2",
        "framing": "肖像特写（头部到上半身），居中",
        "wardrobe": "黑色蓬松人造皮草外套，深 V 领，优雅的钻石项链 + 耳环，修剪整齐的指甲",
        "prop_action": "手持马提尼酒杯靠近脸部，自信的时尚凝视",
        "expression": "酷酷的，略带无聊/性感的，放松的眼睑",
        "hair"
      }
    ]
  }
}
```

## 来源备注
- 源站作者：Özge Döner
- 源站 UUID：0GYzxKb0m9
- 源站分类：09_故事分镜角色设定

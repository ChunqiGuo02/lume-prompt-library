---
id: portrait-true-reference-match-0693
title: "复古风女性写真四格拼图"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["复古", "浪漫", "优雅", "女性", "蝴蝶结", "珍珠", "碎花", "连衣裙"]
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
  "image_prompt": {
    "reference": {
      "face_identity": "uploaded reference image",
      "identity_lock": true,
      "pose_lock": true,
      "camera_angle_lock": true,
      "expression_lock": true,
      "face_preservation": "100% identical facial structure, proportions, eyes, lips, nose, brows, skin texture"
    },

    "composition": {
      "layout": "2x2 collage",
      "aspect_ratio": "1:1",
      "pose_matching": "exactly match reference image poses, angles, framing, and body orientation",
      "no_variation_allowed": true
    },

    "panel_1": {
      "view": "front-facing portrait",
      "pose": "head slightly tilted, eyes toward camera, soft lips",
      "framing": "chest-up selfie angle",
      "expression": "calm, elegant",
      "match_reference": true
    },

    "panel_2": {
      "view": "back view",
      "pose": "standing facing mirror, arms raised slightly",
      "focus": "back of head and bow hairstyle",
      "framing": "upper-body rear shot",
      "match_reference": true
    },

    "panel_3": {
      "view": "mirror selfie",
      "pose": "phone covering part of face, body angled sideways",
      "framing": "waist-up",
      "match_reference": true
    },

    "panel_4": {
      "view": "side portrait",
      "pose": "head turned over shoulder looking into camera, holding bouquet close to chest",
      "expression": "soft romantic gaze",
      "framing": "upper torso",
      "match_reference": true
    },

    "subject": {
      "gender": "female",
      "ethnicity": "Asian",
      "skin_tone": "fair with soft blush"
    },

    "hair": {
      "style": "long straight hair, half-up",
      "accessory": "large cream ribbon bow",
      "placement": "exact position as reference image"
    },

    "outfit": {
      "dress": {
        "color": "white",
        "pattern": "blue floral print",
        "style": "vintage puff-sleeve dress",
        "neckline": "square neckline"
      },
      "jewelry": [
        "pearl necklace",
        "delicate gold pendant"
      ]
    },

    "environment": {
      "location": "vintage-style indoor room",
      "background": [
        "ornate mirror",
        "cream walls",
        "soft floral decor",
        "classic furniture"
      ],
      "match_reference_background": true
    },

    "lighting": {
      "type": "soft indoor daylight",
      "quality": "even, gentle, warm",
      "shadow": "minimal",
      "match_reference": true
    },

    "photography_style": {
      "style": "romantic vintage lifestyle",
      "lens": "DSLR portrait lens",
      "depth_of_field": "shallow",
      "color_grading": "soft pastel"
    },

    "render_quality": {
      "realism": "photorealistic",
      "resolution": "high",
      "texture_detail": "natural skin and fabric detail",
      "no_cartoon": true
    }
  }
}

## 中文译文（源站提供）
```json
{
  "image_prompt": {
    "reference": {
      "face_identity": "上传的参考图片",
      "identity_lock": true,
      "pose_lock": true,
      "camera_angle_lock": true,
      "expression_lock": true,
      "face_preservation": "100% 相同的面部结构、比例、眼睛、嘴唇、鼻子、眉毛、皮肤纹理"
    },
    "composition": {
      "layout": "2x2 拼贴",
      "aspect_ratio": "1:1",
      "pose_matching": "精确匹配参考图片的姿势、角度、构图和身体朝向",
      "no_variation_allowed": true
    },
    "panel_1": {
      "view": "正面肖像",
      "pose": "头部略微倾斜，眼睛看向镜头，嘴唇柔和",
      "framing": "胸部以上自拍角度",
      "expression": "平静、优雅",
      "match_reference": true
    },
    "panel_2": {
      "view": "背面视角",
      "pose": "站立面向镜子，手臂略微抬起",
      "focus": "后脑勺和蝴蝶结发型",
      "framing": "上半身背部特写",
      "match_reference": true
    },
    "panel_3": {
      "view": "镜子自拍",
      "pose": "手机遮住部分脸部，身体侧向一边",
      "framing": "腰部以上",
      "match_reference": true
    },
    "panel_4": {
      "view": "侧面肖像",
      "pose": "头转向肩膀看向镜头，胸前抱着花束",
      "expression": "柔和浪漫的凝视",
      "framing": "上半身躯干",
      "match_reference": true
    },
    "subject": {
      "gender": "女性",
      "ethnicity": "亚洲人",
      "skin_tone": "白皙带柔和腮红"
    },
    "hair": {
      "style": "长直发，半扎",
      "accessory": "大号米色丝带蝴蝶结",
      "placement": "与参考图片位置完全一致"
    },
    "outfit": {
      "dress": {
        "color": "白色",
        "pattern": "蓝色花卉图案",
        "style": "复古泡泡袖连衣裙",
        "neckline": "方领"
      },
      "jewelry": [
        "珍珠项链",
        "精致金色吊坠"
      ]
    },
    "environment": {
      "location": "复古风格室内房间",
      "background": [
        "华丽镜子",
        "米色墙壁",
        "柔和花卉装饰",
        "经典家具"
      ],
      "match_reference_background": true
    },
    "lighting": {
      "type": "柔和室内日光",
      "quality": "均匀、温和、温暖",
      "shadow": "极少",
      "match_reference": true
    },
    "photography_style": {
      "style": "浪漫复古生活方式",
      "lens": "单反人像镜头",
      "depth_of_field": "浅景深",
      "color_grading": "柔和粉彩"
    },
    "render_quality": {
      "realism": "照片级真实感",
      "resolution": "高",
      "texture_detail": "自然的皮肤和织物细节",
      "no_cartoon": true
    }
  }
}
```

## 来源备注
- 源站作者：Melis✨
- 源站 UUID：dgn5bKnoUy
- 源站分类：05_人物肖像与写实摄影

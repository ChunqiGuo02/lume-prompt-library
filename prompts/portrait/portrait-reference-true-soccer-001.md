---
id: "portrait-reference-true-soccer-001"
title: "土耳其女足写真照"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["足球", "户外", "女性", "运动", "写真", "晴天", "俏皮", "白色"]
recommended_models: 
  - banana-pro
recommended_params:
  aspect_ratio: "16:9"
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
    "model": "Nano Banana Pro",
    "content_type": "photoreal_sporty_outdoor_portrait",
    "quality_preset": "ultra",
    "format_aspect_ratio": "4:5",
    "output": "single_image"
  },
  "references": {
    "character_reference_image": "UPLOAD_YOUR_CHARACTER_IMAGE_HERE_IF_YOU_WANT_SAME_PERSON",
    "reference_rules": {
      "preserve_identity": true,
      "preserve_face_structure": true,
      "preserve_skin_tone": true,
      "preserve_hair_style_and_color": true,
      "do_not_change_age": true
    }
  },
  "scene_description": "A vibrant, sporty outdoor portrait of the referenced woman posing playfully with a soccer ball in front of a goal net on a sunny day. Confident, influencer-like attitude, crisp summer energy.",
  "subject": {
    "type": "female",
    "identity": "STRICTLY match the uploaded character reference image if provided; otherwise generate a beautiful black-haired woman",
    "hair": {
      "color": "black",
      "length": "as in reference (or long, glossy, slightly voluminous if no reference)",
      "style": "as in reference (or soft waves)"
    },
    "face": {
      "match_reference": true,
      "expression": "playful and sassy: winking one eye + pursed lips 'duck face' pout"
    },
    "makeup": {
      "eyes": "clean, modern white-and-red eye makeup (thin white highlight + red accent liner), symmetrical and sharp",
      "skin_finish": "natural with sunlit highlights (not overly airbrushed)"
    },
    "pose": {
      "body": "standing with hips slightly cocked, confident stance",
      "right_hand": "holding a minimalist soccer ball up near shoulder/head level",
      "gaze": "directly at camera"
    },
    "attire": {
      "kit": "{"soccer kit" "Turkey national team 2025-inspired home look"}",
      "top": "white jersey with a bold minimalist red chest band/stripe; subtle crescent-star emblem centered; minimal seams; clean collar",
      "bottom": "white or deep red athletic shorts (keep overall palette white/red)",
      "fit": "sporty, flattering, not overly tight, realistic fabric drape",
      "details": "show jersey knit texture and stitching; keep branding minimal if logos are restricted"
    }
  },
  "action": {
    "primary": "She winks at the camera while showing off the soccer ball",
    "secondary": "confident influencer vibe, playful attitude",
    "effect": "athletic lifestyle portrait with crisp realism"
  },
  "objects_and_props": {
    "main_object": {
      "soccer_ball": "minimalist white ball with red accents only (no busy patterns), matte-to-semi-gloss finish, realistic panel seams"
    },
    "secondary_objects": [
      "white goal post",
      "white goal netting framing the subject"
    ]
  },
  "environment": {
    "setting": "outdoor soccer practice cage or small field",
    "ground": "synthetic turf or short grass with visible texture",
    "background": "metal fencing + lush green trees under a bright blue sky",
    "composition"
  }
}

## 中文译文（源站提供）
```json
{
  "request_metadata": {
    "model": "Nano Banana Pro",
    "content_type": "photoreal_sporty_outdoor_portrait",
    "quality_preset": "ultra",
    "format_aspect_ratio": "4:5",
    "output": "single_image"
  },
  "references": {
    "character_reference_image": "UPLOAD_YOUR_CHARACTER_IMAGE_HERE_IF_YOU_WANT_SAME_PERSON",
    "reference_rules": {
      "preserve_identity": true,
      "preserve_face_structure": true,
      "preserve_skin_tone": true,
      "preserve_hair_style_and_color": true,
      "do_not_change_age": true
    }
  },
  "scene_description": "在一个阳光明媚的日子里，一位参考女性在球门网前，手持足球摆出俏皮姿势，拍摄一张充满活力、运动感十足的户外肖像。她展现出自信、网红般的态度，散发着清爽的夏日气息。",
  "subject": {
    "type": "female",
    "identity": "如果提供了角色参考图，则严格匹配图中的人物；否则生成一位美丽的黑发女性",
    "hair": {
      "color": "black",
      "length": "与参考图一致（如无参考图，则为长发、有光泽、略显蓬松）",
      "style": "与参考图一致（如无参考图，则为柔和波浪）"
    },
    "face": {
      "match_reference": true,
      "expression": "俏皮而时髦：单眼眨眼 + 噘嘴的“鸭子脸”"
    },
    "makeup": {
      "eyes": "干净、现代的白色和红色眼妆（细白色高光 + 红色点缀眼线），对称且锐利",
      "skin_finish": "自然，带有阳光下的高光（不过度修饰）"
    },
    "pose": {
      "body": "站立，臀部略微倾斜，自信的姿态",
      "right_hand": "将一个极简主义足球举至肩部/头部水平",
      "gaze": "直视镜头"
    },
    "attire": {
      "kit": "{\"soccer kit\" \"Turkey national team 2025-inspired home look\"}",
      "top": "白色球衣，带有醒目的极简红色胸带/条纹；中央有微妙的月牙星徽章；接缝极少；干净的衣领",
      "bottom": "白色或深红色运动短裤（整体色调保持白色/红色）",
      "fit": "运动型，修身，不过于紧绷，面料垂坠感真实",
      "details": "展示球衣的针织纹理和缝线；如果品牌标志受限，则尽量减少品牌标识"
    }
  },
  "action": {
    "primary": "她对着镜头眨眼，同时展示足球",
    "secondary": "自信的网红气质，俏皮的态度",
    "effect": "具有清晰真实感的运动生活方式肖像"
  },
  "objects_and_props": {
    "main_object": {
      "soccer_ball": "极简主义的白色足球，仅有红色点缀（无繁杂图案），哑光至半光泽表面，逼真的面板接缝"
    },
    "secondary_objects": [
      "白色球门柱",
      "白色球门网框住主体"
    ]
  },
  "environment": {
    "setting": "户外足球训练笼或小型球场",
    "ground": "人造草坪或短草，纹理清晰可见",
    "background": "金属围栏 + 郁郁葱葱的绿树，在湛蓝的天空下",
    "composition"
  }
}
```

## 来源备注
- 源站作者：Özge Döner
- 源站 UUID：QNPMv2ke85
- 源站分类：05_人物肖像与写实摄影

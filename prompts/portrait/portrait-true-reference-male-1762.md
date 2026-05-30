---
id: portrait-true-reference-male-1762
title: "电梯镜前蝙蝠侠猫女自拍"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["电梯", "蝙蝠侠", "猫女", "自拍", "写实", "黑色", "情侣", "金属"]
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
      "task_type": "photorealistic_single_image",
      "priority": "highest"
    },
    "references": {
      "male_character_reference_image": "UPLOAD_MALE_REFERENCE (REQUIRED)",
      "female_character_reference_image": "UPLOAD_FEMALE_REFERENCE (REQUIRED)",
      "reference_rules": {
        "preserve_uploaded_character_identities": true,
        "identity_lock_strength": 1.0,
        "strict_face_match": true,
        "no_identity_drift": true,
        "no_face_morphing": true,
        "no_beautification": true,
        "same_people_only": true,
        "no_extra_subjects": true
      }
    },
    "output_settings": {
      "aspect_ratio": "9:16",
      "orientation": "portrait",
      "resolution": "ultra_high_res",
      "render_style": "photorealistic_cinematic_elevator_mirror_selfie",
      "sharpness": "high",
      "film_grain": "subtle"
    },
    "hard_constraints": [
      "NO watermark or added text overlays.",
      "EXACTLY 2 subjects only: uploaded male + uploaded female.",
      "Faces must be 1:1 identical to references."
    ],
    "creative_prompt": {
      "scene_summary": "Photorealistic mirror selfie inside a modern metallic elevator. The man wears a black bat-cowl and a dark blazer over a black t-shirt with a yellow bat emblem on the chest. He holds a smartphone to take the mirror selfie. The woman wears a sleek cat-inspired mask and a fitted black outfit, posing in the foreground. Cool ceiling lights, realistic reflections, sharp faces. No extra text or watermarks.",
      "environment": {
        "location": "stainless-steel elevator",
        "lighting": "cool ceiling panels, cinematic contrast"
      },
      "camera": {
        "type": "mirror selfie",
        "angle": "vertical framing; phone visible",
        "lens_look": "smartphone wide selfie look (24-28mm equivalent)",
        "focus": "faces sharp"
      },
      "wardrobe_and_style": {
        "male": {
          "mask": "{"male mask" "matte black bat-cowl"}",
          "outfit": "dark pinstripe blazer, black t-shirt with yellow bat emblem"
        },
        "female": {
          "mask": "black cat mask with small studs",
          "outfit": "fitted black top and bottoms",
          "hair": "sleek ponytail"
        }
      },
      "quality_rules": [
        "accurate mirror physics",
        "accurate hands and phone geometry",
        "no face artifacts"
      ]
    },
    "negative_prompt": [
      "watermark",
      "extra people",
      "identity drift",
      "warped reflections",
      "bad hands",
      "blur"
    ]
  }
}

## 中文译文（源站提供）
```json
{
  "generation_request": {
    "meta_data": {
      "tool": "NanoBanana Pro",
      "task_type": "photorealistic_single_image",
      "priority": "highest"
    },
    "references": {
      "male_character_reference_image": "UPLOAD_MALE_REFERENCE (REQUIRED)",
      "female_character_reference_image": "UPLOAD_FEMALE_REFERENCE (REQUIRED)",
      "reference_rules": {
        "preserve_uploaded_character_identities": true,
        "identity_lock_strength": 1.0,
        "strict_face_match": true,
        "no_identity_drift": true,
        "no_face_morphing": true,
        "no_beautification": true,
        "same_people_only": true,
        "no_extra_subjects": true
      }
    },
    "output_settings": {
      "aspect_ratio": "9:16",
      "orientation": "portrait",
      "resolution": "ultra_high_res",
      "render_style": "photorealistic_cinematic_elevator_mirror_selfie",
      "sharpness": "high",
      "film_grain": "subtle"
    },
    "hard_constraints": [
      "无水印或额外文字叠加。",
      "仅限 2 个主体：已上传的男性 + 已上传的女性。",
      "面部必须与参考图 1:1 完全一致。"
    ],
    "creative_prompt": {
      "scene_summary": "在现代金属电梯内拍摄的逼真镜面自拍。男子戴着黑色蝙蝠头罩，身穿深色西装外套，内搭黑色 T 恤，胸前有黄色蝙蝠标志。他手持智能手机拍摄镜面自拍。女子戴着时尚的猫咪面具，身穿合身黑色服装，在前景摆姿势。酷炫的顶灯，逼真的反射，清晰的面部。无额外文字或水印。",
      "environment": {
        "location": "不锈钢电梯",
        "lighting": "冷色调顶灯板，电影级对比度"
      },
      "camera": {
        "type": "镜面自拍",
        "angle": "垂直构图；手机可见",
        "lens_look": "智能手机广角自拍效果（24-28mm 等效焦距）",
        "focus": "面部清晰"
      },
      "wardrobe_and_style": {
        "male": {
          "mask": "{\"male mask\" \"哑光黑蝙蝠头罩\"}",
          "outfit": "深色细条纹西装外套，黑色 T 恤配黄色蝙蝠标志"
        },
        "female": {
          "mask": "带小铆钉的黑色猫咪面具",
          "outfit": "合身黑色上衣和下装",
          "hair": "光滑马尾辫"
        }
      },
      "quality_rules": [
        "准确的镜面物理效果",
        "准确的手部和手机几何形状",
        "无面部瑕疵"
      ]
    },
    "negative_prompt": [
      "水印",
      "多余人物",
      "身份漂移",
      "扭曲的反射",
      "糟糕的手部",
      "模糊"
    ]
  }
}
```

## 来源备注
- 源站作者：Özge Döner
- 源站 UUID：FBGCymeFw5
- 源站分类：05_人物肖像与写实摄影

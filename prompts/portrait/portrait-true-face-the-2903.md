---
id: portrait-true-face-the-2903
title: "高街时尚男性肖像特写"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["男性", "时尚", "街拍", "冷调", "深色", "欧洲", "建筑", "虚化"]
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
  "type": "image_generation_prompt",
  "style": "high-impact fashion editorial, cinematic social snapshot",

  "identity_preservation": {
    "use_uploaded_image": true,
    "alter_face": false,
    "strict_identity_lock": true,
    "facial_structure_consistency_priority": true,
    "subject_face_embedding_preserved": true,
    "no_morphing": true,
    "no_face_blending": true,
    "notes": "Keep the man from the attached image as the main character. Preserve his facial features, proportions, and overall identity exactly as in the reference."
  },

  "subject": {
    "gender": "male",
    "role": "main character / fashion editorial model",
    "build": "athletic, broad shoulders, strong masculine frame",
    "expression": {
      "eyes": {
        "look": "sharp, piercing gaze directed at camera",
        "energy": "confident, cold, dominant"
      },
      "mouth": {
        "position": "relaxed lips, subtle controlled smirk",
        "energy": "chic, self-assured"
      },
      "overall": "high-impact, charismatic presence"
    },
    "face": {
      "preserve_original": true,
      "makeup": "none",
      "skin": "natural texture, no beauty filters",
      "style": "cool-toned masculine editorial"
    },
    "hair": {
      "style": "natural male hairstyle from face model",
      "effect": "clean, sharp, high-fashion finish"
    },
    "body": {
      "frame": "athletic, powerful upper body",
      "pose": {
        "position": "leaning forward slightly",
        "overall": "dynamic foreshortening emphasizing head and upper torso"
      },
      "skin": {
        "tone": "natural light-to-medium",
        "lighting_effect": "even, cool daylight with soft contrast"
      }
    },
    "clothing": {
      "top": {
        "type": "ultra-fine knit or fitted structured top",
        "color": "cool grey or charcoal (no white)",
        "details": "mock neck or clean crew, slim fit",
        "effect": "sharp silhouette, masculine lines"
      },
      "bottom": {
        "type": "tailored dark trousers",
        "details": "high waist, clean luxury cut, no belt visible"
      }
    }
  },

  "photography": {
    "camera_style": "high-end social media editorial snapshot",
    "angle": "high angle POV",
    "shot_type": "medium close-up",
    "aspect_ratio": "9:16",
    "texture": "clear, sharp, natural skin detail",
    "lighting": "cool overcast daylight, soft diffuse light"
  },

  "background": {
    "setting": "European classic architecture",
    "atmosphere": "fashionable street corner",
    "blur": "controlled bokeh background emphasizing subject"
  },

  "constraints": [
    "Do not change the man's face or identity",
    "Keep facial proportions identical to reference",
    "No accessories (no jewelry, no watch, no sunglasses)",
    "Dark clothing only (no white)",
    "Avoid feminine styling",
    "No beauty filters"
  ],

  "negative_prompt": [
    "female body",
    "feminine features"
  ]
}

## 中文译文（源站提供）
```json
{
  "type": "image_generation_prompt",
  "style": "高冲击力时尚杂志风格, 电影感社交快照",
  "identity_preservation": {
    "use_uploaded_image": true,
    "alter_face": false,
    "strict_identity_lock": true,
    "facial_structure_consistency_priority": true,
    "subject_face_embedding_preserved": true,
    "no_morphing": true,
    "no_face_blending": true,
    "notes": "保持附图中男性的面部特征、比例和整体身份与参考图完全一致，作为主要角色。"
  },
  "subject": {
    "gender": "男性",
    "role": "主要角色 / 时尚杂志模特",
    "build": "健壮, 宽肩, 强壮的男性骨架",
    "expression": {
      "eyes": {
        "look": "锐利, 凝视镜头",
        "energy": "自信, 冷峻, 掌控力"
      },
      "mouth": {
        "position": "嘴唇放松, 略带一丝克制的坏笑",
        "energy": "时尚, 自信"
      },
      "overall": "高冲击力, 魅力四射的存在感"
    },
    "face": {
      "preserve_original": true,
      "makeup": "无",
      "skin": "自然肤质, 无美颜滤镜",
      "style": "冷色调男性时尚杂志风格"
    },
    "hair": {
      "style": "面部模型自带的自然男性发型",
      "effect": "干净, 利落, 高级时尚感"
    },
    "body": {
      "frame": "健壮, 强有力的上半身",
      "pose": {
        "position": "身体略微前倾",
        "overall": "动态的透视缩短, 强调头部和上半身"
      },
      "skin": {
        "tone": "自然浅至中等肤色",
        "lighting_effect": "均匀, 冷调日光, 柔和对比度"
      }
    },
    "clothing": {
      "top": {
        "type": "超细针织或修身结构感上衣",
        "color": "冷灰色或炭灰色 (无白色)",
        "details": "高领或简洁圆领, 修身剪裁",
        "effect": "锐利轮廓, 男性线条"
      },
      "bottom": {
        "type": "定制深色长裤",
        "details": "高腰, 简洁奢华剪裁, 无可见腰带"
      }
    }
  },
  "photography": {
    "camera_style": "高端社交媒体时尚快照",
    "angle": "高角度视角",
    "shot_type": "中景特写",
    "aspect_ratio": "9:16",
    "texture": "清晰, 锐利, 自然皮肤细节",
    "lighting": "阴天冷调日光, 柔和漫射光"
  },
  "background": {
    "setting": "欧洲经典建筑",
    "atmosphere": "时尚街角",
    "blur": "受控景深虚化背景, 突出主体"
  },
  "constraints": [
    "不要改变男性的面部或身份",
    "保持面部比例与参考图一致",
    "无配饰 (无珠宝, 无手表, 无太阳镜)",
    "仅限深色服装 (无白色)",
    "避免女性化造型",
    "无美颜滤镜"
  ],
  "negative_prompt": [
    "女性身体",
    "女性特征"
  ]
}
```

## 来源备注
- 源站作者：Soner 🇹🇷͜͜͡͡✯
- 源站 UUID：HGpiar1fyq
- 源站分类：05_人物肖像与写实摄影

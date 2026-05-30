---
id: character-preserve-cartoon-face-0009
title: "AI一键生成卡通头像（需参考图）"
category: character
subcategory: "10_卡通漫画电影角色"
aesthetic: null
tags: ["卡通", "插画", "女性", "丸子头", "蜘蛛", "黑色", "红色", "暖色调"]
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
Why draw for hours when AI can do it in 10 seconds?
Prompt:
{
"proc_cartoon_render": {
"input": {
"source": "FOTO USER"
},
"face": {
"identity_lock": true,
"map": {
"shape": "PRESERVE",
"hair": "PRESERVE",
"nose": "PRESERVE",
"skintone": "PRESERVE",
"expression": "SMILE SOFT EYES"
}
},
"style_config": {
"mode": "CARTOON_SOFTCLEAN",
"face_shading": "SMOOTH_SOFT_GRADIENT",
"cheek_blush": "LIGHT_PINK_02",
"hair_highlight": "SOFT_GLOW_STRAND",
"head_proportion": 1.42,
"body_limit": "CHEST ONLY",
"background": "PAPER_TEXTURE_FLAT",
"colors_clothing": "SYNC(INPUT.SOURCE)"
},
"render_quality": {
"blending": "ULTRA_SMOOTH",
"edges": "CLEAN_SOFT",
"noise": 0,
"temperature": "WARM_HARMONY"
},
"outputmode": "COSMIC_CUTE_CARTOON"
}
}

## 中文译文（源站提供）
{
  "proc_cartoon_render": {
    "input": {
      "source": "用户提供的照片"
    },
    "face": {
      "identity_lock": true,
      "map": {
        "shape": "保持原样",
        "hair": "保持原样",
        "nose": "保持原样",
        "skintone": "保持原样",
        "expression": "微笑，眼神柔和"
      }
    },
    "style_config": {
      "mode": "卡通风格（柔和清晰）",
      "face_shading": "平滑的柔和渐变效果",
      "cheek_blush": "浅粉色02",
      "hair_highlight": "柔和的光泽效果",
      "head_proportion": 1.42,
      "body_limit": "仅显示胸部",
      "background": "纸张纹理（平面效果）",
      "colors_clothing": "与输入图片的颜色同步"
    },
    "render_quality": {
      "blending": "超平滑效果",
      "edges": "清晰的柔和边缘处理",
      "noise": 0,
      "temperature": "温暖和谐的色调"
    },
    "outputmode": "宇宙萌系卡通风格"
  }
}

## 来源备注
- 源站作者：Zara
- 源站 UUID：RUD4lFINc2
- 源站分类：10_卡通漫画电影角色

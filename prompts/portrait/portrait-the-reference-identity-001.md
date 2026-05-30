---
id: "portrait-the-reference-identity-001"
title: "高定时尚写真：精准还原女性肖像与姿态"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["女性", "商务", "正装", "时尚", "棚拍", "写实", "优雅", "简约"]
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
  "type": "image_generation_prompt",
  "aspect_ratio": "4:5",
  "quality": "ultra-realistic",
  "style": "cinematic fashion editorial",
  "identity_preservation": {
    "use_reference_image": true,
    "strict_identity_lock": true,
    "notes": "Maintain the exact real face, facial structure, hairstyle, skin tone, body proportions, and overall identity of the woman from the uploaded reference image. No alterations or beautification."
  },
  "subject": {
    "gender": "female",
    "pose": {
      "position": "sitting on a modern beige armchair with wooden legs",
      "posture": "leaning slightly forward",
      "hands": "hands gently together in front, relaxed and confident"
    },
    "expression": "intense, confident gaze directed at the camera",
    "appearance": {
      "hair": "same hairstyle as reference image, unchanged",
      "skin_tone": "same natural skin tone as reference image",
      "face": "exact facial features preserved"
    },
    "outfit": {
      "top": "{"top description" "dark navy blue fitted blouse or dress shirt with top buttons slightly open"}",
      "bottom": "light beige slim-fit pants",
      "footwear": "black loafers with tan soles"
    }
  },
  "environment": {
    "background": {
      "color": "light gray",
      "style": "minimalist smooth gradient"
    }
  },
  "lighting": {
    "type": "soft natural studio lighting",
    "quality": "evenly lit",
    "effect": "subtle shadows for depth and realism"
  },
  "camera": {
    "lens": "50mm",
    "aperture": "f/2.8",
    "framing": "vertical",
    "composition": "full-body",
    "depth_of_field": "shallow to moderate"
  },
  "mood": {
    "tone": "confident, elegant, cinematic",
    "aesthetic": "high-end fashion editorial"
  },
  "rendering": {
    "detail_level": "fine details in skin texture, fabric, and furniture",
    "realism": "high realism, no CGI or illustration look"
  },
  "constraints": [
    "Do not change face or facial structure",
    "Do not change hairstyle",
    "No artificial beauty filters",
    "No cartoon or stylized effects",
    "No text or watermark"
  ],
  "output_goal": "Create a high-end cinematic studio portrait of a confident woman seated on a modern armchair, preserving her exact identity from the reference image with realistic lighting and editorial fashion aesthetics."
}

## 中文译文（源站提供）
```json
{
  "type": "image_generation_prompt",
  "aspect_ratio": "4:5",
  "quality": "ultra-realistic",
  "style": "cinematic fashion editorial",
  "identity_preservation": {
    "use_reference_image": true,
    "strict_identity_lock": true,
    "notes": "保持上传参考图中女性的真实面部、面部结构、发型、肤色、身体比例和整体身份完全不变。不得进行任何改动或美化。"
  },
  "subject": {
    "gender": "female",
    "pose": {
      "position": "坐在带木腿的现代米色扶手椅上",
      "posture": "身体略微前倾",
      "hands": "双手在身前轻轻合拢，放松且自信"
    },
    "expression": "眼神锐利、自信地凝视镜头",
    "appearance": {
      "hair": "与参考图中的发型相同，未作改动",
      "skin_tone": "与参考图中的自然肤色相同",
      "face": "面部特征完全保留"
    },
    "outfit": {
      "top": "{\"top description\" \"深海军蓝修身衬衫或连衣裙，顶部纽扣略微解开\"}",
      "bottom": "浅米色修身长裤",
      "footwear": "黑色乐福鞋，搭配棕褐色鞋底"
    }
  },
  "environment": {
    "background": {
      "color": "浅灰色",
      "style": "极简主义平滑渐变"
    }
  },
  "lighting": {
    "type": "柔和的自然影棚灯光",
    "quality": "光线均匀",
    "effect": "细微的阴影，增加深度和真实感"
  },
  "camera": {
    "lens": "50mm",
    "aperture": "f/2.8",
    "framing": "垂直构图",
    "composition": "全身",
    "depth_of_field": "浅到中等景深"
  },
  "mood": {
    "tone": "自信、优雅、电影感",
    "aesthetic": "高端时尚杂志风格"
  },
  "rendering": {
    "detail_level": "皮肤纹理、织物和家具的精细细节",
    "realism": "高度真实感，无 CGI 或插画效果"
  },
  "constraints": [
    "不得改变面部或面部结构",
    "不得改变发型",
    "无人工美颜滤镜",
    "无卡通或风格化效果",
    "无文字或水印"
  ],
  "output_goal": "创作一张高端电影感的影棚肖像照，描绘一位自信的女性坐在现代扶手椅上，精确保留其在参考图中的身份，并呈现真实的灯光和时尚杂志美学。"
}
```

## 来源备注
- 源站作者：𝗦𝗮𝗻𝗶𝗮
- 源站 UUID：FjKm5OOphA
- 源站分类：05_人物肖像与写实摄影

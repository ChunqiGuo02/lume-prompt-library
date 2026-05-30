---
id: "landscape-the-user-ana-001"
title: "用户与安娜·德·阿玛斯新年烟花合影写真"
category: landscape
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["烟花", "新年", "夜景", "肖像", "女性", "白色", "礼服", "庆典"]
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
  "task": "portrait_editing_and_generation",
  "identity_preservation": {
    "person_1": {
      "description": "the user",
      "use_reference_image": true,
      "strict_identity_lock": true,
      "alter_face": false,
      "notes": "Preserve 100% of the user’s facial features, proportions, skin tone, hairstyle, and expression exactly as in the reference image."
    },
    "person_2": {
      "description": "Ana de Armas",
      "use_reference_image": false,
      "public_figure": true,
      "identity_accuracy": "high",
      "notes": "Ana de Armas must be clearly recognizable, with accurate facial features, proportions, and overall likeness."
    }
  },
  "composition": {
    "framing": "close-up portrait",
    "camera_angle": "eye-level",
    "focus": "sharp focus on both faces",
    "depth_of_field": "shallow, blurred background"
  },
  "subjects": [
    {
      "gender": "female",
      "role": "user",
      "pose": "standing very close to the other woman",
      "expression": "happy, warm smile"
    },
    {
      "gender": "female",
      "role": "Ana de Armas",
      "pose": "standing very close to the user",
      "expression": "happy, elegant smile"
    }
  ],
  "wardrobe": {
    "theme": "New Year celebration",
    "outfits": [
      "elegant white outfit for the user",
      "elegant white outfit for Ana de Armas"
    ],
    "style": "refined, festive, and editorial"
  },
  "environment": {
    "setting": "outdoor New Year’s Eve celebration",
    "background": "night sky softly illuminated by fireworks sparks",
    "details": [
      "subtle fireworks glow",
      "no distracting elements"
    ]
  },
  "lighting": {
    "type": "dynamic festive lighting",
    "source": "fireworks",
    "effects": [
      "soft colorful reflections on skin",
      "natural highlights on faces",
      "balanced contrast"
    ]
  },
  "style": {
    "genre": "magazine editorial photography",
    "look": "luxurious, celebratory, cinematic",
    "color_grading": "vibrant colors with natural skin tones"
  },
  "quality": {
    "sharpness": "extreme clarity on faces",
    "resolution": "ultra-high resolution",
    "realism": "photorealistic",
    "artifacts": "none"
  },
  "constraints": [
    "Do not alter the user’s face",
    "Do not distort Ana de Armas’ recognizable features",
    "No artificial filters",
    "No exaggerated effects",
    "No text or watermarks"
  ],
  "output_goal": "Generate a close-up editorial-style portrait of two women — the user and Ana de Armas — celebrating New Year’s Eve 2026, wearing elegant white outfits, smiling closely together, with softly blurred fireworks lighting the night sky behind them."
}

## 中文译文（源站提供）
```json
{
  "type": "image_generation_prompt",
  "task": "portrait_editing_and_generation",
  "identity_preservation": {
    "person_1": {
      "description": "用户",
      "use_reference_image": true,
      "strict_identity_lock": true,
      "alter_face": false,
      "notes": "100% 保留用户面部特征、比例、肤色、发型和表情，与参考图像完全一致。"
    },
    "person_2": {
      "description": "安娜·德·阿玛斯 (Ana de Armas)",
      "use_reference_image": false,
      "public_figure": true,
      "identity_accuracy": "high",
      "notes": "安娜·德·阿玛斯必须清晰可辨，面部特征、比例和整体形象准确无误。"
    }
  },
  "composition": {
    "framing": "特写肖像",
    "camera_angle": "平视视角",
    "focus": "两张脸都清晰对焦",
    "depth_of_field": "浅景深，背景虚化"
  },
  "subjects": [
    {
      "gender": "女性",
      "role": "用户",
      "pose": "与另一位女性站得非常近",
      "expression": "开心，温暖的笑容"
    },
    {
      "gender": "女性",
      "role": "安娜·德·阿玛斯 (Ana de Armas)",
      "pose": "与用户站得非常近",
      "expression": "开心，优雅的笑容"
    }
  ],
  "wardrobe": {
    "theme": "新年庆祝",
    "outfits": [
      "用户穿着优雅的白色服装",
      "安娜·德·阿玛斯穿着优雅的白色服装"
    ],
    "style": "精致、喜庆、时尚杂志风格"
  },
  "environment": {
    "setting": "户外新年庆祝活动",
    "background": "夜空被烟花火星柔和地照亮",
    "details": [
      "微妙的烟花光芒",
      "无干扰元素"
    ]
  },
  "lighting": {
    "type": "动态节日照明",
    "source": "烟花",
    "effects": [
      "皮肤上柔和的彩色反光",
      "面部自然的亮点",
      "均衡的对比度"
    ]
  },
  "style": {
    "genre": "杂志社论摄影",
    "look": "奢华、喜庆、电影感",
    "color_grading": "色彩鲜明，肤色自然"
  },
  "quality": {
    "sharpness": "面部极致清晰",
    "resolution": "超高分辨率",
    "realism": "照片级真实感",
    "artifacts": "无瑕疵"
  },
  "constraints": [
    "不得改变用户的面部",
    "不得扭曲安娜·德·阿玛斯可识别的特征",
    "无人工滤镜",
    "无夸张效果",
    "无文字或水印"
  ],
  "output_goal": "生成一张特写杂志社论风格的肖像，描绘两位女性——用户和安娜·德·阿玛斯——庆祝 2026 年新年，她们穿着优雅的白色服装，亲密地微笑着，身后夜空被柔和虚化的烟花照亮。"
}
```

## 来源备注
- 源站作者：𝗦𝗮𝗻𝗶𝗮
- 源站 UUID：6klQwEhFPb
- 源站分类：05_人物肖像与写实摄影

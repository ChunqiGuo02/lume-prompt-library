---
id: portrait-face-the-reference-2237
title: "超写实泳池边时尚女性肖像生成"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["女性", "写实", "肖像", "休闲", "针织", "牛仔", "白色", "鞋子"]
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
  "resolution": "16K Ultra HD",
  "aspect_ratio": "3:4",
  "style": "ultra-realistic cinematic lifestyle portrait",
  "identity_preservation": {
    "use_reference_image": true,
    "strict_identity_lock": true,
    "alter_face": false,
    "alter_hair": false,
    "notes": "The woman’s face and hairstyle must be exactly identical to the uploaded reference image. No changes to facial structure, proportions, skin texture, or hair styling."
  },
  "subject": {
    "gender": "female",
    "appearance": {
      "face": "identical to reference image",
      "hair": "same haircut and neatly styled as reference"
    },
    "pose": {
      "description": "leaning slightly with one shoulder against a sleek glass railing",
      "hands": "both hands in pockets",
      "legs": "one leg crossed slightly in front of the other",
      "head": "fully facing the camera"
    },
    "expression": "confident, relaxed, subtle smirk"
  },
  "wardrobe": {
    "top": "white knitted crewneck sweater",
    "bottom": "light-wash denim jeans",
    "footwear": "simple white sneakers",
    "style": "casual, modern, stylish"
  },
  "environment": {
    "location": "modern luxury poolside",
    "elements": [
      "sleek glass railing",
      "modern swimming pool",
      "lush tropical plants"
    ],
    "time_of_day": "bright sunny day",
    "mood": "stylish, relaxed, casual luxury lifestyle"
  },
  "lighting": {
    "type": "soft natural daylight",
    "effects": [
      "reflections on pool water",
      "reflections on glass railing",
      "gentle highlights on face and clothing"
    ]
  },
  "camera": {
    "shot_type": "cinematic portrait",
    "angle": "eye-level",
    "focus": "sharp focus on the woman",
    "depth_of_field": "shallow, softly blurred background",
    "look": "DSLR / cinematic crisp tones"
  },
  "quality": {
    "realism": "ultra-photorealistic",
    "detail_level": "extreme detail in skin, fabric, glass, and water reflections"
  },
  "constraints": [
    "Do not alter face or hairstyle",
    "No stylization or AI-art look",
    "No body distortion",
    "No text, logos, or watermarks"
  ],
  "output_goal": "Create a 16K ultra-realistic cinematic portrait of a stylish young woman leaning against a glass railing by a luxury poolside, preserving her exact facial identity and hairstyle, with a bright, relaxed, modern lifestyle atmosphere."
}

## 中文译文（源站提供）
```json
{
  "type": "image_generation_prompt",
  "resolution": "16K 超高清",
  "aspect_ratio": "3:4",
  "style": "超写实电影感生活肖像",
  "identity_preservation": {
    "use_reference_image": true,
    "strict_identity_lock": true,
    "alter_face": false,
    "alter_hair": false,
    "notes": "女性的面部和发型必须与上传的参考图像完全一致。面部结构、比例、皮肤纹理或发型均不得有任何改变。"
  },
  "subject": {
    "gender": "女性",
    "appearance": {
      "face": "与参考图像完全一致",
      "hair": "发型与参考图像相同，且整齐有型"
    },
    "pose": {
      "description": "身体略微倾斜，一侧肩膀靠在光滑的玻璃栏杆上",
      "hands": "双手插兜",
      "legs": "一条腿略微交叉在另一条腿前面",
      "head": "完全面向镜头"
    },
    "expression": "自信、放松、略带一丝坏笑"
  },
  "wardrobe": {
    "top": "白色针织圆领毛衣",
    "bottom": "浅色水洗牛仔裤",
    "footwear": "简约白色运动鞋",
    "style": "休闲、现代、时尚"
  },
  "environment": {
    "location": "现代奢华泳池边",
    "elements": [
      "光滑的玻璃栏杆",
      "现代游泳池",
      "郁郁葱葱的热带植物"
    ],
    "time_of_day": "阳光明媚的白天",
    "mood": "时尚、放松、休闲奢华的生活方式"
  },
  "lighting": {
    "type": "柔和的自然日光",
    "effects": [
      "泳池水面的反光",
      "玻璃栏杆上的反光",
      "面部和衣物上的柔和高光"
    ]
  },
  "camera": {
    "shot_type": "电影感肖像",
    "angle": "平视视角",
    "focus": "对女性主体清晰对焦",
    "depth_of_field": "浅景深，背景柔和模糊",
    "look": "单反相机 / 电影般清晰的色调"
  },
  "quality": {
    "realism": "超逼真",
    "detail_level": "皮肤、织物、玻璃和水面反光处细节极致"
  },
  "constraints": [
    "不得改变面部或发型",
    "无风格化或 AI 艺术效果",
    "无身体扭曲",
    "无文字、标志或水印"
  ],
  "output_goal": "创作一张 16K 超写实电影感肖像，描绘一位时尚年轻女性靠在奢华泳池边的玻璃栏杆上，精确保留其面部特征和发型，营造明亮、放松、现代的生活方式氛围。"
}
```

## 来源备注
- 源站作者：𝗦𝗮𝗻𝗶𝗮
- 源站 UUID：gxbT1HcdfI
- 源站分类：05_人物肖像与写实摄影

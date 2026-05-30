---
id: "product-golf-the-identity-001"
title: "精准复刻女高尔夫球手专业姿态与环境的超写实影像"
category: product
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["高尔夫", "女性", "球场", "运动", "写实", "摄影", "暖光", "藏蓝"]
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
  "style": "ultra-realistic cinematic professional sports photography",
  "aspect_ratio": "3:4",
  "identity_preservation": {
    "use_reference_image": true,
    "strict_identity_lock": true,
    "alter_face": false,
    "alter_posture": false,
    "notes": "The female golfer must exactly match the uploaded reference photo in facial structure, identity, expression, posture, and overall proportions. No facial alteration, beautification, or reinterpretation."
  },
  "subject": {
    "gender": "female",
    "role": "professional golfer",
    "physique": {
      "description": "athletic and fit",
      "details": [
        "toned arms",
        "strong core",
        "defined legs"
      ],
      "realism": "natural athletic fitness, no exaggeration"
    },
    "pose": {
      "position": "address position",
      "camera_angle": "side-diagonal full-body shot",
      "focus": "fully focused on the golf ball",
      "body_alignment": "accurate golf posture, correct grip, natural body angles"
    },
    "expression": "calm, intense, highly focused"
  },
  "wardrobe": {
    "style": "luxurious high-end golf attire",
    "top": "fitted designer golf polo shirt",
    "bottom": "perfectly tailored premium golf pants",
    "shoes": "deep navy premium golf shoes",
    "accessories": [
      "stylish leather golf glove"
    ],
    "notes": "Sunglasses only if present in the reference image"
  },
  "environment": {
    "location": "golf course",
    "foreground": "golf ball aligned with target line",
    "midground": "golf hole with visible flagstick slightly moving in the wind",
    "background": "natural golf course scenery, softly blurred but readable",
    "weather": "gentle breeze visible in grass and clothing"
  },
  "lighting": {
    "type": "natural outdoor lighting",
    "time_of_day": "late afternoon",
    "effects": [
      "warm sunlight",
      "soft shadows",
      "natural highlights on skin and clothing"
    ]
  },
  "camera": {
    "shot_type": "full-body",
    "angle": "side-diagonal",
    "depth_of_field": "shallow, cinematic background blur",
    "focus": "sharp focus on golfer",
    "quality": "professional sports photography"
  },
  "quality": {
    "realism": "maximum photorealism",
    "textures": [
      "realistic skin texture",
      "fabric weave detail",
      "natural grass and turf detail"
    ]
  },
  "constraints": [
    "No fantasy elements",
    "No stylization",
    "No distorted anatomy",
    "No incorrect golf posture",
    "No AI-art look",
    "No text, logos, or watermarks"
  ],
  "output_goal": "Create an ultra-realistic cinematic full-body image of a female golfer in address position on a golf course, preserving her exact identity from the reference image, with an athletic physique, luxurious golf attire, accurate technique, and professional sports photography realism."
}

## 中文译文（源站提供）
```json
{
  "type": "image_generation_prompt",
  "style": "超现实电影级专业体育摄影",
  "aspect_ratio": "3:4",
  "identity_preservation": {
    "use_reference_image": true,
    "strict_identity_lock": true,
    "alter_face": false,
    "alter_posture": false,
    "notes": "女性高尔夫球手在面部结构、身份、表情、姿势和整体比例上必须与上传的参考照片完全一致。不允许对面部进行任何修改、美化或重新诠释。"
  },
  "subject": {
    "gender": "女性",
    "role": "职业高尔夫球手",
    "physique": {
      "description": "运动型，身材健美",
      "details": [
        "手臂线条优美",
        "核心力量强",
        "腿部线条分明"
      ],
      "realism": "自然运动健美，无夸张"
    },
    "pose": {
      "position": "准备击球姿势",
      "camera_angle": "侧斜全身镜头",
      "focus": "完全专注于高尔夫球",
      "body_alignment": "准确的高尔夫姿势，正确的握杆，自然的身体角度"
    },
    "expression": "平静、专注、高度集中"
  },
  "wardrobe": {
    "style": "奢华高端高尔夫服饰",
    "top": "修身设计师高尔夫 polo 衫",
    "bottom": "完美剪裁的优质高尔夫长裤",
    "shoes": "深海军蓝优质高尔夫鞋",
    "accessories": [
      "时尚皮革高尔夫手套"
    ],
    "notes": "仅当参考图片中出现墨镜时才佩戴"
  },
  "environment": {
    "location": "高尔夫球场",
    "foreground": "高尔夫球与目标线对齐",
    "midground": "高尔夫球洞，旗杆在风中轻微摆动",
    "background": "自然高尔夫球场风光，柔和模糊但可辨认",
    "weather": "微风，草地和衣物可见摆动"
  },
  "lighting": {
    "type": "自然户外光线",
    "time_of_day": "{\"time of day\" \"傍晚\"}",
    "effects": [
      "温暖的阳光",
      "柔和的阴影",
      "皮肤和衣物上的自然高光"
    ]
  },
  "camera": {
    "shot_type": "全身",
    "angle": "侧斜",
    "depth_of_field": "浅景深，电影级背景模糊",
    "focus": "高尔夫球手清晰对焦",
    "quality": "专业体育摄影"
  },
  "quality": {
    "realism": "最大程度的真实感",
    "textures": [
      "逼真的皮肤纹理",
      "织物编织细节",
      "自然的草地和草皮细节"
    ]
  },
  "constraints": [
    "无奇幻元素",
    "无风格化",
    "无扭曲的解剖结构",
    "无不正确的高尔夫姿势",
    "无 AI 艺术外观",
    "无文字、标志或水印"
  ],
  "output_goal": "创建一张超现实电影级的女性高尔夫球手在球场上准备击球姿势的全身图像，精确保留参考图像中的身份，展现健美的体格、奢华的高尔夫服饰、精准的技术和专业体育摄影的真实感。"
}
```

## 来源备注
- 源站作者：𝗦𝗮𝗻𝗶𝗮
- 源站 UUID：2iAtxouQiz
- 源站分类：05_人物肖像与写实摄影

---
id: "landscape-the-identity-reference-002"
title: "精准复刻面容的都市女性街拍写真"
category: landscape
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["淡蓝色", "白色", "女性", "街拍", "简约", "现代", "优雅", "都市"]
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
  "type": "image_generation_prompt",
  "aspect_ratio": "9:16",
  "resolution": "1080x1920",
  "style": "cinematic, minimalistic, modern, classy street-style",
  "identity_preservation": {
    "use_reference_image": true,
    "strict_identity_lock": true,
    "alter_face": false,
    "notes": "The face must remain 100% identical to the uploaded reference image, with no changes to facial structure, proportions, expression, skin texture, or identity."
  },
  "subject": {
    "gender": "female",
    "pose": {
      "action": "walking forward confidently",
      "legs": "right leg stepping ahead, left leg slightly behind in a natural walking motion",
      "arms": {
        "left_hand": "swinging loosely by her side",
        "right_hand": "bent, lightly touching the edge of her pants pocket"
      },
      "head": "slightly tilted to the left",
      "gaze": "eyes softly directed downward"
    },
    "expression": "calm, confident, self-assured",
    "outfit": {
      "coat": "{"coat color" "pastel blue"} long coat with a structured, elegant fit",
      "top": "fitted pastel blue turtleneck",
      "trousers": "slim-cut, slightly cropped pastel blue trousers",
      "shoes": "clean white sneakers"
    }
  },
  "environment": {
    "location": "dark stone pavement",
    "mood": "refined, modern, confident",
    "style": "urban, minimal, elegant"
  },
  "lighting": {
    "type": "soft, warm lighting",
    "purpose": "enhance depth and texture of clothing and stone pavement",
    "effects": [
      "realistic shadows",
      "natural highlights",
      "cinematic depth"
    ]
  },
  "camera": {
    "angle": "eye-level",
    "position": "directly in front of the subject",
    "lens_simulation": "85mm portrait lens",
    "depth_of_field": "realistic with subtle foreground blur and bokeh",
    "compression": "cinematic"
  },
  "quality": {
    "realism": "ultra-photorealistic",
    "detail": "high detail in fabric texture, pavement, and skin",
    "artifacts": "none"
  },
  "constraints": [
    "No facial alteration",
    "No beautification or retouching",
    "No distortion or stylization",
    "Preserve natural proportions and realism"
  ],
  "output_goal": "Create a vertical, cinematic full-body portrait of a confident woman walking forward on dark stone pavement, wearing a pastel blue minimalist outfit, with soft warm lighting and an elegant, modern street-style aesthetic, while preserving her face with 100% accuracy from the reference image."
}

## 中文译文（源站提供）
```json
{
  "type": "image_generation_prompt",
  "aspect_ratio": "9:16",
  "resolution": "1080x1920",
  "style": "电影感、极简主义、现代、优雅的街头风格",
  "identity_preservation": {
    "use_reference_image": true,
    "strict_identity_lock": true,
    "alter_face": false,
    "notes": "面部必须与上传的参考图像 100% 相同，面部结构、比例、表情、皮肤纹理或身份均不得有任何改变。"
  },
  "subject": {
    "gender": "女性",
    "pose": {
      "action": "自信地向前走",
      "legs": "右腿向前迈步，左腿略微向后，呈自然的行走姿态",
      "arms": {
        "left_hand": "在身体一侧随意摆动",
        "right_hand": "弯曲，轻轻触碰裤子口袋边缘"
      },
      "head": "头部略微向左倾斜",
      "gaze": "目光柔和地向下看"
    },
    "expression": "平静、自信、泰然自若",
    "outfit": {
      "coat": "{\"coat color\" \"柔和蓝色\"} 结构感强、优雅合身的及膝大衣",
      "top": "修身柔和蓝色高领毛衣",
      "trousers": "修身、略微九分的柔和蓝色长裤",
      "shoes": "干净的白色运动鞋"
    }
  },
  "environment": {
    "location": "深色石板路",
    "mood": "精致、现代、自信",
    "style": "都市、极简、优雅"
  },
  "lighting": {
    "type": "柔和、温暖的灯光",
    "purpose": "增强服装和石板路的深度和纹理",
    "effects": [
      "逼真的阴影",
      "自然的高光",
      "电影般的景深"
    ]
  },
  "camera": {
    "angle": "与视线齐平",
    "position": "正对主体",
    "lens_simulation": "85mm 人像镜头",
    "depth_of_field": "逼真，前景有微妙的模糊和散景效果",
    "compression": "电影感"
  },
  "quality": {
    "realism": "超写实",
    "detail": "面料纹理、路面和皮肤细节丰富",
    "artifacts": "无瑕疵"
  },
  "constraints": [
    "面部无改动",
    "无美化或修饰",
    "无扭曲或风格化",
    "保持自然比例和真实感"
  ],
  "output_goal": "创作一张自信女性在深色石板路上向前行走的垂直电影感全身肖像，她身穿柔和蓝色的极简主义服装，光线柔和温暖，整体呈现优雅、现代的街头风格美学，同时面部需与参考图像 100% 准确一致。"
}
```

## 来源备注
- 源站作者：𝗦𝗮𝗻𝗶𝗮
- 源站 UUID：nM7TZfc3PW
- 源站分类：05_人物肖像与写实摄影

---
id: portrait-the-right-fashion-1228
title: "时尚杂志封面人像精修"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["时尚", "高端", "肖像", "女性", "简约", "暖色调", "皮革", "沙发"]
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
  "type": "image_edit_prompt",
  "goal": "Transform the original image into a polished high-end fashion editorial portrait of a woman while preserving her facial features and natural proportions.",
  "identity_preservation": {
    "use_reference_image": true,
    "alter_face": false,
    "notes": "Maintain the woman's exact facial structure, proportions, expression, and skin texture from the uploaded image."
  },
  "pose": {
    "keep_original_pose": true,
    "description": "Seated on the right arm of a mid-century brown leather sofa, leaning slightly forward, hands loosely clasped over the right knee, left foot flat on the floor, right ankle slightly raised."
  },
  "wardrobe": {
    "top": "crisp white open-collar linen shirt with sleeves rolled to mid-forearm",
    "bottoms": "slim straight indigo jeans cuffed at the ankle",
    "footwear": "clean white low-top leather sneakers",
    "accessories": [
      "minimal silver watch on the left wrist"
    ],
    "additional_elements": {
      "blazer": "lightweight navy blazer casually draped over the back of the sofa"
    }
  },
  "lighting_mood": {
    "key_light": "soft natural window light from camera-left",
    "background": "warm beige backdrop",
    "rim_light": "gentle rim light to create separation from background",
    "color_grade": "warm caramel / beige fashion editorial tone"
  },
  "technical_style": {
    "look": "high-end fashion, cinematic",
    "depth_of_field": "shallow (around f/2.8)",
    "lens_perspective": "50mm equivalence",
    "contrast": "medium",
    "grain": "subtle film grain",
    "retouching": "realistic skin retouch (retain pores and natural texture)",
    "detail_enhancement": [
      "sharpen eyes",
      "enhance fabric textures",
      "boost catchlights"
    ]
  },
  "environment": {
    "furniture": "mid-century brown leather sofa (slightly polished)",
    "background": "warm beige backdrop",
    "composition": "soft vignette for visual focus"
  },
  "output": {
    "crop": "full-body editorial crop (3:4)",
    "finish": "realistic, polished fashion editorial",
    "dpi": 300
  },
  "position_short": "Seated on sofa arm, leaning forward, hands on right knee, legs relaxed, right ankle raised."
}

## 中文译文（源站提供）
```json
{
  "type": "image_edit_prompt",
  "goal": "将原始图像转换为一张精致高端的时尚杂志女性肖像照，同时保留其面部特征和自然比例。",
  "identity_preservation": {
    "use_reference_image": true,
    "alter_face": false,
    "notes": "保持上传图片中女性的面部结构、比例、表情和皮肤纹理不变。"
  },
  "pose": {
    "keep_original_pose": true,
    "description": "坐在中世纪风格棕色皮沙发的右扶手上，身体略微前倾，双手松散地搭在右膝上，左脚平放在地板上，右脚踝略微抬起。"
  },
  "wardrobe": {
    "top": "一件袖子卷至小臂中部的挺括白色开领亚麻衬衫",
    "bottoms": "一条在脚踝处卷边的修身直筒靛蓝色牛仔裤",
    "footwear": "一双干净的白色低帮皮质运动鞋",
    "accessories": [
      "左手腕上戴着一块简约的银色手表"
    ],
    "additional_elements": {
      "blazer": "一件轻薄的海军蓝西装外套随意地搭在沙发靠背上"
    }
  },
  "lighting_mood": {
    "key_light": "来自相机左侧的柔和自然窗光",
    "background": "暖米色背景",
    "rim_light": "柔和的轮廓光，以使人物与背景分离",
    "color_grade": "暖焦糖色/米色时尚杂志色调"
  },
  "technical_style": {
    "look": "高端时尚，电影感",
    "depth_of_field": "浅景深（约 f/2.8）",
    "lens_perspective": "50mm 等效焦距",
    "contrast": "中等对比度",
    "grain": "细微胶片颗粒",
    "retouching": "真实的皮肤修饰（保留毛孔和自然纹理）",
    "detail_enhancement": [
      "锐化眼睛",
      "增强织物纹理",
      "提升眼神光"
    ]
  },
  "environment": {
    "furniture": "中世纪风格棕色皮沙发（略微抛光）",
    "background": "暖米色背景",
    "composition": "柔和的渐晕效果以突出视觉焦点"
  },
  "output": {
    "crop": "全身杂志裁剪（3:4）",
    "finish": "写实、精致的时尚杂志效果",
    "dpi": 300
  },
  "position_short": "坐在沙发扶手上，身体前倾，双手搭在右膝上，双腿放松，右脚踝抬起。"
}
```

## 来源备注
- 源站作者：𝗦𝗮𝗻𝗶𝗮
- 源站 UUID：zujWbGB3Fv
- 源站分类：05_人物肖像与写实摄影

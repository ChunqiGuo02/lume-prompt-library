---
id: "landscape-urban-motion-textures-001"
title: "超写实街头滑板少女动态场景生成"
category: landscape
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["滑板", "女孩", "街头", "涂鸦", "废弃", "水泥", "写实", "街拍"]
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
  "style": "ultra-realistic urban street photography, cinematic but grounded",
  "scene": {
    "description": "highly realistic urban skateboarding action scene",
    "location": "abandoned urban area",
    "environment_details": [
      "large concrete walls",
      "colorful layered graffiti art",
      "cracked concrete ground",
      "visible dirt, wear, and raw textures"
    ],
    "atmosphere": "authentic, raw, immersive urban mood"
  },
  "subject": {
    "gender": "female",
    "identity_lock": {
      "use_reference_image": true,
      "strict_identity_preservation": true,
      "notes": "Preserve 100% of the woman’s facial features, proportions, skin texture, hairstyle, and overall identity exactly as in the reference image."
    },
    "physique": {
      "build": "fit and proportional",
      "definition": "natural muscle definition",
      "anatomy": "realistic and accurate"
    },
    "action": {
      "activity": "performing an impressive skateboard trick",
      "position": "mid-air or slightly above the ground",
      "control": "skateboard perfectly aligned under her feet, showing confidence and balance"
    },
    "pose_and_motion": {
      "body_language": "athletic control and balance",
      "wind_effect": "subtle wind affecting clothing for added realism"
    }
  },
  "camera": {
    "framing": "full body",
    "angle": "slightly low, diagonal angle",
    "focus": "sharp focus on face and body",
    "motion_effects": {
      "background": "slight motion blur",
      "skateboard_wheels": "subtle motion blur to enhance speed"
    }
  },
  "lighting": {
    "type": "natural cinematic lighting",
    "quality": "soft shadows, mild contrast",
    "color_grading": "realistic, urban-toned"
  },
  "textures_and_detail": {
    "skin": "photorealistic skin texture",
    "clothing": "realistic fabric folds and movement",
    "environment": "ultra-detailed concrete and graffiti textures",
    "physics": "accurate skateboard physics and body mechanics"
  },
  "quality": {
    "realism_level": "maximum realism",
    "style_notes": [
      "no exaggeration",
      "no cartoon style",
      "no fantasy elements"
    ]
  },
  "output_goal": "Create an ultra-realistic, cinematic yet grounded urban skateboarding action image of a woman performing a confident mid-air trick in an abandoned graffiti-covered environment, with authentic motion, lighting, and textures."
}

## 中文译文（源站提供）
```json
{
  "type": "image_generation_prompt",
  "style": "超现实都市街头摄影，电影感但贴近现实",
  "scene": {
    "description": "高度真实的都市滑板动作场景",
    "location": "废弃的都市区域",
    "environment_details": [
      "大型混凝土墙",
      "色彩斑斓的分层涂鸦艺术",
      "开裂的混凝土地面",
      "可见的泥土、磨损和原始纹理"
    ],
    "atmosphere": "真实、粗犷、沉浸式的都市氛围"
  },
  "subject": {
    "gender": "女性",
    "identity_lock": {
      "use_reference_image": true,
      "strict_identity_preservation": true,
      "notes": "100% 保留女性的面部特征、比例、皮肤纹理、发型和整体身份，与参考图像完全一致。"
    },
    "physique": {
      "build": "健美匀称",
      "definition": "自然的肌肉线条",
      "anatomy": "真实准确的解剖结构"
    },
    "action": {
      "activity": "正在表演一个令人印象深刻的滑板特技",
      "position": "空中或略高于地面",
      "control": "滑板完美地对准她的脚下，展现出自信和平衡"
    },
    "pose_and_motion": {
      "body_language": "运动控制和平衡感",
      "wind_effect": "微风轻拂衣物，增加真实感"
    }
  },
  "camera": {
    "framing": "全身",
    "angle": "略低、对角线角度",
    "focus": "面部和身体清晰对焦",
    "motion_effects": {
      "background": "背景略微运动模糊",
      "skateboard_wheels": "滑板轮子轻微运动模糊，以增强速度感"
    }
  },
  "lighting": {
    "type": "自然电影感光照",
    "quality": "柔和阴影，适度对比",
    "color_grading": "真实、都市色调"
  },
  "textures_and_detail": {
    "skin": "照片级真实的皮肤纹理",
    "clothing": "逼真的布料褶皱和动态",
    "environment": "超详细的混凝土和涂鸦纹理",
    "physics": "准确的滑板物理和身体力学"
  },
  "quality": {
    "realism_level": "最高真实度",
    "style_notes": [
      "无夸张",
      "无卡通风格",
      "无奇幻元素"
    ]
  },
  "output_goal": "创作一张超现实、电影感但贴近现实的都市滑板动作图像，描绘一名女性在废弃的涂鸦环境中自信地表演空中特技，具有真实的动作、光照和纹理。"
}
```

## 来源备注
- 源站作者：𝗦𝗮𝗻𝗶𝗮
- 源站 UUID：mWMSAkrhz2
- 源站分类：05_人物肖像与写实摄影

---
id: portrait-sand-the-identity-1466
title: "沙漠沙丘上，女子静坐椅中，身后福特猛禽越野车腾空飞驰，尘土飞"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: warm-cinematic-portrait
tags: ["沙漠", "女性", "皮卡", "松弛", "动感", "暖色调", "电影感", "黄昏"]
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
  "language": "English",
  "aspect_ratio": "9:16",
  "style": "cinematic, ultra-realistic, high-speed action photography",
  "identity_preservation": {
    "use_reference_image": true,
    "strict_identity_lock": true,
    "notes": "Do not change face, hair, or facial features. Preserve the exact facial identity, hairstyle, proportions, and expression from the reference image."
  },
  "subject": {
    "gender": "female",
    "position_in_frame": "foreground, right side",
    "pose": {
      "seating": "sitting in a small folding camping chair on top of a sand dune",
      "legs": "crossed casually",
      "posture": "leaning back comfortably"
    },
    "expression": "confident, playful, relaxed with a subtle smile",
    "appearance": {
      "outfit": {
        "clothing": "{"outfit color" "black"} outfit (top and pants)",
        "boots": "brown boots",
        "headwear": "dark baseball cap",
        "accessories": [
          "sunglasses",
          "headset microphone"
        ]
      }
    }
  },
  "secondary_subject": {
    "vehicle": {
      "type": "powerful off-road pickup truck",
      "style_reference": "Ford Raptor–style",
      "action": "driving aggressively at full speed over the sand dune",
      "motion_state": "slightly airborne",
      "effects": [
        "dramatic explosion of sand and dust",
        "visible motion blur emphasizing speed"
      ],
      "position_in_frame": "background, slightly left and centered"
    }
  },
  "environment": {
    "location": "desert sand dunes",
    "time_of_day": "golden hour",
    "atmosphere": "warm, cinematic, dramatic contrast between calm and chaos"
  },
  "lighting": {
    "type": "natural golden hour sunlight",
    "quality": "soft and warm",
    "effects": [
      "gentle highlights on flying sand particles",
      "soft shadows",
      "cinematic teal and orange color balance"
    ]
  },
  "camera": {
    "angle": "low, cinematic angle",
    "lens": "telephoto ~85mm",
    "depth_of_field": "shallow",
    "focus": {
      "foreground": "woman in sharp focus",
      "background": "truck slightly motion-blurred"
    }
  },
  "color_grading": {
    "palette": [
      "warm beige sand",
      "muted sky tones",
      "subtle teal and orange accents"
    ],
    "style": "filmic, natural, HDR"
  },
  "quality": {
    "resolution": "8K",
    "detail_level": "ultra-high",
    "texture": "realistic sand, fabric, skin, and dust textures",
    "grain": "subtle film grain",
    "rendering": "photorealistic, no CGI look"
  },
  "constraints": [
    "No cartoon or illustrated style",
    "No artificial sharpening",
    "No exaggerated effects",
    "Maintain natural skin tones",
    "Do not alter facial identity"
  ],
  "output_goal": "Create a cinematic, ultra-realistic desert action image featuring a calm, confident woman seated in the foreground while a powerful off-road truck explodes through the dunes behind her, emphasizing contrast, motion, and cinem

## 中文译文（源站提供）
```json
{
  "type": "image_generation_prompt",
  "language": "Simplified Chinese",
  "aspect_ratio": "9:16",
  "style": "电影感、超现实、高速动作摄影",
  "identity_preservation": {
    "use_reference_image": true,
    "strict_identity_lock": true,
    "notes": "不要改变面部、头发或面部特征。保留参考图像中精确的面部特征、发型、比例和表情。"
  },
  "subject": {
    "gender": "女性",
    "position_in_frame": "前景，右侧",
    "pose": {
      "seating": "坐在沙丘顶部的小型折叠露营椅上",
      "legs": "随意交叉",
      "posture": "舒适地向后靠"
    },
    "expression": "自信、俏皮、放松并带着一丝微笑",
    "appearance": {
      "outfit": {
        "clothing": "{\"outfit color\" \"black\"} 服装（上衣和裤子）",
        "boots": "棕色靴子",
        "headwear": "深色棒球帽",
        "accessories": [
          "太阳镜",
          "头戴式麦克风"
        ]
      }
    }
  },
  "secondary_subject": {
    "vehicle": {
      "type": "强劲的越野皮卡车",
      "style_reference": "福特猛禽风格",
      "action": "在沙丘上全速猛烈行驶",
      "motion_state": "略微腾空",
      "effects": [
        "沙尘剧烈爆裂",
        "可见的运动模糊强调速度感"
      ],
      "position_in_frame": "背景，略微偏左居中"
    }
  },
  "environment": {
    "location": "沙漠沙丘",
    "time_of_day": "黄金时段",
    "atmosphere": "温暖、电影感、平静与混乱之间的戏剧性对比"
  },
  "lighting": {
    "type": "自然黄金时段阳光",
    "quality": "柔和温暖",
    "effects": [
      "飞扬沙粒上的柔和高光",
      "柔和的阴影",
      "电影感的青色和橙色色彩平衡"
    ]
  },
  "camera": {
    "angle": "低角度，电影感",
    "lens": "长焦镜头 ~85mm",
    "depth_of_field": "浅景深",
    "focus": {
      "foreground": "女性主体清晰对焦",
      "background": "卡车略带运动模糊"
    }
  },
  "color_grading": {
    "palette": [
      "暖米色沙子",
      "柔和的天空色调",
      "微妙的青色和橙色点缀"
    ],
    "style": "电影胶片感、自然、HDR"
  },
  "quality": {
    "resolution": "8K",
    "detail_level": "超高细节",
    "texture": "逼真的沙子、织物、皮肤和灰尘纹理",
    "grain": "微妙的胶片颗粒感",
    "rendering": "照片级真实感，无 CGI 痕迹"
  },
  "constraints": [
    "无卡通或插画风格",
    "无人工锐化",
    "无夸张效果",
    "保持自然肤色",
    "不要改变面部特征"
  ],
  "output_goal": "创作一张电影感、超现实的沙漠动作图像，前景中坐着一位平静自信的女性，身后一辆强劲的越野卡车在沙丘中爆裂穿行，强调对比、动感和电影感。"
}
```

## 来源备注
- 源站作者：𝗦𝗮𝗻𝗶𝗮
- 源站 UUID：vyHekKfU3N
- 源站分类：05_人物肖像与写实摄影

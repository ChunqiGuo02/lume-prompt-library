---
id: "interior-true-lock-relaxed-001"
title: "明星自拍真实感营造"
category: interior
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["自拍", "餐厅", "夜晚", "偶遇", "名人", "松弛", "写实", "暖光"]
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
  "metadata": {
    "prompt_version": "1.1.1",
    "generation_goal": "Photorealistic, believable celebrity encounter selfie",
    "determinism": {
      "pose_lock": true,
      "camera_lock": true,
      "anatomy_lock": true,
      "composition_lock": true,
      "perspective_lock": true
    },
    "realism_constraints": {
      "no_cartoony_proportions": true,
      "no_exaggerated_limb_length": true,
      "no_fisheye_distortion": true
    }
  },
  "subjects": [
    {
      "role": "Foreground subject",
      "description": {
        "gender_presentation": "Female-presenting",
        "expression": {
          "facial_emotion": "{"facial emotion" "Calm confidence"}",
          "details": {
            "eyes": "Relaxed, steady gaze toward the phone screen, lids naturally lowered",
            "eyebrows": "Neutral position, no exaggerated lift or tension",
            "mouth": "Soft, closed-lip smile or very slight parting, controlled and effortless",
            "jaw": "Relaxed with subtle definition, no tension"
          },
          "vibe": "Casual, self-assured, socially fluent — comfortable around celebrities",
          "avoid": [
            "Wide eyes",
            "Open-mouth excitement",
            "Raised eyebrows",
            "Overt surprise expressions"
          ]
        },
        "body_language": {
          "posture": "Upright but relaxed, shoulders loose",
          "energy": "Unbothered, composed, intentional",
          "intent": "Posing casually, as if this is a normal social moment"
        }
      }
    }
  ],
  "mood": "Effortless, grounded, cool, unmistakably real"
}

## 中文译文（源站提供）
```json
{
  "metadata": {
    "prompt_version": "1.1.1",
    "generation_goal": "逼真、可信的名人偶遇自拍",
    "determinism": {
      "pose_lock": true,
      "camera_lock": true,
      "anatomy_lock": true,
      "composition_lock": true,
      "perspective_lock": true
    },
    "realism_constraints": {
      "no_cartoony_proportions": true,
      "no_exaggerated_limb_length": true,
      "no_fisheye_distortion": true
    }
  },
  "subjects": [
    {
      "role": "前景主体",
      "description": {
        "gender_presentation": "女性化呈现",
        "expression": {
          "facial_emotion": "{\"facial emotion\" \"平静自信\"}",
          "details": {
            "eyes": "放松、稳定地凝视手机屏幕，眼睑自然下垂",
            "eyebrows": "中性位置，无夸张上扬或紧张",
            "mouth": "柔和、闭唇微笑或略微张开，克制而毫不费力",
            "jaw": "放松，略有轮廓，无紧张感"
          },
          "vibe": "随意、自信、善于社交——在名人面前泰然自若",
          "avoid": [
            "眼睛睁大",
            "张嘴兴奋",
            "眉毛上扬",
            "明显惊讶的表情"
          ]
        },
        "body_language": {
          "posture": "挺拔但放松，肩膀松弛",
          "energy": "从容不迫，镇定自若，有目的性",
          "intent": "随意摆姿势，仿佛这是一个普通的社交时刻"
        }
      }
    }
  ],
  "mood": "毫不费力、脚踏实地、酷炫、真实无疑"
}
```

## 来源备注
- 源站作者：Sienna
- 源站 UUID：X4KDWjh3LY
- 源站分类：05_人物肖像与写实摄影

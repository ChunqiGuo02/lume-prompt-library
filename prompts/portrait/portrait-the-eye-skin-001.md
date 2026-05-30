---
id: "portrait-the-eye-skin-001"
title: "超写实红瞳纹身女性面部特写生成提示词"
category: portrait
subcategory: "04_创意脑洞特效合成"
aesthetic: null
tags: ["写实", "特写", "纹身", "红眼", "辫子", "红色", "蓝色", "粉色"]
recommended_models: 
  - banana-pro
recommended_params:
  aspect_ratio: "2:3"
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
  "style": "ultra-realistic cinematic portrait with digital artistry",
  "aspect_ratio": "1:1",
  "identity_preservation": {
    "use_reference_image": true,
    "strict_identity_lock": true,
    "alter_face": false,
    "notes": "Preserve 100% of the woman’s facial structure, skin texture, eye shape, freckles, and natural features from the reference image. No beautification or facial alteration."
  },
  "subject": {
    "gender": "female",
    "ethnicity": "white",
    "framing": "extreme close-up facial crop",
    "composition_focus": [
      "one eye",
      "facial tattoos",
      "braided hair section"
    ],
    "hair": {
      "style": "intricate braid",
      "details": [
        "woven {"braid color 1" "turquoise-blue"} strands",
        "woven pink strands",
        "subtle gold decorative elements"
      ],
      "position": "left side of the frame dominating the composition"
    },
    "face_details": {
      "eye": {
        "color": "intense vivid red",
        "appearance": "highly detailed iris with reflective highlights"
      },
      "skin": {
        "texture": "natural, highly detailed",
        "features": [
          "freckles",
          "minor imperfections for realism"
        ]
      },
      "tattoos": {
        "colors": ["red", "black"],
        "style": "complex, fine-line designs with detailed shading",
        "placement": [
          "around the eye socket",
          "extending across the cheek"
        ],
        "symbol": {
          "color": "red",
          "description": "distinct red symbol or character on the cheek, clearly visible and contrasting with surrounding tattoos"
        }
      }
    },
    "expression": "neutral, intense, mysterious gaze"
  },
  "lighting": {
    "style": "dramatic and cinematic",
    "characteristics": [
      "soft shadows",
      "directional light emphasizing skin texture and tattoos",
      "high contrast around the eye"
    ]
  },
  "depth_of_field": {
    "type": "shallow",
    "focus_point": "eye and surrounding tattoos",
    "background": "softly blurred with no distinct environment"
  },
  "color_palette": {
    "dominant_colors": [
      "vibrant red",
      "turquoise blue",
      "pink",
      "natural skin tones",
      "dark tattoo blacks"
    ],
    "contrast": "high, visually striking"
  },
  "environment": {
    "context": "implied, non-specific",
    "description": "no clear background elements, allowing full focus on the subject’s face and details"
  },
  "quality": {
    "realism": "maximum photorealism",
    "detail_level": "extreme detail in skin, hair, tattoos, and eye texture",
    "execution": "high-end photography combined with subtle digital enhancement"
  },
  "constraints": [
    "No facial distortion",
    "No over-smoothing of skin",
    "No artificial filters",
    "No text or watermarks",
    "No background distractions"
  ],
  "output_goal": "Create an ultra-realistic, dra"

## 中文译文（源站提供）
```json
{
  "type": "image_generation_prompt",
  "style": "超现实电影级肖像，融合数字艺术风格",
  "aspect_ratio": "1:1",
  "identity_preservation": {
    "use_reference_image": true,
    "strict_identity_lock": true,
    "alter_face": false,
    "notes": "100% 保留参考图中女性的面部结构、皮肤纹理、眼睛形状、雀斑和自然特征。禁止美化或面部改动。"
  },
  "subject": {
    "gender": "女性",
    "ethnicity": "白种人",
    "framing": "面部特写，极度裁剪",
    "composition_focus": [
      "一只眼睛",
      "面部纹身",
      "编发部分"
    ],
    "hair": {
      "style": "精致的辫子",
      "details": [
        "编织的 {\"braid color 1\" \"turquoise-blue\"} 绿松石蓝色发丝",
        "编织的粉色发丝",
        "微妙的金色装饰元素"
      ],
      "position": "画面左侧，占据构图主导地位"
    },
    "face_details": {
      "eye": {
        "color": "强烈鲜艳的红色",
        "appearance": "高度细致的虹膜，带有反光高光"
      },
      "skin": {
        "texture": "自然，高度细致",
        "features": [
          "雀斑",
          "为求真实感而保留的细微瑕疵"
        ]
      },
      "tattoos": {
        "colors": ["红色", "黑色"],
        "style": "复杂、细线设计，带有细致的阴影",
        "placement": [
          "眼眶周围",
          "延伸至脸颊"
        ],
        "symbol": {
          "color": "红色",
          "description": "脸颊上独特的红色符号或字符，清晰可见并与周围纹身形成对比"
        }
      }
    },
    "expression": "中性、专注、神秘的凝视"
  },
  "lighting": {
    "style": "戏剧性且电影化",
    "characteristics": [
      "柔和的阴影",
      "定向光强调皮肤纹理和纹身",
      "眼睛周围高对比度"
    ]
  },
  "depth_of_field": {
    "type": "浅景深",
    "focus_point": "眼睛和周围纹身",
    "background": "柔和模糊，无明显环境"
  },
  "color_palette": {
    "dominant_colors": [
      "鲜艳的红色",
      "绿松石蓝色",
      "粉色",
      "自然肤色",
      "深色纹身黑色"
    ],
    "contrast": "高对比度，视觉冲击力强"
  },
  "environment": {
    "context": "暗示性，非特定",
    "description": "无清晰背景元素，使焦点完全集中在主体面部和细节上"
  },
  "quality": {
    "realism": "最大程度的超写实主义",
    "detail_level": "皮肤、头发、纹身和眼睛纹理的极致细节",
    "execution": "高端摄影结合微妙的数字增强"
  },
  "constraints": [
    "无面部扭曲",
    "无过度平滑皮肤",
    "无人工滤镜",
    "无文字或水印",
    "无背景干扰"
  ],
  "output_goal": "创作一幅超现实、戏剧性的"
}
```

## 来源备注
- 源站作者：𝗦𝗮𝗻𝗶𝗮
- 源站 UUID：NUCVlUI1rZ
- 源站分类：04_创意脑洞特效合成

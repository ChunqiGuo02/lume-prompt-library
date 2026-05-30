---
id: "portrait-the-true-urban-001"
title: "都市夜巷酷女孩写真"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["金发", "皮衣", "香烟", "城市", "小巷", "夜景", "砖墙", "电影感"]
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
  "image_generation": {
    "identity_requirements": {
      "face": {
        "preserve_original": true,
        "exact_match": true,
        "description": "Precisely maintain the subject’s original facial structure, proportions, and recognizable identity from the reference image."
      },
      "hair": {
        "preserve_original": true,
        "exact_match": true,
        "description": "Reproduce the subject’s hairstyle exactly as seen in the reference image — same length, parting, texture, and flow."
      }
    },

    "setting": {
      "location": "gritty neon-lit urban alleyway",
      "background": {
        "elements": [
          "harsh overhead alley light",
          "textured brick walls",
          "soft urban haze",
          "scattered pavement details"
        ],
        "description": "A moody, cinematic alley illuminated by a single bright overhead lamp, casting dramatic shadows and atmospheric glow."
      }
    },

    "scene": {
      "environment": {
        "type": "noir-inspired urban nightscape",
        "description": "The subject is placed in a dim, atmospheric alleyway with muted colors, soft haze, and glowing light bloom."
      },
      "effects": {
        "light_bloom": "strong glow from the overhead lamp creating a dreamy, diffused halo",
        "film_grain": "soft vintage grain giving a cinematic analog-film feel",
        "ambient_smoke": "thin wisps drifting through frame for added mood"
      }
    },

    "subject": {
      "pose": {
        "body_position": "crouching low near the alley wall, weight shifted slightly to one side",
        "hand_positions": {
          "right_hand": "holding a cigarette loosely near the ground",
          "left_hand": "resting relaxed or placed naturally for balance"
        },
        "camera_direction": "She faces the camera with a calm, cool, slightly defiant expression."
      },

      "clothing": {
        "outerwear": "dark leather or faux-leather jacket with subtle shine",
        "footwear": "dark boots appropriate for a street-style look",
        "details": "Realistic texture with specular highlights catching the alley lighting."
      },

      "expression": "moody, confident, slightly distant — a soft, cinematic stare."
    },

    "camera": {
      "aspect_ratio": "9:16 portrait",
      "style": "moody cinematic photography with shallow depth of field and analog-film aesthetics",
      "lighting": {
        "type": "harsh overhead alley light with soft ambient spill",
        "effects": [
          "glow and bloom around bright sources",
          "soft side shadows shaping the face",
          "slight greenish-teal urban tint"
        ]
      }
    },

    "aesthetic": {
      "mood": "gritty, atmospheric, intimate, cinematic",
      "style": [
        "neo-noir realism",
        "moody film-photography look",
        "urban night portraiture"
      ]
    }
  }
}

## 中文译文（源站提供）
```json
{
  "image_generation": {
    "identity_requirements": {
      "face": {
        "preserve_original": true,
        "exact_match": true,
        "description": "精确保持主体面部的原始结构、比例以及参考图像中可识别的特征。"
      },
      "hair": {
        "preserve_original": true,
        "exact_match": true,
        "description": "精确再现主体在参考图像中的发型——相同的长度、分缝、质地和流动感。"
      }
    },
    "setting": {
      "location": "霓虹灯闪烁的粗犷都市小巷",
      "background": {
        "elements": [
          "小巷上方刺眼的灯光",
          "有纹理的砖墙",
          "柔和的都市薄雾",
          "散落的路面细节"
        ],
        "description": "一条阴郁、电影感的小巷，由一盏明亮的顶灯照亮，投下戏剧性的阴影和富有氛围感的光芒。"
      }
    },
    "scene": {
      "environment": {
        "type": "黑色电影风格的都市夜景",
        "description": "主体置身于一条昏暗、富有氛围感的小巷中，色彩柔和，薄雾弥漫，光晕闪烁。"
      },
      "effects": {
        "light_bloom": "顶灯发出强烈的光晕，营造出梦幻、柔和的光环效果",
        "film_grain": "柔和的复古颗粒感，带来电影般的胶片质感",
        "ambient_smoke": "细薄的烟雾在画面中飘散，增添氛围感"
      }
    },
    "subject": {
      "pose": {
        "body_position": "低身蹲在小巷墙边，重心略微偏向一侧",
        "hand_positions": {
          "right_hand": "右手随意地拿着一支香烟，靠近地面",
          "left_hand": "左手放松或自然放置以保持平衡"
        },
        "camera_direction": "她面向镜头，表情平静、酷酷的，略带一丝不羁。"
      },
      "clothing": {
        "outerwear": "深色皮革或仿皮夹克，带有微妙的光泽",
        "footwear": "适合街头风格的深色靴子",
        "details": "逼真的纹理，高光部分捕捉到小巷的灯光。"
      },
      "expression": "忧郁、自信、略带疏离——一种柔和、电影般的凝视。"
    },
    "camera": {
      "aspect_ratio": "9:16 竖幅",
      "style": "情绪化的电影摄影，景深较浅，具有胶片美学",
      "lighting": {
        "type": "小巷上方刺眼的灯光与柔和的环境溢光",
        "effects": [
          "明亮光源周围的光晕和光斑",
          "柔和的侧影勾勒出面部轮廓",
          "略带绿青色的都市色调"
        ]
      }
    },
    "aesthetic": {
      "mood": "粗犷、富有氛围感、私密、电影感",
      "style": [
        "新黑色写实主义",
        "情绪化的胶片摄影风格",
        "都市夜景肖像"
      ]
    }
  }
}
```

## 来源备注
- 源站作者：Ditherly - Creative AI Hub
- 源站 UUID：Sp1bQkbtCP
- 源站分类：05_人物肖像与写实摄影

---
id: "portrait-film-couple-grid-001"
title: "生成黑白情侣胶片连拍照片"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["黑白", "情侣", "胶片", "欧美女性", "亲密", "写真", "人像", "复古"]
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
  "generation_request": {
    "meta_data": {
      "task_type": "bw_couple_contact_sheet_intimate",
      "language": "en",
      "priority": "highest",
      "version": "v1.0_BW_FILM_COUPLE_GRID"
    },

    "input": {
      "mode": "text_to_image",
      "notes": "Create a 2x3 black and white film contact sheet grid of the same young adult couple. Identity must remain perfectly consistent across all frames. Intimate, playful, candid studio moments. No text, no watermark."
    },

    "output": {
      "aspect_ratio": "3:4",
      "resolution": "ultra_high",
      "num_images": 1,
      "layout": {
        "type": "grid",
        "rows": 3,
        "cols": 2,
        "gutter": "thick_black_film_border",
        "outer_border": "black_frame"
      },
      "sharpness": "filmic_crisp",
      "grain": "true_35mm_film"
    },

    "scene": {
      "environment": "minimal white studio backdrop",
      "lighting": {
        "style": "soft frontal diffused light",
        "contrast": "medium",
        "shadow": "gentle natural falloff",
        "look": "documentary photo booth aesthetic"
      },
      "camera": {
        "shot_type": "tight portrait",
        "framing": "head and shoulders",
        "lens": "50mm natural perspective",
        "depth_of_field": "moderate, both faces sharp"
      },
      "color_grade": {
        "mode": "black_and_white",
        "contrast": "classic film contrast",
        "blacks": "rich but not crushed",
        "highlights": "soft rolloff"
      }
    },

    "subject": {
      "couple": {
        "woman": {
          "hair": "short bob with straight bangs",
          "wardrobe": "white thin strap top",
          "makeup": "natural, subtle glow",
          "expression_variations": [
            "laughing with eyes closed",
            "smiling softly",
            "playful wink",
            "leaning into partner"
          ]
        },
        "man": {
          "hair": "medium-length curly hair, slightly messy",
          "wardrobe": "black jacket over dark shirt",
          "expression_variations": [
            "smiling gently",
            "kissing her cheek",
            "leaning forehead close",
            "hugging from behind"
          ]
        }
      },

      "pose_variations": [
        "woman laughing while man nuzzles her cheek",
        "both looking at camera closely side by side",
        "woman hugging man tightly",
        "intimate kiss with hands on face",
        "playful embrace hiding faces",
        "man kissing woman on cheek while she smiles"
      ]
    },

    "effects": {
      "film_border": {
        "enabled": true,
        "look": "analog contact sheet frame",
        "edge_wear": "subtle"
      },
      "film_grain": "authentic",
      "micro_contrast": "slight"
    },

    "negative_prompt": "color image, oversharpened, oversmoothed skin, bad anatomy, extra fingers, deformed hands, inconsistent faces between frames, text overlay, wate"

## 中文译文（源站提供）
```json
{
  "generation_request": {
    "meta_data": {
      "task_type": "bw_couple_contact_sheet_intimate",
      "language": "en",
      "priority": "highest",
      "version": "v1.0_BW_FILM_COUPLE_GRID"
    },
    "input": {
      "mode": "text_to_image",
      "notes": "创建一张 2x3 的黑白胶片印样网格，展示同一对年轻情侣。所有画面中的人物身份必须保持完美一致。捕捉亲密、俏皮、自然的影棚瞬间。无文字，无水印。"
    },
    "output": {
      "aspect_ratio": "3:4",
      "resolution": "ultra_high",
      "num_images": 1,
      "layout": {
        "type": "grid",
        "rows": 3,
        "cols": 2,
        "gutter": "thick_black_film_border",
        "outer_border": "black_frame"
      },
      "sharpness": "filmic_crisp",
      "grain": "true_35mm_film"
    },
    "scene": {
      "environment": "极简白色影棚背景",
      "lighting": {
        "style": "柔和正面漫射光",
        "contrast": "中等",
        "shadow": "柔和自然衰减",
        "look": "纪录片照相亭美学"
      },
      "camera": {
        "shot_type": "特写肖像",
        "framing": "头部和肩部",
        "lens": "50mm 自然视角",
        "depth_of_field": "适中，两张脸都清晰"
      },
      "color_grade": {
        "mode": "black_and_white",
        "contrast": "经典胶片对比度",
        "blacks": "浓郁但不死黑",
        "highlights": "柔和过渡"
      }
    },
    "subject": {
      "couple": {
        "woman": {
          "hair": "短波波头，齐刘海",
          "wardrobe": "白色细吊带上衣",
          "makeup": "自然，微妙光泽",
          "expression_variations": [
            "闭眼大笑",
            "温柔微笑",
            "俏皮眨眼",
            "依偎伴侣"
          ]
        },
        "man": {
          "hair": "中长卷发，略显凌乱",
          "wardrobe": "深色衬衫外搭黑色夹克",
          "expression_variations": [
            "温柔微笑",
            "亲吻她的脸颊",
            "额头靠近",
            "从背后拥抱"
          ]
        }
      },
      "pose_variations": [
        "女人大笑，男人轻蹭她的脸颊",
        "两人并肩紧密看向镜头",
        "女人紧紧拥抱男人",
        "亲密接吻，手抚脸庞",
        "俏皮拥抱，遮住脸庞",
        "男人亲吻女人脸颊，女人微笑"
      ]
    },
    "effects": {
      "film_border": {
        "enabled": true,
        "look": "模拟印样边框",
        "edge_wear": "微妙磨损"
      },
      "film_grain": "真实",
      "micro_contrast": "轻微"
    },
    "negative_prompt": "彩色图像，过度锐化，皮肤过度平滑，糟糕的人体结构，多余的手指，变形的手，帧间面部不一致，文字叠加，水印"
  }
}
```

## 来源备注
- 源站作者：Özge Döner
- 源站 UUID：Age7K7dZ2u
- 源站分类：05_人物肖像与写实摄影

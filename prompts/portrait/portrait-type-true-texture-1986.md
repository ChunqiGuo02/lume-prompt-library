---
id: portrait-type-true-texture-1986
title: "编辑级牛仔布肖像，保留面部特征"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["时尚", "摄影", "肖像", "坐姿", "极简", "米色", "羊羔绒", "夹克"]
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
language: mixed
created_at: 2026-05-30
version: "1.0.0"
related_to: []
---

# 正文 prompt
```json
{
  "photo": {
    "type": "社论时尚摄影",
    "quality": "8k 超逼真",
    "lens": "50mm 浅景深",
    "composition": "中景肖像，社论构图，无文字，无水印",
    "face": {
      "preserve_original": true,
      "reference_match": true,
      "description": "模特的脸部特征、比例、妆容风格和表情必须与提供的参考图片 100% 相同。"
    },
    "model_pose": {
      "position": "坐姿",
      "legs": "一条腿弯曲的放松姿势",
      "hands": "一只手托着头",
      "expression": "平静，极简主义情绪"
    },
    "wardrobe": {
      "jacket": {
        "type": "米色羊羔绒夹克",
        "texture": "蓬松、毛茸茸、有触感"
      },
      "shirt": {
        "type": "牛仔衬衫",
        "layered": true
      },
      "pants": {
        "type": "浅蓝色牛仔裤"
      },
      "boots": {
        "type": "黑色切尔西皮靴",
        "texture": "光滑抛光皮革"
      },
      "socks": {
        "color": "米色"
      }
    },
    "textures": {
      "emphasis": [
        "蓬松的羊羔绒纤维",
        "粗犷的牛仔面料",
        "光滑的皮靴",
        "可见的接缝",
        "可见的缝线"
      ]
    },
    "environment": {
      "backdrop": "干净的浅灰色影棚背景",
      "lighting": {
        "style": "柔和自然影棚灯光",
        "key_light": "柔和的侧面主光",
        "fill_light": "微妙的补光",
        "shadows": "柔和的阴影"
      }
    },
    "color_grade": {
      "type": "电影级",
      "balance": "中性暖冷色调平衡"
    }
  }
}
```

## 来源备注
- 源站作者：Zara
- 源站 UUID：4d18b52a3b
- 源站分类：05_人物肖像与写实摄影

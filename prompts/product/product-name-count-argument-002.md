---
id: "product-name-count-argument-002"
title: "复古风格生物概念设定参考表"
category: product
subcategory: "06_图文排版视觉传达"
aesthetic: japanese-zen-garden
tags: ["黑猫", "哥斯拉", "奇幻", "复古", "图鉴", "设定稿", "蓝色", "背鳍"]
recommended_models: []
recommended_params:
  aspect_ratio: "2:3"
  quality: null
  style_strength: null
sample_outputs: []
quality_tier: B
author: "ChunqiGuo02"
source: "Leader Prompt Gallery (https://www.leaderai.top/mid-api/lab/image_prompt/index.html)"
language: en
created_at: 2026-05-30
version: "1.0.0"
related_to: []
---

# 正文 prompt
{
  "type": "creature concept art reference sheet",
  "style": "vintage field guide, parchment paper background, realistic stylized illustrations",
  "subject": {
    "name": "{argument name=\"creature name\" default=\"Gojinya\"}",
    "japanese_name": "{argument name=\"japanese name\" default=\"ごじにゃ\"}",
    "base_animal": "{argument name=\"base animal\" default=\"Black Cat\"}",
    "hybrid_element": "{argument name=\"hybrid element\" default=\"Godzilla\"}",
    "features": "black fur, glowing blue dorsal spines, yellow eyes"
  },
  "layout": {
    "header": { "text": ["{argument name=\"japanese name\" default=\"ごじにゃ\"}", "{argument name=\"creature name\" default=\"Gojinya\"}"], "style": "blue glowing font" },
    "main_portrait": "full-body, standing on hind legs in kaiju pose, smoke/fire at feet, human silhouette scale",
    "text_sections": [
      { "title": "SPECIES", "bullet_count": 4 },
      { "title": "ABILITIES", "bullet_count": 2 },
      { "title": "TRAITS", "bullet_count": 2 },
      { "title": "LIKES", "bullet_count": 4 },
      { "title": "DISLIKES", "bullet_count": 4 },
      { "title": "LOKE", "bullet_count": 3 },
      { "title": "DISLIKES", "bullet_count": 3 }
    ],
    "action_panels": [
      "top right inset: headshot firing blue atomic breath",
      "bottom left inset: full body firing blue atomic breath, destroying rocks"
    ],
    "sketches": {
      "title": "SKETCHES",
      "count": 5,
      "items": ["sitting cat", "normal paw pads", "glowing blue paw pads", "roaring head", "happy head with music note"]
    },
    "additional_poses": {
      "count": 2,
      "items": ["standing pose with scale lines", "sitting profile pose"]
    },
    "color_palette": {
      "swatch_count": 5,
      "colors": ["orange", "black", "grey", "light blue", "bright blue"]
    }
  }
}

## 中文译文（源站提供）
{
  "type": "生物概念艺术参考图",
  "style": "复古野外指南，羊皮纸背景，写实风格插画",
  "subject": {
    "name": "{argument name=\"creature name\" default=\"Gojinya\"}",
    "japanese_name": "{argument name=\"japanese name\" default=\"ごじにゃ\"}",
    "base_animal": "{argument name=\"base animal\" default=\"黑猫\"}",
    "hybrid_element": "{argument name=\"hybrid element\" default=\"哥斯拉\"}",
    "features": "黑色皮毛，发光的蓝色背鳍，黄色眼睛"
  },
  "layout": {
    "header": { "text": ["{argument name=\"japanese name\" default=\"ごじにゃ\"}", "{argument name=\"creature name\" default=\"Gojinya\"}"], "style": "蓝色发光字体" },
    "main_portrait": "全身像，以怪兽姿态后腿站立，脚下有烟雾/火焰，附带人类剪影比例尺",
    "text_sections": [
      { "title": "物种", "bullet_count": 4 },
      { "title": "能力", "bullet_count": 2 },
      { "title": "特征", "bullet_count": 2 },
      { "title": "喜好", "bullet_count": 4 },
      { "title": "厌恶", "bullet_count": 4 },
      { "title": "习性", "bullet_count": 3 },
      { "title": "厌恶", "bullet_count": 3 }
    ],
    "action_panels": [
      "右上角插图：发射蓝色原子吐息的头部特写",
      "左下角插图：全身发射蓝色原子吐息，摧毁岩石"
    ],
    "sketches": {
      "title": "草图",
      "count": 5,
      "items": ["坐姿猫", "普通肉垫", "发光的蓝色肉垫", "咆哮的头部", "带有音符的开心头部"]
    },
    "additional_poses": {
      "count": 2,
      "items": ["带比例尺的站立姿势", "侧面坐姿"]
    },
    "color_palette": {
      "swatch_count": 5,
      "colors": ["橙色", "黑色", "灰色", "浅蓝色", "亮蓝色"]
    }
  }
}

## 来源备注
- 源站作者：コタのAI紀行
- 源站 UUID：HtrO53Ua2E
- 源站分类：06_图文排版视觉传达

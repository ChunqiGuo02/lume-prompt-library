---
id: "landscape-map-type-the-001"
title: "高细节世界地形图"
category: landscape
subcategory: "06_图文排版视觉传达"
aesthetic: null
tags: ["世界地图", "地形图", "写实风", "地理", "科普", "测绘", "高清", "蓝色"]
recommended_models: []
recommended_params:
  aspect_ratio: "3:2"
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
  "type": "highly detailed cartographic world map",
  "style": "{argument name=\"color palette\" default=\"realistic topographical and bathymetric colors\"}",
  "map_features": {
    "terrain": "shaded relief showing mountains, valleys, and plains in greens, browns, and whites",
    "oceans": "depth shading in various tones of blue, with lighter blues for continental shelves and darker blues for deep trenches",
    "grid": "latitude and longitude lines spanning the entire map",
    "labels": "major continents, countries, oceans, and seas clearly labeled in serif and sans-serif typography"
  },
  "layout": {
    "overlays": [
      {
        "type": "compass rose",
        "position": "mid-left, over the Pacific Ocean",
        "description": "classic 8-point nautical compass"
      },
      {
        "type": "legend",
        "position": "bottom left",
        "title": "{argument name=\"map title\" default=\"EARTH\"}",
        "subtitle": "{argument name=\"map type\" default=\"Physical Map\"}",
        "contents": "elevation color key, map symbols, and distance scale"
      }
    ],
    "bottom_panels": {
      "count": 5,
      "position": "horizontal row along the bottom edge",
      "labels": [
        "THE WORLD",
        "LARGEST COUNTRIES",
        "LONGEST MOUNTAIN RANGES",
        "LARGEST OCEANS",
        "LONGEST RIVERS"
      ]
    }
  }
}

## 中文译文（源站提供）
{
  "type": "高度详细的制图世界地图",
  "style": "{argument name=\"color palette\" default=\"逼真的地形和测深色彩\"}",
  "map_features": {
    "terrain": "阴影浮雕，以绿色、棕色和白色显示山脉、山谷和平原",
    "oceans": "不同色调的蓝色深度阴影，浅蓝色代表大陆架，深蓝色代表深海沟",
    "grid": "覆盖整个地图的经纬线",
    "labels": "主要大洲、国家、海洋和海域，以衬线和无衬线字体清晰标注"
  },
  "layout": {
    "overlays": [
      {
        "type": "罗盘玫瑰",
        "position": "中左侧，位于太平洋上方",
        "description": "经典的 8 向航海罗盘"
      },
      {
        "type": "图例",
        "position": "左下角",
        "title": "{argument name=\"map title\" default=\"地球\"}",
        "subtitle": "{argument name=\"map type\" default=\"物理地图\"}",
        "contents": "海拔颜色键、地图符号和距离比例尺"
      }
    ],
    "bottom_panels": {
      "count": 5,
      "position": "沿底部的水平行",
      "labels": [
        "世界概况",
        "最大国家",
        "最长山脉",
        "最大海洋",
        "最长河流"
      ]
    }
  }
}

## 来源备注
- 源站作者：すぐる | ChatGPTガチ勢 𝕏
- 源站 UUID：YljvGcVwZY
- 源站分类：06_图文排版视觉传达

---
id: "landscape-the-surface-effect-001"
title: "四元素从照片中溢出的超现实视觉效果"
category: landscape
subcategory: "04_创意脑洞特效合成"
aesthetic: null
tags: ["超现实", "创意", "拼贴", "宝丽来", "水", "熔岩", "沙子", "雪"]
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
  "panels": {
    "top_left": {
      "element": "WATER",
      "visuals": {
        "text_label": "WATER",
        "spill_effect": {
          "details": "Caustics, refraction of light through the clear stream, wet darkening effect on the wood, small splashing droplets",
          "physics": "Fluid dynamics, low viscosity liquid pouring",
          "interaction": "Water breaching the bottom paper edge, forming a continuous stream",
          "surface_contact": "Creating a spreading puddle on the wood, surface tension visible at edges"
        },
        "photo_content": "Turbulent blue ocean surface with white foam"
      }
    },
    "top_right": {
      "element": "LAVA",
      "visuals": {
        "text_label": "LAVA",
        "spill_effect": {
          "details": "Smoke and steam wisps rising (volumetric effects), incandescence, heat haze distortion, charred edges where lava meets wood, black solidifying rock floating in the liquid magma",
          "physics": "High viscosity fluid simulation, thick and gooey",
          "interaction": "Molten rock dripping heavily from the frame",
          "surface_contact": "Pooling on the table, glowing intense orange/red"
        },
        "photo_content": "Molten magma with cooling black crust"
      }
    },
    "bottom_left": {
      "element": "SAND",
      "visuals": {
        "text_label": "SAND",
        "spill_effect": {
          "details": "Individual grains visible in macro focus, golden light catching facets of the sand, dust particles in the air, seamless transition from the 2D dune image to the 3D falling stream",
          "physics": "Granular particle simulation, dry flow",
          "interaction": "Sand pouring like an hourglass from the photo edge",
          "surface_contact": "Forming a conical pile on the wooden surface"
        },
        "photo_content": "Golden desert dunes with ripple textures"
      }
    },
    "bottom_right": {
      "element": "SNOW",
      "visuals": {
        "text_label": "SNOW",
        "spill_effect": {
          "details": "Crystalline structure of snowflakes, glistening highlights, high contrast between the cold white snow and the warm brown wood, soft diffused shadows, texture of packed powder versus loose flakes",
          "physics": "Soft body powder simulation, clumping snow",
          "interaction": "Tumbling snow clumps falling from the frame",
          "surface_contact": "Accumulating in a fluffy mound on the table"
        },
        "photo_content": "Pristine white snow field, soft texture"
      }
    }
  },
  "composition": {
    "type": "2x2 Grid Collage",
    "aspect_ratio": "1:1 square",
    "overall_theme": "Surreal transition between 2D photography and 3D reality, featuring elemental physics simulations spilling from Polaroid frames.",
    "camera_settings": {
      "lighting": "Golden hour natural sunlight, warm backlighting causing rim light on the hands and elements",
      "perspective": "Clos"

## 中文译文（源站提供）
```json
{
  "panels": {
    "top_left": {
      "element": "WATER",
      "visuals": {
        "text_label": "水",
        "spill_effect": {
          "details": "焦散、光线穿过清澈水流的折射、木材上的湿润变暗效果、细小的飞溅水滴",
          "physics": "流体动力学、低粘度液体倾泻",
          "interaction": "水流突破底部纸张边缘，形成连续的水柱",
          "surface_contact": "在木材上形成扩散的水坑，边缘可见表面张力"
        },
        "photo_content": "波涛汹涌的蓝色海面，带有白色泡沫"
      }
    },
    "top_right": {
      "element": "LAVA",
      "visuals": {
        "text_label": "熔岩",
        "spill_effect": {
          "details": "烟雾和蒸汽缭绕（体积效果）、白炽光、热气模糊变形、熔岩与木材接触处的焦黑边缘、漂浮在液态岩浆中的黑色凝固岩石",
          "physics": "高粘度流体模拟，浓稠黏腻",
          "interaction": "熔融岩石从画框中大量滴落",
          "surface_contact": "在桌面上汇聚成池，发出强烈的橙红色光芒"
        },
        "photo_content": "带有冷却黑色硬壳的熔融岩浆"
      }
    },
    "bottom_left": {
      "element": "SAND",
      "visuals": {
        "text_label": "沙",
        "spill_effect": {
          "details": "微距聚焦下可见单个沙粒、金色光线捕捉沙粒的切面、空气中的尘埃颗粒、从 2D 沙丘图像到 3D 流淌沙流的无缝过渡",
          "physics": "颗粒模拟、干燥流动",
          "interaction": "沙子像沙漏一样从照片边缘倾泻而下",
          "surface_contact": "在木质表面形成圆锥形沙堆"
        },
        "photo_content": "带有波纹纹理的金色沙漠沙丘"
      }
    },
    "bottom_right": {
      "element": "SNOW",
      "visuals": {
        "text_label": "雪",
        "spill_effect": {
          "details": "雪花的晶体结构、闪烁的高光、寒冷的白雪与温暖的棕色木材之间的高对比度、柔和的漫反射阴影、压实雪与松散雪片的质感",
          "physics": "软体粉末模拟、雪块聚结",
          "interaction": "翻滚的雪块从画框中落下",
          "surface_contact": "在桌面上堆积成蓬松的雪堆"
        },
        "photo_content": "原始的白色雪原，质地柔软"
      }
    }
  },
  "composition": {
    "type": "2x2 网格拼贴",
    "aspect_ratio": "1:1 正方形",
    "overall_theme": "2D 摄影与 3D 现实之间的超现实过渡，特色是从拍立得相框中溢出的元素物理模拟。",
    "camera_settings": {
      "lighting": "黄金时段自然阳光，暖色背光在手和元素上形成轮廓光",
      "perspective": "近"
    }
  }
}
```

## 来源备注
- 源站作者：Chandan Singh
- 源站 UUID：LmiLsXBljQ
- 源站分类：04_创意脑洞特效合成

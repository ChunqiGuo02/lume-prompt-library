---
id: "portrait-pixel-monochrome-bit-001"
title: "Monochrome LCD 效果"
category: portrait
subcategory: "03_创意广告品牌设计"
aesthetic: null
tags: ["像素风", "复古", "怀旧", "绿色", "单色", "低饱和", "可爱", "Q版"]
recommended_models: 
  - banana-pro
recommended_params:
  aspect_ratio: "1:1"
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
  "styleAesthetic": {
    "title": "Monochrome Pixel Mosaic",
    "overallVibe": "Retro mobile-screen pixel art—clean, minimal, and slightly nostalgic",
    "renderingStyle": "1-bit square-pixel grid with optional dithering to suggest tone and depth",
    "viewAngle": "Orthographic front view (no perspective distortion)",
    "pixelation": {
      "pixelSize": 6,                     // width/height of each square in px (tweak per output res)
      "pixelShape": "perfect square",
      "gridAlignment": "uniform, no gaps",
      "ditheringPattern": "Floyd–Steinberg or ordered 2×2"
    },
    "colorPalette": {
      "pixelColor": "#000000",            // foreground pixels
      "backgroundColor": "#8CA17C",       // muted pastel green sample; replace to recolor
      "paletteType": "1-bit monochrome"
    },
    "lightingAndShadows": {
      "pixelDropShadow": {
        "enabled": true,
        "offsetX": 0,
        "offsetY": 1,
        "blur": 2,
        "opacity": 0.25
      },
    },
    "materialsAndTextures": [
      {
        "type": "Matte LCD surface",
        "description": "Flat display with very fine grain/noise to simulate old LCD texture",
        "noiseIntensity": 0.01
      }
    ],
    "typography": {
      "fontFamily": "monospaced bitmap",
      "weight": "bold",
      "capitalization": "uppercase",
      "letterSpacing": 0,
      "align": "center"
    },
    "postProcessing": {
      "edgeSmoothing": "none (hard pixel edges preserved)",
      "filmGrain": 0.01,
      "overallContrast": 1.0
    },
    "adaptabilityHints": {
      "applyToPhotographs": "posterize → 1-bit → downsample to pixel grid → apply dithering",
      "applyToVectorText": "render glyphs to bitmap grid using same pixel size and drop shadow",
      "safeResize": "always scale by whole-number multiples to keep squares crisp"
    }
  }
}

## 中文译文（源站提供）
```json
{
  "styleAesthetic": {
    "title": "单色像素马赛克",
    "overallVibe": "复古的手机屏幕像素艺术风格——简洁、极简且略带怀旧感",
    "renderingStyle": "1位像素组成的网格，可选择使用抖动效果来模拟色调和深度",
    "viewAngle": "正交正面视图（无透视变形）",
    "pixelation": {
      "pixelSize": 6,                     // 每个像素的宽度/高度（根据输出分辨率进行调整）
      "pixelShape": "完美的正方形",
      "gridAlignment": "均匀排列，无间隙",
      "ditheringPattern": "Floyd–Steinberg 算法或有序 2×2 纵列循环",
    },
    "colorPalette": {
      "pixelColor": "#000000",            // 前景像素的颜色
      "backgroundColor": "#8CA17C",       // 微弱的淡绿色背景；可替换为其他颜色
      "paletteType": "1位单色",
    },
    "lightingAndShadows": {
      "pixelDropShadow": {
        "enabled": true,
        "offsetX": 0,
        "offsetY": 1,
        "blur": 2,
        "opacity": 0.25
      },
    },
    "materialsAndTextures": [
      {
        "type": "哑光 LCD 表面",
        "description": "具有非常细微纹理的平面显示效果，以模仿旧款 LCD 的质感",
        "noiseIntensity": 0.01
      }
    ],
    "typography": {
      "fontFamily": "等宽位图字体",
      "weight": "bold",              // 加粗字体
      "capitalization": "uppercase",      // 使用大写
      "letterSpacing": 0,             // 字符间距为 0
      "align": "center"           // 文字居中显示
    },
    "postProcessing": {
      "edgeSmoothing": "无（保留清晰的像素边缘）",
      "filmGrain": 0.01,              // 添加薄膜质感效果
      "overallContrast": 1.0            // 综合对比度为 1.0
    },
    "adaptabilityHints": {
      "applyToPhotographs": "先进行海报化处理 → 转换为 1位像素格式 → 下采样成网格结构 → 应用抖动效果",
      "applyToVectorText": "将矢量文本渲染到相同像素大小的网格上，并添加阴影效果",
      "safeResize": "始终按整数倍调整尺寸以保持像素网格的清晰度"
    }
  }
}
```

## 来源备注
- 源站作者：hckmstrrahul
- 源站 UUID：403bb5bcd7
- 源站分类：03_创意广告品牌设计

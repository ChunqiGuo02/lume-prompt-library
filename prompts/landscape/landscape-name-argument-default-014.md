---
id: "landscape-name-argument-default-014"
title: "化妆品广告海报生成"
category: landscape
subcategory: "06_图文排版视觉传达"
aesthetic: null
tags: ["气垫", "美妆", "新品", "日系", "清新", "简约", "温柔", "防晒"]
recommended_models: []
recommended_params:
  aspect_ratio: "4:3"
  quality: null
  style_strength: null
sample_outputs: []
quality_tier: B
author: "ChunqiGuo02"
source: "Leader Prompt Gallery (https://www.leaderai.top/mid-api/lab/image_prompt/index.html)"
language: mixed
created_at: 2026-05-30
version: "1.0.0"
related_to: []
---

# 正文 prompt
{
  "type": "2x3 grid of cosmetic product advertisement banners",
  "product": "{argument name=\"product name\" default=\"Glow Fit Cushion\"}",
  "layout": {
    "grid": "2 rows by 3 columns",
    "sections": [
      {
        "position": "top-left",
        "style": "soft pink beauty portrait",
        "visuals": "young Asian woman with glowing skin holding the compact",
        "title": "{argument name=\"main catchphrase\" default=\"素肌が、いちばんきれい。\"}",
        "subtitle": "うるツヤクッション誕生",
        "badges": ["NEW"],
        "features_count": 4,
        "feature_labels": ["うるおい", "ツヤ感", "薄づき", "長時間キープ"]
      },
      {
        "position": "top-middle",
        "style": "natural beige minimalist",
        "visuals": "beige compact resting on a textured stone block with a foundation smear",
        "title": "自然体で、肌きれい。",
        "subtitle": "素肌を生かすナチュラルカバー",
        "badges": ["NEW"],
        "features_count": 4,
        "feature_labels": ["ナチュラルカバー", "うるおい続く", "軽いつけ心地", "崩れにくい"]
      },
      {
        "position": "top-right",
        "style": "lilac dreamy glow",
        "visuals": "purple compact on a reflective surface with a glowing heart-shaped light reflection",
        "title": "光をまとって、透明感つづく。",
        "subtitle": "#水光肌クッション",
        "badges": ["NEW"],
        "features_count": 3,
        "feature_labels": ["トーンアップ仕上げ", "うるツヤ水光肌", "{argument name=\"sun protection factor\" default=\"SPF50+ PA+++\"}"]
      },
      {
        "position": "bottom-left",
        "style": "clean white modern",
        "visuals": "floating pink compact with a foundation smear",
        "title": "MY BEST BASE",
        "subtitle": "毎日使いたくなるうるツヤクッション",
        "hashtags": ["#ナチュラルカバー", "#うるおいキープ", "#崩れにくい"],
        "badges": ["NEW"],
        "features_count": 4,
        "feature_labels": ["自然なツヤ", "軽やかフィット", "うるおい", "長時間キープ"]
      },
      {
        "position": "bottom-middle",
        "style": "bright pink pop-art",
        "visuals": "bright pink compact surrounded by sparkles, stars, and floating text bubbles",
        "title": "{argument name=\"pop catchphrase\" default=\"盛れツヤ肌、つづく！\"}",
        "subtitle": "#うるツヤクッション",
        "badges": ["NEW!"],
        "features_count": 4,
        "feature_labels": ["うるおい IN", "ツヤ感 UP", "{argument name=\"sun protection factor\" default=\"SPF50+ PA+++\"}", "崩れにくい"],
        "bottom_banner": "かわいく、ラクに、毎日キレイ。"
      },
      {
        "position": "bottom-right",
        "style": "elegant gold luxury",
        "visuals": "gold compact resting on draped silk fabric with small white flowers",
        "title": "{argument name=\"elegant catchphrase\" default=\"上質な素肌感を、ひと塗りで。\"}",
        "subtitle": "大人のためのツヤ肌クッション",
        "badges": ["NEW"],
        "features_count": 4,
        "feature_labels": ["上品なツヤ", "高密着カバー", "うるおいキープ", "{argument name=\"sun protection factor\" default=\"SPF50+ PA+++\"}"]
      }
    ]
  }
}

## 中文译文（源站提供）
{
  "type": "2x3 grid of cosmetic product advertisement banners",
  "product": "{argument name=\"product name\" default=\"Glow Fit Cushion\"}",
  "layout": {
    "grid": "2 rows by 3 columns",
    "sections": [
      {
        "position": "top-left",
        "style": "soft pink beauty portrait",
        "visuals": "young Asian woman with glowing skin holding the compact",
        "title": "{argument name=\"main catchphrase\" default=\"素肌が、いちばんきれい。\"}",
        "subtitle": "うるツヤクッション誕生",
        "badges": ["NEW"],
        "features_count": 4,
        "feature_labels": ["うるおい", "ツヤ感", "薄づき", "長時間キープ"]
      },
      {
        "position": "top-middle",
        "style": "natural beige minimalist",
        "visuals": "beige compact resting on a textured stone block with a foundation smear",
        "title": "自然体で、肌きれい。",
        "subtitle": "素肌を生かすナチュラルカバー",
        "badges": ["NEW"],
        "features_count": 4,
        "feature_labels": ["ナチュラルカバー", "うるおい続く", "軽いつけ心地", "崩れにくい"]
      },
      {
        "position": "top-right",
        "style": "lilac dreamy glow",
        "visuals": "purple compact on a reflective surface with a glowing heart-shaped light reflection",
        "title": "光をまとって、透明感つづく。",
        "subtitle": "#水光肌クッション",
        "badges": ["NEW"],
        "features_count": 3,
        "feature_labels": ["トーンアップ仕上げ", "うるツヤ水光肌", "{argument name=\"sun protection factor\" default=\"SPF50+ PA+++\"}"]
      },
      {
        "position": "bottom-left",
        "style": "clean white modern",
        "visuals": "floating pink compact with a foundation smear",
        "title": "MY BEST BASE",
        "subtitle": "毎日使いたくなるうるツヤクッション",
        "hashtags": ["#ナチュラルカバー", "#うるおいキープ", "#崩れにくい"],
        "badges": ["NEW"],
        "features_count": 4,
        "feature_labels": ["自然なツヤ", "軽やかフィット", "うるおい", "長時間キープ"]
      },
      {
        "position": "bottom-middle",
        "style": "bright pink pop-art",
        "visuals": "bright pink compact surrounded by sparkles, stars, and floating text bubbles",
        "title": "{argument name=\"pop catchphrase\" default=\"盛れツヤ肌、つづく！\"}",
        "subtitle": "#うるツヤクッション",
        "badges": ["NEW!"],
        "features_count": 4,
        "feature_labels": ["うるおい IN", "ツヤ感 UP", "{argument name=\"sun protection factor\" default=\"SPF50+ PA+++\"}", "崩れにくい"],
        "bottom_banner": "かわいく、ラクに、毎日キレイ。"
      },
      {
        "position": "bottom-right",
        "style": "elegant gold luxury",
        "visuals": "gold compact resting on draped silk fabric with small white flowers",
        "title": "{argument name=\"elegant catchphrase\" default=\"上質な素肌感を、ひと塗りで。\"}",
        "subtitle": "大人のためのツヤ肌クッション",
        "badges": ["NEW"],
        "features_count": 4,
        "feature_labels": ["上品なツヤ", "高密着カバー", "うるおいキープ", "{argument name=\"sun protection factor\" default=\"SPF50+ PA+++\"}"]
      }
    ]
  }
}

## 来源备注
- 源站作者：かなまる
- 源站 UUID：oxlPzaRwh5
- 源站分类：06_图文排版视觉传达

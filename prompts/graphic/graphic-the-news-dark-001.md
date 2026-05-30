---
id: "graphic-the-news-dark-001"
title: "AI新闻播报场景生成"
category: graphic
subcategory: "06_图文排版视觉传达"
aesthetic: japanese-zen-garden
tags: ["新闻", "主播", "演播室", "科技", "AI", "蓝色", "白色", "日本"]
recommended_models: []
recommended_params:
  aspect_ratio: "16:9"
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
A photorealistic television news broadcast scene featuring a 【young Japanese female with shoulder-length dark hair wearing a light beige blouse】 and a small black lapel microphone, sitting at a news desk and speaking directly to the camera. The studio background is modern with blue and white lighting and a blurred nighttime city skyline on the right. In the top left corner, there is a dark blue graphic with the white text "【NEWS TODAY】". To the anchor's left is a large presentation monitor displaying a news graphic with a white background and light blue network nodes. The monitor features a dark blue "最新情報" tag, the text "【OpenAIの新しい画像生成モデル】", a large prominent headline "【「GPT-image-2」】", the text "がリリース", an OpenAI logo, and a dark blue bottom banner reading "より高精細に より正確に 画像生成の可能性がさらに広がる". Across the bottom of the entire screen is a news ticker lower third with a dark blue "速報" box and the scrolling text "【OpenAI 画期的な新画像生成モデル「GPT-image-2」をリリース】".

## 中文译文（源站提供）
{
  "type": "电视新闻广播布局",
  "anchor": {
    "appearance": "{argument name=\"anchor appearance\" default=\"年轻的日本女性新闻主播，留着齐肩深色短发\"}",
    "attire": "浅米色衬衫，佩戴小型翻领麦克风",
    "pose": "坐在桌前，双手交叠，面向前方"
  },
  "studio_environment": "现代新闻演播室，配有蓝色发光面板，背景为夜间城市天际线",
  "graphics": {
    "top_left_bug": {
      "style": "深蓝色矩形",
      "text": "{argument name=\"channel logo\" default=\"NEWS TODAY\"}"
    },
    "presentation_monitor": {
      "location": "主播后方左侧",
      "badge": "最新情報",
      "subtitle": "{argument name=\"subheadline\" default=\"OpenAIの新しい画像生成モデル\"}",
      "title": "{argument name=\"main headline\" default=\"「GPT-image-2」\"}",
      "suffix": "がリリース",
      "icon": "OpenAI logo",
      "bottom_bar": "より高精細に より正確に 画像生成の可能性がさらに広がる"
    },
    "lower_thirds_ticker": {
      "badge": "速報",
      "headline": "{argument name=\"ticker text\" default=\"OpenAI 画期的な新画像生成モデル「GPT-image-2」をリリース\"}"
    }
  }
}

## 来源备注
- 源站作者：IT navi
- 源站 UUID：SlwMaWAa7d
- 源站分类：06_图文排版视觉传达

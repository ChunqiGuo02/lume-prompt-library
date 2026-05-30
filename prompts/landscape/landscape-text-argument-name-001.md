---
id: "landscape-text-argument-name-001"
title: "Claude Code技巧分享会海报"
category: landscape
subcategory: "06_图文排版视觉传达"
aesthetic: japanese-zen-garden
tags: ["现代", "撞色", "斜切", "海报", "讲座", "编码", "技术", "洋红"]
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
{
  "type": "webinar promotional banner",
  "style": "modern, bold typography, high contrast, diagonal split layout",
  "background": {
    "pattern": "faint grid of 40 sequential numbers from 01 to 40 spanning the entire canvas",
    "left_color": "vibrant magenta",
    "right_color": "black",
    "split_style": "sharp diagonal line from top center to bottom left"
  },
  "left_section": {
    "top_label": "{argument name=\"top label\" default=\"noteメンバーシップ限定ウェビナー\"}",
    "title": "{argument name=\"main title\" default=\"Claude Code\"}",
    "highlight_box_1": {
      "text": "{argument name=\"highlight text 1\" default=\"知らないと\"}",
      "style": "black text on white skewed rectangular background"
    },
    "highlight_box_2": {
      "text": "{argument name=\"highlight text 2\" default=\"損する\"}",
      "style": "black text on white skewed rectangular background"
    },
    "bottom_text": "40のワザ"
  },
  "right_section": {
    "top_right_label": "KAWAI LAB Vol.5",
    "subject": "portrait of a young Japanese woman, shoulder-length dark hair with bangs, wearing a black crew neck sweater, neutral expression, looking at camera",
    "middle_badge": {
      "text": "先着 100名 限定",
      "style": "white text with vertical line accent"
    },
    "bottom_right_date": "{argument name=\"date and time\" default=\"4.24 Fri. 12:10 - 12:50\"}"
  }
}

## 中文译文（源站提供）
{
  "type": "网络研讨会宣传横幅",
  "style": "现代风格，醒目排版，高对比度，对角线分割布局",
  "background": {
    "pattern": "覆盖整个画布的 40 个从 01 到 40 的序列数字组成的淡网格",
    "left_color": "鲜艳的洋红色",
    "right_color": "黑色",
    "split_style": "从顶部中心到左下角的锐利对角线"
  },
  "left_section": {
    "top_label": "{argument name=\"top label\" default=\"note 会员专属网络研讨会\"}",
    "title": "{argument name=\"main title\" default=\"Claude Code\"}",
    "highlight_box_1": {
      "text": "{argument name=\"highlight text 1\" default=\"不知道就会\"}",
      "style": "白色倾斜矩形背景上的黑色文字"
    },
    "highlight_box_2": {
      "text": "{argument name=\"highlight text 2\" default=\"吃亏\"}",
      "style": "白色倾斜矩形背景上的黑色文字"
    },
    "bottom_text": "40 个技巧"
  },
  "right_section": {
    "top_right_label": "KAWAI LAB Vol.5",
    "subject": "一位年轻日本女性的肖像，齐肩深色短发配刘海，身穿黑色圆领毛衣，表情自然，注视镜头",
    "middle_badge": {
      "text": "限前 100 名",
      "style": "带有垂直线条装饰的白色文字"
    },
    "bottom_right_date": "{argument name=\"date and time\" default=\"4 月 24 日 周五 12:10 - 12:50\"}"
  }
}

## 来源备注
- 源站作者：KAWAI
- 源站 UUID：ldc5d8IBBp
- 源站分类：06_图文排版视觉传达

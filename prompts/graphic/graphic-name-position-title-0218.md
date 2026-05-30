---
id: graphic-name-position-title-0218
title: "MacBook Neo技术概览"
category: graphic
subcategory: "06_图文排版视觉传达"
aesthetic: null
tags: ["手绘", "技术图", "笔记本", "苹果", "硬件", "拆解", "信息图", "科技"]
recommended_models: []
recommended_params:
  aspect_ratio: "1:1"
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
  "type": "technical overview infographic",
  "style": "{argument name=\"visual style\" default=\"hand-drawn technical sketch with clean typography\"}",
  "product": {
    "name": "{argument name=\"product name\" default=\"MACBOOK NEO\"}",
    "subtitle": "14-INCH {argument name=\"processor model\" default=\"M3 PRO\"} - TECHNICAL OVERVIEW"
  },
  "layout": {
    "centerpiece": {
      "description": "isometric view of an opened laptop revealing internal hardware components like dual fans, copper heat pipes, battery cells, and logic board",
      "callouts_count": 9,
      "callout_labels": [
        "01 1080p CAMERA SYSTEM",
        "02 DISPLAY ASSEMBLY",
        "03 THERMAL SYSTEM",
        "04 SENSOR SUITE",
        "05 CONNECTIVITY BOARD",
        "06 BATTERY PACK",
        "07 {argument name=\"main component\" default=\"APPLE M3 PRO CHIP\"}",
        "08 FORCE TOUCH TRACKPAD",
        "09 SPEAKER SYSTEM"
      ]
    },
    "sections": [
      {
        "title": "Header Text",
        "position": "top-left",
        "content": "Marketing blurb and 5-bullet specification list"
      },
      {
        "title": "Legend",
        "position": "top-center",
        "content": "4 color-coded arrows indicating {argument name=\"accent colors\" default=\"red, blue, orange, green\"} flow lines for Power, Data, Thermal, and Sensors"
      },
      {
        "title": "MATERIALS & QUANTITY",
        "position": "top-right",
        "type": "table",
        "rows_count": 7,
        "columns": ["#", "MATERIAL", "QTY", "NOTES"]
      },
      {
        "title": "DIMENSIONS & WEIGHT",
        "position": "mid-right",
        "content": "Top and side views of closed laptop with measurements"
      },
      {
        "title": "CROSS-SECTION (SIDE VIEW)",
        "position": "bottom-left (top half)",
        "content": "Side profile showing internal component layout with 6 labels"
      },
      {
        "title": "REAR I/O (LEFT TO RIGHT)",
        "position": "bottom-left (bottom half)",
        "content": "Side profile showing 6 ports"
      },
      {
        "title": "DATA / POWER FLOW DIAGRAM (TOP VIEW)",
        "position": "bottom-right",
        "content": "Wireframe top-down view with colored flow lines, legend, and scale bar"
      }
    ]
  }
}

## 中文译文（源站提供）
{
  "type": "technical overview infographic",
  "style": "{argument name=\"visual style\" default=\"hand-drawn technical sketch with clean typography\"}",
  "product": {
    "name": "{argument name=\"product name\" default=\"MACBOOK NEO\"}",
    "subtitle": "14-INCH {argument name=\"processor model\" default=\"M3 PRO\"} - TECHNICAL OVERVIEW"
  },
  "layout": {
    "centerpiece": {
      "description": "isometric view of an opened laptop revealing internal hardware components like dual fans, copper heat pipes, battery cells, and logic board",
      "callouts_count": 9,
      "callout_labels": [
        "01 1080p CAMERA SYSTEM",
        "02 DISPLAY ASSEMBLY",
        "03 THERMAL SYSTEM",
        "04 SENSOR SUITE",
        "05 CONNECTIVITY BOARD",
        "06 BATTERY PACK",
        "07 {argument name=\"main component\" default=\"APPLE M3 PRO CHIP\"}",
        "08 FORCE TOUCH TRACKPAD",
        "09 SPEAKER SYSTEM"
      ]
    },
    "sections": [
      {
        "title": "Header Text",
        "position": "top-left",
        "content": "Marketing blurb and 5-bullet specification list"
      },
      {
        "title": "Legend",
        "position": "top-center",
        "content": "4 color-coded arrows indicating {argument name=\"accent colors\" default=\"red, blue, orange, green\"} flow lines for Power, Data, Thermal, and Sensors"
      },
      {
        "title": "MATERIALS & QUANTITY",
        "position": "top-right",
        "type": "table",
        "rows_count": 7,
        "columns": ["#", "MATERIAL", "QTY", "NOTES"]
      },
      {
        "title": "DIMENSIONS & WEIGHT",
        "position": "mid-right",
        "content": "Top and side views of closed laptop with measurements"
      },
      {
        "title": "CROSS-SECTION (SIDE VIEW)",
        "position": "bottom-left (top half)",
        "content": "Side profile showing internal component layout with 6 labels"
      },
      {
        "title": "REAR I/O (LEFT TO RIGHT)",
        "position": "bottom-left (bottom half)",
        "content": "Side profile showing 6 ports"
      },
      {
        "title": "DATA / POWER FLOW DIAGRAM (TOP VIEW)",
        "position": "bottom-right",
        "content": "Wireframe top-down view with colored flow lines, legend, and scale bar"
      }
    ]
  }
}

## 来源备注
- 源站作者：Ethan
- 源站 UUID：ZIZHuBnSYl
- 源站分类：06_图文排版视觉传达

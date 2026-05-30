---
id: graphic-title-fvg-argument-0161
title: "FVG交易策略完全解析"
category: graphic
subcategory: "06_图文排版视觉传达"
aesthetic: null
tags: ["专业", "干净", "蓝白", "金融", "交易", "投资", "外汇", "K线"]
recommended_models: []
recommended_params:
  aspect_ratio: "9:16"
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
  "type": "financial trading educational infographic",
  "style": "clean, professional, corporate blue and white color scheme",
  "header": {
    "background": "dark blue stock market chart with glowing candlesticks",
    "top_left_text": "FXトレーダーのための実践テクニック特集",
    "main_title": "{argument name=\"main title\" default=\"FVG\"}",
    "subtitle": "{argument name=\"topic subtitle\" default=\"〈Fair Value Gap〉を完全解説\"}",
    "quote": "{argument name=\"english quote\" default=\"Find the Imbalance, Trade the Edge.\"}",
    "badge": "dark blue hexagon with text"
  },
  "layout": {
    "sections": [
      {
        "title": "{argument name=\"section 1 title\" default=\"1 FVGとは？\"}",
        "type": "candlestick diagrams",
        "count": 2,
        "labels": ["強気のFVG (ブルーFVG)", "弱気のFVG (オレンジFVG)"],
        "description": "diagrams showing 3 candles with a gap between the 1st and 3rd"
      },
      {
        "title": "{argument name=\"section 2 title\" default=\"2 なぜFVGは機能するのか？\"}",
        "type": "process flow with icons",
        "count": 4,
        "labels": ["大口の注文が集中", "注文が薄い価格帯が生まれる", "機関投資家が再度訪れる", "ギャップが埋められやすい"],
        "description": "horizontal flow connected by arrows"
      },
      {
        "title": "3 FVGを使ったトレード手法",
        "type": "trading strategy chart and list",
        "elements": {
          "chart": "candlestick chart showing entry, stop loss, and take profit zones",
          "numbered_steps_count": 5,
          "bottom_checklist_count": 4
        }
      },
      {
        "title": "4 注意点",
        "type": "warning points with icons",
        "count": 3,
        "icons": ["magnifying glass", "clock", "network nodes"]
      }
    ],
    "footer": {
      "title": "まとめ",
      "background": "dark blue",
      "content": "summary text block"
    }
  }
}

## 中文译文（源站提供）
{
  "type": "金融交易教育信息图",
  "style": "简洁、专业、企业蓝白配色",
  "header": {
    "background": "带有发光 K 线图的深蓝色股市图表",
    "top_left_text": "外汇交易员的实战技巧专题",
    "main_title": "{argument name=\"main title\" default=\"FVG\"}",
    "subtitle": "{argument name=\"topic subtitle\" default=\"FVG (Fair Value Gap) 完全解析\"}",
    "quote": "{argument name=\"english quote\" default=\"Find the Imbalance, Trade the Edge.\"}",
    "badge": "带有文字的深蓝色六边形"
  },
  "layout": {
    "sections": [
      {
        "title": "{argument name=\"section 1 title\" default=\"1 什么是 FVG？\"}",
        "type": "K 线图",
        "count": 2,
        "labels": ["看涨 FVG (蓝色 FVG)", "看跌 FVG (橙色 FVG)"],
        "description": "展示 3 根 K 线且第 1 根与第 3 根之间存在缺口的图表"
      },
      {
        "title": "{argument name=\"section 2 title\" default=\"2 为什么 FVG 有效？\"}",
        "type": "带图标的流程图",
        "count": 4,
        "labels": ["大额订单集中", "产生流动性匮乏的价格区间", "机构投资者再次介入", "缺口容易被回补"],
        "description": "由箭头连接的水平流程图"
      },
      {
        "title": "3 基于 FVG 的交易策略",
        "type": "交易策略图表与列表",
        "elements": {
          "chart": "显示入场点、止损位和止盈区的 K 线图",
          "numbered_steps_count": 5,
          "bottom_checklist_count": 4
        }
      },
      {
        "title": "4 注意事项",
        "type": "带图标的警告点",
        "count": 3,
        "icons": ["放大镜", "时钟", "网络节点"]
      }
    ],
    "footer": {
      "title": "总结",
      "background": "深蓝色",
      "content": "总结文本块"
    }
  }
}

## 来源备注
- 源站作者：小野です a.k.a おの the Happiness
- 源站 UUID：UHfkttYECe
- 源站分类：06_图文排版视觉传达

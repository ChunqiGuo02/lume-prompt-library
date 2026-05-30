---
id: graphic-title-name-count-0589
title: "宇宙引力主题UI设计规范"
category: graphic
subcategory: "06_图文排版视觉传达"
aesthetic: null
tags: ["UI设计", "暗黑模式", "宇宙主题", "设计系统", "黑金配色", "未来感", "科技感", "发光元素"]
recommended_models: []
recommended_params:
  aspect_ratio: null
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
  "type": "UI Design System",
  "theme": "dark mode, space-inspired, glowing accents",
  "header": {
    "label": "DESIGN SYSTEM",
    "title": "{argument name=\"system name\" default=\"COSMIC GRAVITY\"}",
    "subtitle": "{argument name=\"theme description\" default=\"A Design Language Inspired by the Universe.\"}"
  },
  "layout": {
    "left_column": [
      {
        "title": "COLOR",
        "count": 7,
        "items": [
          {"name": "Cosmic Black", "hex": "#050507"},
          {"name": "Deep Space", "hex": "#0E0F14"},
          {"name": "Soft White", "hex": "#F5F6F8"},
          {"name": "{argument name=\"primary accent color\" default=\"Stardust Gold\"}", "hex": "#F5D28A"},
          {"name": "Night Purple", "hex": "#1A1C2A"},
          {"name": "Dusk Blue", "hex": "#0F1B2A"},
          {"name": "Nebula Teal", "hex": "#0E1F22"}
        ]
      },
      {
        "title": "GRADIENT",
        "count": 1,
        "description": "horizontal bar showing a dark-to-light-to-dark cosmic glow"
      },
      {
        "title": "TYPOGRAPHY",
        "font": "{argument name=\"font name\" default=\"Space Grotesk\"}",
        "hierarchy_count": 4,
        "levels": ["H1 Cosmic Light", "H2 Explore More", "Body Celestial Text", "Caption Orbit Info"]
      }
    ],
    "main_column": [
      {
        "title": "UI COMPONENTS",
        "subsections": [
          {"title": "BUTTON", "count": 3, "labels": ["EXPLORE (Primary)", "CANCEL (Secondary)", "MORE (Ghost)"]},
          {"title": "SLIDER", "count": 1, "value": "72%"},
          {"title": "TOGGLE", "count": 2, "states": ["Off", "On"]},
          {"title": "TAGS", "count": 3, "labels": ["BLACK HOLE", "JUPITER", "ORBIT"]}
        ]
      },
      {
        "title": "CARDS",
        "count": 3,
        "items": [
          {"title": "{argument name=\"card subject\" default=\"JUPITER\"}", "subtitle": "ORBIT ARCHIVE", "image": "Jupiter planet"},
          {"title": "BLACK HOLE", "subtitle": "COSMIC EVENT", "image": "Black hole with accretion disk"},
          {"title": "DISTANCE", "value": "778.3 M km", "image": "Concentric orbital rings"}
        ]
      },
      {
        "title": "DATA DISPLAY",
        "count": 3,
        "items": [
          {"title": "ENERGY", "type": "circular progress ring", "value": "87%"},
          {"title": "SIGNAL STRENGTH", "type": "line graph with glowing nodes", "value": "42.6 dB"},
          {"title": "COSMIC NOISE", "type": "audio player UI"}
        ]
      },
      {
        "title": "ICON",
        "count": 7,
        "labels": ["Home", "Planet", "Sparkle", "Signal", "Folder", "Heart", "User"]
      }
    ],
    "bottom_row": [
      {
        "title": "VISUAL ELEMENTS",
        "count": 5,
        "labels": ["BLACK HOLE", "GRAVITY RING", "LIGHT GLOW", "NEBULA DUST", "GLASS SURFACE"]
      }
    ]
  }
}

## 中文译文（源站提供）
{
  "type": "UI 设计系统",
  "theme": "深色模式，太空灵感，发光装饰",
  "header": {
    "label": "设计系统",
    "title": "{argument name=\"system name\" default=\"COSMIC GRAVITY\"}",
    "subtitle": "{argument name=\"theme description\" default=\"A Design Language Inspired by the Universe.\"}"
  },
  "layout": {
    "left_column": [
      {
        "title": "色彩",
        "count": 7,
        "items": [
          {"name": "宇宙黑", "hex": "#050507"},
          {"name": "深空", "hex": "#0E0F14"},
          {"name": "柔白", "hex": "#F5F6F8"},
          {"name": "{argument name=\"primary accent color\" default=\"Stardust Gold\"}", "hex": "#F5D28A"},
          {"name": "夜紫", "hex": "#1A1C2A"},
          {"name": "暮蓝", "hex": "#0F1B2A"},
          {"name": "星云青", "hex": "#0E1F22"}
        ]
      },
      {
        "title": "渐变",
        "count": 1,
        "description": "展示从暗到亮再到暗的宇宙光晕水平条"
      },
      {
        "title": "排版",
        "font": "{argument name=\"font name\" default=\"Space Grotesk\"}",
        "hierarchy_count": 4,
        "levels": ["H1 宇宙之光", "H2 探索更多", "正文 天体文本", "标注 轨道信息"]
      }
    ],
    "main_column": [
      {
        "title": "UI 组件",
        "subsections": [
          {"title": "按钮", "count": 3, "labels": ["探索 (主要)", "取消 (次要)", "更多 (幽灵)"]},
          {"title": "滑块", "count": 1, "value": "72%"},
          {"title": "开关", "count": 2, "states": ["关", "开"]},
          {"title": "标签", "count": 3, "labels": ["黑洞", "木星", "轨道"]}
        ]
      },
      {
        "title": "卡片",
        "count": 3,
        "items": [
          {"title": "{argument name=\"card subject\" default=\"JUPITER\"}", "subtitle": "轨道档案", "image": "木星行星"},
          {"title": "黑洞", "subtitle": "宇宙事件", "image": "带吸积盘的黑洞"},
          {"title": "距离", "value": "7.783 亿公里", "image": "同心轨道环"}
        ]
      },
      {
        "title": "数据展示",
        "count": 3,
        "items": [
          {"title": "能量", "type": "圆形进度环", "value": "87%"},
          {"title": "信号强度", "type": "带发光节点的折线图", "value": "42.6 dB"},
          {"title": "宇宙噪声", "type": "音频播放器 UI"}
        ]
      },
      {
        "title": "图标",
        "count": 7,
        "labels": ["主页", "行星", "闪光", "信号", "文件夹", "心形", "用户"]
      }
    ],
    "bottom_row": [
      {
        "title": "视觉元素",
        "count": 5,
        "labels": ["黑洞", "引力环", "光晕", "星云尘埃", "玻璃表面"]
      }
    ]
  }
}

## 来源备注
- 源站作者：cheaty
- 源站 UUID：1lgHMsaRmW
- 源站分类：06_图文排版视觉传达

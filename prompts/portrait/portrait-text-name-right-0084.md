---
id: portrait-text-name-right-0084
title: "OPUS与CODEX最佳拍档"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["皮克斯", "卡通", "编程", "开发", "代码", "程序员", "拍档", "激进"]
recommended_models: []
recommended_params:
  aspect_ratio: "5:4"
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
  "type": "3D Pixar-style animated illustration",
  "composition": "Two contrasting characters sitting at a desk, split-screen aesthetic with messy left side and neat right side",
  "floating_text": {
    "left": "{argument name=\"left character name\" default=\"OPUS 4.6 THINKING\"} in glowing red handwritten font",
    "right": "{argument name=\"right character name\" default=\"CODEX\"} in glowing blue neon font"
  },
  "characters": [
    {
      "position": "left",
      "persona": "Rebellious, aggressive coder",
      "appearance": "Messy brown hair, confident smirk, cigarette in mouth, neck tattoo 'NO RULES'",
      "clothing": "Black leather jacket with spikes, black t-shirt with text '{argument name=\"left shirt text\" default=\"FAST. BOLD. BROKEN. BUT IT WORKS... SOMETIMES.\"}'",
      "pose": "Arm wrapped around the right character, holding a black can reading 'DEPLOY OR DIE'"
    },
    {
      "position": "right",
      "persona": "Organized, steady coder",
      "appearance": "Neat brown hair, round glasses, nervous but compliant expression",
      "clothing": "Cozy grey cardigan with a tree logo, collared shirt, sleeve patch reading 'READ. PLAN. REFACTOR. DELIVER.'",
      "pose": "Holding a white mug with text '{argument name=\"right mug text\" default=\"CODE. THINK. IMPROVE.\"}' with both hands"
    }
  ],
  "environment": {
    "left_side": {
      "vibe": "chaotic and messy",
      "props": [
        "Computer monitor showing colorful code",
        "Black mug reading 'BUGS ARE FEATURES'",
        "5 crumpled pieces of paper",
        "1 sticky note on desk reading 'TODO: 完成一半的用户系统。。。算了明天再说。'"
      ],
      "whiteboard": {
        "title": "OPUS 的作风:",
        "bullet_points_count": 5,
        "sticky_notes_count": 2,
        "sticky_notes_text": ["先实现再说！", "一个文件搞定全部！"]
      }
    },
    "right_side": {
      "vibe": "structured and neat",
      "props": [
        "Open notebook with a 6-item checklist titled '执行计划:' and a yellow sticky note '让代码变得更好。'",
        "Stack of 5 dark books with spine text: 'PRODUCT REQUIREMENTS.md', 'ARCHITECTURE.md', '.claude', 'CODEBASE ANALYSIS.md', 'REFACTOR PLAN.md'",
        "Neat architectural blueprint on the desk"
      ],
      "whiteboard": {
        "title": "CODEX 的作风:",
        "bullet_points_count": 5,
        "sticky_notes_count": 3,
        "sticky_notes_text": ["先读文档理解架构", "制定计划再开始", "顺便把这段代码重构一下"]
      }
    }
  },
  "foreground": {
    "plaque": "Metal nameplate on the front edge of the desk with engraved text '{argument name=\"plaque text\" default=\"最佳拍档 一个激进，一个稳重，刚好互补。♡\"}'"
  }
}

## 中文译文（源站提供）
{
  "type": "3D 皮克斯风格动画插画",
  "composition": "两个性格迥异的角色坐在书桌前，采用分屏美学，左侧凌乱，右侧整洁",
  "floating_text": {
    "left": "{argument name=\"left character name\" default=\"OPUS 4.6 THINKING\"} 使用发光的红色手写字体",
    "right": "{argument name=\"right character name\" default=\"CODEX\"} 使用发光的蓝色霓虹字体"
  },
  "characters": [
    {
      "position": "左侧",
      "persona": "叛逆、激进的程序员",
      "appearance": "凌乱的棕色头发，自信的坏笑，嘴里叼着烟，脖子上有“NO RULES”纹身",
      "clothing": "带有铆钉的黑色皮夹克，黑色 T 恤上印有“{argument name=\"left shirt text\" default=\"FAST. BOLD. BROKEN. BUT IT WORKS... SOMETIMES.\"}”",
      "pose": "手臂搭在右侧角色身上，手里拿着写有“DEPLOY OR DIE”的黑色易拉罐"
    },
    {
      "position": "右侧",
      "persona": "有条理、稳重的程序员",
      "appearance": "整洁的棕色头发，圆框眼镜，表情紧张但顺从",
      "clothing": "舒适的灰色开衫，带有树木标志，衬衫领口，袖口贴片写着“READ. PLAN. REFACTOR. DELIVER.”",
      "pose": "双手捧着写有“{argument name=\"right mug text\" default=\"CODE. THINK. IMPROVE.\"}”的白色马克杯"
    }
  ],
  "environment": {
    "left_side": {
      "vibe": "混乱且凌乱",
      "props": [
        "显示着彩色代码的电脑显示器",
        "写有“BUGS ARE FEATURES”的黑色马克杯",
        "5 张揉皱的纸团",
        "桌上贴着 1 张便签，写着“TODO: 完成一半的用户系统。。。算了明天再说。”"
      ],
      "whiteboard": {
        "title": "OPUS 的作风:",
        "bullet_points_count": 5,
        "sticky_notes_count": 2,
        "sticky_notes_text": ["先实现再说！", "一个文件搞定全部！"]
      }
    },
    "right_side": {
      "vibe": "结构化且整洁",
      "props": [
        "打开的笔记本，上面有 6 项清单，标题为“执行计划:”，并贴有一张黄色便签“让代码变得更好。”",
        "一叠 5 本深色书籍，书脊文字为：“PRODUCT REQUIREMENTS.md”、“ARCHITECTURE.md”、“.claude”、“CODEBASE ANALYSIS.md”、“REFACTOR PLAN.md”",
        "桌上放着整齐的架构蓝图"
      ],
      "whiteboard": {
        "title": "CODEX 的作风:",
        "bullet_points_count": 5,
        "sticky_notes_count": 3,
        "sticky_notes_text": ["先读文档理解架构", "制定计划再开始", "顺便把这段代码重构一下"]
      }
    }
  },
  "foreground": {
    "plaque": "书桌前缘的金属铭牌，刻有文字“{argument name=\"plaque text\" default=\"最佳拍档 一个激进，一个稳重，刚好互补。♡\"}”"
  }
}

## 来源备注
- 源站作者：长歌
- 源站 UUID：24vZwVZE7W
- 源站分类：05_人物肖像与写实摄影

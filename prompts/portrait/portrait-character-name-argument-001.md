---
id: "portrait-character-name-argument-001"
title: "生成角色互动搞笑漫画"
category: portrait
subcategory: "06_图文排版视觉传达"
aesthetic: null
tags: ["漫画", "二次元", "搞笑", "兔耳", "王室", "绯闻", "爆笑", "愤怒"]
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
  "type": "vertical comic strip",
  "header": "{argument name=\"comic title\" default=\"ガセがバズって限界まで笑ううさ王様とブチギレるクロ\"}",
  "characters": [
    {
      "name": "{argument name=\"character 1 name\" default=\"クロ\"}",
      "appearance": "black hair, blue eyes, dark gothic military uniform, silver accents",
      "role": "straight man, easily angered"
    },
    {
      "name": "{argument name=\"character 2 name\" default=\"うさ王様\"}",
      "appearance": "white hair, white rabbit ears, blue eyes, ornate white royal outfit, fur collar",
      "role": "laughing hysterically"
    }
  ],
  "layout": {
    "panel_count": 5,
    "panels": [
      {
        "number": "1",
        "scene": "Character 1 shows a tablet to Character 2. Right side displays a social media feed with 3 distinct posts discussing a {argument name=\"social media topic\" default=\"royal bunny scandal\"}.",
        "dialogue_bubbles": 3
      },
      {
        "number": "2",
        "scene": "Character 2 laughing hysterically with large floating text effects. Character 1 looks annoyed with an anger vein symbol.",
        "dialogue_bubbles": 3
      },
      {
        "number": "3",
        "scene": "Character 2 pointing and laughing. Character 1 looks furious, holding the tablet.",
        "dialogue_bubbles": 3
      },
      {
        "number": "4",
        "scene": "Character 1 speaking angrily with intense expression. Character 2 laughing with head thrown back.",
        "dialogue_bubbles": 4
      },
      {
        "label": "{argument name=\"bonus panel title\" default=\"おまけ\"}",
        "scene": "Character 1 looks exhausted. Character 2 still laughing. A helmeted guard is partially visible on the far left.",
        "dialogue_bubbles": 3
      }
    ]
  },
  "style": "high-quality anime illustration, detailed character designs, expressive emotions, manga-style speech bubbles and sound effects"
}

## 中文译文（源站提供）
{
  "type": "竖版漫画",
  "header": "{argument name=\"comic title\" default=\"因假新闻爆火而笑到极限的兔国王与暴怒的 Kuro\"}",
  "characters": [
    {
      "name": "{argument name=\"character 1 name\" default=\"Kuro\"}",
      "appearance": "黑发，蓝眼，深色哥特式军装，银色装饰",
      "role": "吐槽役，易怒"
    },
    {
      "name": "{argument name=\"character 2 name\" default=\"兔国王\"}",
      "appearance": "白发，白色兔耳，蓝眼，华丽的白色王室服装，毛领",
      "role": "笑得歇斯底里"
    }
  ],
  "layout": {
    "panel_count": 5,
    "panels": [
      {
        "number": "1",
        "scene": "角色 1 向角色 2 展示平板电脑。右侧显示社交媒体信息流，其中有 3 条关于 {argument name=\"social media topic\" default=\"兔国王丑闻\"} 的讨论贴。",
        "dialogue_bubbles": 3
      },
      {
        "number": "2",
        "scene": "角色 2 歇斯底里地大笑，带有巨大的悬浮文字特效。角色 1 看起来很恼火，额头出现青筋符号。",
        "dialogue_bubbles": 3
      },
      {
        "number": "3",
        "scene": "角色 2 指着对方大笑。角色 1 看起来非常愤怒，手里拿着平板电脑。",
        "dialogue_bubbles": 3
      },
      {
        "number": "4",
        "scene": "角色 1 表情激烈地愤怒发言。角色 2 后仰大笑。",
        "dialogue_bubbles": 4
      },
      {
        "label": "{argument name=\"bonus panel title\" default=\"番外\"}",
        "scene": "角色 1 看起来精疲力竭。角色 2 仍在笑。最左侧隐约可见一名戴头盔的卫兵。",
        "dialogue_bubbles": 3
      }
    ]
  },
  "style": "高质量动漫插画，精细的角色设计，富有表现力的情绪，漫画风格的对话气泡和音效"
}

## 来源备注
- 源站作者：さつき＠AIお絵描き(うさぎ好き）
- 源站 UUID：VvUzhNc1c2
- 源站分类：06_图文排版视觉传达

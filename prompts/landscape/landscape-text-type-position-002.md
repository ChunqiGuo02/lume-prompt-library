---
id: "landscape-text-type-position-002"
title: "暗黑奇幻重生漫画页面"
category: landscape
subcategory: "06_图文排版视觉传达"
aesthetic: null
tags: ["漫画", "暗黑", "奇幻", "银发", "蓝眼", "巨龙", "魔法", "重生"]
recommended_models: []
recommended_params:
  aspect_ratio: "2:3"
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
  "type": "full-color manga page",
  "genre": "dark fantasy",
  "style": "high-quality anime illustration, dramatic lighting, cinematic composition",
  "character": {
    "appearance": "{argument name=\"hair color\" default=\"long white hair\"} with black ribbons, {argument name=\"eye color\" default=\"glowing blue eyes\"}, wearing a black gothic coat with a cross-shaped zipper pull"
  },
  "layout": {
    "format": "vertical comic page with 7 distinct horizontal panel tiers",
    "panels": [
      {
        "tier": 1,
        "description": "Large top panel. Character looking down with eyes closed.",
        "elements": [
          {"type": "title_logo", "position": "top right", "text": "{argument name=\"main title\" default=\"再起動の令嬢 Re:Birth Log\"}"},
          {"type": "text_box", "position": "top left", "text": "{argument name=\"opening text\" default=\"私は——死んだはずだった。\"}"}
        ]
      },
      {
        "tier": 2,
        "description": "Narrow horizontal panel. Extreme close-up of the character's glowing eye.",
        "elements": [
          {"type": "text_box", "position": "right", "text": "目を覚ますと、そこは見知らぬ世界。"}
        ]
      },
      {
        "tier": 3,
        "description": "Montage panel showing a gothic castle, a roaring dragon, and the character from behind.",
        "elements": [
          {"type": "text_box", "position": "left", "text": "魔法、オーラ、そして——ドラゴン。"}
        ]
      },
      {
        "tier": 4,
        "description": "Character looking downcast in a dark, ruined forest.",
        "elements": [
          {"type": "text_box", "position": "left", "text": "しかも、この身体は……貴族でありながら、“役立たず”と呼ばれている。"}
        ]
      },
      {
        "tier": 5,
        "description": "Split panel. Left side shows a sad profile. Right side shows a determined close-up with glowing eyes.",
        "elements": [
          {"type": "text_box", "position": "left", "text": "力もない。知性もない。ゴミ同然の存在。"},
          {"type": "text_box", "position": "center right", "text": "——そう、思われているだけだ。"}
        ]
      },
      {
        "tier": 6,
        "description": "Abstract magical panel. Left shows a glowing blue spade symbol in a magic circle. Right shows a glowing digital-style dialogue box.",
        "elements": [
          {"type": "text_box", "position": "center", "text": "封じられた力。そして、私の中に残る“記憶”。"},
          {"type": "glowing_text_box", "position": "right", "text": "「契約しろ」"}
        ]
      },
      {
        "tier": 7,
        "description": "Large bottom panel. Character looking forward confidently with a smirk.",
        "elements": [
          {"type": "text_box", "position": "top left", "text": "……いいだろう。"},
          {"type": "text_box", "position": "mid left", "text": "この手札、全部使ってやる。"},
          {"type": "text_box", "position": "bottom right", "text": "{argument name=\"closing text\" default=\"私は——もう、あの“セレナ”じゃない。\"}"}
        ]
      }
    ]
  }
}

## 中文译文（源站提供）
{
  "type": "全彩漫画页面",
  "genre": "暗黑奇幻",
  "style": "高质量动漫插画，戏剧性光影，电影级构图",
  "character": {
    "appearance": "{argument name=\"hair color\" default=\"长白发\"}配黑色丝带，{argument name=\"eye color\" default=\"发光的蓝色眼睛\"}，身穿带有十字形拉链头的黑色哥特式外套"
  },
  "layout": {
    "format": "包含 7 个独立横向分格的竖版漫画页面",
    "panels": [
      {
        "tier": 1,
        "description": "顶部大分格。角色闭眼向下看。",
        "elements": [
          {"type": "title_logo", "position": "右上角", "text": "{argument name=\"main title\" default=\"再起動の令嬢 Re:Birth Log\"}"},
          {"type": "text_box", "position": "左上角", "text": "{argument name=\"opening text\" default=\"私は——死んだはずだった。\"}"}
        ]
      },
      {
        "tier": 2,
        "description": "狭窄的横向分格。角色发光眼睛的极度特写。",
        "elements": [
          {"type": "text_box", "position": "右侧", "text": "目を覚ますと、そこは見知らぬ世界。"}
        ]
      },
      {
        "tier": 3,
        "description": "蒙太奇分格，展示哥特式城堡、咆哮的巨龙以及角色的背影。",
        "elements": [
          {"type": "text_box", "position": "左侧", "text": "魔法、オーラ、そして——ドラゴン。"}
        ]
      },
      {
        "tier": 4,
        "description": "角色在黑暗荒废的森林中神情沮丧。",
        "elements": [
          {"type": "text_box", "position": "左侧", "text": "しかも、この身体は……貴族でありながら、“役立たず”と呼ばれている。"}
        ]
      },
      {
        "tier": 5,
        "description": "分割分格。左侧展示悲伤的侧脸。右侧展示眼神发光的坚定特写。",
        "elements": [
          {"type": "text_box", "position": "左侧", "text": "力もない。知性もない。ゴミ同然の存在。"},
          {"type": "text_box", "position": "中右侧", "text": "——そう、思われているだけだ。"}
        ]
      },
      {
        "tier": 6,
        "description": "抽象魔法分格。左侧展示魔法阵中发光的蓝色黑桃符号。右侧展示发光的数字风格对话框。",
        "elements": [
          {"type": "text_box", "position": "中央", "text": "封じられた力。そして、私の中に残る“記憶”。"},
          {"type": "glowing_text_box", "position": "右侧", "text": "「契約しろ」"}
        ]
      },
      {
        "tier": 7,
        "description": "底部大分格。角色自信地向前看，嘴角带着一丝冷笑。",
        "elements": [
          {"type": "text_box", "position": "左上角", "text": "……いいだろう。"},
          {"type": "text_box", "position": "中左侧", "text": "この手札、全部使ってやる。"},
          {"type": "text_box", "position": "右下角", "text": "{argument name=\"closing text\" default=\"私は——もう、あの“セレナ”じゃない。\"}"}
        ]
      }
    ]
  }
}

## 来源备注
- 源站作者：noriyang@♠️AIart❤️poker
- 源站 UUID：eFK06juUrl
- 源站分类：06_图文排版视觉传达

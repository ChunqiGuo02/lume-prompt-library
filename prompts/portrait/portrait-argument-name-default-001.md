---
id: "portrait-argument-name-default-001"
title: "BEAUTE TOKYO 2026春夏号封面"
category: portrait
subcategory: "06_图文排版视觉传达"
aesthetic: japanese-zen-garden
tags: ["日系", "美妆", "杂志", "封面", "柔粉", "温柔", "清透", "护肤"]
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
  "type": "beauty magazine cover",
  "color_palette": "{argument name=\"color palette\" default=\"soft pink, white, and muted rose\"}",
  "subject": {
    "description": "{argument name=\"model appearance\" default=\"young Japanese woman with glowing clear skin and soft natural makeup\"}",
    "hair": "dark brown, tied back with loose face-framing strands",
    "clothing": "sheer light pink off-the-shoulder tulle top",
    "pose": "looking directly at camera, gentle smile, head slightly tilted"
  },
  "layout": {
    "masthead": {
      "main_title": "{argument name=\"magazine title\" default=\"BEAUTE\"}",
      "subtitle": "TOKYO",
      "issue_info": "{argument name=\"issue season\" default=\"2026 SPRING / SUMMER\"}"
    },
    "main_headline": {
      "text": "{argument name=\"main headline\" default=\"透明感は、肌から仕込む。\"}",
      "position": "bottom center"
    },
    "sections": [
      {
        "position": "left column",
        "count": 3,
        "labels": [
          "2026春夏 新作スキンケア速報",
          "ツヤ肌ベースメイク 完全BOOK",
          "毛穴・くすみ・乾燥に、本気回答"
        ]
      },
      {
        "position": "right column",
        "count": 2,
        "labels": [
          "大人のための旬メイク、正解だけ",
          "美容賢者が選ぶ、本当に使える逸品"
        ]
      },
      {
        "position": "circular badges",
        "count": 2,
        "labels": [
          "肌も心も、新しい季節へ",
          "今月の表紙メイク徹底解説"
        ]
      }
    ]
  }
}

## 中文译文（源站提供）
{
  "type": "美妆杂志封面",
  "color_palette": "{argument name=\"color palette\" default=\"柔粉色、白色及柔和玫瑰色\"}",
  "subject": {
    "description": "{argument name=\"model appearance\" default=\"年轻日本女性，拥有透亮无瑕的肌肤和自然柔和的妆容\"}",
    "hair": "深棕色，扎起并留有修饰脸型的碎发",
    "clothing": "浅粉色透视露肩薄纱上衣",
    "pose": "直视镜头，温柔微笑，头部微倾"
  },
  "layout": {
    "masthead": {
      "main_title": "{argument name=\"magazine title\" default=\"BEAUTE\"}",
      "subtitle": "TOKYO",
      "issue_info": "{argument name=\"issue season\" default=\"2026 春夏刊\"}"
    },
    "main_headline": {
      "text": "{argument name=\"main headline\" default=\"透明感は、肌から仕込む。\"}",
      "position": "底部居中"
    },
    "sections": [
      {
        "position": "左侧栏",
        "count": 3,
        "labels": [
          "2026 春夏新品护肤速报",
          "光泽肌底妆完全手册",
          "针对毛孔、暗沉、干燥的专业解答"
        ]
      },
      {
        "position": "右侧栏",
        "count": 2,
        "labels": [
          "成熟女性的当季妆容正解",
          "美容专家严选，真正好用的单品"
        ]
      },
      {
        "position": "圆形标签",
        "count": 2,
        "labels": [
          "肌肤与心灵，迈向新季节",
          "本月封面妆容深度解析"
        ]
      }
    ]
  }
}

## 来源备注
- 源站作者：MASHRO｜AI実装・1人で実践中 @Mind Sync Log
- 源站 UUID：ILyNFySPd9
- 源站分类：06_图文排版视觉传达

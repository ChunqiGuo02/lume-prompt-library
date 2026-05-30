---
id: "product-name-type-title-001"
title: "动漫角色设定集"
category: product
subcategory: "09_故事分镜角色设定"
aesthetic: null
tags: ["二次元", "银发", "紫瞳", "洛丽塔", "星月", "人设卡", "蓝白", "安静"]
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
  "type": "comprehensive anime character design document",
  "character": {
    "name": "{argument name=\"character name\" default=\"月乃 咲夜\"}",
    "hair": "{argument name=\"hair color\" default=\"silver\"}",
    "eyes": "{argument name=\"eye color\" default=\"purple\"}",
    "outfit": "{argument name=\"outfit style\" default=\"dark blue and white gothic lolita dress with corset and ribbons\"}",
    "motif": "{argument name=\"main motif\" default=\"moon and stars\"}"
  },
  "layout": {
    "header": {
      "title": "月乃 咲夜",
      "subtitle": "Tsukino Sakuya",
      "quote": "「夜に咲く花も、きっと誰かの光になれると信じてる。」"
    },
    "main_visual": "large half-body portrait on the top left",
    "sections": [
      {
        "title": "基本情報",
        "type": "bulleted list",
        "content": "Name, Age (17), Birthday, Height (158cm), Blood Type, Affiliation, Pronouns, Weapon, Image Color, Motif"
      },
      {
        "title": "性格",
        "type": "text paragraph",
        "content": "Personality description"
      },
      {
        "title": "好き・苦手",
        "type": "two bulleted lists",
        "content": "Likes and Dislikes"
      },
      {
        "title": "表情集",
        "type": "grid of headshots",
        "count": 6,
        "labels": ["通常", "微笑み", "真剣", "悲しみ", "驚き", "照れ"]
      },
      {
        "title": "三面図",
        "type": "full-body turnaround",
        "count": 3,
        "labels": ["front view", "side/back view", "back view"],
        "details": "includes a 158cm height marker"
      },
      {
        "title": "プロフィール / 背景",
        "type": "text paragraph",
        "content": "Character background and profile"
      },
      {
        "title": "学園での立ち位置",
        "type": "bulleted list",
        "content": "Role and position within the school"
      },
      {
        "title": "所持品・武器",
        "type": "illustrated item list",
        "count": 3,
        "items": [
          {"name": "短剣", "description": "decorated dagger"},
          {"name": "懐中時計", "description": "ornate pocket watch"},
          {"name": "文庫本", "description": "blue poetry book with floral design"}
        ]
      },
      {
        "title": "その他設定",
        "type": "bulleted list",
        "content": "Additional character settings and trivia"
      },
      {
        "title": "キーワード",
        "type": "pill-shaped tags",
        "count": 8,
        "labels": ["#銀髪", "#紫の瞳", "#月", "#夜桜", "#静けさ", "#完璧主義", "#影の支え手", "#優しさ"]
      }
    ]
  }
}

## 中文译文（源站提供）
{
  "type": "综合动漫角色设计文档",
  "character": {
    "name": "{argument name=\"character name\" default=\"月乃 咲夜\"}",
    "hair": "{argument name=\"hair color\" default=\"银色\"}",
    "eyes": "{argument name=\"eye color\" default=\"紫色\"}",
    "outfit": "{argument name=\"outfit style\" default=\"深蓝色与白色哥特萝莉裙，配有束腰和丝带\"}",
    "motif": "{argument name=\"main motif\" default=\"月亮与星星\"}"
  },
  "layout": {
    "header": {
      "title": "月乃 咲夜",
      "subtitle": "Tsukino Sakuya",
      "quote": "「夜に咲く花も、きっと誰かの光になれると信じてる。」"
    },
    "main_visual": "左上角的大型半身肖像",
    "sections": [
      {
        "title": "基本信息",
        "type": "项目符号列表",
        "content": "姓名、年龄 (17 岁)、生日、身高 (158 cm)、血型、所属、代词、武器、印象色、主题"
      },
      {
        "title": "性格",
        "type": "段落文本",
        "content": "性格描述"
      },
      {
        "title": "喜好与厌恶",
        "type": "两个项目符号列表",
        "content": "喜好与厌恶"
      },
      {
        "title": "表情集",
        "type": "头像网格",
        "count": 6,
        "labels": ["通常", "微笑", "认真", "悲伤", "惊讶", "害羞"]
      },
      {
        "title": "三面图",
        "type": "全身三面图",
        "count": 3,
        "labels": ["正面", "侧面", "背面"],
        "details": "包含 158 cm 身高标尺"
      },
      {
        "title": "个人资料 / 背景",
        "type": "段落文本",
        "content": "角色背景与个人资料"
      },
      {
        "title": "校园定位",
        "type": "项目符号列表",
        "content": "在学校中的角色与定位"
      },
      {
        "title": "随身物品・武器",
        "type": "插画物品列表",
        "count": 3,
        "items": [
          {"name": "短剑", "description": "装饰精美的短剑"},
          {"name": "怀表", "description": "华丽的怀表"},
          {"name": "文库本", "description": "带有花卉图案的蓝色诗集"}
        ]
      },
      {
        "title": "其他设定",
        "type": "项目符号列表",
        "content": "其他角色设定与冷知识"
      },
      {
        "title": "关键词",
        "type": "胶囊标签",
        "count": 8,
        "labels": ["#银发", "#紫瞳", "#月亮", "#夜樱", "#宁静", "#完美主义", "#幕后支持者", "#温柔"]
      }
    ]
  }
}

## 来源备注
- 源站作者：kt
- 源站 UUID：eb8s2C0D7Z
- 源站分类：09_故事分镜角色设定

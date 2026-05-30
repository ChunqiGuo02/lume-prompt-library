---
id: "graphic-title-position-count-001"
title: "小王子主题Vibe Coding老黄历"
category: graphic
subcategory: "06_图文排版视觉传达"
aesthetic: null
tags: ["水彩", "手绘", "小王子", "编程", "老黄历", "程序员", "治愈", "星星"]
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
  "type": "watercolor infographic almanac",
  "style": "hand-drawn, Little Prince theme, cream background, scattered stars",
  "header": {
    "date": "{argument name=\"date\" default=\"2026年4月18日\"}",
    "title": "{argument name=\"main title\" default=\"vibe coding 老黄历\"}",
    "subtitle": "丙午年 三月初二 星期六"
  },
  "layout": {
    "sections": [
      {
        "title": "宜",
        "position": "top-left",
        "count": 5,
        "labels": [
          "{argument name=\"first do item\" default=\"跟着感觉写代码\"}",
          "和AI聊一聊再开工",
          "删掉不对的，保留有趣的",
          "给项目起一个浪漫的名字",
          "喝杯咖啡，让思路长出来"
        ]
      },
      {
        "title": "今日天象 & 编程运势",
        "position": "top-right",
        "count": 4,
        "labels": [
          "月亮进入双子座",
          "灵感流动，适合对话与创造。",
          "5 stars",
          "灵感 90% 调试 65% 成就感 88%"
        ]
      },
      {
        "title": "忌",
        "position": "mid-left",
        "count": 5,
        "labels": [
          "{argument name=\"first dont item\" default=\"一上来就写完美架构\"}",
          "纠结技术选型到天黑",
          "害怕报错，不敢运行",
          "复制粘贴不思考",
          "忘记保存与提交"
        ]
      },
      {
        "title": "今日吉时",
        "position": "bottom-left",
        "count": 2,
        "labels": [
          "09:30 - 11:30 灵感正旺",
          "14:00 - 16:00 敲出惊喜"
        ]
      },
      {
        "title": "幸运指令",
        "position": "bottom-left",
        "count": 4,
        "labels": [
          "git add .",
          "git commit -m \"follow the vibe\"",
          "git push",
          "# 宇宙会帮你编译的"
        ]
      },
      {
        "title": "今日心法",
        "position": "bottom-right",
        "count": 1,
        "labels": [
          "不必成为最厉害的程序员，只需成为最有感受力的创造者。让感觉引路，让代码开花。"
        ]
      }
    ],
    "illustration": {
      "position": "center-right",
      "subject": "Little Prince on asteroid with laptop, fox, rose in glass dome, mug",
      "quote": "{argument name=\"quote\" default=\"重要的东西，用眼睛是看不见的，要用代码和心去感受。\"} —— 小王子与程序员",
      "sticky_notes": {
        "count": 3,
        "labels": [
          "先跑起来再说。",
          "让AI陪你探索。",
          "bug也是礼物。"
        ]
      }
    }
  }
}

## 中文译文（源站提供）
{
  "type": "watercolor infographic almanac",
  "style": "hand-drawn, Little Prince theme, cream background, scattered stars",
  "header": {
    "date": "{argument name=\"date\" default=\"2026年4月18日\"}",
    "title": "{argument name=\"main title\" default=\"vibe coding 老黄历\"}",
    "subtitle": "丙午年 三月初二 星期六"
  },
  "layout": {
    "sections": [
      {
        "title": "宜",
        "position": "top-left",
        "count": 5,
        "labels": [
          "{argument name=\"first do item\" default=\"跟着感觉写代码\"}",
          "和AI聊一聊再开工",
          "删掉不对的，保留有趣的",
          "给项目起一个浪漫的名字",
          "喝杯咖啡，让思路长出来"
        ]
      },
      {
        "title": "今日天象 & 编程运势",
        "position": "top-right",
        "count": 4,
        "labels": [
          "月亮进入双子座",
          "灵感流动，适合对话与创造。",
          "5 stars",
          "灵感 90% 调试 65% 成就感 88%"
        ]
      },
      {
        "title": "忌",
        "position": "mid-left",
        "count": 5,
        "labels": [
          "{argument name=\"first dont item\" default=\"一上来就写完美架构\"}",
          "纠结技术选型到天黑",
          "害怕报错，不敢运行",
          "复制粘贴不思考",
          "忘记保存与提交"
        ]
      },
      {
        "title": "今日吉时",
        "position": "bottom-left",
        "count": 2,
        "labels": [
          "09:30 - 11:30 灵感正旺",
          "14:00 - 16:00 敲出惊喜"
        ]
      },
      {
        "title": "幸运指令",
        "position": "bottom-left",
        "count": 4,
        "labels": [
          "git add .",
          "git commit -m \"follow the vibe\"",
          "git push",
          "# 宇宙会帮你编译的"
        ]
      },
      {
        "title": "今日心法",
        "position": "bottom-right",
        "count": 1,
        "labels": [
          "不必成为最厉害的程序员，只需成为最有感受力的创造者。让感觉引路，让代码开花。"
        ]
      }
    ],
    "illustration": {
      "position": "center-right",
      "subject": "Little Prince on asteroid with laptop, fox, rose in glass dome, mug",
      "quote": "{argument name=\"quote\" default=\"重要的东西，用眼睛是看不见的，要用代码和心去感受。\"} —— 小王子与程序员",
      "sticky_notes": {
        "count": 3,
        "labels": [
          "先跑起来再说。",
          "让AI陪你探索。",
          "bug也是礼物。"
        ]
      }
    }
  }
}

## 来源备注
- 源站作者：ハカセ アイ(Ai-Hakase)🐾最新トレンドＡＩのためのＸ 🐾
- 源站 UUID：RsFk8gXIg5
- 源站分类：06_图文排版视觉传达

---
id: graphic-name-argument-default-0065
title: "AI智能个人效率助手界面"
category: graphic
subcategory: "06_图文排版视觉传达"
aesthetic: null
tags: ["简约", "浅色", "浅蓝", "移动端", "灵动岛", "手机", "待办", "提醒"]
recommended_models: []
recommended_params:
  aspect_ratio: "9:21"
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
  "type": "mobile app UI mockup",
  "device": "modern smartphone with dynamic island",
  "theme": "light mode, minimalist, {argument name=\"primary color\" default=\"soft blue\"} accents, soft drop shadows",
  "layout": {
    "header": {
      "profile": "small circular photo of a woman",
      "greeting": "Good morning, {argument name=\"user name\" default=\"Alex\"} ☀️",
      "subtitle": "Let's make today productive.",
      "icon": "notification bell with red dot"
    },
    "hero_card": {
      "title": "TODAY'S FOCUS",
      "headline": "{argument name=\"focus task\" default=\"Launch marketing campaign\"}",
      "description": "Finalize assets, review messaging, and align on launch plan.",
      "button": "Continue Task",
      "graphic": "circular progress ring showing 75% Progress"
    },
    "sections": [
      {
        "title": "Up Next",
        "count": 1,
        "items": ["Team sync (10:00 AM - 11:00 AM)"]
      },
      {
        "title": "Reminders",
        "count": 2,
        "items": ["Review design mockups", "Submit campaign brief"]
      }
    ],
    "bottom_elements": {
      "ai_input": "pill-shaped text field with sparkle icon and placeholder '{argument name=\"ai placeholder\" default=\"Ask your AI assistant...\"}'",
      "navigation_bar": {
        "count": 4,
        "tabs": ["Home", "Tasks", "Assistant", "Profile"]
      }
    }
  }
}

## 中文译文（源站提供）
{
  "type": "移动应用 UI 原型",
  "device": "带有灵动岛的现代智能手机",
  "theme": "浅色模式，极简主义，{argument name=\"primary color\" default=\"柔和蓝\"} 点缀，柔和投影",
  "layout": {
    "header": {
      "profile": "女性的小型圆形头像",
      "greeting": "早上好，{argument name=\"user name\" default=\"Alex\"} ☀️",
      "subtitle": "让我们开启高效的一天。",
      "icon": "带有红点的通知铃铛"
    },
    "hero_card": {
      "title": "今日焦点",
      "headline": "{argument name=\"focus task\" default=\"启动营销活动\"}",
      "description": "完成素材定稿，审核文案，并对齐发布计划。",
      "button": "继续任务",
      "graphic": "显示 75% 进度的圆形进度环"
    },
    "sections": [
      {
        "title": "接下来",
        "count": 1,
        "items": ["团队同步会 (10:00 AM - 11:00 AM)"]
      },
      {
        "title": "提醒事项",
        "count": 2,
        "items": ["审核设计原型", "提交活动简报"]
      }
    ],
    "bottom_elements": {
      "ai_input": "带有闪烁图标和占位符的胶囊状文本框 '{argument name=\"ai placeholder\" default=\"询问你的 AI 助手...\"}'",
      "navigation_bar": {
        "count": 4,
        "tabs": ["首页", "任务", "助手", "个人资料"]
      }
    }
  }
}

## 来源备注
- 源站作者：Daniel
- 源站 UUID：2ylksNxS5R
- 源站分类：06_图文排版视觉传达

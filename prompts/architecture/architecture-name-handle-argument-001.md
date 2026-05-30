---
id: "architecture-name-handle-argument-001"
title: "朱元璋的社交媒体主页"
category: architecture
subcategory: "06_图文排版视觉传达"
aesthetic: null
tags: ["朱元璋", "明朝", "社交", "暗黑", "古风", "历史", "宫殿", "皇帝"]
recommended_models: []
recommended_params:
  aspect_ratio: "9:21"
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
  "type": "social media profile UI mockup",
  "theme": "{argument name=\"theme era\" default=\"Ming Dynasty\"}",
  "app_style": "{argument name=\"app style\" default=\"X/Twitter dark mode\"}",
  "header": {
    "banner_image": "traditional Chinese palace complex at sunset",
    "avatar": "portrait of emperor in yellow robes",
    "name": "{argument name=\"profile name\" default=\"朱元璋\"}",
    "handle": "{argument name=\"profile handle\" default=\"@大明皇帝朱元璋\"}",
    "bio": "{argument name=\"bio text\" default=\"洪武皇帝，大明开国皇帝\"}",
    "location": "应天府 (南京)",
    "joined": "洪武元年 (1368) 即位",
    "stats": "12 关注, 45.8万 粉丝"
  },
  "navigation_tabs": ["帖子", "回复", "媒体", "喜欢"],
  "layout": {
    "left_column_feed": {
      "count": 6,
      "items": [
        { "author": "朱元璋", "handle": "@大明皇帝朱元璋", "content_summary": "proclamation of new dynasty", "tags": ["#洪武元年", "#大明开国", "#奉天承运"] },
        { "author": "中书省公告", "handle": "@朝廷公文", "content_summary": "official edict on taxes", "tags": ["#新政发布"] },
        { "author": "徐达", "handle": "@大明左相徐达", "content_summary": "military report", "tags": ["#征北将军奏报"] },
        { "author": "凤阳老农", "handle": "@老农张三", "content_summary": "peasant expressing relief", "tags": ["#百姓心声"] },
        { "author": "国子监学子", "handle": "@诸生李明", "content_summary": "scholar asking about exams", "tags": ["#科举", "#读书人"] },
        { "author": "锦衣卫 (未认证)", "handle": "@夜行者", "content_summary": "secret police warning", "tags": ["#你猜我是谁"] }
      ]
    },
    "right_column_sidebar": {
      "sections": [
        { "title": "趋势: 洪武元年", "count": 4, "labels": ["#大明开国", "#朱元璋登基", "#洪武新政", "#天下归一"] },
        { "title": "推荐关注", "count": 3, "labels": ["刘伯温", "常遇春", "锦衣卫"] },
        { "title": "promo_card", "count": 1, "label": "大明朝廷公告", "image": "palace building" },
        { "title": "正在直播", "count": 2, "labels": ["应天府庆典", "洪武元年大典"], "thumbnails": "grand ceremonies" }
      ]
    },
    "system_ui": {
      "top_bar": "time 09:32, signal, wifi, battery, X logo",
      "bottom_bar": "home, search, notifications, messages icons",
      "floating_button": "+"
    }
  }
}

## 中文译文（源站提供）
{
  "type": "移动端社交媒体 App 界面模型",
  "theme": "深色模式，中国明朝历史主题",
  "header": {
    "banner_image": "夕阳下的中国传统宫殿建筑群",
    "avatar": "身着黄袍的中国皇帝肖像",
    "profile_info": {
      "name": "{argument name=\"profile name\" default=\"朱元璋\"}",
      "verification": "蓝色认证勾选",
      "handle": "{argument name=\"profile handle\" default=\"@大明皇帝朱元璋\"}",
      "bio": "{argument name=\"profile bio\" default=\"洪武皇帝，大明开国皇帝\"}",
      "location": "应天府 (南京)",
      "joined": "洪武元年 (1368) 即位",
      "stats": "12 个正在关注，45.8K 位粉丝"
    },
    "tabs": ["帖子", "回复", "媒体", "喜欢"]
  },
  "main_feed": {
    "post_count": 6,
    "posts": [
      {
        "author": "朱元璋",
        "content": "{argument name=\"first post text\" default=\"今日受天命，登基称帝，国号大明，改元洪武。自此驱逐胡虏，恢复中华，百废待兴。天下百姓，当安居乐业，朕必以身作则！\"}",
        "tags": ["#洪武元年", "#大明开国", "#奉天承运"]
      },
      {
        "author": "中书省公告",
        "content": "奉天承运：自洪武元年起，废除元朝旧制，整顿吏治，实施轻徭薄赋。各府州县，三日内上报户籍、田亩、赋税。敢有隐瞒虚报者，依律处置，决不宽贷。",
        "tags": ["#新政发布"]
      },
      {
        "author": "徐达",
        "content": "北伐虽定，然北元残部犹在。臣请继续整肃军备，修缮边城，以固大明江山。陛下英明，必使四海升平！",
        "tags": ["#征北将军奏报"]
      },
      {
        "author": "凤阳老农",
        "content": "终于换了新皇帝。以前打仗到处逃，现在总算能安心种地了。听说新皇帝也是苦出身，希望真能为百姓着想。",
        "tags": ["#百姓心声"]
      },
      {
        "author": "国子监学子",
        "content": "新朝初立，科举是否恢复？诸生翘首以盼。愿以文章报国，不负洪武之治！",
        "tags": ["#科举", "#读书人"]
      },
      {
        "author": "锦衣卫 (未认证)",
        "content": "最近风声很紧。有些人，最好低调一点。",
        "tags": ["#你猜我是谁"]
      }
    ]
  },
  "right_sidebar": {
    "trending": {
      "title": "趋势：洪武元年",
      "topic_count": 4,
      "topics": [
        "{argument name=\"trending topic\" default=\"#大明开国\"}",
        "#朱元璋登基",
        "#洪武新政",
        "#天下归一"
      ]
    },
    "suggested_follows": {
      "title": "推荐关注",
      "account_count": 3,
      "accounts": ["刘伯温", "常遇春", "锦衣卫"]
    },
    "announcement_card": {
      "title": "大明朝廷公告",
      "image": "宫殿建筑"
    },
    "live_streams": {
      "title": "正在直播",
      "stream_count": 2,
      "streams": ["应天府庆典", "洪武元年大典"]
    }
  },
  "navigation": {
    "bottom_bar_icons": ["首页", "搜索", "通知", "消息"],
    "floating_action_button": "加号图标"
  }
}

## 来源备注
- 源站作者：HuZhou_Mr
- 源站 UUID：5fn4VsP2j3
- 源站分类：06_图文排版视觉传达

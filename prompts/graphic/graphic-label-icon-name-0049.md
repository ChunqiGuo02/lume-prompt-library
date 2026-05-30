---
id: graphic-label-icon-name-0049
title: "AI助手养成类APP界面设计"
category: graphic
subcategory: "06_图文排版视觉传达"
aesthetic: null
tags: ["蓝色", "3D", "科技", "机器人", "界面", "移动端", "签到", "任务"]
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
  "type": "mobile app UI mockup",
  "theme": "futuristic AI assistant, 3D glassmorphism, light blue and white color palette",
  "header": {
    "user_profile": {
      "avatar": "small 3D robot head",
      "name": "{argument name=\"app name\" default=\"小智机器人\"}",
      "level_badge": "LV.8 星耀",
      "experience": "经验值 680/1000"
    },
    "top_right_icons": {
      "count": 2,
      "labels": ["签到", "设置"]
    }
  },
  "hero_display": {
    "subject": "cute 3D robot with glass helmet and glowing blue eyes",
    "pose": "standing on a glowing futuristic circular podium",
    "speech_bubble": "{argument name=\"robot greeting\" default=\"Hi~ 今天也要加油哦！\"}",
    "background": "abstract light blue tech environment with floating transparent bubbles"
  },
  "layout": {
    "sections": [
      {
        "title": "每日签到",
        "subtitle": "连续签到 3 天",
        "type": "horizontal scroll cards",
        "count": 5,
        "items": [
          {"state": "active blue card", "reward": "+10 gold coin", "label": "可签到"},
          {"state": "inactive white card", "reward": "+15 gold coin", "label": "2天"},
          {"state": "inactive white card", "reward": "+20 gold coin", "label": "3天"},
          {"state": "inactive white card", "reward": "+30 gold coin", "label": "4天"},
          {"state": "inactive white card", "reward": "+50 purple diamond", "label": "7天"}
        ]
      },
      {
        "title": "成长任务",
        "type": "vertical list",
        "count": 4,
        "items": [
          {"icon": "blue book", "text": "{argument name=\"task 1 title\" default=\"完成 1 次智能问答\"}", "progress": "1/1", "reward": "+15", "button": "领取"},
          {"icon": "green rocket", "text": "{argument name=\"task 2 title\" default=\"探索 3 个新功能\"}", "progress": "2/3", "reward": "+20", "button": "去完成"},
          {"icon": "purple chat bubble", "text": "分享给 1 位好友", "progress": "0/1", "reward": "+30", "button": "去完成"},
          {"style": "blue gradient banner", "icon": "3D diamond", "text": "{argument name=\"upgrade banner text\" default=\"升级到 LV.9 可解锁新皮肤\"}", "progress": "680/1000", "button": "去升级"}
        ]
      }
    ],
    "bottom_navigation": {
      "count": 5,
      "items": [
        {"icon": "blue home", "label": "首页"},
        {"icon": "grey compass", "label": "发现"},
        {"icon": "large protruding 3D robot head", "label": ""},
        {"icon": "grey chat bubble with red dot", "label": "消息"},
        {"icon": "grey user profile", "label": "我的"}
      ]
    }
  }
}

## 中文译文（源站提供）
{
  "type": "移动端 App UI 设计稿",
  "theme": "未来感 AI 助手，3D 玻璃拟态风格，浅蓝色与白色配色方案",
  "header": {
    "user_profile": {
      "avatar": "小型 3D 机器人头像",
      "name": "{argument name=\"app name\" default=\"小智机器人\"}",
      "level_badge": "LV.8 星耀",
      "experience": "经验值 680/1000"
    },
    "top_right_icons": {
      "count": 2,
      "labels": ["签到", "设置"]
    }
  },
  "hero_display": {
    "subject": "带有玻璃头盔和蓝色发光眼睛的可爱 3D 机器人",
    "pose": "站在发光的未来感圆形底座上",
    "speech_bubble": "{argument name=\"robot greeting\" default=\"Hi~ 今天也要加油哦！\"}",
    "background": "带有悬浮透明气泡的抽象浅蓝色科技感环境"
  },
  "layout": {
    "sections": [
      {
        "title": "每日签到",
        "subtitle": "连续签到 3 天",
        "type": "横向滚动卡片",
        "count": 5,
        "items": [
          {"state": "激活状态蓝色卡片", "reward": "+10 金币", "label": "可签到"},
          {"state": "未激活白色卡片", "reward": "+15 金币", "label": "2 天"},
          {"state": "未激活白色卡片", "reward": "+20 金币", "label": "3 天"},
          {"state": "未激活白色卡片", "reward": "+30 金币", "label": "4 天"},
          {"state": "未激活白色卡片", "reward": "+50 紫色钻石", "label": "7 天"}
        ]
      },
      {
        "title": "成长任务",
        "type": "纵向列表",
        "count": 4,
        "items": [
          {"icon": "蓝色书本", "text": "{argument name=\"task 1 title\" default=\"完成 1 次智能问答\"}", "progress": "1/1", "reward": "+15", "button": "领取"},
          {"icon": "绿色火箭", "text": "{argument name=\"task 2 title\" default=\"探索 3 个新功能\"}", "progress": "2/3", "reward": "+20", "button": "去完成"},
          {"icon": "紫色聊天气泡", "text": "分享给 1 位好友", "progress": "0/1", "reward": "+30", "button": "去完成"},
          {"style": "蓝色渐变横幅", "icon": "3D 钻石", "text": "{argument name=\"upgrade banner text\" default=\"升级到 LV.9 可解锁新皮肤\"}", "progress": "680/1000", "button": "去升级"}
        ]
      }
    ],
    "bottom_navigation": {
      "count": 5,
      "items": [
        {"icon": "蓝色首页", "label": "首页"},
        {"icon": "灰色指南针", "label": "发现"},
        {"icon": "大型凸起 3D 机器人头像", "label": ""},
        {"icon": "带有红点的灰色聊天气泡", "label": "消息"},
        {"icon": "灰色个人资料", "label": "我的"}
      ]
    }
  }
}

## 来源备注
- 源站作者：summer song
- 源站 UUID：gLHXiFL4jb
- 源站分类：06_图文排版视觉传达

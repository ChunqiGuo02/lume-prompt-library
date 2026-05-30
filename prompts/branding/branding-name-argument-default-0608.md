---
id: branding-name-argument-default-0608
title: "直播界面UI设计-4"
category: branding
subcategory: "14_社交媒体营销"
aesthetic: null
tags: ["直播", "主播", "长发", "暖光", "温馨", "白色", "粉色", "卧室"]
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
  "type": "mobile live-streaming app interface mockup",
  "subject": {
    "description": "young Asian woman, long dark hair, smiling at camera",
    "outfit": "{argument name=\"broadcaster outfit\" default=\"white V-neck cardigan\"}",
    "background": "cozy room, warm lighting, pink flowers, pink plush toy"
  },
  "layout": {
    "top_bar": {
      "time": "20:32",
      "broadcaster": {
        "name": "{argument name=\"broadcaster name\" default=\"小鹿 🦌\"}",
        "stats": "12.8万本场点赞"
      },
      "action_button": "关注",
      "viewers": {
        "avatar_count": 3,
        "total": "{argument name=\"viewer count\" default=\"1.2万\"}"
      },
      "close_button": "X"
    },
    "floating_widgets": [
      "小时榜第23名",
      "更多直播 >",
      "礼物展馆 4/24"
    ],
    "chat_area": {
      "message_count": 4,
      "gift_alert": "加油鸭 送出人气票 x1",
      "messages": [
        "不吃香菜: {argument name=\"chat message 1\" default=\"主播唱歌真好听~\"}",
        "小透明: 来了来了",
        "晚风: 主播是哪里人呀",
        "晴天: 关注了主播"
      ]
    },
    "bottom_bar": {
      "input_placeholder": "{argument name=\"input placeholder\" default=\"说点什么...\"}",
      "icon_count": 5,
      "icons": ["smiley face", "link symbol", "heart with halo", "gift box", "three dots"]
    },
    "overlay_effects": "vertical stream of 6 colorful floating hearts on the bottom right"
  }
}

## 中文译文（源站提供）
{
  "type": "移动端直播 App 界面模型",
  "subject": {
    "description": "年轻亚裔女性，留着黑色长发，对着镜头微笑",
    "outfit": "{argument name=\"broadcaster outfit\" default=\"白色 V 领开衫\"}",
    "background": "温馨的房间，暖色调灯光，粉色花朵，粉色毛绒玩具"
  },
  "layout": {
    "top_bar": {
      "time": "20:32",
      "broadcaster": {
        "name": "{argument name=\"broadcaster name\" default=\"小鹿 🦌\"}",
        "stats": "12.8 万本场点赞"
      },
      "action_button": "关注",
      "viewers": {
        "avatar_count": 3,
        "total": "{argument name=\"viewer count\" default=\"1.2 万\"}"
      },
      "close_button": "X"
    },
    "floating_widgets": [
      "小时榜第 23 名",
      "更多直播 >",
      "礼物展馆 4/24"
    ],
    "chat_area": {
      "message_count": 4,
      "gift_alert": "加油鸭 送出人气票 x1",
      "messages": [
        "不吃香菜: {argument name=\"chat message 1\" default=\"主播唱歌真好听~\"}",
        "小透明: 来了来了",
        "晚风: 主播是哪里人呀",
        "晴天: 关注了主播"
      ]
    },
    "bottom_bar": {
      "input_placeholder": "{argument name=\"input placeholder\" default=\"说点什么...\"}",
      "icon_count": 5,
      "icons": ["笑脸", "链接符号", "带光环的心形", "礼盒", "三个点"]
    },
    "overlay_effects": "右下角有 6 个彩色心形垂直飘动特效"
  }
}

## 来源备注
- 源站作者：伟豪学长AI
- 源站 UUID：A4BrJ9YVbS
- 源站分类：14_社交媒体营销

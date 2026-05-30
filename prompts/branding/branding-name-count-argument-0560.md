---
id: branding-name-count-argument-0560
title: "手机直播界面UI设计"
category: branding
subcategory: "14_社交媒体营销"
aesthetic: null
tags: ["直播", "女主播", "甜美", "温馨", "粉色", "白色", "弹幕", "礼物"]
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
  "type": "mobile live streaming app interface mockup",
  "subject": {
    "description": "{argument name=\"subject appearance\" default=\"young Asian woman with long dark hair, wearing a white top, smiling gently and resting her chin on her hand\"}",
    "background": "cozy room with a sofa, bear pillow, pink roses, framed 'FLOWER' art, small lamp, and a shelf with a figurine"
  },
  "ui_layout": {
    "top_left": {
      "streamer_profile": {
        "avatar": "woman's face",
        "name": "{argument name=\"streamer name\" default=\"小鹿酱 💕\"}",
        "stats": "12.8万本场点赞",
        "button": "关注"
      },
      "badges": {
        "count": 2,
        "labels": ["小时榜第3名", "人气榜"]
      }
    },
    "top_right": {
      "top_viewers": {
        "count": 3,
        "avatars_with_scores": ["1.2w", "9800", "8700"]
      },
      "total_viewers": "{argument name=\"viewer count\" default=\"1.9万\"}",
      "close_button": "X",
      "more_streams_link": "更多直播 >",
      "wish_task": "许下心愿, 一起完成任务"
    },
    "middle_left": {
      "gift_alerts": {
        "count": 2,
        "items": [
          {
            "sender": "{argument name=\"gift sender 1\" default=\"@阿飞\"}",
            "action": "送小心心",
            "combo": "x 66"
          },
          {
            "sender": "向阳而生",
            "action": "送鲜花",
            "combo": "x 10"
          }
        ]
      }
    },
    "bottom_left": {
      "chat_messages": {
        "count": 7,
        "items": [
          "甜甜 加入了直播间",
          "尼古拉斯: {argument name=\"chat message 1\" default=\"主播今天好美呀～\"}",
          "小心心: 唱一首歌吧，想听你唱歌～",
          "一只小鹿: 支持支持，天天看你直播 😘",
          "快乐每一天: 人美心善，说话又好听！",
          "小可爱: 主播粉丝团怎么加入呀？",
          "系统: 直播内容严禁违规，文明直播，一起营造良好的直播环境。"
        ]
      }
    },
    "bottom_bar": {
      "input_field": "说点什么...",
      "icons": {
        "count": 5,
        "types": ["smiley face", "pink heart", "gift box", "three dots", "bar chart"]
      }
    },
    "bottom_right": {
      "floating_reactions": "cluster of floating pink and purple hearts"
    }
  }
}

## 中文译文（源站提供）
{
  "type": "移动端直播 App 界面原型",
  "background_scene": {
    "subject": "{argument name=\"streamer appearance\" default=\"年轻亚裔女性，留着黑色长发，身穿白色蕾丝边上衣和白色开衫，手托下巴，温柔微笑\"}",
    "setting": "温馨的房间，配有沙发、熊玩偶、摆放手办的架子、带有“FLOWER”字样的相框以及插着粉色玫瑰的花瓶"
  },
  "ui_layout": {
    "top_bar": {
      "status": ["20:34", "位置", "信号", "Wi-Fi", "78% 电量"],
      "streamer_profile": {
        "name": "{argument name=\"streamer name\" default=\"小鹿酱\"}",
        "stats": "12.8 万本场点赞",
        "button": "关注"
      },
      "rankings": ["小时榜第 3 名", "人气榜"],
      "top_viewers": {
        "count": 3,
        "labels": ["1.2w", "9800", "8700"]
      },
      "total_viewers": "{argument name=\"viewer count\" default=\"1.9 万\"}",
      "widgets": ["更多直播 >", "许下心愿，一起完成任务"]
    },
    "middle_left_notifications": {
      "count": 2,
      "items": [
        {"user": "@阿飞", "action": "送小小心心", "icon": "粉色爱心", "combo": "{argument name=\"gift combo multiplier\" default=\"x 66\"}"},
        {"user": "向阳而生", "action": "送鲜花", "icon": "鲜花束", "combo": "x 10"}
      ]
    },
    "bottom_left_chat": {
      "count": 7,
      "messages": [
        "甜甜 加入了直播间",
        "尼古拉斯: {argument name=\"chat message\" default=\"主播今天好美呀～\"}",
        "小心心: 唱一首歌吧，想听你唱歌～",
        "一只小鹿: 支持支持，天天看你直播",
        "快乐每一天: 人美心善，说话又好听！",
        "小可爱: 主播粉丝团怎么加入呀？",
        "系统: 直播内容严禁违规，文明直播，一起营造良好的直播环境。"
      ]
    },
    "bottom_action_bar": {
      "input_placeholder": "说点什么...",
      "icons_count": 5,
      "icons": ["笑脸", "粉色爱心", "礼物盒", "三个点", "柱状图"],
      "floating_elements": "右侧漂浮着彩色爱心"
    }
  }
}

## 来源备注
- 源站作者：Kevin的学堂
- 源站 UUID：iclQru6hCx
- 源站分类：14_社交媒体营销

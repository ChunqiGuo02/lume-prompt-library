---
id: branding-name-argument-default-0562
title: "手机直播界面特效展示"
category: branding
subcategory: "14_社交媒体营销"
aesthetic: null
tags: ["直播", "主播", "美女", "礼物", "特效", "火箭", "弹幕", "热闹"]
recommended_models: []
recommended_params:
  aspect_ratio: "3:4"
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
  "type": "mobile live stream interface mockup",
  "main_subject": "{argument name=\"main subject\" default=\"beautiful young Asian woman smiling\"}",
  "centerpiece_effect": "{argument name=\"centerpiece effect\" default=\"large space shuttle taking off with bright flames and smoke\"}",
  "floating_characters": [
    {"position": "top left", "description": "cartoon pig character Zhu Bajie holding a golden bowl"},
    {"position": "top right", "description": "cartoon monkey character Sun Wukong holding a staff"},
    {"position": "bottom right", "description": "cartoon man with mustache in a suit holding a glowing lightbulb"}
  ],
  "ui_layout": {
    "header": {
      "streamer_info": {"name": "{argument name=\"streamer name\" default=\"小甜心✨\"}", "likes": "28.5万本场点赞", "button": "关注"},
      "top_viewers": {"count": 3, "labels": ["12.8w", "8.9w", "6.6w"]},
      "total_viewers": "10万+"
    },
    "status_bars": {"count": 3, "labels": ["小时榜第1名", "礼物展馆 24/28", "心愿达成 差3.2万"]},
    "gift_notifications": {
      "position": "mid-left",
      "count": 3,
      "items": [
        {"sender": "八戒哥", "action": "送 大火箭", "combo": "x188"},
        {"sender": "齐天大圣", "action": "送 嘉年华", "combo": "x1314"},
        {"sender": "汤森老师", "action": "送 梦幻城堡", "combo": "x520"}
      ]
    },
    "chat_box": {
      "position": "bottom left",
      "count": 7,
      "messages": [
        "甜心小迷弟 加入了直播间",
        "星辰大海: {argument name=\"top chat message\" default=\"女神好美！声音好好听！\"}",
        "抖音用户: 666666",
        "快乐每一天: 太精彩了，火箭升空！",
        "富贵花开 送出 大火箭 x1",
        "风清扬: 这特效绝了！",
        "可可西里: 主播我爱你！"
      ]
    },
    "bottom_right_graphic": {"text": "{argument name=\"bottom graphic text\" default=\"直播间 火力全开\"}", "style": "large 3D glowing typography"},
    "bottom_bar": {"input_placeholder": "说点什么...", "icons_count": 4, "decorations": "floating colorful hearts on the right"}
  }
}

## 中文译文（源站提供）
{
  "type": "移动端直播 App 界面模型",
  "main_subject": "一位面带微笑的年轻亚洲女性，身穿闪亮上衣，直视镜头",
  "foreground_3d_characters": {
    "left": "猪八戒，手持金钵",
    "right": "孙悟空，手持金箍棒",
    "bottom_right": "卡通风格的留胡子老者，手持发光的灯泡"
  },
  "center_effect": "巨大的航天飞机向上发射，伴随明亮的火焰和烟雾，位于女性胸前位置",
  "layout": {
    "top_bar": {
      "broadcaster_info": "头像，名称 {argument name=\"broadcaster name\" default=\"小甜心✨\"}，数据 '28.5万本场点赞'，粉色 '关注' 按钮",
      "top_viewers": "3 个头像，数据分别为 '12.8w'、'8.9w'、'6.6w'，以及一个关闭按钮 '10万+ X'",
      "status_badges": "标签 '小时榜第1名'、'礼物展馆 24/28'、'心愿达成 差3.2万'",
      "right_stats": "标签 '更多直播 >'、'主播 | 收礼 940.8万'"
    },
    "middle_left_gift_notifications": {
      "count": 3,
      "items": [
        "头像，名称 {argument name=\"gift sender 1\" default=\"八戒哥\"}，文本 '送 大火箭'，火箭图标，倍数 'x188'",
        "头像，名称 {argument name=\"gift sender 2\" default=\"齐天大圣\"}，文本 '送 嘉年华'，嘉年华图标，倍数 'x1314'",
        "头像，名称 {argument name=\"gift sender 3\" default=\"汤森老师\"}，文本 '送 梦幻城堡'，城堡图标，倍数 'x520'"
      ]
    },
    "bottom_left_chat": {
      "count": 7,
      "messages": [
        "甜心小迷弟 加入了直播间",
        "星辰大海: 女神好美！声音好好听！",
        "抖音用户: 666666",
        "快乐每一天: 太精彩了，火箭升空！",
        "富贵花开 送出 大火箭 x1",
        "风清扬: 这特效绝了！",
        "可可西里: 主播我爱你！"
      ],
      "input_box": "文本 '说点什么...'"
    },
    "bottom_right_elements": {
      "large_graphic_text": "{argument name=\"main title graphic\" default=\"直播间 火力全开\"}",
      "floating_reactions": "一列彩色爱心",
      "action_icons": "4 个图标：笑脸、爱心、礼物盒、三个点"
    }
  }
}

## 来源备注
- 源站作者：Berryxia.AI
- 源站 UUID：E0C2MdYw6r
- 源站分类：14_社交媒体营销

---
id: branding-name-argument-default-0619
title: "移动端直播应用界面设计-2"
category: branding
subcategory: "14_社交媒体营销"
aesthetic: null
tags: ["直播", "主播", "温柔", "甜美", "粉色", "温馨", "唱歌", "麦克风"]
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
  "type": "mobile live streaming app interface mockup",
  "subject": "young Asian woman streamer, long dark hair, white top, smiling, speaking into a black studio microphone",
  "background": "cozy room, soft pink lighting, teddy bear, framed poster",
  "ui_elements": {
    "status_bar": "time 21:34, cellular, 5G, battery icons",
    "top_navigation": ["直播", "同城", "关注", "{argument name=\"active tab\" default=\"推荐\"}", "search icon"],
    "streamer_info": {
      "name": "{argument name=\"streamer name\" default=\"小甜心✨\"}",
      "status": "直播中",
      "likes": "23.6万本场点赞"
    },
    "right_action_buttons": {
      "count": 6,
      "items": ["profile with plus", "heart with 3.2万", "speech bubble with 2516", "star with 5280", "share arrow with 1223", "spinning record album"]
    },
    "chat_overlay": {
      "count": 5,
      "messages": [
        "小丸子: {argument name=\"chat message 1\" default=\"唱得太好听了吧～\"}",
        "云淡风轻: {argument name=\"chat message 2\" default=\"声音好温柔，爱了爱了\"}",
        "走遍人间: 主播可以点首《后来》吗？",
        "你的小熊: 来了来了",
        "糖糖 加入了直播间"
      ]
    },
    "bottom_input": "text field saying {argument name=\"input placeholder\" default=\"说点什么...\"}, emoji, heart, gift, menu icons",
    "bottom_navigation": {
      "count": 5,
      "tabs": ["首页", "朋友", "plus button", "消息", "我"]
    }
  }
}

## 中文译文（源站提供）
{
  "type": "移动端直播 App 界面模型",
  "subject": "年轻亚裔女性主播，长黑发，白色上衣，微笑，对着黑色录音室麦克风说话",
  "background": "温馨的房间，柔和的粉色灯光，泰迪熊，装饰画",
  "ui_elements": {
    "status_bar": "时间 21:34，蜂窝网络，5G，电池图标",
    "top_navigation": ["直播", "同城", "关注", "{argument name=\"active tab\" default=\"推荐\"}", "搜索图标"],
    "streamer_info": {
      "name": "{argument name=\"streamer name\" default=\"小甜心✨\"}",
      "status": "直播中",
      "likes": "23.6 万本场点赞"
    },
    "right_action_buttons": {
      "count": 6,
      "items": ["带加号的头像", "带 3.2 万的点赞心形", "带 2516 的气泡对话框", "带 5280 的星星", "带 1223 的分享箭头", "旋转的唱片"]
    },
    "chat_overlay": {
      "count": 5,
      "messages": [
        "小丸子: {argument name=\"chat message 1\" default=\"唱得太好听了吧～\"}",
        "云淡风轻: {argument name=\"chat message 2\" default=\"声音好温柔，爱了爱了\"}",
        "走遍人间: 主播可以点首《后来》吗？",
        "你的小熊: 来了来了",
        "糖糖 加入了直播间"
      ]
    },
    "bottom_input": "文本框显示 {argument name=\"input placeholder\" default=\"说点什么...\"}，以及表情、心形、礼物、菜单图标",
    "bottom_navigation": {
      "count": 5,
      "tabs": ["首页", "朋友", "加号按钮", "消息", "我"]
    }
  }
}

## 来源备注
- 源站作者：酱紫表
- 源站 UUID：CSjpwwUb0b
- 源站分类：14_社交媒体营销

---
id: branding-text-user-argument-0485
title: "AGI时代直播界面设计"
category: branding
subcategory: "14_社交媒体营销"
aesthetic: null
tags: ["直播", "科技", "主播", "人工智能", "暖光", "舒适", "室内", "访谈"]
recommended_models: []
recommended_params:
  aspect_ratio: "16:9"
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
  "type": "live stream interface mockup",
  "subject": {
    "description": "{argument name=\"subject appearance\" default=\"young Korean woman, long dark wavy hair, light blue button-up shirt\"}",
    "accessories": "silver cross necklace, black broadcast microphone on boom arm",
    "pose": "speaking to camera, sitting in grey ergonomic chair"
  },
  "background": "{argument name=\"background vibe\" default=\"cozy room with warm lighting, shelf with YouTube play buttons\"}",
  "layout": {
    "top_bar": {
      "title": "{argument name=\"stream title\" default=\"AGI 시대는 우리에게 무엇을 가져올까? | 기술, 일자리, 인간의 의미\"}",
      "badge": "LIVE"
    },
    "left_chat": {
      "count": 7,
      "messages": [
        {"user": "루나_1023", "text": "오늘 주제 진짜 기대돼요!"},
        {"user": "미래_탐험가", "text": "AGI가 인간보다 똑똑해지면 우리는 어떤 존재가 될까요?"},
        {"user": "코드네임A", "text": "일자리 얘기도 해주실 수 있나요? 요즘 너무 불안해서..."},
        {"user": "별빛사랑", "text": "루나님 목소리 들으면서 같이 생각해봐요"},
        {"user": "AI_조련사", "text": "AGI는 도구일까, 동반자일까?"},
        {"user": "냥냥펀치", "text": "와! 시작부터 흥미진진하다!"},
        {"user": "철학하는왕자", "text": "'인간의 의미'... 벌써부터 깊이 있는 이야기 예상됩니다"}
      ]
    },
    "bottom_left_card": {
      "header": "TODAY'S TOPIC",
      "main_text": "{argument name=\"topic title\" default=\"AGI 시대, 우리는 어디로 가는가?\"}",
      "sub_text": "기술 · 일자리 · 인간의 의미"
    },
    "bottom_controls": {
      "elements": ["red progress bar", "play icon", "volume icon", "라이브", "settings icon", "fullscreen icon"]
    }
  }
}

## 中文译文（源站提供）
{
  "type": "直播界面模型",
  "subject": {
    "description": "{argument name=\"streamer appearance\" default=\"留着深色长卷发的年轻韩国女性，身穿浅蓝色衬衫\"}",
    "action": "对着悬臂支架上的黑色广播麦克风说话",
    "setting": "坐在灰色人体工学办公椅上"
  },
  "background": {
    "description": "温馨的房间，配有木质搁板、发光的爱迪生灯泡、YouTube 创作者奖牌、带框海报、装饰人偶和盆栽植物"
  },
  "layout": {
    "ui_components": [
      {
        "type": "顶部栏",
        "elements": [
          "视频标题文本：{argument name=\"video title\" default=\"AGI 时代会给我们带来什么？| 技术、就业与人类的意义\"}",
          "带有圆点的红色 LIVE 徽章"
        ]
      },
      {
        "type": "实时聊天叠加层",
        "position": "左侧",
        "count": 7,
        "description": "7 条不同的聊天消息，每条消息均包含小型圆形用户头像、用户名以及讨论 {argument name=\"chat topic\" default=\"AGI 与人类未来\"} 的消息文本"
      },
      {
        "type": "主题叠加框",
        "position": "左下角",
        "style": "深色半透明面板",
        "content": [
          "小字：今日主题",
          "主标题：{argument name=\"topic headline\" default=\"AGI 时代，我们将走向何方？\"}",
          "副标题：{argument name=\"topic sub-headline\" default=\"技术 · 就业 · 人类的意义\"}"
        ]
      },
      {
        "type": "视频播放器控件",
        "position": "底部边缘",
        "elements": [
          "播放/暂停按钮",
          "音量图标",
          "红色直播指示器",
          "红色进度条",
          "设置齿轮图标",
          "全屏图标"
        ]
      }
    ]
  }
}

## 来源备注
- 源站作者：Aditya ⚡Rao
- 源站 UUID：9zut82yizp
- 源站分类：14_社交媒体营销

---
id: branding-agi-title-element-0611
title: "直播界面模拟生成"
category: branding
subcategory: "14_社交媒体营销"
aesthetic: null
tags: ["直播", "AGI", "科技", "访谈", "女生", "眼镜", "夜景", "城市"]
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
  "type": "livestream interface mockup",
  "subject": {
    "description": "{argument name=\"streamer description\" default=\"young Asian woman, long dark wavy hair with bangs, round wire-rimmed glasses, black button-up shirt, silver necklace\"}",
    "action": "looking directly at camera, speaking into a professional broadcast microphone"
  },
  "setting": {
    "location": "high-rise apartment interior at night",
    "background": "large window with blurred illuminated city skyline",
    "props": "YouTube play button plaque on shelf, warm desk lamp"
  },
  "layout": {
    "top_left": {
      "element": "stream title",
      "text": "{argument name=\"stream title\" default=\"AGI 시대, 우리는 어떻게 살아남을까?\"}"
    },
    "top_right": {
      "element": "status badge",
      "text": "LIVE",
      "style": "red circle indicator"
    },
    "left_panel": {
      "element": "live chat feed",
      "message_count": 5,
      "messages": [
        "FutureExplorer 22:44: Curious about social changes caused by AGI.",
        "TechGuru 22:44: What jobs will disappear or emerge?",
        "AI_lover 22:45: Difference between AGI and current AI?",
        "PhilosophizingDev 22:45: What is the human role in the AGI era?",
        "CodingOfficeWorker 22:46: Ethical issues and control methods for AGI?"
      ],
      "input_box": "Chat... with smiley icon"
    },
    "bottom_right": {
      "element": "donation leaderboard",
      "title": "{argument name=\"donation title\" default=\"오늘의 후원\"}",
      "item_count": 4,
      "items": [
        "FutureBoy 50,000 won",
        "Anonymous 20,000 won",
        "AI Researcher 10,000 won",
        "Sandbox 5,000 won"
      ]
    }
  }
}

## 中文译文（源站提供）
{
  "type": "直播界面模型",
  "subject": {
    "description": "{argument name=\"streamer description\" default=\"年轻亚裔女性，留着长波浪卷发和刘海，戴着圆形金属框眼镜，身穿黑色衬衫，佩戴银色项链\"}",
    "action": "直视镜头，对着专业广播麦克风说话"
  },
  "setting": {
    "location": "夜晚的高层公寓室内",
    "background": "带有模糊城市夜景灯光的大窗户",
    "props": "架子上的 YouTube 播放按钮奖牌，暖色调台灯"
  },
  "layout": {
    "top_left": {
      "element": "直播标题",
      "text": "{argument name=\"stream title\" default=\"AGI 时代，我们该如何生存？\"}"
    },
    "top_right": {
      "element": "状态徽章",
      "text": "直播中",
      "style": "红色圆形指示灯"
    },
    "left_panel": {
      "element": "实时聊天流",
      "message_count": 5,
      "messages": [
        "FutureExplorer 22:44: 对 AGI 带来的社会变革感到好奇。",
        "TechGuru 22:44: 哪些工作会消失或出现？",
        "AI_lover 22:45: AGI 与当前 AI 的区别是什么？",
        "PhilosophizingDev 22:45: 在 AGI 时代人类扮演什么角色？",
        "CodingOfficeWorker 22:46: AGI 的伦理问题和控制方法是什么？"
      ],
      "input_box": "聊天... 带有笑脸图标"
    },
    "bottom_right": {
      "element": "捐赠排行榜",
      "title": "{argument name=\"donation title\" default=\"今日打赏\"}",
      "item_count": 4,
      "items": [
        "FutureBoy 50,000 韩元",
        "Anonymous 20,000 韩元",
        "AI Researcher 10,000 韩元",
        "Sandbox 5,000 韩元"
      ]
    }
  }
}

## 来源备注
- 源站作者：sungchi
- 源站 UUID：tbZghD4nFj
- 源站分类：14_社交媒体营销

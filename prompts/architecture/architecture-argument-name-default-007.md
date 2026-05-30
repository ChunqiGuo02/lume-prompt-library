---
id: "architecture-argument-name-default-007"
title: "游戏直播界面UI设计"
category: architecture
subcategory: "14_社交媒体营销"
aesthetic: null
tags: ["直播", "女主播", "游戏", "美女", "温柔", "紫色", "弹幕", "麦克风"]
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
  "type": "live stream interface mockup",
  "subject": {
    "description": "young East Asian woman, long dark wavy hair, gentle smile, silver clover necklace, wired earphones",
    "clothing": "{argument name=\"clothing\" default=\"white lace-trimmed camisole with a small blue bow, light blue cardigan, grey pleated skirt\"}",
    "pose": "sitting at a desk, looking directly at the camera, one hand on an RGB mechanical keyboard"
  },
  "environment": {
    "foreground": "professional condenser microphone on a boom arm with a small white plush keychain attached",
    "background": "gaming room setup, large computer monitor displaying a {argument name=\"game on monitor\" default=\"MOBA game\"}, shelf with a glowing moon lamp and a pink bunny plushie",
    "lighting": "soft indoor lighting with purple and blue ambient glow from the monitor and a neon '{argument name=\"neon sign text\" default=\"LIVE ♡\"}' sign on the wall"
  },
  "layout": {
    "sections": [
      {
        "title": "Top Left Profile",
        "position": "top-left",
        "count": 4,
        "labels": ["{argument name=\"username\" default=\"草莓味小羊 🍓\"}", "12.8万本场点赞", "关注", "小时榜第3名"]
      },
      {
        "title": "Top Right Stats",
        "position": "top-right",
        "count": 4,
        "labels": ["3 viewer avatars", "6.7万", "X", "礼物展馆 2/24"]
      },
      {
        "title": "Chat Overlay",
        "position": "bottom-left",
        "count": 7,
        "labels": [
          "{argument name=\"chat message 1\" default=\"宝宝下次打什么呀？\"}",
          "主播好美！！！",
          "主播带带我～",
          "声音也太温柔了吧",
          "这波操作666",
          "晚安宝宝么么哒",
          "进来就被美到了～"
        ]
      },
      {
        "title": "Input Bar",
        "position": "bottom",
        "count": 5,
        "labels": ["说点什么...", "smiley icon", "heart icon", "gift icon", "three dots icon"]
      }
    ]
  }
}

## 中文译文（源站提供）
{
  "type": "移动端直播界面模型",
  "subject": {
    "description": "年轻迷人的亚洲女性，留着黑色长卷发，面带温柔微笑，佩戴有线耳机和银色四叶草项链",
    "outfit": "{argument name=\"outfit\" default=\"白色蕾丝边吊带背心和浅蓝色开衫\"}",
    "action": "直视镜头，坐在书桌前，桌上放着键盘"
  },
  "environment": {
    "setting": "温馨的游戏房",
    "equipment": [
      "悬臂支架上的专业电容麦克风，挂着一个小巧的白色毛绒吉祥物挂件",
      "电脑显示器，屏幕上显示着 {argument name=\"game on monitor\" default=\"类似《英雄联盟》的 MOBA 游戏\"}",
      "RGB 机械键盘"
    ],
    "background_decor": [
      "霓虹灯牌，写着 '{argument name=\"neon sign text\" default=\"LIVE ♡\"}'",
      "放着发光球形月球灯的架子",
      "粉色毛绒兔子玩具"
    ]
  },
  "ui_overlay": {
    "top_left": {
      "profile": {
        "avatar": "主播缩略头像",
        "name": "{argument name=\"streamer name\" default=\"草莓味小羊 🍓\"}",
        "subtext": "12.8万本场点赞",
        "button": "红色的“关注”按钮"
      },
      "tag": "黄色标签，写着“小时榜第 3 名”"
    },
    "top_right": {
      "viewers": {
        "avatars_count": 3,
        "total_count": "{argument name=\"viewer count\" default=\"6.7万\"}",
        "close_button": "X 图标"
      },
      "gift_gallery": "礼物盒图标，文字显示“礼物展馆 2/24”"
    },
    "bottom_left_chat": {
      "message_count": 7,
      "messages": [
        "等级 35，铁粉图标，“宝宝下次打什么呀？”",
        "等级 18，“小羊爱吃草莓: 主播好美！！！”",
        "等级 6，“用户_47956: 主播带带我～”",
        "等级 21，“草莓果酱: 声音也太温柔了吧”",
        "等级 12，“加油鸭: 这波操作 666”",
        "等级 7，“小小羊: 晚安宝宝么么哒”",
        "等级 3，“粉粉小熊: 进来就被美到了～”"
      ]
    },
    "bottom_bar": {
      "input_placeholder": "说点什么...",
      "icons": ["笑脸", "爱心", "粉色礼物盒", "三个点"]
    }
  }
}

## 来源备注
- 源站作者：underwood
- 源站 UUID：svrB7waJxt
- 源站分类：14_社交媒体营销

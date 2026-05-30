---
id: "architecture-name-argument-default-003"
title: "直播感谢礼物提示词"
category: architecture
subcategory: "14_社交媒体营销"
aesthetic: null
tags: ["猫咪", "直播", "可爱", "温馨", "礼物", "互动", "暖色", "火箭"]
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
  "type": "mobile livestream app screenshot",
  "subject": {
    "description": "cute fluffy tabby cat sitting upright, holding a white rectangular sign with both front paws",
    "sign_content": {
      "text": "{argument name=\"sign text\" default=\"谢谢开发者 Hailey的大火箭！\"}",
      "illustrations": ["pink rocket", "yellow stars", "pink heart"]
    }
  },
  "background": {
    "setting": "cozy room with warm lighting",
    "elements": ["cat tree", "glowing spherical lamp", "paw print decoration"],
    "blackboard_text": "{argument name=\"background text\" default=\"欢迎来到 小猫咪的 直播间\"}"
  },
  "ui_layout": {
    "status_bar": {
      "time": "20:30",
      "battery": "72"
    },
    "header": {
      "host_info": {
        "name": "{argument name=\"host name\" default=\"小猫咪的直播间\"}",
        "likes": "123.4万本场点赞",
        "button": "关注"
      },
      "rank": "小时榜第1名",
      "viewers": {
        "count": "1.6万",
        "avatars_count": 3
      },
      "widgets": [
        "更多直播 >",
        "礼物展馆 24/28 经典"
      ]
    },
    "gift_notification": {
      "sender": "{argument name=\"gift sender\" default=\"Hailey\"}",
      "action": "送 {argument name=\"gift name\" default=\"大火箭\"}",
      "multiplier": "x1",
      "badge": "真爱"
    },
    "chat_box": {
      "message_count": 7,
      "messages": [
        "35 Hailey 送出 大火箭 🚀 x1",
        "24 泡芙: 哇塞！大火箭！",
        "18 可乐加冰: 棒棒哒猫猫~",
        "7 小鱼干: 猫猫太可爱啦😍",
        "12 云朵: 谢谢 Hailey 姐姐！",
        "30 草莓奶昔: 冲冲冲🚀🚀🚀",
        "5 用户123456789: 猫猫贴贴~"
      ]
    },
    "floating_reactions": [
      "pink hearts",
      "yellow hearts",
      "blue hearts",
      "laughing emoji"
    ],
    "bottom_bar": {
      "input_placeholder": "说点什么...",
      "icons_count": 4,
      "icons": [
        "smiley face",
        "heart",
        "gift box",
        "ellipsis"
      ]
    }
  }
}

## 中文译文（源站提供）
{
  "type": "移动端直播 App 截图",
  "subject": {
    "description": "一只毛茸茸的可爱虎斑猫端坐着，两只前爪扶着一块白色长方形标语牌",
    "sign_content": {
      "text": "{argument name=\"sign text\" default=\"谢谢开发者 Hailey的大火箭！\"}",
      "illustrations": ["粉色火箭", "黄色星星", "粉色爱心"]
    }
  },
  "background": {
    "setting": "光线温暖的舒适房间",
    "elements": ["猫爬架", "发光的球形灯", "猫爪印装饰"],
    "blackboard_text": "{argument name=\"background text\" default=\"欢迎来到 小猫咪的 直播间\"}"
  },
  "ui_layout": {
    "status_bar": {
      "time": "20:30",
      "battery": "72"
    },
    "header": {
      "host_info": {
        "name": "{argument name=\"host name\" default=\"小猫咪的直播间\"}",
        "likes": "123.4 万本场点赞",
        "button": "关注"
      },
      "rank": "小时榜第 1 名",
      "viewers": {
        "count": "1.6 万",
        "avatars_count": 3
      },
      "widgets": [
        "更多直播 >",
        "礼物展馆 24/28 经典"
      ]
    },
    "gift_notification": {
      "sender": "{argument name=\"gift sender\" default=\"Hailey\"}",
      "action": "送 {argument name=\"gift name\" default=\"大火箭\"}",
      "multiplier": "x1",
      "badge": "真爱"
    },
    "chat_box": {
      "message_count": 7,
      "messages": [
        "35 Hailey 送出 大火箭 🚀 x1",
        "24 泡芙: 哇塞！大火箭！",
        "18 可乐加冰: 棒棒哒猫猫~",
        "7 小鱼干: 猫猫太可爱啦😍",
        "12 云朵: 谢谢 Hailey 姐姐！",
        "30 草莓奶昔: 冲冲冲🚀🚀🚀",
        "5 用户123456789: 猫猫贴贴~"
      ]
    },
    "floating_reactions": [
      "粉色爱心",
      "黄色爱心",
      "蓝色爱心",
      "大笑表情"
    ],
    "bottom_bar": {
      "input_placeholder": "说点什么...",
      "icons_count": 4,
      "icons": [
        "笑脸",
        "爱心",
        "礼物盒",
        "省略号"
      ]
    }
  }
}

## 来源备注
- 源站作者：开发者Hailey
- 源站 UUID：0kp2DxKM0M
- 源站分类：14_社交媒体营销

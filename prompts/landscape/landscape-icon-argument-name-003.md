---
id: "landscape-icon-argument-name-003"
title: "短视频界面生成"
category: landscape
subcategory: "14_社交媒体营销"
aesthetic: null
tags: ["日落", "晚风", "治愈", "广州塔", "江边", "暖光", "逆光", "人像"]
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
  "type": "mobile short video app screenshot",
  "style": "photorealistic, highly detailed",
  "main_image": {
    "subject": "{argument name=\"subject description\" default=\"young Asian woman with long dark hair, wearing a white top, looking back over her shoulder\"}",
    "lighting": "golden hour, sunset backlight, warm glowing light",
    "background": "{argument name=\"background location\" default=\"riverfront at sunset with a tall twisted tower skyline\"}"
  },
  "ui_overlay": {
    "top_bar": {
      "left": "time 9:41, menu icon",
      "center_tabs": ["经验", "团购", "关注", "推荐"],
      "right": "signal, wifi, battery 100, search icon"
    },
    "right_sidebar": {
      "count": 6,
      "elements": [
        "profile picture with red plus button",
        "heart icon with text '{argument name=\"like count\" default=\"23.6万\"}'",
        "comment bubble icon with text '1.6万'",
        "star icon with text '2.8万'",
        "share arrow icon with text '3.7万'",
        "spinning record album icon"
      ]
    },
    "bottom_left_info": {
      "username": "{argument name=\"username\" default=\"@小鹿的日常\"}",
      "caption": "{argument name=\"caption\" default=\"吹着晚风，看着日落，这一刻好治愈~ 🌅\"}",
      "audio_track": "🎵 原声 @小鹿的日常创作的原声"
    },
    "bottom_nav": {
      "count": 5,
      "tabs": [
        "首页",
        "朋友 (with red badge 2)",
        "central square plus button",
        "消息 (with red badge 5)",
        "我"
      ],
      "footer": "white home indicator line"
    }
  }
}

## 中文译文（源站提供）
{
  "type": "移动端短视频 App 截图",
  "style": "照片级真实感，高度细节化",
  "main_image": {
    "subject": "{argument name=\"subject description\" default=\"一位留着深色长发、身穿白色上衣的年轻亚洲女性，回头看向镜头\"}",
    "lighting": "黄金时刻，日落逆光，温暖的柔光",
    "background": "{argument name=\"background location\" default=\"日落时分的河畔，背景为高耸的扭曲塔楼天际线\"}"
  },
  "ui_overlay": {
    "top_bar": {
      "left": "时间 9:41，菜单图标",
      "center_tabs": ["经验", "团购", "关注", "推荐"],
      "right": "信号，WiFi，电池 100，搜索图标"
    },
    "right_sidebar": {
      "count": 6,
      "elements": [
        "带有红色加号按钮的头像",
        "心形图标，文字为 '{argument name=\"like count\" default=\"23.6万\"}'",
        "评论气泡图标，文字为 '1.6万'",
        "星标图标，文字为 '2.8万'",
        "分享箭头图标，文字为 '3.7万'",
        "旋转的唱片图标"
      ]
    },
    "bottom_left_info": {
      "username": "{argument name=\"username\" default=\"@小鹿的日常\"}",
      "caption": "{argument name=\"caption\" default=\"吹着晚风，看着日落，这一刻好治愈~ 🌅\"}",
      "audio_track": "🎵 原声 @小鹿的日常创作的原声"
    },
    "bottom_nav": {
      "count": 5,
      "tabs": [
        "首页",
        "朋友 (带红色角标 2)",
        "中央方形加号按钮",
        "消息 (带红色角标 5)",
        "我"
      ],
      "footer": "白色主页指示条"
    }
  }
}

## 来源备注
- 源站作者：serein
- 源站 UUID：ivhxqHShPk
- 源站分类：14_社交媒体营销

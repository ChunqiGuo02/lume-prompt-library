---
id: branding-icon-argument-name-0612
title: "短视频应用界面UI设计模板"
category: branding
subcategory: "14_社交媒体营销"
aesthetic: japanese-zen-garden
tags: ["日系", "自拍", "长发", "棕发", "卧室", "温柔", "甜美", "短视频"]
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
  "type": "short-form video app interface mockup",
  "background_image": {
    "subject": "{argument name=\"subject description\" default=\"young Japanese woman with long wavy dark brown hair and see-through bangs, wearing a white ribbed top, soft natural makeup, smiling gently at the camera\"}",
    "setting": "cozy bedroom with a bed, wooden shelf, and dried flowers in the background, soft natural lighting, selfie angle"
  },
  "ui_overlay": {
    "top_bar": {
      "left": "LIVE icon",
      "center": "フォロー中 | {argument name=\"active tab\" default=\"おすすめ\"}",
      "right": "Search icon"
    },
    "right_sidebar": {
      "count": 6,
      "elements": [
        "Profile picture with pink plus badge",
        "Heart icon with {argument name=\"like count\" default=\"12.4K\"}",
        "Speech bubble icon with 356",
        "Bookmark icon with 1,289",
        "Share arrow icon with 204",
        "Spinning vinyl record icon"
      ]
    },
    "bottom_left_caption": {
      "username": "{argument name=\"username\" default=\"@ゆい | 日常をちょっとだけ♡\"}",
      "description": "{argument name=\"caption text\" default=\"今日も見てくれてありがとう☺️ みんなにとって良い一日になりますように🕊️\"}",
      "audio_track": "🎵 オリジナル楽曲 - ゆい"
    },
    "bottom_navigation": {
      "count": 5,
      "labels": [
        "レコメンド",
        "友達",
        "Create button",
        "メッセージ",
        "プロフィール"
      ]
    }
  }
}

## 中文译文（源站提供）
{
  "type": "短视频应用界面模型",
  "background_image": {
    "subject": "{argument name=\"subject description\" default=\"留着长波浪深棕色头发、留着空气刘海的年轻日本女性，身穿白色罗纹上衣，化着柔和的自然妆容，对着镜头温柔微笑\"}",
    "setting": "温馨的卧室，背景有床、木质搁板和干花，柔和的自然光，自拍视角"
  },
  "ui_overlay": {
    "top_bar": {
      "left": "LIVE 图标",
      "center": "关注 | {argument name=\"active tab\" default=\"推荐\"}",
      "right": "搜索图标"
    },
    "right_sidebar": {
      "count": 6,
      "elements": [
        "带有粉色加号徽章的头像",
        "带有 {argument name=\"like count\" default=\"12.4K\"} 的心形图标",
        "带有 356 的气泡图标",
        "带有 1,289 的书签图标",
        "带有 204 的分享箭头图标",
        "旋转的黑胶唱片图标"
      ]
    },
    "bottom_left_caption": {
      "username": "{argument name=\"username\" default=\"@ゆい | 日常をちょっとだけ♡\"}",
      "description": "{argument name=\"caption text\" default=\"感谢大家今天的观看☺️ 祝大家度过美好的一天🕊️\"}",
      "audio_track": "🎵 原创音乐 - ゆい"
    },
    "bottom_navigation": {
      "count": 5,
      "labels": [
        "推荐",
        "朋友",
        "创作按钮",
        "消息",
        "个人资料"
      ]
    }
  }
}

## 来源备注
- 源站作者：ぱんだ@AI駆動開発
- 源站 UUID：edmvDn8Vzo
- 源站分类：14_社交媒体营销

---
id: "landscape-character-number-position-001"
title: "GPT-image-2功能介绍漫画"
category: landscape
subcategory: "06_图文排版视觉传达"
aesthetic: null
tags: ["漫画", "二次元", "Q版", "科技", "金发", "黑色", "咖啡", "写实"]
recommended_models: []
recommended_params:
  aspect_ratio: "2:3"
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
  "type": "8-panel manga comic strip",
  "layout": "4 rows, 2 columns grid, reading right-to-left, top-to-bottom",
  "character": {
    "appearance": "{argument name=\"character appearance\" default=\"chibi anime girl, blonde twin tails, black bows, brown eyes, black gothic dress, heart choker\"}"
  },
  "panels": [
    {
      "number": 1,
      "position": "top right",
      "visual": "Character waving and smiling happily against a sparkling white background.",
      "speech_bubble": "{argument name=\"panel 1 text\" default=\"こんにちは！リサだよ！今日はOpenAIの凄い噂、GPT-image-2について教えるね！\"}"
    },
    {
      "number": 2,
      "position": "top left",
      "visual": "Character looking surprised at a futuristic blue holographic screen displaying the OpenAI logo and '{argument name=\"topic\" default=\"GPT-image-2\"}'.",
      "screen_subtext": "{argument name=\"panel 2 screen text\" default=\"Smarter - Sharper - More Creative\"}",
      "speech_bubble": "According to leak info, this update is seriously crazy!"
    },
    {
      "number": 3,
      "position": "row 2 right",
      "visual": "Character pointing at a green cafe sign outside a brick building.",
      "sign_text": ["CAFE OPEN", "Cafe is open", "Coffee & Sweets"],
      "speech_bubble": "First, text! Signboards and menus won't have spelling mistakes anymore! It's perfect!"
    },
    {
      "number": 4,
      "position": "row 2 left",
      "visual": "Character holding a large smartphone displaying a mobile app interface.",
      "ui_elements": {
        "header": ["My Day", "Make life creative"],
        "search_bar": "Search ideas...",
        "buttons_count": 4,
        "buttons_labels": ["Explore", "Create", "Gallery", "Profile"],
        "bottom_nav_icons_count": 4
      },
      "speech_bubble": "It can even make app screens! The pro-designer quality is surprising!"
    },
    {
      "number": 5,
      "position": "row 3 right",
      "visual": "Character looking amazed at a before-and-after image comparison graphic.",
      "graphic_elements": {
        "left_image": "Blurry photo of a woman",
        "left_label": "Conventional AI image (blurry)",
        "right_image": "Sharp, realistic 4K photo of the same woman",
        "right_label": "{argument name=\"topic\" default=\"GPT-image-2\"} (4K super real)",
        "separator": "Blue arrow pointing right"
      },
      "speech_bubble": "It's like a photo in 4K resolution! Skin texture and lighting are super realistic!"
    },
    {
      "number": 6,
      "position": "row 3 left",
      "visual": "Character winking and pointing, surrounded by floating objects on a purple starburst background.",
      "floating_objects_count": 7,
      "floating_objects_labels": ["wooden palette with 2 brushes", "DSLR camera", "glowing lightbulb", "landscape photograph", "vintage lantern", "cup of coffee on saucer", "notepad with pencil and the word IDEA"],
      "speech_bubble": "Complex instructions are perfect too. Camera composition and prop placement are exactly as you want!"
    },
    {
      "number": 7,
      "position": "row 4 right",
      "visual": "Character pointing at a wooden whiteboard displaying a character reference sheet of herself.",
      "whiteboard_title": "Character consistency",
      "character_views_count": 5,
      "character_views_labels": ["front full-body", "side full-body", "front face winking", "side face", "half-body pointing"],
      "speech_bubble": "And character consistency! You'll be able to draw characters like me in the exact same appearance!"
    },
    {
      "number": 8,
      "position": "row 4 left",
      "visual": "Character giving a thumbs up, winking, and smiling broadly against a sparkling pink background.",
      "speech_bubble": "{argument name=\"panel 8 text\" default=\"AIと人間が一緒に物語を作る時代、ワクワクするね！みんなも注目だよ！\"}"
    }
  ]
}

## 中文译文（源站提供）
{
  "type": "8 格漫画信息图",
  "reading_order": "从右向左",
  "character": {
    "name": "{argument name=\"character name\" default=\"莉莎\"}",
    "appearance": "{argument name=\"character appearance\" default=\"金色双马尾，黑色哥特裙，黑色心形项圈\"}"
  },
  "panels": [
    {
      "number": 1,
      "action": "开心地挥手",
      "speech_bubble": "{argument name=\"greeting text\" default=\"你好！我是莉莎！今天来跟大家聊聊 OpenAI 的重磅传闻，关于 GPT-image-2 的那些事儿！\"}"
    },
    {
      "number": 2,
      "action": "惊讶地看着发光的屏幕",
      "screen_text": "OpenAI {argument name=\"product name\" default=\"GPT-image-2\"} 更智能 - 更清晰 - 更具创造力",
      "speech_bubble": "据泄露的消息称，这次的更新简直强得离谱！"
    },
    {
      "number": 3,
      "action": "指向咖啡馆招牌",
      "sign_text": "CAFE OPEN 咖啡馆 营业中 Coffee & Sweets",
      "speech_bubble": "首先是文字处理！无论是招牌还是菜单，再也不会出现拼写错误了！简直完美！"
    },
    {
      "number": 4,
      "action": "拿着显示应用界面的智能手机",
      "ui_elements_count": 6,
      "ui_elements": ["我的日常", "搜索灵感...", "探索", "创作", "图库", "个人资料"],
      "speech_bubble": "甚至能直接生成应用界面！这专业设计师级别的质量，真的让人惊叹！"
    },
    {
      "number": 5,
      "action": "展示对比图",
      "comparison": "模糊肖像 vs 清晰的 4K 写实女性肖像",
      "speech_bubble": "4K 分辨率，画质如照片般真实！皮肤质感和光影效果都极其细腻！"
    },
    {
      "number": 6,
      "action": "眨眼并指向前方",
      "floating_objects_count": 7,
      "floating_objects": ["调色板", "相机", "灯泡", "风景照", "灯笼", "咖啡杯", "写着 IDEA 的笔记本"],
      "speech_bubble": "复杂的指令也能完美执行。相机的构图和道具的摆放都能随心所欲！"
    },
    {
      "number": 7,
      "action": "指向项目",
      "whiteboard_poses_count": 5,
      "whiteboard_poses": ["正面全身", "侧面全身", "正面脸部", "侧面脸部", "半身眨眼"],
      "speech_bubble": "还有角色固定功能！像我这样的角色，以后都能保持形象一致了！"
    },
    {
      "number": 8,
      "action": "竖起大拇指，眨眼，背景闪闪发光",
      "speech_bubble": "{argument name=\"conclusion text\" default=\"AI 与人类共同创作故事的时代，真是令人兴奋！大家一定要持续关注哦！\"}"
    }
  ]
}

## 来源备注
- 源站作者：IT navi
- 源站 UUID：kPTPy9fhvG
- 源站分类：06_图文排版视觉传达

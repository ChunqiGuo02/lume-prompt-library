---
id: "product-illustration-number-title-001"
title: "幼儿日常活动认知卡片"
category: product
subcategory: "06_图文排版视觉传达"
aesthetic: null
tags: ["早教", "闪卡", "卡通", "可爱", "儿童", "插画", "日常", "启蒙"]
recommended_models: []
recommended_params:
  aspect_ratio: "1:1"
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
  "type": "educational flashcard grid",
  "theme": "{argument name=\"theme\" default=\"toddler daily routine\"}",
  "art_style": "{argument name=\"art style\" default=\"flat vector illustration, soft pastel colors, children's book style\"}",
  "character": "{argument name=\"character description\" default=\"cute toddler girl with short brown hair tied in two small pigtails, rosy cheeks, dot eyes\"}",
  "layout": {
    "grid": "2 rows by 5 columns",
    "total_panels": 10,
    "panel_structure": {
      "top_left": "number in a colored circle",
      "top_center": "action title in bold text",
      "center": "illustration of the character performing the action",
      "bottom": "colored pill-shaped box containing a magnifying glass icon and a question"
    }
  },
  "panels": [
    { "number": 1, "title": "小宝宝起床啦", "illustration": "waking up in bed, stretching arms, sun shining, teddy bear", "bottom_question": "宝宝在哪里？" },
    { "number": 2, "title": "宝宝在刷牙", "illustration": "brushing teeth, wearing blue pajamas, holding a yellow cup", "bottom_question": "牙刷在哪里？" },
    { "number": 3, "title": "宝宝吃早餐", "illustration": "eating toast, glass of milk, fried egg, strawberries on table", "bottom_question": "宝宝在吃什么？" },
    { "number": 4, "title": "宝宝要出门啦", "illustration": "wearing yellow jacket and red backpack, waving goodbye at an open door", "bottom_question": "门在哪里？" },
    { "number": 5, "title": "宝宝在玩球", "illustration": "running on grass, kicking a colorful striped ball, yellow butterfly", "bottom_question": "球在哪里？" },
    { "number": 6, "title": "宝宝在喝水", "illustration": "drinking from a sippy cup, wearing green pajamas", "bottom_question": "杯子在哪里？" },
    { "number": 7, "title": "宝宝吃饭啦", "illustration": "eating rice with a spoon, wearing a cherry bib, food tray with broccoli and carrots", "bottom_question": "勺子在哪里？" },
    { "number": 8, "title": "宝宝在洗澡", "illustration": "taking a bath in a tub full of bubbles, showerhead running, yellow rubber duck", "bottom_question": "泡泡在哪里？" },
    { "number": 9, "title": "宝宝在看书", "illustration": "sitting on a yellow beanbag chair, reading a blue book with a bunny cover, bookshelf in background", "bottom_question": "书在哪里？" },
    { "number": 10, "title": "宝宝睡觉啦", "illustration": "sleeping peacefully in bed under a blue starry blanket, teddy bear, window showing night sky with crescent moon", "bottom_question": "宝宝闭眼了吗？" }
  ]
}

## 中文译文（源站提供）
{
  "type": "{argument name=\"theme\" default=\"日常作息闪卡\"}",
  "style": "{argument name=\"style\" default=\"可爱的童书插画风格，柔和的马卡龙色调\"}",
  "character": "{argument name=\"character\" default=\"扎着两个小辫子、留着棕色短发的幼儿女孩\"}",
  "layout": {
    "grid": "2x5 格",
    "elements_per_panel": ["数字圆圈", "标题", "场景", "带有放大镜图标的问题横幅"]
  },
  "panels": [
    {"id": 1, "title": "小宝宝起床啦", "scene": "起床，太阳，泰迪熊", "question": "宝宝在哪里？"},
    {"id": 2, "title": "宝宝在刷牙", "scene": "刷牙，蓝色睡衣", "question": "牙刷在哪里？"},
    {"id": 3, "title": "宝宝吃早餐", "scene": "吃吐司和鸡蛋，苹果围兜", "question": "宝宝在吃什么？"},
    {"id": 4, "title": "宝宝要出门啦", "scene": "黄色外套，书包，门", "question": "门在哪里？"},
    {"id": 5, "title": "宝宝在玩球", "scene": "在户外踢球，蝴蝶", "question": "球在哪里？"},
    {"id": 6, "title": "宝宝在喝水", "scene": "用学饮杯喝水", "question": "杯子在哪里？"},
    {"id": 7, "title": "宝宝吃饭啦", "scene": "吃米饭，樱桃围兜，餐盘", "question": "勺子在哪里？"},
    {"id": 8, "title": "宝宝在洗澡", "scene": "浴缸，泡泡，小黄鸭", "question": "泡泡在哪里？"},
    {"id": 9, "title": "宝宝在看书", "scene": "在懒人沙发上看书", "question": "书在哪里？"},
    {"id": 10, "title": "宝宝睡觉啦", "scene": "在床上睡觉，夜间的窗户", "question": "宝宝闭眼了吗？"}
  ]
}

## 来源备注
- 源站作者：AI奶爸
- 源站 UUID：1WJv1eCIFr
- 源站分类：06_图文排版视觉传达

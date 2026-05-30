---
id: "portrait-visual-timestamp-caption-001"
title: "暗黑风格从实拍转CG的分镜脚本"
category: portrait
subcategory: "06_图文排版视觉传达"
aesthetic: null
tags: ["暗黑", "分镜", "影视", "奇幻", "压抑", "恶魔", "烟雾", "书桌"]
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
  "type": "12-panel cinematic storyboard grid",
  "style": "{argument name=\"visual style\" default=\"dark cinematic transitioning to dark fantasy CG\"}",
  "character": "{argument name=\"main character\" default=\"pale young man with messy black hair in a dark suit\"}",
  "layout": {
    "columns": 3,
    "rows": 4,
    "panel_count": 12
  },
  "panels": [
    { "id": "1", "timestamp": "0:00-0:01", "caption": "猛地转身，甩出一把纸", "visual": "character throwing papers at camera" },
    { "id": "2", "timestamp": "0:01-0:02", "caption": "纸张飞舞，镜头跟随落在书桌", "visual": "papers flying in dark room with desk lamp" },
    { "id": "3", "timestamp": "0:02-0:03", "caption": "走向黑色书桌，拉开椅子坐下", "visual": "character walking away towards desk" },
    { "id": "4", "timestamp": "0:03-0:04", "caption": "侧光下的沉思，压抑氛围", "visual": "close-up of character's face in shadow" },
    { "id": "5", "timestamp": "0:04-0:05", "caption": "翻开纯黑笔记本", "visual": "close-up of hands opening a black notebook" },
    { "id": "6", "timestamp": "0:05-0:06", "caption": "拿起笔，准备书写", "visual": "close-up of character holding pen over notebook" },
    { "id": "7", "timestamp": "0:06-0:07", "caption": "开始疯狂书写，烟雾初起", "visual": "character writing frantically, smoke rising" },
    { "id": "8", "timestamp": "0:07-0:08", "caption": "烟雾翻涌，形态显现", "visual": "thick smoke surging around character" },
    { "id": "9", "timestamp": "0:08-0:09", "caption": "死神魔爪浮现，丝线垂下", "visual": "skeletal hands emerging above, glowing threads hanging down" },
    { "id": "10", "timestamp": "0:09-0:10", "caption": "丝线连接，实拍转CG", "visual": "glowing threads attaching to character's head" },
    { "id": "11", "timestamp": "0:10-0:11", "caption": "风格蜕变，暗黑CG质感", "visual": "magical energy, heavy CG fantasy style shift" },
    { "id": "12", "timestamp": "0:11-0:12", "caption": "大魔王降临，俯视操控", "visual": "{argument name=\"final entity\" default=\"giant horned demon figure\"} looming behind, controlling character like a puppet" }
  ]
}

## 中文译文（源站提供）
{
  "type": "12 格电影级分镜网格",
  "style": "{argument name=\"visual style\" default=\"暗黑电影感过渡至暗黑奇幻 CG\"}",
  "character": "{argument name=\"main character\" default=\"脸色苍白的年轻男子，留着凌乱黑发，身着深色西装\"}",
  "layout": {
    "columns": 3,
    "rows": 4,
    "panel_count": 12
  },
  "panels": [
    { "id": "1", "timestamp": "0:00-0:01", "caption": "猛地转身，甩出一把纸", "visual": "character throwing papers at camera" },
    { "id": "2", "timestamp": "0:01-0:02", "caption": "纸张飞舞，镜头跟随落在书桌", "visual": "papers flying in dark room with desk lamp" },
    { "id": "3", "timestamp": "0:02-0:03", "caption": "走向黑色书桌，拉开椅子坐下", "visual": "character walking away towards desk" },
    { "id": "4", "timestamp": "0:03-0:04", "caption": "侧光下的沉思，压抑氛围", "visual": "close-up of character's face in shadow" },
    { "id": "5", "timestamp": "0:04-0:05", "caption": "翻开纯黑笔记本", "visual": "close-up of hands opening a black notebook" },
    { "id": "6", "timestamp": "0:05-0:06", "caption": "拿起笔，准备书写", "visual": "close-up of character holding pen over notebook" },
    { "id": "7", "timestamp": "0:06-0:07", "caption": "开始疯狂书写，烟雾初起", "visual": "character writing frantically, smoke rising" },
    { "id": "8", "timestamp": "0:07-0:08", "caption": "烟雾翻涌，形态显现", "visual": "thick smoke surging around character" },
    { "id": "9", "timestamp": "0:08-0:09", "caption": "死神魔爪浮现，丝线垂下", "visual": "skeletal hands emerging above, glowing threads hanging down" },
    { "id": "10", "timestamp": "0:09-0:10", "caption": "丝线连接，实拍转 CG", "visual": "glowing threads attaching to character's head" },
    { "id": "11", "timestamp": "0:10-0:11", "caption": "风格蜕变，暗黑 CG 质感", "visual": "magical energy, heavy CG fantasy style shift" },
    { "id": "12", "timestamp": "0:11-0:12", "caption": "大魔王降临，俯视操控", "visual": "{argument name=\"final entity\" default=\"巨大的长角恶魔形象\"} 在身后浮现，像操控木偶一样控制着角色" }
  ]
}

## 来源备注
- 源站作者：John
- 源站 UUID：KOo8P0CkrK
- 源站分类：06_图文排版视觉传达

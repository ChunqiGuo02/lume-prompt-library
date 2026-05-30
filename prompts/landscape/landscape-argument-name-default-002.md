---
id: "landscape-argument-name-default-002"
title: "中国历史朝代时间轴"
category: landscape
subcategory: "06_图文排版视觉传达"
aesthetic: null
tags: ["中国史", "朝代图", "信息图", "时间轴", "国风", "水墨", "古风", "历史"]
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
  "type": "infographic timeline",
  "style": {
    "background": "{argument name=\"background style\" default=\"textured beige rice paper\"}",
    "art_style": "{argument name=\"art style\" default=\"traditional Chinese watercolor and ink wash illustration\"}"
  },
  "header": {
    "title": "{argument name=\"main title\" default=\"中国历史朝代图\"}",
    "subtitle": "{argument name=\"subtitle\" default=\"华夏文明·源远流长\"}",
    "elements": ["red calligraphy title", "red square seal stamp top right", "cloud motifs"]
  },
  "layout": {
    "sections_count": 4,
    "sections": [
      {
        "id": "1",
        "label": "壹 先秦时期",
        "date_range": "(约前2070年—前221年)",
        "description": "华夏起源，诸侯纷争，百家争鸣。",
        "timeline_nodes": 4,
        "dynasties": ["夏", "商", "西周", "东周"],
        "illustrations": ["scholar holding bamboo slips", "bronze ding tripod", "bronze ritual vessel", "horse-drawn chariot", "bamboo slips and brush"]
      },
      {
        "id": "2",
        "label": "贰 秦汉三国",
        "date_range": "(前221年—280年)",
        "description": "大一统时代，开疆拓土，英雄辈出。",
        "timeline_nodes": 3,
        "dynasties": ["秦", "汉", "三国"],
        "illustrations": ["terracotta warrior", "cavalryman on galloping horse", "three generals in traditional armor"]
      },
      {
        "id": "3",
        "label": "叁 两晋南北朝 隋唐五代",
        "date_range": "(280年—960年)",
        "description": "分裂与融合并存，盛世辉煌，文化鼎盛。",
        "timeline_nodes": 5,
        "dynasties": ["两晋", "南北朝", "隋", "唐", "五代十国"],
        "illustrations": ["scholar drinking wine", "seated Buddha statue", "arched stone bridge with boat", "elegant Tang dynasty lady", "cavalryman holding a flag"]
      },
      {
        "id": "4",
        "label": "肆 宋元明清",
        "date_range": "(960年—1912年)",
        "description": "经济繁荣，民族融合，走向近代。",
        "timeline_nodes": 4,
        "dynasties": ["宋", "元", "明", "清"],
        "illustrations": ["bustling riverside townscape", "mounted archer shooting backwards", "palace complex", "Qing dynasty official"]
      }
    ]
  },
  "footer": {
    "quote": "{argument name=\"bottom quote\" default=\"以史为鉴，可以知兴替；以人为镜，可以明得失。\"}",
    "decorations": ["bamboo leaves on bottom left", "Great Wall illustration on bottom right"]
  }
}

## 中文译文（源站提供）
{
  "type": "信息图时间轴",
  "style": {
    "background": "{argument name=\"background style\" default=\"纹理米色宣纸\"}",
    "art_style": "{argument name=\"art style\" default=\"传统中国水墨画风格\"}"
  },
  "header": {
    "title": "{argument name=\"main title\" default=\"中国历史朝代图\"}",
    "subtitle": "{argument name=\"subtitle\" default=\"华夏文明·源远流长\"}",
    "elements": ["红色书法标题", "右上角红色方形印章", "祥云纹饰"]
  },
  "layout": {
    "sections_count": 4,
    "sections": [
      {
        "id": "1",
        "label": "壹 先秦时期",
        "date_range": "(约前 2070 年—前 221 年)",
        "description": "华夏起源，诸侯纷争，百家争鸣。",
        "timeline_nodes": 4,
        "dynasties": ["夏", "商", "西周", "东周"],
        "illustrations": ["手持竹简的学者", "青铜鼎", "青铜礼器", "马车", "竹简与毛笔"]
      },
      {
        "id": "2",
        "label": "贰 秦汉三国",
        "date_range": "(前 221 年—280 年)",
        "description": "大一统时代，开疆拓土，英雄辈出。",
        "timeline_nodes": 3,
        "dynasties": ["秦", "汉", "三国"],
        "illustrations": ["兵马俑", "骑马的骑兵", "三位身着传统盔甲的将军"]
      },
      {
        "id": "3",
        "label": "叁 两晋南北朝 隋唐五代",
        "date_range": "(280 年—960 年)",
        "description": "分裂与融合并存，盛世辉煌，文化鼎盛。",
        "timeline_nodes": 5,
        "dynasties": ["两晋", "南北朝", "隋", "唐", "五代十国"],
        "illustrations": ["饮酒的学者", "坐佛像", "带船的拱形石桥", "优雅的唐代仕女", "持旗骑兵"]
      },
      {
        "id": "4",
        "label": "肆 宋元明清",
        "date_range": "(960 年—1912 年)",
        "description": "经济繁荣，民族融合，走向近代。",
        "timeline_nodes": 4,
        "dynasties": ["宋", "元", "明", "清"],
        "illustrations": ["繁华的河畔城镇景观", "回身射箭的骑射手", "宫殿建筑群", "清代官员"]
      }
    ]
  },
  "footer": {
    "quote": "{argument name=\"bottom quote\" default=\"以史为鉴，可以知兴替；以人为镜，可以明得失。\"}",
    "decorations": ["左下角竹叶", "右下角长城插画"]
  }
}

## 来源备注
- 源站作者：axiaisacat
- 源站 UUID：nmuOG23ZAU
- 源站分类：06_图文排版视觉传达

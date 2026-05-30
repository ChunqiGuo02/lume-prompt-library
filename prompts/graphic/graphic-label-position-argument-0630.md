---
id: graphic-label-position-argument-0630
title: "广西旅游宣传海报"
category: graphic
subcategory: "06_图文排版视觉传达"
aesthetic: null
tags: ["广西", "旅游", "海报", "卡通", "美食", "风景", "民族", "清新"]
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
  "type": "3D animated style tourism promotional poster",
  "typography": {
    "main_title": "{argument name=\"main title\" default=\"广西\"}",
    "subtitle": "{argument name=\"subtitle\" default=\"山水甲天下, 多彩广西\"}"
  },
  "characters": [
    {
      "position": "center left",
      "description": "3D animated girl, joyful expression",
      "outfit": "{argument name=\"left character outfit\" default=\"traditional ethnic minority dress with silver headdress\"}"
    },
    {
      "position": "center right",
      "description": "3D animated girl, joyful expression",
      "outfit": "{argument name=\"right character outfit\" default=\"white traditional dress with conical hat\"}"
    }
  ],
  "background": {
    "theme": "{argument name=\"region theme\" default=\"Guangxi karst landscapes and rivers\"}",
    "style": "lush green 3D isometric map",
    "map_labels": [
      "德天跨国瀑布",
      "桂林·象鼻山",
      "龙脊梯田",
      "阳朔·遇龙河"
    ]
  },
  "layout": {
    "polaroid_photos": {
      "count": 4,
      "items": [
        { "position": "top left", "label": "三江·程阳风雨桥", "scene": "traditional covered bridge" },
        { "position": "middle left", "label": "北海·银滩", "scene": "tropical beach" },
        { "position": "bottom left", "label": "北海·银滩", "scene": "tropical beach" },
        { "position": "bottom right", "label": "靖西·鹅泉", "scene": "stone arch bridge over water" }
      ]
    },
    "food_showcase": {
      "position": "bottom foreground",
      "count": 4,
      "items": [
        { "label": "柳州螺蛳粉", "description": "bowl of spicy snail rice noodles" },
        { "label": "南宁老友粉", "description": "bowl of meat and rice noodles in broth" },
        { "label": "五色糯米饭", "description": "bamboo basket with five colors of sticky rice" },
        { "label": "荔浦芋头", "description": "whole and halved taro roots" }
      ]
    },
    "decorations": "scattered yellow osmanthus flowers and red hibiscus flowers"
  }
}

## 中文译文（源站提供）
{
  "type": "3D 动画风格旅游宣传海报",
  "typography": {
    "main_title": "{argument name=\"main title\" default=\"广西\"}",
    "subtitle": "{argument name=\"subtitle\" default=\"山水甲天下，多彩广西\"}"
  },
  "characters": [
    {
      "position": "左侧中心",
      "description": "3D 动画女孩，表情愉悦",
      "outfit": "{argument name=\"left character outfit\" default=\"带有银饰头饰的传统少数民族服饰\"}"
    },
    {
      "position": "右侧中心",
      "description": "3D 动画女孩，表情愉悦",
      "outfit": "{argument name=\"right character outfit\" default=\"带有斗笠的白色传统服饰\"}"
    }
  ],
  "background": {
    "theme": "{argument name=\"region theme\" default=\"广西喀斯特地貌与河流\"}",
    "style": "郁郁葱葱的 3D 等距地图",
    "map_labels": [
      "德天跨国瀑布",
      "桂林·象鼻山",
      "龙脊梯田",
      "阳朔·遇龙河"
    ]
  },
  "layout": {
    "polaroid_photos": {
      "count": 4,
      "items": [
        { "position": "左上", "label": "三江·程阳风雨桥", "scene": "传统风雨桥" },
        { "position": "左中", "label": "北海·银滩", "scene": "热带海滩" },
        { "position": "左下", "label": "北海·银滩", "scene": "热带海滩" },
        { "position": "右下", "label": "靖西·鹅泉", "scene": "水上石拱桥" }
      ]
    },
    "food_showcase": {
      "position": "底部前景",
      "count": 4,
      "items": [
        { "label": "柳州螺蛳粉", "description": "一碗香辣螺蛳粉" },
        { "label": "南宁老友粉", "description": "一碗肉片汤底米粉" },
        { "label": "五色糯米饭", "description": "装在竹篮里的五色糯米饭" },
        { "label": "荔浦芋头", "description": "完整及切开的芋头" }
      ]
    },
    "decorations": "散落的黄色桂花和红色木槿花"
  }
}

## 来源备注
- 源站作者：行者AI视频
- 源站 UUID：ehZSGGoUZ7
- 源站分类：06_图文排版视觉传达

---
id: "product-icon-label-argument-001"
title: "科幻风机器人盲盒抽取界面"
category: product
subcategory: "12_手工玩具手办"
aesthetic: null
tags: ["盲盒", "机器人", "游戏", "界面", "科幻", "可爱", "霓虹", "蓝紫"]
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
  "type": "mobile game UI mockup",
  "theme": "sci-fi, cute, glassmorphism, neon blue and purple color palette",
  "header": {
    "status_bar": "standard iOS status bar at top",
    "top_controls": "back button on left, currency display with diamond icon and '128' on right",
    "title": "{argument name=\"main title\" default=\"机器人盲盒\"}",
    "subtitle": "{argument name=\"subtitle\" default=\"抽取你的幸运伙伴\"}"
  },
  "layout": {
    "side_menu": {
      "position": "top right below currency",
      "count": 2,
      "items": [
        {"icon": "gift", "label": "奖品池"},
        {"icon": "document", "label": "抽取记录"}
      ]
    },
    "centerpiece": {
      "description": "clear glass display case containing the main prize",
      "subject": "{argument name=\"robot character description\" default=\"cute chibi-style robot with glowing blue eyes and white glossy armor\"}",
      "case_details": [
        "label 'NO.001' in top left",
        "starburst sticker '稀有款 概率UP!' on bottom right",
        "progress bar at bottom with text '再抽 6 次必出稀有款' and '4/10'"
      ]
    },
    "background_elements": {
      "description": "blurred toy store background",
      "floating_items": {
        "count": 3,
        "description": "square boxes labeled 'BLIND BOX' with robot faces, one with a '?' sign"
      }
    },
    "action_buttons": {
      "position": "bottom center above nav bar",
      "count": 2,
      "buttons": [
        {"color": "blue", "text": "{argument name=\"left button text\" default=\"抽一次\"}", "cost": "x 30"},
        {"color": "purple", "text": "{argument name=\"right button text\" default=\"抽十次\"}", "cost": "x 270", "tag": "9折"}
      ]
    },
    "bottom_navigation": {
      "count": 4,
      "items": [
        {"icon": "home", "label": "抽盲盒", "state": "active"},
        {"icon": "store", "label": "商城"},
        {"icon": "star", "label": "收藏"},
        {"icon": "smiley", "label": "我的"}
      ]
    }
  }
}

## 中文译文（源站提供）
{
  "type": "移动游戏 UI 原型",
  "theme": "科幻、可爱、玻璃拟态、霓虹蓝与紫色配色方案",
  "header": {
    "status_bar": "顶部标准 iOS 状态栏",
    "top_controls": "左侧返回按钮，右侧显示带有钻石图标和“128”的货币栏",
    "title": "{argument name=\"main title\" default=\"机器人盲盒\"}",
    "subtitle": "{argument name=\"subtitle\" default=\"抽取你的幸运伙伴\"}"
  },
  "layout": {
    "side_menu": {
      "position": "货币栏下方右侧",
      "count": 2,
      "items": [
        {"icon": "gift", "label": "奖品池"},
        {"icon": "document", "label": "抽取记录"}
      ]
    },
    "centerpiece": {
      "description": "包含大奖的透明玻璃展示柜",
      "subject": "{argument name=\"robot character description\" default=\"可爱的 Q 版机器人，拥有发光的蓝色眼睛和白色光泽装甲\"}",
      "case_details": [
        "左上角标注“NO.001”",
        "右下角带有“稀有款 概率 UP!”的星形贴纸",
        "底部进度条，文字显示“再抽 6 次必出稀有款”及“4/10”"
      ]
    },
    "background_elements": {
      "description": "模糊的玩具店背景",
      "floating_items": {
        "count": 3,
        "description": "带有机器人脸部图案、标注“BLIND BOX”的方形盒子，其中一个带有“?”标记"
      }
    },
    "action_buttons": {
      "position": "底部导航栏上方的居中位置",
      "count": 2,
      "buttons": [
        {"color": "blue", "text": "{argument name=\"left button text\" default=\"抽一次\"}", "cost": "x 30"},
        {"color": "purple", "text": "{argument name=\"right button text\" default=\"抽十次\"}", "cost": "x 270", "tag": "9 折"}
      ]
    },
    "bottom_navigation": {
      "count": 4,
      "items": [
        {"icon": "home", "label": "抽盲盒", "state": "active"},
        {"icon": "store", "label": "商城"},
        {"icon": "star", "label": "收藏"},
        {"icon": "smiley", "label": "我的"}
      ]
    }
  }
}

## 来源备注
- 源站作者：summer song
- 源站 UUID：B8L7zhlwvz
- 源站分类：12_手工玩具手办

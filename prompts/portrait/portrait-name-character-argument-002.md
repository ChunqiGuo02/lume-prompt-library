---
id: "portrait-name-character-argument-002"
title: "动漫角色设定参考图"
category: portrait
subcategory: "09_故事分镜角色设定"
aesthetic: null
tags: ["动漫", "二次元", "人设", "白发", "蓝瞳", "侦探", "女性", "风衣"]
recommended_models: []
recommended_params:
  aspect_ratio: "5:4"
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
  "type": "anime character reference sheet",
  "header": {
    "title": "キャラクター設定資料",
    "character_name": "{argument name=\"character name\" default=\"シャルロット・ホームズ\"}",
    "english_name": "Charlotte Holmes"
  },
  "character_design": {
    "hair": "{argument name=\"hair color\" default=\"white\"}, long, black ribbon hairbands",
    "eyes": "{argument name=\"eye color\" default=\"blue\"}",
    "outfit": "{argument name=\"outfit description\" default=\"long black coat, white vest with frog closures, black pants, black boots\"}"
  },
  "layout": {
    "left_column": [
      {
        "section": "表情・顔",
        "count": 3,
        "labels": ["通常", "微笑み", "冷静・思案"]
      },
      {
        "section": "ディテール",
        "count": 6,
        "labels": ["襟元・留め具", "髪飾り（リボン）", "コート：袖口", "コート：背面ベルト", "インナー（ベスト）", "ボトム・ブーツ"]
      },
      {
        "section": "カラー設定",
        "count": 8,
        "labels": ["髪", "肌", "瞳", "リボン", "コート", "インナー", "留め具・金具", "パンツ・ブーツ"],
        "includes": "hex codes"
      },
      {
        "section": "キャラクターメモ",
        "content": "bulleted list of character traits, height 170cm, age late 20s"
      }
    ],
    "right_main_area": {
      "section": "三面図",
      "background": "height chart grid from 0 to 170cm",
      "count": 3,
      "poses": ["正面", "側面", "背面"]
    }
  }
}

## 中文译文（源站提供）
{
  "type": "动漫角色设定集",
  "header": {
    "title": "角色设定资料",
    "character_name": "{argument name=\"character name\" default=\"夏洛特·福尔摩斯\"}",
    "english_name": "Charlotte Holmes"
  },
  "character_design": {
    "hair": "{argument name=\"hair color\" default=\"白色\"}，长发，黑色丝带发饰",
    "eyes": "{argument name=\"eye color\" default=\"蓝色\"}",
    "outfit": "{argument name=\"outfit description\" default=\"黑色长款大衣，带盘扣的白色马甲，黑色长裤，黑色靴子\"}"
  },
  "layout": {
    "left_column": [
      {
        "section": "表情与面部",
        "count": 3,
        "labels": ["通常", "微笑", "冷静·思考"]
      },
      {
        "section": "细节设计",
        "count": 6,
        "labels": ["领口与盘扣", "发饰（丝带）", "大衣：袖口", "大衣：背部腰带", "内搭（马甲）", "裤装与靴子"]
      },
      {
        "section": "配色方案",
        "count": 8,
        "labels": ["头发", "皮肤", "眼睛", "丝带", "大衣", "内搭", "盘扣与金属件", "裤子与靴子"],
        "includes": "十六进制颜色代码"
      },
      {
        "section": "角色备注",
        "content": "角色特征要点列表，身高 170 cm，年龄 20 多岁"
      }
    ],
    "right_main_area": {
      "section": "三视图",
      "background": "0 到 170 cm 的身高测量网格",
      "count": 3,
      "poses": ["正面", "侧面", "背面"]
    }
  }
}

## 来源备注
- 源站作者：noriyang@♠️AIart❤️poker
- 源站 UUID：36VpImaDDJ
- 源站分类：09_故事分镜角色设定

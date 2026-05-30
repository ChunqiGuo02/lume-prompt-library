---
id: story_board-title-position-name-0251
title: "科幻机甲角色设定参考表"
category: story_board
subcategory: "09_故事分镜角色设定"
aesthetic: null
tags: ["二次元", "科幻", "设定表", "男性", "女性", "机师", "操作员", "暗色调"]
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
  "type": "dual character reference sheet",
  "theme": "{argument name=\"theme\" default=\"sci-fi mecha pilot and operator\"}",
  "layout": "horizontal split, top half male, bottom half female",
  "top_character": {
    "name": "{argument name=\"male character name\" default=\"白峰カイ\"}",
    "appearance": "young male, messy black hair, blue eyes",
    "sections": [
      { "title": "profile text", "position": "left column", "description": "basic settings, summary, keywords" },
      { "title": "全身設定", "position": "mid-left", "count": 4, "labels": ["FRONT", "SIDE", "REAR", "3/4 VIEW"], "description": "wearing {argument name=\"male uniform color\" default=\"dark blue and black\"} military uniform" },
      { "title": "表情設定", "position": "top-right", "count": 3, "labels": ["通常", "戦闘時", "わずかな緩み"] },
      { "title": "表情バリエーション", "position": "mid-right", "count": 8, "description": "smaller headshots, various angles" },
      { "title": "パイロットスーツ", "position": "far-right", "count": 2, "labels": ["FRONT", "REAR"], "description": "tight black plugsuit" },
      { "title": "ディテール", "position": "bottom-right", "count": 4, "labels": ["首元", "胸部", "グローブ", "ブーツ"] },
      { "title": "bottom row", "position": "bottom", "elements": ["カラーパレット (6 swatches)", "各部ディテール (4 items: hand, tag, earpiece, neck)", "所持アイテム (2 items: tablet, pendant)", "補足設定 (text block)"] }
    ]
  },
  "bottom_character": {
    "name": "{argument name=\"female character name\" default=\"月城ユナ\"}",
    "appearance": "young female, long dark purple hair, purple eyes",
    "sections": [
      { "title": "profile text", "position": "left column", "description": "profile, summary, keywords" },
      { "title": "全身設定", "position": "mid-left", "count": 3, "labels": ["FRONT", "SIDE", "REAR"], "description": "wearing {argument name=\"female uniform color\" default=\"dark blue and grey\"} uniform with skirt" },
      { "title": "表情集", "position": "mid-right", "count": 4, "labels": ["通常", "管制中", "私的な表情", "厳しい表情"] },
      { "title": "オペレーター専用仕様", "position": "far-right", "count": 1, "description": "3/4 view holding tablet, callout lines" },
      { "title": "ディテール設定", "position": "bottom-right", "count": 6, "labels": ["通信インターフェース", "頸部インターフェース", "襟元デザイン", "リスト端末", "IDカード", "靴"] },
      { "title": "bottom row", "position": "bottom", "elements": ["管制室での作業姿勢 (1 half-body shot)", "カラーパレット & マーク (6 swatches, 1 emblem)", "各種バリエーション (4 headshots: ヘッドセット装着, データ解析中, 緊急時, オフモード)", "補足設定 (text block)"] }
    ]
  }
}

## 中文译文（源站提供）
{
  "type": "双人角色设计设定集",
  "theme": "{argument name=\"theme\" default=\"科幻机甲动漫\"}",
  "layout": "水平分割，上半部分为男性角色，下半部分为女性角色，高密度信息布局，左侧带有文字说明栏",
  "top_character": {
    "name": "{argument name=\"male character name\" default=\"白峰カイ\"}",
    "appearance": "年轻男性，凌乱深色短发，蓝色眼睛",
    "sections": [
      { "title": "全身设定", "count": 4, "labels": ["正面", "侧面", "背面", "3/4 视角"], "description": "{argument name=\"male uniform color\" default=\"黑色与深蓝色\"} 制服" },
      { "title": "表情设定", "count": 3, "description": "大尺寸头像" },
      { "title": "表情变化", "count": 8, "description": "小尺寸头像" },
      { "title": "驾驶服", "count": 2, "labels": ["正面", "背面"], "description": "黑色战术驾驶服" },
      { "title": "细节展示", "count": 4, "description": "界面、面板、手套、靴子的特写" },
      { "title": "配色方案", "count": 6, "description": "色卡" },
      { "title": "各部位细节", "count": 4, "description": "手部、身份牌、耳机、颈部接口特写" },
      { "title": "持有物品", "count": 2, "description": "平板电脑和吊坠" }
    ]
  },
  "bottom_character": {
    "name": "{argument name=\"female character name\" default=\"月城ユナ\"}",
    "appearance": "年轻女性，长深紫色头发，蓝色眼睛",
    "sections": [
      { "title": "全身设定", "count": 3, "labels": ["正面", "侧面", "背面"], "description": "{argument name=\"female uniform color\" default=\"藏青色与灰色\"} 操作员制服" },
      { "title": "表情集", "count": 4, "description": "大尺寸头像" },
      { "title": "操作员专属规格", "count": 1, "description": "带有技术标注线的全身姿势" },
      { "title": "细节设定", "count": 6, "description": "耳机、颈部接口、衣领、腕部终端、身份卡、靴子的特写" },
      { "title": "管制室工作姿态", "count": 1, "description": "坐在控制台前的半身像" },
      { "title": "配色方案与标志", "count": 1, "description": "色卡及翼状徽章" },
      { "title": "各种变化", "count": 4, "labels": ["佩戴耳机", "数据分析中", "紧急状态", "离线模式"], "description": "不同装备与表情的头像" }
    ]
  }
}

## 来源备注
- 源站作者：いにしえ@AI Director & Creator｜Will Oldgram
- 源站 UUID：EMzIhzwz7Y
- 源站分类：09_故事分镜角色设定

---
id: story_board-name-count-labels-0052
title: "兽人角色设定集"
category: story_board
subcategory: "09_故事分镜角色设定"
aesthetic: null
tags: ["人设", "兽人", "幻想", "二次元", "设定集", "战士", "法师", "虎人"]
recommended_models: []
recommended_params:
  aspect_ratio: "3:2"
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
  "type": "4-quadrant character design reference sheet",
  "style": "{argument name=\"art style\" default=\"anime concept art, detailed character design sheet\"}",
  "layout": {
    "structure": "2x2 grid",
    "quadrants": [
      {
        "position": "top-left",
        "title": "{argument name=\"world title\" default=\"獣響界アルドラン - Aldran, the Beast-Sworn World\"}",
        "sections": [
          { "name": "Color Palette", "count": 5, "type": "swatches" },
          { "name": "Height Scale", "count": 4, "type": "character silhouettes" },
          { "name": "Character Intros", "count": 4, "type": "portraits with weapons", "labels": ["HC-01 カラス", "HC-02 ガルド", "HC-03 アイラ", "HC-04 シロ"] },
          { "name": "Expressions", "count": 4, "type": "sets of 3 faces per character" },
          { "name": "Physical Details", "count": 4, "type": "sets of 3 close-ups per character" },
          { "name": "Party/Equipment", "count": 3, "type": "group and gear illustrations" }
        ]
      },
      {
        "position": "top-right",
        "title": "{argument name=\"character 1 name\" default=\"ガルド (虎族)\"}",
        "description": "Tiger-kin heavy warrior",
        "sections": [
          { "name": "Full Body", "count": 3, "labels": ["全身 正面", "全身 後面", "全身 左側面"] },
          { "name": "3/4 View", "count": 1, "labels": ["三面図補助 (斜め前)"] },
          { "name": "Expressions", "count": 3, "labels": ["通常 (平常時)", "戦闘時 (集中)", "稀な柔和 (信頼時)"] },
          { "name": "Anatomy Details", "count": 2, "labels": ["耳の形状・内側の毛色", "尻尾の縞パターン"] },
          { "name": "Equipment Details", "count": 2, "labels": ["右ポルドロン詳細", "右手のタリスマン / 手の特徴"] },
          { "name": "Weapon", "count": 1, "labels": ["大剣「鋼嵐 (コウラン)」"] },
          { "name": "Scale", "count": 1, "labels": ["スケール比較"] }
        ]
      },
      {
        "position": "bottom-left",
        "title": "{argument name=\"character 2 name\" default=\"シロ (白狐族)\"}",
        "description": "White Fox-kin mage",
        "sections": [
          { "name": "Full Body", "count": 3, "labels": ["全身 正面", "全身 後面", "全身 左側面"] },
          { "name": "3/4 View", "count": 1, "labels": ["三面図補助 (斜め前)"] },
          { "name": "Expressions", "count": 3, "labels": ["通常 (静謐)", "魔力集中時", "稀な微笑み"] },
          { "name": "Anatomy Details", "count": 2, "labels": ["尻尾の配置", "耳の形状"] },
          { "name": "Equipment Details", "count": 2, "labels": ["袖内側の封印紋様", "衣装ディテール / 足元"] },
          { "name": "Weapon", "count": 1, "labels": ["魔杖「灯魂杖 (トコンジョウ)」"] },
          { "name": "Scale", "count": 1, "labels": ["スケール比較"] }
        ]
      },
      {
        "position": "bottom-right",
        "title": "{argument name=\"character 3 name\" default=\"カラス (狼族)\"}",
        "description": "Wolf-kin protagonist",
        "sections": [
          { "name": "Full Body", "count": 3, "labels": ["全身 正面", "全身 後面", "全身 左側面"] },
          { "name": "3/4 View", "count": 1, "labels": ["三面図補助 (斜め前)"] },
          { "name": "Expressions", "count": 3, "labels": ["通常 (警戒)", "戦闘集中", "稀なリラックス"] },
          { "name": "Anatomy Details", "count": 2, "labels": ["耳の可動状態", "尾の先端テクスチャ"] },
          { "name": "Equipment Details", "count": 3, "labels": ["旅装クローク着用", "戦闘態勢", "装備ディテール / ブーツ裏面デザイン"] },
          { "name": "Weapon", "count": 1, "labels": ["武器「牙斬 (キバキリ)」"] },
          { "name": "Scale", "count": 1, "labels": ["スケール比較"] }
        ]
      }
    ]
  }
}

## 中文译文（源站提供）
{
  "type": "四象限角色设计参考表",
  "style": "{argument name=\"art style\" default=\"动漫概念艺术，精细角色设计表\"}",
  "layout": {
    "structure": "2x2 网格",
    "quadrants": [
      {
        "position": "左上",
        "title": "{argument name=\"world title\" default=\"獣響界アルドラン - 兽响界 Aldran\"}",
        "sections": [
          { "name": "配色方案", "count": 5, "type": "色卡" },
          { "name": "身高比例", "count": 4, "type": "角色剪影" },
          { "name": "角色介绍", "count": 4, "type": "持武器肖像", "labels": ["HC-01 卡拉斯 (Karasu)", "HC-02 加尔德 (Gardo)", "HC-03 艾拉 (Aira)", "HC-04 希罗 (Shiro)"] },
          { "name": "表情", "count": 4, "type": "每位角色 3 种表情" },
          { "name": "身体细节", "count": 4, "type": "每位角色 3 处特写" },
          { "name": "队伍/装备", "count": 3, "type": "团队与装备插图" }
        ]
      },
      {
        "position": "右上",
        "title": "{argument name=\"character 1 name\" default=\"加尔德 (虎族)\"}",
        "description": "虎族重装战士",
        "sections": [
          { "name": "全身", "count": 3, "labels": ["全身 正面", "全身 背面", "全身 左侧面"] },
          { "name": "3/4 视图", "count": 1, "labels": ["三视图辅助 (斜前)"] },
          { "name": "表情", "count": 3, "labels": ["通常 (平常)", "战斗 (专注)", "罕见柔和 (信任)"] },
          { "name": "身体细节", "count": 2, "labels": ["耳朵形状与内侧毛色", "尾巴条纹图案"] },
          { "name": "装备细节", "count": 2, "labels": ["右肩甲细节", "右手护身符 / 手部特征"] },
          { "name": "武器", "count": 1, "labels": ["大剑“钢岚 (Kouran)”"] },
          { "name": "比例", "count": 1, "labels": ["比例尺对比"] }
        ]
      },
      {
        "position": "左下",
        "title": "{argument name=\"character 2 name\" default=\"希罗 (白狐族)\"}",
        "description": "白狐族法师",
        "sections": [
          { "name": "全身", "count": 3, "labels": ["全身 正面", "全身 背面", "全身 左侧面"] },
          { "name": "3/4 视图", "count": 1, "labels": ["三视图辅助 (斜前)"] },
          { "name": "表情", "count": 3, "labels": ["通常 (静谧)", "魔力集中时", "罕见微笑"] },
          { "name": "身体细节", "count": 2, "labels": ["尾巴布局", "耳朵形状"] },
          { "name": "装备细节", "count": 2, "labels": ["袖内封印纹样", "服装细节 / 足部"] },
          { "name": "武器", "count": 1, "labels": ["魔杖“灯魂杖 (Tokonjou)”"] },
          { "name": "比例", "count": 1, "labels": ["比例尺对比"] }
        ]
      },
      {
        "position": "右下",
        "title": "{argument name=\"character 3 name\" default=\"卡拉斯 (狼族)\"}",
        "description": "狼族主角",
        "sections": [
          { "name": "全身", "count": 3, "labels": ["全身 正面", "全身 背面", "全身 左侧面"] },
          { "name": "3/4 视图", "count": 1, "labels": ["三视图辅助 (斜前)"] },
          { "name": "表情", "count": 3, "labels": ["通常 (警惕)", "战斗专注", "罕见放松"] },
          { "name": "身体细节", "count": 2, "labels": ["耳朵活动状态", "尾尖纹理"] },
          { "name": "装备细节", "count": 3, "labels": ["旅行斗篷", "战斗姿态", "装备细节 / 靴底设计"] },
          { "name": "武器", "count": 1, "labels": ["武器“牙斩 (Kibakiri)”"] },
          { "name": "比例", "count": 1, "labels": ["比例尺对比"] }
        ]
      }
    ]
  }
}

## 来源备注
- 源站作者：いにしえ@AI Director & Creator｜Will Oldgram
- 源站 UUID：98t5JKv5D7
- 源站分类：09_故事分镜角色设定

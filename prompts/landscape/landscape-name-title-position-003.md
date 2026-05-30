---
id: "landscape-name-title-position-003"
title: "星剑继承者角色设定图"
category: landscape
subcategory: "09_故事分镜角色设定"
aesthetic: null
tags: ["二次元", "幻想", "人设表", "骑士", "星剑", "藏蓝", "鎏金", "银发"]
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
  "type": "anime character reference sheet",
  "theme": "fantasy star knight, dark blue background, gold borders",
  "character": {
    "name": "{argument name=\"character name\" default=\"シリウス / SIRIUS\"}",
    "title": "{argument name=\"character title\" default=\"星剣の継承者\"}",
    "appearance": "female knight, silver hair, blue eyes with star pupils",
    "attire": "white dress, dark blue starry cape, silver armor",
    "pose": "standing, holding glowing blue starry sword"
  },
  "layout": {
    "centerpiece": "full-body portrait",
    "sections": [
      {
        "title": "Profile",
        "position": "top-left",
        "elements": [
          "NAME: {argument name=\"character name\" default=\"シリウス / SIRIUS\"}",
          "TITLE: {argument name=\"character title\" default=\"星剣の継承者\"}",
          "PROFILE: 星に選ばれた、最後の継承者。",
          "WEAPON: {argument name=\"weapon name\" default=\"星剣レガリア\"}",
          "KINGDOM: {argument name=\"kingdom name\" default=\"白亜の天文王国\"}",
          "KEYWORDS: 継承、星命、王都、加護、宿命、静謐、気品"
        ]
      },
      {
        "title": "CHARACTER DESIGN",
        "position": "top-right",
        "count": 6,
        "labels": ["face", "eye", "hair", "胸元装飾", "手甲ディテール", "脚部装甲"]
      },
      {
        "title": "TURNAROUND",
        "position": "mid-left",
        "count": 3,
        "labels": ["FRONT", "SIDE", "BACK"]
      },
      {
        "title": "WEAPON: {argument name=\"weapon name\" default=\"星剣レガリア\"}",
        "position": "bottom-left",
        "count": 4,
        "description": "1 main sword, 3 close-ups"
      },
      {
        "title": "COSTUME DETAIL",
        "position": "bottom-mid-left",
        "count": 4,
        "labels": ["外套の刺繍", "インナー生地", "金属装飾", "ベルト意匠"]
      },
      {
        "title": "ORNAMENT PATTERN",
        "position": "bottom-center",
        "count": 4,
        "labels": ["王家紋章・星図意匠"]
      },
      {
        "title": "COLOR PALETTE",
        "position": "mid-right",
        "count": 12,
        "labels": ["MAIN COLOR", "ACCENT COLOR", "MATERIAL TEXTURE"]
      },
      {
        "title": "KINGDOM: {argument name=\"kingdom name\" default=\"白亜の天文王国\"}",
        "position": "bottom-left",
        "count": 1,
        "description": "castle landscape"
      },
      {
        "title": "WORLD VIEW",
        "position": "bottom-mid-right",
        "count": 3,
        "labels": ["天文塔", "星見台", "継承儀礼の間"]
      },
      {
        "title": "KINGDOM EMBLEM",
        "position": "bottom-right",
        "count": 1,
        "labels": ["王国紋章"]
      }
    ],
    "header": "願いは、星に選ばれた。",
    "footer": "COPY: 星が堕ちる夜、王都の継承が始まる。"
  }
}

## 中文译文（源站提供）
{
  "type": "动漫角色参考图",
  "theme": "奇幻星辰骑士，深蓝色背景，金色边框",
  "character": {
    "name": "{argument name=\"character name\" default=\"シリウス / SIRIUS\"}",
    "title": "{argument name=\"character title\" default=\"星剣の継承者\"}",
    "appearance": "女性骑士，银色长发，蓝色星瞳",
    "attire": "白色礼裙，深蓝色星空斗篷，银色铠甲",
    "pose": "站姿，手持发光的蓝色星辰之剑"
  },
  "layout": {
    "centerpiece": "全身肖像",
    "sections": [
      {
        "title": "个人资料",
        "position": "top-left",
        "elements": [
          "姓名: {argument name=\"character name\" default=\"シリウス / SIRIUS\"}",
          "称号: {argument name=\"character title\" default=\"星剣の継承者\"}",
          "简介: 星辰选中的最后一位继承者。",
          "武器: {argument name=\"weapon name\" default=\"星剣レガリア\"}",
          "王国: {argument name=\"kingdom name\" default=\"白亜の天文王国\"}",
          "关键词: 继承、星命、王都、加护、宿命、静谧、高贵"
        ]
      },
      {
        "title": "角色设计",
        "position": "top-right",
        "count": 6,
        "labels": ["面部", "眼睛", "发型", "胸前装饰", "手甲细节", "腿部装甲"]
      },
      {
        "title": "三视图",
        "position": "mid-left",
        "count": 3,
        "labels": ["正面", "侧面", "背面"]
      },
      {
        "title": "武器: {argument name=\"weapon name\" default=\"星剣レガリア\"}",
        "position": "bottom-left",
        "count": 4,
        "description": "1 把主剑，3 个特写镜头"
      },
      {
        "title": "服装细节",
        "position": "bottom-mid-left",
        "count": 4,
        "labels": ["斗篷刺绣", "内衬面料", "金属装饰", "腰带设计"]
      },
      {
        "title": "装饰纹样",
        "position": "bottom-center",
        "count": 4,
        "labels": ["王室纹章・星图设计"]
      },
      {
        "title": "配色方案",
        "position": "mid-right",
        "count": 12,
        "labels": ["主色调", "点缀色", "材质纹理"]
      },
      {
        "title": "王国: {argument name=\"kingdom name\" default=\"白亜の天文王国\"}",
        "position": "bottom-left",
        "count": 1,
        "description": "城堡景观"
      },
      {
        "title": "世界观",
        "position": "bottom-mid-right",
        "count": 3,
        "labels": ["天文塔", "观星台", "继承仪式大厅"]
      },
      {
        "title": "王国纹章",
        "position": "bottom-right",
        "count": 1,
        "labels": ["王国纹章"]
      }
    ],
    "header": "愿望，被星辰所选中。",
    "footer": "文案: 星辰陨落之夜，王都的继承仪式正式开启。"
  }
}

## 来源备注
- 源站作者：みかみ.ai｜AI発信と個人開発
- 源站 UUID：nusmTPQQ1h
- 源站分类：09_故事分镜角色设定

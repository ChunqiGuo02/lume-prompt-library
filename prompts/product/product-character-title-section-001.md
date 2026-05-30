---
id: "product-character-title-section-001"
title: "动漫角色设定资料生成-2"
category: product
subcategory: "09_故事分镜角色设定"
aesthetic: null
tags: ["动漫", "魔女", "齿轮", "机械", "魔法", "镰刀", "设定集", "棕色"]
recommended_models: []
recommended_params:
  aspect_ratio: null
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
  "instruction": "Using REFERENCE_0 as the base design, generate a comprehensive anime character reference sheet (settei) on a clean off-white background. Keep the core character design intact but extract and present her in various standard reference formats.",
  "header": {
    "character_name": "{argument name=\"character name\" default=\"クロエ・アストラル\"}",
    "subtitle": "Chloe Astral",
    "document_title": "キャラクター設定資料",
    "quote": "{argument name=\"character quote\" default=\"「時の歯車は、今日も私の魔法と踊ってくれる」\"}"
  },
  "layout": {
    "left_column": {
      "section_title": "全身イラスト",
      "description": "The original complex character art from REFERENCE_0, accompanied by vertical descriptive text."
    },
    "top_right": {
      "section_title": "三面図",
      "count": 3,
      "description": "Full-body standing turnaround views (FRONT, SIDE, BACK) of the character, removing the original gear background."
    },
    "far_right": {
      "section_title": "表情集",
      "count": 4,
      "labels": ["通常", "微笑み", "驚き", "考え中"],
      "description": "Square headshot panels showing different facial expressions."
    },
    "middle_right": {
      "section_title": "武器・アイテム",
      "count": 3,
      "items": ["Scythe from reference", "New starry spellbook addition", "Bird from reference with spread wings"],
      "description": "Isolated props with accompanying text descriptions."
    },
    "bottom_row": [
      {
        "section_title": "プロフィール",
        "description": "Data table with 7 stat rows and a short biography paragraph."
      },
      {
        "section_title": "カラーパレット",
        "count": 10,
        "description": "Circular color swatches divided into 5 main colors and 5 accent colors."
      },
      {
        "section_title": "ディテール",
        "count": 3,
        "labels": ["帽子デザイン", "衣装ディテール(柄)", "靴デザイン"],
        "description": "Close-up rectangular detail crops of the hat, outfit pattern, and shoes."
      },
      {
        "section_title": "設定メモ",
        "count": 4,
        "description": "Text box containing 4 bullet points of design notes."
      }
    ]
  }
}

## 中文译文（源站提供）
{
  "instruction": "以 REFERENCE_0 为基础设计，在干净的米白色背景上生成一份全面的动漫角色设定集（settei）。保持核心角色设计不变，将其提取并以各种标准参考格式呈现。",
  "header": {
    "character_name": "{argument name=\"character name\" default=\"クロエ・アストラル\"}",
    "subtitle": "Chloe Astral",
    "document_title": "角色设定资料",
    "quote": "{argument name=\"character quote\" default=\"「時の歯車は、今日も私の魔法と踊ってくれる」\"}"
  },
  "layout": {
    "left_column": {
      "section_title": "全身插画",
      "description": "来自 REFERENCE_0 的原始复杂角色艺术，并配有垂直描述文本。"
    },
    "top_right": {
      "section_title": "三面图",
      "count": 3,
      "description": "角色的全身站立三面图（正面、侧面、背面），去除原始的齿轮背景。"
    },
    "far_right": {
      "section_title": "表情集",
      "count": 4,
      "labels": ["通常", "微笑", "惊讶", "思考"],
      "description": "展示不同面部表情的方形头像面板。"
    },
    "middle_right": {
      "section_title": "武器与道具",
      "count": 3,
      "items": ["参考图中的镰刀", "新增的星空魔法书", "参考图中张开翅膀的鸟"],
      "description": "带有文字说明的独立道具展示。"
    },
    "bottom_row": [
      {
        "section_title": "个人资料",
        "description": "包含 7 行属性数据和一段简短的人物传记。"
      },
      {
        "section_title": "配色方案",
        "count": 10,
        "description": "分为 5 种主色和 5 种强调色的圆形色卡。"
      },
      {
        "section_title": "细节展示",
        "count": 3,
        "labels": ["帽子设计", "服装细节（图案）", "鞋子设计"],
        "description": "帽子、服装图案和鞋子的矩形细节特写。"
      },
      {
        "section_title": "设定备注",
        "count": 4,
        "description": "包含 4 条设计要点的文本框。"
      }
    ]
  }
}

## 来源备注
- 源站作者：minesan
- 源站 UUID：SKC5QPsaDW
- 源站分类：09_故事分镜角色设定

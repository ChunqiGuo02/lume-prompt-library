---
id: graphic-title-description-count-0213
title: "Lumière Noir角色服装制版图"
category: graphic
subcategory: "06_图文排版视觉传达"
aesthetic: null
tags: ["日系", "制服", "纸样", "缝纫", "格纹", "领结", "西装", "格裙"]
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
  "type": "costume design and sewing pattern reference sheet",
  "header": {
    "title": "{argument name=\"brand name\" default=\"Lumière Noir\"}",
    "subtitle": "ルミエール・ノワール",
    "document_type": "{argument name=\"document title\" default=\"衣装型紙図\"}",
    "character_illustration": {
      "count": 2,
      "poses": ["front view", "back view"],
      "description": "{argument name=\"character type\" default=\"anime girl with long black hair\"} wearing a {argument name=\"outfit style\" default=\"monochrome idol uniform with white jacket and plaid skirt\"}"
    },
    "size_chart": "list of 6 body measurements"
  },
  "layout": {
    "grid_sections": [
      {
        "id": "1",
        "title": "1. ジャケット",
        "description": "Jacket pattern pieces with measurement lines",
        "piece_count": 8,
        "labels": ["前身頃", "前身頃 (裏地)", "後ろ身頃", "後ろ身頃 (裏地)", "袖", "衿", "ポケット", "ポケット口布"]
      },
      {
        "id": "2",
        "title": "2. ベスト（インナー）",
        "description": "Plaid vest pattern pieces",
        "piece_count": 2,
        "labels": ["前身頃", "後ろ身頃"]
      },
      {
        "id": "3",
        "title": "3. リボン・タイ",
        "description": "Black ribbon tie illustration with jewel",
        "piece_count": 1
      },
      {
        "id": "4",
        "title": "4. ブローチ・エンブレム土台",
        "description": "Ornate crest emblem illustration",
        "text_detail": "{argument name=\"emblem initials\" default=\"LN\"}",
        "piece_count": 1
      },
      {
        "id": "5",
        "title": "5. スカート（4段ティアード）",
        "description": "Skirt pattern pieces",
        "piece_count": 5,
        "labels": ["上段", "2段目", "3段目", "4段目", "スカート本体 (裏地)"]
      },
      {
        "id": "6",
        "title": "6. カフス（袖口）",
        "description": "Cuff pattern pieces",
        "piece_count": 3
      },
      {
        "id": "7",
        "title": "7. フリルソックス",
        "description": "White frill sock illustration",
        "piece_count": 1
      },
      {
        "id": "8",
        "title": "8. 靴（参考サイズ）",
        "description": "Black strap pump shoe illustration",
        "piece_count": 1
      }
    ],
    "bottom_sections": [
      {
        "title": "使用生地・付属品",
        "description": "Materials and accessories list",
        "elements": [
          {"type": "fabric table", "rows": 10},
          {"type": "accessories list", "items": 7}
        ]
      },
      {
        "title": "縫製ポイント & 完成イメージ",
        "description": "Sewing instructions and final product photos",
        "elements": [
          {"type": "instruction list", "count": 6},
          {"type": "diagrams", "count": 2, "description": "seam finishing and interfacing guides"},
          {"type": "mannequin photos", "count": 4, "poses": ["front full", "front half", "back half", "detail shot"]}
        ]
      }
    ]
  }
}

## 中文译文（源站提供）
{
  "type": "服装设计与缝纫纸样参考图",
  "header": {
    "title": "{argument name=\"brand name\" default=\"Lumière Noir\"}",
    "subtitle": "ルミエール・ノワール",
    "document_type": "{argument name=\"document title\" default=\"衣装型紙図\"}",
    "character_illustration": {
      "count": 2,
      "poses": ["正面视图", "背面视图"],
      "description": "身着 {argument name=\"outfit style\" default=\"带有白色夹克和格子裙的单色偶像制服\"} 的 {argument name=\"character type\" default=\"长发动漫少女\"}"
    },
    "size_chart": "6 项身体测量数据列表"
  },
  "layout": {
    "grid_sections": [
      {
        "id": "1",
        "title": "1. 夹克",
        "description": "带有测量线的夹克纸样部件",
        "piece_count": 8,
        "labels": ["前身片", "前身片 (里布)", "后身片", "后身片 (里布)", "袖子", "领子", "口袋", "口袋口布"]
      },
      {
        "id": "2",
        "title": "2. 马甲 (内搭)",
        "description": "格子马甲纸样部件",
        "piece_count": 2,
        "labels": ["前身片", "后身片"]
      },
      {
        "id": "3",
        "title": "3. 丝带领结",
        "description": "带有宝石的黑色丝带领结插图",
        "piece_count": 1
      },
      {
        "id": "4",
        "title": "4. 胸针/徽章底座",
        "description": "华丽的徽章插图",
        "text_detail": "{argument name=\"emblem initials\" default=\"LN\"}",
        "piece_count": 1
      },
      {
        "id": "5",
        "title": "5. 裙子 (四层蛋糕裙)",
        "description": "裙子纸样部件",
        "piece_count": 5,
        "labels": ["第一层", "第二层", "第三层", "第四层", "裙身 (里布)"]
      },
      {
        "id": "6",
        "title": "6. 袖口",
        "description": "袖口纸样部件",
        "piece_count": 3
      },
      {
        "id": "7",
        "title": "7. 花边袜",
        "description": "白色花边袜插图",
        "piece_count": 1
      },
      {
        "id": "8",
        "title": "8. 鞋子 (参考尺寸)",
        "description": "黑色绑带高跟鞋插图",
        "piece_count": 1
      }
    ],
    "bottom_sections": [
      {
        "title": "使用面料及配件",
        "description": "材料和配件清单",
        "elements": [
          {"type": "面料表格", "rows": 10},
          {"type": "配件清单", "items": 7}
        ]
      },
      {
        "title": "缝纫要点与成品展示",
        "description": "缝纫说明和成品照片",
        "elements": [
          {"type": "说明列表", "count": 6},
          {"type": "图示", "count": 2, "description": "接缝处理和衬布指南"},
          {"type": "人体模型照片", "count": 4, "poses": ["正面全身", "正面半身", "背面半身", "细节特写"]}
        ]
      }
    ]
  }
}

## 来源备注
- 源站作者：WTR
- 源站 UUID：Y1jKl9uzM3
- 源站分类：06_图文排版视觉传达

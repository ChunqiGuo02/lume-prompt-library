---
id: "landscape-title-position-description-001"
title: "动漫角色设定资料生成"
category: landscape
subcategory: "09_故事分镜角色设定"
aesthetic: japanese-zen-garden
tags: ["和风", "设定图", "二次元", "人设", "红色", "和服", "椿花", "和伞"]
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
  "instruction": "Using REFERENCE_0 as the base character design, generate a comprehensive, multi-section anime character reference sheet on a white background. Extract and isolate the clothing, accessories, and motifs from the reference image to populate the technical sections.",
  "type": "anime character reference sheet",
  "header": {
    "name": "{argument name=\"character name\" default=\"篝火 椿\"}",
    "furigana": "かがりび つばき",
    "tag": "CV : ───",
    "document_type": "設定資料",
    "quote": "{argument name=\"character quote\" default=\"「炎の如く咲き、椿の如く散る――その生き様こそが、我が道なり。」\"}",
    "icon": "black camellia crest"
  },
  "layout": {
    "sections": [
      {
        "title": "三面図 -正面・側面・背面-",
        "position": "top-left",
        "description": "Three-view full body turnaround",
        "count": 3,
        "labels": ["正面", "側面", "背面"]
      },
      {
        "title": "表情バリエーション",
        "position": "top-right",
        "description": "Headshot expression sheet",
        "count": 9,
        "labels": ["通常", "微笑み", "怒り", "悲しみ", "驚き", "戦闘", "憂しみ", "照れ", "目閉じ"]
      },
      {
        "title": "衣装詳細",
        "position": "mid-left",
        "description": "Flat layout of clothing components",
        "count": 7,
        "labels": ["着物", "前", "後", "袖柄", "帯", "足元", "草履", "足袋"]
      },
      {
        "title": "装備・小物",
        "position": "center",
        "description": "Weapon/prop details showing the umbrella",
        "count": 3,
        "labels": ["和傘（炎椿）", "表", "側面", "傘柄の装飾"]
      },
      {
        "title": "モチーフ・装飾",
        "position": "mid-right",
        "description": "Isolated design motifs",
        "count": 3,
        "labels": ["椿の花", "炎の文様", "翼の文様"]
      },
      {
        "title": "カラーパレット",
        "position": "bottom-left",
        "description": "Color swatches arranged in rows",
        "count": 20,
        "labels": ["髪", "瞳", "着物", "帯・小物", "炎"]
      },
      {
        "title": "世界観",
        "position": "bottom-center",
        "description": "Lore text block with a small landscape illustration of a traditional Japanese shrine at night with cherry blossoms and fire",
        "count": 1,
        "labels": ["{argument name=\"lore subtitle\" default=\"- 炎と華が織りなす、和の幻想世界 -\"}"]
      },
      {
        "title": "家紋・シンボル",
        "position": "bottom-right",
        "description": "Isolated family crest graphic with descriptive text",
        "count": 1,
        "labels": ["椿紋"]
      }
    ]
  }
}

## 中文译文（源站提供）
{
  "instruction": "以 REFERENCE_0 作为基础角色设计，在白色背景上生成一份综合性的多板块动漫角色设定集。提取并分离参考图中的服装、配饰和主题元素，以填充技术细节板块。",
  "type": "动漫角色设定集",
  "header": {
    "name": "{argument name=\"character name\" default=\"篝火 椿\"}",
    "furigana": "かがりび つばき",
    "tag": "CV : ───",
    "document_type": "设定资料",
    "quote": "{argument name=\"character quote\" default=\"「炎の如く咲き、椿の如く散る――その生き様こそが、我が道なり。」\"}",
    "icon": "黑色山茶花纹章"
  },
  "layout": {
    "sections": [
      {
        "title": "三面图 -正面・侧面・背面-",
        "position": "top-left",
        "description": "全身三面转面图",
        "count": 3,
        "labels": ["正面", "侧面", "背面"]
      },
      {
        "title": "表情变化",
        "position": "top-right",
        "description": "头部表情设定集",
        "count": 9,
        "labels": ["通常", "微笑", "愤怒", "悲伤", "惊讶", "战斗", "忧郁", "害羞", "闭眼"]
      },
      {
        "title": "服装细节",
        "position": "mid-left",
        "description": "服装组件的平铺布局",
        "count": 7,
        "labels": ["和服", "前", "后", "袖纹", "腰带", "足部", "草履", "足袋"]
      },
      {
        "title": "装备・小物",
        "position": "center",
        "description": "展示油纸伞的武器/道具细节",
        "count": 3,
        "labels": ["和伞（炎椿）", "正面", "侧面", "伞柄装饰"]
      },
      {
        "title": "主题・装饰",
        "position": "mid-right",
        "description": "独立的设计主题元素",
        "count": 3,
        "labels": ["山茶花", "火焰纹样", "羽翼纹样"]
      },
      {
        "title": "调色板",
        "position": "bottom-left",
        "description": "按行排列的色卡",
        "count": 20,
        "labels": ["头发", "瞳孔", "和服", "腰带・小物", "火焰"]
      },
      {
        "title": "世界观",
        "position": "bottom-center",
        "description": "包含夜间传统日式神社、樱花与火焰小型风景插画的背景设定文本块",
        "count": 1,
        "labels": ["{argument name=\"lore subtitle\" default=\"- 炎与华交织的日式幻想世界 -\"}"]
      },
      {
        "title": "家纹・符号",
        "position": "bottom-right",
        "description": "带有说明文字的独立家纹图案",
        "count": 1,
        "labels": ["椿纹"]
      }
    ]
  }
}

## 来源备注
- 源站作者：篝火 椿 ( ⑉• •⑉)꜆🍵🍡
- 源站 UUID：HddL73pFOD
- 源站分类：09_故事分镜角色设定

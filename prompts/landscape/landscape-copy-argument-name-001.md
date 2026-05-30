---
id: "landscape-copy-argument-name-001"
title: "2x2日式广告排版"
category: landscape
subcategory: "03_创意广告品牌设计"
aesthetic: japanese-zen-garden
tags: ["四宫格", "广告", "日系", "护肤", "旅行", "美食", "理财", "清新"]
recommended_models: []
recommended_params:
  aspect_ratio: "1:1"
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
  "type": "{argument name=\"grid layout\" default=\"2x2 grid of Japanese banner advertisements\"}",
  "panels": [
    {
      "position": "top-left",
      "theme": "skincare cosmetics",
      "subject": "close-up portrait of a serene woman with closed eyes touching her face",
      "product": "white serum bottle with silver cap",
      "brand": "mira",
      "main_copy": "{argument name=\"skincare catchphrase\" default=\"わたしの肌に、ごほうびを。\"}",
      "sub_copy": "うるおい満ちる、透明感のある素肌へ",
      "badges": {
        "count": 3,
        "labels": [
          "高保湿",
          "くすみケア",
          "敏感肌対応"
        ]
      },
      "footer_box": "ミラ モイスチャーセラム 50mL 6,380円(税込)"
    },
    {
      "position": "top-right",
      "theme": "travel agency",
      "subject": "scenic landscape of Lake Bled with a church on an island, mountains, and blue sky",
      "main_copy": "{argument name=\"travel catchphrase\" default=\"まだ見ぬ景色に、会いに行こう。\"}",
      "sub_copy": "心が動く旅を、あなたのそばに。",
      "bottom_banner": {
        "text": "未来の自分に、きっと残る。特別な体験を。",
        "footer_elements": {
          "count": 3,
          "items": [
            "海外・国内ツアー多数",
            "今だけの限定プランも！",
            "詳しくはこちら -> (yellow button)"
          ]
        }
      }
    },
    {
      "position": "bottom-left",
      "theme": "gourmet food delivery",
      "subject": "sizzling, juicy hamburger steak split in half on a black skillet, steaming, with carrots and broccoli",
      "main_copy": "{argument name=\"food catchphrase\" default=\"じゅわっと、肉のうまみ。\"}",
      "sub_copy": "素材にこだわった、本格派。",
      "badge": "国産牛100%使用 (with cow icon)",
      "bottom_banner": {
        "thumbnail": "box of 4 hamburger patties",
        "text": "ごちそうハンバーグ (4個入) 冷凍でお届けします",
        "button": "ご購入はこちら (brown button with cart icon)"
      }
    },
    {
      "position": "bottom-right",
      "theme": "finance and investment app",
      "subject": "smartphone displaying a line graph trending upwards and a balance of ¥1,234,567",
      "brand": "treee (with tree logo)",
      "main_copy": "{argument name=\"app catchphrase\" default=\"はじめよう、わたしの資産づくり。\"}",
      "sub_copy": "少額から、未来は変えられる。",
      "features": {
        "count": 3,
        "icons": [
          "pie chart/clock",
          "magnet/coins",
          "stack of coins"
        ],
        "labels": [
          "100円から投資ができる",
          "シンプルで使いやすい",
          "NISAにも対応"
        ]
      },
      "badge": "ダウンロード無料 (green circle)",
      "footer": {
        "count": 4,
        "elements": [
          "今すぐダウンロード",
          "App Store badge",
          "Google Play badge",
          "QR code"
        ]
      }
    }
  ]
}

## 中文译文（源站提供）
{
  "type": "{argument name=\"grid layout\" default=\"2x2 grid of Japanese banner advertisements\"}",
  "panels": [
    {
      "position": "top-left",
      "theme": "skincare cosmetics",
      "subject": "close-up portrait of a serene woman with closed eyes touching her face",
      "product": "white serum bottle with silver cap",
      "brand": "mira",
      "main_copy": "{argument name=\"skincare catchphrase\" default=\"わたしの肌に、ごほうびを。\"}",
      "sub_copy": "うるおい満ちる、透明感のある素肌へ",
      "badges": {
        "count": 3,
        "labels": [
          "高保湿",
          "くすみケア",
          "敏感肌対応"
        ]
      },
      "footer_box": "ミラ モイスチャーセラム 50mL 6,380円(税込)"
    },
    {
      "position": "top-right",
      "theme": "travel agency",
      "subject": "scenic landscape of Lake Bled with a church on an island, mountains, and blue sky",
      "main_copy": "{argument name=\"travel catchphrase\" default=\"まだ見ぬ景色に、会いに行こう。\"}",
      "sub_copy": "心が動く旅を、あなたのそばに。",
      "bottom_banner": {
        "text": "未来の自分に、きっと残る。特別な体験を。",
        "footer_elements": {
          "count": 3,
          "items": [
            "海外・国内ツアー多数",
            "今だけの限定プランも！",
            "詳しくはこちら -> (yellow button)"
          ]
        }
      }
    },
    {
      "position": "bottom-left",
      "theme": "gourmet food delivery",
      "subject": "sizzling, juicy hamburger steak split in half on a black skillet, steaming, with carrots and broccoli",
      "main_copy": "{argument name=\"food catchphrase\" default=\"じゅわっと、肉のうまみ。\"}",
      "sub_copy": "素材にこだわった、本格派。",
      "badge": "国産牛100%使用 (with cow icon)",
      "bottom_banner": {
        "thumbnail": "box of 4 hamburger patties",
        "text": "ごちそうハンバーグ (4個入) 冷凍でお届けします",
        "button": "ご購入はこちら (brown button with cart icon)"
      }
    },
    {
      "position": "bottom-right",
      "theme": "finance and investment app",
      "subject": "smartphone displaying a line graph trending upwards and a balance of ¥1,234,567",
      "brand": "treee (with tree logo)",
      "main_copy": "{argument name=\"app catchphrase\" default=\"はじめよう、わたしの資産づくり。\"}",
      "sub_copy": "少額から、未来は変えられる。",
      "features": {
        "count": 3,
        "icons": [
          "pie chart/clock",
          "magnet/coins",
          "stack of coins"
        ],
        "labels": [
          "100円から投資ができる",
          "シンプルで使いやすい",
          "NISAにも対応"
        ]
      },
      "badge": "ダウンロード無料 (green circle)",
      "footer": {
        "count": 4,
        "elements": [
          "今すぐダウンロード",
          "App Store badge",
          "Google Play badge",
          "QR code"
        ]
      }
    }
  ]
}

## 来源备注
- 源站作者：でぃずむ | Yuta Okada
- 源站 UUID：1Fuohif2ay
- 源站分类：03_创意广告品牌设计

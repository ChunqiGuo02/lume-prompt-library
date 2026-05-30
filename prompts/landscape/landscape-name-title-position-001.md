---
id: "landscape-name-title-position-001"
title: "日本超市促销海报"
category: landscape
subcategory: "06_图文排版视觉传达"
aesthetic: japanese-zen-garden
tags: ["日式", "传单", "超市", "促销", "鲜艳", "生鲜", "果蔬", "优惠"]
recommended_models: []
recommended_params:
  aspect_ratio: "4:3"
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
  "type": "Japanese supermarket promotional flyer",
  "header": {
    "store_name": "{argument name=\"store name\" default=\"ハピネス マーケット\"}",
    "store_directory": "List of 12 store locations and phone numbers grouped by region"
  },
  "style": "Highly dense, colorful, bold red and yellow price tags, realistic food photography, traditional Japanese retail aesthetic",
  "layout": {
    "sections": [
      {
        "title": "Tuesday Specials",
        "position": "top-left",
        "count": 3,
        "labels": ["Inari sushi pack", "Chikuwa", "Tomatoes"]
      },
      {
        "title": "Wednesday Specials",
        "position": "top-middle",
        "promotion": "{argument name=\"point multiplier\" default=\"5倍\"}",
        "count": 6,
        "labels": ["Soy sauce bottles", "Japanese sweets variety pack", "Udon noodles", "Sliced pork", "Tuna sashimi block", "Pudding"]
      },
      {
        "title": "Thursday & Friday Specials",
        "position": "top-right",
        "count": 5,
        "labels": ["Coffee bags", "Broccoli", "Daikon radish", "Pork slices", "Jumbo Gyoza"]
      },
      {
        "title": "Middle Row Discounts",
        "position": "center-horizontal",
        "count": 7,
        "labels": ["Apples 10% off", "Lettuce", "Yogurt", "Sushi platter", "Yogurt multi-pack", "Frozen foods 10% off", "Rice 10% off"]
      },
      {
        "title": "Uniform Sale Low Price",
        "position": "bottom-left",
        "price": "{argument name=\"low uniform price\" default=\"98\"}",
        "count": 6,
        "labels": ["Assorted fruits", "Yogurt and dairy", "Natto and Tofu", "Ice cream", "Fried chicken", "Salmon fillets"]
      },
      {
        "title": "Uniform Sale High Price",
        "position": "bottom-middle",
        "price": "{argument name=\"high uniform price\" default=\"500\"}",
        "count": 4,
        "labels": ["Pork belly slices", "Mikan and grapes", "Seafood mix", "Grilled eel"]
      },
      {
        "title": "Right Sidebar Promotions",
        "position": "bottom-right",
        "count": 3,
        "labels": ["Premium Charge Day", "Point Card Campaign", "Fried deli foods"]
      }
    ]
  },
  "footer": {
    "sale_period": "{argument name=\"sale period\" default=\"4/14(火) ▶ 17(金)\"}",
    "disclaimers": "Standard fine print text and secondary logo"
  }
}

## 中文译文（源站提供）
{
  "type": "Japanese supermarket promotional flyer",
  "header": {
    "store_name": "{argument name=\"store name\" default=\"ハピネス マーケット\"}",
    "store_directory": "List of 12 store locations and phone numbers grouped by region"
  },
  "style": "Highly dense, colorful, bold red and yellow price tags, realistic food photography, traditional Japanese retail aesthetic",
  "layout": {
    "sections": [
      {
        "title": "Tuesday Specials",
        "position": "top-left",
        "count": 3,
        "labels": ["Inari sushi pack", "Chikuwa", "Tomatoes"]
      },
      {
        "title": "Wednesday Specials",
        "position": "top-middle",
        "promotion": "{argument name=\"point multiplier\" default=\"5倍\"}",
        "count": 6,
        "labels": ["Soy sauce bottles", "Japanese sweets variety pack", "Udon noodles", "Sliced pork", "Tuna sashimi block", "Pudding"]
      },
      {
        "title": "Thursday & Friday Specials",
        "position": "top-right",
        "count": 5,
        "labels": ["Coffee bags", "Broccoli", "Daikon radish", "Pork slices", "Jumbo Gyoza"]
      },
      {
        "title": "Middle Row Discounts",
        "position": "center-horizontal",
        "count": 7,
        "labels": ["Apples 10% off", "Lettuce", "Yogurt", "Sushi platter", "Yogurt multi-pack", "Frozen foods 10% off", "Rice 10% off"]
      },
      {
        "title": "Uniform Sale Low Price",
        "position": "bottom-left",
        "price": "{argument name=\"low uniform price\" default=\"98\"}",
        "count": 6,
        "labels": ["Assorted fruits", "Yogurt and dairy", "Natto and Tofu", "Ice cream", "Fried chicken", "Salmon fillets"]
      },
      {
        "title": "Uniform Sale High Price",
        "position": "bottom-middle",
        "price": "{argument name=\"high uniform price\" default=\"500\"}",
        "count": 4,
        "labels": ["Pork belly slices", "Mikan and grapes", "Seafood mix", "Grilled eel"]
      },
      {
        "title": "Right Sidebar Promotions",
        "position": "bottom-right",
        "count": 3,
        "labels": ["Premium Charge Day", "Point Card Campaign", "Fried deli foods"]
      }
    ]
  },
  "footer": {
    "sale_period": "{argument name=\"sale period\" default=\"4/14(火) ▶ 17(金)\"}",
    "disclaimers": "Standard fine print text and secondary logo"
  }
}

## 来源备注
- 源站作者：オオギ
- 源站 UUID：mS3DdByZHG
- 源站分类：06_图文排版视觉传达

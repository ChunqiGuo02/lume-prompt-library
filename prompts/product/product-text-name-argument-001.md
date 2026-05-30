---
id: "product-text-name-argument-001"
title: "日本啤酒新品上市广告"
category: product
subcategory: "03_创意广告品牌设计"
aesthetic: japanese-zen-garden
tags: ["啤酒", "新品", "日式", "麦芽", "促销", "抽奖", "清新", "明亮"]
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
  "type": "Japanese beverage advertisement banner",
  "subject": {
    "description": "Young Japanese woman, smiling warmly, looking at the viewer, wearing a white blouse, holding a can of beer.",
    "speech_bubble": "{argument name=\"speech bubble text\" default=\"今日のごほうびに、この一杯！\"}"
  },
  "product": {
    "name": "{argument name=\"product name\" default=\"PREMIUM LAGER\"}",
    "packaging": "white and gold beer can with hop graphic and blue text"
  },
  "layout": {
    "background": "soft, bright, out-of-focus outdoor greenery",
    "sections": [
      {
        "position": "top-left",
        "type": "catchphrases",
        "text": [
          "{argument name=\"main catchphrase\" default=\"新しいおいしさ、できました。\"}",
          "{argument name=\"secondary catchphrase\" default=\"爽やかに香る、キレのあるうまさ！\"}"
        ]
      },
      {
        "position": "center-left",
        "type": "product_branding",
        "main_text": "{argument name=\"product name\" default=\"PREMIUM LAGER\"}",
        "sub_text": "プレミアムラガー",
        "badges": ["新発売", "麦芽100%"],
        "graphics": "golden hop illustration"
      },
      {
        "position": "middle-left",
        "type": "feature_highlights",
        "count": 3,
        "style": "rounded rectangular boxes with icons",
        "items": [
          {"icon": "hop", "text": "華やかな香り アロマホップ使用"},
          {"icon": "water drop", "text": "心地よい キレのある後味"},
          {"icon": "wheat", "text": "麦芽100%の コク深いうまさ"}
        ]
      },
      {
        "position": "bottom",
        "type": "promotional_banner",
        "background_color": "dark blue",
        "main_text": "新・プレミアムラガー、誕生。",
        "campaign_box": {
          "badge": "抽選で当たる！",
          "text": "{argument name=\"campaign text\" default=\"コンビニ無料引換券 抽選キャンペーンはこちら >\"}",
          "element": "QR code"
        },
        "footer": "legal drinking age warnings and recycling logos"
      }
    ]
  }
}

## 中文译文（源站提供）
{
  "type": "日式饮品广告横幅",
  "subject": {
    "description": "年轻日本女性，笑容温暖，注视着观众，身穿白色衬衫，手持一罐啤酒。",
    "speech_bubble": "{argument name=\"speech bubble text\" default=\"今日のごほうびに、この一杯！\"}"
  },
  "product": {
    "name": "{argument name=\"product name\" default=\"PREMIUM LAGER\"}",
    "packaging": "带有啤酒花图案和蓝色文字的白金配色啤酒罐"
  },
  "layout": {
    "background": "柔和、明亮、虚化的户外绿植背景",
    "sections": [
      {
        "position": "左上角",
        "type": "宣传标语",
        "text": [
          "{argument name=\"main catchphrase\" default=\"新しいおいしさ、できました。\"}",
          "{argument name=\"secondary catchphrase\" default=\"爽やかに香る、キレのあるうまさ！\"}"
        ]
      },
      {
        "position": "中左侧",
        "type": "产品品牌",
        "main_text": "{argument name=\"product name\" default=\"PREMIUM LAGER\"}",
        "sub_text": "プレミアムラガー",
        "badges": ["新発売", "麦芽100%"],
        "graphics": "金色啤酒花插图"
      },
      {
        "position": "中左侧下方",
        "type": "产品亮点",
        "count": 3,
        "style": "带图标的圆角矩形框",
        "items": [
          {"icon": "hop", "text": "华丽香气，使用香气啤酒花"},
          {"icon": "water drop", "text": "清爽怡人，回味干脆"},
          {"icon": "wheat", "text": "100% 麦芽，口感醇厚"}
        ]
      },
      {
        "position": "底部",
        "type": "促销横幅",
        "background_color": "深蓝色",
        "main_text": "新・プレミアムラガー、誕生。",
        "campaign_box": {
          "badge": "抽奖赢好礼！",
          "text": "{argument name=\"campaign text\" default=\"コンビニ無料引換券 抽選キャンペーンはこちら >\"}",
          "element": "二维码"
        },
        "footer": "法定饮酒年龄警告及回收标志"
      }
    ]
  }
}

## 来源备注
- 源站作者：アドブルを創業する人│100日後に起業
- 源站 UUID：39xLqJ4DWp
- 源站分类：03_创意广告品牌设计

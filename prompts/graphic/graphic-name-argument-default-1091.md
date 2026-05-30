---
id: graphic-name-argument-default-1091
title: "血糖监测两周体验计划"
category: graphic
subcategory: "06_图文排版视觉传达"
aesthetic: null
tags: ["简约", "专业", "医疗", "健康", "血糖", "监测", "宣传", "传单"]
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
  "type": "promotional flyer",
  "style": "clean, medical, professional, airy",
  "color_palette": ["white", "dark green", "black"],
  "layout": {
    "hero": {
      "headline": "{argument name=\"main headline\" default=\"自分の体の正解を、知る2週間。\"}",
      "subheadline": "{argument name=\"program name\" default=\"血糖モニタリングプログラム\"}",
      "image": "{argument name=\"hero image subject\" default=\"Smiling Asian woman in a white t-shirt, looking up and to the right, wearing a round white continuous glucose monitor sensor on her upper arm. Bright, airy background with blurred plants.\"}",
      "intro_text_paragraphs": 4
    },
    "middle_section": {
      "box_title": "プログラム内容",
      "checklist_count": 7,
      "checklist_items": [
        "リブレセンサー装着＋専用アプリ導入サポート",
        "食事・生活パターンのヒアリング",
        "血糖値の学習教材",
        "2週間の血糖データ計測",
        "中間フィードバック (LINE)",
        "最終フィードバック (LINE)",
        "パーソナル血糖レポート"
      ],
      "visuals": [
        "smartphone UI mockup showing blood sugar reading '112' and a green line graph",
        "dark green circular badge with text 'あなたの毎日がデータで見えてくる。'"
      ]
    },
    "bottom_section": {
      "recommendations_title": "こんな方におすすめ",
      "recommendations_count": 3,
      "recommendations_items": [
        "健康診断で血糖値が気になると言われた",
        "食事に気をつけてるのに数値が改善しない",
        "自分に合った食べ方を知りたい"
      ],
      "pricing": {
        "label": "料金",
        "amount": "{argument name=\"price\" default=\"¥35,000\"}",
        "note": "(税込・センサー代込み)"
      }
    },
    "footer": {
      "background_color": "dark green",
      "provider": "{argument name=\"company name\" default=\"百歳製造所\"}",
      "representative": "健康顧問 林 利生太",
      "contact_info": "TEL placeholder and support text",
      "badge": "circular badge with text 'まずはお気軽にご相談ください'"
    }
  }
}

## 中文译文（源站提供）
{
  "type": "宣传单",
  "style": "简洁、医疗、专业、通透",
  "color_palette": ["白色", "深绿色", "黑色"],
  "layout": {
    "hero": {
      "headline": "{argument name=\"main headline\" default=\"了解身体真相的 2 周时间。\"}",
      "subheadline": "{argument name=\"program name\" default=\"血糖监测项目\"}",
      "image": "{argument name=\"hero image subject\" default=\"一位身穿白色 T 恤的亚洲女性微笑着，看向右上方，上臂佩戴着圆形的白色动态血糖监测传感器。背景明亮通透，带有模糊的植物。\"}",
      "intro_text_paragraphs": 4
    },
    "middle_section": {
      "box_title": "项目内容",
      "checklist_count": 7,
      "checklist_items": [
        "Libre 传感器佩戴及专属 App 安装支持",
        "饮食与生活习惯问询",
        "血糖值学习资料",
        "2 周血糖数据监测",
        "中期反馈 (LINE)",
        "最终反馈 (LINE)",
        "个人血糖报告"
      ],
      "visuals": [
        "显示血糖读数为 '112' 和绿色折线图的智能手机 UI 模型",
        "深绿色圆形徽章，文字为 '通过数据洞察你的每一天。'"
      ]
    },
    "bottom_section": {
      "recommendations_title": "推荐人群",
      "recommendations_count": 3,
      "recommendations_items": [
        "体检时被告知需要关注血糖值",
        "注意饮食但数值没有改善",
        "想了解适合自己的饮食方式"
      ],
      "pricing": {
        "label": "费用",
        "amount": "{argument name=\"price\" default=\"¥35,000\"}",
        "note": "(含税，包含传感器费用)"
      }
    },
    "footer": {
      "background_color": "深绿色",
      "provider": "{argument name=\"company name\" default=\"百岁制造所\"}",
      "representative": "健康顾问 林 利生太",
      "contact_info": "电话占位符及支持文本",
      "badge": "圆形徽章，文字为 '欢迎随时咨询'"
    }
  }
}

## 来源备注
- 源站作者：RYUTA⛰️高知の山奥
- 源站 UUID：PkRMaT4uCg
- 源站分类：06_图文排版视觉传达

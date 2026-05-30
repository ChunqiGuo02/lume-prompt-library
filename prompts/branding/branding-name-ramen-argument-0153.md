---
id: branding-name-ramen-argument-0153
title: "四格广告排版设计模板"
category: branding
subcategory: "03_创意广告品牌设计"
aesthetic: japanese-zen-garden
tags: ["广告", "日系", "分栏", "竖版", "美食", "时尚", "旅行", "科技"]
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
  "type": "four-panel advertisement mockup",
  "layout": "vertical split into four equal columns",
  "panels": [
    {
      "position": "far left",
      "theme": "food advertisement",
      "subject": "steaming bowl of authentic soy sauce ramen with sliced pork, half a soft-boiled egg, bamboo shoots, and green onions",
      "background": "dark, moody lighting",
      "typography": {
        "catchphrase": "{argument name=\"ramen catchphrase\" default=\"この一杯に、魂を込めて。\"}",
        "subtext": "ultimate ramen maximizing ingredient umami",
        "brand_name": "麺心",
        "details": "authentic soy sauce ramen 980 yen",
        "footer": "Tokyo Shibuya address and business hours"
      }
    },
    {
      "position": "mid-left",
      "theme": "fashion lookbook",
      "subject": "young Japanese woman looking back over her shoulder, wearing a sheer white long-sleeve top",
      "background": "light grey studio backdrop",
      "typography": {
        "headline": "{argument name=\"fashion brand\" default=\"SHEER\"}",
        "subheadline": "NEW COLLECTION",
        "vertical_text": "wearing transparency",
        "details": "SPRING / SUMMER 2024 3.15 fri - Start",
        "button": "特設サイトを見る >"
      }
    },
    {
      "position": "mid-right",
      "theme": "travel agency promotion",
      "subject": "woman in a white summer dress and straw hat walking down white stairs",
      "background": "{argument name=\"travel destination\" default=\"Santorini, Greece\"} with iconic blue dome churches, white buildings, and deep blue Aegean sea",
      "typography": {
        "top_text": "to an unseen spectacular view",
        "main_title": "Travel",
        "subtitle": "let's take a journey that moves your heart",
        "badge": "summer travel sale until 5.31 FRI",
        "bottom_nav": {
          "count": 3,
          "labels": ["海外ツアー", "国内ツアー", "航空券+ホテル"]
        },
        "button": "今すぐチェック！ >"
      }
    },
    {
      "position": "far right",
      "theme": "B2B SaaS software",
      "subject": "open laptop displaying a data dashboard, surrounded by floating UI elements",
      "background": "light purple and white gradient",
      "ui_elements": {
        "count": 3,
        "labels": ["AIアシスタント", "タスク管理", "データ分析"]
      },
      "typography": {
        "logo": "{argument name=\"tech product name\" default=\"Aideal\"}",
        "headline": "{argument name=\"tech headline\" default=\"仕事が、もっとスマートに。\"}",
        "subheadline": "AI creates time for you",
        "badge": "over 10,000 companies",
        "button": "無料で始める >",
        "url": "www.aideal.jp"
      }
    }
  ]
}

## 中文译文（源站提供）
{
  "type": "四联广告样机",
  "layout": "垂直平分为四列",
  "panels": [
    {
      "position": "最左侧",
      "theme": "美食广告",
      "subject": "一碗热气腾腾的正宗酱油拉面，配有叉烧肉、半颗溏心蛋、笋干和葱花",
      "background": "深色、质感光影",
      "typography": {
        "catchphrase": "{argument name=\"ramen catchphrase\" default=\"この一杯に、魂を込めて。\"}",
        "subtext": "极致拉面，尽显食材鲜味",
        "brand_name": "麺心",
        "details": "正宗酱油拉面 980 日元",
        "footer": "东京涩谷地址及营业时间"
      }
    },
    {
      "position": "中左侧",
      "theme": "时尚画册",
      "subject": "一位年轻日本女性回眸，身穿透明感白色长袖上衣",
      "background": "浅灰色摄影棚背景",
      "typography": {
        "headline": "{argument name=\"fashion brand\" default=\"SHEER\"}",
        "subheadline": "全新系列",
        "vertical_text": "穿出透明感",
        "details": "2024 年春夏 3 月 15 日（周五）起",
        "button": "查看特设网站 >"
      }
    },
    {
      "position": "中右侧",
      "theme": "旅行社推广",
      "subject": "一位身穿白色夏日连衣裙、戴着草帽的女性走下白色台阶",
      "background": "{argument name=\"travel destination\" default=\"希腊圣托里尼\"}，背景为标志性的蓝色圆顶教堂、白色建筑和深蓝色的爱琴海",
      "typography": {
        "top_text": "前往未曾见过的绝景",
        "main_title": "旅行",
        "subtitle": "开启一场触动心灵的旅程",
        "badge": "夏季旅行特惠，截止至 5 月 31 日（周五）",
        "bottom_nav": {
          "count": 3,
          "labels": ["海外旅游", "国内旅游", "机票+酒店"]
        },
        "button": "立即查看！ >"
      }
    },
    {
      "position": "最右侧",
      "theme": "B2B SaaS 软件",
      "subject": "一台打开的笔记本电脑，显示着数据仪表盘，周围环绕着悬浮的 UI 元素",
      "background": "浅紫色与白色渐变",
      "ui_elements": {
        "count": 3,
        "labels": ["AI Agent", "任务管理", "数据分析"]
      },
      "typography": {
        "logo": "{argument name=\"tech product name\" default=\"Aideal\"}",
        "headline": "{argument name=\"tech headline\" default=\"仕事が、もっとスマートに。\"}",
        "subheadline": "AI 为你创造时间",
        "badge": "超过 10,000 家企业使用",
        "button": "免费开始 >",
        "url": "www.aideal.jp"
      }
    }
  ]
}

## 来源备注
- 源站作者：もっつぃ🌳
- 源站 UUID：NjzxpGBkLS
- 源站分类：03_创意广告品牌设计

---
id: "landscape-copy-name-argument-002"
title: "2x2网格日式广告模板"
category: landscape
subcategory: "03_创意广告品牌设计"
aesthetic: japanese-zen-garden
tags: ["日式", "广告", "护肤", "旅行", "食品", "金融", "清新", "简约"]
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
  "type": "2x2 grid of Japanese advertisement banners",
  "layout": {
    "grid_size": "2x2",
    "panels": [
      {
        "position": "top-left",
        "industry": "skincare cosmetics",
        "visuals": "Portrait of a young Asian woman with clear, glowing skin gently touching her face. 2 sleek silver and white cosmetic bottles/jars labeled 'SUIREN'.",
        "typography": {
          "badge": "6.1 NEW Debut",
          "main_copy": "{argument name=\"skincare catchphrase\" default=\"透明感、満ちる。\"}",
          "sub_copy": "肌が変わると、毎日が変わる。",
          "brand_text": "新・エイジングケアライン誕生 SUIREN -スイレン-"
        }
      },
      {
        "position": "top-right",
        "industry": "travel agency",
        "visuals": "Back view of a woman in a straw hat and white shirt looking out over a picturesque European lake town with mountains. A small hand-drawn airplane trail.",
        "typography": {
          "english_script": "Find your Journey",
          "main_copy": "{argument name=\"travel catchphrase\" default=\"心が動く旅へ。\"}",
          "sub_copy": "まだ見ぬ景色が、あなたを待っている。",
          "discount_badge": "yellow circle reading '今だけ! 最大 20% OFF 6.30まで'",
          "footer_bar": "dark blue bar with '初夏のヨーロッパキャンペーン' and a button '詳しくはこちら >'"
        }
      },
      {
        "position": "bottom-left",
        "industry": "food product",
        "visuals": "Close-up of a bowl of fluffy white rice topped with bonito flakes and a raw egg yolk. Dark soy sauce is being poured from a small ceramic pitcher. A stand-up pouch product package with a blue wave pattern.",
        "typography": {
          "main_copy": "{argument name=\"food catchphrase\" default=\"毎日のごはんを、もっと美味しく。\"}",
          "product_name": "日々のだし",
          "sub_copy": "化学調味料・保存料 無添加 素材のうまみを、まるごと。",
          "badge": "だしパック 30袋入"
        }
      },
      {
        "position": "bottom-right",
        "industry": "fintech app",
        "visuals": "A modern smartphone displaying a financial dashboard UI with a blue line chart and portfolio breakdown. Clean white and blue color scheme.",
        "typography": {
          "logo": "M {argument name=\"finance app name\" default=\"MoneyPath\"}",
          "main_copy": "未来の自分のために、{argument name=\"finance catchphrase\" default=\"今はじめる資産形成\"}",
          "sub_copy": "初心者でも安心のシンプル投資アプリ",
          "promo_badge": "blue circle with gift icon reading '新規登録で 1,000円分のポイントプレゼント!'",
          "footer_features": "blue bar with 4 distinct icons and text blocks detailing app benefits"
        }
      }
    ]
  }
}

## 中文译文（源站提供）
{
  "type": "2x2 日式广告横幅网格",
  "layout": {
    "grid_size": "2x2",
    "panels": [
      {
        "position": "左上",
        "industry": "护肤化妆品",
        "visuals": "一位皮肤清透、散发光泽的年轻亚洲女性轻触脸部的肖像。两瓶贴有“SUIREN”标签的时尚银白色化妆品瓶/罐。",
        "typography": {
          "badge": "6.1 新品发布",
          "main_copy": "{argument name=\"skincare catchphrase\" default=\"透明感、満ちる。\"}",
          "sub_copy": "肌肤改变，生活随之改变。",
          "brand_text": "全新抗衰老系列 SUIREN -睡莲- 诞生"
        }
      },
      {
        "position": "右上",
        "industry": "旅行社",
        "visuals": "一位戴着草帽、身穿白衬衫的女性背影，眺望着风景如画的欧洲湖畔小镇和群山。画面中有一条手绘的小飞机航迹。",
        "typography": {
          "english_script": "Find your Journey",
          "main_copy": "{argument name=\"travel catchphrase\" default=\"心が動く旅へ。\"}",
          "sub_copy": "未曾见过的风景，正在等待着你。",
          "discount_badge": "黄色圆圈，文字为“限时特惠！最高 20% OFF，截止至 6.30”",
          "footer_bar": "深蓝色横条，带有“初夏欧洲之旅活动”字样及“了解详情 >”按钮"
        }
      },
      {
        "position": "左下",
        "industry": "食品",
        "visuals": "特写镜头：一碗撒有鲣鱼干和生蛋黄的蓬松白米饭。深色酱油正从一个小陶瓷壶中倒出。背景是一个带有蓝色波浪图案的自立袋包装。",
        "typography": {
          "main_copy": "{argument name=\"food catchphrase\" default=\"毎日のごはんを、もっと美味しく。\"}",
          "product_name": "日常高汤包",
          "sub_copy": "无化学调味料、无防腐剂，保留食材原汁原味。",
          "badge": "高汤包 30 袋装"
        }
      },
      {
        "position": "右下",
        "industry": "金融科技 App",
        "visuals": "一部现代智能手机，屏幕显示带有蓝色折线图和投资组合分析的金融仪表板 UI。整体采用简洁的白蓝配色。",
        "typography": {
          "logo": "M {argument name=\"finance app name\" default=\"MoneyPath\"}",
          "main_copy": "为了未来的自己，{argument name=\"finance catchphrase\" default=\"今はじめる資産形成\"}",
          "sub_copy": "新手也能安心使用的极简投资 App",
          "promo_badge": "带有礼品图标的蓝色圆圈，文字为“新用户注册即送 1,000 日元积分！”",
          "footer_features": "蓝色横条，包含 4 个不同的图标和详细说明 App 优势的文字块"
        }
      }
    ]
  }
}

## 来源备注
- 源站作者：かなまる
- 源站 UUID：hVhRAL6YzT
- 源站分类：03_创意广告品牌设计

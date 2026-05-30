---
id: graphic-name-price-argument-1123
title: "豆芽主题餐厅促销海报"
category: graphic
subcategory: "06_图文排版视觉传达"
aesthetic: japanese-zen-garden
tags: ["海报", "餐饮", "日式", "促销", "豆芽", "美食", "价目", "清爽"]
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
  "type": "restaurant promotional menu poster",
  "theme": "{argument name=\"main ingredient\" default=\"もやし\"} fair",
  "header": {
    "ribbon_text": "{argument name=\"catchphrase\" default=\"シャキシャキ食感！\"}",
    "main_title": "{argument name=\"fair title\" default=\"もやしフェア\"}",
    "sub_text": "食べて元気！もやしで満腹！",
    "description": "シャキシャキのもやしをたっぷり使った、この季節だけのおすすめメニュー！",
    "background_image": "bamboo basket overflowing with fresh raw bean sprouts"
  },
  "main_dishes": [
    {
      "image": "stir-fry with pork, bean sprouts, and garlic chives on a white plate with red stripes",
      "badge": "にんにく醤油味",
      "name": "{argument name=\"dish 1 name\" default=\"もやしと豚肉のスタミナ炒め定食\"}",
      "price": "¥780 (税込¥858)"
    },
    {
      "image": "spicy noodle soup with minced meat, bean sprouts, green onions, and raw egg yolk in a black bowl",
      "badge": "ピリ辛肉味噌",
      "name": "もやしたっぷり担々麺",
      "price": "¥730 (税込¥803)"
    },
    {
      "image": "chicken and bean sprouts on a hot iron plate with melting butter",
      "badge": "鶏ガラペッパー",
      "name": "もやしとチキンの鉄板バターペッパー",
      "price": "¥680 (税込¥748)"
    },
    {
      "image": "fried rice with bean sprouts on a white plate",
      "badge": "しゃきしゃき",
      "name": "もやしチャーハン",
      "price": "¥590 (税込¥649)"
    }
  ],
  "bottom_section": {
    "title": "一緒にどうぞ！お得なセット",
    "set_options_count": 4,
    "options": [
      { "name": "ドリンクバーセット", "image": "three assorted drinks", "price": "+¥220" },
      { "name": "サラダセット", "image": "small green salad", "price": "+¥180" },
      { "name": "スープセット", "image": "yellow soup in a white cup", "price": "+¥150" },
      { "name": "ドリンクバー＆サラダセット", "image": "drinks and salad", "price": "+¥350" }
    ]
  },
  "footer": {
    "fine_print": "※写真はイメージです。※食材の産地、内容は季節により異なる場合がございます。※22時以降は10%の深夜料金を加算させていただきます。",
    "restaurant_logo": "ファミリーレストラン {argument name=\"restaurant name\" default=\"グリーンハウス\"}"
  }
}

## 中文译文（源站提供）
{
  "type": "餐厅促销菜单海报",
  "theme": "{argument name=\"main ingredient\" default=\"豆芽\"} 主题展",
  "header": {
    "ribbon_text": "{argument name=\"catchphrase\" default=\"爽脆口感！\"}",
    "main_title": "{argument name=\"fair title\" default=\"豆芽主题展\"}",
    "sub_text": "吃出活力！豆芽让你饱腹满足！",
    "description": "选用大量爽脆豆芽，为您呈现本季限定推荐菜单！",
    "background_image": "装满新鲜生豆芽的竹篮"
  },
  "main_dishes": [
    {
      "image": "白底红条纹盘子上的猪肉豆芽韭菜炒菜",
      "badge": "蒜香酱油味",
      "name": "{argument name=\"dish 1 name\" default=\"豆芽猪肉元气炒菜定食\"}",
      "price": "¥780 (含税 ¥858)"
    },
    {
      "image": "黑色碗中盛放的担担面，配有肉末、豆芽、葱花和生蛋黄",
      "badge": "香辣肉味噌",
      "name": "豆芽满满担担面",
      "price": "¥730 (含税 ¥803)"
    },
    {
      "image": "铁板上滋滋作响的鸡肉豆芽，配有融化的黄油",
      "badge": "鸡骨胡椒风味",
      "name": "豆芽鸡肉铁板黄油胡椒烧",
      "price": "¥680 (含税 ¥748)"
    },
    {
      "image": "白盘盛放的豆芽炒饭",
      "badge": "爽脆口感",
      "name": "豆芽炒饭",
      "price": "¥590 (含税 ¥649)"
    }
  ],
  "bottom_section": {
    "title": "搭配享用更划算！超值套餐",
    "set_options_count": 4,
    "options": [
      { "name": "饮料吧套餐", "image": "三种精选饮料", "price": "+¥220" },
      { "name": "沙拉套餐", "image": "小份绿色沙拉", "price": "+¥180" },
      { "name": "汤品套餐", "image": "白色杯中的黄色汤品", "price": "+¥150" },
      { "name": "饮料吧 & 沙拉套餐", "image": "饮料和沙拉", "price": "+¥350" }
    ]
  },
  "footer": {
    "fine_print": "※图片仅供参考。※食材产地及内容可能随季节有所变动。※22点后将加收 10% 的深夜服务费。",
    "restaurant_logo": "家庭餐厅 {argument name=\"restaurant name\" default=\"Green House\"}"
  }
}

## 来源备注
- 源站作者：とらの
- 源站 UUID：GK7n4YraES
- 源站分类：06_图文排版视觉传达

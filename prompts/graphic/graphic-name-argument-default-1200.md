---
id: graphic-name-argument-default-1200
title: "高端奢侈品电商落地页"
category: graphic
subcategory: "06_图文排版视觉传达"
aesthetic: null
tags: ["轻奢", "极简", "优雅", "高级", "法式", "包包", "珠宝", "腕表"]
recommended_models: []
recommended_params:
  aspect_ratio: "9:16"
  quality: null
  style_strength: null
sample_outputs: []
quality_tier: B
author: "ChunqiGuo02"
source: "Leader Prompt Gallery (https://www.leaderai.top/mid-api/lab/image_prompt/index.html)"
language: en
created_at: 2026-05-30
version: "1.0.0"
related_to: []
---

# 正文 prompt
{
  "type": "e-commerce landing page mockup",
  "brand": "{argument name=\"brand name\" default=\"LUMIÈRE\"}",
  "aesthetic": "{argument name=\"aesthetic\" default=\"luxury, minimalist, elegant, neutral tones\"}",
  "layout": {
    "header": {
      "logo": "{argument name=\"brand name\" default=\"LUMIÈRE\"}",
      "navigation": ["NEW IN", "HANDBAGS", "JEWELRY", "COLLECTIONS", "MAISON", "ABOUT"],
      "icons": ["search", "user", "cart"]
    },
    "sections": [
      {
        "name": "Hero",
        "text": {
          "headline": "{argument name=\"hero headline\" default=\"Crafted for Timeless Elegance\"}",
          "subheadline": "Where Artistry Meets Uncompromising Quality.",
          "button": "DISCOVER THE COLLECTION"
        },
        "imagery": "cream structured handbag with gold clasp on stone plinth, silk scarf with brand name, soft leaf shadows"
      },
      {
        "name": "Product Grid",
        "title": "EXPLORE OUR WORLD",
        "count": 4,
        "items": [
          { "image": "black crocodile handbag on marble", "label": "HANDBAGS", "sublabel": "Discover" },
          { "image": "diamond stud earrings on silk", "label": "JEWELRY", "sublabel": "Discover" },
          { "image": "classic watch with leather strap on silk", "label": "WATCHES", "sublabel": "Discover" },
          { "image": "white candle on gold tray", "label": "MAISON", "sublabel": "Discover" }
        ]
      },
      {
        "name": "Featured Product",
        "layout": "diagonal split",
        "text": {
          "kicker": "FEATURED",
          "title": "{argument name=\"featured product name\" default=\"Le Sac Éternel\"}",
          "description": "A Statement of Enduring Style.",
          "link": "EXPLORE NOW"
        },
        "imagery": "black structured handbag with gold clasp on marble surface"
      },
      {
        "name": "Brand Story",
        "layout": "two-column",
        "imagery": "Parisian Haussmann architecture framed by leaves",
        "text": {
          "kicker": "THE LUMIÈRE STORY",
          "headline": "{argument name=\"story headline\" default=\"Heritage. Craftsmanship. Vision.\"}",
          "body": "Born in the heart of Paris, Lumière has been a symbol of refined luxury for generations. Our creations are crafted by master artisans, blending timeless design with unparalleled attention to detail.",
          "link": "DISCOVER OUR STORY",
          "watermark": "faint circular L logo"
        }
      },
      {
        "name": "Trust Bar",
        "count": 4,
        "items": [
          { "icon": "diamond", "title": "EXCEPTIONAL QUALITY", "subtitle": "Meticulous Craftsmanship" },
          { "icon": "truck", "title": "COMPLIMENTARY DELIVERY", "subtitle": "Insured & Signature Required" },
          { "icon": "gift box", "title": "EXCLUSIVE SERVICES", "subtitle": "Personal Shopping & Care" },
          { "icon": "headset", "title": "CLIENT SERVICE", "subtitle": "+33 1 42 86 95 28" }
        ]
      }
    ]
  }
}

## 中文译文（源站提供）
{
  "type": "电商落地页设计稿",
  "brand": "{argument name=\"brand name\" default=\"LUMIÈRE\"}",
  "aesthetic": "{argument name=\"aesthetic\" default=\"奢华、极简、优雅、中性色调\"}",
  "layout": {
    "header": {
      "logo": "{argument name=\"brand name\" default=\"LUMIÈRE\"}",
      "navigation": ["新品上市", "手袋", "珠宝", "系列", "品牌之家", "关于我们"],
      "icons": ["搜索", "用户", "购物车"]
    },
    "sections": [
      {
        "name": "Hero",
        "text": {
          "headline": "{argument name=\"hero headline\" default=\"铸就永恒优雅\"}",
          "subheadline": "艺术与极致品质的交汇。",
          "button": "探索系列"
        },
        "imagery": "放置在石质底座上的奶油色结构感手袋，带有品牌名称的丝巾，柔和的叶影"
      },
      {
        "name": "Product Grid",
        "title": "探索我们的世界",
        "count": 4,
        "items": [
          { "image": "大理石上的黑色鳄鱼纹手袋", "label": "手袋", "sublabel": "探索" },
          { "image": "丝绸上的钻石耳钉", "label": "珠宝", "sublabel": "探索" },
          { "image": "丝绸上配有皮质表带的经典腕表", "label": "腕表", "sublabel": "探索" },
          { "image": "金色托盘上的白色蜡烛", "label": "品牌之家", "sublabel": "探索" }
        ]
      },
      {
        "name": "Featured Product",
        "layout": "对角线分割",
        "text": {
          "kicker": "精选",
          "title": "{argument name=\"featured product name\" default=\"Le Sac Éternel\"}",
          "description": "持久风格的宣言。",
          "link": "立即探索"
        },
        "imagery": "大理石台面上的黑色结构感手袋，配有金色扣环"
      },
      {
        "name": "Brand Story",
        "layout": "双栏布局",
        "imagery": "被绿叶环绕的巴黎奥斯曼式建筑",
        "text": {
          "kicker": "LUMIÈRE 故事",
          "headline": "{argument name=\"story headline\" default=\"传承。工艺。愿景。\"}",
          "body": "Lumière 诞生于巴黎中心地带，数代以来一直是精致奢华的象征。我们的作品由大师级工匠精心打造，融合了永恒的设计与对细节的极致追求。",
          "link": "探索我们的故事",
          "watermark": "淡雅的圆形 L 标志"
        }
      },
      {
        "name": "Trust Bar",
        "count": 4,
        "items": [
          { "icon": "钻石", "title": "卓越品质", "subtitle": "精湛工艺" },
          { "icon": "卡车", "title": "免费配送", "subtitle": "已投保且需签名签收" },
          { "icon": "礼盒", "title": "专属服务", "subtitle": "个人导购与护理" },
          { "icon": "耳机", "title": "客户服务", "subtitle": "+33 1 42 86 95 28" }
        ]
      }
    ]
  }
}

## 来源备注
- 源站作者：hupuzuqiu
- 源站 UUID：esqaJwhkXA
- 源站分类：06_图文排版视觉传达

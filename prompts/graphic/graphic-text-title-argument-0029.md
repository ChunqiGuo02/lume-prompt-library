---
id: graphic-text-title-argument-0029
title: "3D电商直播宣传海报"
category: graphic
subcategory: "06_图文排版视觉传达"
aesthetic: editorial-poster
tags: ["直播", "带货", "促销", "电商", "紫色", "霓虹", "3D", "海报"]
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
  "type": "3D e-commerce livestream promotional poster",
  "style": "vibrant purple and gold color scheme, glossy UI elements, neon lights, soft blurred studio background",
  "typography": {
    "header_pill": "抖音直播",
    "main_title": "{argument name=\"main title\" default=\"直播中\"}",
    "subtitle": "{argument name=\"subtitle\" default=\"欢迎进直播间\"}",
    "promo_pill": "{argument name=\"promo text\" default=\"好物推荐 不止5折\"}"
  },
  "layout": {
    "sections": [
      {
        "title": "feature_cards",
        "position": "middle",
        "count": 3,
        "items": [
          {"icon": "purple price tag", "text": "大牌好货 正品保障"},
          {"icon": "red envelope", "text": "直播专属 优惠多多"},
          {"icon": "purple gift box", "text": "互动抽奖 惊喜不停"}
        ]
      },
      {
        "title": "marquee_sign",
        "position": "lower middle",
        "style": "neon border with glowing dots, 3D red heart icon",
        "text": "{argument name=\"marquee text\" default=\"关注主播 不迷路\"}"
      },
      {
        "title": "footer_pill",
        "position": "bottom center",
        "style": "glowing neon border",
        "text": "{argument name=\"footer text\" default=\"点关注 下单享优先发货\"}"
      }
    ]
  },
  "scene_elements": {
    "top_corners": "2 studio spotlights pointing inwards",
    "bottom_left": "1 ring light on a tripod holding a smartphone",
    "bottom_right": "3 stacked cardboard boxes with labels '极速发货' and '售后无忧', 1 miniature shopping cart, 2 purple gift boxes with yellow ribbons",
    "background": "blurred studio setup with shelves and purple ambient lighting"
  }
}

## 中文译文（源站提供）
{
  "type": "3D 电商直播宣传海报",
  "style": "活力紫金配色，光泽感 UI 元素，霓虹灯光，柔和模糊的摄影棚背景",
  "typography": {
    "header_pill": "抖音直播",
    "main_title": "{argument name=\"main title\" default=\"直播中\"}",
    "subtitle": "{argument name=\"subtitle\" default=\"欢迎进直播间\"}",
    "promo_pill": "{argument name=\"promo text\" default=\"好物推荐 不止 5 折\"}"
  },
  "layout": {
    "sections": [
      {
        "title": "feature_cards",
        "position": "中间",
        "count": 3,
        "items": [
          {"icon": "紫色价格标签", "text": "大牌好货 正品保障"},
          {"icon": "红包", "text": "直播专属 优惠多多"},
          {"icon": "紫色礼盒", "text": "互动抽奖 惊喜不停"}
        ]
      },
      {
        "title": "marquee_sign",
        "position": "中下部",
        "style": "带发光点的霓虹边框，3D 红色爱心图标",
        "text": "{argument name=\"marquee text\" default=\"关注主播 不迷路\"}"
      },
      {
        "title": "footer_pill",
        "position": "底部居中",
        "style": "发光霓虹边框",
        "text": "{argument name=\"footer text\" default=\"点关注 下单享优先发货\"}"
      }
    ]
  },
  "scene_elements": {
    "top_corners": "2 个向内照射的摄影棚聚光灯",
    "bottom_left": "1 个带有智能手机的三脚架环形补光灯",
    "bottom_right": "3 个堆叠的纸箱，贴有“极速发货”和“售后无忧”标签，1 个迷你购物车，2 个系着黄色丝带的紫色礼盒",
    "background": "带有货架和紫色环境光的模糊摄影棚场景"
  }
}

## 来源备注
- 源站作者：小贰，來壺酒
- 源站 UUID：53HwgUWrq4
- 源站分类：06_图文排版视觉传达

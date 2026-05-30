---
id: "portrait-description-label-demon-001"
title: "西游记角色头像网格"
category: portrait
subcategory: "16_表情包趣味拼图"
aesthetic: null
tags: ["西游记", "卡通", "Q版", "头像", "插画", "神话", "圆形", "浅灰"]
recommended_models: []
recommended_params:
  aspect_ratio: "1:1"
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
  "type": "character avatar grid",
  "theme": "{argument name=\"theme\" default=\"Journey to the West mythology\"}",
  "style": "{argument name=\"art style\" default=\"clean 2D cartoon vector illustration, thick outlines, flat colors\"}",
  "layout": {
    "background": "{argument name=\"background color\" default=\"light gray\"} subtle texture",
    "format": "grid of circular portraits with text labels centered below each circle",
    "rows": [
      {
        "count": 4,
        "items": [
          {"label": "Sun Wukong", "description": "monkey boy with golden headband and red scarf"},
          {"label": "Tang Sanzang", "description": "monk with ornate golden crown"},
          {"label": "Zhu Bajie", "description": "pig man holding a rake"},
          {"label": "Sha Wujing", "description": "bearded man holding a crescent moon staff"}
        ]
      },
      {
        "count": 4,
        "items": [
          {"label": "White Dragon Horse", "description": "white horse with golden bridle"},
          {"label": "Jade Emperor", "description": "older man with white beard and golden crown"},
          {"label": "Guanyin", "description": "goddess holding a willow branch"},
          {"label": "Bull Demon Kink", "description": "fierce bull demon in armor"}
        ]
      },
      {
        "count": 4,
        "items": [
          {"label": "Princess Iron Fan", "description": "woman holding a green palm leaf fan"},
          {"label": "Red Boy", "description": "boy with red hair, horns, and a small flame"},
          {"label": "Black Wind Demon", "description": "dark shadowy demon with glowing red eyes"},
          {"label": "Nezha", "description": "boy with double hair buns holding a flaming spear"}
        ]
      },
      {
        "count": 3,
        "description": "partial row repeating Princess Iron Fan, Black Wind Demon, and Nezha, slightly cropped at the bottom"
      }
    ]
  }
}

## 中文译文（源站提供）
{
  "type": "角色头像网格",
  "theme": "{argument name=\"theme\" default=\"西游记神话\"}",
  "style": "{argument name=\"art style\" default=\"简洁的 2D 卡通矢量插画，粗轮廓，平铺色彩\"}",
  "layout": {
    "background": "{argument name=\"background color\" default=\"浅灰色\"} 细微纹理",
    "format": "圆形头像网格，每个圆圈下方居中带有文字标签",
    "rows": [
      {
        "count": 4,
        "items": [
          {"label": "孙悟空", "description": "戴着金箍和红围巾的猴子男孩"},
          {"label": "唐三藏", "description": "戴着华丽金冠的僧侣"},
          {"label": "猪八戒", "description": "拿着钉耙的猪人"},
          {"label": "沙悟净", "description": "拿着月牙铲的留胡子男子"}
        ]
      },
      {
        "count": 4,
        "items": [
          {"label": "白龙马", "description": "戴着金缰绳的白马"},
          {"label": "玉皇大帝", "description": "留着白胡子、戴着金冠的长者"},
          {"label": "观音", "description": "手持柳枝的女神"},
          {"label": "牛魔王", "description": "身穿盔甲的凶猛牛魔"}
        ]
      },
      {
        "count": 4,
        "items": [
          {"label": "铁扇公主", "description": "手持绿色芭蕉扇的女子"},
          {"label": "红孩儿", "description": "红发、长角且带有小火苗的男孩"},
          {"label": "黑风怪", "description": "眼睛闪烁红光的暗影恶魔"},
          {"label": "哪吒", "description": "扎着双丸子头、手持火尖枪的男孩"}
        ]
      },
      {
        "count": 3,
        "description": "重复铁扇公主、黑风怪和哪吒的局部行，底部略有裁剪"
      }
    ]
  }
}

## 来源备注
- 源站作者：wm
- 源站 UUID：ZEEqewDGMp
- 源站分类：16_表情包趣味拼图

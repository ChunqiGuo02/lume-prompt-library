---
id: "product-griffin-type-name-001"
title: "真人与3D动画角色合影生成器"
category: product
subcategory: "12_手工玩具手办"
aesthetic: null
tags: ["3D", "写实", "真人", "卡通", "混搭", "亲密", "合影", "休闲"]
recommended_models: 
  - banana-pro
recommended_params:
  aspect_ratio: "3:4"
  quality: null
  style_strength: null
sample_outputs: []
quality_tier: A
author: "ChunqiGuo02"
source: "Leader Prompt Gallery (https://www.leaderai.top/mid-api/lab/image_prompt/index.html)"
language: en
created_at: 2026-05-30
version: "1.0.0"
related_to: []
---

# 正文 prompt
"image_generation":(
"quality": "hyper-realistic", 
"face": ("preserve_original": true, "reference_match'": true), 
"subject":{
"description": "A stylish person with the same face.", 
“clothing”:{
"Top": ("type": "knitted sweater", "color":  ({argument name="theme" default="Family guy Theme"}) ". }
"pants": ("type": "high-waisted jeans", "color": "denim blue".
"shoes":("type": "high-top sneakers", "color": "white")
"pose": "standing with arm around a giant 3D {argument name="main character" default="Peter Griffin"} while {argument name="sidekick character" default="Brian Griffin"}
sits on Peter Griffin shoulder", 
"expression": "fun, mischievous"
"character_element":{
"name": "Family guy", 
"type': "3D photorealistic duo", 
"interaction': "Peter Griffin poses confidently, Brian Griffin looks playful"
"environment-( "background'. (clean family guy series theme backdrop"}
}

## 中文译文（源站提供）
"image_generation": {
  "quality": "超现实",
  "face": {
    "preserve_original": true,
    "reference_match": true
  },
  "subject": {
    "description": "一个拥有相同面孔的时尚人物。",
    "clothing": {
      "Top": {
        "type": "针织毛衣",
        "color": "{argument name=\"theme\" default=\"Family guy Theme\"}"
      },
      "pants": {
        "type": "高腰牛仔裤",
        "color": "牛仔蓝"
      },
      "shoes": {
        "type": "高帮运动鞋",
        "color": "白色"
      }
    },
    "pose": "站立，手臂环绕着一个巨大的 3D {argument name=\"main character\" default=\"Peter Griffin\"}，同时 {argument name=\"sidekick character\" default=\"Brian Griffin\"} 坐在 Peter Griffin 的肩膀上",
    "expression": "有趣，调皮",
    "character_element": {
      "name": "Family guy",
      "type": "3D 超逼真二人组",
      "interaction": "Peter Griffin 自信地摆姿势，Brian Griffin 看起来很顽皮"
    }
  },
  "environment": {
    "background": "干净的 Family guy 系列主题背景"
  }
}

## 来源备注
- 源站作者：Roja
- 源站 UUID：QycIxzD9ob
- 源站分类：12_手工玩具手办

---
id: "architecture-argument-name-default-001"
title: "第一人称RPG游戏截图生成"
category: architecture
subcategory: "04_创意脑洞特效合成"
aesthetic: null
tags: ["游戏", "奇幻", "落日", "暖调", "废墟", "古城", "峡谷", "盾牌"]
recommended_models: []
recommended_params:
  aspect_ratio: "16:9"
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
  "type": "first-person RPG video game screenshot",
  "scene": {
    "environment": "{argument name=\"city style\" default=\"ancient ruined Dwemer city in a deep rocky canyon\"}",
    "lighting": "{argument name=\"lighting and atmosphere\" default=\"golden hour sunset, hazy, warm orange glow, dusty atmosphere\"}",
    "details": "cascading waterfalls, towering stone pillars, domed structures with brass accents, rugged cliffs"
  },
  "first_person_view": {
    "left_hand": "{argument name=\"left hand equipment\" default=\"round wooden and metal shield\"}",
    "right_hand": "{argument name=\"right hand equipment\" default=\"long steel sword\"}"
  },
  "ui_overlay": {
    "count": 4,
    "components": [
      {
        "position": "top center",
        "description": "horizontal compass bar with 'N' and a marker"
      },
      {
        "position": "middle left",
        "description": "floating quest marker with text",
        "text": "{argument name=\"quest objective\" default=\"REACH THE DWEMER CITY OF KALJOR\"}"
      },
      {
        "position": "bottom left",
        "description": "3 stacked resource bars (red 236/236, blue 142/142, green 183/183)"
      },
      {
        "position": "bottom right",
        "description": "2 circular quick-slot icons showing a fire spell and a bow"
      }
    ]
  }
}

## 中文译文（源站提供）
{
  "type": "第一人称 RPG 游戏截图",
  "environment": "{argument name=\"场景描述\" default=\"岩石峡谷中拥有石塔、黄铜圆顶和瀑布的古老废墟城市\"}",
  "lighting": "{argument name=\"时间段\" default=\"带有体积光和温暖橙色光芒的黄金时刻日落\"}",
  "first_person_view": {
    "left_hand": "{argument name=\"左手装备\" default=\"圆形木制金属盾牌\"}",
    "right_hand": "{argument name=\"右手武器\" default=\"向上倾斜的钢剑\"}"
  },
  "hud_elements": [
    {
      "position": "顶部中央",
      "description": "带有“N”和标记的水平指南针栏"
    },
    {
      "position": "左侧中部",
      "description": "悬浮的黄色菱形任务标记，带有文本“{argument name=\"任务文本\" default=\"前往 DWEMER 城市 KALJOR\"}”"
    },
    {
      "position": "左下角",
      "description": "3 条水平资源栏：红色 (236/236)、蓝色 (142/142) 和绿色 (183/183)"
    },
    {
      "position": "右下角",
      "description": "2 个圆形动作图标，显示火焰法术和弓箭"
    }
  ]
}

## 来源备注
- 源站作者：Dr. Beaky
- 源站 UUID：cGC3KKJ6v7
- 源站分类：04_创意脑洞特效合成

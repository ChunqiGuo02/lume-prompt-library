---
id: 3d_concept-name-argument-default-1002
title: "黑暗奇幻风格游戏截图"
category: 3d_concept
subcategory: "04_创意脑洞特效合成"
aesthetic: null
tags: ["黑暗", "奇幻", "血月", "哥特", "怪物", "水中", "猎人", "魂类"]
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
  "type": "video game screenshot",
  "scene": {
    "setting": "shallow dark water with gothic city ruins in the background",
    "atmosphere": "dark fantasy under a {argument name=\"moon style\" default=\"massive red blood moon\"}",
    "player_character": "viewed from behind, wearing a dark trench coat and tricorn hat, holding a {argument name=\"player weapon\" default=\"jagged sword\"} and a firearm",
    "boss": "{argument name=\"boss appearance\" default=\"towering mass of dark, tangled roots and flesh with glowing eyes\"}"
  },
  "layout": {
    "sections": [
      {
        "position": "top-left",
        "title": "Player Stats",
        "count": 3,
        "labels": ["red health bar", "green stamina bar", "white bar"],
        "inventory": {
          "count": 3,
          "labels": ["red potion: 20", "silver item: 20", "{argument name=\"selected item\" default=\"Beast Blood Pellet\"}: 7"]
        }
      },
      {
        "position": "top-right",
        "title": "Counters",
        "count": 2,
        "labels": ["currency symbol: 3920", "eye symbol: 19"]
      },
      {
        "position": "bottom-center",
        "title": "Boss Health",
        "count": 1,
        "labels": ["{argument name=\"boss name\" default=\"Kos, Reborn\"}"]
      }
    ]
  }
}

## 中文译文（源站提供）
{ "type": "video game screenshot", "setting": "暗黑奇幻哥特式城市，浅水中矗立着高耸的尖塔，上方悬挂着一轮巨大的 {argument name=\"moon color\" default=\"血红色\"} 月亮", "characters": { "player": "猎人身穿 {argument name=\"player outfit\" default=\"深色风衣和三角帽\"}，手持锯齿刀和手枪，背对镜头", "boss": "{argument name=\"boss appearance\" default=\"由纠缠的黑色触手组成、内部散发红光的巨大克苏鲁风格怪物\"}" }, "layout": { "sections": [ { "title": "玩家状态 HUD", "position": "top-left", "count": 3, "labels": ["红色生命值条", "绿色体力值条", "物品栏（药水：20，子弹：20，{argument name=\"selected item\" default=\"怪兽血丸\"}：7）"] }, { "title": "货币 HUD", "position": "top-right", "count": 2, "labels": ["货币图标：3920", "眼睛图标：19"] }, { "title": "Boss 生命值条", "position": "bottom-center", "count": 1, "labels": ["{argument name=\"boss name\" default=\"重生者科斯\"}"] } ], "centerpiece": "玩家与 Boss 在水中史诗般的对峙" } }

## 来源备注
- 源站作者：Dr. Beaky
- 源站 UUID：HTunowig1D
- 源站分类：04_创意脑洞特效合成

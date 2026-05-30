---
id: "landscape-name-text-purple-001"
title: "Minecraft与Terraria风格融合"
category: landscape
subcategory: "06_图文排版视觉传达"
aesthetic: null
tags: ["像素", "沙盒", "方块", "紫色", "夜晚", "战斗", "跨界", "我的世界"]
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
  "type": "voxel video game screenshot",
  "style": "crossover between Minecraft and Terraria",
  "environment": "nighttime blocky landscape, purple-tinted corruption biome, water pools, trees",
  "first_person_view": "holding a large blocky sword on the right side of the screen",
  "entities": {
    "boss": "giant floating eyeball with red veins shooting a purple laser",
    "player_avatar": "character in dark armor holding a green sword, viewed from behind",
    "mobs": [
      "1 giant crowned blue slime",
      "1 small blue slime",
      "2 zombies",
      "2 skeletons",
      "2 purple bats",
      "1 pink flamingo"
    ]
  },
  "user_interface": {
    "boss_bar": "top center, purple bar, text '{argument name=\"boss name\" default=\"Eye of Cthulhu\"}'",
    "coordinates": "top left, text 'X: 340 Y: 64 Z: -190 Biome: {argument name=\"biome name\" default=\"Corruption\"}'",
    "notification": "top right, white box, text '{argument name=\"notification text\" default=\"New Recipes Unlocked! Check your recipe book\"}'",
    "chat": "bottom left, text 'Steve has made the advancement [{argument name=\"advancement name\" default=\"Eye of Cthulhu\"}]'",
    "status_bars": "bottom center, 10 red hearts, 10 hunger icons, green XP bar showing level 15",
    "hotbar": "bottom center, 9 slots containing: purple sword, pickaxe, axe, green tool, gun, 30 red potions, 64 brown blocks, 8 golden apples, 2 blue stars"
  }
}

## 中文译文（源站提供）
{
  "type": "第一人称体素游戏截图",
  "environment": {
    "style": "方块 3D 像素艺术",
    "time": "夜晚",
    "biome": "{argument name=\"biome name\" default=\"腐化之地\"}",
    "features": "紫色草地、紫色树叶的树木、水池、火把"
  },
  "entities": [
    {
      "name": "{argument name=\"boss name\" default=\"克苏鲁之眼\"}",
      "description": "巨大的浮空眼球，正在发射紫色激光"
    },
    {
      "name": "史莱姆王",
      "description": "戴着金红宝石皇冠的巨大蓝色史莱姆"
    },
    {
      "name": "{argument name=\"player name\" default=\"史蒂夫\"}",
      "description": "穿着深色盔甲、手持绿色长剑的多人游戏角色"
    },
    {
      "name": "敌对怪物",
      "count": 6,
      "types": [
        "2 只骷髅",
        "2 只僵尸",
        "2 只紫色蝙蝠"
      ]
    },
    {
      "name": "中立怪物",
      "count": 2,
      "types": [
        "1 只粉色火烈鸟",
        "1 只小型蓝色史莱姆"
      ]
    },
    {
      "name": "触手",
      "count": 1,
      "description": "带有眼睛的紫色分段触手"
    }
  ],
  "first_person_view": {
    "right_hand": "手持一把大型像素化铁剑"
  },
  "ui_overlay": {
    "top_left": {
      "type": "调试信息",
      "lines": [
        "X: 340",
        "Y: 64",
        "Z: -190",
        "生物群系: {argument name=\"biome name\" default=\"腐化之地\"}"
      ]
    },
    "top_center": {
      "type": "Boss 血条",
      "color": "紫色",
      "label": "{argument name=\"boss name\" default=\"克苏鲁之眼\"}"
    },
    "top_right": {
      "type": "提示通知",
      "icon": "眼球",
      "text": "新配方已解锁！请查看你的配方书"
    },
    "bottom_left": {
      "type": "聊天记录",
      "text": "{argument name=\"player name\" default=\"史蒂夫\"} 达成了进度 [{argument name=\"advancement name\" default=\"克苏鲁之眼\"}]"
    },
    "bottom_center": {
      "type": "HUD",
      "stats": [
        "10 颗红心",
        "10 个护甲图标",
        "10 个饥饿度图标",
        "15 级等级指示器"
      ],
      "hotbar_slots": 9,
      "hotbar_items": [
        "1 把紫色长剑",
        "1 把镐",
        "1 把斧",
        "1 根绿色法杖",
        "1 把枪",
        "30 瓶红色药水",
        "64 个棕色方块",
        "8 个金苹果",
        "2 颗蓝色星星"
      ]
    },
    "center": {
      "type": "准星",
      "style": "白色十字准星"
    }
  }
}

## 来源备注
- 源站作者：Mrinaal Arora
- 源站 UUID：CQhgs35SpV
- 源站分类：06_图文排版视觉传达

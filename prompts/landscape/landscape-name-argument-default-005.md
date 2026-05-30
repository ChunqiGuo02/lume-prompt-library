---
id: "landscape-name-argument-default-005"
title: "第一人称游戏截图生成"
category: landscape
subcategory: "04_创意脑洞特效合成"
aesthetic: null
tags: ["像素", "方块", "游戏", "沙盒", "夜晚", "紫色", "战斗", "首领"]
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
  "type": "first-person video game screenshot",
  "style": "voxel-based 3D blocky graphics mixed with 2D sprite elements",
  "environment": {
    "setting": "nighttime blocky landscape with purple-tinted lighting",
    "terrain": "grass blocks, water pools, purple-leaved trees, torches"
  },
  "entities": [
    "1 giant floating eyeball boss {argument name=\"boss action\" default=\"shooting a purple laser beam\"}",
    "1 giant blue slime wearing a jeweled gold crown",
    "1 regular blue slime",
    "1 zombie",
    "2 skeletons",
    "2 flying purple bat creatures",
    "1 pink flamingo",
    "1 player character wearing {argument name=\"player armor\" default=\"dark iron armor\"}"
  ],
  "first_person_view": {
    "right_hand": "holding a {argument name=\"main weapon\" default=\"large iron sword\"}"
  },
  "user_interface": {
    "top_left": ["X: 340", "Y: 64", "Z: -190", "Biome: {argument name=\"biome name\" default=\"Corruption\"}"],
    "top_center": "purple boss health bar labeled {argument name=\"boss name\" default=\"Eye of Cthulhu\"}",
    "top_right": "white notification popup: New Recipes Unlocked! Check your recipe book",
    "bottom_left": "chat text: Steve has made the advancement [{argument name=\"boss name\" default=\"Eye of Cthulhu\"}]",
    "bottom_center": {
      "stats": "10 red hearts, 10 armor icons, 10 hunger shanks, experience level 15",
      "hotbar_items": [
        "purple sword",
        "pickaxe",
        "axe",
        "green staff",
        "musket",
        "30 red potions",
        "64 wood blocks",
        "8 golden apples",
        "2 blue stars"
      ]
    }
  }
}

## 中文译文（源站提供）
{
  "type": "第一人称游戏截图",
  "style": "基于体素的 3D 方块图形与 2D 精灵元素的混合风格",
  "environment": {
    "setting": "带有紫色调灯光的夜间方块景观",
    "terrain": "草方块、水池、紫叶树、火把"
  },
  "entities": [
    "1 个巨大的漂浮眼球 Boss {argument name=\"boss action\" default=\"发射紫色激光束\"}",
    "1 个戴着珠宝金冠的巨大蓝色史莱姆",
    "1 个普通蓝色史莱姆",
    "1 个僵尸",
    "2 个骷髅",
    "2 个飞行的紫色蝙蝠生物",
    "1 只粉色火烈鸟",
    "1 个穿着 {argument name=\"player armor\" default=\"暗铁盔甲\"} 的玩家角色"
  ],
  "first_person_view": {
    "right_hand": "手持 {argument name=\"main weapon\" default=\"大型铁剑\"}"
  },
  "user_interface": {
    "top_left": ["X: 340", "Y: 64", "Z: -190", "生物群系: {argument name=\"biome name\" default=\"腐化之地\"}"],
    "top_center": "紫色 Boss 血条，标注为 {argument name=\"boss name\" default=\"克苏鲁之眼\"}",
    "top_right": "白色通知弹窗：已解锁新配方！请查看你的配方书",
    "bottom_left": "聊天文本：Steve 达成了进度 [{argument name=\"boss name\" default=\"克苏鲁之眼\"}]",
    "bottom_center": {
      "stats": "10 颗红心，10 个盔甲图标，10 个饥饿鸡腿，经验等级 15",
      "hotbar_items": [
        "紫色剑",
        "镐",
        "斧",
        "绿色法杖",
        "火枪",
        "30 瓶红色药水",
        "64 个木块",
        "8 个金苹果",
        "2 个蓝色星星"
      ]
    }
  }
}

## 来源备注
- 源站作者：nic
- 源站 UUID：VqZxVWXQ1e
- 源站分类：04_创意脑洞特效合成

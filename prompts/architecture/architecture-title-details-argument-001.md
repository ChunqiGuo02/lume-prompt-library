---
id: "architecture-title-details-argument-001"
title: "政治学笔记与家庭合影"
category: architecture
subcategory: "06_图文排版视觉传达"
aesthetic: japanese-zen-garden
tags: ["笔记", "手账", "政治", "学习", "手写", "手绘", "书桌", "摄影"]
recommended_models: []
recommended_params:
  aspect_ratio: "4:3"
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
  "type": "photorealistic top-down still life",
  "setting": "{argument name=\"desk surface\" default=\"wooden table\"}",
  "objects": [
    {
      "item": "open notebook",
      "style": "{argument name=\"notebook style\" default=\"dot-grid paper with neat handwritten Japanese notes in black and red ink\"}",
      "layout": {
        "left_page": {
          "header": "{argument name=\"subject topic\" default=\"政治学 第6回\"}",
          "section_count": 4,
          "sections": [
            { "title": "選挙とは？", "details": "definition text" },
            { "title": "選挙の機能", "details": "numbered list 1-4", "doodle": "cat with scarf holding '一票!!' sign" },
            { "title": "選挙制度の種類", "details": "bullet points with red arrow to '小選挙区比例代表並立制！'" },
            { "title": "投票率の問題", "details": "text about youth turnout", "doodle": "girl with '18才から選挙に行けるよ！' bubble and a top 3 ranked list box" }
          ]
        },
        "right_page": {
          "section_count": 5,
          "sections": [
            { "title": "政党とは？", "details": "definition text" },
            { "title": "政党の役割", "details": "numbered list 1-4", "doodle": "government building sketch" },
            { "title": "政党の種類", "details": "bullet points" },
            { "title": "最近の日本の政治と課題", "details": "bullet points", "doodle": "girl thinking '政治って難しそうで、意外と生活とつながってるだよね。'" },
            { "title": "まとめ", "details": "summary with red underlines", "doodle": "girl reading and a pink flower" }
          ]
        }
      }
    },
    {
      "item": "printed photograph",
      "placement": "overlapping the right edge of the notebook",
      "content": "{argument name=\"photo subject\" default=\"family of four posing in front of cherry blossoms and a Ferris wheel\"}",
      "style": "vintage, slightly faded snapshot"
    }
  ]
}

## 中文译文（源站提供）
{
  "type": "照片级逼真的静物俯视图",
  "setting": "{argument name=\"desk surface\" default=\"木质桌面\"}",
  "objects": [
    {
      "item": "打开的笔记本",
      "style": "{argument name=\"notebook style\" default=\"点阵纸，上面有整齐的黑色和红色墨水手写日语笔记\"}",
      "layout": {
        "left_page": {
          "header": "{argument name=\"subject topic\" default=\"政治学 第6回\"}",
          "section_count": 4,
          "sections": [
            { "title": "選挙とは？", "details": "定义文本" },
            { "title": "選挙の機能", "details": "1-4 编号列表", "doodle": "戴着围巾的猫，举着写有“一票!!”的牌子" },
            { "title": "選挙制度の種類", "details": "带有红色箭头的项目符号，指向“小選挙区比例代表並立制！”" },
            { "title": "投票率の問題", "details": "关于青年投票率的文本", "doodle": "女孩带着写有“18才から選挙に行けるよ！”的气泡框，以及一个前 3 名的排名列表框" }
          ]
        },
        "right_page": {
          "section_count": 5,
          "sections": [
            { "title": "政党とは？", "details": "定义文本" },
            { "title": "政党の役割", "details": "1-4 编号列表", "doodle": "政府大楼草图" },
            { "title": "政党の種類", "details": "项目符号" },
            { "title": "最近の日本の政治と課題", "details": "项目符号", "doodle": "女孩思考着“政治って難しそうで、意外と生活とつながってるだよね。”" },
            { "title": "まとめ", "details": "带有红色下划线的总结", "doodle": "正在阅读的女孩和一朵粉色花朵" }
          ]
        }
      }
    },
    {
      "item": "打印照片",
      "placement": "覆盖在笔记本的右边缘",
      "content": "{argument name=\"photo subject\" default=\"一家四口在樱花和摩天轮前合影\"}",
      "style": "复古、略微褪色的快照"
    }
  ]
}

## 来源备注
- 源站作者：MATはAI🀄️🀄️🎌
- 源站 UUID：tgUo1VbJyw
- 源站分类：06_图文排版视觉传达

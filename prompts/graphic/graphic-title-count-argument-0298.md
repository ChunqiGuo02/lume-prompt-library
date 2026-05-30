---
id: graphic-title-count-argument-0298
title: "一图读懂导演分镜思维"
category: graphic
subcategory: "06_图文排版视觉传达"
aesthetic: null
tags: ["分镜", "导演", "影视", "创作", "信息图", "教学", "知识", "简约"]
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
  "type": "educational infographic poster",
  "header": {
    "title": "{argument name=\"main title\" default=\"一图读懂 导演分镜思维\"}",
    "subtitle": "{argument name=\"subtitle\" default=\"从脚本到画面：导演如何用分镜讲好一个故事\"}"
  },
  "layout": {
    "sections": [
      {
        "title": "1. 分镜是什么？",
        "components": [
          "definition text box",
          {
            "type": "flowchart",
            "count": 5,
            "labels": ["文字脚本", "导演分镜思维", "分镜画面", "拍摄执行", "成片呈现"]
          }
        ]
      },
      {
        "title": "2. 导演分镜思维的核心步骤",
        "count": 5,
        "labels": ["① 理解剧本", "② 拆解场景", "③ 设计镜头", "④ 视觉调度", "⑤ 组接节奏"]
      },
      {
        "title": "3. 分镜的基本构成（以一个镜头为例）",
        "columns": [
          {
            "position": "left",
            "count": 8,
            "labels": ["镜号", "景别", "机位", "运动", "时长", "内容", "台词/音效", "备注"]
          },
          {
            "position": "center",
            "image": "{argument name=\"character subject\" default=\"anime girl reading in a room\"}"
          },
          {
            "position": "right",
            "title": "小技巧",
            "count": 3,
            "description": "icon bullet points"
          }
        ]
      },
      {
        "title": "4. 分镜如何服务于叙事？",
        "subtitle": "{argument name=\"example scenario\" default=\"举例：女孩在房间听到异响\"}",
        "count": 4,
        "panels": ["wide shot room", "medium shot girl reading", "medium shot girl looking up", "close up door opening"],
        "caption_labels": ["镜号", "景别", "机位", "时长", "内容", "作用"]
      },
      {
        "title": "5. 导演分镜思维的进阶心法",
        "count": 5,
        "labels": ["以观众视角思考", "情绪优先于技术", "删繁就简", "控制节奏", "保持整体感"]
      }
    ],
    "footer": "{argument name=\"footer quote\" default=\"好的分镜，是导演脑中电影的第一次放映。\"}"
  },
  "style": "clean corporate infographic, blue and white palette, structured grid"
}

## 中文译文（源站提供）
{
  "type": "教育信息图海报",
  "header": {
    "title": "{argument name=\"main title\" default=\"一图读懂 导演分镜思维\"}",
    "subtitle": "{argument name=\"subtitle\" default=\"从脚本到画面：导演如何用分镜讲好一个故事\"}"
  },
  "layout": {
    "sections": [
      {
        "title": "1. 分镜是什么？",
        "components": [
          "定义文本框",
          {
            "type": "flowchart",
            "count": 5,
            "labels": ["文字脚本", "导演分镜思维", "分镜画面", "拍摄执行", "成片呈现"]
          }
        ]
      },
      {
        "title": "2. 导演分镜思维的核心步骤",
        "count": 5,
        "labels": ["① 理解剧本", "② 拆解场景", "③ 设计镜头", "④ 视觉调度", "⑤ 组接节奏"]
      },
      {
        "title": "3. 分镜的基本构成（以一个镜头为例）",
        "columns": [
          {
            "position": "left",
            "count": 8,
            "labels": ["镜号", "景别", "机位", "运动", "时长", "内容", "台词/音效", "备注"]
          },
          {
            "position": "center",
            "image": "{argument name=\"character subject\" default=\"anime girl reading in a room\"}"
          },
          {
            "position": "right",
            "title": "小技巧",
            "count": 3,
            "description": "图标要点"
          }
        ]
      },
      {
        "title": "4. 分镜如何服务于叙事？",
        "subtitle": "{argument name=\"example scenario\" default=\"举例：女孩在房间听到异响\"}",
        "count": 4,
        "panels": ["房间全景", "女孩阅读中景", "女孩抬头中景", "门打开特写"],
        "caption_labels": ["镜号", "景别", "机位", "时长", "内容", "作用"]
      },
      {
        "title": "5. 导演分镜思维的进阶心法",
        "count": 5,
        "labels": ["以观众视角思考", "情绪优先于技术", "删繁就简", "控制节奏", "保持整体感"]
      }
    ],
    "footer": "{argument name=\"footer quote\" default=\"好的分镜，是导演脑中电影的第一次放映。\"}"
  },
  "style": "简洁商务风信息图，蓝白配色，结构化网格"
}

## 来源备注
- 源站作者：AlainYe
- 源站 UUID：2ZX9nLeR6n
- 源站分类：06_图文排版视觉传达

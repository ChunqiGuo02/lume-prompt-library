---
id: graphic-name-position-title-0160
title: "F1日本大奖赛赛事结果"
category: graphic
subcategory: "06_图文排版视觉传达"
aesthetic: japanese-zen-garden
tags: ["赛车", "体育", "信息图", "日本", "樱花", "富士山", "领奖台", "赛道"]
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
  "type": "sports infographic",
  "theme": "Formula 1 Race Results",
  "header": {
    "title": "LATEST F1 RACE RESULTS",
    "subtitle": "{argument name=\"grand prix name\" default=\"FORMULA 1 LENOVO JAPANESE GRAND PRIX 2026\"}"
  },
  "layout": {
    "sections": [
      {
        "title": "Track Map",
        "position": "top",
        "elements": [
          "circuit layout with 11 labeled corners",
          "Japanese flag",
          "track details text: {argument name=\"track name\" default=\"SUZUKA CIRCUIT\"} | 53 LAPS | MARCH 29, 2026"
        ]
      },
      {
        "title": "Podium",
        "position": "middle",
        "background": "Mount Fuji, cherry blossoms, neon radiating lines",
        "count": 3,
        "drivers": [
          {
            "position": "1st",
            "name": "{argument name=\"first place driver\" default=\"ANDREA KIMI ANTONELLI\"}",
            "team": "MERCEDES",
            "pose": "holding gold trophy, waving",
            "suit": "black"
          },
          {
            "position": "2nd",
            "name": "{argument name=\"second place driver\" default=\"OSCAR PIASTRI\"}",
            "team": "McLAREN",
            "pose": "hands on hips",
            "suit": "orange and black"
          },
          {
            "position": "3rd",
            "name": "{argument name=\"third place driver\" default=\"CHARLES LECLERC\"}",
            "team": "FERRARI",
            "pose": "standing straight",
            "suit": "red"
          }
        ]
      },
      {
        "title": "FULL RACE CLASSIFICATION",
        "position": "bottom-left",
        "count": 17,
        "description": "Table with 17 rows showing positions 4 through 20, including columns for POS, DRIVER, TEAM, GAP, and POINTS."
      },
      {
        "title": "KEY RACE STATS",
        "position": "bottom-right-top",
        "count": 5,
        "stats": [
          "POLE POSITION",
          "FASTEST LAP (purple background)",
          "DRIVER OF THE DAY",
          "TOTAL DISTANCE",
          "WINNER'S AVG SPEED"
        ]
      },
      {
        "title": "CHAMPIONSHIP STANDINGS UPDATE",
        "position": "bottom-right-bottom",
        "columns": 2,
        "lists": [
          "TOP DRIVERS (3 items)",
          "TOP TEAMS (3 items)"
        ]
      }
    ]
  }
}

## 中文译文（源站提供）
{
  "type": "体育信息图",
  "theme": "F1 比赛结果",
  "header": {
    "title": "最新 F1 比赛结果",
    "subtitle": "{argument name=\"grand prix name\" default=\"2026 年 F1 联想日本大奖赛\"}"
  },
  "layout": {
    "sections": [
      {
        "title": "赛道地图",
        "position": "顶部",
        "elements": [
          "包含 11 个标注弯道的赛道布局",
          "日本国旗",
          "赛道详情文本：{argument name=\"track name\" default=\"铃鹿赛道\"} | 53 圈 | 2026 年 3 月 29 日"
        ]
      },
      {
        "title": "领奖台",
        "position": "中部",
        "background": "富士山、樱花、霓虹放射线",
        "count": 3,
        "drivers": [
          {
            "position": "第一名",
            "name": "{argument name=\"first place driver\" default=\"ANDREA KIMI ANTONELLI\"}",
            "team": "MERCEDES",
            "pose": "手持金杯，挥手致意",
            "suit": "黑色"
          },
          {
            "position": "第二名",
            "name": "{argument name=\"second place driver\" default=\"OSCAR PIASTRI\"}",
            "team": "McLAREN",
            "pose": "双手叉腰",
            "suit": "橙黑相间"
          },
          {
            "position": "第三名",
            "name": "{argument name=\"third place driver\" default=\"CHARLES LECLERC\"}",
            "team": "FERRARI",
            "pose": "站姿笔挺",
            "suit": "红色"
          }
        ]
      },
      {
        "title": "完整比赛排名",
        "position": "左下",
        "count": 17,
        "description": "包含 17 行的表格，展示第 4 至第 20 名，列包括名次 (POS)、车手 (DRIVER)、车队 (TEAM)、差距 (GAP) 和积分 (POINTS)。"
      },
      {
        "title": "关键比赛数据",
        "position": "右上方",
        "count": 5,
        "stats": [
          "杆位",
          "最快圈速（紫色背景）",
          "当日最佳车手",
          "总里程",
          "获胜者平均时速"
        ]
      },
      {
        "title": "积分榜更新",
        "position": "右下方",
        "columns": 2,
        "lists": [
          "车手积分榜前三名",
          "车队积分榜前三名"
        ]
      }
    ]
  }
}

## 来源备注
- 源站作者：呆大人
- 源站 UUID：7kAiKTdTvm
- 源站分类：06_图文排版视觉传达

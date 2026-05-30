---
id: graphic-title-position-count-0402
title: "剧场版动画电影海报"
category: graphic
subcategory: "06_图文排版视觉传达"
aesthetic: null
tags: ["动漫", "海报", "电影", "绿色", "治愈", "冒险", "成长", "清新"]
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
  "type": "anime movie poster",
  "character": {
    "name": "{argument name=\"character name\" default=\"Zundamon\"}",
    "appearance": "young anime character, short light green hair, distinctive green bean-shaped hair buns, amber eyes, white short-sleeved shirt, green suspenders, green bow tie"
  },
  "layout": {
    "background": "top half features a blue sky with clouds and a cityscape with a tower; bottom half features a rural landscape with a river, mountains, and a glowing sunrise",
    "centerpiece": "large bust portrait of the character looking up with a hopeful expression",
    "sections": [
      {
        "title": "award_laurel",
        "position": "top-left corner",
        "count": 1,
        "labels": [
          "第1回 ずんだ映画祭 観客賞 受賞"
        ]
      },
      {
        "title": "faded_portrait",
        "position": "top-left",
        "count": 1,
        "labels": [
          "smiling character"
        ]
      },
      {
        "title": "catchphrase",
        "position": "top-right",
        "count": 1,
        "labels": [
          "{argument name=\"catchphrase\" default=\"この出会いが、ボクを変えるのだ。\"}"
        ]
      },
      {
        "title": "intro_text",
        "position": "mid-left",
        "count": 1,
        "labels": [
          "ずんだの香りに導かれて、ずんだもんの小さな冒険が、いま始まる――"
        ]
      },
      {
        "title": "station_scene",
        "position": "mid-left lower",
        "count": 2,
        "labels": [
          "pointing character",
          "仙台 Sendai sign"
        ]
      },
      {
        "title": "worried_portrait",
        "position": "mid-right",
        "count": 1,
        "labels": [
          "worried character"
        ]
      },
      {
        "title": "main_title",
        "position": "center bottom",
        "count": 1,
        "labels": [
          "{argument name=\"movie title\" default=\"劇場版 ずんだもん ～小さなボクと、大きな一歩～\"}"
        ]
      },
      {
        "title": "silhouette_scene",
        "position": "bottom center",
        "count": 1,
        "labels": [
          "character facing away towards sunrise"
        ]
      },
      {
        "title": "theme_song_badge",
        "position": "bottom left",
        "count": 1,
        "labels": [
          "主題歌 「ずんだのうた」 うた：ずんだもん (NEUTRINO)"
        ]
      },
      {
        "title": "doodle_quote",
        "position": "bottom right",
        "count": 2,
        "labels": [
          "line-art doodle",
          "「ずんだって、メチャクチャおいしいのだ！」"
        ]
      },
      {
        "title": "credits_and_date",
        "position": "bottom edge",
        "count": 1,
        "labels": [
          "{argument name=\"release date\" default=\"2024年 夏 全国ロードショー\"}"
        ]
      }
    ]
  }
}

## 中文译文（源站提供）
{
  "type": "动漫电影海报",
  "character": {
    "name": "{argument name=\"character name\" default=\"ずんだもん\"}",
    "appearance": "绿色头发配毛豆形状发髻，琥珀色眼睛，白色短袖衬衫，绿色背带"
  },
  "layout": {
    "centerpiece": "角色的大型半身肖像，充满希望地仰望，背景为带有塔楼的城市景观",
    "title_area": {
      "main_title": "{argument name=\"main title\" default=\"ずんだもん\"}",
      "subtitle": "{argument name=\"subtitle\" default=\"〜小さなボクと、大きな一歩〜\"}",
      "prefix": "剧场版"
    },
    "secondary_poses": {
      "count": 5,
      "descriptions": [
        "左上角淡出的微笑脸庞",
        "左下角全身像，指向写有“仙台 Sendai”字样的火车站站牌",
        "右下角带有担忧表情的半身像",
        "底部中央背影剪影，眺望乡村日落",
        "右下角简单的线条画脸部涂鸦"
      ]
    },
    "text_elements": [
      { "position": "右上角", "text": "{argument name=\"catchphrase\" default=\"この出会いが、ボクを変えるのだ。\"}" },
      { "position": "左上角", "text": "第 1 回 ずんだ电影节 观众奖获奖 (位于月桂花环内)" },
      { "position": "中左侧", "text": "在毛豆香气的指引下，ずんだもん的小小冒险，现在开始了——" },
      { "position": "左下角", "text": "主题曲 「ずんだのうた」 演唱：ずんだもん (NEUTRINO) (位于圆圈内)" },
      { "position": "右下角", "text": "「毛豆什么的，超级好吃的のだ！」" },
      { "position": "底部边缘", "text": "演职员表及 {argument name=\"release date\" default=\"2024 年 夏 全国公映\"}" }
    ]
  }
}

## 来源备注
- 源站作者：はやぴか
- 源站 UUID：yI2rjE9IqZ
- 源站分类：06_图文排版视觉传达

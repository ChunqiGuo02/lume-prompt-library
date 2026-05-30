---
id: story_board-name-character-argument-0241
title: "电影海报与角色设定图"
category: story_board
subcategory: "09_故事分镜角色设定"
aesthetic: japanese-zen-garden
tags: ["电影", "日系", "暖调", "猫咪", "治愈", "海报", "设定集", "温情"]
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
  "type": "live-action movie poster and comprehensive character reference sheet",
  "layout": {
    "top_half": {
      "type": "cinematic movie poster",
      "visuals": "Young Japanese man holding an orange tabby cat in foreground, young Japanese woman looking right in background, golden hour city skyline with bridge and faint rainbow.",
      "typography": {
        "title": "{argument name=\"movie title\" default=\"虹の橋の約束\"}",
        "subtitle": "NIJI NO HASHI NO YAKUSOKU",
        "release_date": "{argument name=\"release date\" default=\"11.7 FRI roadshow\"}",
        "taglines": "Multiple vertical and horizontal Japanese text blocks."
      }
    },
    "middle_band": {
      "type": "film strip",
      "count": 5,
      "description": "Horizontal row of 5 cinematic stills showing characters in various scenes."
    },
    "bottom_half": {
      "type": "character design sheets",
      "sections": [
        {
          "subject": "Female Character",
          "name": "{argument name=\"female character name\" default=\"藤木 ハル\"}",
          "full_body_poses": 4,
          "pose_labels": ["FRONT", "SIDE (LEFT)", "BACK", "3/4 VIEW"],
          "facial_expressions": 3,
          "detail_shots": 3,
          "footwear_angles": 3,
          "silhouette_postures": 2,
          "color_swatches": 5
        },
        {
          "subject": "Male Character",
          "name": "{argument name=\"male character name\" default=\"瀬川 凛\"}",
          "full_body_poses": 4,
          "pose_labels": ["FRONT", "SIDE (LEFT)", "BACK", "3/4 VIEW"],
          "facial_expressions": 3,
          "detail_shots": 3,
          "footwear_angles": 3,
          "silhouette_postures": 2
        },
        {
          "subject": "Orange Tabby Cat",
          "name": "{argument name=\"cat name\" default=\"チェリー\"}",
          "full_body_poses": 3,
          "large_headshot": 1,
          "small_headshots": 4,
          "detail_shots": 3,
          "color_swatches": 4,
          "scale_reference": 1
        },
        {
          "subject": "Additional Stills",
          "count": 6,
          "description": "Grid of 6 cinematic shots featuring the characters and cat."
        }
      ]
    }
  }
}

## 中文译文（源站提供）
{
  "type": "真人电影海报与综合角色参考图",
  "layout": {
    "top_half": {
      "type": "电影感海报",
      "visuals": "前景为抱着橘色虎斑猫的年轻日本男性，背景为看向右侧的年轻日本女性，背景是带有桥梁和淡淡彩虹的黄金时刻城市天际线。",
      "typography": {
        "title": "{argument name=\"movie title\" default=\"虹の橋の約束\"}",
        "subtitle": "NIJI NO HASHI NO YAKUSOKU",
        "release_date": "{argument name=\"release date\" default=\"11.7 FRI roadshow\"}",
        "taglines": "多处垂直与水平排列的日语文本块。"
      }
    },
    "middle_band": {
      "type": "胶片条",
      "count": 5,
      "description": "由 5 张展示角色在不同场景下的电影剧照组成的水平行。"
    },
    "bottom_half": {
      "type": "角色设计图",
      "sections": [
        {
          "subject": "女性角色",
          "name": "{argument name=\"female character name\" default=\"藤木 ハル\"}",
          "full_body_poses": 4,
          "pose_labels": ["正面", "侧面 (左)", "背面", "3/4 侧面"],
          "facial_expressions": 3,
          "detail_shots": 3,
          "footwear_angles": 3,
          "silhouette_postures": 2,
          "color_swatches": 5
        },
        {
          "subject": "男性角色",
          "name": "{argument name=\"male character name\" default=\"瀬川 凛\"}",
          "full_body_poses": 4,
          "pose_labels": ["正面", "侧面 (左)", "背面", "3/4 侧面"],
          "facial_expressions": 3,
          "detail_shots": 3,
          "footwear_angles": 3,
          "silhouette_postures": 2
        },
        {
          "subject": "橘色虎斑猫",
          "name": "{argument name=\"cat name\" default=\"チェリー\"}",
          "full_body_poses": 3,
          "large_headshot": 1,
          "small_headshots": 4,
          "detail_shots": 3,
          "color_swatches": 4,
          "scale_reference": 1
        },
        {
          "subject": "额外剧照",
          "count": 6,
          "description": "由 6 张展示角色与猫的电影剧照组成的网格。"
        }
      ]
    }
  }
}

## 来源备注
- 源站作者：Far
- 源站 UUID：lywNYKhMM9
- 源站分类：09_故事分镜角色设定

---
id: graphic-count-description-type-0952
title: "电影角色与场景设定图"
category: graphic
subcategory: "06_图文排版视觉传达"
aesthetic: japanese-zen-garden
tags: ["电影", "日系", "猫咪", "温情", "暖调", "日落", "剧情", "设定"]
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
  "type": "comprehensive movie production design document",
  "style": "live-action cinematic photography, highly detailed, Japanese movie promotional material",
  "theme": "{argument name=\"cinematic vibe\" default=\"emotional sunset drama\"}",
  "layout": {
    "top_section": {
      "type": "Movie Poster",
      "title": "{argument name=\"movie title\" default=\"虹の橋の約束\"}",
      "subtitle": "NIJINO HASHI NO YAKUSOKU",
      "release_date": "11.7 FRI roadshow",
      "visuals": "Large cinematic montage featuring {argument name=\"male character description\" default=\"young Japanese man with messy dark hair\"} looking left, an {argument name=\"animal companion\" default=\"orange tabby cat\"} on his shoulder, and a {argument name=\"female character description\" default=\"young Japanese woman with shoulder-length brown hair\"} in the background against a sunset cityscape with a rainbow.",
      "film_strip": {
        "count": 5,
        "description": "horizontal cinematic stills showing the characters and cat in various scenes"
      }
    },
    "middle_left_section": {
      "type": "Female Character Reference",
      "label": "藤木ハル",
      "full_body_turnaround": { "count": 4, "poses": ["Front", "Side (Left)", "Back", "3/4 View"], "outfit": "long beige cardigan, brown top, wide brown pants" },
      "facial_expressions": { "count": 3 },
      "details": { "count": 3, "description": "close-ups of hands, collar, and hair" },
      "footwear": { "count": 3, "description": "angles of brown slip-on shoes" },
      "silhouette": { "count": 2 },
      "color_palette": { "count": 5, "description": "swatches" }
    },
    "middle_right_section": {
      "type": "Male Character Reference",
      "label": "瀬川 凛",
      "full_body_turnaround": { "count": 4, "poses": ["Front", "Side (Left)", "Back", "3/4 View"], "outfit": "dark grey jacket, white shirt, dark pants" },
      "facial_expressions": { "count": 3 },
      "details": { "count": 3, "description": "close-ups of hands, collar, and hair" },
      "footwear": { "count": 3, "description": "angles of black sneakers" },
      "silhouette": { "count": 2 }
    },
    "bottom_left_section": {
      "type": "Animal Reference",
      "label": "チェリー",
      "main_poses": { "count": 3, "description": "sitting, standing, walking" },
      "face_closeup": { "count": 1 },
      "fur_details": { "count": 2 },
      "behavioral_poses": { "count": 2, "description": "lying down" },
      "anatomy_details": { "count": 3, "description": "paws and tail" },
      "scale_reference": { "count": 1, "description": "cat next to human silhouette" },
      "facial_angles": { "count": 4 }
    },
    "bottom_right_section": {
      "type": "Cinematic Storyboard",
      "grid": { "count": 9, "description": "cinematic stills featuring the man, woman, and cat in various lighting conditions like sunset and dusk indoors" }
    }
  }
}

## 中文译文（源站提供）
{
  "type": "综合电影制作设计文档",
  "style": "真人电影摄影风格，高细节，日本电影宣传物料",
  "theme": "{argument name=\"cinematic vibe\" default=\"感人的日落剧情片\"}",
  "layout": {
    "top_section": {
      "type": "电影海报",
      "title": "{argument name=\"movie title\" default=\"虹の橋の約束\"}",
      "subtitle": "NIJINO HASHI NO YAKUSOKU",
      "release_date": "11 月 7 日 周五 上映",
      "visuals": "大型电影蒙太奇，画面包含 {argument name=\"male character description\" default=\"留着凌乱深色短发的年轻日本男性\"} 向左望去，肩上趴着一只 {argument name=\"animal companion\" default=\"橘色虎斑猫\"}，背景是 {argument name=\"female character description\" default=\"留着棕色齐肩发的年轻日本女性\"}，衬托在带有彩虹的日落城市景观中。",
      "film_strip": {
        "count": 5,
        "description": "水平排列的电影剧照，展示了角色与猫在不同场景中的画面"
      }
    },
    "middle_left_section": {
      "type": "女性角色参考",
      "label": "藤木ハル",
      "full_body_turnaround": { "count": 4, "poses": ["正面", "侧面 (左)", "背面", "3/4 侧面"], "outfit": "米色长款开衫，棕色上衣，棕色阔腿裤" },
      "facial_expressions": { "count": 3 },
      "details": { "count": 3, "description": "手部、领口和头发的特写" },
      "footwear": { "count": 3, "description": "棕色平底鞋的多个角度" },
      "silhouette": { "count": 2 },
      "color_palette": { "count": 5, "description": "色卡" }
    },
    "middle_right_section": {
      "type": "男性角色参考",
      "label": "瀬川 凛",
      "full_body_turnaround": { "count": 4, "poses": ["正面", "侧面 (左)", "背面", "3/4 侧面"], "outfit": "深灰色夹克，白色衬衫，深色长裤" },
      "facial_expressions": { "count": 3 },
      "details": { "count": 3, "description": "手部、领口和头发的特写" },
      "footwear": { "count": 3, "description": "黑色运动鞋的多个角度" },
      "silhouette": { "count": 2 }
    },
    "bottom_left_section": {
      "type": "动物参考",
      "label": "チェリー",
      "main_poses": { "count": 3, "description": "坐姿、站姿、行走" },
      "face_closeup": { "count": 1 },
      "fur_details": { "count": 2 },
      "behavioral_poses": { "count": 2, "description": "趴卧" },
      "anatomy_details": { "count": 3, "description": "爪子和尾巴" },
      "scale_reference": { "count": 1, "description": "猫与人类剪影的比例参考" },
      "facial_angles": { "count": 4 }
    },
    "bottom_right_section": {
      "type": "电影分镜",
      "grid": { "count": 9, "description": "电影剧照，展示了男性、女性和猫在日落和室内黄昏等不同光影条件下的画面" }
    }
  }
}

## 来源备注
- 源站作者：いにしえ@AI Director & Creator｜Will Oldgram
- 源站 UUID：04s4ufh7fI
- 源站分类：06_图文排版视觉传达

---
id: "landscape-count-details-name-001"
title: "双时代战舰角色设定海报"
category: landscape
subcategory: "09_故事分镜角色设定"
aesthetic: null
tags: ["电影海报", "战舰", "军事", "穿越", "设定", "海战", "军装", "日落"]
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
  "type": "combined cinematic poster and technical reference sheet",
  "theme": "{argument name=\"theme\" default=\"time-slip military drama\"}",
  "layout": {
    "top_half": {
      "type": "movie poster",
      "title": "{argument name=\"main title\" default=\"Fog of Two Eras\"}",
      "subtitle": "ふたつの時代の霧",
      "tagline": "時代を超え、問いは同じ海に立つ。何を守り、何を超えていくのか。",
      "scene": "A {argument name=\"ww2 ship class\" default=\"Yamato-class battleship\"} and a {argument name=\"modern ship class\" default=\"Aegis destroyer\"} sailing side-by-side in {argument name=\"setting\" default=\"Tokyo Bay with Rainbow Bridge and city skyline\"} at sunset.",
      "sky_elements": "Faded portraits of a WWII naval commander and a modern female naval captain looking out over the bay, with military helicopters flying."
    },
    "bottom_half": {
      "type": "split technical reference sheet",
      "left_column": {
        "subject": "WWII Battleship and Commander",
        "ship_details": {
          "title": "戦艦大和 艦艇設定画",
          "main_render": "1 angled side view",
          "orthographic_views": "3 views (side, top, front cross-section)",
          "detail_panels": {
            "count": 6,
            "descriptions": ["Main guns", "Pagoda mast", "AA guns", "Radar", "Catapult", "Stern"]
          },
          "scale_chart": "1 silhouette comparison"
        },
        "character_details": {
          "name": "中村義人 中佐",
          "turnaround": { "count": 5, "poses": ["front", "back", "side", "3/4 front", "3/4 back"] },
          "expressions": { "count": 3, "types": ["neutral", "stern", "pensive"] },
          "uniform_details": { "count": 6, "items": ["rank insignia", "buttons", "medals", "cap details"] },
          "hand_details": { "count": 3, "poses": ["holding cap", "resting", "clenched"] }
        }
      },
      "right_column": {
        "subject": "Modern Destroyer and Captain",
        "ship_details": {
          "title": "護衛艦 あきつ (DDG-115)",
          "main_render": "1 angled side view",
          "orthographic_views": "3 views (side, top, front cross-section)",
          "detail_panels": {
            "count": 6,
            "descriptions": ["Radar panels", "VLS cells", "Anti-ship missiles", "Main gun", "Bridge interior", "Helicopter deck"]
          },
          "scale_chart": "1 silhouette comparison"
        },
        "character_details": {
          "name": "瀬田 凛 一佐",
          "turnaround": { "count": 5, "poses": ["front", "back", "side", "3/4 front", "3/4 back"] },
          "expressions": { "count": 3, "types": ["neutral", "stern", "pensive"] },
          "uniform_details": { "count": 6, "items": ["rank insignia", "buttons", "ribbons", "cap details"] },
          "hand_details": { "count": 3, "poses": ["holding cap", "resting", "clenched"] }
        }
      }
    }
  }
}

## 中文译文（源站提供）
{
  "type": "电影海报与技术参考图组合",
  "theme": "{argument name=\"theme\" default=\"时空穿越军事剧\"}",
  "layout": {
    "top_half": {
      "type": "电影海报",
      "title": "{argument name=\"main title\" default=\"双世之雾\"}",
      "subtitle": "ふたつの時代の霧",
      "tagline": "时代更迭，海域依旧。何为守护，何为超越。",
      "scene": "一艘 {argument name=\"ww2 ship class\" default=\"大和级战列舰\"} 与一艘 {argument name=\"modern ship class\" default=\"宙斯盾驱逐舰\"} 在日落时分的 {argument name=\"setting\" default=\"东京湾（含彩虹大桥与城市天际线）\"} 并肩航行。",
      "sky_elements": "二战海军指挥官与现代女性海军舰长的虚化肖像，俯瞰海湾，背景有军用直升机飞过。"
    },
    "bottom_half": {
      "type": "分割式技术参考图",
      "left_column": {
        "subject": "二战战列舰与指挥官",
        "ship_details": {
          "title": "戦艦大和 艦艇設定画",
          "main_render": "1 个侧角视图",
          "orthographic_views": "3 个视图（侧面、顶部、正面横截面）",
          "detail_panels": {
            "count": 6,
            "descriptions": ["主炮", "塔式舰桥", "防空炮", "雷达", "弹射器", "舰尾"]
          },
          "scale_chart": "1 个轮廓对比图"
        },
        "character_details": {
          "name": "中村义人 中佐",
          "turnaround": { "count": 5, "poses": ["正面", "背面", "侧面", "3/4 正面", "3/4 背面"] },
          "expressions": { "count": 3, "types": ["中性", "严肃", "沉思"] },
          "uniform_details": { "count": 6, "items": ["军衔徽章", "纽扣", "勋章", "帽饰细节"] },
          "hand_details": { "count": 3, "poses": ["持帽", "自然下垂", "紧握"] }
        }
      },
      "right_column": {
        "subject": "现代驱逐舰与舰长",
        "ship_details": {
          "title": "护卫舰 秋津 (DDG-115)",
          "main_render": "1 个侧角视图",
          "orthographic_views": "3 个视图（侧面、顶部、正面横截面）",
          "detail_panels": {
            "count": 6,
            "descriptions": ["雷达面板", "垂直发射系统", "反舰导弹", "主炮", "舰桥内部", "直升机甲板"]
          },
          "scale_chart": "1 个轮廓对比图"
        },
        "character_details": {
          "name": "濑田 凛 一佐",
          "turnaround": { "count": 5, "poses": ["正面", "背面", "侧面", "3/4 正面", "3/4 背面"] },
          "expressions": { "count": 3, "types": ["中性", "严肃", "沉思"] },
          "uniform_details": { "count": 6, "items": ["军衔徽章", "纽扣", "勋表", "帽饰细节"] },
          "hand_details": { "count": 3, "poses": ["持帽", "自然下垂", "紧握"] }
        }
      }
    }
  }
}

## 来源备注
- 源站作者：いにしえ@AI Director & Creator｜Will Oldgram
- 源站 UUID：nklYRYavJV
- 源站分类：09_故事分镜角色设定

---
id: "landscape-panel-car-for-001"
title: "赛博朋克风三联画：复古汽车、街头女郎与霓虹餐厅"
category: landscape
subcategory: "09_故事分镜角色设定"
aesthetic: null
tags: ["复古", "霓虹", "夜晚", "雾气", "汽车", "女性", "餐馆", "暖色调"]
recommended_models: 
  - banana-pro
recommended_params:
  aspect_ratio: "3:4"
  quality: null
  style_strength: null
sample_outputs: []
quality_tier: A
author: "ChunqiGuo02"
source: "Leader Prompt Gallery (https://www.leaderai.top/mid-api/lab/image_prompt/index.html)"
language: en
created_at: 2026-05-30
version: "1.0.0"
related_to: []
---

# 正文 prompt
{
  "meta": {
    "image_quality": "Very High",
    "image_type": "Digital Art / AI Generation (Triptych Montage)",
    "resolution_estimation": "High definition vertical collage",
    "file_characteristics": {
      "compression_artifacts": "Low",
      "noise_level": "Low",
      "lens_type_estimation": "Varied per panel (Wide for car, Portrait/85mm for woman, Wide for diner)"
    }
  },
  "global_context": {
    "scene_description": "A vertical triptych montage displaying three distinct retro-cinematic scenes sharing a 'synthwave' or 'neo-noir' aesthetic. \n\nTop Panel: A side-profile view of a {"car color" "yellow"} classic muscle car parked at a gas station at night with wet pavement reflections and strong orange neon lighting. \n\nMiddle Panel: A cinematic portrait of a young woman with dark curly hair and a leather jacket, standing in a foggy, backlit urban environment with soft bokeh. \n\nBottom Panel: A highly detailed interior view of a retro diner counter, featuring stools, a tiled bar, kitchen equipment, and a glowing overhead menu board.",
    "environment_type": "Composite (Outdoor/Outdoor/Indoor)",
    "time_of_day": "Night",
    "weather_atmosphere": "Moody, Wet, Foggy, Atmospheric",
    "lighting": {
      "source": "Artificial (Neon signage, street lamps, interior tungsten)",
      "direction": "Mixed (Top-down for car, Backlit for woman, Overhead diffused for diner)",
      "quality": "Soft, Diffused, Volumetric",
      "color_temperature": "Warm Amber/Orange dominant with cool Teal/Blue shadows"
    },
    "color_palette": {
      "dominant_hex_estimates": [
        "#FF9900",
        "#1A1A1A",
        "#0B2226",
        "#E6B800",
        "#5E3A18"
      ],
      "accent_colors": [
        "#00FFFF",
        "#FF3300",
        "#888888"
      ],
      "contrast_level": "High"
    }
  },
  "composition": {
    "camera_angle": "Eye-level (all panels)",
    "framing": "Wide (Top), Medium Close-up (Middle), Wide (Bottom)",
    "depth_of_field": "Deep (Top), Shallow (Middle), Deep (Bottom)",
    "focal_point": "Panel 1: Car center; Panel 2: Woman's face; Panel 3: Illuminated menu board",
    "symmetry_type": "Horizontal stacking",
    "rule_of_thirds_alignment": "Woman aligned center; Car aligned lower third of top panel; Diner counter aligned lower third of bottom panel"
  },
  "objects": [
    {
      "id": "panel1_car",
      "label": "Classic Muscle Car",
      "category": "Vehicle",
      "location": {
        "relative_position": "Top Panel - Center/Bottom",
        "bounding_box_percentage": {
          "x": 0.15,
          "y": 0.15,
          "width": 0.7,
          "height": 0.15
        }
      },
      "dimensions_relative": "Large",
      "distance_from_camera": "Mid",
      "pose_orientation": "Side profile facing left",
      "material": "Metal, Glass, Chrome",
      "surface_properties": {
        "texture": "Smooth automotive paint",
        "reflectivity": "High",
        "micro_detail": "Rain streaks, wet reflections."
      }
    }
  ]
}

## 中文译文（源站提供）
```json
{
  "meta": {
    "image_quality": "非常高",
    "image_type": "数字艺术 / AI 生成（三联画蒙太奇）",
    "resolution_estimation": "高清垂直拼贴",
    "file_characteristics": {
      "compression_artifacts": "低",
      "noise_level": "低",
      "lens_type_estimation": "各面板不同（汽车广角，女性肖像/85 毫米，餐馆广角）"
    }
  },
  "global_context": {
    "scene_description": "一个垂直的三联画蒙太奇，展示了三个独特的复古电影场景，共享“合成波”或“新黑色电影”美学。\n\n顶部面板：一辆 {\"car color\" \"黄色\"} 经典肌肉车停在夜间加油站的侧面视图，路面湿滑反光，橙色霓虹灯光强烈。\n\n中间面板：一位年轻女性的电影肖像，她留着深色卷发，穿着皮夹克，站在一个雾蒙蒙、背光、城市环境中，带有柔和的焦外虚化效果。\n\n底部面板：复古餐馆柜台的高度详细内部视图，包括凳子、瓷砖吧台、厨房设备和发光的头顶菜单板。",
    "environment_type": "复合（室外/室外/室内）",
    "time_of_day": "夜晚",
    "weather_atmosphere": "忧郁、潮湿、多雾、有气氛",
    "lighting": {
      "source": "人造（霓虹灯招牌、路灯、室内钨丝灯）",
      "direction": "混合（汽车自上而下，女性背光，餐馆顶部漫射）",
      "quality": "柔和、漫射、体积感",
      "color_temperature": "暖琥珀色/橙色为主，冷青色/蓝色阴影"
    },
    "color_palette": {
      "dominant_hex_estimates": [
        "#FF9900",
        "#1A1A1A",
        "#0B2226",
        "#E6B800",
        "#5E3A18"
      ],
      "accent_colors": [
        "#00FFFF",
        "#FF3300",
        "#888888"
      ],
      "contrast_level": "高"
    }
  },
  "composition": {
    "camera_angle": "平视（所有面板）",
    "framing": "广角（顶部），中景特写（中间），广角（底部）",
    "depth_of_field": "深（顶部），浅（中间），深（底部）",
    "focal_point": "面板 1：汽车中心；面板 2：女性面部；面板 3：发光菜单板",
    "symmetry_type": "水平堆叠",
    "rule_of_thirds_alignment": "女性居中对齐；汽车对齐顶部面板下三分之一处；餐馆柜台对齐底部面板下三分之一处"
  },
  "objects": [
    {
      "id": "panel1_car",
      "label": "经典肌肉车",
      "category": "车辆",
      "location": {
        "relative_position": "顶部面板 - 中心/底部",
        "bounding_box_percentage": {
          "x": 0.15,
          "y": 0.15,
          "width": 0.7,
          "height": 0.15
        }
      },
      "dimensions_relative": "大",
      "distance_from_camera": "中",
      "pose_orientation": "侧面朝左",
      "material": "金属、玻璃、镀铬",
      "surface_properties": {
        "texture": "光滑的汽车漆面",
        "reflectivity": "高",
        "micro_detail": "雨痕、湿润反光。"
      }
    }
  ]
}
```

## 来源备注
- 源站作者：Heisenberg
- 源站 UUID：ToWRUjEzLi
- 源站分类：09_故事分镜角色设定

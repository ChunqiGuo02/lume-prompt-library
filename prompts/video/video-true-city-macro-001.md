---
id: "video-true-city-macro-001"
title: "超逼真宏观微型城市提示（结构化JSON）"
category: video
subcategory: "04_动漫游戏视觉与IP改编"
aesthetic: null
tags: ["Seedance 2.0", "小型城市模型", "超写实微距", "低角度拍摄", "85mm 宏镜头", "暗色木质底座", "金属浮雕文字", "自然岩层纹理"]
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
  "project": "Global Miniature City Series",
  "aspect_ratio": "9:16",
  "style": "Ultra-realistic macro miniature city model",

  "composition": {
    "camera_angle": "low-angle macro",
    "framing": "city centered, base fully visible",
    "tilt_shift": true,
    "depth_of_field": "shallow",
    "lens": "85mm macro, f/1.8"
  },

  "base": {
    "material": "dark polished wood",
    "edges": "smooth rounded",
    "city_name_text": {
      "style": "gold embossed 3D",
      "font": "clean modern",
      "attached": true,
      "no_distortion": true
    }
  },

  "rock_structure": {
    "type": "floating natural layered rock",
    "texture": "high detail geological strata",
    "underside_visible": true,
    "internal_tunnel": true,
    "tunnel_light": "warm realistic glow",
    "no_scifi_glow": true
  },

  "city_core": {
    "landmarks": ["REPLACE_WITH_CITY_LANDMARKS"],
    "architecture_density": "realistic",
    "height_variation": true,
    "no_fantasy_elements": true
  },

  "road_system": {
    "type": "circular edge road",
    "lane_clear": true,
    "traffic_direction": "single_direction",
    "vehicles": {
      "lane_aligned": true,
      "no_reverse": true,
      "no_clipping": true,
      "no_floating": true
    },
    "tunnel_rule": "vehicle may enter and disappear without reappearing"
  },

  "environment": {
    "setting": "real tabletop",
    "background": "soft blurred lifestyle interior",
    "lighting": "natural indoor, warm subtle",
    "no_heavy_fog": true
  },

  "render_quality": {
    "resolution": "8K",
    "material_realism": true,
    "soft_shadows": true,
    "no_excess_hdr": true,
    "no_over_saturation": true
  },

  "negative_rules": [
    "no reverse traffic",
    "no floating objects",
    "no extreme storm",
    "no strong wind",
    "no glass-like water",
    "no cyberpunk glow",
    "no excessive particles",
    "no exaggerated lens flare"
  ]
}

## 中文译文（源站提供）
{
  "project": "全球微型城市系列",
  "aspect_ratio": "9:16",
  "style": "超逼真宏观微型城市模型",

  "composition": {
    "camera_angle": "低角度宏观",
    "framing": "城市居中，底座完全可见",
    "tilt_shift": true,
    "depth_of_field": "浅景深",
    "lens": "85mm 宏焦镜头, f/1.8"
  },

  "base": {
    "material": "深色抛光木材",
    "edges": "平滑圆润",
    "city_name_text": {
      "style": "金色浮雕3D",
      "font": "简洁现代",
      "attached": true,
      "no_distortion": true
    }
  },

  "rock_structure": {
    "type": "漂浮的自然分层岩石",
    "texture": "高细节地质层理",
    "underside_visible": true,
    "internal_tunnel": true,
    "tunnel_light": "温暖逼真光晕",
    "no_scifi_glow": true
  },

  "city_core": {
    "landmarks": ["REPLACE_WITH_CITY_LANDMARKS"],
    "architecture_density": "逼真",
    "height_variation": true,
    "no_fantasy_elements": true
  },

  "road_system": {
    "type": "圆形边缘道路",
    "lane_clear": true,
    "traffic_direction": "单向",
    "vehicles": {
      "lane_aligned": true,
      "no_reverse": true,
      "no_clipping": true,
      "no_floating": true
    },
    "tunnel_rule": "车辆可进入并消失而不再出现"
  },

  "environment": {
    "setting": "真实桌面",
    "background": "柔和模糊的生活方式室内背景",
    "lighting": "自然室内，温暖细腻",
    "no_heavy_fog": true
  },

  "render_quality": {
    "resolution": "8K",
    "material_realism": true,
    "soft_shadows": true,
    "no_excess_hdr": true,
    "no_over_saturation": true
  },

  "negative_rules": [
    "无逆向交通",
    "无漂浮物体",
    "无极端风暴",
    "无强风",
    "无玻璃般水面",
    "无赛博朋克光晕",
    "无过多粒子",
    "无夸张镜头眩光"
  ]
}

## 来源备注
- 源站作者：xiaomiaode
- 源站 UUID：0jv1mnlepz
- 源站分类：04_动漫游戏视觉与IP改编

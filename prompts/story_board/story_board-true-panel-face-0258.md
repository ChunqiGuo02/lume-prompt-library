---
id: story_board-true-panel-face-0258
title: "网球情侣黄金时刻四格电影感写真拼贴"
category: story_board
subcategory: "09_故事分镜角色设定"
aesthetic: null
tags: ["情侣", "网球", "暖色调", "浪漫", "户外", "拼贴", "写实", "摄影"]
recommended_models: 
  - banana-pro
recommended_params:
  aspect_ratio: "9:16"
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
  "generation_request": {
    "meta_data": {
      "task_type": "photoreal_cinematic_storyboard_collage",
      "language": "tr",
      "priority": "highest",
      "version": "v1.0_TENNIS_COUPLE_4PANEL_GOLDEN_HOUR_NO_TEXT_NO_UI"
    },
    "references": {
      "reference_image_style": {
        "source": "UPLOAD_REFERENCE_IMAGE",
        "purpose": "STYLE_COMPOSITION_COLORGRADE_ANCHOR",
        "strict_lock": true,
        "preserve_vibe": true,
        "preserve_palette": true,
        "preserve_lighting": true
      },
      "reference_face_female": {
        "source": "UPLOAD_REFERENCE_FACE_FEMALE (OPTIONAL)",
        "purpose": "FACE_IDENTITY_LOCK",
        "strict_lock": true,
        "face_similarity_priority": "MAX",
        "identity_lock_strength": 0.995,
        "no_identity_blending": true,
        "no_age_shift": true,
        "preserve_skin_texture": true
      },
      "reference_face_male": {
        "source": "UPLOAD_REFERENCE_FACE_MALE (OPTIONAL)",
        "purpose": "FACE_IDENTITY_LOCK",
        "strict_lock": true,
        "face_similarity_priority": "MAX",
        "identity_lock_strength": 0.995,
        "no_identity_blending": true,
        "no_age_shift": true,
        "preserve_skin_texture": true
      }
    },
    "output": {
      "format": "single_image_collage",
      "aspect_ratio": "4:5",
      "resolution": "high",
      "no_text": true,
      "no_logos": true,
      "no_ui": true,
      "no_watermark": true,
      "collage_layout": {
        "type": "vertical_storyboard_4_panels",
        "panel_order_top_to_bottom": [
          "panel_1_wide_walk_handhold",
          "panel_2_closeup_racket_frame",
          "panel_3_topdown_centerline_lie",
          "panel_4_pov_racket_foreground"
        ],
        "panel_separators": "thin clean borders, no captions"
      }
    },
    "global_style": {
      "aesthetic": "romantic sporty editorial, cinematic lifestyle",
      "time_of_day": "golden hour / late afternoon",
      "color_grade": "warm filmic tones, soft contrast, natural skin",
      "photorealism": "maximum",
      "skin_texture": "natural, no beauty filter",
      "wardrobe": {
        "female": "white tennis skirt + white fitted top, white socks and sneakers",
        "male": "white polo shirt + beige shorts, white sneakers",
        "notes": "clean, minimal, sporty-chic"
      },
      "props": {
        "tennis_rackets": "classic wooden/neutral tone rackets",
        "tennis_balls": "a few scattered near net/center court"
      }
    },
    "scene": {
      "location": "outdoor tennis court with net and chain-link fence",
      "background": "trees and park elements softly out of focus, warm sunlight",
      "environment": {
        "court_color": "muted blue/green hard court",
        "mood": "soft, romantic, playful"
      }
    },
    "panels": {
      "panel_1_wide_walk_handhold": {
        "shot_type":"{"panel 1 shot type" "wide_shot"}"
      }
    }
  }
}

## 中文译文（源站提供）
{
  "generation_request": {
    "meta_data": {
      "task_type": "真实感电影故事板拼贴",，
      "language": "tr",，
      "priority": "最高",，
      “版本”：“v1.0_TENNIS_COUPLE_4PANEL_GOLDEN_HOUR_NO_TEXT_NO_UI”
    },
参考文献
      "reference_image_style": {
        "source": "上传参考图像",，
        “目的”：“风格组合颜色分级锚点”，
        "strict_lock": true,，
        "preserve_vibe": true,，
        "preserve_palette": true,，
        "preserve_lighting": true
      },
      "reference_face_female": {
        "source": "上传参考人脸女性（可选）",，
        “目的”：“人脸识别锁定”，
        "strict_lock": true,，
        "face_similarity_priority": "MAX",，
        "identity_lock_strength": 0.995，
        "no_identity_blending": true,，
        "no_age_shift": true,，
        "preserve_skin_texture": true
      },
      "reference_face_male": {
        "source": "上传参考人脸男性（可选）",，
        “目的”：“人脸识别锁定”，
        "strict_lock": true,，
        "face_similarity_priority": "MAX",，
        "identity_lock_strength": 0.995，
        "no_identity_blending": true,，
        "no_age_shift": true,，
        "preserve_skin_texture": true
      }
    },
    "output": {
      "格式"："单图拼贴",，
      "aspect_ratio": "4:5",，
      "分辨率"："高"，
      "no_text": true,，
      "no_logos": true,，
      "no_ui": true,，
      "no_watermark": true,，
      "collage_layout": {
        “type”: “垂直故事板_4格”，
        "panel_order_top_to_bottom"：[
          “panel_1_wide_walk_handhold”，
          “panel_2_closeup_racket_frame”，
          “panel_3_topdown_centerline_lie”，
          “panel_4_pov_racket_foreground”
        ],
        "panel_separators": "细而清晰的边框，无标题"
      }
    },
    "global_style": {
      “美学”：“浪漫主义运动编辑风格，电影感生活化”，
      "time_of_day": "黄金时段 / 傍晚",，
      "color_grade": "暖色调胶片感，柔和对比，自然肤色",，
      "photorealism": "最大化",，
      "skin_texture": "自然，无美颜滤镜",，
      "衣柜"：{
        "female": "白色网球裙 + 白色修身背心，白色袜子和运动鞋",，
        "男性"：白色Polo衫+米色短裤，白色运动鞋，
        “注释”：“干净、简约、运动时尚”
      },
      "props": {
        "tennis_rackets": "经典木质/中性色调球拍",，
        "tennis_balls": "几颗散落在球网/中场附近"
      }
    },
    "scene": {
      "location": "带球网和铁丝网的室外网球场",，
      "background": "树木和公园元素柔和虚焦，温暖阳光",，
      "environment": {
        "court_color": "柔和的蓝/绿色硬地球场",，
        “氛围”：“柔和、浪漫、俏皮”
      }
    },
    "panels": {
      "panel_1_wide_walk_handhold": {
        "shot_type":"{\"面板1镜头类型\" \"广角镜头\"}"
      }
    }
  }
}

## 来源备注
- 源站作者：Özge Döner
- 源站 UUID：EnfiWHO7Hv
- 源站分类：09_故事分镜角色设定

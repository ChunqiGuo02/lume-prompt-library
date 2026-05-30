---
id: story_board-panel-reference-pose-0030
title: "九宫格写真：女子持粉郁金香多角度自然光影拍摄"
category: story_board
subcategory: "09_故事分镜角色设定"
aesthetic: null
tags: ["人像", "写真", "九宫格", "郁金香", "粉色", "蓝色", "米色", "简约"]
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
      "tool": "NanoBanana Pro",
      "task_type": "photoreal_editorial_contact_sheet_9panel",
      "version": "v1.0_9PANEL_TULIP_CONTACT_SHEET_MINIMAL_WALL_NO_TEXT_EN",
      "priority": "highest",
      "language": "en"
    },
    "references": {
      "reference_image_style": {
        "source": "UPLOAD_REFERENCE_IMAGE (RECOMMENDED)",
        "purpose": "STYLE_GRID_LAYOUT_POSE_VIBE_ANCHOR",
        "strict_lock": true,
        "preserve_composition": true,
        "preserve_vibe": true
      },
      "reference_image_face": {
        "source": "UPLOAD_REFERENCE_IMAGE (OPTIONAL)",
        "purpose": "FACE_IDENTITY_LOCK",
        "strict_lock": false
      }
    },
    "output_settings": {
      "aspect_ratio": "1:1",
      "orientation": "square",
      "resolution_target": "ultra_high_res",
      "render_style": "editorial_ultra_photoreal_contact_sheet",
      "sharpness": "crisp_but_natural",
      "film_grain": "very_subtle_35mm",
      "dynamic_range": "natural_filmic_not_hdr",
      "color_grade": "soft_neutral_beige_wall_pastel_pink_flowers",
      "skin_rendering": "natural_skin_texture_no_beautify",
      "grid_layout": {
        "type": "3x3",
        "borders": "thin_white_dividers",
        "panel_consistency": "same_room_same_light_same_outfit"
      },
      "lens_and_camera": {
        "camera": "full_frame_dslr_look",
        "lens": "50mm_prime",
        "aperture": "f2.8",
        "focus_style": "subject_in_focus_minimal_distortion"
      },
      "lighting": {
        "key": "soft_window_daylight",
        "fill": "gentle_bounce",
        "mood": "calm_minimal_editorial"
      },
      "background": {
        "environment": "plain_beige_wall_indoor",
        "clean": "no_clutter_no_props"
      }
    },
    "scene": {
      "global_description": "A 9-panel (3x3) editorial contact sheet featuring the same young woman posing with a large bouquet of pink tulips in front of a plain beige wall. Minimal, clean, natural window light. Same outfit throughout: light neutral top and high-waisted blue jeans. Each panel shows a different pose or crop (side profile, back pose, three-quarter, playful lean, and close-up bouquet). No text anywhere.",
      "subject": {
        "description": "young adult woman, long wavy dark brown hair, natural makeup, relaxed expressions",
        "wardrobe": "simple light neutral top (strapless or thin straps) + high-waisted blue jeans",
        "flowers": "large bouquet of fresh pink tulips with long green stems and leaves"
      },
      "panels": [
        {
          "panel": "1",
          "framing": "medium",
          "pose": "three-quarter view, holding bouquet low, looking to the side"
        },
        {
          "panel": "2",
          "framing": "medium",
          "pose": "arched back slightly, chin up, bouquet held at waist"
        },
        {
          "panel": "3",
          "framing": "medium",

## 中文译文（源站提供）
```json

{
  "generation_request": {
    "meta_data": {
      "工具"："NanoBanana Pro"，
      "task_type": "摄影编辑联系表9面板",，
      "版本"："v1.0_9PANEL_TULIP_联系表_极简墙纸_无文字_英文版"，
      "priority": "最高",，
      "language": "zh-CN"
    },
参考文献
      "reference_image_style": {
        "source": "上传参考图像（推荐）",，
        “目的”：“STYLE_GRID_LAYOUT_POSE_VIBE_ANCHOR”，
        "strict_lock": true,，
        "preserve_composition": true,，
        "preserve_vibe": true
      },
      "reference_image_face": {
        "source": "上传参考图像（可选）",，
        “目的”：“人脸识别锁定”，
        "strict_lock": 否
      }
    },
    "output_settings": {
      "aspect_ratio": "1:1",，
      "orientation": "方形",，
      "resolution_target": "ultra_high_res",，
      "render_style": "编辑级超写实接触片",，
      “锐度”：“清晰但自然”，
      "film_grain": "非常微妙的35毫米胶片颗粒感",，
      "dynamic_range": "自然电影风格，非HDR",，
      "color_grade": "柔和中性米色墙面，淡粉色花朵"，
      "skin_rendering": "自然肤色纹理无美化",，
      "grid_layout": {
        "type": "3x3",，
        "borders": "thin_white_dividers",，
        “panel_consistency”：“同一房间、同一光线、同一服装”
      },
      "lens_and_camera": {
        "相机"："全画幅单反相机外观"，
        "镜头"："50mm_prime"，
        "光圈"："f2.8"，
        "focus_style": "主体清晰，失真最小化"
      },
      "lighting": {
        "key": "soft_window_daylight",，
        "填充"： "gentle_bounce"，
        “情绪”：“平静_极简_编辑”
      },
背景
        "环境"："室内米色墙壁的平原风格"，
        “clean”的翻译为“无杂物无道具”
      }
    },
    "scene": {
      "global_description": "一张9格（3x3）编辑风格的样片，展示同一位年轻女性手持一大束粉色郁金香，在纯米色墙壁前摆拍。极简、干净、自然窗光。全程穿着相同服装：浅色中性上衣和高腰蓝色牛仔裤。每格展示不同的姿势或构图（侧面、背面、四分之三身、俏皮倚靠、特写花束）。无任何文字。"",
      “subject”：{
        “描述”：“年轻成年女性，深棕色波浪长发，自然妆容，放松表情”，
        “衣柜”：简约浅色中性上衣（无肩带或细肩带）+高腰蓝色牛仔裤，
        “flowers”：“一大束新鲜的粉色郁金香，带有长长的绿色茎叶”
      },
      "panels": [
        {
          "面板"："1"，
          "framing": "中画幅",，
          “pose”：“四分之三身像，花束低垂，侧视”
        },
        {
          "面板"： "2"，
          "framing": "媒介",，
          “姿势”：身体微弓，下巴微抬，花束置于腰间
        },
        {
          "面板"：3，
          "framing": "中画幅",，
```

## 来源备注
- 源站作者：Özge Döner
- 源站 UUID：nmFh0fv8wa
- 源站分类：09_故事分镜角色设定

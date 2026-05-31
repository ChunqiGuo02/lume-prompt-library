---
id: portrait-true-reference-elevator-1766
title: "电梯门缝中深情拥吻的婚纱情侣特写"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: warm-cinematic-portrait
tags: ["电梯", "情侣", "亲吻", "浪漫", "暖色调", "电影感", "写实", "亲密"]
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
      "task_type": "photoreal_modern_romance",
      "version": "v1.0_ELEVATOR_DOORS_KISS_CINEMATIC_EN",
      "priority": "highest",
      "language": "en"
    },
    "references": {
      "reference_image_1": {
        "source": "UPLOAD_REFERENCE_IMAGE (OPTIONAL)",
        "purpose": "COMPOSITION_MOOD_ANCHOR",
        "strict_lock": false,
        "preserve_mood": true
      },
      "reference_image_female": {
        "source": "UPLOAD_REFERENCE_IMAGE (OPTIONAL)",
        "purpose": "FACE_IDENTITY_LOCK_FEMALE",
        "strict_lock": true,
        "face_similarity_priority": "MAX",
        "no_identity_blending": true,
        "no_beautify": true,
        "no_age_shift": true,
        "preserve_skin_texture": true,
        "preserve_facial_proportions": true
      },
      "reference_image_male": {
        "source": "UPLOAD_REFERENCE_IMAGE (OPTIONAL)",
        "purpose": "FACE_IDENTITY_LOCK_MALE",
        "strict_lock": true,
        "face_similarity_priority": "MAX",
        "no_identity_blending": true,
        "no_beautify": true,
        "no_age_shift": true,
        "preserve_skin_texture": true,
        "preserve_facial_proportions": true
      }
    },
    "global_constraints": {
      "rating": "PG-13",
      "no_explicit_sexual_content": true,
      "no_nudity": true,
      "no_text": true,
      "no_logos": true,
      "no_watermark": true
    },
    "output_settings": {
      "aspect_ratio": "9:16",
      "orientation": "portrait",
      "resolution_target": "ultra_high_res",
      "render_style": "ultra_photoreal_cinematic_film_still",
      "sharpness": "crisp_but_natural",
      "film_grain": "subtle_35mm",
      "color_grade": "warm_amber_luxury_hotel",
      "dynamic_range": "natural_not_hdr",
      "skin_rendering": "real_texture_no_retouch"
    },
    "global_rules": {
      "camera_language": "85mm, long-shot through partially closing elevator doors, centered symmetry, voyeuristic candid framing, shallow depth of field",
      "lighting_language": "warm tungsten practicals inside elevator, dim hallway outside, cinematic contrast without HDR",
      "authenticity_markers": "no AI glow, no over-sharpening, realistic shadows, natural film halation"
    },
    "creative_prompt": {
      "scene_summary": "A cinematic, ultra-photoreal moment seen from the hallway: a couple kissing inside an elevator as the gold elevator doors are almost closed, leaving a narrow vertical gap framing them. The setting feels like a luxury old building or hotel with stone walls and a classic brass elevator.",
      "subjects": {
        "count": 2,
        "description": "a real adult couple, elegant and modern",
        "expression": "passionate but tasteful, intimate and joyful",
        "skin_and_face": "real texture, no retouch, natural pores"
      },
      "pose_and_micro_action": "The man leans in to kiss; one hand around her waist. The wom"
    }
  }
}

## 中文译文（源站提供）
```json
{
  "generation_request": {
    "meta_data": {
      "tool": "NanoBanana Pro",
      "task_type": "photoreal_modern_romance",
      "version": "v1.0_ELEVATOR_DOORS_KISS_CINEMATIC_EN",
      "priority": "highest",
      "language": "zh-Hans"
    },
    "references": {
      "reference_image_1": {
        "source": "UPLOAD_REFERENCE_IMAGE (OPTIONAL)",
        "purpose": "COMPOSITION_MOOD_ANCHOR",
        "strict_lock": false,
        "preserve_mood": true
      },
      "reference_image_female": {
        "source": "UPLOAD_REFERENCE_IMAGE (OPTIONAL)",
        "purpose": "FACE_IDENTITY_LOCK_FEMALE",
        "strict_lock": true,
        "face_similarity_priority": "MAX",
        "no_identity_blending": true,
        "no_beautify": true,
        "no_age_shift": true,
        "preserve_skin_texture": true,
        "preserve_facial_proportions": true
      },
      "reference_image_male": {
        "source": "UPLOAD_REFERENCE_IMAGE (OPTIONAL)",
        "purpose": "FACE_IDENTITY_LOCK_MALE",
        "strict_lock": true,
        "face_similarity_priority": "MAX",
        "no_identity_blending": true,
        "no_beautify": true,
        "no_age_shift": true,
        "preserve_skin_texture": true,
        "preserve_facial_proportions": true
      }
    },
    "global_constraints": {
      "rating": "PG-13",
      "no_explicit_sexual_content": true,
      "no_nudity": true,
      "no_text": true,
      "no_logos": true,
      "no_watermark": true
    },
    "output_settings": {
      "aspect_ratio": "9:16",
      "orientation": "portrait",
      "resolution_target": "ultra_high_res",
      "render_style": "ultra_photoreal_cinematic_film_still",
      "sharpness": "crisp_but_natural",
      "film_grain": "subtle_35mm",
      "color_grade": "warm_amber_luxury_hotel",
      "dynamic_range": "natural_not_hdr",
      "skin_rendering": "real_texture_no_retouch"
    },
    "global_rules": {
      "camera_language": "85mm 镜头，透过半闭的电梯门长镜头拍摄，居中对称，偷窥式抓拍构图，浅景深",
      "lighting_language": "电梯内暖钨丝灯光，电梯外走廊昏暗，电影级对比度，无 HDR",
      "authenticity_markers": "无 AI 光泽，无过度锐化，逼真阴影，自然胶片光晕"
    },
    "creative_prompt": {
      "scene_summary": "从走廊看去，一个电影般的超写实瞬间：一对情侣在电梯内亲吻，金色电梯门即将关闭，只留下一个狭窄的垂直缝隙框住他们。场景感觉像是一座豪华的老建筑或酒店，有石墙和经典的黄铜电梯。",
      "subjects": {
        "count": 2,
        "description": "一对真实的成年情侣，优雅而现代",
        "expression": "热情但得体，亲密而愉悦",
        "skin_and_face": "真实纹理，无修饰，自然毛孔"
      },
      "pose_and_micro_action": "男士俯身亲吻；一只手搂着她的腰。女士"
    }
  }
}
```

## 来源备注
- 源站作者：Özge Döner
- 源站 UUID：i1k6muLPW9
- 源站分类：05_人物肖像与写实摄影

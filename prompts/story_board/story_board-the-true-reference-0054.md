---
id: story_board-the-true-reference-0054
title: "冬日湖畔浪漫电影海报设计"
category: story_board
subcategory: "09_故事分镜角色设定"
aesthetic: null
tags: ["电影", "海报", "浪漫", "爱情", "情侣", "冬季", "雪景", "湖泊"]
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
      "task_type": "text_to_image_photoreal_movie_poster_the_lake_house_style",
      "version": "v1.0",
      "priority": "high"
    },
    "references": {
      "reference_images": {
        "female_reference": "UPLOAD_FEMALE_REFERENCE_IMAGE (REQUIRED)",
        "male_reference": "UPLOAD_MALE_REFERENCE_IMAGE (REQUIRED)"
      },
      "reference_rules": {
        "preserve_identity_female": true,
        "preserve_identity_male": true,
        "identity_lock_strength_female": 0.995,
        "identity_lock_strength_male": 0.995,
        "face_similarity_priority": "MAX",
        "preserve_facial_proportions": true,
        "preserve_eye_shape_nose_lips_jawline": true,
        "no_beautify_no_face_morph": true,
        "keep_age_and_gender_consistent": true,
        "do_not_copy_any_unprovided_identity": true,
        "natural_skin_texture": true
      }
    },
    "output_settings": {
      "aspect_ratio": "9:16",
      "orientation": "portrait",
      "resolution": "ultra_high_res",
      "render_style": "photorealistic_romantic_cinematic_poster_print_ready",
      "sharpness": "high",
      "film_grain": "subtle",
      "color_grade": "soft_cool_winter_pastel"
    },
    "creative_prompt": {
      "scene_summary": "Create a photoreal romantic movie poster with a clean two-tier layout. EXACTLY TWO people only (one woman, one man). Upper half: an intimate close-up profile-to-profile shot where the woman (left) and man (right) face each other at very close distance, calm emotional expressions, shallow depth of field, soft natural daylight. Their faces must match the uploaded references exactly with realistic skin texture. Styling: soft winter palette; the man wears a beige/tan coat with a ribbed turtleneck sweater; the woman wears a muted red coat or scarf accent, short natural hair. Lower half: a serene winter lakeside scene with a small modern lake house on stilts over the water, muted sky, bare trees, and a classic red mailbox in the foreground on the left. A clean white horizontal band separates the two halves and provides space for the title. Overall tone: wistful, gentle, timeless romance; premium poster composite, print-ready.",
      "composition": {
        "layout": "two-tier poster: top close-up faces, bottom environment scene",
        "top_section": "tight close-up of faces facing each other, woman left, man right",
        "separator_band": "clean white horizontal band across the middle",
        "bottom_section": "lake house on stilts over water, winter setting, red mailbox foreground left",
        "negative_space": "keep the middle band uncluttered for title readability"
      },
      "wardrobe_and_styling": {
        "female_outfit": "muted red coat or scarf accent, natural grooming, minimal makeup",
        "male_outfit": "tan/beige coat, ribbed turtleneck sweater, understated styling",
        "environment"
      }
    }
  }
}

## 中文译文（源站提供）
```json
{
  "generation_request": {
    "meta_data": {
      "tool": "NanoBanana Pro",
      "task_type": "text_to_image_photoreal_movie_poster_the_lake_house_style",
      "version": "v1.0",
      "priority": "high"
    },
    "references": {
      "reference_images": {
        "female_reference": "UPLOAD_FEMALE_REFERENCE_IMAGE (REQUIRED)",
        "male_reference": "UPLOAD_MALE_REFERENCE_IMAGE (REQUIRED)"
      },
      "reference_rules": {
        "preserve_identity_female": true,
        "preserve_identity_male": true,
        "identity_lock_strength_female": 0.995,
        "identity_lock_strength_male": 0.995,
        "face_similarity_priority": "MAX",
        "preserve_facial_proportions": true,
        "preserve_eye_shape_nose_lips_jawline": true,
        "no_beautify_no_face_morph": true,
        "keep_age_and_gender_consistent": true,
        "do_not_copy_any_unprovided_identity": true,
        "natural_skin_texture": true
      }
    },
    "output_settings": {
      "aspect_ratio": "9:16",
      "orientation": "portrait",
      "resolution": "ultra_high_res",
      "render_style": "photorealistic_romantic_cinematic_poster_print_ready",
      "sharpness": "high",
      "film_grain": "subtle",
      "color_grade": "soft_cool_winter_pastel"
    },
    "creative_prompt": {
      "scene_summary": "创作一张写实浪漫电影海报，采用简洁的两层布局。画面中只有 EXACTLY TWO 个人（一女一男）。上半部分：亲密的特写侧面镜头，女人（左）和男人（右）脸对脸，距离非常近，表情平静，景深较浅，柔和的自然日光。他们的面部必须与上传的参考图完全一致，并具有真实的皮肤纹理。造型：柔和的冬季色调；男人穿着米色/棕褐色外套，内搭罗纹高领毛衣；女人穿着柔和的红色外套或围巾点缀，短发自然。下半部分：宁静的冬季湖畔场景，水面上有一座小型的现代高脚湖畔小屋，天空朦胧，树木光秃，前景左侧有一个经典的红色邮箱。一条干净的白色水平带将两部分隔开，并为标题留出空间。整体基调：忧郁、温柔、永恒的浪漫；高级海报合成，可供印刷。",
      "composition": {
        "layout": "两层海报：顶部特写面部，底部环境场景",
        "top_section": "脸对脸的特写，女人在左，男人在右",
        "separator_band": "中间有一条干净的白色水平带",
        "bottom_section": "水上高脚湖畔小屋，冬季场景，前景左侧有红色邮箱",
        "negative_space": "保持中间带整洁，以便标题清晰可读"
      },
      "wardrobe_and_styling": {
        "female_outfit": "柔和的红色外套或围巾点缀，自然修饰，淡妆",
        "male_outfit": "棕褐色/米色外套，罗纹高领毛衣，低调造型",
        "environment": "冬季湖畔，光秃的树木，朦胧的天空"
      }
    }
  }
}
```

## 来源备注
- 源站作者：Özge Döner
- 源站 UUID：BiqzVyl3Ww
- 源站分类：09_故事分镜角色设定

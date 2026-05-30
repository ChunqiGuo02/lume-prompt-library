---
id: "landscape-true-preserve-reference-001"
title: "湖畔藤巢情侣写真，红裙白衫浪漫定格"
category: landscape
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["情侣", "浪漫", "温馨", "自然", "户外", "红色", "鸟巢", "湖泊"]
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
      "task_type": "photoreal_romantic_couple_nature_editorial",
      "version": "v1.0_ROMANTIC_NEST_RING_RED_DRESS_NO_TEXT_EN",
      "priority": "highest",
      "language": "en"
    },

    "references": {
      "reference_image_style": {
        "source": "UPLOAD_REFERENCE_IMAGE (REQUIRED)",
        "purpose": "STYLE_COMPOSITION_POSE_LIGHTING_ANCHOR",
        "strict_lock": true,
        "preserve_pose": true,
        "preserve_composition": true,
        "preserve_lighting": true,
        "preserve_vibe": true
      },
      "reference_image_face_female": {
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
      "reference_image_face_male": {
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
      "no_nudity": true,
      "no_explicit_sexual_content": true,
      "no_logos": true,
      "no_watermark": true,
      "no_readable_text": true
    },

    "output_settings": {
      "aspect_ratio": "4:5",
      "orientation": "portrait",
      "resolution_target": "ultra_high_res",
      "render_style": "cinematic_photoreal_editorial",
      "sharpness": "crisp_but_natural",
      "film_grain": "subtle_35mm",
      "color_grade": "warm_natural_daylight",
      "dynamic_range": "natural_not_hdr",
      "skin_rendering": "real_texture_no_retouch"
    },

    "creative_prompt": {
      "scene_summary": "Create a photoreal romantic nature editorial featuring an intimate couple inside a large circular nest-like structure made of intertwined branches.\n\nSetting: elevated wooden platform overlooking a calm lake and lush green hills. The nest forms a perfect circular frame around the couple, with organic twig textures clearly visible. Background softly blurred: water, distant mountains, and natural greenery under soft daylight.\n\nSubjects: one adult woman and one adult man, seated closely inside the circular structure, bodies naturally intertwined. Foreheads gently touching, eyes closed or half-closed, conveying emotional intimacy rather than explicit action.\n\nFemale wardrobe: a flowing red floral maxi dress with thin straps, lightweight fabric, natural movement, realistic folds and wind interaction. Dress color is deep warm red with subtle floral pattern, eleg"
    }
  }
}

## 中文译文（源站提供）
```json
{
  "generation_request": {
    "meta_data": {
      "tool": "NanoBanana Pro",
      "task_type": "photoreal_romantic_couple_nature_editorial",
      "version": "v1.0_ROMANTIC_NEST_RING_RED_DRESS_NO_TEXT_EN",
      "priority": "highest",
      "language": "en"
    },
    "references": {
      "reference_image_style": {
        "source": "UPLOAD_REFERENCE_IMAGE (REQUIRED)",
        "purpose": "STYLE_COMPOSITION_POSE_LIGHTING_ANCHOR",
        "strict_lock": true,
        "preserve_pose": true,
        "preserve_composition": true,
        "preserve_lighting": true,
        "preserve_vibe": true
      },
      "reference_image_face_female": {
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
      "reference_image_face_male": {
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
      "no_nudity": true,
      "no_explicit_sexual_content": true,
      "no_logos": true,
      "no_watermark": true,
      "no_readable_text": true
    },
    "output_settings": {
      "aspect_ratio": "4:5",
      "orientation": "portrait",
      "resolution_target": "ultra_high_res",
      "render_style": "cinematic_photoreal_editorial",
      "sharpness": "crisp_but_natural",
      "film_grain": "subtle_35mm",
      "color_grade": "warm_natural_daylight",
      "dynamic_range": "natural_not_hdr",
      "skin_rendering": "real_texture_no_retouch"
    },
    "creative_prompt": {
      "scene_summary": "创作一张写实浪漫的自然主题时尚大片，一对亲密的爱侣置身于一个由交织树枝构成的大型圆形鸟巢状结构中。\n\n场景：一个高架木质平台，俯瞰着平静的湖泊和郁郁葱葱的绿色山丘。鸟巢在爱侣周围形成一个完美的圆形框架，清晰可见有机树枝纹理。背景柔和虚化：水面、远山和柔和日光下的自然绿植。\n\n主体：一名成年女性和一名成年男性，紧密地坐在圆形结构内，身体自然交织。额头轻轻相触，眼睛闭合或半闭，传达出情感上的亲密而非明确的动作。\n\n女性服饰：一件飘逸的红色花卉图案长款连衣裙，细肩带，轻薄面料，自然垂坠，逼真的褶皱和与风的互动。连衣裙颜色为深暖红色，带有精致的花卉图案，优雅"
    }
  }
}
```

## 来源备注
- 源站作者：Özge Döner
- 源站 UUID：sZNqOz1sdL
- 源站分类：05_人物肖像与写实摄影

---
id: "landscape-true-rain-wet-001"
title: "雨中丛林公路浪漫拥吻电影感写真"
category: landscape
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["浪漫", "情侣", "雨天", "丛林", "公路", "写实", "电影", "绿色"]
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
      "task_type": "photoreal_cinematic_rain_romance",
      "version": "v1.0_RAIN_DANCE_DIP_ROAD_JUNGLE_FILM_LOOK_NO_TEXT",
      "priority": "highest"
    },
    "references": {
      "reference_image_1": {
        "source": "UPLOAD_REFERENCE_IMAGE (REQUIRED)",
        "purpose": "FACE_IDENTITY_LOCK_FEMALE",
        "strict_lock": true,
        "face_similarity_priority": "MAX",
        "no_identity_blending": true,
        "no_beautify": true,
        "no_age_shift": true,
        "preserve_skin_texture": true,
        "preserve_facial_proportions": true
      },
      "reference_image_2": {
        "source": "UPLOAD_REFERENCE_IMAGE (OPTIONAL)",
        "purpose": "POSE_COMPOSITION_ANCHOR_RAIN_DIP",
        "strict_lock": true,
        "preserve_pose": true,
        "preserve_composition": true
      }
    },
    "output_settings": {
      "aspect_ratio": "9:16",
      "orientation": "portrait",
      "resolution_target": "ultra_high_res",
      "render_style": "cinematic_photoreal_film_still",
      "sharpness": "crisp_subject_soft_background",
      "film_grain": "subtle_35mm",
      "color_grade": "moody_warm_rain_cinematic",
      "dynamic_range": "natural_not_hdr",
      "skin_rendering": "real_texture_wet_skin_natural"
    },
    "creative_prompt": {
      "scene_summary": "Ultra-photorealistic cinematic romance in heavy rain on a jungle road. A couple is mid-dance dip: the man supports the woman in a dramatic lean-back pose while they laugh and lock eyes. Everything is soaked—wet hair, wet fabric clinging naturally, rain streaks visible, road surface glossy with puddles. The mood is passionate, playful, and movie-like.",
      "environment": {
        "location": "tropical forest / jungle roadside",
        "background": "dense green foliage, soft bokeh, misty rain haze",
        "ground": "wet asphalt with reflective puddles, faint yellow road line visible",
        "weather": "heavy rain with visible streaks and splashes",
        "lighting": "overcast soft key light + subtle warm bounce, cinematic contrast"
      },
      "subjects": {
        "female": {
          "identity": "MATCH_REFERENCE_FACE_EXACTLY",
          "wardrobe": {
            "top": "wet light-colored summer top (tasteful coverage), realistic fabric cling and wrinkles",
            "skirt": "wet light skirt with subtle ruffles, natural water weight and folds",
            "no_underwear_focus": true,
            "modesty": "no nudity, no explicit lingerie, no see-through exposure beyond realistic wet fabric"
          },
          "hair": "long dark hair fully wet, heavy strands, realistic clumping and drip",
          "pose": "deep dip/lean-back supported in his arms, one arm around his neck, chest lifted, head tilted back laughing",
          "expression": "joyful laugh, romantic energy",
          "hands_nails_constraints": {
            "no_rings": "no_en"
          }
        }
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
      "task_type": "photoreal_cinematic_rain_romance",
      "version": "v1.0_RAIN_DANCE_DIP_ROAD_JUNGLE_FILM_LOOK_NO_TEXT",
      "priority": "highest"
    },
    "references": {
      "reference_image_1": {
        "source": "UPLOAD_REFERENCE_IMAGE (REQUIRED)",
        "purpose": "FACE_IDENTITY_LOCK_FEMALE",
        "strict_lock": true,
        "face_similarity_priority": "MAX",
        "no_identity_blending": true,
        "no_beautify": true,
        "no_age_shift": true,
        "preserve_skin_texture": true,
        "preserve_facial_proportions": true
      },
      "reference_image_2": {
        "source": "UPLOAD_REFERENCE_IMAGE (OPTIONAL)",
        "purpose": "POSE_COMPOSITION_ANCHOR_RAIN_DIP",
        "strict_lock": true,
        "preserve_pose": true,
        "preserve_composition": true
      }
    },
    "output_settings": {
      "aspect_ratio": "9:16",
      "orientation": "portrait",
      "resolution_target": "ultra_high_res",
      "render_style": "cinematic_photoreal_film_still",
      "sharpness": "crisp_subject_soft_background",
      "film_grain": "subtle_35mm",
      "color_grade": "moody_warm_rain_cinematic",
      "dynamic_range": "natural_not_hdr",
      "skin_rendering": "real_texture_wet_skin_natural"
    },
    "creative_prompt": {
      "scene_summary": "在热带雨林公路上，大雨滂沱中的超写实电影浪漫场景。一对情侣正在舞池中深情一吻：男子支撑着女子，女子以戏剧性的后仰姿势，两人相视而笑。一切都被雨水浸透——湿漉漉的头发，湿透的衣物自然地贴在身上，雨丝清晰可见，路面因水坑而泛着光泽。氛围充满激情、俏皮，宛如电影画面。",
      "environment": {
        "location": "热带森林 / 热带雨林路边",
        "background": "茂密的绿色植物，柔和的散景，朦胧的雨雾",
        "ground": "湿漉漉的柏油路面，有反光的水坑，隐约可见的黄色路标线",
        "weather": "大雨，雨丝和水花清晰可见",
        "lighting": "阴天柔和的主光 + 微妙的暖色反弹光，电影级对比度"
      },
      "subjects": {
        "female": {
          "identity": "MATCH_REFERENCE_FACE_EXACTLY",
          "wardrobe": {
            "top": "湿透的浅色夏装上衣（得体遮盖），逼真的织物贴合和褶皱",
            "skirt": "湿透的浅色裙子，带有细微的褶边，自然的湿重感和垂坠感",
            "no_underwear_focus": true,
            "modesty": "无裸露，无暴露内衣，除逼真的湿透织物外无透视暴露"
          },
          "hair": "湿透的长黑发，发丝沉重，逼真的结块和滴水",
          "pose": "在他怀里深情一吻/后仰，一只手臂环绕他的脖子，胸部上扬，头向后仰，开心地笑着",
          "expression": "开心的笑声，浪漫的能量",
          "hands_nails_constraints": {
            "no_rings": "no_en"
          }
        }
      }
    }
  }
}
```

## 来源备注
- 源站作者：Özge Döner
- 源站 UUID：WFmjkfZ1ZQ
- 源站分类：05_人物肖像与写实摄影

---
id: "portrait-true-preserve-face-001"
title: "酒廊奢华写真：深红礼服配鸡尾酒的高定时尚人像"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["时尚", "酒吧", "人像", "酒红", "墨绿", "鸡尾酒", "奢华", "复古"]
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
      "task_type": "photoreal_luxury_bar_editorial_flash",
      "version": "v1.0_BURGUNDY_BAR_COCKTAIL_FLASH_EDITORIAL_NO_TEXT_EN",
      "priority": "highest",
      "language": "en"
    },

    "references": {
      "reference_image_face": {
        "source": "UPLOAD_REFERENCE_IMAGE (OPTIONAL)",
        "purpose": "FACE_IDENTITY_LOCK",
        "strict_lock": true,
        "face_similarity_priority": "MAX",
        "no_identity_blending": true,
        "no_beautify": true,
        "no_age_shift": true,
        "preserve_skin_texture": true,
        "preserve_facial_proportions": true,
        "preserve_moles_freckles_scars": true,
        "preserve_eye_shape": true,
        "preserve_nose_shape": true,
        "preserve_lip_shape": true,
        "preserve_jawline": true
      },
      "reference_image_style": {
        "source": "UPLOAD_REFERENCE_IMAGE (OPTIONAL)",
        "purpose": "STYLE_COMPOSITION_LIGHTING_ANCHOR",
        "strict_lock": false,
        "preserve_composition": true,
        "preserve_palette": true,
        "preserve_vibe": true,
        "preserve_lighting": true
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
      "render_style": "high_end_editorial_flash_photo",
      "sharpness": "crisp_but_natural",
      "film_grain": "very_subtle",
      "color_grade": "deep_wine_red_with_emerald_accents",
      "dynamic_range": "natural_not_hdr",
      "skin_rendering": "real_texture_no_retouch"
    },

    "creative_prompt": {
      "scene_summary": "A photoreal luxury bar editorial portrait shot with direct flash. The same adult woman (face must match reference exactly if provided) sits in a plush chair beside a dark marble table. Background features an emerald-green paneled door/wall and a vintage patterned curtain. She holds a cocktail glass ({"cocktail type" "espresso martini style"}) near her face. Mood: glossy high-fashion, candid-but-posed, upscale nightlife. No readable text anywhere.",

      "wardrobe_and_beauty": {
        "outfit": "deep {"dress color" "burgundy/wine"} satin draped dress with high neckline and side ruching; a long trailing hem detail; fitted silhouette",
        "legs": "burgundy lace-patterned tights (floral lace + fishnet hybrid), elegant and consistent color tone",
        "makeup": "defined brows, soft smoky eye, luminous skin highlight, deep red lipstick (crimson/wine—no pink/orange)",
        "jewelry": "minimal gold earrings, a couple of thin rings, slim bracelet"
      },

      "pose_and_expression": {
        "pose": "seated with legs crossed, torso angled slightly toward camera; one arm resting on chair arm, the other holding the cocktail glass.",
        "expression": "Slightly bored, sultry, high-fashion gaze."
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
      "task_type": "photoreal_luxury_bar_editorial_flash",
      "version": "v1.0_BURGUNDY_BAR_COCKTAIL_FLASH_EDITORIAL_NO_TEXT_EN",
      "priority": "highest",
      "language": "en"
    },
    "references": {
      "reference_image_face": {
        "source": "UPLOAD_REFERENCE_IMAGE (OPTIONAL)",
        "purpose": "FACE_IDENTITY_LOCK",
        "strict_lock": true,
        "face_similarity_priority": "MAX",
        "no_identity_blending": true,
        "no_beautify": true,
        "no_age_shift": true,
        "preserve_skin_texture": true,
        "preserve_facial_proportions": true,
        "preserve_moles_freckles_scars": true,
        "preserve_eye_shape": true,
        "preserve_nose_shape": true,
        "preserve_lip_shape": true,
        "preserve_jawline": true
      },
      "reference_image_style": {
        "source": "UPLOAD_REFERENCE_IMAGE (OPTIONAL)",
        "purpose": "STYLE_COMPOSITION_LIGHTING_ANCHOR",
        "strict_lock": false,
        "preserve_composition": true,
        "preserve_palette": true,
        "preserve_vibe": true,
        "preserve_lighting": true
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
      "render_style": "high_end_editorial_flash_photo",
      "sharpness": "crisp_but_natural",
      "film_grain": "very_subtle",
      "color_grade": "deep_wine_red_with_emerald_accents",
      "dynamic_range": "natural_not_hdr",
      "skin_rendering": "real_texture_no_retouch"
    },
    "creative_prompt": {
      "scene_summary": "一张采用直射闪光灯拍摄的逼真奢华酒吧时尚肖像照。同一位成年女性（如果提供参考图，面部必须完全匹配）坐在一张毛绒椅子上，旁边是一张深色大理石桌子。背景是祖母绿色的镶板门/墙和复古图案窗帘。她手持一杯鸡尾酒（{\"cocktail type\" \"espresso martini style\"}）靠近脸部。氛围：光泽感十足的高级时装，自然却又摆拍，高端夜生活。画面中无任何可读文本。",
      "wardrobe_and_beauty": {
        "outfit": "深色 {\"dress color\" \"burgundy/wine\"} 缎面垂坠连衣裙，高领口，侧面有褶皱；长拖尾下摆细节；修身廓形",
        "legs": "勃艮第色蕾丝图案连裤袜（花卉蕾丝 + 渔网袜混合），优雅且色调一致",
        "makeup": "清晰的眉毛，柔和的烟熏眼妆，明亮的高光肌肤，深红色口红（绯红/酒红色——无粉色/橙色）",
        "jewelry": "极简金色耳环，几枚细戒指，纤细手链"
      },
      "pose_and_expression": {
        "pose": "坐姿，双腿交叉，躯干略微朝向镜头；一只手臂搭在椅子扶手上，另一只手拿着鸡尾酒杯。",
        "expression": "略显无聊、性感、高级时装的凝视。"
      }
    }
  }
}
```

## 来源备注
- 源站作者：Özge Döner
- 源站 UUID：KL5zn986VB
- 源站分类：05_人物肖像与写实摄影

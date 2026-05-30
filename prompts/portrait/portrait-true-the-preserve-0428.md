---
id: portrait-true-the-preserve-0428
title: "博斯普鲁斯海峡游艇黄昏桥下情侣浪漫合影"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["情侣", "浪漫", "黄昏", "游艇", "大桥", "海峡", "蓝调", "欢笑"]
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
      "task_type": "photoreal_bosphorus_yacht_romance_dusk_under_bridge",
      "version": "v1.0_BOSPHORUS_YACHT_HUG_LAUGH_UNDER_BRIDGE_FACELOCK_EN",
      "priority": "highest",
      "language": "en"
    },

    "references": {
      "reference_image_style": {
        "source": "UPLOAD_REFERENCE_IMAGE (REQUIRED)",
        "purpose": "POSE_COMPOSITION_LIGHTING_ANCHOR",
        "strict_lock": true,
        "preserve_pose": true,
        "preserve_composition": true,
        "preserve_vibe": true,
        "preserve_background": true
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
        "preserve_facial_proportions": true,
        "preserve_moles_freckles_scars": true
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
      "render_style": "cinematic_photoreal_film_still",
      "sharpness": "crisp_but_natural",
      "film_grain": "subtle_35mm",
      "color_grade": "blue_hour_cool_sky_warm_city_reflections",
      "dynamic_range": "natural_not_hdr",
      "skin_rendering": "real_texture_no_retouch"
    },

    "creative_prompt": {
      "scene_summary": "Recreate a candid, photoreal romantic moment on the bow of a small yacht on the {"location" "Bosphorus"} at blue hour, directly under a large suspension bridge. The bridge deck dominates the top of the frame with small lights along the edge and a red-lit pylon on the right. In the mid/background: dark green hills, waterfront restaurants and houses with warm yellow lights reflecting on the rippling water.\n\nForeground: the couple stands on the yacht’s bow near stainless railings. The man (in a fitted black t-shirt and black pants) hugs the woman around her waist; his head is turned toward her neck/shoulder in an affectionate cuddle. The woman (in a short black strapless dress) laughs openly with head tilted back slightly, long hair flowing, arms around his shoulders. The pose must feel spontan"

## 中文译文（源站提供）
```json
{
  "generation_request": {
    "meta_data": {
      "tool": "NanoBanana Pro",
      "task_type": "photoreal_bosphorus_yacht_romance_dusk_under_bridge",
      "version": "v1.0_BOSPHORUS_YACHT_HUG_LAUGH_UNDER_BRIDGE_FACELOCK_EN",
      "priority": "highest",
      "language": "en"
    },

    "references": {
      "reference_image_style": {
        "source": "UPLOAD_REFERENCE_IMAGE (REQUIRED)",
        "purpose": "POSE_COMPOSITION_LIGHTING_ANCHOR",
        "strict_lock": true,
        "preserve_pose": true,
        "preserve_composition": true,
        "preserve_vibe": true,
        "preserve_background": true
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
        "preserve_facial_proportions": true,
        "preserve_moles_freckles_scars": true
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
      "render_style": "cinematic_photoreal_film_still",
      "sharpness": "crisp_but_natural",
      "film_grain": "subtle_35mm",
      "color_grade": "blue_hour_cool_sky_warm_city_reflections",
      "dynamic_range": "natural_not_hdr",
      "skin_rendering": "real_texture_no_retouch"
    },

    "creative_prompt": {
      "scene_summary": "在蓝色时分，博斯普鲁斯海峡（{\"location\" \"Bosphorus\"}）一艘小型游艇的船头，一座大型悬索桥正下方，重现一个真诚、逼真的浪漫瞬间。桥面占据画面顶部，边缘有小灯，右侧有一个红色灯光的桥塔。中景/背景：墨绿色的山丘、海滨餐厅和房屋，暖黄色的灯光倒映在波光粼粼的水面上。\n\n前景：这对情侣站在游艇船头的不锈钢栏杆旁。男子（身穿合身黑色 T 恤和黑色长裤）搂着女子的腰；他的头转向她的颈部/肩部，亲昵地依偎着。女子（身穿黑色短款无肩带连衣裙）仰头开怀大笑，长发飘逸，双臂环绕着男子的肩膀。姿势必须感觉自然"
    }
  }
}
```

## 来源备注
- 源站作者：Özge Döner
- 源站 UUID：wtnqpIItp4
- 源站分类：05_人物肖像与写实摄影

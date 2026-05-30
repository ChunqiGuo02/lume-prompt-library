---
id: portrait-true-preserve-reference-1631
title: "热带雨林中女子与三只蓝金刚鹦鹉的写实时尚肖像"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["写实", "摄影", "鹦鹉", "蓝色", "森林", "热带", "女人", "微笑"]
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
      "task_type": "photoreal_exotic_wildlife_fashion_editorial",
      "version": "v1.0_BLUE_MACAWS_PORTRAIT_NO_TEXT_EN",
      "priority": "highest",
      "language": "en"
    },

    "references": {
      "reference_image_style": {
        "source": "UPLOAD_REFERENCE_IMAGE (REQUIRED)",
        "purpose": "STYLE_COMPOSITION_LIGHTING_ANCHOR",
        "strict_lock": true,
        "preserve_pose": true,
        "preserve_composition": true,
        "preserve_palette": true,
        "preserve_lighting": true,
        "preserve_vibe": true
      },
      "reference_image_face": {
        "source": "UPLOAD_REFERENCE_IMAGE (REQUIRED)",
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
      }
    },

    "global_constraints": {
      "rating": "PG-13",
      "no_nudity": true,
      "no_explicit_sexual_content": true,
      "no_logos": true,
      "no_watermark": true,
      "no_readable_text": true,
      "no_minors": true
    },

    "output_settings": {
      "aspect_ratio": "4:5",
      "orientation": "portrait",
      "resolution_target": "ultra_high_res",
      "render_style": "cinematic_photoreal_editorial",
      "sharpness": "crisp_but_natural",
      "film_grain": "subtle_35mm",
      "color_grade": "natural_tropical_green_blue_balance",
      "dynamic_range": "natural_not_hdr",
      "skin_rendering": "real_texture_no_retouch"
    },

    "creative_prompt": {
      "scene_summary": "Create a photoreal exotic wildlife fashion editorial portrait.\n\nLocation: lush tropical forest with dense green foliage, tree trunks, and soft filtered daylight. Background should feel natural, humid, and serene, with realistic depth and organic textures.\n\nSubject: one adult woman, waist-up portrait, facing camera with a warm, relaxed smile. Long straight dark hair worn loose. Natural makeup, realistic skin texture, no retouching.\n\nWardrobe: sleeveless flowing blue dress with subtle texture or pattern, harmonizing with the birds’ plumage. Elegant yet natural, suitable for a wildlife setting.\n\nAnimals: three blue macaws (hyacinth macaws). One perched gently on the woman’s shoulder, one resting against her arm/chest, and one perched above near her head or shoulder. Birds must have anatomically correct beaks, eyes, claws, and feather structure. Feathers should show rich cobalt-blue tones with subtle light variation.\n\nInteraction: calm, affectionate, and respectful human–animal interaction. The woman support

## 中文译文（源站提供）
```json
{
  "generation_request": {
    "meta_data": {
      "tool": "NanoBanana Pro",
      "task_type": "photoreal_exotic_wildlife_fashion_editorial",
      "version": "v1.0_BLUE_MACAWS_PORTRAIT_NO_TEXT_EN",
      "priority": "highest",
      "language": "zh-Hans"
    },

    "references": {
      "reference_image_style": {
        "source": "UPLOAD_REFERENCE_IMAGE (REQUIRED)",
        "purpose": "STYLE_COMPOSITION_LIGHTING_ANCHOR",
        "strict_lock": true,
        "preserve_pose": true,
        "preserve_composition": true,
        "preserve_palette": true,
        "preserve_lighting": true,
        "preserve_vibe": true
      },
      "reference_image_face": {
        "source": "UPLOAD_REFERENCE_IMAGE (REQUIRED)",
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
      }
    },

    "global_constraints": {
      "rating": "PG-13",
      "no_nudity": true,
      "no_explicit_sexual_content": true,
      "no_logos": true,
      "no_watermark": true,
      "no_readable_text": true,
      "no_minors": true
    },

    "output_settings": {
      "aspect_ratio": "4:5",
      "orientation": "portrait",
      "resolution_target": "ultra_high_res",
      "render_style": "cinematic_photoreal_editorial",
      "sharpness": "crisp_but_natural",
      "film_grain": "subtle_35mm",
      "color_grade": "natural_tropical_green_blue_balance",
      "dynamic_range": "natural_not_hdr",
      "skin_rendering": "real_texture_no_retouch"
    },

    "creative_prompt": {
      "scene_summary": "创作一张超写实异域野生动物时尚编辑肖像照。\n\n地点：郁郁葱葱的热带森林，茂密的绿色植物、树干和柔和的过滤日光。背景应呈现自然、湿润、宁静的感觉，具有逼真的景深和有机纹理。\n\n主体：一名成年女性，半身肖像，面朝镜头，带着温暖、放松的微笑。长直黑发随意散开。自然妆容，逼真的皮肤纹理，无修饰。\n\n服装：无袖飘逸的 {\"dress color\" \"blue\"} 连衣裙，带有微妙的纹理或图案，与鸟类的羽毛和谐搭配。优雅而自然，适合野生动物环境。\n\n动物：三只蓝色金刚鹦鹉（紫蓝金刚鹦鹉）。一只轻轻栖息在女性的肩膀上，一只依偎在她的手臂/胸部，另一只栖息在她头部或肩膀附近的上方。鸟类必须具有解剖学上正确的喙、眼睛、爪子和羽毛结构。羽毛应呈现浓郁的钴蓝色调，带有微妙的光线变化。\n\n互动：平静、亲切、尊重的动物与人类互动。女性支持"
    }
  }
}
```

## 来源备注
- 源站作者：Özge Döner
- 源站 UUID：jP962NeFrp
- 源站分类：05_人物肖像与写实摄影

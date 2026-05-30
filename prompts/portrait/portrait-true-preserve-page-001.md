---
id: "portrait-true-preserve-page-001"
title: "星空主题时尚杂志人像合成设计"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["天文", "杂志", "复古", "藏蓝", "金色", "星星", "手绘", "肖像"]
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
      "task_type": "photoreal_editorial_cutout_magazine_layout",
      "version": "v1.3_COSMOS_PAGE_NAVY_GOLD_STARS_EDITORIAL_FACELOCK_FULL_EN",
      "priority": "highest",
      "language": "en"
    },

    "references": {
      "reference_image_face": {
        "source": "UPLOAD_REFERENCE_IMAGE (REQUIRED)",
        "purpose": "FACE_IDENTITY_LOCK",
        "strict_lock": true,
        "face_similarity_priority": "MAX",
        "identity_confidence": "ABSOLUTE",
        "no_identity_blending": true,
        "no_face_morphing": true,
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
        "purpose": "LAYOUT_POSE_STYLE_ANCHOR",
        "strict_lock": false,
        "preserve_composition": true,
        "preserve_vibe": true
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
      "aspect_ratio": "9:16",
      "orientation": "portrait",
      "resolution_target": "ultra_high_res",
      "render_style": "high_end_editorial_magazine_cutout",
      "sharpness": "crisp_but_natural",
      "film_grain": "subtle_35mm",
      "color_grade": "soft_neutral_with_navy_and_gold_accents",
      "dynamic_range": "natural_not_hdr",
      "skin_rendering": "real_texture_no_retouch"
    },

    "creative_prompt": {
      "scene_summary": "Create a high-fashion editorial magazine page inspired by classic astronomy/science book design (Cosmos-like, but original). The background is an off-white paper texture resembling a refined astronomy book page, filled with two tall, justified columns of NON-READABLE serif pseudo-text and a large muted red drop-cap letter at the top-left. The typography must look academically authentic in spacing, justification, and hyphenation patterns, but contain no real words and no readable sentences.\n\nSeamlessly integrated into the page layout are small, precise, hand-drawn scientific illustrations: a telescope sketch, Saturn with rings, spiral galaxies, star clusters, constellation dot-and-line diagrams, and a few tiny starburst symbols. These are thin-line, ink-style drawings embedded within margins and between/around text columns (not floating stickers, not decorative overlays). The page should feel like a real astronomy reading spread with tasteful scientific marginalia.\n\nIn front of the page, place a cutout-style photoreal studio portrait of"
    }
  }
}

## 中文译文（源站提供）
```json
{
  "generation_request": {
    "meta_data": {
      "tool": "NanoBanana Pro",
      "task_type": "photoreal_editorial_cutout_magazine_layout",
      "version": "v1.3_COSMOS_PAGE_NAVY_GOLD_STARS_EDITORIAL_FACELOCK_FULL_EN",
      "priority": "highest",
      "language": "en"
    },

    "references": {
      "reference_image_face": {
        "source": "UPLOAD_REFERENCE_IMAGE (REQUIRED)",
        "purpose": "FACE_IDENTITY_LOCK",
        "strict_lock": true,
        "face_similarity_priority": "MAX",
        "identity_confidence": "ABSOLUTE",
        "no_identity_blending": true,
        "no_face_morphing": true,
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
        "purpose": "LAYOUT_POSE_STYLE_ANCHOR",
        "strict_lock": false,
        "preserve_composition": true,
        "preserve_vibe": true
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
      "aspect_ratio": "9:16",
      "orientation": "portrait",
      "resolution_target": "ultra_high_res",
      "render_style": "high_end_editorial_magazine_cutout",
      "sharpness": "crisp_but_natural",
      "film_grain": "subtle_35mm",
      "color_grade": "soft_neutral_with_navy_and_gold_accents",
      "dynamic_range": "natural_not_hdr",
      "skin_rendering": "real_texture_no_retouch"
    },

    "creative_prompt": {
      "scene_summary": "创作一个受经典天文学/科学书籍设计（类似《宇宙》但原创）启发的高级时尚杂志页面。背景是米白色纸张纹理，类似于精致的天文学书籍页面，其中包含两列高大、两端对齐的不可读衬线伪文本，左上角有一个大型柔和的红色首字下沉。排版在间距、对齐和连字符模式上必须看起来具有学术真实性，但不能包含任何真实单词和可读句子。\n\n页面布局中无缝融入了小巧、精确的手绘科学插图：望远镜草图、带光环的土星、螺旋星系、星团、星座点线图以及一些微小的星爆符号。这些是细线、墨水风格的图画，嵌入在页边空白处以及文本列之间/周围（不是浮动的贴纸，也不是装饰性叠加）。页面应给人一种真实的天文学阅读版面的感觉，带有雅致的科学旁注。\n\n在页面前方，放置一张剪纸风格的逼真影棚肖像，肖像人物为"
    }
  }
}
```

## 来源备注
- 源站作者：Özge Döner
- 源站 UUID：QNTXco3Uat
- 源站分类：05_人物肖像与写实摄影

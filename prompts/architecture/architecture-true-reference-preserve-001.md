---
id: "architecture-true-reference-preserve-001"
title: "阳台相望赠花，浪漫电影感写真"
category: architecture
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["浪漫", "情侣", "阳台", "玫瑰", "蓝天", "建筑", "阳光", "黄色"]
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
      "task_type": "photoreal_cinematic_romantic_editorial",
      "version": "v1.0_BALCONY_TO_BALCONY_FLOWERS_REACH_BLUE_SKY",
      "priority": "highest"
    },

    "references": {
      "reference_image_1": {
        "source": "UPLOAD_REFERENCE_IMAGE",
        "purpose": "COMPOSITION_AND_STORY_REFERENCE",
        "strict_lock": true,
        "match_reference_priority": "MAX",
        "preserve_symmetry_and_negative_space": true,
        "preserve_balcony_architecture": true,
        "preserve_subject_positions": true,
        "preserve_action_gesture": true,
        "no_style_drift": true
      },
      "reference_image_2": {
        "source": "UPLOAD_FACE_REFERENCE (OPTIONAL)",
        "purpose": "FACE_IDENTITY_LOCK_FEMALE",
        "strict_lock": true,
        "face_similarity_priority": "MAX",
        "no_identity_blending": true,
        "no_beautify": true,
        "no_age_shift": true,
        "preserve_skin_texture": true,
        "preserve_facial_proportions": true
      },
      "reference_image_3": {
        "source": "UPLOAD_FACE_REFERENCE (OPTIONAL)",
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

    "creative_direction": {
      "concept": "A cinematic romantic editorial shot: two people on opposite balconies reach across an open sky gap, one offering a bouquet of soft pink flowers. Minimalist, poetic, and visually striking with strong symmetry and expansive negative space.",
      "mood": "tender, playful, sunlit, modern romance",
      "style_keywords": "minimal composition, architectural symmetry, airy blue sky, film still"
    },

    "scene": {
      "location": "Mediterranean-style apartment balconies facing each other",
      "architecture": {
        "balconies": "two symmetrical balconies left and right, pale warm-toned building facades, classic railings",
        "details": "subtle plants and shadows, clean lines"
      },
      "time": "late afternoon / golden hour",
      "weather": "clear sky, no clouds",
      "composition": {
        "framing": "square composition with huge negative space sky",
        "symmetry": "strong left-right symmetry",
        "subject_positions": "male on left balcony, female on right balcony, arms reaching toward center"
      }
    },

    "subjects": {
      "male": {
        "wardrobe": "{"male shirt color" "light blue"} button-up shirt, casual, sleeves slightly rolled",
        "pose": "leaning over balcony railing, arm extended offering bouquet",
        "prop": "bouquet of soft pink roses/peonies with green stems"
      },
      "female": {
        "wardrobe": "{"female dress color" "yellow"} satin or chiffon dress, elegant summer look",
        "pose": "leanin"
      }
    }
  }

## 中文译文（源站提供）
```json
{
  "generation_request": {
    "meta_data": {
      "tool": "NanoBanana Pro",
      "task_type": "photoreal_cinematic_romantic_editorial",
      "version": "v1.0_BALCONY_TO_BALCONY_FLOWERS_REACH_BLUE_SKY",
      "priority": "highest"
    },
    "references": {
      "reference_image_1": {
        "source": "UPLOAD_REFERENCE_IMAGE",
        "purpose": "COMPOSITION_AND_STORY_REFERENCE",
        "strict_lock": true,
        "match_reference_priority": "MAX",
        "preserve_symmetry_and_negative_space": true,
        "preserve_balcony_architecture": true,
        "preserve_subject_positions": true,
        "preserve_action_gesture": true,
        "no_style_drift": true
      },
      "reference_image_2": {
        "source": "UPLOAD_FACE_REFERENCE (OPTIONAL)",
        "purpose": "FACE_IDENTITY_LOCK_FEMALE",
        "strict_lock": true,
        "face_similarity_priority": "MAX",
        "no_identity_blending": true,
        "no_beautify": true,
        "no_age_shift": true,
        "preserve_skin_texture": true,
        "preserve_facial_proportions": true
      },
      "reference_image_3": {
        "source": "UPLOAD_FACE_REFERENCE (OPTIONAL)",
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
    "creative_direction": {
      "concept": "一幅电影般的浪漫编辑摄影作品：两个人站在相对的阳台上，隔着一片开阔的天空伸出手，其中一人递上一束淡粉色的鲜花。极简主义、诗意且视觉冲击力强，具有强烈的对称性和广阔的留白空间。",
      "mood": "温柔、俏皮、阳光普照、现代浪漫",
      "style_keywords": "极简构图、建筑对称、湛蓝天空、电影剧照"
    },
    "scene": {
      "location": "地中海风格的公寓阳台，彼此相对",
      "architecture": {
        "balconies": "左右两个对称的阳台，浅暖色调的建筑立面，经典栏杆",
        "details": "细微的植物和阴影，简洁的线条"
      },
      "time": "傍晚 / 黄金时段",
      "weather": "晴空万里，无云",
      "composition": {
        "framing": "方形构图，天空留有大量负空间",
        "symmetry": "强烈的左右对称",
        "subject_positions": "男性在左侧阳台，女性在右侧阳台，手臂伸向中心"
      }
    },
    "subjects": {
      "male": {
        "wardrobe": "{\"male shirt color\" \"light blue\"} 纽扣衬衫，休闲风格，袖子略微卷起",
        "pose": "靠在阳台栏杆上，手臂伸出递送花束",
        "prop": "一束淡粉色玫瑰/牡丹，带绿色花茎"
      },
      "female": {
        "wardrobe": "{\"female dress color\" \"yellow\"} 缎面或雪纺连衣裙，优雅的夏日造型",
        "pose": "靠在"
      }
    }
  }
}
```

## 来源备注
- 源站作者：Özge Döner
- 源站 UUID：8pV3i4aQaL
- 源站分类：05_人物肖像与写实摄影

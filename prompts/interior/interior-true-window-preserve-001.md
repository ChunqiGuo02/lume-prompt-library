---
id: "interior-true-window-preserve-001"
title: "黄墙窗边白裙少女时尚写真生成提示"
category: interior
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["时尚", "简约", "清新", "女生", "窗户", "耳机", "鲜花", "白色"]
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
      "task_type": "photoreal_fashion_editorial_window_pose",
      "version": "v1.0_YELLOW_HOUSE_WINDOW_GIRL_WHITE_SATIN",
      "priority": "highest"
    },

    "references": {
      "reference_image_1": {
        "source": "UPLOAD_REFERENCE_IMAGE",
        "purpose": "POSE_AND_COMPOSITION_LOCK",
        "strict_lock": true,
        "match_reference_priority": "MAX",
        "preserve_window_frame": true,
        "preserve_leg_position": true,
        "preserve_body_angle": true,
        "preserve_camera_distance": true,
        "no_style_drift": true
      },
      "reference_image_2": {
        "source": "UPLOAD_FACE_REFERENCE (OPTIONAL)",
        "purpose": "FACE_IDENTITY_LOCK",
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
      "concept": "A playful, editorial fashion moment: a young woman sitting casually inside an open window of a yellow house, one leg lifted outward, captured as a clean, modern lifestyle photograph.",
      "mood": "fresh, carefree, stylish, youthful",
      "style_keywords": "European street style, playful femininity, minimal editorial"
    },

    "scene": {
      "location": "residential exterior",
      "architecture": {
        "house_color": "{"house color" "soft warm yellow"} facade",
        "window": "simple rectangular window with white interior walls",
        "background": "clean, uncluttered, sunlit wall"
      },
      "time": "midday",
      "lighting": "direct natural sunlight, crisp shadows"
    },

    "subject": {
      "gender": "female",
      "pose": {
        "position": "sitting inside the window frame",
        "legs": "one leg extended outward and raised, the other relaxed",
        "arms": "one arm hanging freely outside the window"
      },
      "expression": "neutral to calm, relaxed confidence",
      "gaze": "looking forward or slightly to the side"
    },

    "wardrobe": {
      "dress": {
        "type": "white satin slip dress",
        "style": "thin straps, minimal, fluid fabric",
        "length": "midi",
        "finish": "soft satin sheen"
      },
      "headphones": {
        "type": "over-ear",
        "color": "pure white",
        "style": "clean, modern, minimal"
      },
      "shoes": {
        "type": "flat or low-heel shoes",
        "color": "white",
        "style": "simple, elegant"
      }
    },

    "accessories": {
      "flowers": {
        "type": "fresh {"flower color" "yellow"} flowers",
        "placement": "held loosely in one hand",
        "look": "natural, slightly wild bouquet"
      }
    },

    "photography": {
      "camera_style": "fashion editorial street photography",
      "lens": "35mm",
      "framing": "centered subject, full"
    }
  }
}

## 中文译文（源站提供）
```json
{
  "generation_request": {
    "meta_data": {
      "tool": "NanoBanana Pro",
      "task_type": "photoreal_fashion_editorial_window_pose",
      "version": "v1.0_YELLOW_HOUSE_WINDOW_GIRL_WHITE_SATIN",
      "priority": "highest"
    },
    "references": {
      "reference_image_1": {
        "source": "UPLOAD_REFERENCE_IMAGE",
        "purpose": "POSE_AND_COMPOSITION_LOCK",
        "strict_lock": true,
        "match_reference_priority": "MAX",
        "preserve_window_frame": true,
        "preserve_leg_position": true,
        "preserve_body_angle": true,
        "preserve_camera_distance": true,
        "no_style_drift": true
      },
      "reference_image_2": {
        "source": "UPLOAD_FACE_REFERENCE (OPTIONAL)",
        "purpose": "FACE_IDENTITY_LOCK",
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
      "concept": "一个俏皮的时尚大片瞬间：一位年轻女性随意地坐在一栋黄色房屋的开放窗户内，一条腿向外抬起，被捕捉为一张干净、现代的生活方式照片。",
      "mood": "清新、无忧无虑、时尚、青春",
      "style_keywords": "欧洲街头风格、俏皮的女性气质、极简主义时尚大片"
    },
    "scene": {
      "location": "住宅外部",
      "architecture": {
        "house_color": "{\"house color\" \"soft warm yellow\"} 外墙",
        "window": "简单的矩形窗户，配有白色内墙",
        "background": "干净、整洁、阳光充足的墙壁"
      },
      "time": "中午",
      "lighting": "直射自然阳光，清晰的阴影"
    },
    "subject": {
      "gender": "女性",
      "pose": {
        "position": "坐在窗框内",
        "legs": "一条腿向外伸展并抬起，另一条腿放松",
        "arms": "一只手臂自由地垂在窗外"
      },
      "expression": "中性到平静，放松的自信",
      "gaze": "向前看或稍微侧视"
    },
    "wardrobe": {
      "dress": {
        "type": "白色缎面吊带裙",
        "style": "细肩带、极简、飘逸面料",
        "length": "中长款",
        "finish": "柔和的缎面光泽"
      },
      "headphones": {
        "type": "头戴式",
        "color": "纯白色",
        "style": "干净、现代、极简"
      },
      "shoes": {
        "type": "平底或低跟鞋",
        "color": "白色",
        "style": "简约、优雅"
      }
    },
    "accessories": {
      "flowers": {
        "type": "新鲜的 {\"flower color\" \"yellow\"} 鲜花",
        "placement": "松散地握在一只手中",
        "look": "自然、略带野性的花束"
      }
    },
    "photography": {
      "camera_style": "时尚大片街头摄影",
      "lens": "35mm",
      "framing": "主体居中，全身"
    }
  }
}
```

## 来源备注
- 源站作者：Özge Döner
- 源站 UUID：fsnz0c3KX3
- 源站分类：05_人物肖像与写实摄影

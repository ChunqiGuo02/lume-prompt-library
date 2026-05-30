---
id: "landscape-face-coffee-reference-001"
title: "咖啡粉塑名人肖像艺术"
category: landscape
subcategory: "04_创意脑洞特效合成"
aesthetic: null
tags: ["咖啡粉", "名人", "肖像", "浮雕", "勺子", "棕色", "暖色调", "特写"]
recommended_models: 
  - banana-pro
recommended_params:
  aspect_ratio: null
  quality: null
  style_strength: null
sample_outputs: []
quality_tier: B
author: "ChunqiGuo02"
source: "Leader Prompt Gallery (https://www.leaderai.top/mid-api/lab/image_prompt/index.html)"
language: en
created_at: 2026-05-30
version: "1.0.0"
related_to: []
---

# 正文 prompt
{
  "input": {
    "referenced_image_ids": ["<USER_UPLOADED_PHOTO_ID>"]
  },
  "frame": {
    "aspect_ratio": "3:4",
    "shot_size": "Close-Up (CU)",
    "orientation": "Portrait",
    "composition_guide": "Center Framed"
  },
  "subject": {
    "subject_type": "Human Face Impression (from reference)",
    "identity_summary": "Match the uploaded person’s face exactly, but formed as a pressed bas-relief impression in finely ground coffee (not a drawing/print).",
    "visual_signature": {
      "facial_signature": {
        "face_shape": "Match reference exactly",
        "eye_nose_lips_jaw": "Match reference exactly",
        "unique_features": "Do not change identity or proportions"
      },
      "material_signature": {
        "material_type": "Finely ground coffee powder",
        "texture_detail": "Ultra-detailed micro-granules, clumps, scattered dust, realistic compression"
      }
    },
    "inventory": {
      "objects_present": [
        "Coffee grounds mound with face impression centered",
        "Stainless-steel teaspoon on the right filled with coffee"
      ],
      "objects_absent": ["No extra props", "No text/logos"]
    }
  },
  "environment": {
    "setting_type": "Indoor Studio Tabletop",
    "background_surface": "Warm neutral beige surface, minimal and clean"
  },
  "lighting": {
    "primary_source": "Softbox upper-left",
    "shadow_quality": "Soft realistic shadows",
    "color_temperature": "Neutral-warm daylight"
  },
  "camera": {
    "angle": "Top-Down / Near Top-Down",
    "focal_length_mm": 50,
    "aperture": "f/5.6",
    "focus_behavior": "Sharp on face and spoon, slight falloff at edges"
  },
  "post_processing": {
    "art_medium": "Photography",
    "style_modifiers": "Hyper-realistic, tabletop product photo, 8K detail look, natural color/contrast"
  },
  "negative": {
    "artifact_suppression": "blur, lowres, CGI/3D look, distorted face, changed identity, extra features, floating spoon, unrealistic reflections",
    "content_excludes": "text, watermark, logo, cups/mugs/plates, hands/people, illustration/cartoon"
  }
}

## 中文译文（源站提供）
```json
{
  "input": {
    "referenced_image_ids": ["<USER_UPLOADED_PHOTO_ID>"]
  },
  "frame": {
    "aspect_ratio": "3:4",
    "shot_size": "特写 (CU)",
    "orientation": "纵向",
    "composition_guide": "居中构图"
  },
  "subject": {
    "subject_type": "人脸印记（参照图片）",
    "identity_summary": "精确匹配上传人物的面部，但以精细研磨咖啡粉压制浮雕的形式呈现（非绘画/印刷）。",
    "visual_signature": {
      "facial_signature": {
        "face_shape": "与参照图片精确匹配",
        "eye_nose_lips_jaw": "与参照图片精确匹配",
        "unique_features": "不改变身份或比例"
      },
      "material_signature": {
        "material_type": "精细研磨咖啡粉",
        "texture_detail": "超精细微粒、结块、散落的粉尘、逼真的压制效果"
      }
    },
    "inventory": {
      "objects_present": [
        "咖啡粉堆，人脸印记居中",
        "右侧有一把装满咖啡粉的不锈钢茶匙"
      ],
      "objects_absent": ["无额外道具", "无文字/标志"]
    }
  },
  "environment": {
    "setting_type": "室内摄影棚桌面",
    "background_surface": "暖中性米色表面，简洁干净"
  },
  "lighting": {
    "primary_source": "柔光箱，左上方",
    "shadow_quality": "柔和逼真的阴影",
    "color_temperature": "中性暖日光"
  },
  "camera": {
    "angle": "俯视 / 近俯视",
    "focal_length_mm": 50,
    "aperture": "f/5.6",
    "focus_behavior": "面部和勺子清晰，边缘略微虚化"
  },
  "post_processing": {
    "art_medium": "摄影",
    "style_modifiers": "超现实主义、桌面产品照、8K 细节效果、自然色彩/对比度"
  },
  "negative": {
    "artifact_suppression": "模糊、低分辨率、CGI/3D 效果、扭曲的面部、身份改变、额外特征、漂浮的勺子、不真实的反射",
    "content_excludes": "文字、水印、标志、杯子/马克杯/盘子、手/人物、插画/卡通"
  }
}
```

## 来源备注
- 源站作者：Saman | AI
- 源站 UUID：Yj3Rcox09x
- 源站分类：04_创意脑洞特效合成

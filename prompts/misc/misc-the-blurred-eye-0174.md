---
id: misc-the-blurred-eye-0174
title: "实验性人像特写构图"
category: misc
subcategory: "11_图像编辑与修复增强"
aesthetic: null
tags: ["女性", "肖像", "短发", "红唇", "海边", "户外", "实验风", "神秘"]
recommended_models: 
  - banana-pro
recommended_params:
  aspect_ratio: "16:9"
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
  "scene_description": "A close-up portrait of a woman in an experimental editorial graphic style. A sharp, clear vertical rectangular frame reveals only her left eye, while the rest of her face and body are heavily blurred. The background shows a softly blurred seaside landscape with natural horizon and sea texture.",

  "subject": {
    "type": "Woman",
    "description": "A young woman with dark hair and bangs."
  },

  "reference_face": {
    "use_reference_image": true,
    "reference_type": "uploaded_image",
    "preserve_identity": "strict",
    "description": "Strictly preserve the original face, facial structure, expression, and identity exactly as seen in the uploaded reference image. Only blur, framing, and background are stylized."
  },

  "appearance": {
    "hair": "Dark brown or black bob with bangs.",
    "makeup": "Vibrant red lipstick and defined eyeliner, visible only inside the focused rectangle.",
    "clothing": "Not visible or fully blurred.",
    "expression": "Neutral, direct gaze."
  },

  "environment": {
    "type": "Outdoor Seaside",
    "details": "Open sea background with a clean horizon line, softly blurred, natural coastal atmosphere."
  },

  "lighting": {
    "style": "Split / Composite",
    "focused_area": "Bright, clean natural light on the eye inside the rectangle.",
    "blurred_area": "Soft, diffused ambient light.",
    "shadows": "Minimal shadows in the focused area, undefined in the blurred regions."
  },

  "camera_shot": {
    "shot_type": "Medium Close-Up",
    "angle": "Eye-level, straight-on",
    "lens": "Sharp area simulates a 50mm or 85mm lens; blurred areas simulate extreme shallow depth of field or digital blur.",
    "focus": "Extreme selective focus. A vertical rectangular frame aligned over the woman's left eye is perfectly sharp, everything outside is heavily blurred."
  },

  "style": {
    "genre": "Experimental Editorial Fashion / Graphic Design",
    "mood": "Minimalist, modern, mysterious, sophisticated",
    "color_palette": {
      "primary": "Natural seaside blues",
      "secondary": "Skin tones",
      "accent": "Vibrant red lips"
    },
    "post_processing": "High clarity and contrast inside the rectangle, strong Gaussian blur outside, subtle grain across the image."
  },

  "graphic_elements": {
    "overlay_1": {
      "type": "Frame",
      "description": "A thin white vertical rectangular frame precisely aligned over the woman's left eye.",
      "position": "Left eye, vertically oriented"
    }
  }
}

## 中文译文（源站提供）
```json
{
  "scene_description": "一张实验性编辑图形风格的女性特写肖像。一个清晰、锐利的垂直矩形框只展现了她的左眼，而她脸部和身体的其余部分则被严重模糊。背景显示的是柔和模糊的海边风景，带有自然的水平线和海洋纹理。",

  "subject": {
    "type": "女性",
    "description": "一位留着深色头发和刘海的年轻女性。"
  },

  "reference_face": {
    "use_reference_image": true,
    "reference_type": "uploaded_image",
    "preserve_identity": "strict",
    "description": "严格保留上传参考图片中原始的脸部、面部结构、表情和身份。只有模糊、构图和背景进行了风格化处理。"
  },

  "appearance": {
    "hair": "深棕色或黑色齐刘海波波头。",
    "makeup": "鲜艳的红色口红和精致的眼线，仅在聚焦的矩形框内可见。",
    "clothing": "不可见或完全模糊。",
    "expression": "中性，直视前方。"
  },

  "environment": {
    "type": "户外海边",
    "details": "开阔的海景背景，带有清晰的水平线，柔和模糊，自然的海岸氛围。"
  },

  "lighting": {
    "style": "分割 / 复合",
    "focused_area": "矩形框内眼睛部分明亮、干净的自然光。",
    "blurred_area": "柔和、漫射的环境光。",
    "shadows": "聚焦区域阴影极少，模糊区域阴影不明确。"
  },

  "camera_shot": {
    "shot_type": "中景特写",
    "angle": "视线水平，正对",
    "lens": "锐利区域模拟 50mm 或 85mm 镜头；模糊区域模拟极浅景深或数字模糊。",
    "focus": "极度选择性对焦。一个垂直矩形框精准地对准女性的左眼，该区域完美锐利，框外一切都严重模糊。"
  },

  "style": {
    "genre": "实验性编辑时尚 / 平面设计",
    "mood": "极简、现代、神秘、精致",
    "color_palette": {
      "primary": "自然海边蓝色调",
      "secondary": "肤色",
      "accent": "鲜艳的红唇"
    },
    "post_processing": "矩形框内高清晰度和对比度，框外强高斯模糊，图像整体有细微颗粒感。"
  },

  "graphic_elements": {
    "overlay_1": {
      "type": "边框",
      "description": "一个细长的白色垂直矩形边框，精确地对准女性的左眼。",
      "position": "左眼，垂直方向"
    }
  }
}
```

## 来源备注
- 源站作者：Kaan
- 源站 UUID：uYG1OHWVlS
- 源站分类：11_图像编辑与修复增强

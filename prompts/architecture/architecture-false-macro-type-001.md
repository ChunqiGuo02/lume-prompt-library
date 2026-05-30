---
id: "architecture-false-macro-type-001"
title: "超写实微距摄影：手工微缩场景极致细节呈现"
category: architecture
subcategory: "09_故事分镜角色设定"
aesthetic: null
tags: ["微缩", "手作", "人偶", "写实", "微距", "摄影", "场景", "精致"]
recommended_models: 
  - banana-pro
recommended_params:
  aspect_ratio: "3:4"
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
  "prompt_type": "ultra_realistic_macro_photography",
  "description": "Ultra-realistic macro photography of a handcrafted scene arranged cohesively on a circular base. The scene exhibits physically accurate textures, realistic material properties, and believable scale adaptation. Surfaces show aged, natural wear with subtle imperfections, tactile realism, and museum-quality craftsmanship. The image has documentary-level realism with no signs of CGI or artificial rendering.",
  "subject": {
    "scene_type": "handcrafted miniature environment",
    "arrangement": "all elements carefully composed on a circular base",
    "scale": "macro-scale with believable proportional relationships",
    "craftsmanship": "museum-quality, artisan-made, highly detailed",
    "surface_details": [
      "aged textures",
      "natural wear and patina",
      "micro scratches",
      "subtle dents",
      "organic imperfections"
    ]
  },
  "materials": {
    "texture_accuracy": "physically accurate",
    "material_behavior": "real-world light response",
    "surface_finish": "matte to semi-matte, natural",
    "tactile_quality": "highly realistic, touchable appearance",
    "imperfection_level": "subtle and believable"
  },
  "photography_style": {
    "genre": "studio product macro photography",
    "lighting": {
      "type": "soft diffused studio lighting",
      "shadow_behavior": "gentle shadow falloff",
      "highlights": "balanced, non-harsh",
      "contrast": "natural, realistic"
    },
    "camera": {
      "focus": "ultra sharp focus on primary elements",
      "depth_of_field": "shallow depth of field emphasizing scale perception",
      "look": "photorealistic RAW photo",
      "detail_level": "extreme micro-detail visibility"
    },
    "background": {
      "type": "neutral gray seamless backdrop",
      "cleanliness": "perfectly clean and distraction-free"
    }
  },
  "realism_constraints": {
    "render_style": "photographic only",
    "cgi": false,
    "3d_render": false,
    "illustration": false,
    "cartoon_style": false,
    "toy_like_plastic_shine": false,
    "exaggerated_reflections": false,
    "oversharpening": false,
    "distortion": false,
    "floating_objects": false,
    "messy_background": false,
    "watermark": false
  },
  "quality_tags": [
    "ultra realistic",
    "macro photography",
    "physically accurate",
    "documentary realism",
    "museum quality",
    "ultra detailed textures",
    "natural imperfections",
    "professional studio lighting",
    "photorealistic RAW"
  ],
  "aspect_ratio": "1:1",
  "generation_parameters": {
    "model_version": "v6",
    "style": "raw",
    "stylization": 100,
    "quality": 1,
    "seed_behavior": "randomized"
  },
  "negative_prompt": [
    "cgi",
    "3d render",
    "illustration",
    "cartoon",
    "plastic shine",
    "toy appearance",
    "overly glossy surfaces",
    "exaggerated"
  ]
}

## 中文译文（源站提供）
```json
{
  "prompt_type": "ultra_realistic_macro_photography",
  "description": "超现实微距摄影，在一个圆形底座上精心布置了一个手工制作的场景。场景展现出物理精确的纹理、真实的材料特性和可信的比例适应。表面呈现出陈旧、自然的磨损，带有细微的瑕疵、触感真实感和博物馆级的工艺。图像具有纪录片级的真实感，没有 CGI 或人工渲染的迹象。",
  "subject": {
    "scene_type": "手工制作的微缩环境",
    "arrangement": "所有元素都精心布置在一个圆形底座上",
    "scale": "微距尺度，具有可信的比例关系",
    "craftsmanship": "博物馆级，匠人制作，高度精细",
    "surface_details": [
      "陈旧纹理",
      "自然磨损和铜绿",
      "微划痕",
      "细微凹痕",
      "有机瑕疵"
    ]
  },
  "materials": {
    "texture_accuracy": "物理精确",
    "material_behavior": "真实世界的光线响应",
    "surface_finish": "哑光至半哑光，自然",
    "tactile_quality": "高度真实，触感可见",
    "imperfection_level": "细微且可信"
  },
  "photography_style": {
    "genre": "影棚产品微距摄影",
    "lighting": {
      "type": "柔和漫射影棚照明",
      "shadow_behavior": "柔和的阴影衰减",
      "highlights": "平衡，不刺眼",
      "contrast": "自然，真实"
    },
    "camera": {
      "focus": "主要元素超清晰对焦",
      "depth_of_field": "浅景深，强调尺度感知",
      "look": "照片级 RAW 照片",
      "detail_level": "极致微观细节可见性"
    },
    "background": {
      "type": "中性灰色无缝背景",
      "cleanliness": "完美干净，无干扰"
    }
  },
  "realism_constraints": {
    "render_style": "仅限摄影",
    "cgi": false,
    "3d_render": false,
    "illustration": false,
    "cartoon_style": false,
    "toy_like_plastic_shine": false,
    "exaggerated_reflections": false,
    "oversharpening": false,
    "distortion": false,
    "floating_objects": false,
    "messy_background": false,
    "watermark": false
  },
  "quality_tags": [
    "超现实",
    "微距摄影",
    "物理精确",
    "纪录片真实感",
    "博物馆品质",
    "超精细纹理",
    "自然瑕疵",
    "专业影棚布光",
    "照片级 RAW"
  ],
  "aspect_ratio": "1:1",
  "generation_parameters": {
    "model_version": "v6",
    "style": "raw",
    "stylization": 100,
    "quality": 1,
    "seed_behavior": "randomized"
  },
  "negative_prompt": [
    "cgi",
    "3d render",
    "illustration",
    "cartoon",
    "plastic shine",
    "toy appearance",
    "overly glossy surfaces",
    "exaggerated"
  ]
}
```

## 来源备注
- 源站作者：Shreya Yadav
- 源站 UUID：2AvXarAtZB
- 源站分类：09_故事分镜角色设定

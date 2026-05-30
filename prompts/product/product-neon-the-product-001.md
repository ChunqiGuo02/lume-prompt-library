---
id: "product-neon-the-product-001"
title: "霓虹悬浮产品视觉设计"
category: product
subcategory: "03_创意广告品牌设计"
aesthetic: null
tags: ["赛博朋克", "香水", "香奈儿", "霓虹", "悬浮", "反光", "水面", "雾气"]
recommended_models: 
  - banana-pro
recommended_params:
  aspect_ratio: "1:1"
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
  "neon_levitation_directive": {
    "version": "2.0-Cyberpunk",
    "objective": "Transform uploaded product into a dynamic, floating subject within a neon-noir environment.",
    “aspect_ratio”: 4:5,
    "visual_priority": ["Dramatic Neon Lighting", "Hydro-Reflective Surfaces", "Zero-Gravity Suspension"],
    "parameters": {
      "subject_transformation": {
        "detection": "Isolate core product geometry and branding from input image.",
        "pose_modification": "Dynamic diagonal tilt (approx 30-degree axis relative to camera).",
        "state": "Levitating/Floating suspended in mid-air with no visible supports.",
        "texture_reaction": "Materials must highly reflect colored light sources (e.g., glossy plastic becomes wet-looking, metal develops colored specular highlights)."
      },
      "lighting_engine": {
        "style": "Cinematic Cyberpunk / Neon Noir split-lighting.",
        "key_light_A": "{"key light A color" "Cyan/Blue"} neon tube lighting from left (cool tones).",
        "key_light_B": "{"key light B color" "Magenta/Purple"} neon tube lighting from right (warm tones).",
        "rim_light": "Strong colored edge-lighting defining the product shape against the dark background.",
        "environmental_light": "Diffused glow from unseen neon signs creating volumetric fog."
      },
      "environment_styling": {
        "surface_beneath": "Dark, highly reflective water surface with subtle ripples.",
        "reflections": "Distorted, ray-traced reflection of the floating product and neon lights visible in the water below.",
        "background": "Dark, out-of-focus bokeh of abstract city lights or geometric neon patterns.",
        "atmosphere": "Low-lying fog and steam catching the colored light rays."
      },
      "camera_optics": {
        "lens": "Macro or 85mm Prime Lens.",
        "aperture": "f/1.8 for extremely shallow depth of field (dramatic bokeh).",
        "focus": "Razor-sharp focus on the front face of the tilted product.",
        "angle": "Slightly low angle looking up at the floating object to convey dominance."
      },
      "technical_directives": {
        "rendering_style": "Photorealistic CGI, Unreal Engine 5, RTX ON, octane render.",
        "color_grading": "High contrast, crushed blacks, vibrant neon saturation.",
        "negative_prompt": "boring studio, bright daylight, flat lighting, static pose, dry surface, supports visible, low resolution."
      }
    }
  }
}

## 中文译文（源站提供）
```json
{
  "neon_levitation_directive": {
    "version": "2.0-Cyberpunk",
    "objective": "将上传的产品转化为霓虹赛博朋克环境中动态漂浮的主体。",
    "aspect_ratio": "4:5",
    "visual_priority": ["戏剧性霓虹灯光", "水面反射效果", "零重力悬浮"],
    "parameters": {
      "subject_transformation": {
        "detection": "从输入图像中分离核心产品几何形状和品牌标识。",
        "pose_modification": "动态对角倾斜（相对于相机轴线约 30 度）。",
        "state": "在空中悬浮/漂浮，无可见支撑物。",
        "texture_reaction": "材质必须高度反射彩色光源（例如，光泽塑料呈现湿润感，金属产生彩色镜面高光）。"
      },
      "lighting_engine": {
        "style": "电影级赛博朋克/霓虹黑色电影分光照明。",
        "key_light_A": "{\"key light A color\" \"Cyan/Blue\"} 左侧霓虹灯管照明（冷色调）。",
        "key_light_B": "{\"key light B color\" \"Magenta/Purple\"} 右侧霓虹灯管照明（暖色调）。",
        "rim_light": "强烈的彩色边缘光，在黑暗背景下勾勒出产品轮廓。",
        "environmental_light": "来自不可见霓虹灯的漫射光晕，形成体积雾气。"
      },
      "environment_styling": {
        "surface_beneath": "黑暗、高反射的水面，带有细微涟漪。",
        "reflections": "下方水面中可见漂浮产品和霓虹灯的扭曲、光线追踪反射。",
        "background": "抽象城市灯光或几何霓虹图案的黑暗、失焦散景。",
        "atmosphere": "低空雾气和蒸汽捕捉彩色光线。"
      },
      "camera_optics": {
        "lens": "微距或 85mm 定焦镜头。",
        "aperture": "f/1.8，以获得极浅景深（戏剧性散景）。",
        "focus": "对倾斜产品正面进行锐利对焦。",
        "angle": "略微低角度仰视漂浮物体，以传达主导感。"
      },
      "technical_directives": {
        "rendering_style": "照片级 CGI，虚幻引擎 5，RTX ON，Octane 渲染。",
        "color_grading": "高对比度，压暗的黑色，鲜艳的霓虹饱和度。",
        "negative_prompt": "无聊的工作室，明亮的日光，平淡的灯光，静态姿势，干燥的表面，可见的支撑物，低分辨率。"
      }
    }
  }
}
```

## 来源备注
- 源站作者：QuestGlitch
- 源站 UUID：L69gqv2iOK
- 源站分类：03_创意广告品牌设计

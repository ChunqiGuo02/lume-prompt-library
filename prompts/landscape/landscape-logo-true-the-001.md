---
id: "landscape-logo-true-the-001"
title: "Logo放进我的世界中"
category: landscape
subcategory: "03_创意广告品牌设计"
aesthetic: null
tags: ["我的世界", "像素", "方块", "体素", "品牌", "标志", "3D", "渲染"]
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
Recreate the [BRAND NAME] logo following the JSON Aesthetic below: {
"style": "Minecraft-style voxel 3D rendering",
"logo_handling": {
"adapt_to_uploaded_logo": true,
"rebuild_logo_using_voxel_blocks": true,
"use_original_logo_as_strict_pixel-color map": true,
"preserve_text_in_logo": true,
"preserve_text_case": true,
"preserve_original_logo_colors": true,
"preserve_shape_and_layout": true
"aspect_ratio": [INSERT ASPECT RATIO]
},
"minecraft_conversion": {
"voxel_depth": "medium thickness to show 3D volume",
"block_style": "authentic Minecraft texture mapping",
"color_strategy": "each block in the logo must match a pixel from the uploaded logo exactly — no estimation or stylistic substitution",
"voxel_material_match": "map logo pixels to Minecraft block colors that visually match pixel color as closely as possible — no creative enhancements",
"disable_palette_expansion": true
},
"scene_environment": {
"base": "neutral terrain (gray concrete or light stone)",
"background": "simple sky (clouds, no sun flare)",
"optional_elements": [
"Minecraft animals at a distance",
"terrain vegetation in background only"
],
"environment_color_policy": "environment must not share colors used in the logo to prevent blending or confusion"
},
"lighting": {
"neutral directional light": true,
"do_not_adjust_logo_colors_for_lighting": true,
"prevent_ambient_light_color_bleed": true
},
"camera": {
"angle": "slightly top-down with 3D logo centered",
"focus": "sharp focus on voxel logo only, environment softly rendered"
},
"render_quality": {
"voxel_texture_resolution": "high",
"shadows": "natural voxel-style ambient shadows only",
"disable_artistic_effects": true
},
"post_processing": {
"no glow effects": true,
"no color correction": true,
"disable AI reinterpretation of tones or palette": true
},
"image_constraints": {
"transparent_background": false,
"include_text": true,
"preserve_text_case": true,
"preserve_original_logo_colors": true,
"obey_uploaded_logo_shape": true,
"match_uploaded_logo_layout": true,
"enforce_color_source_from_logo_only": true
},
"notes": "Rebuild the uploaded logo using Minecraft-style voxel blocks. Every block must represent one pixel from the logo's original image. No creative license is allowed in color, shape, or layout. The environment is decorative only and must not affect logo readability or color perception. The final image should appear as if the logo were physically constructed in a Minecraft world using blocks that match its exact colors and shapes."
}

## 中文译文（源站提供）
根据以下 JSON 规范重新创建 [品牌名称] 的标志：

```json
{
  "style": "Minecraft 风格的体素 3D 渲染",
  "logo_handling": {
    "adapt_touploaded_logo": true,
    "rebuild_logo_using_voxel_blocks": true,
    "use_original_logo_as_strict_pixel-color_map": true,
    "preserve_text_in_logo": true,
    "preserve_text_case": true,
    "preserve_original_logo_colors": true,
    "preserve_shape_and_layout": true,
    "aspect_ratio": [插入宽高比]
  },
  "minecraft_conversion": {
    "voxel_depth": "中等厚度，以显示 3D 体积效果",
    "block_style": "真实的 Minecraft 纹理映射",
    "color_strategy": "标志中的每个体素块必须与上传的标志中的像素完全匹配——不允许任何估算或风格上的替换",
    "voxel_material_match": "将标志像素映射到与像素颜色最接近的 Minecraft 块颜色上——不得进行任何创意性的增强处理",
    "disable_palette_expansion": true
  },
  "scene_environment": {
    "base": "中性地形（灰色混凝土或浅色石头）",
    "background": "简单的天空（云层，无阳光效应）",
    "optional_elements": [
      "远处的 Minecraft 动物",
      "仅用于背景的地面植被"
    ],
    "environment_color_policy": "环境颜色不得与标志中的颜色重复，以防止混淆"
  },
  "lighting": {
    "neutral_directional_light": true,
    "do_not_adjust_logo_colors_for_lighting": true,
    "prevent_ambient_light_color_bleed": true
  },
  "camera": {
    "angle": "略微自上而下的视角，3D 标志居中显示",
    "focus": "仅聚焦于体素标志，环境部分进行柔和渲染"
  },
  "render_quality": {
    "voxel_texture_resolution": "高",
    "shadows": "仅使用自然的体素风格的环境阴影",
    "disable_artistic_effects": true
  },
  "post_processing": {
    "no glowEffects": true,
    "no colorCorrection": true,
    "disable_aireinterpretation_oftones_or_palet": true
  },
  "image_constraints": {
    "transparent_background": false,
    "include_text": true,
    "preserve_text_case": true,
    "preserve_original_logo_colors": true,
    "obeyuploaded_logo_shape": true,
    "matchuploaded_logo_layout": true,
    "enforce_color_source_from_logo_only": true
  },
  "notes": "使用 Minecraft 风格的体素块重新构建上传的标志。每个体素块必须对应标志原始图像中的一个像素。在颜色、形状或布局方面不允许任何创意性的修改。环境元素仅起装饰作用，不得影响标志的的可读性或颜色感知。最终图像应呈现出仿佛该标志是用与原始颜色和形状完全匹配的 Minecraft 块在游戏世界中构建出来的效果。"
}
```

## 来源备注
- 源站作者：alex_prompter
- 源站 UUID：a5b4966a8e
- 源站分类：03_创意广告品牌设计

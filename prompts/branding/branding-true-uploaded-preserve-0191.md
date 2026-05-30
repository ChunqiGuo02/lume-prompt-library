---
id: branding-true-uploaded-preserve-0191
title: "将您的标志变成毛毡纹理"
category: branding
subcategory: "03_创意广告品牌设计"
aesthetic: null
tags: ["针毡", "羊毛", "标识", "品牌", "写实", "柔软", "绒感", "微距"]
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
Retexture [BRAND NAME] logo following my JSON aesthetic below:
{
"style": "realistic needle-felted wool sculpture",
"subject_handling": {
"adapt_to_uploaded_image": true,
"preserve_original_shape_and_layout": true,
"preserve_uploaded_color_values": true,
"preserve_text_if_present": true,
"preserve_text_case": true,
"preserve_exact_letterforms": true,
"use_uploaded_image_as_pixel_map": true,
"prevent_color_estimation_or_stylization": true
},
"needle_felting": {
"material_type": "dyed wool fibers matched precisely to uploaded image pixels",
"texture_description": "fluffy soft felt with clear fiber strands",
"construction_style": "needle-felted, light irregularities allowed but no color bleeding",
"color_application_method": "direct color transfer from uploaded image to wool sculpture",
"prevent_auto_saturation_adjustment": true,
"prevent_color_fading": true,
"color_binding_mode": "pixel-level color fidelity per original image"
},
"lighting": {
"lighting_type": "neutral soft studio lighting",
"shadow": "soft, gray-toned shadows under the object only",
"highlight_behavior": "matte highlights only from felt surface — no bloom or color shift"
},
"background": {
"type": "plain matte studio",
"background_color": "pastel tone that contrasts with logo color",
"color_conflict_handling": "auto-adjust background brightness — do not alter logo colors"
},
"camera": {
"focus_style": "macro lens",
"depth_of_field": "shallow — full subject in sharp detail, soft background",
"angle": "frontal or slightly elevated, full subject visible"
},
"post_processing": {
"color_preservation_enforced": true,
"disable_auto-enhancement_or_tinting": true,
"no artistic reinterpretation": true,
"no auto-correction, bloom, or white balance adjustments": true
},
"image_constraints": {
"transparent_background": false,
"aspect_ratio_locked": true,
"include_text_if_present": true,
"preserve_text_case": true,
"preserve_uploaded_color_values": true,
"prevent_shape_or_color_change": true,
"enforce_exact_pixel_color_match_to_uploaded_image": true
},
"notes": "The uploaded image must be converted into a needle-felted wool sculpture using its exact colors and shape. Use pixel-level mapping to apply the uploaded color values to simulated dyed wool fibers. Do not change, brighten, dull, average, or blend colors. Text must remain intact and readable. Background should be soft pastel to contrast the logo — never adjust the logo to fit the scene."
}

## 中文译文（源站提供）
根据以下 JSON 样式，重新设计 [品牌名称] 的标志：

```json
{
  "style": "真实的针毡羊毛雕塑",
  "subject_handling": {
    "adapt_to_uploaded_image": true,
    "preserve_original_shape_and_layout": true,
    "preserveuploaded_color_values": true,
    "preserve_text_if_present": true,
    "preserve_text_case": true,
    "preserve_exact_letterforms": true,
    "useuploaded_image_as_pixel_map": true,
    "prevent_color_estimation_or_stylization": true
  },
  "needle_felting": {
    "material_type": "与上传图像像素完全匹配的染色羊毛纤维",
    "texture_description": "蓬松柔软的毛毡，纤维纹理清晰可见",
    "construction_style": "针毡工艺，允许轻微的不规则性，但禁止颜色渗出",
    "color_application_method": "将上传图像的颜色直接转移到羊毛雕塑上",
    "prevent_auto_saturation_adjustment": true,
    "prevent_color_fading": true,
    "color_binding_mode": "保持与原始图像相同的像素级色彩精确度"
  },
  "lighting": {
    "lighting_type": "中性柔和的摄影棚光线",
    "shadow": "物体下方仅有柔和的灰色调阴影",
    "highlight_behavior": "仅从毛毡表面产生哑光高光——无色彩溢出或偏移"
  },
  "background": {
    "type": "简单的哑光背景",
    "background_color": "与标志颜色形成对比的淡色调",
    "color_conflict_handling": "自动调整背景亮度——切勿改变标志颜色"
  },
  "camera": {
    "focus_style": "微距镜头",
    "depth_of_field": "浅景深——主体轮廓清晰，背景模糊",
    "angle": "正面或略微抬高的视角，确保主体完全可见"
  },
  "post_processing": {
    "color_preservation_enforced": true,
    "disable_auto-enhancement_or_tinting": true,
    "no artisticreinterpretation": true,
    "no auto-correction, bloom, or white balance adjustments": true
  },
  "image_constraints": {
    "transparent_background": false,
    "aspect_ratioLocked": true,
    "include_text_if_present": true,
    "preserve_text_case": true,
    "preserveuploaded_color_values": true,
    "prevent_shape_or_color_change": true,
    "enforce_exact_pixel_color_match_touploaded_image": true
  },
  "notes": "上传的图像必须被转换成具有精确颜色和形状的针毡羊毛雕塑。使用像素级映射技术将上传图像的颜色值应用到模拟的染色羊毛纤维上。不得更改、提亮、柔和、平均或混合颜色。文本必须保持完整且可读。背景应为柔和的淡色调，以突出标志——切勿为了适应场景而调整标志的尺寸或颜色。"
}
```

## 来源备注
- 源站作者：alex_prompter
- 源站 UUID：7256523cc3
- 源站分类：03_创意广告品牌设计

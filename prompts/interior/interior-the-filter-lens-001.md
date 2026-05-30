---
id: "interior-the-filter-lens-001"
title: "老照片局部修复滤镜"
category: interior
subcategory: "11_图像编辑与修复增强"
aesthetic: null
tags: ["黑白", "彩色", "清华", "校门", "建筑", "修复", "滤镜", "手掌"]
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
language: mixed
created_at: 2026-05-30
version: "1.0.0"
related_to: []
---

# 正文 prompt
穿越时空的滤镜——老照片修复
感谢宝玉老师的建议。多次尝试之后决定使用玻璃滤镜实现对老照片核心部分的“修复”。
效果图包括：
1. 清华二校门老照片（被毁之前）
2. 恭亲王照片（大概是中国人最早的相片）
3. 老登李鸿章
4. 20元钞票中的风景（漓江）
提示词见评论区，欢迎尝试与分享
@dotey https://t.co/0KDbX4W4nl
Prompts
对提供的照片，根据提示词生成图片，滤镜采用大滤镜，使用彩色呈现。
{
"type": "augmented_reality_filter_synthesis",
"aspect_ratio": "16:9",
"instruction": "CRITICAL: This is an IMAGE-TO-IMAGE task, not a text-to-image generation. You must strictly preserve the pixels of the {{UPLOADED_IMAGE_FILE}} as the background. Do not generate a new scene based on description. Only the area INSIDE the glass filter is allowed to change.",
"global_constraints": {
"source_fidelity": "The background outside the filter must be an EXACT pixel-match to {{UPLOADED_IMAGE_FILE}}. Do not alter, crop, expand, or 'reimagine' the background context.",
"context_isolation": "Ignore all previous images or conversation topics. Focus EXCLUSIVELY on the current uploaded file.",
"modification_scope": "modifications are STRICTLY limited to the area inside the glass filter lens."
},
"dynamic_analysis_module": {
"step_1_focal_point_extraction": {
"task": "Identify the coordinates of the main subject (Face/Object) in the current file to position the filter.",
"output_variable": "[TARGET_COORDINATES]",
"logic": "Find the center of interest solely within the provided image."
},
"step_2_filter_specs": {
"task": "Determine filter parameters based on the subject.",
"output_variable_shape": "[FILTER_SHAPE]",
"output_variable_style": "[HD_RESTORATION_STYLE]",
"logic": "Face -> Circular/Oval + Skin Restoration. Building -> Rectangular + Structure Sharpening."
}
},
"system_prompt_logic": {
"main_premise": "A first-person view of a hand holding a [FILTER_SHAPE] glass lens over the actual physical print of {{UPLOADED_IMAGE_FILE}}.",
"layer_definition_logic": {
"layer_1_background_immutable": {
"z_index": "Background (The Original Image)",
"content": "The original {{UPLOADED_IMAGE_FILE}} displayed as a large physical print or wall projection.",
"strict_rules": {
"NO_GENERATION": "Do not generate new scenery. Use the uploaded image as a fixed texture map.",
"NO_EXPANSION": "Do not attempt to extend the image borders. Show the image exactly as provided, framing it to fill the background.",
"visual_state": "Must retain all original artifacts: noise, blur, scratches, B&W tone, and low resolution. This is the 'Before' state."
}
},
"layer_2_foreground_hand": {
"z_index": "Foreground (Overlay)",
"content": "A realistic human hand holding a [FILTER_SHAPE] optical glass lens.",
"positioning": "The hand enters from the edge (unobtrusive). The glass lens is positioned directly over [TARGET_COORDINATES].",
"lighting": "The hand casts a subtle shadow onto the background print to create depth."
},
"layer_3_filter_throughput": {
"z_index": "Lens Interior (The Transformation)",
"content": "The specific pixels visible *through* the glass lens.",
"visual_transformation": {
"action": "Upscale and colorize ONLY the pixels inside the lens boundary.",
"style": "[HD_RESTORATION_STYLE] (4K resolution, realistic textures, vibrant lighting).",
"contrast_lock": "The separation is absolute. Outside the line = Old/Blurry. Inside the line = New/Sharp. No fading gradients."
}
}
}
}
}

## 中文译文（源站提供）
**技术细节：**  
- `type`: 增强现实滤镜合成（Augmented Reality Filter Synthesis）  
- `aspect_ratio`: 16:9  
- **指令**: “注意：这是一个图像到图像的转换任务，而不是文本到图像的生成。必须严格保持原始图片（`{{UPLOADED_IMAGE_FILE}}`）的所有像素作为背景；不得基于描述生成新的画面。只有玻璃滤镜内的区域可以修改。”  
- **全局限制**:  
  - `source_fidelity`: 滤镜外的背景必须与原始图片完全一致（像素级匹配），不得调整、裁剪、缩放或重新构想背景内容。  
  - `context_isolation`: 完全忽略之前的所有图片或讨论内容，仅关注当前上传的文件。  
  - **修改范围**: 所有修改仅限玻璃滤镜内的区域。  
- **动态分析模块**:  
  - **步骤1：焦点提取**：确定当前图片中主体的坐标（面部/物体），以便放置滤镜。  
  - **步骤2：滤镜参数设置**：根据主体特征确定滤镜的形状和修复风格。  
- **系统提示逻辑**:  
  - 整体效果呈现为第一人称视角，一只手将玻璃滤镜覆盖在原始图片上。  
  - **图层定义**:  
    - **背景图层**（不可修改）：显示原始图片，作为背景。  
    - **前景手部图层**：现实感强的手部握住玻璃滤镜。  
    - **滤镜效果图层**：仅对滤镜内的像素进行放大和着色处理。  

"style": "[HD_RESTORATION_STYLE]（4K分辨率，逼真的纹理，明亮的灯光）。",
"contrast_lock": "边界非常清晰：线外为旧版本/模糊图像；线内为新版本/清晰图像。无渐变的色调过渡。"

## 来源备注
- 源站作者：阿兹特克小羊驼🦙
- 源站 UUID：0c895f95c6
- 源站分类：11_图像编辑与修复增强

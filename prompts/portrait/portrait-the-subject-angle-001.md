---
id: "portrait-the-subject-angle-001"
title: "九宫格电影感人像构图预设"
category: portrait
subcategory: "09_故事分镜角色设定"
aesthetic: null
tags: ["时尚", "彩妆", "人像", "摄影", "多视角", "幻彩", "霓虹", "亚裔"]
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
related_to: ["portrait-the-subject-angle-002"]
---

# 正文 prompt
{
"project_name": "Auto_Cinematic_9_Angle_Grid_Generator",
"version": "3.0 (Angle & Anatomy Focus)",
"instructions_for_ai": {
"step_1_analysis": "Analyze the input image for subject identity, lighting (e.g., prism effects, direction), skin texture, emotion, and color palette.",
"step_2_inference": "If the input is a close-up, you must logically infer the subject's outfit, body type, and environment based on the style of the face. Maintain strictly consistent character design across all 9 panels.",
"step_3_execution": "Generate a 3x3 grid where each panel corresponds to the specific camera definitions below."
},
"camera_angle_specifications": {
"MCU": "Macro Close Up: Focus intensely on facial details, eyes, or textures. Crop top of head and chin.",
"MS": "Medium Shot: Waist or chest up. Standard cinematic portrait framing.",
"OS": "Over the Shoulder: Camera placed behind a vague foreground element/shoulder, looking at the subject.",
"WS": "Wide Shot: Full body shot. Show the subject's posture, outfit, and relationship with the environment.",
"HA": "High Angle: Camera is physically higher than the subject, looking down. Emphasize vulnerability or diminishing size.",
"LA": "Low Angle: Camera is physically lower than the subject, looking up. Emphasize dominance or stature.",
"P": "Profile: Strictly from the side (90 degrees). Subject looks completely left or right.",
"ThreeQ": "3/4 View: Subject turned 45 degrees away from the camera. Classic portrait angle.",
"B": "Back View: Camera is directly behind the subject. Seeing the back of the head/body."
},
"output_format": {
"grid_layout": "3x3",
"aspect_ratio": "16:9",
"labeling": "Must include white text abbreviations (MCU, MS, etc.) in the top-left corner of each panel."
},
"final_prompt_instruction": "Using the provided input image as the absolute ground truth for the character and style, generate a photorealistic 3x3 grid collage. You must strictly adhere to the 'camera_angle_specifications' defined above for each panel. Ensure distinct visual variety between the shots (e.g., a Wide Shot must look significantly different from a Close Up). The lighting and color grading must remain identical to the input source in every single angle.

Grid Order:
Row 1: MCU, MS, OS
Row 2: WS, HA, LA
Row 3: P, ThreeQ, B"
}

## 中文译文（源站提供）
{
“项目名称”：“Auto_Cinematic_9_Angle_Rid_Generator”，
“版本”：“3.0（角度和解剖焦点）”，
“指令_for_ai”：{
“step_1_analysis”：“分析输入图像的主体身份、光照（如棱镜效果、方向）、皮肤纹理、情感和调色板。”，
“step_2_inference”：“如果输入是特写，则必须根据面部风格从逻辑上推断出主体的服装、体型和环境。在所有9个面板上保持严格一致的角色设计。”，
“step_3_execution”：“生成一个3x3网格，其中每个面板对应于下面的特定相机定义。”
},
“camera_angle_规格”：{
“MCU”：“微距特写：专注于面部细节、眼睛或纹理。裁剪头顶和下巴。”，
“MS”：“中等拍摄：腰部或胸部向上。标准电影肖像取景。”，
“OS”：“肩上：相机放置在模糊的前景元素/肩膀后面，看着拍摄对象。”，
“WS”：“广角：全身拍摄。显示拍摄对象的姿势、服装以及与环境的关系。”，
“HA”：“高角度：相机的物理位置高于拍摄对象，向下看。强调脆弱性或缩小尺寸。”，
“LA”：“低角度：相机在身体上低于拍摄对象，抬头看。强调主导地位或身材。”，
“P”：“轮廓：严格从侧面（90度）看。受试者看起来完全向左或向右。”，
“ThreeQ”：“3/4视角：被摄体与相机成45度角。经典的肖像角度。”，
“B”：“后视图：相机直接在拍摄对象后面。看到头部/身体的后部。”
},
“output_format”：{
“网格布局”：“3x3”，
“方面比率”：“16:9”，
“标签”：“必须在每个面板的左上角包含白色文本缩写（MCU、MS等）。”
},
“final_prompt_instruction”：“使用提供的输入图像作为角色和样式的绝对真实感，生成逼真的3x3网格拼贴。您必须严格遵守上面为每个面板定义的‘camera_angle_specifications’。确保镜头之间有明显的视觉变化（例如，广角镜头必须看起来与特写镜头明显不同）。照明和颜色分级必须在每个角度上与输入源保持一致。”。
网格顺序：
第1行：MCU、MS、OS
第2行：WS、HA、LA
第3行：P、ThreeQ、B”
}

## 来源备注
- 源站作者：firatbilal
- 源站 UUID：c9ede2y9y7
- 源站分类：09_故事分镜角色设定

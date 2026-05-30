---
id: "portrait-the-angle-subject-001"
title: "九宫格电影镜头角度参考图"
category: portrait
subcategory: "09_故事分镜角色设定"
aesthetic: null
tags: ["摄影", "参考", "机位", "角度", "人像", "男性", "绅士", "西装"]
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
camera shot and angle reference chart for your subject with nbp
MCU = Macro Close Up
MS = Medium Shot
OS = Over the Shoulder
WS = Wide Shot
HA = High Angle
LA = Low Angle
P = Profile
ThreeQ = Three-Quarter View
B = Back View
prompt (+ ref image):
{   "project_name": "Auto_Cinematic_9_Angle_Grid_Generator",   "version": "3.0 (Angle & Anatomy Focus)",   "instructions_for_ai": {     "step_1_analysis": "Analyze the input image for subject identity, lighting (e.g., prism effects, direction), skin texture, emotion, and color palette.",     "step_2_inference": "If the input is a close-up, you must logically infer the subject's outfit, body type, and environment based on the style of the face. Maintain strictly consistent character design across all 9 panels.",     "step_3_execution": "Generate a 3x3 grid where each panel corresponds to the specific camera definitions below."   },   "camera_angle_specifications": {     "MCU": "Macro Close Up: Focus intensely on facial details, eyes, or textures. Crop top of head and chin.",     "MS": "Medium Shot: Waist or chest up. Standard cinematic portrait framing.",     "OS": "Over the Shoulder: Camera placed behind a vague foreground element/shoulder, looking at the subject.",     "WS": "Wide Shot: Full body shot. Show the subject's posture, outfit, and relationship with the environment.",     "HA": "High Angle: Camera is physically higher than the subject, looking down. Emphasize vulnerability or diminishing size.",     "LA": "Low Angle: Camera is physically lower than the subject, looking up. Emphasize dominance or stature.",     "P": "Profile: Strictly from the side (90 degrees). Subject looks completely left or right.",     "ThreeQ": "3/4 View: Subject turned 45 degrees away from the camera. Classic portrait angle.",     "B": "Back View: Camera is directly behind the subject. Seeing the back of the head/body."   },   "output_format": {     "grid_layout": "3x3",     "aspect_ratio": "16:9",     "labeling": "Must include white text abbreviations (MCU, MS, etc.) in the top-left corner of each panel."   },   "final_prompt_instruction": "Using the provided input image as the absolute ground truth for the character and style, generate a photorealistic 3x3 grid collage. You must strictly adhere to the 'camera_angle_specifications' defined above for each panel. Ensure distinct visual variety between the shots (e.g., a Wide Shot must look significantly different from a Close Up). The lighting and color grading must remain identical to the input source in every single angle.

Grid Order:
Row 1: MCU, MS, OS
Row 2: WS, HA, LA
Row 3: P, ThreeQ, B" }

## 中文译文（源站提供）
以下是根据NBP（可能是某个特定的规则或标准）为你的拍摄对象准备的相机镜头和角度参考图表：

- **MCU**（Macro Close Up）：特写镜头，聚焦面部细节、眼睛或皮肤纹理。裁剪掉头顶和下巴的部分。
- **MS**（Medium Shot）：中景镜头，拍摄到腰部或胸部以上。采用标准的电影肖像构图。
- **OS**（Over the Shoulder）：将相机置于前景元素或肩膀后面，从侧面拍摄对象。
- **WS**（Wide Shot）：全景镜头，展示整个身体，包括姿势、服装以及与环境的关系。
- **HA**（High Angle）：从高角度拍摄，相机位置高于对象，给人一种弱势或渺小的感觉。
- **LA**（Low Angle）：从低角度拍摄，相机位置低于对象，给人一种强势或高大的感觉。
- **P**（Profile）：侧面镜头（90度角），对象完全朝向左侧或右侧。
- **ThreeQ**（Three-Quarter View）：对象向相机方向转45度，呈现经典的肖像角度。
- **B**（Back View）：背景镜头，拍摄到对象的背部。

**提示（含参考图片）：**
```json
{
  "project_name": "Auto_Cinematic_9_Angle_Grid_Generator",
  "version": "3.0 (Angle & Anatomy Focus",
  "instructions_for_ai": {
    "step_1_analysis": "分析输入图片中的对象身份、光线（如棱镜效果、方向）、皮肤纹理、情绪和色彩搭配。",
    "step_2_inference": "如果输入的是特写镜头，你需要根据面部的风格逻辑推断出对象的服装、体型和环境。确保所有9个画面中的角色设计保持一致。",
    "step_3_execution": "生成一个3x3的网格，每个画面对应以下特定的相机拍摄角度。"
  },
  "camera_angle_specifications": {
    "MCU": "特写镜头：聚焦面部细节、眼睛或皮肤纹理。裁剪掉头顶和下巴。",
    "MS": "中景镜头：拍摄到腰部或胸部以上。采用标准的电影肖像构图。",
    "OS": "侧面镜头：将相机置于前景元素或肩膀后面，从侧面拍摄对象。",
    "WS": "全景镜头：拍摄整个身体，展示对象的姿势、服装以及与环境的关系。",
    "HA": "高角度镜头：相机位置高于对象，向下拍摄。强调对象的弱势或渺小感。",
    "LA": "低角度镜头：相机位置低于对象，向上拍摄。强调对象的强势或高大感。",
    "P": "侧面镜头：严格从侧面拍摄（90度角），对象完全朝向左侧或右侧。",
    "ThreeQ": "3/4视角：对象向相机方向转45度，呈现经典的肖像角度。",
    "B": "背景镜头：相机位于对象正后方，拍摄到对象的背部。"
  },
  "output_format": {
    "grid_layout": "3x3",
    "aspect_ratio": "16:9",
    "labeling": "每个画面的左上角必须标注白色文字缩写（MCU、MS等）。"
  },
  "final_promptInstruction": "使用提供的输入图片作为角色和风格的真实参考，生成一个逼真的3x3网格拼贴图。你必须严格遵循上述每个画面的`camera_angle_specifications`。确保不同镜头之间的视觉效果有明显差异（例如，全景镜头与特写镜头必须有明显区别）。所有角度的光线和色彩处理必须与输入图片保持一致。"
}
```

**网格排列顺序：**
- 第一行：MCU、MS、OS
- 第二行：WS、HA、LA
- 第三行：P、ThreeQ、B

## 来源备注
- 源站作者：ProperPrompter
- 源站 UUID：O6bdWKajU1
- 源站分类：09_故事分镜角色设定

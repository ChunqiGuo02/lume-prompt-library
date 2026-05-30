---
id: "portrait-the-direction-normal-001"
title: "生成艺术画作的法线与深度图"
category: portrait
subcategory: "07_艺术插画创意风格"
aesthetic: null
tags: ["油画", "名画", "肖像", "女性", "蓝色", "棕色", "珍珠", "古典"]
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
Generate a surface normal map from the input artwork image.

Output one RGB image where each pixel encodes the surface normal direction in standard tangent-space format:
•R = X direction
•G = Y direction
•B = Z direction

Requirements:
•Maintain the same resolution and aspect ratio as the input image.
•Normal directions must follow the local geometry implied by brush strokes, shading, and contours.
•Do NOT add new artistic elements or repaint the scene.
•Only infer plausible micro-geometry and surface orientation.
•Ensure smooth, consistent normal transitions without noise.

Generate a depth map from the input artwork image.

Output a single grayscale depth map where:
•White = near to the viewer
•Black = far from the viewer

Requirements:
•Maintain the same resolution and aspect ratio as the input image.
•Depth must be smooth, continuous, and physically plausible.
•Infer only geometric depth that could reasonably exist in the original artwork.
•Do NOT add new objects or details.
•Do NOT stylize, repaint, or reinterpret the scene.
•Avoid texture noise; focus solely on depth structure.

## 中文译文（源站提供）
根据输入的艺术作品图像生成表面法线贴图。

输出一张 RGB 图像，其中每个像素以标准切线空间格式编码表面法线方向：
• R = X 方向
• G = Y 方向
• B = Z 方向

要求：
• 保持与输入图像相同的分辨率和纵横比。
• 法线方向必须遵循画笔笔触、阴影和轮廓所暗示的局部几何形状。
• 请勿添加新的艺术元素或重绘场景。
• 仅推断合理的微观几何结构和表面方向。
• 确保平滑、一致的法线过渡，无噪点。

根据输入的艺术作品图像生成深度贴图。

输出一张灰度深度贴图，其中：
• 白色 = 靠近观察者
• 黑色 = 远离观察者

要求：
• 保持与输入图像相同的分辨率和纵横比。
• 深度必须平滑、连续且符合物理常识。
• 仅推断原始艺术作品中可能存在的几何深度。
• 请勿添加新的物体或细节。
• 请勿对场景进行风格化、重绘或重新诠释。
• 避免纹理噪点；只关注深度结构。

## 来源备注
- 源站作者：Takuma Hashimoto
- 源站 UUID：E5CzgtUS1e
- 源站分类：07_艺术插画创意风格

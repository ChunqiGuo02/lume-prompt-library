---
id: "architecture-the-video-panel-001"
title: "瑞克与莫蒂风格音乐视频分镜"
category: architecture
subcategory: "10_卡通漫画电影角色"
aesthetic: null
tags: ["动画", "美式", "荒诞", "超现实", "分镜", "彩虹", "科幻", "卡通"]
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
This prompt really matches the writing style perfectly 🎯
"selected_style": "Rick and Morty world" version
Prompt:
{
"project_name": "Auto_Creative_Music_Video_Storyboard_Generator",
"version": "4.0 (Video Clip Focus - Multi-Input)",
"ai_role": "You are a visionary Creative Director and Cinematographer for a high-end music video. Your goal is to create a cohesive, visually stunning 9-scene storyboard based on provided visual references.",
"input_configuration": {
"source_material": "Multiple Uploaded Images. The AI must synthesize all provided images to establish the definitive subject(s), color palette, lighting scheme, and overall aesthetic.",
"video_clip_style_selector": {
"description": "Select the overarching genre/mood for the music video clip behavior.",
"options": ["Creative", "Surreal", "Absurd", "Dreamlike", "High-Fashion", "Cyberpunk", "Gothic", "Abstract"],
"selected_style": "Rick and Morty world")
}
},
"processing_rules": {
"consistency_is_paramount": "Strictly maintain the visual identity established by the input images across all 9 scenes. The subject's features, the specific lighting mood (e.g., neon stripes, iridescence), and the environment style must never deviate.",
"apply_selected_style": "Inject the mood and behaviors of the 'selected_style' into the movement, composition, and events of the scenes. (e.g., if 'Surreal', gravity might behave oddly; if 'Absurd', actions might be illogical).",
"imply_motion": "These are not static photos. Each panel must look like a still frame taken from a moving video clip, implying action, camera movement, or atmospheric shifting.",
"no_text_overlays": true,
"output_aspect_ratio": "16:9 for all panels."
},
"scene_progression_structure": {
"note": "Design 9 distinct visual beats representing the flow of a music video.",
"row_1_introduction": {
"panel_1": "Opening Scene: Establishing the mood and environment. Subtle introduction of the subject.",
"panel_2": "Focus on Detail: A close cinematic shot emphasizing a key textural element from the input (e.g., makeup, clothing material, light reflection).",
"panel_3": "Building Atmosphere: The subject interacts with the environment in a way defined by the selected style."
},
"row_2_escalation": {
"panel_4": "Dynamic Action: The energy increases. Stronger movement or a shift in lighting intensity.",
"panel_5": "The 'Surreal' Turn: A moment that heavily highlights the selected video style (e.g., an impossible angle, abstract background shift, unusual pose).",
"panel_6": "Intense Emotion: A powerful, emotive shot focusing on the subject's connection to the (implied) song."
},
"row_3_climax_and_resolution": {
"panel_7": "Visual Climax: The most visually striking and complex shot. The peak of the video's energy.",
"panel_8": "Pulling Back: A wider view showing the aftermath of the climax or a change in state.",
"panel_9": "Closing Scene: A resolving shot that fades out or ends the visual journey, leaving a lasting impression."
}
},
"final_prompt_instruction": "Synthesize all uploaded input images into a single, cohesive visual identity. Acting as a Creative Director, generate a 3x3 grid storyboard composed of 9 high-quality video stills. You must strictly apply the requested 'selected_style' to the narrative flow defined in the 'scene_progression_structure'. Ensure every panel looks like a frame from the same high-budget music video, maintaining perfect consistency in subject and lighting. Do NOT include any text overlays on the final images."
}

## 中文译文（源站提供）
{
“项目名称”：“自动_创作_音乐_视频_存储板_生成器”，
“版本”：“4.0（视频剪辑聚焦-多输入）”，
“ai_role”：“你是一位富有远见的创意总监和高端音乐视频的摄影师。你的目标是根据提供的视觉参考创建一个有凝聚力、视觉上令人惊叹的9场景故事板。”，
“input_configuration”：{
“source_material”：“多个上传的图像。人工智能必须合成所有提供的图像，以建立明确的主题、调色板、照明方案和整体美学。”，
“video_clip_style_selector”：{
“description”：“为音乐视频剪辑行为选择总体流派/情绪。”，
“选项”：[“创意”、“超现实”、“荒诞”、“梦幻般”、“高级时尚”、“赛博朋克”、“哥特式”、“抽象”]，
“selected_style”：“瑞克和莫蒂的世界”）
}
},
“processing_rules”：{
“consistency _is_paramount”：“严格保持输入图像在所有9个场景中建立的视觉识别。主体的特征、特定的照明情绪（如霓虹条纹、虹彩）和环境风格不得偏离。”，
“apply_selectd_style”：“将‘selected_style’的情绪和行为注入场景的动作、构图和事件中。（例如，如果是‘超现实’，重力可能会表现得很奇怪；如果是‘荒谬’，动作可能不合逻辑）。”，
“imply_motion”：“这些不是静态照片。每个面板必须看起来像是从移动视频剪辑中拍摄的静止帧，暗示动作、相机移动或大气变化。”，
“no_text_overlays”：true，
“output_aspect_ratio”：“所有面板为16:9。”
},
“场景_进程_结构”：{
“注意”：“设计9个不同的视觉节拍，代表音乐视频的流动。”，
“row_1_简介”：{
“panel_1”：“开场场景：营造氛围和环境。微妙地介绍主题。”，
“panel_2”：“注重细节：一个近距离的电影镜头，强调输入中的关键纹理元素（例如化妆、服装材料、反光）。”，
“panel_3”：“建筑氛围：主体以所选风格定义的方式与环境互动。”
},
“row_2_缩放”：{
“panel_4”：“动态动作：能量增加。更强的运动或照明强度的变化。”，
“panel_5”：“‘超现实’转折：一个突出所选视频风格的时刻（例如，不可能的角度、抽象的背景偏移、不寻常的姿势）。”，
“panel_6”：“强烈的情感：一个强有力的、富有情感的镜头，聚焦于主题与（隐含的）歌曲的联系。”
},
“row_3_climax_and_resolution”：{
“panel_7”：“视觉高潮：视觉上最引人注目、最复杂的镜头。视频能量的巅峰。”，
“panel_8”：“后撤：显示高潮或状态变化后的更宽视野。”，
“panel_9”：“结束场景：一个逐渐淡出或结束视觉之旅的解决镜头，留下持久的印象。”
}
},
“final_prompt_instructure”：“将所有上传的输入图像合成为一个单一的、有凝聚力的视觉标识。作为创意总监，生成一个由9个高质量视频剧照组成的3x3网格故事板。您必须严格将要求的‘selected_style’应用于‘scene_progression_structure’中定义的叙事流。确保每个面板看起来都像同一高预算音乐视频中的一帧，保持主题和灯光的完美一致性。不要在最终图像上包含任何文本叠加。”
}

## 来源备注
- 源站作者：firatbilal
- 源站 UUID：nI2eVDI4fR
- 源站分类：10_卡通漫画电影角色

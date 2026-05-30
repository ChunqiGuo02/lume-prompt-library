---
id: product-the-argument-name-0677
title: "超写实3D等距视角场景生成预设"
category: product
subcategory: "12_手工玩具手办"
aesthetic: null
tags: ["超写实", "3D", "渲染", "写实", "微缩", "场景", "人物", "休闲"]
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
Concept: A hyper-realistic 3D isometric view of a {argument name="location" default="[INSERT LOCATION]"} scene on a circular base.
Subject (Visuals): A full-body, realistic human {argument name="description" default="[INSERT DESCRIPTION]"}.
* Texture Rule: The subject must have "Living Human Skin" texture (subsurface scattering, pores, natural imperfections).
* Important: He is NOT a toy/doll. He looks like a real person inserted into the scene.
* Pose: {argument name="pose" default="[INSERT POSE, e.g., Sitting naturally]"}.

Composition & Scale (Crucial):
* Camera: Isometric wide shot (Full view). ensure the entire circular base, the subject, and all props are visible within the frame.
* Proportions: PERFECT RELATIVE SCALE. The props (e.g., scooter, table etc.) must be the correct size relative to the human. Do not make the human giant or the props tiny.

Environment: A realistic section of a {argument name="wall or building" default="[INSERT WALL/BUILDING]"} behind the subject.
* Material: Real weathered textures (brick, cement, wood), not painted model textures.

Props:
* {argument name="prop 1" default="[INSERT PROP 1, e.g., Vintage Vespa]"} (Real metal and chrome texture).
* {argument name="prop 2" default="[INSERT PROP 2, e.g., Pizza and Wine]"} (Real food texture).
* *Note:* Ensure all props are present and grounded on the base.

Technical Specs: Unreal Engine 5 render style, 8k resolution, global illumination, raytracing, sharp focus on the entire scene (deep depth of field), solid neutral grey background.

Negative Prompt: Toy, plastic, doll, action figure, clay, resin, shallow depth of field (blur), close-up, cropped, distorted proportions, giant head, cartoonish, missing limbs, unfinished.

## 中文译文（源站提供）
概念：一个超逼真的 3D 等距视图，在一个圆形底座上呈现 {argument name="location" default="[插入地点]"} 场景。
主体（视觉）：一个全身、逼真的人物 {argument name="description" default="[插入描述]"}。
* 纹理规则：主体必须具有“活人皮肤”纹理（次表面散射、毛孔、自然瑕疵）。
* 重要提示：他不是玩具/玩偶。他看起来像一个真实的人被置于场景中。
* 姿势：{argument name="pose" default="[插入姿势，例如：自然坐着]"}。

构图与比例（至关重要）：
* 摄像机：等距广角镜头（全景）。确保整个圆形底座、主体和所有道具都在画面内可见。
* 比例：完美的相对比例。道具（例如，踏板车、桌子等）必须与人物的尺寸比例正确。不要让人物显得巨大或道具显得微小。

环境：主体后面是 {argument name="wall or building" default="[插入墙壁/建筑]"} 的逼真部分。
* 材料：真实的风化纹理（砖块、水泥、木材），而不是彩绘模型纹理。

道具：
* {argument name="prop 1" default="[插入道具 1，例如：老式 Vespa 摩托车]"}（真实的金属和镀铬纹理）。
* {argument name="prop 2" default="[插入道具 2，例如：披萨和葡萄酒]"}（真实的食物纹理）。
* *注意：* 确保所有道具都存在并放置在底座上。

技术规格：虚幻引擎 5 渲染风格，8k 分辨率，全局光照，光线追踪，整个场景锐利对焦（深景深），纯中性灰色背景。

负面提示：玩具，塑料，玩偶，动作人偶，粘土，树脂，浅景深（模糊），特写，裁剪，比例失调，巨头，卡通化，肢体缺失，未完成。

## 来源备注
- 源站作者：ΛRMIN | AI
- 源站 UUID：JCfhDPMS8W
- 源站分类：12_手工玩具手办

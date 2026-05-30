---
id: "portrait-the-subject-character-001"
title: "角色参战宣传图生成"
category: portrait
subcategory: "09_故事分镜角色设定"
aesthetic: null
tags: ["二次元", "少女", "刀", "红色", "日文", "插画", "暖色调", "紧张"]
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
related_to: ["portrait-the-subject-character-002"]
---

# 正文 prompt
layering:
  order:
    - text_layer
    - character_layer
    - background_layer
  strict: true

subject:
  description: >
    Preserve the subject exactly as in the reference image, keeping all facial features,
    colors, hairstyle, clothing, and proportions. No redesign or reinterpretation.
  framing: >
    Bust-up composition (head to upper torso), making the subject appear large and prominent.
  integrity: full_identity_preservation
  detail_level: ultra_high_resolution
  micro_details: preserve_skin_texture_hair_edges_fabric_details

composition:
  aspect_ratio: "16:9"
  layout: >
    Subject positioned on one side; headline text on the opposite side.
  emphasis: >
    Strong presence on the character's upper body and expression.

action:
  description: >
    Minimal motion enhancement. Maintain the reference pose while adding subtle dramatic energy.

location:
  description: >
    Generate a simple, abstract background inferred from the tone of the reference image.
    No specific elements required; allow the model to interpret color and atmosphere freely.
    Background must NOT contain any characters, silhouettes, faces, bodies,
    or blurred forms derived from the subject.
  background_feel: clean_and_minimal
  allowed_elements: pure_color_gradients_light_abstract_shapes_only
  prohibit_subject_reuse_in_background: true

style:
  visual_style: >
    High-impact reveal-splash aesthetic with strong contrast between character and headline.
  text_effects: >
    Metallic, high-energy lettering with pronounced depth and perspective. No glow effects.
  character_rendering: >
    Extremely high-resolution rendering with sharp facial details, clean hair definition,
    precise edges, and crisp texture fidelity.
  background_style_rules: >
    Background must be purely non-figurative. No silhouettes, no blurred shapes,
    and no reused subject elements.
  ink_splash_rules: >
    Ink splash must be pure black only. No other colors, tinting, blending, or variation.

camera_lighting:
  camera_angle: from_reference
  lighting: >
    Enhance with dramatic key lighting and subtle rim highlights to emphasize the reveal.
  clarity: maximum_definition

colors:
  palette: >
    Background colors inferred from the reference image.
    Character name in metallic silver; announcement text in saturated yellow.
  mood: dramatic, heroic, high_energy

text:
  character_name: "{"キャラクター名" "キャラクター名"}"
  announcement_fixed: "{"アナウンス" "参戦!!"}"
  placement: opposite_side_of_character
  perspective: >
    Pronounced perspective: front surface larger, back tapered with visible extrusion.
  character_name_style: >
    Metallic silver, b

## 中文译文（源站提供）
分层:
  顺序:
    - text_layer
    - character_layer
    - background_layer
  严格: true

主体:
  描述: >
    精确保留参考图像中的主体，包括所有面部特征、颜色、发型、服装和比例。
    不得进行重新设计或重新诠释。
  构图: >
    半身构图（头部到上半身），使主体显得大而突出。
  完整性: full_identity_preservation
  细节级别: ultra_high_resolution
  微观细节: preserve_skin_texture_hair_edges_fabric_details

构图:
  长宽比: "16:9"
  布局: >
    主体位于一侧；标题文本位于另一侧。
  强调: >
    着重突出人物上半身和表情。

动作:
  描述: >
    最小程度的动作增强。保持参考姿势，同时增加微妙的戏剧性张力。

位置:
  描述: >
    根据参考图像的色调生成一个简单、抽象的背景。
    无需特定元素；允许模型自由诠释颜色和氛围。
    背景不得包含任何人物、剪影、面部、身体或源自主体的模糊形式。
  背景感受: clean_and_minimal
  允许元素: pure_color_gradients_light_abstract_shapes_only
  禁止背景重复使用主体: true

风格:
  视觉风格: >
    高冲击力的揭示式飞溅美学，人物与标题之间形成强烈对比。
  文本效果: >
    金属质感、高能量的字体，具有明显的深度和透视感。无发光效果。
  人物渲染: >
    极高分辨率渲染，具有清晰的面部细节、明确的头发定义、
    精确的边缘和清晰的纹理保真度。
  背景风格规则: >
    背景必须纯粹是非具象的。无剪影，无模糊形状，
    无重复使用的主体元素。
  墨迹飞溅规则: >
    墨迹飞溅必须纯黑色。无其他颜色、色调、混合或变化。

相机灯光:
  相机角度: from_reference
  灯光: >
    通过戏剧性的主光和微妙的边缘高光来增强，以强调揭示效果。
  清晰度: maximum_definition

颜色:
  调色板: >
    背景颜色根据参考图像推断。
    人物名称为金属银色；公告文本为饱和黄色。
  情绪: dramatic, heroic, high_energy

文本:
  人物名称: "{"character name" "Character Name"}"
  固定公告: "{"announcement" "Entering the Battle!!"}"
  位置: opposite_side_of_character
  透视: >
    明显的透视感：正面较大，背面逐渐变细并带有可见的挤压效果。
  人物名称样式: >
    金属银色，b

## 来源备注
- 源站作者：てんねん
- 源站 UUID：eQCQQlk9J9
- 源站分类：09_故事分镜角色设定

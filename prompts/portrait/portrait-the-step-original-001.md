---
id: "portrait-the-step-original-001"
title: "街头涂鸦文字潮服设计"
category: portrait
subcategory: "04_创意脑洞特效合成"
aesthetic: null
tags: ["夜景", "街拍", "少女", "潮酷", "文字", "街头", "城市", "霓虹"]
recommended_models: 
  - banana-pro
recommended_params:
  aspect_ratio: "2:3"
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
You are an image-editing agent.
Using the uploaded street photo, perform the following steps and use
the output of each step as the input for the next one.

STEP 1 – CLEAN PLATE BACKGROUND (REMOVE PERSON)

Remove the girl completely.

Inpaint the missing area with a realistic continuation of the night street:
extend the asphalt, sidewalk tiles, cars, shop fronts, neon signs, and people behind her.

The result must look like the original photo was taken with no person,
no silhouette, no cut-out artifacts, and no blur.

STEP 2 – TYPOGRAPHIC GARMENT ON SEPARATE LAYER (COLOR-MATCHED)

Return to the original photo with the girl.

Keep her skin, face, hair, pose, and lighting completely photorealistic.

Remove only the hoodie and shorts fabric, including seams, folds, wrinkles, shadows, and texture.

Text Garment Rules:

Replace the hoodie and shorts with a new garment made only of flat hand-drawn text:

[YOUR_TEXT]

Color Matching (important):

Automatically sample the dominant colors of the original hoodie (pink, red, or any hue).
→ Use only those sampled colors for all text on the hoodie area.

Automatically sample the dominant colors of the original shorts (yellow, blue, etc.).
→ Use only those sampled colors for all text on the shorts area.

Do not mix colors between clothing parts.

The sampled colors must be applied as flat, solid colors with no gradients.

Garment Fill Rules:

The letters must densely fill the shape of the hoodie and shorts.

All non-letter areas inside the garment must be pure chroma green (RGB 0,255,0).

Absolutely no black, gray, fabric texture, shading, or gradients may remain.

STEP 3 – COMPOSITE OVER THE CLEAN BACKGROUND

Key out all pure chroma green from STEP 2 → make it fully transparent.

Place the girl with the color-matched typographic garment onto the STEP 1 clean-plate background.

Align perfectly with the original camera.

Ensure that the night street shows naturally between the letters, with realistic detail.

Recalculate natural soft shadows from the girl onto the street surface if needed.

FINAL GOAL

A fully photorealistic street photo where:

The girl remains realistic,

Her clothing is entirely replaced with bold hand-drawn text in colors sampled from her original outfit,

The real night street background shows cleanly through all letter gaps,

No trace of the original garment or its shadows remains.

“Sample color regions precisely using localized averaging, not global averaging.
Apply text colors with zero shading and zero light falloff regardless of photo lighting.”

## 中文译文（源站提供）
您是一名图像编辑代理人。
使用上传的街景照片，执行以下步骤并使用
将每一步的输出作为下一步的输入。

步骤 1 – 清理盘子背景（移除人物）

彻底移除这个女孩。

用逼真的夜间街道景象填补缺失区域：
延伸她身后的沥青路面、人行道地砖、汽车、商店门面、霓虹灯招牌和人群。

最终效果必须看起来像是原照片中没有人一样。
没有轮廓，没有抠图痕迹，也没有模糊。

步骤 2 – 单独图层上的文字服装（颜色匹配）

回到最初与女孩的合影。

保持她的皮肤、脸部、头发、姿势和光线完全逼真。

只去除连帽衫和短裤的布料，包括接缝、褶皱、皱纹、阴影和纹理。

文字服装规则：

用一件完全由手绘平面文字制成的新衣服替换掉连帽衫和短裤：

[您的文本]

颜色匹配（重要）：

自动提取原连帽衫的主色调（粉色、红色或任何色调）。
→ 仅使用这些采样颜色作为连帽衫区域所有文字的颜色。

自动采样原始短裤的主要颜色（黄色、蓝色等）。
→ 短裤区域的所有文本仅使用这些采样颜色。

衣物不同部位的颜色不要混用。

所取样的颜色必须以纯色形式应用，不得使用渐变色。

服装填充规则：

字母必须密集地填满连帽衫和短裤的形状。

服装内所有非字母区域必须为纯色绿色（RGB 0,255,0）。

绝对不能保留任何黑色、灰色、织物纹理、阴影或渐变效果。

步骤 3 – 在干净的背景上进行合成

步骤 2 中所有纯绿色色度抠除 → 使其完全透明。

将穿着与背景颜色相匹配的印花服装的女孩放在步骤 1 的干净背景上。

与原装相机完美对齐。

确保夜晚的街道在字母之间自然呈现，细节逼真。

如有需要，重新计算女孩在街道表面上的自然柔和阴影。

最终目标

一张完全写实的街景照片，其中：

这个女孩依然保持着现实感。

她的衣服完全被替换成了醒目的手绘文字，颜色取自她原来的服装。

透过字母间的缝隙，清晰地展现出真实的夜街背景。

原衣物及其影子均未留下任何痕迹。

“使用局部平均法精确地对颜色区域进行采样，而不是使用全局平均法。
无论照片光线如何，都应用无阴影、无光衰减的文本颜色。

## 来源备注
- 源站作者：AI_GIRL_DESIGN
- 源站 UUID：dc8dd72e2e
- 源站分类：04_创意脑洞特效合成

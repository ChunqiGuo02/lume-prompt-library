---
id: misc-layout-outfit-the-0070
title: "时尚平铺穿搭展示图"
category: misc
subcategory: "08_图像分析信息拆解"
aesthetic: null
tags: ["俯拍", "平铺", "休闲", "运动", "女装", "浅紫", "灰色", "深灰"]
recommended_models: 
  - banana-pro
recommended_params:
  aspect_ratio: "3:2"
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
[OUTFIT_STYLE] = Use the outfit from the reference image | casual utilitarian womenswear | casual mens streetwear
[COMPOSITION_SCHEME] = seated-inspired angular layout | standing-inspired vertical layout | walking-inspired offset layout | dynamic diagonal layout | balance-inspired asymmetric layout | editorial flat-lay grid break | sculptural negative-space layout | yoga-inspired angular balance layout | athletic-inspired directional layout
[SURFACE] = clean matte studio backdrop | soft neutral paper surface | cool tone matte backdrop
[ACCESSORY_MODE] = outfit_integrated | decorative | none

Make a high resolution flat lay fashion image for editorial and catalog use.
Use a strict top down camera angle with a natural 50mm equivalent perspective and perfectly parallel framing.
Set the scene on [SURFACE] with no visible texture seams or edge shadows.

Show only clothing items and approved accessories placed on the surface.
Do not depict or imply any human body, body parts, limbs, skin, joints, or anatomy.
Do not include legs, hips, feet, knees, or any biological structure.

Arrange garments as a flat, uninhabited composition following [COMPOSITION_SCHEME].
Interpret [COMPOSITION_SCHEME] purely as a geometric layout logic, never as a body configuration.
Use angles, spacing, and directional alignment only to suggest balance and posture.

Keep every garment fully flat with zero internal volume.
Force all bottom garments including pants or leggings to remain collapsed, empty, and tension-free.
Do not stretch, contour, wrap, or compress fabric.
Represent bends only through sharp planar folds and angular breaks.
Prohibit smooth curves, rounded forms, seated volume, or body-fit deformation.

Allow folds and wrinkles only as gravity-driven surface creases.
Ensure clothing reads strictly as laid fabric, not worn, inhabited, or shaped by a body.

Select garments and accessories based on {"outfit style" "OUTFIT_STYLE"}.
If [ACCESSORY_MODE] is outfit_integrated, include only functionally worn items.
If [ACCESSORY_MODE] is decorative, allow accessories as independent flat objects.
If [ACCESSORY_MODE] is none, exclude all accessories entirely.

Use soft diffused daylight from above with gentle shadows directly beneath each item.
Keep spacing balanced with visible negative space around the composition.
Avoid mannequins, models, body silhouettes, stuffing, air filled shapes, extra items, text, logos, or branding.
Ensure clarity, accurate fabric texture, and a calm contemporary aesthetic.

## 中文译文（源站提供）
[OUTFIT_STYLE] = 使用参考图片中的服装 | 休闲实用女装 | 休闲男士街头服饰
[COMPOSITION_SCHEME] = 坐姿启发式角度布局 | 站姿启发式垂直布局 | 走姿启发式错位布局 | 动态对角线布局 | 平衡启发式不对称布局 | 编辑平铺网格突破 | 雕塑负空间布局 | 瑜伽启发式角度平衡布局 | 运动启发式定向布局
[SURFACE] = 干净的哑光摄影棚背景 | 柔软的中性纸面 | 冷色调哑光背景
[ACCESSORY_MODE] = 服装一体化 | 装饰性 | 无

制作一张高分辨率的平铺时尚图片，用于编辑和目录。
使用严格的俯视拍摄角度，具有自然的 50mm 等效透视和完美的平行构图。
将场景设置在 [SURFACE] 上，没有可见的纹理接缝或边缘阴影。

仅展示放置在表面上的服装物品和经批准的配饰。
不要描绘或暗示任何人体、身体部位、四肢、皮肤、关节或解剖结构。
不要包含腿、臀部、脚、膝盖或任何生物结构。

按照 [COMPOSITION_SCHEME] 将服装平铺排列，形成一个无人穿着的构图。
将 [COMPOSITION_SCHEME] 纯粹解释为几何布局逻辑，绝非身体配置。
仅使用角度、间距和方向对齐来暗示平衡和姿态。

保持每件服装完全平坦，内部没有体积。
强制所有下装，包括裤子或打底裤，保持扁平、空置且无张力。
不要拉伸、塑形、包裹或压缩面料。
仅通过锐利的平面折叠和角度断裂来表现弯曲。
禁止平滑曲线、圆形形态、坐姿体积或贴身变形。

只允许因重力产生的表面褶皱。
确保服装严格呈现为平铺面料，而不是被穿着、占据或身体塑形。

根据 {"outfit style" "[OUTFIT_STYLE]"} 选择服装和配饰。
如果 [ACCESSORY_MODE] 是 outfit_integrated，则仅包含功能性穿着物品。
如果 [ACCESSORY_MODE] 是 decorative，则允许配饰作为独立的平面物体。
如果 [ACCESSORY_MODE] 是 none，则完全排除所有配饰。

使用上方柔和的漫射日光，每件物品下方有轻柔的阴影。
保持间距平衡，构图周围有可见的负空间。
避免使用人体模型、模特、身体轮廓、填充物、充气形状、额外物品、文字、标志或品牌。
确保清晰度、准确的面料纹理和宁静的现代美学。

## 来源备注
- 源站作者：Aimi Kōda
- 源站 UUID：p1hLXu0sXd
- 源站分类：08_图像分析信息拆解

---
id: character-the-not-change-0165
title: "角色施放八角能量场特效"
category: character
subcategory: "10_卡通漫画电影角色"
aesthetic: null
tags: ["动漫", "双马尾", "科幻", "机械", "蓝瞳", "青色", "黑色", "黄色"]
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
language: mixed
created_at: 2026-05-30
version: "1.0.0"
related_to: []
---

# 正文 prompt
プロンプト公開
Nano Banana Proで遊ぼう
【フィールド全開！！】
⠀
両手を前方に伸ばしたポーズに
変えてキャラクターの前面に
八角形のエネルギーフィールドを
同心状に重ねて展開します。
⠀
ポーズ以外は参照画像を維持します。
⠀
先日『バリア展開プロンプト』
として紹介したものを改良して
1回で生成できるようにしました。
⠀
バリアよりもフィールドの方が
響きがカッコイイので名称変更。
⠀
プロンプトはYAML形式で
公式ガイドラインに準拠。
⠀
プロンプト（全文コピペしてください）：
task: "pose-and-barrier-vfx"
reference_image:
keep_original: true
subject:
keep_character_design: true
rules:
- do not change the character’s face, expression, hairstyle, anatomy, or proportions
- do not change outfit, colors, lineart, or art style
- do not change background, composition, shading, or lighting
- all modifications occur only through the defined steps
steps:
- step: "pose-adjustment"
action:
- extend both arms forward toward the viewer
- rotate both palms to face directly toward the camera
- fingers naturally spread
constraints:
forbidden:
- altering facial expression
- modifying outfit
- adding props or new items
- introducing glow or VFX
- step: "energy-barrier-vfx"
vfx:
type: "concentric-octagonal-barrier"
placement: "in front of both palms"
geometry:
shape: "regular octagon"
structure: "multiple concentric octagonal surfaces"
alignment:
- all surfaces share the same center
- all surfaces are parallel to the camera plane
- no curvature or spherical distortion
forbidden:
- outline-only shapes
- hollow frames
- hexagonal shapes
- domed or warped surfaces
surface:
fill: "center-to-edge radial gradient"
colors:
center: "white-yellow"
mid: "orange-gold"
edge: "transparent orange"
glow:
- strong center luminosity
- soft bloom
- refractive shimmer
opacity: "semi-transparent"
layering:
count: 8
direction: "stacked forward"
- step: "text-overlay"
text:
content: "Prompt by てんねん@ munou_ac"
position: "bottom-left"
font_color: "white"
font_size: "small"
opacity: "0.9"
composition:
camera:
angle: "frontal"
distance: "medium shot"
focus: "hands and barrier surface"
lighting:
keep_original: true
placement:
barrier_position: "centered between both palms"
size: "large frontal barrier"
カスタマイズ：
8カテゴリ57項目をカスタマイズ可能です。
例として「フィールド展開数」
デフォルトでは「8層」ですが
以下の部分の「8」を任意の
数字に変更することができます。
layering:
count: 8
direction: "stacked forward"
その他の項目については後ほど紹介します。
ぜひお気に入りのイラストで
「フィールド全開！！」してみてください。

## 中文译文（源站提供）
1. 将角色双手向前伸展的姿势保持住，  
2. 在角色前方同心地叠加并展开一个八边形的能量场。  
3. 除这个姿势外，其他部分的画面应保持参考图片的样式不变。

## 来源备注
- 源站作者：てんねん
- 源站 UUID：56b0d1f6d9
- 源站分类：10_卡通漫画电影角色

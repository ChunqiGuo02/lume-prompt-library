---
id: "portrait-the-face-title-001"
title: "动漫角色横幅设计工具"
category: portrait
subcategory: "04_创意脑洞特效合成"
aesthetic: null
tags: ["二次元", "日系", "动漫", "短发", "蓝瞳", "水手服", "清水", "腮红"]
recommended_models: 
  - banana-pro
recommended_params:
  aspect_ratio: null
  quality: null
  style_strength: null
sample_outputs: []
quality_tier: B
author: "ChunqiGuo02"
source: "Leader Prompt Gallery (https://www.leaderai.top/mid-api/lab/image_prompt/index.html)"
language: mixed
created_at: 2026-05-30
version: "1.0.0"
related_to: ["portrait-the-face-title-002"]
---

# 正文 prompt
# ===== USER CONTROLS =====
title_text: "{"表示文字列" "<<YOUR_TEXT>>"}"
title_style_preset: "{"ロゴデザインプリセット" "cool"}"  # cool, cute, cool_cute, luxury, pop, cyber, minimal, retro, kawaii
face_zoom: "{"ズームのon/off" "off"}"            # off, on

subject: >
  Create a 3:1 wide banner using the provided reference image content.
  The primary face must be centered inside an invisible safe zone (not drawn),
  and a title logo (derived from title_text + title_style_preset) must be placed inside the same safe zone.

composition: >
  Aspect ratio 3:1.
  Invisible safe zone (DO NOT draw it):
  - Left margin: 15% of width
  - Right margin: 15% of width
  - Top margin: 16% of height
  - Bottom margin: 16% of height
  Keep the entire face AND the entire title logo fully inside this safe zone.
  Background may extend to the edges.

action: >
  Place the reference image content with maximum fidelity.
  Auto-crop/scale/reposition to fit a 3:1 banner with no stretching.
  Detect the primary face (if multiple faces, pick the largest/most prominent).
  Center the primary face within the safe zone both horizontally and vertically.
  Never crop off the face/eyes; keep the full face comfortably inside the safe zone (not near edges).

  Face zoom behavior:
  - If face_zoom is OFF: keep the original framing as much as possible while still centering the face in the safe zone.
  - If face_zoom is ON: zoom/crop to a bust-up portrait centered on the face
    (head and shoulders visible; include upper chest; do not crop the top of the head or chin; keep facial features prominent).

  Create negative space inside the safe zone for the title logo by adjusting crop/reposition/out

## 中文译文（源站提供）
# ===== 用户控制 =====
title_text: "{"显示字符串" "<<你的文本>>"}"
title_style_preset: "{"标志设计预设" "cool"}" # cool, cute, cool_cute, luxury, pop, cyber, minimal, retro, kawaii
face_zoom: "{"面部缩放开/关" "off"}"            # off, on

subject: >
  使用提供的参考图像内容创建一个 3:1 的宽幅横幅。
  主要面部必须居中于一个不可见的“安全区”（不绘制），
  并且标题标志（由 title_text + title_style_preset 生成）必须放置在同一个安全区内。

composition: >
  长宽比 3:1。
  不可见的安全区（请勿绘制）：
  - 左边距：宽度的 15%
  - 右边距：宽度的 15%
  - 上边距：高度的 16%
  - 下边距：高度的 16%
  将整个面部和整个标题标志完全保持在此安全区内。
  背景可以延伸到边缘。

action: >
  以最高保真度放置参考图像内容。
  自动裁剪/缩放/重新定位以适应 3:1 的横幅，不拉伸。
  检测主要面部（如果有多张面部，选择最大/最突出的）。
  将主要面部在安全区内水平和垂直居中。
  切勿裁剪面部/眼睛；将整个面部舒适地保持在安全区内（不要靠近边缘）。

  面部缩放行为：
  - 如果 face_zoom 为 OFF：尽可能保持原始构图，同时将面部居中于安全区。
  - 如果 face_zoom 为 ON：缩放/裁剪为以面部为中心的半身像
    （头部和肩膀可见；包括上半身；不要裁剪头顶或下巴；保持面部特征突出）。

  通过调整裁剪/重新定位/输出，在安全区内为标题标志创建负空间。

## 来源备注
- 源站作者：てんねん
- 源站 UUID：BsqUO5nuSG
- 源站分类：04_创意脑洞特效合成

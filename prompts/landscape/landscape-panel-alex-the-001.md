---
id: "landscape-panel-alex-the-001"
title: "骑士在便利店的搞笑日常"
category: landscape
subcategory: "06_图文排版视觉传达"
aesthetic: japanese-zen-garden
tags: ["四格", "漫画", "日式", "复古", "剧画", "棕调", "手绘", "暗黑"]
recommended_models: 
  - banana-pro
recommended_params:
  aspect_ratio: "9:16"
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
---
generation_parameters:
  aspect_ratio: "1:3"

manga_page_generation_prompt:
  layout_structure:
    type: Full page vertical 4-panel comic strip (yon-koma layout).
    arrangement: Four roughly square panels stacked perfectly vertically from top to bottom.
    spacing: Clear white gutters (margins) separating each of the four panels.
    title_area: (Optional) A small space at the very top for a title.
    overall_aesthetic: Printed comic magazine page look, slightly textured paper.

  art_style:
    description: {"style_desc" "1970s-80s Japanese Gekiga style. Gritty, heavy shadows, serious tone."}
    color_palette: Desaturated, heavy oil-painting colors, seppia tones, dark atmosphere.
    texture: Rough ink lines, analog brushwork, dramatic cross-hatching shadows, ink bleed effect.

  manga_elements:
    speech_bubbles:
      - Presence: Multiple hand-drawn speech bubbles (fukidashi) within panel boundaries.
        Style: Rough, organic outlines, containing placeholder Japanese marks.
    sound_effects:
      - Presence: Bold Katakana sound effects (onomatopoeia) integrated into the art.
        Style: Rough calligraphy (e.g., "ドォォォン", "ゴゴゴゴ").

  panel_content_sequence:
    panel_1_top (起):
      - Scene: [Wide angle] Knight Alex (grim face, full armor) standing stiffly behind a modern convenience store counter.
      - Text/FX: Speech bubble with formal greeting. Small "ウィーン" (door sound).
    panel_2_upper_mid (承):
      - Scene: A scared salaryman customer shrinking away. Alex glaring intensely, leaning forward over the counter.
      - Text/FX: Customer's scared bubble. Large "ゴゴゴゴ" (menacing FX) around Alex.
    panel_3_lower_mid (転):
      - Scene: [Dramatic close-up] Alex pulling out his giant claymore sword just to point at a bento box.
      - Text/FX: Spiky shout bubble "貴様の糧はこれか!!". Intense "ジャキィィン！" (sword FX).
    panel_4_bottom (結):
      - Scene: The exhausted store manager (looser art style) smacking Alex's head with a rolled magazine. Alex looks comically dejected.
      - Text/FX: Manager's angry bubble "剣をしまうんだよ！". Sharp "スパン！" (slap FX).

negative_prompt:
  - single illustration, square image, landscape orientation
  - panels arranged horizontally, grid layout (2x2)
  - modern clean digital art, anime style
  - bright cheerful colors, no shadows

## 中文译文（源站提供）
generation_parameters:
  aspect_ratio: "1:3"

manga_page_generation_prompt:
  layout_structure:
    type: 整页垂直四格漫画（四格漫画布局）。
    arrangement: 四个大致呈正方形的画格从上到下完美垂直堆叠。
    spacing: 每个画格之间有清晰的白色分隔线。
    title_area: （可选）顶部留有小空间用于标题。
    overall_aesthetic: 印刷漫画杂志页面外观，纸张略带纹理。

  art_style:
    description: {"style_desc_en" "20 世纪 70-80 年代日本剧画风格：粗犷、重阴影、严肃的基调。"}
    color_palette: 去饱和、厚重的油画色彩、棕褐色调、黑暗氛围。
    texture: 粗糙的墨线、模拟笔触、戏剧性的交叉影线和墨水渗化效果。

  manga_elements:
    speech_bubbles:
      - Presence: 画格内有多个手绘对话气泡（fukidashi）。
        Style: 粗糙、有机的轮廓，内含占位符日文标记。
    sound_effects:
      - Presence: 融入画面中的粗体片假名音效。
        Style: 粗犷的书法（例如，“ドォォォン”、“ゴゴゴゴ”）。

  panel_content_sequence:
    panel_1_top (Intro):
      - Scene: [广角] 骑士亚历克斯（面容严峻，身着全套盔甲）僵硬地站在一家现代便利店的柜台后面。
      - Text/FX: 对话气泡中是正式的问候语。小小的“ウィーン”（开门声）。
    panel_2_upper_mid (Development):
      - Scene: 一位受惊的上班族顾客畏缩不前，亚历克斯凶狠地瞪着他，身体前倾越过柜台。
      - Text/FX: 顾客受惊的气泡。亚历克斯周围有巨大的“ゴゴゴゴ”（威胁音效）。
    panel_3_lower_mid (Twist):
      - Scene: [戏剧性特写] 亚历克斯拔出他的巨型阔剑，只是为了指向一个便当盒。
      - Text/FX: 尖刺状的喊叫气泡“貴様の糧はこれか!!”和激烈的“ジャキィィン！”（拔剑音效）。
    panel_4_bottom (Conclusion):
      - Scene: 精疲力尽的店长（画风更随意）用卷起来的杂志拍打亚历克斯的头。亚历克斯看起来滑稽地沮丧。
      - Text/FX: 店长愤怒的气泡“剣をしまうんだよ！”和清脆的“スパン！”（拍打音效）。

negative_prompt:
  - 单幅插画、方形图像、横向构图
  - 画格水平排列成 2x2 网格
  - 现代干净的数字艺术、动漫风格
  - 明亮欢快的色彩、无阴影

## 来源备注
- 源站作者：いにしえ@AI Creator｜Will Oldgram
- 源站 UUID：5QBLuLQMpn
- 源站分类：06_图文排版视觉传达

---
id: graphic-text-calendar-teal-0012
title: "2026年2月冬季阿尔卑斯山风景日历海报设计"
category: graphic
subcategory: "06_图文排版视觉传达"
aesthetic: flat-illustration
tags: ["日历", "2026", "二月", "冬季", "雪山", "森林", "现代", "简约"]
recommended_models: 
  - banana-pro
recommended_params:
  aspect_ratio: "4:3"
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
meta:
  title: "CALENDAR 2026 — {"month name" "FEBRUARY"} (Winter Alpine / Flat Teal Splitter / Sundays Red)"
  purpose: "image_generation_prompt"
  language_in_image: "English"
  output: "single calendar poster"
  quality: "commercial, crisp typography, no artifacts"
  strict_text_and_dates: true

canvas:
  size: { width: 2048, height: 1536 }
  aspect: "4:3 landscape"
  base_bg: "#FFFFFF"
  safe_margin_pct: 6

style:
  keywords:
    - "premium modern minimal"
    - "corporate clean"
    - "cool winter calm"
    - "high legibility"
  palette:
    deep_teal: "#083D57"
    teal: "#0E7890"
    mid_teal: "#6A90A0"
    navy: "#0B2433"
    text_dark: "#2C2F33"
    border_light: "#D7DDE2"
    icy: "#EAF2F6"
    saturday_blue: "#1F7FA0"
    sunday_red: "#C93B3B"
    holiday_red: "#C93B3B"
  typography:
    font: "Noto Sans (fallback: Helvetica/Arial)"
    rules:
      - "no warping, no jitter, no random glyphs"
      - "high anti-aliasing + optical kerning"

composition:
  layout:
    - "Left ~52%: winter alpine photo inside a large smooth curved mask"
    - "Right ~48%: clean white negative space with month + calendar card"
    - "Bottom-left: deep teal layered wave band hosting 'CALENDAR 2026'"
  photo_left:
    subject:
      - "snowy mountains, conifer forest, calm valley, overcast sky"
      - "no people, no buildings, no animals, no text"
    grading: "cool-neutral, slightly desaturated, moderate contrast, preserve snow detail"
    overlay: "very subtle snow/bokeh particles mainly over photo area (keep right area clean)"
  divider_splitter:
    shape: "thin smooth curved band near the boundary of photo/white"
    thickness: "5–7% of canvas height"
    fill_gradient: { from: "#083D57", to: "#0E7890" }
    optional_rim:
      enabled: true
      thickness: "1–2% of canvas height"
      fill_gradient: { from: "#EAF2F6", to: "#FFFFFF" }
    flat_rules:
      - "no 3D, no bevel, no inner shadow, no glass, no facets, no specular"
  bottom_waves:
    coverage: "bottom 22–28% of canvas"
    layers:
      - { gradient: { from: "#083D57", to: "#0B2433" }, opacity: 1.0 }
      - { gradient: { from: "#0E7890", to: "#6A90A0" }, opacity: 0.55 }
      - { gradient: { from: "#EAF2F6", to: "#FFFFFF" }, opacity: 0.45 }
    rule: "flat premium (no facets/bevel), minimal noise only to prevent banding"

text_blocks:
  month_number:
    text: "2"
    position: "top-right of right area"
    style: { weight: 800, color: "#0E7890", size: "very large" }
  month_label:
    text: "FEBRUARY"
    position: "upper-center of right area"
    style: { weight: 800, color: "#2C2F33", size: "large", tracking: "slightly wide" }
  footer_left:
    position: "bottom-left on teal wave band"
    lines:
      - { text: "CALENDAR", style: { weight: 700, color: "#FFFFFF", size: "medium" } }
      - { text: "2026",     style: { weight: 900, color: "#FFFFFF", size: "very large" } }
    alignment: "left"

calendar_card:
  placement: "center-right"

## 中文译文（源站提供）
meta:
  title: "2026 年日历 — {"month name" "FEBRUARY"} (冬季高山 / 平面青色分割器 / 周日红色)"
  purpose: "image_generation_prompt"
  language_in_image: "English"
  output: "single calendar poster"
  quality: "commercial, crisp typography, no artifacts"
  strict_text_and_dates: true

canvas:
  size: { width: 2048, height: 1536 }
  aspect: "4:3 landscape"
  base_bg: "#FFFFFF"
  safe_margin_pct: 6

style:
  keywords:
    - "高端现代简约"
    - "商务简洁"
    - "酷冬平静"
    - "高易读性"
  palette:
    deep_teal: "#083D57"
    teal: "#0E7890"
    mid_teal: "#6A90A0"
    navy: "#0B2433"
    text_dark: "#2C2F33"
    border_light: "#D7DDE2"
    icy: "#EAF2F6"
    saturday_blue: "#1F7FA0"
    sunday_red: "#C93B3B"
    holiday_red: "#C93B3B"
  typography:
    font: "Noto Sans (fallback: Helvetica/Arial)"
    rules:
      - "无扭曲、无抖动、无随机字形"
      - "高抗锯齿 + 光学字距调整"

composition:
  layout:
    - "左侧约 52%：大型平滑曲线蒙版内的冬季高山照片"
    - "右侧约 48%：带有月份 + 日历卡的干净白色留白区域"
    - "左下角：深青色分层波浪带，承载“CALENDAR 2026”"
  photo_left:
    subject:
      - "雪山、针叶林、平静山谷、阴天"
      - "无人、无建筑、无动物、无文字"
    grading: "冷中性、轻微去饱和、适度对比度、保留雪的细节"
    overlay: "非常细微的雪花/散景颗粒，主要覆盖照片区域（保持右侧区域干净）"
  divider_splitter:
    shape: "照片/白色边界附近纤细平滑的曲线带"
    thickness: "画布高度的 5–7%"
    fill_gradient: { from: "#083D57", to: "#0E7890" }
    optional_rim:
      enabled: true
      thickness: "画布高度的 1–2%"
      fill_gradient: { from: "#EAF2F6", to: "#FFFFFF" }
    flat_rules:
      - "无 3D、无斜角、无内阴影、无玻璃、无刻面、无高光"
  bottom_waves:
    coverage: "画布底部 22–28%"
    layers:
      - { gradient: { from: "#083D57", to: "#0B2433" }, opacity: 1.0 }
      - { gradient: { from: "#0E7890", to: "#6A90A0" }, opacity: 0.55 }
      - { gradient: { from: "#EAF2F6", to: "#FFFFFF" }, opacity: 0.45 }
    rule: "平面高级（无刻面/斜角），仅为防止色带而添加少量噪点"

text_blocks:
  month_number:
    text: "2"
    position: "右侧区域的右上角"
    style: { weight: 800, color: "#0E7890", size: "very large" }
  month_label:
    text: "FEBRUARY"
    position: "右侧区域的上中部"
    style: { weight: 800, color: "#2C2F33", size: "large", tracking: "slightly wide" }
  footer_left:
    position: "青色波浪带的左下角"
    lines:
      - { text: "CALENDAR", style: { weight: 700, color: "#FFFFFF", size: "medium" } }
      - { text: "2026",     style: { weight: 900, color: "#FFFFFF", size: "very large" } }
    alignment: "left"

calendar_card:
  placement: "居中偏右"

## 来源备注
- 源站作者：いにしえ@AI Creator｜Will Oldgram
- 源站 UUID：heVTphVM2t
- 源站分类：06_图文排版视觉传达

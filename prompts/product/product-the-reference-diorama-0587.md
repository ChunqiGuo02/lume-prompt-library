---
id: product-the-reference-diorama-0587
title: "电影经典场景微缩模型还原_1"
category: product
subcategory: "12_手工玩具手办"
aesthetic: null
tags: ["黄色", "手办", "模型", "微缩", "场景", "武士刀", "木质", "插花"]
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
{
 "reference_images": {
 "scene_reference": "ATTACHED_IMAGE",
 "usage_rule": "Use this image as the sole and exact source for scene layout, object placement, and composition. Do not reinterpret or replace the scene."
 },

 "concept": {
 "type": "miniature diorama reconstruction",
 "intent": "Rebuild the attached scene as a clean, collectible-scale diorama while preserving the original spatial relationships"
 },

 "environment": {
 "scale": "tabletop miniature",
 "ground": {
 "type": "sculpted base",
 "behavior": "supports all objects naturally without enclosure",
 "edges": "clean, minimal, slightly beveled"
 },
 "background": {
 "type": "seamless studio backdrop",
 "color": "pure white",
 "constraint": "no environment beyond the diorama base"
 }
 },

 "objects_and_elements": {
 "layout_rule": "All objects must remain in the same relative positions as in the reference image",
 "primary_elements": "exact vehicles, structures, props, and terrain visible in the reference",
 "detail_handling": "simplified but faithful miniature proportions",
 "characters": {
 "presence": "only if present in the reference",
 "style": "miniature figurines, no facial realism"
 }
 },

 "composition": {
 "view": "isometric or slightly elevated 3/4 perspective",
 "framing": "entire diorama visible, centered",
 "cropping": "no zoom, no cinematic crop"
 },

 "camera": {
 "lens_equivalent": "35mm–50mm",
 "perspective": "miniature realism",
 "distortion": "none"
 },

 "lighting": {
 "type": "soft studio lighting",
 "direction": "overhead and slightly angled",
 "shadows": "subtle contact shadows only beneath objects",
 "avoid": [
 "dramatic lighting",
 "spotlights",
 "cinematic contrast"
 ]
 },

 "materials_and_style": {
 "surface_finish": "smooth, matte or lightly satin",
 "material_quality": "high-quality scale model materials",
 "aesthetic": "clean, modern, premium diorama"
 },

 "quality_controls": {
 "image_clarity": "ultra-clean",
 "grain": "none",
 "noise": "none",
 "motion_blur": "none"
 },

 "negative_prompts": [
 "glass case",
 "display box",
 "museum enclosure",
 "transparent cube",
 "protective casing",
 "reflections on glass",
 "labels or plaques",
 "text overlays",
 "busy background",
 "cinematic blur"
 ]
}

## 中文译文（源站提供）
```json
{
 "reference_images": {
 "scene_reference": "ATTACHED_IMAGE",
 "usage_rule": "将此图像作为场景布局、物体放置和构图的唯一且精确的来源。请勿重新解读或替换场景。"
 },

 "concept": {
 "type": "微缩立体模型重建",
 "intent": "将所附场景重建为干净、收藏级别的立体模型，同时保留原始的空间关系"
 },

 "environment": {
 "scale": "桌面微缩模型",
 "ground": {
 "type": "雕塑底座",
 "behavior": "自然地支撑所有物体，不进行封闭",
 "edges": "干净、极简、略带斜角"
 },
 "background": {
 "type": "无缝影棚背景",
 "color": "纯白色",
 "constraint": "立体模型底座之外无其他环境"
 }
 },

 "objects_and_elements": {
 "layout_rule": "所有物体必须保持与参考图像中相同的相对位置",
 "primary_elements": "参考图像中可见的精确车辆、结构、道具和地形",
 "detail_handling": "简化但忠实的微缩比例",
 "characters": {
 "presence": "仅当参考图像中存在时",
 "style": "微缩人偶，无面部写实感"
 }
 },

 "composition": {
 "view": "等距或略微抬高的 3/4 视角",
 "framing": "整个立体模型可见，居中",
 "cropping": "无缩放，无电影式裁剪"
 },

 "camera": {
 "lens_equivalent": "35mm–50mm",
 "perspective": "微缩写实主义",
 "distortion": "无"
 },

 "lighting": {
 "type": "柔和影棚灯光",
 "direction": "顶光并略带角度",
 "shadows": "仅在物体下方有微妙的接触阴影",
 "avoid": [
 "戏剧性灯光",
 "聚光灯",
 "电影式对比度"
 ]
 },

 "materials_and_style": {
 "surface_finish": "光滑、哑光或轻微缎面",
 "material_quality": "高品质比例模型材料",
 "aesthetic": "干净、现代、优质立体模型"
 },

 "quality_controls": {
 "image_clarity": "超清晰",
 "grain": "无",
 "noise": "无",
 "motion_blur": "无"
 },

 "negative_prompts": [
 "玻璃罩",
 "展示盒",
 "博物馆展柜",
 "透明立方体",
 "保护罩",
 "玻璃上的反光",
 "标签或铭牌",
 "文字叠加",
 "杂乱背景",
 "电影式模糊"
 ]
}
```

## 来源备注
- 源站作者：Ege
- 源站 UUID：A0HndoJivT
- 源站分类：12_手工玩具手办

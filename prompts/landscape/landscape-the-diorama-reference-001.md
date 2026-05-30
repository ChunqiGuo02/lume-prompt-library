---
id: "landscape-the-diorama-reference-001"
title: "龙目岛微缩景观艺术家"
category: landscape
subcategory: "12_手工玩具手办"
aesthetic: null
tags: ["微缩", "模型", "手工艺", "超写实", "赛道", "火山", "湖泊", "清真寺"]
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
The world is small when you hold it in your hands. 🌍
Detailed diorama art bringing the map to life.
Google Gemini ai Nano Banana 3 Pro.
Prompt ⤵️
{
"version": "1.0",
"meta": {
"title": "Lombok diorama artisan — hyper-realistic wide-lens photo",
"ratio": "3:4",
"resolution": { "width": 6144, "height": 8192 },
"target_quality": "8K hyper-realistic cinematic",
"seed": "random",
"notes": "Replace reference_images[0] with the user's reference-photo ID or URL to match face & hair."
},
"reference_images": [
"<reference_image_id_or_url_here>"
],
"generation_settings": {
"sampler": "DDIM",
"steps": 60,
"cfg_scale": 9.5,
"denoising_strength": 0.65,
"vram_optimization": true
},
"prompt": {
"positive": "Hyper-realistic, ultra-detailed wide-lens photograph from a high top-angle viewpoint, razor-sharp focus, cinematic lighting, 8K. An Indonesian woman artisan (face and hair matching the provided reference image) meticulously working on a massive 2x2 meter diorama shaped precisely like Lombok Island. The miniature geography must match the real map exactly: a towering, textured Mount Rinjani with realistic rock and vegetation, the vivid turquoise Segara Anak Lake sitting inside the caldera, and the accurately shaped Mandalika Circuit track with small, dynamic MotoGP riders racing. The track includes clearly readable tiny text “Sircuit Mandalika” on a track-side banner. Along the coastline show soft white sands of Senggigi Beach and a detailed miniature speedboat floating in the ocean. Prominently display the Lombok Islamic Center rendered with correct domes, arches, and golden architectural details matching the real building. The artisan is young, wearing a white shirt with visible paint smudges, using precision tweezers to place a small tree; various diorama tools and materials (glue, sculpting tools, paint jars, brushes, measuring tape, cutting mat, small LED work lamp) are arranged beside her. Capture micro-textures: paint brush bristles, tiny printed signage, scaled asphalt texture on the track, shimmering water surface in the sea and Segara Anak. Colour palette realistic; depth of field shallow on artisan's hands but whole diorama sharp enough to read miniature text. Natural skin tones, no exaggeration. Composition cinematic, dramatic rim lighting and soft fill, subtle film grain, photoreal rendering, masterpiece-level detail.",
"extra_instructions": "Ensure scale consistency across miniatures (2x2 meter diorama). Match the woman's face & hair to the reference image exactly. Emphasize readable micro-text “Sircuit Mandalika” on the banner and clearly legible architectural details of Lombok Islamic Center."
},
"negative_prompt": "blurry, out-of-focus, distorted face, mismatched hair, incorrect island shape, wrong geography, unreadable text, misshapen buildings, low-resolution textures, oversaturated unnatural colors, extra limbs, unnatural anatomy, cartoonish, painterly brushstrokes, watermark, logo, text artifacts, duplicate objects, bad camera perspective, tilted horizon, oversharpening halo, low detail",
"outputs": {
"count": 4,
"variations": {
"enable_crops": true,
"minor_variations": true
},
"postprocessing": {
"sharpening": "medium",
"denoise_after": true,
"color_grading": "cinematic natural",
"exif": {
"camera": "wide-angle DSLR look",
"lens": "24mm equivalent",
"aperture": "f/4 (shallow DOF on hands, broad sharpness on diorama)"
}
}
},
"usage_hint": "If you want the artisan to match the reference precisely, supply the reference image ID/URL. If you prefer the track text spelled differently (e.g., 'Circuit Mandalika'), update the prompt text accordingly."
}

## 中文译文（源站提供）
```json
{
  "version": "1.0",
  "meta": {
    "title": "龙目岛立体模型工匠——超写实的广角照片",
    "ratio": "3:4",
    "resolution": { "width": 6144, "height": 8192 },
    "target_quality": "8K超写实电影级画质",
    "seed": "random",

## 来源备注
- 源站作者：Shreya Yadav
- 源站 UUID：bb5ac822e3
- 源站分类：12_手工玩具手办

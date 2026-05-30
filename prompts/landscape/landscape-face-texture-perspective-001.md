---
id: "landscape-face-texture-perspective-001"
title: "街头时尚大片多视角预设"
category: landscape
subcategory: "05_人物肖像与写实摄影"
aesthetic: industrial-loft
tags: ["街头", "时尚", "橙色", "拼贴", "广角", "透视", "都市", "女性"]
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
Nano banana Pro on the Gemini app, my prompt is much better than most of the available prompts for this type of image for a technical reason 😉😉😉,  I love all the people who did YAMIL, it is very popular in  Japan and China because it is easy to read and write 🫶
{
"meta_control": {
"generation_mode": "multi_panel_consistent",
"priority_stack": ["identity_lock", "perspective_physics", "material_fidelity", "environmental_coherence"],
"quality_target": "editorial_print_ready"
},
"intent": {
"primary": "High-fashion streetwear editorial with extreme wide-angle perspective study",
"secondary": "Technical demonstration of foreshortening and forced perspective",
"publication_context": "Double-page spread, fashion magazine collage layout"
},
"frame": {
"aspect_ratio": "3:4",
"layout": {
"type": "2x2 grid collage",
"gutter_width": "2px white or seamless",
"panel_uniformity": "identical dimensions per panel"
}
},
"subject": {
"type": "Human female fashion model",
"identity_lock": {
"enforcement_level": "strict",
"anchor_features": ["face_geometry", "skin_tone", "body_proportions", "hair_style"]
},
"biometrics": {
"age_presentation": "22-26",
"height_cm": 175,
"build": "Slender athletic, model proportions",
"ethnicity_presentation": "Northern European features"
},
"facial_signature": {
"structure": "Angular diamond face, high cheekbones, defined jawline",
"eyes": "Sharp almond, steel grey, graphic black winged liner extending 8mm",
"nose": "Refined, straight, small silver hoop piercing on left nostril",
"lips": "Natural shape, matte nude-pink",
"skin": "Fair, visible pores and natural texture, subtle peach fuzz, tiny freckle cluster left cheekbone",
"expression_default": "Cool confidence, intense direct eye contact, composed"
},
"hair": {
"style": "Platinum blonde straight bob, blunt bangs ending at eyebrows",
"texture": "Silky, light-catching, individual strand definition",
"behavior": "Natural movement responding to pose changes"
},
"wardrobe": {
"jacket": {
"item": "Oversized bomber jacket",
"material": "Ripstop nylon, high gloss",
"color": "Neon orange (vivid, saturated)",
"state": "Unzipped, hanging open",
"light_behavior": "Sharp specular highlights, visible weave texture"
},
"top": {
"item": "Crop top",
"material": "Black synthetic mesh, diamond pattern",
"fit": "Tight, stretched across torso",
"transparency": "Semi-sheer, skin visible through weave"
},
"pants": {
"item": "Tactical cargo pants",
"material": "Heavy cotton twill, matte",
"color": "Charcoal grey",
"details": "Multiple pockets, silver buckles, black nylon straps, baggy fit"
},
"footwear": {
"item": "Platform sneakers",
"color": "White, chunky sole",
"condition": "Clean but worn, realistic sole texture"
}
},
"accessories": {
"neck": "Layered heavy silver Cuban link chains, 3 chains varying thickness",
"hands": "Silver rings on index and middle fingers both hands"
}
},
"panels": [
{
"id": 1,
"position": "top-left",
"concept": "Extreme low-angle sneaker perspective",
"camera": {
"height_cm": 10,
"distance_cm": 35,
"angle": "Looking up at 75 degrees"
},
"composition": {
"foreground_dominant": "Right sneaker sole filling 40% of frame, laces in sharp focus",
"midground": "Legs receding upward",
"background": "Torso and face small in upper frame, looking down at camera"
},
"subject_pose": "Standing, weight back, right foot extended toward lens",
"expression": "Looking down, slight smirk"
},
{
"id": 2,
"position": "top-right",
"concept": "Bird's-eye reaching hand",
"camera": {
"height_cm": 200,
"distance_cm": 60,
"angle": "Looking straight down"
},
"composition": {
"foreground_dominant": "Hand reaching up, fingers spread, appearing oversized",
"midground": "Face looking up",
"background": "Body compressed, pavement visible around edges"
},
"subject_pose": "Deep squat, one arm reaching directly up to camera",
"expression": "Intense upward eye contact, serious"
},
{
"id": 3,
"position": "bottom-left",
"concept": "Fisheye face extreme close-up",
"camera": {
"height_cm": 150,
"distance_cm": 20,
"angle": "Dutch tilt 20 degrees"
},
"composition": {
"foreground_dominant": "Face filling 70% of frame, nose and eyes enlarged by proximity",
"background": "Environment warping and curving at edges, slight motion blur"
},
"subject_pose": "Leaning face toward camera, shoulders back",
"expression": "Piercing eye contact, one eyebrow slightly raised, confident"
},
{
"id": 4,
"position": "bottom-right",
"concept": "Seated knee-forward perspective",
"camera": {
"height_cm": 40,
"distance_cm": 50,
"angle": "Slight upward looking"
},
"composition": {
"foreground_dominant": "Knees and shins large in frame, cargo pant texture detailed",
"midground": "Torso leaning forward",
"background": "Face in upper third, hands resting on knees"
},
"subject_pose": "Seated on pavement, knees up, leaning toward camera",
"expression": "Relaxed confidence, soft direct gaze"
}
],
"environment": {
"location_type": "Urban industrial alleyway",
"surfaces": {
"ground": "Weathered concrete pavement, cracks, texture, subtle debris",
"walls": "Concrete and brick, metallic rolling security doors, faded graffiti tags"
},
"atmosphere": "Gritty urban, authentic street context",
"consistency_rule": "Identical environment visible across all four panels"
},
"lighting": {
"source": "Natural afternoon sunlight",
"quality": "Hard directional light",
"direction": "High side-light, approximately 45 degrees from left",
"shadow_character": "Sharp-edged, deep shadows",
"color_temperature_kelvin": 5500,
"fill": "Minimal, ambient bounce from pavement only",
"specular_behavior": "Strong highlights on nylon jacket, chain jewelry, sneaker rubber"
},
"camera_global": {
"lens": "Ultra-wide rectilinear, 12-14mm equivalent",
"aperture": "f/8",
"depth_of_field": "Deep, foreground to background sharp",
"distortion": "Barrel distortion, edge stretching, exaggerated foreshortening",
"sensor": "Full-frame, high resolution"
},
"post_processing": {
"color_grade": {
"contrast": "High",
"saturation_subject": "Vivid, especially neon orange jacket",
"saturation_background": "Slightly desaturated, muted",
"blacks": "Deep, crushed slightly",
"highlights": "Preserved, not blown"
},
"texture": "8K resolution equivalent, visible skin texture, fabric weave, material detail",
"film_treatment": "Subtle RAW photo grain, not excessive"
},
"negative_constraints": {
"style_rejection": ["illustration", "anime", "cartoon", "painting", "drawing", "3d render", "CGI", "digital art", "AI art look", "smooth skin filter", "beauty filter"],
"anatomical_rejection": ["extra fingers", "missing fingers", "fused fingers", "extra limbs", "anatomical errors", "broken joints", "impossible body positions"],
"consistency_rejection": ["face change between panels", "different person", "clothing change", "hair color change", "inconsistent skin tone", "different lighting between panels"],
"technical_rejection": ["blur", "low resolution", "jpeg artifacts", "noise", "watermark", "text", "logo", "signature"],
"lens_rejection": ["telephoto compression", "portrait lens look", "85mm aesthetic", "no foreshortening", "flat perspective"]
}
}

## 中文译文（源站提供）
```json
{
  "meta_control": {
    "generation_mode": "multi_panel_consistent",
    "priority_stack": ["identity_lock", "perspective_physics", "material_f

## 来源备注
- 源站作者：Emily
- 源站 UUID：66e0bb2f6a
- 源站分类：05_人物肖像与写实摄影

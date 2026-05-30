---
id: "portrait-hair-macro-eyes-001"
title: "银发少女柔光特写"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["人像", "微距", "写实", "柔焦", "灰发", "短发", "浅景深", "温柔"]
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
Gemini Nano Banana 3.0
Prompt:
{
"pipeline_configuration": {
"job_type": "img2img_transformation",
"meta_tags": ["macro", "beauty", "soft_focus", "realism"],
"input_reference_handling": {
"preservation_rules": {
"facial_identity": {
"strength": 1.0,
"instruction": "Strict 100% preservation of facial geometry and features.",
"technique": "FaceID / IP-Adapter Strong"
},
"color_palette": {
"target": "Hair Color",
"mode": "inherit_from_source",
"instruction": "Do not hallucinate new hair color. Map source color to new hair texture."
}
}
},
"generative_parameters": {
"subject_definition": {
"hair_morphology": {
"length": "Short",
"texture_type": "Wavy",
"styling_aesthetic": "Intentionally messy, artfully disheveled",
"micro_details": "Fine strands falling across forehead and near eyes",
"color_override": null
},
"facial_details": {
"expression": "Serene, gentle",
"makeup_style": "Natural, soft-beauty approach",
"surface_texture": "Ultra-clean skin with visible macro pores"
}
},
"scene_composition": {
"camera_settings": {
"proximity": "Extreme Close-Up (Macro)",
"depth_of_field": "Ultra-shallow",
"focus_target": "Eyes",
"lens_character": "Soft beauty lens"
},
"foreground_layers": {
"element": "Hand",
"state": "Partially blurred",
"purpose": "Framing effect, adding depth and intimacy"
},
"background_layers": {
"state": "Fully out of focus",
"visuals": "Pastel, soft tones",
"bokeh_quality": "Strong, smooth, creamy"
}
},
"lighting_and_atmosphere": {
"style": "Soft-beauty photography",
"dynamic_range": "High (HDR)",
"quality": "Airy, bright, diffused",
"reflections": {
"eyes": "Crisp, sharp catchlights",
"lips": "Soft, natural shine"
}
}
},
"text_prompts": {
"weighted_positive": {
"(Masterpiece, Best Quality, 8k, Macro Photo)": 1.5,
"Extreme close-up of young woman with serene gentle expression": 1.3,
"Short wavy messy hair with stray wisps over eyes": 1.2,
"Hand in foreground partially blurred framing the face": 1.2,
"Macro skin texture, pores visible, individual hair strands": 1.4,
"Ultra-sharp eyes with crisp reflections": 1.3,
"Soft pastel bokeh background": 1.1,
"Soft diffused lighting, airy aesthetic": 1.0
},
"weighted_negative": {
"alteration of face, new hair color, long hair": 1.5,
"plastic skin, airbrushed, smooth": 1.4,
"cartoon, 3d render, illustration": 1.3,
"deep focus, sharp background, clutter": 1.2,
"deformed hand, bad anatomy": 1.4
}
}
}
}

## 中文译文（源站提供）
"pipeline_configuration": {
"job_type": "img2img_transformation",
"meta_tags": ["宏观", "美感", "柔焦", "写实"],
"input_reference_handling": {
"preservation_rules": {
"facial_identity": {
"strength": 1.0,
"instruction": "严格100%保留面部几何结构与特征。",
"technique": "FaceID / IP-Adapter 强"

## 来源备注
- 源站作者：Yaseen Khan Gul
- 源站 UUID：0f3f921f05
- 源站分类：05_人物肖像与写实摄影

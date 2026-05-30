---
id: portrait-golden-texture-hour-0994
title: "巴黎咖啡馆金色时光写真"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["巴黎", "咖啡馆", "人像", "金发", "法式", "暖色调", "黄金时刻", "时尚"]
recommended_models: 
  - banana-pro
  - flux-pro
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
{
  "meta": {
    "project": "Paris_Carette_Cafe_Golden_Hour_Flux_V4.2",
    "target_engine": "Flux.1 [dev] / Nano Banana Pro",
    "version": "4.2.0 (Everything in Focus - f/11)",
    "created_at": "2025-12-17T13:25:00Z"
  },
  "engine_configuration": {
    "model": {
      "base": "flux1-dev.safetensors",
      "quantization": "fp8 / nf4",
      "vae": "ae.safetensors"
    },
    "lora_slots": [
      {
        "name": "Realism_LoRA_v2 (Optional)",
        "strength": 0.5,
        "note": "Enhances skin texture and golden hour lighting."
      }
    ],
    "sampling": {
      "sampler_name": "euler",
      "scheduler": "simple",
      "steps": 28,
      "guidance_scale": 2.5,
      "shift": 1.0
    },
    "dimensions": {
      "width": 1024,
      "height": 1536,
      "aspect_ratio": "2:3",
      "megapixel_class": "1.5MP"
    }
  },
  "prompt_construction": {
    "narrative_layer": {
      "style": "Parisian Lifestyle / High-End Influencer Photography",
      "instruction": "Capture a sharp, warm golden hour shot at a famous Parisian cafe, focusing on the model's outfit and the vibrant terrace atmosphere.",
      "subject_flow": "A blonde model-like woman sitting at Carette cafe terrace, legs crossed, bathed in golden sunlight."
    },
    "texture_layer": {
      "skin_physics": "fair skin with golden sun glow, smooth texture, natural makeup",
      "fabric_physics": "soft cashmere texture of blue sweater, woven wool texture of pinstripe skirt, shiny leather of knee-high boots, wicker chair texture",
      "environment_physics": "SHARP DETAILS ON BACKGROUND: canvas texture of umbrella, metal cafe tables, Haussmann stone architecture"
    },
    "camera_physics": {
      "lens_imperfections": "warm sun flare, high contrast, rich color saturation",
      "focus": "DEEP DEPTH OF FIELD (f/11) - NO BLUR. The woman, the Carette umbrella, and the background architecture are all sharp.",
      "settings": "Sony A7R V, 35mm Lens, 1/500s, ISO 100 (Golden Hour)"
    },
    "color_grading": {
      "white_balance": "Golden Hour (Warm Orange/Gold Tones)",
      "shadows": "Soft, warm shadows",
      "highlights": "Bright golden highlights on hair and skin"
    }
  },
  "final_prompt_string": "A candid raw lifestyle photograph shot on Sony A7R V 35mm f/11. Deep depth of field, everything in focus. A young woman (19-24) with model proportions, very long thin legs, and tiny waist sitting on a wicker chair at Carette café in Paris. She wears a baby blue cropped cashmere sweater, a black pinstripe high-waisted miniskirt, and black leather knee-high boots. She touches her face gently. Golden hour sunlight creates a warm glow. Background is sharp and detailed: Beige umbrella with 'CARETTE' text, busy café terrace with customers, and Haussmann architecture are clearly visible with no bokeh. Parisian chic aesthetic.",
  "negative_prompt_string": "",
  "note_on_negative": "Flux ignores explicit negative prompts. Sharpness is ensur

## 中文译文（源站提供）
```json
{
  "meta": {
    "project": "Paris_Carette_Cafe_Golden_Hour_Flux_V4.2",
    "target_engine": "Flux.1 [dev] / Nano Banana Pro",
    "version": "4.2.0 (Everything in Focus - f/11)",
    "created_at": "2025-12-17T13:25:00Z"
  },
  "engine_configuration": {
    "model": {
      "base": "flux1-dev.safetensors",
      "quantization": "fp8 / nf4",
      "vae": "ae.safetensors"
    },
    "lora_slots": [
      {
        "name": "Realism_LoRA_v2 (Optional)",
        "strength": 0.5,
        "note": "增强皮肤质感和黄金时段光线效果。"
      }
    ],
    "sampling": {
      "sampler_name": "euler",
      "scheduler": "simple",
      "steps": 28,
      "guidance_scale": 2.5,
      "shift": 1.0
    },
    "dimensions": {
      "width": 1024,
      "height": 1536,
      "aspect_ratio": "2:3",
      "megapixel_class": "1.5MP"
    }
  },
  "prompt_construction": {
    "narrative_layer": {
      "style": "巴黎生活方式 / 高端网红摄影",
      "instruction": "在著名的巴黎咖啡馆拍摄一张清晰、温暖的黄金时段照片，重点突出模特的服装和充满活力的露台氛围。",
      "subject_flow": "一位金发模特般的女士坐在 Carette 咖啡馆的露台上，双腿交叉，沐浴在金色的阳光中。"
    },
    "texture_layer": {
      "skin_physics": "白皙的皮肤，带有金色阳光光泽，光滑的质感，自然妆容",
      "fabric_physics": "蓝色毛衣的柔软羊绒质感，细条纹半身裙的编织羊毛质感，及膝靴的闪亮皮革，柳条椅的质感",
      "environment_physics": "背景细节锐利：雨伞的帆布质感，金属咖啡桌，奥斯曼石质建筑"
    },
    "camera_physics": {
      "lens_imperfections": "温暖的太阳光斑，高对比度，丰富的色彩饱和度",
      "focus": "景深大 (f/11) - 无模糊。女士、Carette 雨伞和背景建筑都清晰锐利。",
      "settings": "Sony A7R V, 35mm 镜头, 1/500s, ISO 100 (黄金时段)"
    },
    "color_grading": {
      "white_balance": "黄金时段 (暖橙色/金色调)",
      "shadows": "柔和、温暖的阴影",
      "highlights": "头发和皮肤上的明亮金色高光"
    }
  },
  "final_prompt_string": "一张用 Sony A7R V 35mm f/11 拍摄的真实生活抓拍照片。景深大，所有物体都清晰对焦。一位年轻女士 (19-24 岁)，身材比例像模特，双腿修长，腰肢纤细，坐在巴黎 Carette 咖啡馆的柳条椅上。她穿着一件淡蓝色短款羊绒毛衣，一条黑色细条纹高腰迷你裙，以及黑色皮质及膝靴。她轻轻地触摸自己的脸。黄金时段的阳光营造出温暖的光晕。背景清晰细致：带有“CARETTE”字样的米色雨伞、熙熙攘攘的咖啡馆露台顾客以及奥斯曼建筑都清晰可见，没有散景。巴黎时尚美学。",
  "negative_prompt_string": "",
  "note_on_negative": "Flux 忽略明确的反向提示。锐度已确保。"
}
```

## 来源备注
- 源站作者：Key Alves
- 源站 UUID：O1ZI5bCTMV
- 源站分类：05_人物肖像与写实摄影

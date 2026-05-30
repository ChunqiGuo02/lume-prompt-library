---
id: portrait-ski-the-snow-1610
title: "滑雪缆车中的冷艳少女写真"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["滑雪", "缆车", "雪地", "雪山", "蓝天", "女生", "冬季", "写实"]
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
    "project": "Ski_Gondola_Egirl_Flux_V4.2",
    "target_engine": "Flux.1 [dev] / Nano Banana Pro",
    "version": "4.2.0 (Everything in Focus - f/11)",
    "created_at": "2025-12-18T15:35:00Z"
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
        "note": "Enhances porcelain skin tone, nylon textures, and snow reflections."
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
      "style": "Winter Lifestyle / Travel Photography",
      "instruction": "Capture a sharp, high-contrast shot inside a ski gondola, balancing the interior subject with the bright snowy mountain view outside.",
      "subject_flow": "A pale young woman with black wolf-cut hair wearing a white puffer jacket sitting in a cable car, touching her hair."
    },
    "texture_layer": {
      "skin_physics": "pale porcelain skin, glossy lips, dramatic e-girl eyeliner, smooth finish",
      "fabric_physics": "shiny nylon texture of white puffer jacket, technical matte fabric of black ski pants, reflective lens of ski goggles",
      "environment_physics": "SHARP DETAILS ON BACKGROUND: clear glass window, white snow texture on mountains, dark green pine trees, blue sky"
    },
    "camera_physics": {
      "lens_imperfections": "high contrast, sharp daylight, slight reflection on glass",
      "focus": "DEEP DEPTH OF FIELD (f/11) - NO BLUR. The woman, the gondola interior, and the distant snowy mountains are all sharp.",
      "settings": "Sony A7R V, 35mm Lens, 1/1000s, ISO 100 (Bright Snow Daylight)"
    },
    "color_grading": {
      "white_balance": "Cool Daylight (Blue Sky/White Snow dominance)",
      "shadows": "Deep, defined shadows inside the cabin",
      "highlights": "Bright, crisp highlights on snow and jacket"
    }
  },
  "final_prompt_string": "A candid raw lifestyle photograph shot on Sony A7R V 35mm f/11. Deep depth of field, everything in focus. A young woman (19-25) with pale porcelain skin and shoulder-length black hair with bangs (wolf cut) sitting inside a ski gondola. She wears a shiny white cropped puffer jacket, black ski pants, and black ski goggles on her head. She touches her hair behind her ear and looks at the camera with a calm expression. Dramatic e-girl makeup with winged eyeliner and glossy lips. Bright winter sunlight illuminates her face. Background is sharp and detailed: Through the large glass window, a panoramic view of snowy Alpine mountains, ski tracks, pine trees, and a clear blue sky is"

## 中文译文（源站提供）
```json
{
  "meta": {
    "project": "Ski_Gondola_Egirl_Flux_V4.2",
    "target_engine": "Flux.1 [dev] / Nano Banana Pro",
    "version": "4.2.0 (Everything in Focus - f/11)",
    "created_at": "2025-12-18T15:35:00Z"
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
        "note": "增强瓷器般肤色、尼龙质感和雪地反光效果。"
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
      "style": "冬季生活方式 / 旅行摄影",
      "instruction": "在滑雪缆车内拍摄一张锐利、高对比度的照片，平衡车内主体与车外明亮的雪山景色。",
      "subject_flow": "一位肤色苍白、留着黑色狼剪发型的年轻女子，身穿白色羽绒服，坐在缆车里，轻抚头发。"
    },
    "texture_layer": {
      "skin_physics": "苍白的瓷器般肌肤，光泽的嘴唇，戏剧性的 e-girl 眼线，光滑的妆面",
      "fabric_physics": "白色羽绒服的闪亮尼龙质感，黑色滑雪裤的科技哑光面料，滑雪镜的反光镜片",
      "environment_physics": "背景细节锐利：清晰的玻璃窗，山上白雪皑皑的纹理，深绿色松树，蓝色天空"
    },
    "camera_physics": {
      "lens_imperfections": "高对比度，锐利的日光，玻璃上轻微反光",
      "focus": "景深大 (f/11) - 无模糊。女人、缆车内部和远处的雪山都清晰锐利。",
      "settings": "Sony A7R V, 35mm 镜头, 1/1000s, ISO 100 (明亮雪地日光)"
    },
    "color_grading": {
      "white_balance": "冷日光 (蓝色天空/白色雪地主导)",
      "shadows": "车厢内深邃、清晰的阴影",
      "highlights": "雪地和夹克上明亮、清脆的高光"
    }
  },
  "final_prompt_string": "一张用 Sony A7R V 35mm f/11 拍摄的真实生活方式照片。景深大，一切都清晰对焦。一位年轻女子 (19-25 岁)，肤色苍白，留着齐肩黑色狼剪发型，坐在滑雪缆车内。她穿着一件闪亮的白色短款羽绒服、黑色滑雪裤，头上戴着黑色滑雪镜。她轻抚耳后的头发，表情平静地看着镜头。戏剧性的 e-girl 妆容，带有飞扬的眼线和光泽的嘴唇。明亮的冬日阳光照亮她的脸庞。背景清晰细致：透过巨大的玻璃窗，可以看到白雪皑皑的阿尔卑斯山、滑雪道、松树和晴朗蓝天的全景。"
}
```

## 来源备注
- 源站作者：Key Alves
- 源站 UUID：Ln5zzk7Upd
- 源站分类：05_人物肖像与写实摄影

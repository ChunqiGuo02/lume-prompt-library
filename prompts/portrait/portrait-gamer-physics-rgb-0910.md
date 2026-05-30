---
id: portrait-gamer-physics-rgb-0910
title: "奶牛少女镜前自拍写真"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["可爱", "自拍", "手机", "女生", "奶牛", "电玩", "粉色", "紫色"]
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
    "project": "Kawaii_Gamer_Public_Demo",
    "target_engine": "Flux.1 [dev]",
    "version": "4.2.0",
    "created_at": "2025-12-16"
  },
  "engine_configuration": {
    "model": {
      "base": "flux1-dev.safetensors",
      "quantization": "fp8",
      "vae": "default"
    },
    "sampling": {
      "sampler_name": "euler",
      "scheduler": "simple",
      "steps": 28,
      "guidance_scale": 2.5
    },
    "dimensions": {
      "width": 1024,
      "height": 1536,
      "aspect_ratio": "2:3"
    },
    "seed": -1
  },
  "prompt_construction": {
    "narrative_layer": {
      "style": "Gamer Cosplay Aesthetic",
      "instruction": "Capture a mirror selfie.",
      "subject_flow": "A pale young woman with black hair and cow ears taking a mirror selfie in a gamer bedroom."
    },
    "texture_layer": {
      "skin_physics": "pale skin, soft makeup",
      "fabric_physics": "cow-print top, black skirt, white socks",
      "environment_physics": "gaming setup, rgb lights"
    },
    "camera_physics": {
      "lens_style": "Phone Camera",
      "focus": "Focus on subject",
      "settings": "Mixed Lighting, Auto Settings"
    },
    "color_grading": {
      "white_balance": "Cool White",
      "shadows": "Soft shadows",
      "highlights": "RGB glow"
    }
  },
  "final_prompt_string": "A mirror selfie photograph shot on Smartphone. A young woman with pale porcelain skin and long black hair with bangs wearing cute cow ears. She sits on a bed wearing a cow-print crop top, a black skirt, and white thigh-high socks. She holds a purple phone case. Background of gaming setup with pink chair, PC with RGB lights (blue/purple), and shelves. Mixed natural window light and neon RGB glow. Kawaii gamer aesthetic.",
  "negative_prompt_string": "",
  "note_on_negative": "Flux ignores explicit negative prompts.",
  "post_processing": {
    "upscale": {
      "enabled": true,
      "method": "Latent",
      "strength": 0.5
    },
    "face_restoration": {
      "enabled": false
    }
  }
}

## 中文译文（源站提供）
```json
{
  "meta": {
    "project": "Kawaii_Gamer_Public_Demo",
    "target_engine": "Flux.1 [dev]",
    "version": "4.2.0",
    "created_at": "2025-12-16"
  },
  "engine_configuration": {
    "model": {
      "base": "flux1-dev.safetensors",
      "quantization": "fp8",
      "vae": "default"
    },
    "sampling": {
      "sampler_name": "euler",
      "scheduler": "simple",
      "steps": 28,
      "guidance_scale": 2.5
    },
    "dimensions": {
      "width": 1024,
      "height": 1536,
      "aspect_ratio": "2:3"
    },
    "seed": -1
  },
  "prompt_construction": {
    "narrative_layer": {
      "style": "游戏玩家角色扮演美学",
      "instruction": "拍摄一张镜面自拍。",
      "subject_flow": "一位皮肤苍白、黑发、戴着牛耳朵的年轻女性，在游戏玩家卧室里拍摄镜面自拍。"
    },
    "texture_layer": {
      "skin_physics": "苍白皮肤，淡妆",
      "fabric_physics": "奶牛纹上衣，黑色短裙，白色袜子",
      "environment_physics": "游戏设备，RGB 灯光"
    },
    "camera_physics": {
      "lens_style": "手机摄像头",
      "focus": "聚焦主体",
      "settings": "混合照明，自动设置"
    },
    "color_grading": {
      "white_balance": "冷白",
      "shadows": "柔和阴影",
      "highlights": "RGB 辉光"
    }
  },
  "final_prompt_string": "一张用智能手机拍摄的镜面自拍照片。一位皮肤苍白如瓷、留着齐刘海的黑发年轻女性，戴着可爱的牛耳朵。她坐在床上，穿着奶牛纹露脐上衣、黑色短裙和白色过膝袜。她拿着一个紫色的手机壳。背景是游戏设备，包括粉色椅子、带 RGB 灯（蓝色/紫色）的电脑和置物架。混合了自然窗户光线和霓虹 RGB 辉光。卡哇伊游戏玩家美学。",
  "negative_prompt_string": "",
  "note_on_negative": "Flux 忽略显式负面提示。",
  "post_processing": {
    "upscale": {
      "enabled": true,
      "method": "Latent",
      "strength": 0.5
    },
    "face_restoration": {
      "enabled": false
    }
  }
}
```

## 来源备注
- 源站作者：Key Alves
- 源站 UUID：kxPgWy8dVX
- 源站分类：05_人物肖像与写实摄影

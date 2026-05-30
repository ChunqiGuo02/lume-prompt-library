---
id: 3d_concept-the-signature-inner-0914
title: "里约双曝光人像艺术"
category: 3d_concept
subcategory: "04_创意脑洞特效合成"
aesthetic: null
tags: ["双重曝光", "暖色调", "女性", "日落", "基督像", "椰树", "湖泊", "飞鸟"]
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
related_to: ["landscape-the-signature-inner-002"]
---

# 正文 prompt
{
  "type": "image_generation",
  "prompt_style": "cinematic_double_exposure",
  "subject": {
    "primary_subject": {
      "description": "A blonde woman shown in profile (side view), realistic facial structure, elegant silhouette outline, calm expression",
      "pose": "profile portrait",
      "framing": "tight portrait with head and upper shoulders visible"
    },
    "double_exposure_mask": {
      "mask_area": "inside the woman's silhouette",
      "inner_landmark": "{"landmark" "Christ the Redeemer (Rio de Janeiro)"} integrated as part of the inner landscape composition"
    }
  },
  "inner_scene": {
    "location": {
      "city": "Rio de Janeiro",
      "area": "South Zone",
      "specific_place": "Lagoa Rodrigo de Freitas"
    },
    "action": "The same blonde woman is walking along the Lagoa path",
    "environment_elements": [
      "palm trees",
      "visible wind movement in hair and clothing",
      "dynamic clouds",
      "birds flying in the sky"
    ],
    "time_and_weather": {
      "lighting": "strong, radiant sunlight",
      "background_time": "summer sunset",
      "season_feel": "summer beach atmosphere"
    }
  },
  "lighting_and_color": {
    "look": "vivid lighting",
    "tones": "warm tones",
    "contrast": "high contrast with bright highlights and cinematic shadows",
    "color_palette_keywords": [
      "golden sunlight",
      "warm oranges",
      "soft pink sunset",
      "tropical greens",
      "deep blue sky accents"
    ]
  },
  "style": {
    "render_style": "high-detail photorealistic cinematic composite",
    "mood": "romantic, uplifting, airy summer vibe",
    "detail_level": "very high detail",
    "resolution_target": "8K"
  },
  "composition": {
    "technique": "double exposure",
    "background": "soft cinematic gradient backdrop blending into sunset hues",
    "depth_of_field": "subtle depth-of-field in inner scene, crisp silhouette edge"
  },
  "text_overlay": {
    "required_signature": true,
    "text": "{"signature text" "Shreya Yadav"}",
    "style": "cursive handwritten signature",
    "placement": "lower-left corner",
    "color": "white or warm off-white",
    "opacity": "90-100%",
    "notes": "Keep it clean and readable; signature should look like a natural artist sign-off."
  },
  "negative_prompts": [
    "low resolution",
    "blurry face",
    "extra limbs",
    "distorted anatomy",
    "misspelled signature text",
    "watermark (other than the required signature)",
    "overexposed highlights",
    "harsh posterization"
  ],
  "output": {
    "aspect_ratio": "16:9",
    "format": "png",
    "quality": "ultra"
  }
}

## 中文译文（源站提供）
{
  "type": "image_generation",
  "prompt_style": "cinematic_double_exposure",
  "subject": {
    "primary_subject": {
      "description": "A blonde woman shown in profile (side view), realistic facial structure, elegant silhouette outline, calm expression",
      "pose": "profile portrait",
      "framing": "tight portrait with head and upper shoulders visible"
    },
    "double_exposure_mask": {
      "mask_area": "inside the woman's silhouette",
      "inner_landmark": "{"landmark" "Christ the Redeemer (Rio de Janeiro)"} integrated as part of the inner landscape composition"
    }
  },
  "inner_scene": {
    "location": {
      "city": "Rio de Janeiro",
      "area": "South Zone",
      "specific_place": "Lagoa Rodrigo de Freitas"
    },
    "action": "The same blonde woman is walking along the Lagoa path",
    "environment_elements": [
      "palm trees",
      "visible wind movement in hair and clothing",
      "dynamic clouds",
      "birds flying in the sky"
    ],
    "time_and_weather": {
      "lighting": "strong, radiant sunlight",
      "background_time": "summer sunset",
      "season_feel": "summer beach atmosphere"
    }
  },
  "lighting_and_color": {
    "look": "vivid lighting",
    "tones": "warm tones",
    "contrast": "high contrast with bright highlights and cinematic shadows",
    "color_palette_keywords": [
      "golden sunlight",
      "warm oranges",
      "soft pink sunset",
      "tropical greens",
      "deep blue sky accents"
    ]
  },
  "style": {
    "render_style": "high-detail photorealistic cinematic composite",
    "mood": "romantic, uplifting, airy summer vibe",
    "detail_level": "very high detail",
    "resolution_target": "8K"
  },
  "composition": {
    "technique": "double exposure",
    "background": "soft cinematic gradient backdrop blending into sunset hues",
    "depth_of_field": "subtle depth-of-field in inner scene, crisp silhouette edge"
  },
  "text_overlay": {
    "required_signature": true,
    "text": "{"signature text" "Shreya Yadav"}",
    "style": "cursive handwritten signature",
    "placement": "lower-left corner",
    "color": "white or warm off-white",
    "opacity": "90-100%",
    "notes": "Keep it clean and readable; signature should look like a natural artist sign-off."
  },
  "negative_prompts": [
    "low resolution",
    "blurry face",
    "extra limbs",
    "distorted anatomy",
    "misspelled signature text",
    "watermark (other than the required signature)",
    "overexposed highlights",
    "harsh posterization"
  ],
  "output": {
    "aspect_ratio": "16:9",
    "format": "png",
    "quality": "ultra"
  }
}

## 来源备注
- 源站作者：Shreya Yadav
- 源站 UUID：KKmFTRMqp9
- 源站分类：04_创意脑洞特效合成

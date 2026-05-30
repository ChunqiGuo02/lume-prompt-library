---
id: 3d_concept-the-signature-inner-0915
title: "里约日落双曝光人像"
category: 3d_concept
subcategory: "04_创意脑洞特效合成"
aesthetic: null
tags: ["双重曝光", "女人", "侧脸", "肖像", "里约", "日落", "棕榈树", "飞鸟"]
recommended_models: 
  - banana-pro
recommended_params:
  aspect_ratio: "16:9"
  quality: null
  style_strength: null
sample_outputs: []
quality_tier: A
author: "ChunqiGuo02"
source: "Leader Prompt Gallery (https://www.leaderai.top/mid-api/lab/image_prompt/index.html)"
language: en
created_at: 2026-05-30
version: "1.0.0"
related_to: ["landscape-the-signature-inner-001"]
---

# 正文 prompt
{
  "type": "image_generation",
  "prompt_style": "cinematic_double_exposure",
  "subject": {
    "primary_subject": {
      "description": "{"subject description" "A blonde woman shown in profile (side view), realistic facial structure, elegant silhouette outline, calm expression"}",
      "pose": "profile portrait",
      "framing": "tight portrait with head and upper shoulders visible"
    },
    "double_exposure_mask": {
      "mask_area": "inside the woman's silhouette",
      "inner_landmark": "{"inner landmark" "Christ the Redeemer (Rio de Janeiro) integrated as part of the inner landscape composition"}"
    }
  },
  "inner_scene": {
    "location": {
      "city": "{"city" "Rio de Janeiro"}",
      "area": "South Zone",
      "specific_place": "{"specific place" "Lagoa Rodrigo de Freitas"}"
    },
    "action": "{"action" "The same blonde woman is walking along the Lagoa path"}",
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
    "text": "{"signature text" "Silllly_lilly"}",
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
```json
{
  "type": "image_generation",
  "prompt_style": "cinematic_double_exposure",
  "subject": {
    "primary_subject": {
      "description": "{\"subject description\" \"一位金发女性的侧面肖像，面部结构逼真，轮廓优雅，表情平静\"}",
      "pose": "profile portrait",
      "framing": "特写肖像，可见头部和上半身"
    },
    "double_exposure_mask": {
      "mask_area": "在女性轮廓内部",
      "inner_landmark": "{\"inner landmark\" \"里约热内卢的基督像，作为内部景观构图的一部分\"}"
    }
  },
  "inner_scene": {
    "location": {
      "city": "{\"city\" \"里约热内卢\"}",
      "area": "南区",
      "specific_place": "{\"specific place\" \"罗德里戈·德·弗雷塔斯泻湖\"}"
    },
    "action": "{\"action\" \"同一位金发女性正沿着泻湖小径散步\"}",
    "environment_elements": [
      "棕榈树",
      "头发和衣服随风飘动",
      "动态的云朵",
      "空中飞翔的鸟儿"
    ],
    "time_and_weather": {
      "lighting": "强烈、明亮的阳光",
      "background_time": "夏季日落",
      "season_feel": "夏日海滩氛围"
    }
  },
  "lighting_and_color": {
    "look": "生动的光线",
    "tones": "暖色调",
    "contrast": "高对比度，带有明亮的高光和电影般的阴影",
    "color_palette_keywords": [
      "金色阳光",
      "温暖的橙色",
      "柔和的粉色日落",
      "热带绿色",
      "深蓝色天空点缀"
    ]
  },
  "style": {
    "render_style": "高细节照片级电影合成",
    "mood": "浪漫、振奋、轻盈的夏日氛围",
    "detail_level": "极高细节",
    "resolution_target": "8K"
  },
  "composition": {
    "technique": "双重曝光",
    "background": "柔和的电影渐变背景，融入日落色调",
    "depth_of_field": "内部场景具有微妙的景深，轮廓边缘清晰"
  },
  "text_overlay": {
    "required_signature": true,
    "text": "{\"signature text\" \"Silllly_lilly\"}",
    "style": "草书手写签名",
    "placement": "左下角",
    "color": "白色或暖白色",
    "opacity": "90-100%",
    "notes": "保持整洁易读；签名应看起来像自然的艺术家署名。"
  },
  "negative_prompts": [
    "低分辨率",
    "模糊的面部",
    "多余的肢体",
    "扭曲的解剖结构",
    "拼写错误的签名文本",
    "水印（除所需签名外）",
    "过曝的高光",
    "刺眼的色阶分离"
  ],
  "output": {
    "aspect_ratio": "16:9",
    "format": "png",
    "quality": "ultra"
  }
}
```

## 来源备注
- 源站作者：ಠಿ⁠_⁠ಠಿ
- 源站 UUID：RzCDJWzoJu
- 源站分类：04_创意脑洞特效合成

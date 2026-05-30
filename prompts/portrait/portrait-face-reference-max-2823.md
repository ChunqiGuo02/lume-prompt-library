---
id: portrait-face-reference-max-2823
title: "高定街拍：复古车旁的酒红条纹套装女郎"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["街拍", "时尚", "欧美", "复古车", "建筑", "酒红", "条纹", "西装"]
recommended_models: 
  - banana-pro
recommended_params:
  aspect_ratio: "9:16"
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
  "job_id": "photo_03_city_car",
  "model": "nano-banana-pro",
  "task": "image_generation",
  "inputs": {
    "face_reference_image": "<YOUR_FACE_IMAGE>",
    "scene_reference_image": "<SCENE_IMAGE_3>"
  },
  "prompt": "High-fashion street editorial in European city. EXACT SAME FACE as face_reference_image, identical identity. Recreate the scene exactly from scene_reference_image: woman leaning on a vintage car, classic European architecture background. Outfit must match exactly: {"outfit color" "burgundy pinstripe blazer"} and matching skirt with belt, black lace bra visible, black gloves, sheer black tights, gold earrings. Same pose, same body angle, same framing. Luxury magazine look, clean daylight, 85mm fashion lens feel, natural skin texture.",
  "negative_prompt": "different suit color, no lace bra, face changed, identity drift, stylized, cartoon, CGI, over-retouch, wrong car, wrong city, text, watermark, blur",
  "settings": {
    "stylization": 0,
    "quality": "max",
    "detail_boost": 0.8,
    "lighting_match": "high",
    "composition_match": "max",
    "color_match": "max",
    "identity_preservation": "max",
    "face_consistency": "max",
    "reference_strength": { "face": 1.0, "scene": 0.96 },
  }
}

## 中文译文（源站提供）
```json
{
  "job_id": "photo_03_city_car",
  "model": "nano-banana-pro",
  "task": "image_generation",
  "inputs": {
    "face_reference_image": "<YOUR_FACE_IMAGE>",
    "scene_reference_image": "<SCENE_IMAGE_3>"
  },
  "prompt": "欧洲城市街头时尚大片。面部与 face_reference_image 完全相同，身份一致。精确重现 scene_reference_image 中的场景：女士倚靠在一辆老爷车上，背景是经典的欧洲建筑。服装必须完全匹配：{\"outfit color\" \"勃艮第细条纹西装外套\"} 和配套的带腰带半身裙，黑色蕾丝文胸可见，黑色手套，黑色透明丝袜，金色耳环。相同的姿势，相同的身体角度，相同的构图。奢华杂志风格，明亮的日光，85mm 时尚镜头感，自然的皮肤纹理。",
  "negative_prompt": "不同的西装颜色，没有蕾丝文胸，面部改变，身份漂移，风格化，卡通，CGI，过度修饰，错误的汽车，错误的城市，文字，水印，模糊",
  "settings": {
    "stylization": 0,
    "quality": "max",
    "detail_boost": 0.8,
    "lighting_match": "high",
    "composition_match": "max",
    "color_match": "max",
    "identity_preservation": "max",
    "face_consistency": "max",
    "reference_strength": { "face": 1.0, "scene": 0.96 }
  }
}
```

## 来源备注
- 源站作者：Melis✨
- 源站 UUID：OqaTbLi7OB
- 源站分类：05_人物肖像与写实摄影

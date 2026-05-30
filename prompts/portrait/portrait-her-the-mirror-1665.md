---
id: portrait-her-the-mirror-1665
title: "现代浴室镜前自拍写真生成提示词"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["自拍", "浴室", "现代", "休闲", "美女", "灰色", "暖调", "写实"]
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
  "meta": {
    "description": "Ultra-detailed reproduction prompt for a specific mirror selfie scenario.",
    "target_quality": "Photorealistic, 8K, Highly Textured, Candid Style",
    "aspect_ratio": "9:16"
  },
  "prompts": {
    "positive_prompt": "A candid, high-resolution mirror selfie photograph taken inside a brightly lit modern bathroom. The subject is a young woman in her early 20s with a curvy, fit physique, sitting sideways on a polished white quartz vanity countertop. Her most distinctive feature is her long, wavy dark brown hair which has prominent, thick blonde 'money piece' highlights framing her face. She has a warm, peachy skin tone, sharp black winged eyeliner, well-defined eyebrows, and a small silver stud nose piercing in her right nostril. She is smiling softly at her reflection holding up a silver iPhone 14/15 Pro with her right hand, showing long, light baby blue coffin-shaped acrylic nails. She is wearing an oversized, slouchy dark charcoal grey off-the-shoulder sweatshirt that falls off her left shoulder, revealing strap, and tight, grey marled cotton athletic jersey shorts. The pose emphasizes her curved hip and thigh. The mirror reflection behind her is detailed, showing a large glass-enclosed shower with white marble subway tiling, chrome fixtures, a ceiling fan, and a glimpse of a bathtub area. In the background (not in reflection), there is a white paneled door and a hand towel with a green pine tree pattern hanging on a rack. The lighting is warm and diffused indoor bathroom lighting, creating soft shadows. The image should have natural film grain, extremely detailed textures on skin pores, hair strands, fabric folds, and stone surfaces. 8k resolution, incredibly detailed, sharp focus on the subject.",
    "negative_prompt": "cartoon, painting, 3d render, anime, blurry, low resolution, grainy, distorted, unattractive, bad anatomy, extra fingers, deformed hands, missing limbs, bad eyes, crossed eyes, overly filtered skin, airbrushed, unnatural lighting, oversaturated colors, ugly, deformed face, noisy, low contrast, watermark, text, signature."
  },
  "parameters": {
    "aspect_ratio": "9:16",
    "cfg_scale": 7.5,
    "steps": 30,
    "sampler": "DPM++ 2M Karras",
    "seed": -1,
    "style_preset": "photographic"
  },
  "breakdown_analysis": {
    "subject": {
      "age": "Early 20s woman",
      "hair": "Long, wavy, dark brown base with distinct thick blonde face-framing highlights",
      "face": "Smiling softly, winged eyeliner, nose stud piercing",
      "body": "Curvy figure, sitting pose on counter"
    },
    "attire": {
      "top": "Oversized charcoal grey off-the-shoulder sweatshirt",
      "bottom": "Grey marled cotton athletic shorts",
      "nails": "Long, light blue acrylics"
    },
    "environment": {
      "location": "Modern bathroom",
      "surface": "White quartz countertop",
      "background_elements": "Large mirror reflection, marble shower, white door, tree-pa"
    }
  }
}

## 中文译文（源站提供）
```json
{
  "meta": {
    "description": "针对特定镜面自拍场景的超详细复刻提示词。",
    "target_quality": "逼真、8K、高纹理、抓拍风格",
    "aspect_ratio": "9:16"
  },
  "prompts": {
    "positive_prompt": "一张抓拍的高分辨率镜面自拍照片，拍摄于一个光线明亮的现代浴室。主体是一位 20 出头的年轻女性，身材曲线优美，体格健美，侧身坐在抛光的白色石英台面上。她最显著的特征是她长而波浪状的深棕色头发，发际线处有突出、浓密的金色“挑染”，勾勒出她的脸庞。她拥有温暖的桃色肤色，犀利的黑色飞翼眼线，轮廓分明的眉毛，右鼻孔上有一个小小的银色鼻钉。她正对着镜子中的自己温柔地微笑，右手举着一部银色的 iPhone 14/15 Pro，展示着长长的、浅婴儿蓝色的棺材形美甲。她穿着一件宽松、慵懒的深炭灰色露肩运动衫，左肩滑落，露出肩带，以及紧身的灰色混色棉质运动短裤。这个姿势突出了她弯曲的臀部和大腿。她身后的镜面反射细节丰富，显示了一个带白色大理石地铁砖、镀铬固定装置、吊扇的大型玻璃淋浴间，以及浴缸区域的一瞥。背景中（不在反射中）有一扇白色镶板门和一个挂在架子上的带有绿色松树图案的擦手巾。灯光是温暖柔和的室内浴室照明，营造出柔和的阴影。图像应具有自然的胶片颗粒感，皮肤毛孔、发丝、织物褶皱和石材表面应具有极其详细的纹理。8k 分辨率，细节丰富，主体对焦锐利。",
    "negative_prompt": "卡通、绘画、3D 渲染、动漫、模糊、低分辨率、颗粒感、扭曲、不吸引人、解剖结构错误、多余的手指、变形的手、肢体缺失、眼睛不好、斜视、过度滤镜的皮肤、喷枪修饰、不自然的灯光、色彩过饱和、丑陋、变形的脸、噪点、低对比度、水印、文字、签名。"
  },
  "parameters": {
    "aspect_ratio": "9:16",
    "cfg_scale": 7.5,
    "steps": 30,
    "sampler": "DPM++ 2M Karras",
    "seed": -1,
    "style_preset": "photographic"
  },
  "breakdown_analysis": {
    "subject": {
      "age": "20 出头的女性",
      "hair": "长、波浪状、深棕色底色，带有明显浓密的金色面部挑染",
      "face": "温柔微笑、飞翼眼线、鼻钉",
      "body": "曲线身材，坐在台面上的姿势"
    },
    "attire": {
      "top": "宽松炭灰色露肩运动衫",
      "bottom": "灰色混色棉质运动短裤",
      "nails": "长、浅蓝色美甲"
    },
    "environment": {
      "location": "现代浴室",
      "surface": "白色石英台面",
      "background_elements": "大镜面反射、大理石淋浴间、白门、树图案"
    }
  }
}
```

## 来源备注
- 源站作者：Pinodi
- 源站 UUID：PXkwPdhqjL
- 源站分类：05_人物肖像与写实摄影

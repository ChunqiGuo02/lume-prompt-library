---
id: "landscape-the-subject-stone-002"
title: "石雕风格图像转换"
category: landscape
subcategory: "04_创意脑洞特效合成"
aesthetic: null
tags: ["石头", "雕塑", "超写实", "3D", "特朗普", "宝马", "苹果", "灰色"]
recommended_models: 
  - banana-pro
recommended_params:
  aspect_ratio: null
  quality: null
  style_strength: null
sample_outputs: []
quality_tier: B
author: "ChunqiGuo02"
source: "Leader Prompt Gallery (https://www.leaderai.top/mid-api/lab/image_prompt/index.html)"
language: en
created_at: 2026-05-30
version: "1.0.0"
related_to: ["landscape-the-subject-stone-001"]
---

# 正文 prompt
{
  "task": "image_to_image_style_transfer",
  "input_image": "{{USER_IMAGE}}",
  "prompt": "Create a hyper-real 3D studio composition that recreates the main subject from the provided image as a fragmented stone assemblage. The subject must be built from separate, clearly detached rock pieces with small visible gaps between shards (no pieces merging). Material look: fragmented slate + sandstone shards with chiseled edges, crisp fractures, visible stone grain, micro-scratches, and realistic roughness. Color palette: predominantly dark slate with subtle warm-ochre sandstone accents. Lighting: soft studio key light from top-left, gentle fill, subtle contact shadows under each shard, realistic ambient occlusion in crevices, clean reflections kept minimal. Background: minimal off-white seamless backdrop, no texture. Framing: centered, clean, straight-on, subject fully readable. Add a few tiny debris chips floating or resting near the base for depth. Preserve the subject’s identity, proportions, and recognizable silhouette from the input image while transforming all surfaces into stone fragments. Hyper-real, high detail, sharp focus, 8k render quality.",
  "negative_prompt": "text, typography, logo, watermark, signature, extra props, busy background, fog, heavy bloom, cartoon, illustration, lowpoly, plastic, metal, glossy paint, melted shapes, merged fragments, unreadable subject, blur, noise, low resolution, oversharpening halos, distorted face/body, extra limbs, deformed geometry",
  "output": {
    "aspect_ratio": "use_input_aspect_ratio",
    "background": "off_white",
    "camera": {
      "angle": "straight_on",
      "framing": "centered",
      "distance": "medium"
    }
  },
  "params": {
    "style_strength": 0.75,
    "identity_preservation": 0.9,
    "detail_level": "very_high",
    "lighting_preset": "soft_studio_top_left",
    "shadow_intensity": "subtle",
    "gap_visibility": "clear",
    "debris_chips": "few_tiny",
    "no_text": true
  }
}

## 中文译文（源站提供）
```json
{
  "task": "image_to_image_style_transfer",
  "input_image": "{{USER_IMAGE}}",
  "prompt": "创建一个超现实的 3D 工作室构图，将所提供图像中的主要主体重新塑造成由碎片石块组成的集合体。主体必须由独立、清晰分离的石块构成，碎片之间有微小的可见缝隙（石块之间不得融合）。材质外观：碎片化的板岩 + 砂岩碎片，边缘经过凿刻，裂缝清晰，石纹可见，有微划痕，具有逼真的粗糙度。颜色调色板：以深色板岩为主，带有微妙的暖赭色砂岩点缀。灯光：柔和的工作室主光从左上方照射，柔和的补光，每个碎片下方有细微的接触阴影，缝隙中有逼真的环境光遮蔽，干净的反射保持在最低限度。背景：极简的米白色无缝背景，无纹理。构图：居中，干净，正面，主体完全可辨识。在底部附近添加一些漂浮或散落的微小碎屑，以增加深度。在将所有表面转换为石块碎片的同时，保留主体在输入图像中的身份、比例和可识别的轮廓。超现实，高细节，锐利对焦，8k 渲染质量。",
  "negative_prompt": "文字、排版、标志、水印、签名、额外道具、杂乱背景、雾、强烈泛光、卡通、插画、低多边形、塑料、金属、光泽漆、融化形状、融合碎片、不可辨识的主体、模糊、噪点、低分辨率、过度锐化光晕、扭曲的面部/身体、多余肢体、变形几何体",
  "output": {
    "aspect_ratio": "use_input_aspect_ratio",
    "background": "off_white",
    "camera": {
      "angle": "straight_on",
      "framing": "centered",
      "distance": "medium"
    }
  },
  "params": {
    "style_strength": 0.75,
    "identity_preservation": 0.9,
    "detail_level": "very_high",
    "lighting_preset": "soft_studio_top_left",
    "shadow_intensity": "subtle",
    "gap_visibility": "clear",
    "debris_chips": "few_tiny",
    "no_text": true
  }
}
```

## 来源备注
- 源站作者：Saman | AI
- 源站 UUID：WhGC7k5AKW
- 源站分类：04_创意脑洞特效合成

---
id: "landscape-the-subject-stone-001"
title: "石块拼接人像雕塑生成"
category: landscape
subcategory: "04_创意脑洞特效合成"
aesthetic: null
tags: ["雕塑", "石材", "半身像", "拼接", "超写实", "深灰", "赭石", "极简"]
recommended_models: 
  - banana-pro
recommended_params:
  aspect_ratio: "1:1"
  quality: null
  style_strength: null
sample_outputs: []
quality_tier: A
author: "ChunqiGuo02"
source: "Leader Prompt Gallery (https://www.leaderai.top/mid-api/lab/image_prompt/index.html)"
language: en
created_at: 2026-05-30
version: "1.0.0"
related_to: ["landscape-the-subject-stone-002"]
---

# 正文 prompt
task": "image_to_image_style_transfer",
  "input_image": "{{USER_IMAGE}}",
  "prompt": "Create a hyper-real 3D studio composition that recreates the main subject from the provided image as a fragmented stone assemblage. The subject must be built from separate, clearly detached rock pieces with small visible gaps between shards (no pieces merging). Material look: fragmented {"stone type" "slate + sandstone"} shards with chiseled edges, crisp fractures, visible stone grain, micro-scratches, and realistic roughness. Color palette: predominantly dark slate with subtle warm-ochre sandstone accents. Lighting: soft studio key light from top-left, gentle fill, subtle contact shadows under each shard, realistic ambient occlusion in crevices, clean reflections kept minimal. Background: minimal off-white seamless backdrop, no texture. Framing: centered, clean, straight-on, subject fully readable. Add a few tiny debris chips floating or resting near the base for depth. Preserve the subject’s identity, proportions, and recognizable silhouette from the input image while transforming all surfaces into stone fragments. Hyper-real, high detail, sharp focus, 8k render quality.",
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
  "prompt": "创建一个超现实的 3D 工作室构图，将所提供图像中的主要主体重新创建为碎片化的石块组合。主体必须由独立的、清晰分离的石块构成，碎片之间有细小的可见间隙（无碎片融合）。材质外观：碎片化的 {\"stone type\" \"slate + sandstone\"} 碎片，带有凿刻边缘、清晰的断裂、可见的石材纹理、微划痕和逼真的粗糙度。调色板：以深色板岩为主，带有微妙的暖赭色砂岩点缀。灯光：左上方柔和的工作室主光，柔和的补光，每个碎片下方有微妙的接触阴影，裂缝中逼真的环境光遮蔽，干净的反光保持最小。背景：极简的米白色无缝背景，无纹理。构图：居中、干净、正面，主体完全可读。在底部附近添加一些微小的碎屑漂浮或静置，以增加深度。在将所有表面转换为石块碎片的同时，保留主体在输入图像中的身份、比例和可识别的轮廓。超现实、高细节、锐利对焦、8k 渲染质量。",
  "negative_prompt": "文本、排版、标志、水印、签名、额外道具、繁忙背景、雾、强烈泛光、卡通、插画、低多边形、塑料、金属、光泽漆、融化的形状、融合的碎片、不可识别的主体、模糊、噪点、低分辨率、过度锐化光晕、扭曲的面部/身体、多余的肢体、变形的几何形状",
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
- 源站作者：Dr.duet
- 源站 UUID：H0u4ChmPc0
- 源站分类：04_创意脑洞特效合成

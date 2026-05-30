---
id: branding-material-model-car-0310
title: "生成高精度汽车结构透视图的AI提示词模板"
category: branding
subcategory: "03_创意广告品牌设计"
aesthetic: null
tags: ["汽车", "透明", "暖黄", "青蓝", "科技", "线框", "发光", "暗黑"]
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
related_to: []
---

# 正文 prompt
{
  "prompt_configuration": {
    "parameters": {
      "car_model": "{"car model" "SUPERCAR MODEL"}",
      "material_color": "{"material color" "warm amber and deep orange"}"
    },
    "aspect_ratio": "16:9"
    "viewpoint": "front 3/4 angle, full vehicle visibility"
  },
  "prompt_payload": {
    "subject_definition": {
      "core_subject": "{car_model}",
      "representation_style": "topological sliced sculpture, constructed from parallel stacked sheets of translucent material"
    },
    "material_physics": {
      "medium": "layered optical grade acrylic glass",
      "texture": "laser-cut edges, volumetric transparency, subsurface scattering",
      "color_palette": "translucent {material_color} gradient, glowing internal refraction"
    },
    "technical_details": {
      "structure": "ribbed laminar structure, cross-section planes, internal mechanical details visible through layers (engine block, suspension, transmission)",
      "fidelity": "hyper-detailed, CAD-like precision, exploded view aesthetic but assembled"
    },
    "lighting_and_atmosphere": {
      "environment": "pitch black void background, infinite dark studio",
      "lighting_setup": "rim lighting to catch glass edges, internal volumetric glow, caustics, cinematic high contrast"
    },
    "rendering_engine": {
      "style": "Octane Render, raytracing, 8k resolution, photorealistic material properties, macro photography depth of field"
    }
  },
  "negative_prompt": [
    "solid metal body",
    "opaque paint",
    "cartoon",
    "illustration",
    "distorted wheels",
    "cropped frame",
    "daylight",
    "reflection of photographer"
  ]
}

## 中文译文（源站提供）
```json
{
  "prompt_configuration": {
    "parameters": {
      "car_model": "{\"car model\" \"SUPERCAR MODEL\"}",
      "material_color": "{\"material color\" \"warm amber and deep orange\"}"
    },
    "aspect_ratio": "16:9",
    "viewpoint": "前 3/4 视角，车辆完全可见"
  },
  "prompt_payload": {
    "subject_definition": {
      "core_subject": "{car_model}",
      "representation_style": "拓扑切片雕塑，由平行堆叠的半透明材料薄片构成"
    },
    "material_physics": {
      "medium": "分层光学级亚克力玻璃",
      "texture": "激光切割边缘，体积透明度，次表面散射",
      "color_palette": "半透明 {material_color} 渐变，内部发光折射"
    },
    "technical_details": {
      "structure": "带肋层状结构，横截面，内部机械细节透过层层可见（发动机缸体、悬架、变速器）",
      "fidelity": "超高细节，CAD 般精确，爆炸图美学但已组装"
    },
    "lighting_and_atmosphere": {
      "environment": "漆黑的虚空背景，无限黑暗的工作室",
      "lighting_setup": "边缘照明以捕捉玻璃边缘，内部体积发光，焦散，电影级高对比度"
    },
    "rendering_engine": {
      "style": "Octane Render，光线追踪，8k 分辨率，照片级真实材料属性，微距摄影景深"
    }
  },
  "negative_prompt": [
    "实心金属车身",
    "不透明油漆",
    "卡通",
    "插画",
    "扭曲的车轮",
    "裁剪的画面",
    "日光",
    "摄影师的倒影"
  ]
}
```

## 来源备注
- 源站作者：Lloyd Creates
- 源站 UUID：ZsS3Um2J65
- 源站分类：03_创意广告品牌设计

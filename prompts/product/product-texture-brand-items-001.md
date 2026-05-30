---
id: "product-texture-brand-items-001"
title: "芒果工作室品牌视觉套装"
category: product
subcategory: "02_电商产品虚拟摄影"
aesthetic: null
tags: ["黄色", "品牌", "芒果", "果茶", "包装", "潮流", "波普", "俯拍"]
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

"task_description": "Generate a high-contrast brand flat lay with distinct material textures",

"prompt_structure": {

"subject": "A vibrant yellow brand identity collection arranged in dynamic knolling", "brand_identity": { "name": "Marvin Studio", "theme": "Mango Fruit Tea", "graphics": "Pop-art doodles, bold black lines" }, "material_mapping": { "paper_items": { "objects": \["shopping bag", "cup carrier", "straw wrapper"\], "texture": "Matte finish, slight paper grain, non-reflective" }, "glossy_items": { "objects": \["ceramic mug", "plastic cup lid"\], "texture": "High gloss, sharp specular highlights, smooth surface" }, "fabric_items": { "objects": \["tote bag"\], "texture": "Coarse canvas weave, natural fabric folds" }, "organic_items": { "objects": \["fresh mangoes"\], "texture": "Waxy fruit skin, natural imperfections, organic shape" } }, "lighting_setup": { "type": "Hard Sunlight / Direct Flash", "shadows": "Sharp, defined, pitch black cast shadows", "direction": "Top-left to Bottom-right" }, "composition": { "style": "Scattered Knolling", "perspective": "Isometric / High-angle", "background": "Clean white studio backdrop" }

},

"negative_prompt": "soft light, blurry textures, metallic paper, plastic fruit, distorted text, low resolution, messy, dark background, pastel colors",

"recommended_settings": {

"model": "SDXL or Midjourney v6", "sampler": "DPM++ 2M SDE Karras", "steps": 40, "cfg_scale": 8.0, "notes": "Use high steps to resolve texture details like canvas weave and paper grain."

}

}

## 中文译文（源站提供）
{"  
"task_description": "生成一张高对比度的品牌平面图，展示出不同的材质纹理。"  

"prompt_structure": {  
"subject": "一组充满活力的黄色品牌元素，以动态的堆叠方式排列",  
"brand_identity": {  
  "name": "Marvin Studio",  
  "theme": "芒果果茶",  
  "graphics": "波普艺术风格的涂鸦，粗犷的黑色线条"  
},  
"material_mapping": {  
  "paper_items": {  
    "objects": ["购物袋", "杯垫", "吸管包装纸"],  
    "texture": "哑光表面，轻微的纸张纹理，不反光"  
  },  
  "glossy_items": {  
    "objects": ["陶瓷杯", "塑料杯盖"],  
    "texture": "高光泽，明显的镜面反光，表面光滑"  
  },  
  "fabric_items": {  
    "objects": ["手提包"],  
    "texture": "粗糙的帆布纹理，自然的布料褶皱"  
  },  
  "organic_items": {  
    "objects": ["新鲜芒果"],  
    "texture": "蜡质果皮，自然的不规则纹理，有机的形状"  
  },  
  "lighting_setup": {  
    "type": "强阳光/直射闪光",  
    "shadows": "清晰、明确的深黑色阴影",  
    "direction": "从左上到右下"  
  },  
  "composition": {  
    "style": "分散式堆叠",  
    "perspective": "等轴测/高角度",  
    "background": "干净的白色工作室背景"  
  }  
},  

"negative_prompt": "柔和的光线，模糊的纹理，金属质感纸张，塑料材质的水果，扭曲的文字，低分辨率，杂乱的场景，暗色背景，淡色调"  

"recommended_settings": {  
"model": "SDXL 或 Midjourney v6",  
"sampler": "DPM++ 2M SDE Karras",  
"steps": 40,  
"cfg_scale": 8.0,  
"notes": "使用较多的步骤来细致呈现材质纹理，如帆布的编织感和纸张的纹理。"  
}  
}

## 来源备注
- 源站作者：marvinjoker42
- 源站 UUID：6wn5zTHEjb
- 源站分类：02_电商产品虚拟摄影

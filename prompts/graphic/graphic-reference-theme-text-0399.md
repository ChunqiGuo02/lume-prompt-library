---
id: graphic-reference-theme-text-0399
title: "刺绣风格"
category: graphic
subcategory: "06_图文排版视觉传达"
aesthetic: null
tags: ["刺绣", "胸针", "篮球", "队标", "圆形", "手工", "复古", "绿色"]
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
  "title": "Adaptive Embroidered Brooch Prompt Generator",
  "version": "2.0",
  "description": "Generate a prompt for an embroidered brooch based on text description or uploaded image.",
  "inputs": {
    "reference_mode": {
      "type": "select",
      "label": "Reference Source",
      "options": ["describe manually", "use uploaded image", "combine both"],
      "default": "describe manually"
    },
    "theme_text": {
      "type": "text",
      "label": "Describe the Theme or Motif",
      "placeholder": "e.g. an owl in a forest, biomechanical skull, dancing figures"
    },
    "image_reference_description": {
      "type": "text",
      "label": "Describe what's in the uploaded image (if using image mode)",
      "placeholder": "e.g. a mechanical skull with succulents growing from it"
    },
    "shape": {
      "type": "select",
      "label": "Brooch Shape",
      "options": ["circular", "oval", "square", "irregular"],
      "default": "oval"
    },
    "style": {
      "type": "select",
      "label": "Embroidery Style",
      "options": [
        "traditional", 
        "folkloric", 
        "surreal", 
        "biomech-organic fusion", 
        "modern minimal"
      ],
      "default": "traditional"
    },
    "color_palette": {
      "type": "select",
      "label": "Color Palette",
      "options": [
        "earth tones and muted greens",
        "pastel shades",
        "neon surreal",
        "rusted metal and white florals",
        "monochrome with silver threads"
      ],
      "default": "earth tones and muted greens"
    }
  },
  "prompt_template": "{final_theme} hand-embroidered brooch, {style} style, crafted with intricate threadwork and metallic accents, soft wool and silk embroidery, fine beadwork outlining the {shape} shape, natural color palette ({color_palette}), macro shot on neutral linen or stone background, ultra-detailed artisan aesthetic, realistic embroidery textures, soft atmospheric lighting --ar 1:1 --style raw --v 6 --q 2",
  "logic": {
    "final_theme": {
      "if": "reference_mode == 'describe manually'",
      "value": "{theme_text}"
    },
    "final_theme_alt": {
      "if": "reference_mode == 'use uploaded image'",
      "value": "{image_reference_description}"
    },
    "final_theme_combined": {
      "if": "reference_mode == 'combine both'",
      "value": "{theme_text} and elements from: {image_reference_description}"
    }
  }
}

## 中文译文（源站提供）
{
  "title": "自适应刺绣胸针设计提示生成器",
  "version": "2.0",
  "description": "根据文本描述或上传的图片生成刺绣胸针的设计提示。",
  " inputs": {
    "reference_mode": {
      "type": "select",
      "label": "参考来源",
      "options": ["手动描述", "使用上传的图片", "两者结合"],
      "default": "手动描述"
    },
    "theme_text": {
      "type": "text",
      "label": "描述主题或图案",
      "placeholder": "例如：森林中的猫头鹰、仿生机械骷髅、跳舞的人物"
    },
    "image_reference_description": {
      "type": "text",
      "label": "描述上传图片中的内容（如果选择使用图片模式）",
      "placeholder": "例如：一个长有多肉植物的机械骷髅"
    },
    "shape": {
      "type": "select",
      "label": "胸针形状",
      "options": ["圆形", "椭圆形", "方形", "不规则形状"],
      "default": "椭圆形"
    },
    "style": {
      "type": "select",
      "label": "刺绣风格",
      "options": [
        "传统风格",
        "民间风格",
        "超现实风格",
        "仿生-有机融合风格",
        "现代极简风格"
      ],
      "default": "传统风格"
    },
    "color_palette": {
      "type": "select",
      "label": "配色方案",
      "options": [
        "自然色调和柔和的绿色",
        "淡粉色系",
        "霓虹超现实风格",
        "锈色金属与白色花卉图案",
        "单色搭配银色线条"
      ],
      "default": "自然色调和柔和的绿色"
    }
  },
  "prompt_template": "{最终主题} 手工刺绣胸针，{刺绣风格}，采用复杂的针线工艺和金属装饰，柔软的羊毛与丝绸材质进行刺绣，精细的珠饰勾勒出{胸针形状}，采用自然色调的配色方案({配色方案})，在中性亚麻或石质背景上拍摄的宏观照片，极具艺术匠人风范的细节处理，刺绣质感逼真，柔和的场景灯光 -- 艺术比例1:1 -- 风格原始 -- 细节质量6级 -- 图像清晰度2级",
  "logic": {
    "final_theme": {
      "if": "reference_mode == '手动描述'",
      "value": "{theme_text}"
    },
    "final_theme_alt": {
      "if": "reference_mode == '使用上传的图片'",
      "value": "{image_reference_description}"
    },
    "final_theme_combined": {
      "if": "reference_mode == '两者结合\"",
      "value": "{theme_text} 以及来自 {image_reference_description} 的元素"
    }
  }
}

## 来源备注
- 源站作者：firatbilal
- 源站 UUID：9ebf5c23af
- 源站分类：06_图文排版视觉传达

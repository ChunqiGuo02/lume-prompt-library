---
id: "product-product-the-edges-001"
title: "熔融合金风格产品渲染预设"
category: product
subcategory: "12_手工玩具手办"
aesthetic: industrial-loft
tags: ["3D渲染", "金属", "玻璃", "橙色调", "黑色背景", "科幻", "工业风", "潮玩"]
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
related_to: []
---

# 正文 prompt
{
  "image_generation_request": {
    "subject": {
      "placeholder": "【[INSERT YOUR PRODUCT HERE]】",
      "positioning": "centrally aligned, perfectly centered, levitating in mid-air",
      "framing": "full object visibility, no cropping, no cut-off edges, ample negative space around the product"
    },
    "visual_style": {
      "aesthetic": "ultra-modern industrial design, hyper-realistic product photography, cinematic tech-minimalism",
      "background": {
        "color": "#000000",
        "finish": "pure void, matte black, non-reflective"
      },
      "lighting": {
        "type": "top-down rim lighting, subtle key light",
        "effects": [
          "spectral dispersion",
          "chromatic aberration on glass edges",
          "prismatic light refraction",
          "soft caustic highlights"
        ]
      }
    },
    "materials_and_textures": {
      "primary_blends": [
        "anodized brushed aluminum with micro-circular grain",
        "frosted translucent polycarbonate with internal orange-to-white gradient glow",
        "optically clear glass with rainbow refractive edges",
        "matte sandblasted metallic surfaces"
      ],
      "details": "high-precision CNC machined edges, tactile knurling, smooth organic fillets"
    },
    "constraints": {
      "mandatory_omissions": [
        "no lighting boxes",
        "no softboxes",
        "no tripod stands",
        "no pedestals",
        "no platforms",
        "no props",
        "no text",
        "no watermarks",
        "no human hands",
        "no floor line",
        "no background gradients"
      ],
      "compositional_rules": "The product must be the sole inhabitant of the frame. Ensure zero contact with any surface. Maintain absolute symmetry and 100% black levels for the background environment."
    },
    "color_palette": {
      "background": "#000000",
      "accents": [
        "#FF4500",
        "#FFFFFF",
        "#808080",
        "spectral rainbow/prismatic dispersion"
      ]
    }
  }
}

## 中文译文（源站提供）
```json
{
  "image_generation_request": {
    "subject": {
      "placeholder": "{argument name=\"product name\" default=\"[INSERT YOUR PRODUCT HERE]\"}",
      "positioning": "居中对齐，完美居中，悬浮在半空中",
      "framing": "产品完全可见，无裁剪，无边缘截断，产品周围留有充足的负空间"
    },
    "visual_style": {
      "aesthetic": "超现代工业设计，超现实产品摄影，电影级科技极简主义",
      "background": {
        "color": "#000000",
        "finish": "纯粹的虚空，哑光黑，无反光"
      },
      "lighting": {
        "type": "自上而下的轮廓光，柔和的主光",
        "effects": [
          "光谱色散",
          "玻璃边缘的色差",
          "棱镜光折射",
          "柔和的焦散高光"
        ]
      }
    },
    "materials_and_textures": {
      "primary_blends": [
        "阳极氧化拉丝铝，带微圆形纹理",
        "磨砂半透明聚碳酸酯，内部有橙色到白色的渐变光晕",
        "光学透明玻璃，带彩虹折射边缘",
        "哑光喷砂金属表面"
      ],
      "details": "高精度 CNC 机加工边缘，触感滚花，平滑的有机圆角"
    },
    "constraints": {
      "mandatory_omissions": [
        "无灯箱",
        "无柔光箱",
        "无三脚架",
        "无底座",
        "无平台",
        "无道具",
        "无文字",
        "无水印",
        "无人手",
        "无地平线",
        "无背景渐变"
      ],
      "compositional_rules": "产品必须是画面中唯一的物体。确保与任何表面零接触。背景环境保持绝对对称和 100% 纯黑。"
    },
    "color_palette": {
      "background": "#000000",
      "accents": [
        "#FF4500",
        "#FFFFFF",
        "#808080",
        "光谱彩虹/棱镜色散"
      ]
    }
  }
}
```

## 来源备注
- 源站作者：Lloyd Creates
- 源站 UUID：XaLSzmzusA
- 源站分类：12_手工玩具手办

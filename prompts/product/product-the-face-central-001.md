---
id: "product-the-face-central-001"
title: "七位相同女性身着多样街头服饰，对称排列，展现超现实时尚大片效"
category: product
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["超现实", "时尚", "街潮", "摄影", "对称", "重复", "灰调", "女装"]
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
  "type": "image_generation_prompt",
  "aspect_ratio": "3:2",
  "style": "photorealistic, cinematic fashion editorial, surreal multiplicity",
  "identity_preservation": {
    "use_reference_image": true,
    "strict_identity_lock": true,
    "alter_face": false,
    "alter_expression": false,
    "alter_hairstyle": false,
    "notes": "The central woman’s face, hair, skin tone, proportions, and expression must match the reference image exactly. Do not modify or beautify the face."
  },
  "subject": {
    "gender": "female",
    "central_figure": {
      "pose": "front-facing camera, stoic expression, hands clasped calmly in front",
      "body_language": "confident, grounded, composed"
    },
    "clones": {
      "count": 6,
      "description": "Six identical female clones of the central woman",
      "arrangement": "single-file line behind the central figure",
      "head_positions": "clones lean heads out symmetrically left and right in a cascading fan pattern",
      "visibility": "all seven faces fully visible",
      "identity": "each clone has the exact same face and hairstyle as the central woman"
    }
  },
  "wardrobe": {
    "style": "women’s streetwear",
    "variation": "each figure wears different casual outfits",
    "items": [
      "hoodies",
      "graphic t-shirts",
      "oversized jackets",
      "baggy pants",
      "sneakers",
      "caps"
    ],
    "colors": "mixed, random streetwear colors and styles",
    "rule": "clothing may vary, but faces must remain identical"
  },
  "environment": {
    "background": "plain light grey seamless studio backdrop",
    "text_element": {
      "content": "{"Text Overlay" "OMER J"}",
      "placement": "centered in the composition",
      "style": "clean, bold, fashion-editorial typography"
    }
  },
  "lighting": {
    "type": "soft professional studio lighting",
    "effects": [
      "even illumination across all faces",
      "subtle shadows for depth",
      "high contrast without harsh highlights"
    ]
  },
  "composition": {
    "symmetry": "highly symmetrical layout",
    "focus": "sharp focus on all faces",
    "visual_effect": "surreal multiplicity with mirrored balance"
  },
  "camera": {
    "resolution": "8K",
    "sharpness": "ultra-sharp",
    "details": "extreme clarity in fabric textures, skin texture, and facial detail"
  },
  "quality": {
    "realism": "pure photorealism",
    "editorial_vibe": "high-end fashion magazine aesthetic",
    "no_ai_artifacts": true
  },
  "constraints": [
    "Do not change the woman’s face",
    "Do not stylize or distort facial features",
    "No cartoon or CGI look",
    "No facial duplication errors",
    "No watermarks or logos"
  ],
  "output_goal": "Create a photorealistic, surreal fashion editorial image featuring one woman and six identical female clones in a symmetrical studio composition, preserving the exact facial identity while showcasing varied streetwear styles."
}

## 中文译文（源站提供）
```json
{
  "type": "image_generation_prompt",
  "aspect_ratio": "3:2",
  "style": "逼真摄影、电影时尚编辑、超现实多重性",
  "identity_preservation": {
    "use_reference_image": true,
    "strict_identity_lock": true,
    "alter_face": false,
    "alter_expression": false,
    "alter_hairstyle": false,
    "notes": "中心女性的面部、发型、肤色、比例和表情必须与参考图像完全一致。请勿修改或美化面部。"
  },
  "subject": {
    "gender": "女性",
    "central_figure": {
      "pose": "正对镜头，表情严肃，双手平静地抱在身前",
      "body_language": "自信、沉稳、镇定"
    },
    "clones": {
      "count": 6,
      "description": "六个与中心女性完全相同的女性克隆体",
      "arrangement": "在中心人物身后排成一列",
      "head_positions": "克隆体头部对称地向左右两侧倾斜，呈扇形展开",
      "visibility": "所有七张脸都完全可见",
      "identity": "每个克隆体的脸和发型都与中心女性完全相同"
    }
  },
  "wardrobe": {
    "style": "女式街头服饰",
    "variation": "每个人物穿着不同的休闲服装",
    "items": [
      "连帽衫",
      "印花 T 恤",
      "oversized 夹克",
      "宽松裤",
      "运动鞋",
      "帽子"
    ],
    "colors": "混合、随机的街头服饰颜色和款式",
    "rule": "服装可以不同，但面部必须保持一致"
  },
  "environment": {
    "background": "纯浅灰色无缝影棚背景",
    "text_element": {
      "content": "{\"Text Overlay\" \"OMER J\"}",
      "placement": "居中于构图",
      "style": "简洁、粗体、时尚编辑字体"
    }
  },
  "lighting": {
    "type": "柔和专业的影棚灯光",
    "effects": [
      "所有面部均匀照明",
      "细微阴影增加深度",
      "高对比度，无刺眼高光"
    ]
  },
  "composition": {
    "symmetry": "高度对称的布局",
    "focus": "所有面部都清晰对焦",
    "visual_effect": "超现实的多重性与镜像平衡"
  },
  "camera": {
    "resolution": "8K",
    "sharpness": "超清晰",
    "details": "织物纹理、皮肤纹理和面部细节极致清晰"
  },
  "quality": {
    "realism": "纯粹的逼真摄影",
    "editorial_vibe": "高端时尚杂志美学",
    "no_ai_artifacts": true
  },
  "constraints": [
    "请勿改变女性的面部",
    "请勿风格化或扭曲面部特征",
    "无卡通或 CGI 外观",
    "无面部复制错误",
    "无水印或标志"
  ],
  "output_goal": "创建一张逼真的、超现实的时尚编辑图片，画面中有一名女性和六个完全相同的女性克隆体，采用对称的影棚构图，在展示多样化街头服饰风格的同时，保留精确的面部特征。"
}
```

## 来源备注
- 源站作者：𝗦𝗮𝗻𝗶𝗮
- 源站 UUID：68qsNqPJIl
- 源站分类：05_人物肖像与写实摄影

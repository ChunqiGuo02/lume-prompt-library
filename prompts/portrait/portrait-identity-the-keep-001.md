---
id: "portrait-identity-the-keep-001"
title: "黑白西装男表情网格身份替换"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["黑白", "男性", "欧美", "西装", "正装", "网格", "棚拍", "写真"]
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
  "generation_request": {
    "meta_data": {
      "task_type": "bw_male_expression_grid_identity_swap",
      "language": "en",
      "priority": "highest",
      "version": "v1.0_BW_MALE_GRID_KEEP_POSES_SWAP_IDENTITY"
    },
    "input": {
      "mode": "image_to_image",
      "reference_image_usage": "very_high",
      "preserve_identity": true,
      "preserve_facial_features": true,
      "preserve_hairstyle": true,
      "notes": "PRIMARY STRUCTURE ANCHOR: use the uploaded male 4x4 grid image (suit photobooth). Keep the exact 4x4 layout, crop, spacing, poses, gestures, hand placements, and framing in every panel. PRIMARY IDENTITY ANCHOR: use the uploaded reference photo of the target adult man. Replace the man in ALL panels with the reference identity while preserving the original pose and expression intensity. Keep suit-and-tie styling and clean studio background. Maintain consistent identity across all 16 panels."
    },
    "output": {
      "aspect_ratio": "1:1",
      "resolution": "ultra_high",
      "num_images": 1,
      "layout": {
        "type": "grid",
        "rows": 4,
        "cols": 4,
        "gutter": "thin",
        "panel_consistency": "very_high"
      },
      "sharpness": "crisp_studio",
      "grain": "subtle_analog_bw"
    },
    "scene": {
      "environment": "clean white studio backdrop",
      "lighting": {
        "style": "high-key studio",
        "key_light": "front softbox",
        "fill": "balanced fill",
        "avoid": "dramatic cinematic shadows"
      },
      "camera": {
        "lens": "50mm",
        "framing": "mid chest to head (varies per panel but keep same as structure image)",
        "focus": "eyes sharp"
      }
    },
    "subject": {
      "type": "adult man",
      "wardrobe": "black suit, white shirt, black tie (match structure image), no logos",
      "grooming": "match reference hairstyle as closely as possible while keeping overall look consistent",
      "anatomy_rules": "realistic hands, correct fingers, no distortions"
    },
    "style": {
      "color": "pure black and white",
      "contrast": "medium_high",
      "background": "keep identical to structure image",
      "finish": "clean studio print look"
    },
    "quality_control": {
      "identity_lock": "strict",
      "hands_priority": "very_high",
      "avoid": [
        "extra fingers",
        "missing fingers",
        "deformed hands",
        "warped face",
        "uneven eyes",
        "melted mouth",
        "identity drift across panels",
        "text",
        "watermark",
        "logo"
      ]
    },
    "negative_prompt": [
      "color",
      "sepia",
      "cinematic lighting",
      "blur",
      "low resolution",
      "distorted anatomy",
      "plastic skin",
      "face mismatch"
    ]
  }
}

## 中文译文（源站提供）
```json
{
  "generation_request": {
    "meta_data": {
      "task_type": "bw_male_expression_grid_identity_swap",
      "language": "zh-Hans",
      "priority": "highest",
      "version": "v1.0_BW_MALE_GRID_KEEP_POSES_SWAP_IDENTITY"
    },
    "input": {
      "mode": "image_to_image",
      "reference_image_usage": "very_high",
      "preserve_identity": true,
      "preserve_facial_features": true,
      "preserve_hairstyle": true,
      "notes": "主要结构锚点：使用上传的男性 4x4 网格图像（西装照相亭）。在每个面板中保持精确的 4x4 布局、裁剪、间距、姿势、手势、手部位置和构图。主要身份锚点：使用上传的目标成年男性的参考照片。在所有面板中用参考身份替换男性，同时保留原始姿势和表情强度。保持西装领带造型和干净的影棚背景。在所有 16 个面板中保持身份一致性。"
    },
    "output": {
      "aspect_ratio": "1:1",
      "resolution": "ultra_high",
      "num_images": 1,
      "layout": {
        "type": "grid",
        "rows": 4,
        "cols": 4,
        "gutter": "thin",
        "panel_consistency": "very_high"
      },
      "sharpness": "crisp_studio",
      "grain": "subtle_analog_bw"
    },
    "scene": {
      "environment": "干净的白色影棚背景",
      "lighting": {
        "style": "高调影棚",
        "key_light": "前置柔光箱",
        "fill": "平衡补光",
        "avoid": "戏剧性电影阴影"
      },
      "camera": {
        "lens": "50mm",
        "framing": "胸部中部到头部（每个面板有所不同，但与结构图像保持一致）",
        "focus": "眼睛锐利"
      }
    },
    "subject": {
      "type": "成年男性",
      "wardrobe": "黑色西装、白色衬衫、黑色领带（与结构图像匹配），无标志",
      "grooming": "尽可能匹配参考发型，同时保持整体外观一致",
      "anatomy_rules": "逼真的手部，正确的手指，无变形"
    },
    "style": {
      "color": "纯黑白",
      "contrast": "中高",
      "background": "与结构图像保持一致",
      "finish": "干净的影棚打印效果"
    },
    "quality_control": {
      "identity_lock": "strict",
      "hands_priority": "very_high",
      "avoid": [
        "多余的手指",
        "缺失的手指",
        "变形的手",
        "扭曲的脸",
        "不均匀的眼睛",
        "融化的嘴巴",
        "面板间身份漂移",
        "文字",
        "水印",
        "标志"
      ]
    },
    "negative_prompt": [
      "彩色",
      "棕褐色",
      "电影照明",
      "模糊",
      "低分辨率",
      "解剖结构扭曲",
      "塑料皮肤",
      "面部不匹配"
    ]
  }
}
```

## 来源备注
- 源站作者：Özge Döner
- 源站 UUID：9Jek0pQNDF
- 源站分类：05_人物肖像与写实摄影

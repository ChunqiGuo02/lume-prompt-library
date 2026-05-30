---
id: story_board-reference-match-perspective-0199
title: "时尚街拍多视角拼贴"
category: story_board
subcategory: "09_故事分镜角色设定"
aesthetic: null
tags: ["时尚", "街头", "拼贴", "网格", "男性", "橙色", "工装", "广角"]
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
related_to: []
---

# 正文 prompt
{
  "meta_control": {
    "generation_mode": "multi_panel_consistent",
    "priority_stack": ["identity_lock", "perspective_physics", "material_fidelity", "environmental_coherence"],
    "quality_target": "editorial_print_ready"
  },
  "intent": {
    "primary": "High-fashion streetwear editorial with extreme wide-angle perspective study",
    "secondary": "Technical demonstration of foreshortening and forced perspective",
    "publication_context": "Double-page spread, fashion magazine collage layout"
  },
  "frame": {
    "aspect_ratio": "3:4",
    "layout": {
      "type": "2x2 grid collage",
      "gutter_width": "2px white or seamless",
      "panel_uniformity": "identical dimensions per panel"
      }
  },
  "subject": {
    "type": "Human male model",
    "identity_lock": {
      "enforcement_level": "strict",
      "anchor_features": ["face_geometry", "skin_tone", "body_proportions", "hair_style"]
    },
    "biometrics": {
      "age_presentation": "{"age presentation" "22-30"}",
      "height_cm": {"height cm" "178"},
      "build": "Athletic, masculine proportions",
      "ethnicity_presentation": "Your real appearance from reference image"
    },
    "facial_signature": {
      "structure": "As in reference image (identity locked)",
      "eyes": "Match reference image",
      "nose": "Match reference image",
      "lips": "Match reference image",
      "skin": "Match reference — natural texture preserved",
      "expression_default": "Neutral confidence, direct eye contact"
    },
    "hair": {
      "style": "Match reference image",
      "texture": "Match reference",
      "behavior": "Natural movement responding to pose changes"
    },
    "wardrobe": {
      "jacket": {
        "item": "Oversized bomber jacket",
        "material": "Ripstop nylon, high gloss",
        "color": "Neon orange (vivid, saturated)",
        "state": "Unzipped, hanging open",
        "light_behavior": "Sharp specular highlights, visible weave texture"
      },
      "top": {
        "item": "Fitted black crew-neck T-shirt",
        "material": "Thick cotton jersey",
        "fit": "Slightly tight, masculine silhouette",
        "details": "Minimal, no logos, subtle ribbed collar"
      },
      "pants": {
        "item": "Tactical cargo pants",
        "material": "Heavy cotton twill, matte",
        "color": "Charcoal grey",
        "details": "Multiple pockets, silver buckles, black nylon straps, baggy fit"
      },
      "footwear": {
        "item": "Platform sneakers",
        "color": "White, chunky sole",
        "condition": "Clean but worn, realistic sole texture"
      }
    },
    "accessories": {
      "neck": "Layered heavy silver Cuban link chains",
      "hands": "Silver rings on index and middle fingers both hands"
    }
  },
  "panels": [
    {
      "id": 1,
      "position": "top-left",
      "concept": "Extreme low-angle sneaker perspective",
    }

## 中文译文（源站提供）
```json
{
  "meta_control": {
    "generation_mode": "multi-panel-consistent",
    "priority_stack": ["identity-lock", "perspective-physics", "material-fidelity", "environmental-coherence"],
    "quality_target": "editorial-print-ready"
  },
  "intent": {
    "primary": "高定时装街头服饰专题，采用超广角透视研究",
    "secondary": "透视缩短和强制透视的技术演示",
    "publication_context": "跨页，时尚杂志拼贴布局"
  },
  "frame": {
    "aspect_ratio": "3:4",
    "layout": {
      "type": "2x2 网格拼贴",
      "gutter_width": "2px 白色或无缝",
      "panel_uniformity": "每个面板尺寸相同"
      }
  },
  "subject": {
    "type": "男性模特",
    "identity_lock": {
      "enforcement_level": "strict",
      "anchor_features": ["面部几何", "肤色", "身体比例", "发型"]
    },
    "biometrics": {
      "age_presentation": "{\"age presentation\" \"22-30\"}",
      "height_cm": {"height cm" "178"},
      "build": "健壮，男性比例",
      "ethnicity_presentation": "参考图像中的真实外观"
    },
    "facial_signature": {
      "structure": "与参考图像一致（身份锁定）",
      "eyes": "与参考图像一致",
      "nose": "与参考图像一致",
      "lips": "与参考图像一致",
      "skin": "与参考图像一致 — 保留自然纹理",
      "expression_default": "自信中性，直视镜头"
    },
    "hair": {
      "style": "与参考图像一致",
      "texture": "与参考图像一致",
      "behavior": "自然摆动，随姿势变化"
    },
    "wardrobe": {
      "jacket": {
        "item": "超大号飞行员夹克",
        "material": "防撕裂尼龙，高光泽",
        "color": "霓虹橙（鲜艳，饱和）",
        "state": "未拉拉链，敞开",
        "light_behavior": "锐利镜面高光，可见编织纹理"
      },
      "top": {
        "item": "修身黑色圆领 T 恤",
        "material": "厚棉质平纹针织布",
        "fit": "略紧身，男性化轮廓",
        "details": "极简，无标志，微妙罗纹领口"
      },
      "pants": {
        "item": "战术工装裤",
        "material": "厚棉斜纹布，哑光",
        "color": "炭灰色",
        "details": "多个口袋，银色搭扣，黑色尼龙绑带，宽松版型"
      },
      "footwear": {
        "item": "厚底运动鞋",
        "color": "白色，厚实鞋底",
        "condition": "干净但有磨损痕迹，逼真鞋底纹理"
      }
    },
    "accessories": {
      "neck": "多层厚银色古巴链",
      "hands": "双手食指和中指佩戴银戒指"
    }
  },
  "panels": [
    {
      "id": 1,
      "position": "top-left",
      "concept": "超低角度运动鞋透视",
    }
```

## 来源备注
- 源站作者：Alejo
- 源站 UUID：6a8DDmmyyV
- 源站分类：09_故事分镜角色设定

---
id: portrait-subject-identity-ana-2784
title: "高保真明星换装生成：保留面部特征，融合华丽礼服与黄金时刻光影"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["写真", "暖色调", "逆光", "卷发", "亮片", "浅紫", "户外", "露台"]
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
  "request_configuration": {
    "workflow": "image_to_image_fusion",
    "priority": "identity_preservation"
  },
  "source_references": {
    "primary_subject": {
      "id": "image_1",
      "target_element": "facial_identity",
      "subject_name": "Ana de Armas",
      "constraints": "zero_morphing_policy"
    },
    "attire_reference": {
      "id": "image_2",
      "target_element": "full_outfit",
      "transfer_attributes": ["fabric_texture", "color_palette", "layering"]
    }
  },
  "generation_parameters": {
    "subject_specs": {
      "identity": {
        "face": "{"celebrity name" "Ana de Armas"} (reference image 1)",
        "features": "locked",
        "skin_texture": "hyper-realistic, detailed pores, natural blemishes"
      },
      "anatomy": {
        "pose": "dynamic three-quarter turn, hand resting on hip",
        "body_type": "consistent with Ana de Armas"
      },
      "styling": {
        "outfit": "cloned from image 2",
        "hair": "voluminous, natural wave, catching backlight"
      }
    },
    "environment_specs": {
      "setting": {
        "location": "upscale outdoor terrace",
        "background_depth": "deep_blur",
        "elements": ["soft architectural lines", "golden hour warmth", "vibrant greenery"]
      },
      "lighting": {
        "mode": "vibrant_high_key",
        "primary_source": "bright natural sunlight",
        "secondary_source": "soft rim lighting to separate subject from background",
        "hdr_profile": "ultra-high dynamic range"
      }
    },
    "camera_specs": {
      "optics": "85mm prime lens",
      "aperture": "f/1.8",
      "focus": "sharp on eyes",
      "quality_level": "4K UHD"
    }
  },
  "negative_prompt_constraints": [
    "facial distortion",
    "altered features",
    "low resolution",
    "dull lighting",
    "flat textures" Ratio 3.4 
  ]
}

## 中文译文（源站提供）
```json
{
  "request_configuration": {
    "workflow": "image_to_image_fusion",
    "priority": "identity_preservation"
  },
  "source_references": {
    "primary_subject": {
      "id": "image_1",
      "target_element": "facial_identity",
      "subject_name": "Ana de Armas",
      "constraints": "zero_morphing_policy"
    },
    "attire_reference": {
      "id": "image_2",
      "target_element": "full_outfit",
      "transfer_attributes": ["fabric_texture", "color_palette", "layering"]
    }
  },
  "generation_parameters": {
    "subject_specs": {
      "identity": {
        "face": "{\"celebrity name\" \"Ana de Armas\"} (参考图像 1)",
        "features": "locked",
        "skin_texture": "超逼真，毛孔细节，自然瑕疵"
      },
      "anatomy": {
        "pose": "动态四分之三转身，手扶臀部",
        "body_type": "与 Ana de Armas 一致"
      },
      "styling": {
        "outfit": "从图像 2 克隆",
        "hair": "蓬松，自然波浪，捕捉背光"
      }
    },
    "environment_specs": {
      "setting": {
        "location": "高档户外露台",
        "background_depth": "深度模糊",
        "elements": ["柔和的建筑线条", "黄金时段的温暖", "充满活力的绿色植物"]
      },
      "lighting": {
        "mode": "鲜艳高调",
        "primary_source": "明亮的自然阳光",
        "secondary_source": "柔和的轮廓光以将主体与背景分离",
        "hdr_profile": "超高动态范围"
      }
    },
    "camera_specs": {
      "optics": "85mm 定焦镜头",
      "aperture": "f/1.8",
      "focus": "眼睛锐利对焦",
      "quality_level": "4K UHD"
    }
  },
  "negative_prompt_constraints": [
    "面部扭曲",
    "特征改变",
    "低分辨率",
    "沉闷的灯光",
    "平面纹理"
  ]
}
```

## 来源备注
- 源站作者：Mikasa
- 源站 UUID：OseI2VpBRS
- 源站分类：05_人物肖像与写实摄影

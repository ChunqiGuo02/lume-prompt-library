---
id: portrait-the-expression-sultry-1609
title: "湿发魅影：双视角电影感氛围人像"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["性感", "神秘", "暖色调", "暗调", "蜡烛", "湿发", "烟雾", "电影感"]
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
  "request_metadata": {
    "version": "4.0-Allure-DualView",
    "priority_focus": "Sultry expression, cinematic atmosphere, and organic skin textures",
    "aspect_ratio": "3:4"
  },
  "output_specifications": {
    "instructions": "Generate two highly atmospheric images in one batch with consistent 'Sultry & Charismatic' vibes.",
    "batch_size": 2,
    "views": [
      {
        "image_id": "A",
        "angle": "Extreme profile view",
        "expression": "{\"profile expression\" \"Mysterious, chin slightly tilted down, looking back over the shoulder with a heavy-lidded gaze\"}"
      },
      {
        "image_id": "B",
        "angle": "Front portrait view",
        "expression": "{\"front expression\" \"Smoldering direct gaze, intense eye contact, a subtle half-smile (smirk) playing on the lips\"}"
      }
    ]
  },
  "subject_configuration": {
    "identity": {
      "mode": "Reference-driven fidelity",
      "source": "Uploaded Reference Image",
      "instruction": "Preserve the unique facial charisma and structural essence of the reference subject",
      "preservation_weight": 0.95
    },
    "sultry_attributes": {
      "eyes": {
        "state": "Bedroom eyes, heavy-lidded, slightly squinted for intensity",
        "details": "Dilated pupils, moist limbal rings, intense 'come-hither' look",
        "reflection": "Warm candlelight flickers in the irises"
      },
      "lips": {
        "state": "Seductively parted, relaxed jaw",
        "surface": "High-gloss sheen, glistening moisture, visible soft ridges",
        "color": "Deep natural rose with a hint of bitten-lip flush"
      },
      "hair": {
        "style": "Messy wet-look, damp strands clinging to the neck and collarbone",
        "texture": "Saturated, shimmering under low light"
      }
    }
  },
  "environmental_rendering": {
    "atmosphere": {
      "vibe": "Moody, intimate, and clandestine",
      "special_fx": "A thin veil of hazy mist or subtle smoke in the background",
      "moisture": "Hyper-realistic glistening sweat on the décolletage and temples"
    },
    "lighting_and_color": {
      "lighting_style": "Chiaroscuro (dramatic light and shadow), low-key cinematic lighting",
      "key_light": "Warm amber rim light to define the silhouette",
      "fill_light": "Deep midnight purple or moody indigo shadows",
      "color_palette": ["Midnight Purple", "Amber Gold", "Deep Crimson Accents", "Warm Skin Tones"],
      "background": {
        "description": "Dark, out-of-focus lounge or velvet textures",
        "depth_of_field": "Extremely shallow (f/1.4 aesthetic)"
      }
    },
  "technical_execution": {
    "rendering_engine": "High-fidelity path tracing",
    "focal_length": "85mm prime lens",
    "texture_detail": "Micro-expression lines, pore-level sweat adhesion, no digital smoothing",
    "post_processing": "35mm film grain, rich contrast, vintage cinematic color grading"
  }
}

## 中文译文（源站提供）
```json
{
  "request_metadata": {
    "version": "4.0-Allure-DualView",
    "priority_focus": "魅惑的表情、电影般的氛围和自然的皮肤纹理",
    "aspect_ratio": "3:4"
  },
  "output_specifications": {
    "instructions": "以一批次生成两张具有一致“魅惑且富有魅力”氛围的高度艺术化图像。",
    "batch_size": 2,
    "views": [
      {
        "image_id": "A",
        "angle": "极致侧面视角",
        "expression": "神秘，下巴略微向下倾斜，回头望向肩膀，眼神半垂"
      },
      {
        "image_id": "B",
        "angle": "正面肖像视角",
        "expression": "炽热的直视，强烈的眼神交流，嘴唇上带着一丝微妙的半笑（坏笑）"
      }
    ]
  },
  "subject_configuration": {
    "identity": {
      "mode": "参考驱动保真",
      "source": "上传的参考图像",
      "instruction": "保留参考主体的独特面部魅力和结构精髓",
      "preservation_weight": 0.95
    },
    "sultry_attributes": {
      "eyes": {
        "state": "魅惑眼神，半垂眼睑，略微眯起以增强强度",
        "details": "瞳孔放大，湿润的角膜缘，强烈的“勾魂”眼神",
        "reflection": "虹膜中烛光摇曳的暖光"
      },
      "lips": {
        "state": "诱惑地微张，下颌放松",
        "surface": "高光泽，闪亮湿润，可见柔软的唇纹",
        "color": "深邃的自然玫瑰色，带有一丝咬唇的红晕"
      },
      "hair": {
        "style": "凌乱的湿发造型，湿漉漉的发丝贴在颈部和锁骨上",
        "texture": "在弱光下饱和闪烁"
      }
    }
  },
  "environmental_rendering": {
    "atmosphere": {
      "vibe": "忧郁、亲密、隐秘",
      "special_fx": "背景中一层薄薄的朦胧雾气或微妙的烟雾",
      "moisture": "胸部和太阳穴上超逼真的闪亮汗珠"
    },
    "lighting_and_color": {
      "lighting_style": "明暗对比法（戏剧性的光影），低调电影照明",
      "key_light": "暖琥珀色轮廓光以勾勒轮廓",
      "fill_light": "深午夜紫色或忧郁的靛蓝色阴影",
      "color_palette": ["午夜紫", "琥珀金", "深绯红点缀", "暖肤色"],
      "background": {
        "description": "黑暗、失焦的休息室或天鹅绒纹理",
        "depth_of_field": "景深极浅（f/1.4 美学）"
      }
    }
  },
  "technical_execution": {
    "rendering_engine": "高保真路径追踪",
    "focal_length": "85mm 定焦镜头",
    "texture_detail": "微表情纹理，毛孔级汗珠附着，无数字平滑处理",
    "post_processing": "35mm 胶片颗粒，丰富对比度，复古电影调色"
  }
}
```

## 来源备注
- 源站作者：MapleShaw
- 源站 UUID：KzWOJeHtNJ
- 源站分类：05_人物肖像与写实摄影

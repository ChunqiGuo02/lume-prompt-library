---
id: portrait-the-type-resolution-1194
title: "时尚人像海报设计，融合文字与肖像的高级视觉表达"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["时尚", "人像", "摄影", "简约", "高级", "深灰", "优雅", "静谧"]
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
  "meta": {
    "image_quality": "High",
    "image_type": "Editorial/Fashion Photography with Graphic Overlay",
    "resolution_estimation": "High resolution, likely 1080x1350 or similar portrait aspect ratio",
    "file_characteristics": {
      "compression_artifacts": "Low",
      "noise_level": "Low",
      "lens_type_estimation": "Portrait lens (approx 85mm), shallow depth of field simulated or real"
    }
  },
  "global_context": {
    "scene_description": "A stylized fashion editorial composition featuring a side-profile portrait of a young woman with short, wavy brown hair. She is framed within a thin white rectangular outline against a dark, matte charcoal-grey background. To her left, outside the frame, is white typography including a logo and a quote. The lighting is soft and moody, highlighting her facial features and hair texture.",
    "environment_type": "Studio",
    "time_of_day": "Indiscernible/Controlled Studio Lighting",
    "weather_atmosphere": "Serene, Sophisticated, Melancholic, Elegant",
    "lighting": {
      "source": "Artificial Studio Softbox",
      "direction": "Front-left relative to the model (illuminating face profile) with subtle rim lighting on hair",
      "quality": "Soft, Diffused",
      "color_temperature": "Neutral to slightly warm on skin tones"
    },
    "color_palette": {
      "dominant_hex_estimates": [
        "#2C2F33",
        "#3A3D42",
        "#E8CBBF",
        "#5D4B42"
      ],
      "accent_colors": [
        "#FFFFFF",
        "#D48C7D"
      ],
      "contrast_level": "Medium-High (due to dark background vs pale skin/white text)"
    }
  },
  "composition": {
    "camera_angle": "Eye-level",
    "framing": "Medium close-up (Head and shoulders)",
    "depth_of_field": "Medium (Subject sharp, background uniform)",
    "focal_point": "The model's face in profile and the white typography",
    "symmetry_type": "Asymmetrical balance (Text on left, Subject on right)",
    "rule_of_thirds_alignment": "Model's face aligns with the right vertical third line; Text aligns with the upper-left intersection area"
  },
  "objects": [
    {
      "id": "obj_001",
      "label": "Background",
      "category": "Backdrop",
      "location": {
        "relative_position": "Full Frame",
        "bounding_box_percentage": {
          "x": 0.0,
          "y": 0.0,
          "width": 1.0,
          "height": 1.0
        }
      },
      "dimensions_relative": "Full canvas",
      "distance_from_camera": "Far",
      "pose_orientation": "Vertical plane",
      "material": "Matte paper or digital fill",
      "surface_properties": {
        "texture": "Smooth with very fine grain",
        "reflectivity": "None",
        "micro_details": "Uniform color",
        "wear_state": "New"
      },
      "color_details": {
        "base_color_hex": "#2C2F33",
        "secondary_colors": [],
        "gradient_or_pattern": "Subtle vignetting or lighting falloff towards cor"
    }
  }
}

## 中文译文（源站提供）
```json
{
  "meta": {
    "image_quality": "高",
    "image_type": "带有图形叠加的社论/时尚摄影",
    "resolution_estimation": "高分辨率，可能为 1080x1350 或类似的人像宽高比",
    "file_characteristics": {
      "compression_artifacts": "低",
      "noise_level": "低",
      "lens_type_estimation": "人像镜头（约 85 毫米），模拟或真实的浅景深"
    }
  },
  "global_context": {
    "scene_description": "一幅风格化的时尚社论构图，特写了一位留着棕色短卷发的年轻女性的侧面肖像。她被一个细长的白色矩形边框框住，背景是深色哑光炭灰色。在她左侧，边框之外，是白色的文字，包括一个标志和一句引语。光线柔和而富有情调，突出了她的面部特征和发丝纹理。",
    "environment_type": "影棚",
    "time_of_day": "无法辨别/受控的影棚照明",
    "weather_atmosphere": "宁静、精致、忧郁、优雅",
    "lighting": {
      "source": "人工影棚柔光箱",
      "direction": "相对于模特的前左侧（照亮面部侧影），头发上有微妙的轮廓光",
      "quality": "柔和、漫射",
      "color_temperature": "中性到肤色略暖"
    },
    "color_palette": {
      "dominant_hex_estimates": [
        "#2C2F33",
        "#3A3D42",
        "#E8CBBF",
        "#5D4B42"
      ],
      "accent_colors": [
        "#FFFFFF",
        "#D48C7D"
      ],
      "contrast_level": "中高（由于深色背景与浅肤色/白色文字形成对比）"
    }
  },
  "composition": {
    "camera_angle": "平视",
    "framing": "中景特写（头部和肩部）",
    "depth_of_field": "中等（主体清晰，背景均匀）",
    "focal_point": "模特的侧脸和白色文字",
    "symmetry_type": "不对称平衡（文字在左，主体在右）",
    "rule_of_thirds_alignment": "模特的脸与右侧垂直三分线对齐；文字与左上角交叉区域对齐"
  },
  "objects": [
    {
      "id": "obj_001",
      "label": "背景",
      "category": "背景布",
      "location": {
        "relative_position": "全画幅",
        "bounding_box_percentage": {
          "x": 0.0,
          "y": 0.0,
          "width": 1.0,
          "height": 1.0
        }
      },
      "dimensions_relative": "全画布",
      "distance_from_camera": "远",
      "pose_orientation": "垂直平面",
      "material": "哑光纸或数字填充",
      "surface_properties": {
        "texture": "光滑，带有非常细微的纹理",
        "reflectivity": "无",
        "micro_details": "颜色均匀",
        "wear_state": "新"
      },
      "color_details": {
        "base_color_hex": "#2C2F33",
        "secondary_colors": [],
        "gradient_or_pattern": "角落处有微妙的渐晕或光线衰减"
      }
    }
  ]
}
```

## 来源备注
- 源站作者：Heisenberg
- 源站 UUID：BkjDoJw5ny
- 源站分类：05_人物肖像与写实摄影

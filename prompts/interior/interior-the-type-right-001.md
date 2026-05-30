---
id: "interior-the-type-right-001"
title: "皇家肖像油画创作"
category: interior
subcategory: "04_创意脑洞特效合成"
aesthetic: null
tags: ["油画", "君主", "肖像", "宫廷", "权杖", "王座", "暖色调", "庄严"]
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
    "image_type": "Oil Painting",
    "resolution_estimation": "1024x1344",
    "file_characteristics": {
      "compression_artifacts": "Low",
      "noise_level": "Low",
      "lens_type_estimation": "Standard perspective (simulated portrait lens)"
    }
  },
  "global_context": {
    "scene_description": "A formal, full-length oil portrait of a King in elaborate regal military attire, standing centrally in a grand palatial hall. He holds a golden scepter and an orb. The room features a red velvet and gold ornate throne, large tapestries, a framed portrait on the wall, and two guards standing at attention in the background. The floor is covered with a complex Persian-style rug and a checkered marble pattern. The painting has a visible 'craquelure' texture, suggesting an aged canvas.",
    "environment_type": "Indoor",
    "time_of_day": "Day",
    "weather_atmosphere": "Serene, formal, and prestigious",
    "lighting": {
      "source": "Natural light from a large arched window on the right",
      "direction": "Side-lit from the right",
      "quality": "Soft, diffused indoor light",
      "color_temperature": "Warm, approximately 3500K"
    },
    "color_palette": {
      "dominant_hex_estimates": [
        "#8B2323",
        "#B8860B",
        "#2F4F4F",
        "#D2B48C",
        "#1A1A1A"
      ],
      "accent_colors": [
        "#FFD700",
        "#FF0000",
        "#4169E1"
      ],
      "contrast_level": "High"
    }
  },
  "composition": {
    "camera_angle": "Eye-level",
    "framing": "Full-shot / Wide portrait",
    "depth_of_field": "Deep",
    "focal_point": "The central figure in the red uniform",
    "symmetry_type": "Asymmetrical but balanced",
    "rule_of_thirds_alignment": "Figure is centered; throne occupies the right third; window at the upper right intersection.",
    "reference": "Mantain the facial caracteristics of the reference image."
  },
  "objects": [
    {
      "id": "obj_001",
      "label": "Monarch / General",
      "category": "Person",
      "location": {
        "relative_position": "Center foreground",
        "bounding_box_percentage": {
          "x": 30.0,
          "y": 25.0,
          "width": 40.0,
          "height": 70.0
        }
      },
      "dimensions_relative": "Large",
      "distance_from_camera": "Near",
      "pose_orientation": "Standing upright, facing forward, neutral expression",
      "material": "Fabric, fur, metal",
      "surface_properties": {
        "texture": "Woolen uniform, ermine fur, polished metal",
        "reflectivity": "Medium on medals and scepter",
        "micro_details": "Facial features, individual medals, gold embroidery",
        "wear_state": "Pristine"
      },
      "color_details": {
        "base_color_hex": "#CC0000",
        "secondary_colors": [
          "#000000",
          "#FFD700",
          "#FFFFFF",
          "#4169E1"
        ],
        "gradient_or_pattern": "Solid red "}]

## 中文译文（源站提供）
```json
{
  "meta": {
    "image_quality": "高",
    "image_type": "油画",
    "resolution_estimation": "1024x1344",
    "file_characteristics": {
      "compression_artifacts": "低",
      "noise_level": "低",
      "lens_type_estimation": "标准透视（模拟人像镜头）"
    }
  },
  "global_context": {
    "scene_description": "一幅正式的全身油画肖像，描绘了一位身着华丽皇家军装的 {\"subject\" \"国王\"}，他居中站立于宏伟的宫殿大厅中。他手持金色权杖和宝球。房间内设有一张红色天鹅绒和金色华丽宝座、大型挂毯、墙上挂着一幅带框肖像画，背景中有两名卫兵立正站岗。地板铺着复杂的波斯风格地毯和棋盘格大理石图案。画作具有明显的“龟裂”纹理，暗示画布年代久远。",
    "environment_type": "室内",
    "time_of_day": "白天",
    "weather_atmosphere": "宁静、庄重、威严",
    "lighting": {
      "source": "来自右侧大型拱形窗户的自然光",
      "direction": "右侧侧光",
      "quality": "柔和、漫射的室内光",
      "color_temperature": "暖色调，约 3500K"
    }
    ,
    "color_palette": {
      "dominant_hex_estimates": [
        "#8B2323",
        "#B8860B",
        "#2F4F4F",
        "#D2B48C",
        "#1A1A1A"
      ],
      "accent_colors": [
        "#FFD700",
        "#FF0000",
        "#4169E1"
      ],
      "contrast_level": "高"
    }
  },
  "composition": {
    "camera_angle": "平视",
    "framing": "全景 / 广角肖像",
    "depth_of_field": "深",
    "focal_point": "身穿红色制服的中心人物",
    "symmetry_type": "不对称但平衡",
    "rule_of_thirds_alignment": "人物居中；宝座占据右侧三分之一；窗户位于右上角交叉点。",
    "reference": "保持参考图像的面部特征。"
  },
  "objects": [
    {
      "id": "obj_001",
      "label": "君主 / 将军",
      "category": "人物",
      "location": {
        "relative_position": "前景中央",
        "bounding_box_percentage": {
          "x": 30.0,
          "y": 25.0,
          "width": 40.0,
          "height": 70.0
        }
      },
      "dimensions_relative": "大",
      "distance_from_camera": "近",
      "pose_orientation": "直立站立，面向前方，表情中性",
      "material": "织物、皮毛、金属",
      "surface_properties": {
        "texture": "羊毛制服、貂皮、抛光金属",
        "reflectivity": "奖章和权杖中等反光",
        "micro_details": "面部特征、单个奖章、金色刺绣",
        "wear_state": "原始状态"
      },
      "color_details": {
        "base_color_hex": "#CC0000",
        "secondary_colors": [
          "#000000",
          "#FFD700",
          "#FFFFFF",
          "#4169E1"
        ],
        "gradient_or_pattern": "纯红色"
      }
    }
  ]
}
```

## 来源备注
- 源站作者：Hugo Miura
- 源站 UUID：izMxna5ycZ
- 源站分类：04_创意脑洞特效合成

---
id: portrait-left-skin-the-1900
title: "红发女性肖像，暖光侧打，浴袍半披，眼神向上左方，电影感柔焦。"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: warm-cinematic-portrait
tags: ["人像", "红发", "雀斑", "浴袍", "暖色调", "光影", "胶片", "肖像"]
recommended_models: 
  - banana-pro
recommended_params:
  aspect_ratio: "2:3"
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
{   "meta": {     "image_dna": {       "type": "Photo",       "orientation_lock": "LOCKED: Orientation preserved 9:16",       "sensor_emulation": "Sony Alpha / 35mm Film Grain Emulation"     }   },   "spatial_orientation_engine": {     "subject_facing_direction": "CRITICAL: Head turned to LEFT (Viewer's Left) and Tilted UP",     "body_rotation": "Torso angled slightly to Viewer's Right, Left Shoulder forward",     "camera_position_relative": "Camera is at eye-level relative to torso, slightly below eye-level relative to face tilt"   },   "camera_optics_and_geometry": {     "lens_profile": {       "focal_length": "85mm (Portrait Telephoto)",       "aperture": "f/2.8 (Shallow Depth of Field, focus on eyes/lips)",       "lens_character": "Cinematic Softness with High Micro-Contrast"     },     "optical_flaws": [       "Film Grain (ISO 800)",       "Soft Focus Falloff on Shoulder",       "Slight Bloom on Highlights"     ]   },   "environment_and_physics": {     "lighting_engine": {       "primary_source": "Hard Spotlight / Slit Light from Top-Left (10 o'clock high)",       "radiosity_color_bleed": "Warm skin tones reflecting onto inner collar of garment",       "shadow_structure": "Chiaroscuro: Deep, crushed blacks on the right side of the face/background",       "volumetrics": "Clean air, minimal atmospheric haze"     },     "surface_physics": {       "weather_impact": "None (Studio Environment)",       "material_response": "High specular reflectivity on skin (shoulder/nose/cheeks) indicating moisture/oil"     }   },   "scene_text_ocr": {     "detected": false,     "content": []   },   "objects_and_actors": [     {       "id": "MAIN_SUBJECT",       "role": "Identity Swap Target",       "pose_engineering": {         "skeletal_rig": "Cervical spine extended and rotated left. Left shoulder elevated. Chin lifted.",         "gaze_vector": "Eyes looking Up and to the Left (following the light source).",         "interaction_physics": "Garment draped loosely, gravity pulling fabric down off shoulders."       },       "physiological_state": {         "body_temp_visuals": "Radiant warmth, slight flush on cheeks.",         "skin_light_interaction": "Strong specular highlights on the shoulder and bridge of nose. Subsurface scattering visible on illuminated skin boundaries."       },       "clothing_simulation": {         "garment_stack": "{"garment type" "Camel/Brown Terry Cloth Robe"} or Textured Knit Cardigan",         "fabric_mechanics": "Heavy fabric weight, low tension, slipping off shoulders to reveal décolletage.",         "texture_and_wear": "High-friction terry loop texture, soft uneven surface."       },       "identity_placeholders": {         "skin_tone": "[[USE_REFERENCE_SKIN]]",         "face_structure": "[[USE_REFERENCE_FACE]]",         "hair_style": "[[USE_REFERENCE_HAIR]]"       }     }   ],   "off_screen_context": {     "reflections": "Catchlights in upper iris from the directional light source",     "implied_e

## 中文译文（源站提供）
```json
{
  "meta": {
    "image_dna": {
      "type": "照片",
      "orientation_lock": "锁定：方向保持 9:16",
      "sensor_emulation": "索尼 Alpha / 35mm 胶片颗粒模拟"
    }
  },
  "spatial_orientation_engine": {
    "subject_facing_direction": "关键：头部转向左侧（观看者左侧）并向上倾斜",
    "body_rotation": "躯干略微向观看者右侧倾斜，左肩向前",
    "camera_position_relative": "相机与躯干齐平，略低于面部倾斜时的眼睛水平"
  },
  "camera_optics_and_geometry": {
    "lens_profile": {
      "focal_length": "85mm（人像长焦）",
      "aperture": "f/2.8（景深较浅，聚焦于眼睛/嘴唇）",
      "lens_character": "电影般的柔和度与高微对比度"
    },
    "optical_flaws": [
      "胶片颗粒（ISO 800）",
      "肩部柔焦衰减",
      "高光处略微泛光"
    ]
  },
  "environment_and_physics": {
    "lighting_engine": {
      "primary_source": "硬聚光灯 / 从左上方（10 点钟高位）射出的狭缝光",
      "radiosity_color_bleed": "暖色皮肤色调反射到服装内领口",
      "shadow_structure": "明暗对比：面部右侧/背景处深邃、压碎的黑色",
      "volumetrics": "空气洁净，大气雾霾极少"
    },
    "surface_physics": {
      "weather_impact": "无（影棚环境）",
      "material_response": "皮肤（肩部/鼻子/脸颊）高镜面反射率，表明有水分/油光"
    }
  },
  "scene_text_ocr": {
    "detected": false,
    "content": []
  },
  "objects_and_actors": [
    {
      "id": "MAIN_SUBJECT",
      "role": "身份替换目标",
      "pose_engineering": {
        "skeletal_rig": "颈椎伸展并向左旋转。左肩抬高。下巴抬起。",
        "gaze_vector": "眼睛向上并向左看（跟随光源）。",
        "interaction_physics": "服装松散地垂坠，重力将织物从肩部向下拉。"
      },
      "physiological_state": {
        "body_temp_visuals": "散发着温暖，脸颊略微泛红。",
        "skin_light_interaction": "肩部和鼻梁处有强烈的高光。在受光皮肤边缘可见次表面散射。"
      },
      "clothing_simulation": {
        "garment_stack": "{\"garment type\" \"米色/棕色毛圈布浴袍\"} 或 纹理针织开衫",
        "fabric_mechanics": "面料厚重，张力低，从肩部滑落，露出领口。",
        "texture_and_wear": "高摩擦毛圈纹理，柔软不平整的表面。"
      },
      "identity_placeholders": {
        "skin_tone": "[[USE_REFERENCE_SKIN]]",
        "face_structure": "[[USE_REFERENCE_FACE]]",
        "hair_style": "[[USE_REFERENCE_HAIR]]"
      }
    }
  ],
  "off_screen_context": {
    "reflections": "定向光源在虹膜上方产生的眼神光",
    "implied_e": ""
  }
}
```

## 来源备注
- 源站作者：tusina
- 源站 UUID：kHdPX6xPFw
- 源站分类：05_人物肖像与写实摄影

---
id: "product-face-name-character-001"
title: "街头红发少女写真"
category: product
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["街拍", "橙发", "女性", "都市", "暖光", "写实", "耳机", "牛仔"]
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
{
  "generation_request": {
    "meta_data": {
      "task_type": "text_to_image_consistent_character",
      "project_name": "{"project name" "Project_Alev"}",
      "priority": "high",
      "version": "v1.1_street"
    },
    "technical_constraints": {
      "face_preservation": {
        "enabled": true,
        "reference_mode": "strict",
        "parameters": {
          "character_anchor": "alev_master_face",
          "preserve_original_features": true,
          "preservation_strength": 0.95,
          "match_criteria": [
            "eye_shape_and_color",
            "freckle_pattern",
            "nose_structure",
            "face_shape"
          ]
        }
      },
      "output_settings": {
        "aspect_ratio": "9:16",
        "orientation": "portrait",
        "resolution_target": "ultra_high_res",
        "render_engine_style": "photorealistic_cinematic"
      }
    },
    "creative_prompt": {
      "subject_profile": {
        "identity": {
          "name": "{"character name" "Alev"}",
          "archetype": "cute_energetic_creative"
        },
        "demographics": {
          "gender": "female",
          "age_group": "early_20s",
          "body_type": "petite_slender"
        },
        "appearance": {
          "hair": {
            "color": "vibrant copper orange",
            "style": "loose waves blowing in the wind",
            "texture": "wavy, thick"
          },
          "face_features": {
            "eyes": "large emerald green",
            "skin": "fair with light dusting of freckles on nose",
            "nose": "small button nose",
            "face_shape": "heart-shaped, youthful"
          },
          "expression": {
            "type": "confident and playful",
            "gaze": "looking directly at camera with a smirk",
            "micro_expression": "one eyebrow slightly raised"
          }
        },
        "styling": {
          "top": "vintage denim jacket over a yellow graphic tee",
          "accessories": [
            "large headphones around neck",
            "leather crossbody bag strap visible"
          ],
          "makeup": "natural look with slightly winged eyeliner"
        }
      },
      "scene_context": {
        "location": "busy colorful city street",
        "furniture": "none",
        "atmosphere": {
          "vibe": "energetic, urban, vibrant",
          "elements": [
            "blurred yellow taxi in background",
            "neon sign reflection",
            "movement of the crowd"
          ]
        },
        "lighting_setup": {
          "primary": "golden hour sunlight hitting the face",
          "secondary": "blue ambient skylight shadows",
          "specifics": "high contrast lighting making the copper hair glow like fire"
        }
      },
      "photography_style": {
        "camera_angle": "low angle, dynamic shot",
        "framing": "waist_up",
        "lens_character": "35mm street photography lens",
        "depth_of_field": "medium (f/2.8)"
      }
    }
  }
}

## 中文译文（源站提供）
```json
{
  "generation_request": {
    "meta_data": {
      "task_type": "text_to_image_consistent_character",
      "project_name": "Project_Alev",
      "priority": "high",
      "version": "v1.1_street"
    },
    "technical_constraints": {
      "face_preservation": {
        "enabled": true,
        "reference_mode": "strict",
        "parameters": {
          "character_anchor": "alev_master_face",
          "preserve_original_features": true,
          "preservation_strength": 0.95,
          "match_criteria": [
            "eye_shape_and_color",
            "freckle_pattern",
            "nose_structure",
            "face_shape"
          ]
        }
      },
      "output_settings": {
        "aspect_ratio": "9:16",
        "orientation": "portrait",
        "resolution_target": "ultra_high_res",
        "render_engine_style": "photorealistic_cinematic"
      }
    },
    "creative_prompt": {
      "subject_profile": {
        "identity": {
          "name": "Alev",
          "archetype": "cute_energetic_creative"
        },
        "demographics": {
          "gender": "female",
          "age_group": "early_20s",
          "body_type": "petite_slender"
        },
        "appearance": {
          "hair": {
            "color": "vibrant copper orange",
            "style": "loose waves blowing in the wind",
            "texture": "wavy, thick"
          },
          "face_features": {
            "eyes": "large emerald green",
            "skin": "fair with light dusting of freckles on nose",
            "nose": "small button nose",
            "face_shape": "heart-shaped, youthful"
          },
          "expression": {
            "type": "confident and playful",
            "gaze": "looking directly at camera with a smirk",
            "micro_expression": "one eyebrow slightly raised"
          }
        },
        "styling": {
          "top": "vintage denim jacket over a yellow graphic tee",
          "accessories": [
            "large headphones around neck",
            "leather crossbody bag strap visible"
          ],
          "makeup": "natural look with slightly winged eyeliner"
        }
      },
      "scene_context": {
        "location": "busy colorful city street",
        "furniture": "none",
        "atmosphere": {
          "vibe": "energetic, urban, vibrant",
          "elements": [
            "blurred yellow taxi in background",
            "neon sign reflection",
            "movement of the crowd"
          ]
        },
        "lighting_setup": {
          "primary": "golden hour sunlight hitting the face",
          "secondary": "blue ambient skylight shadows",
          "specifics": "high contrast lighting making the copper hair glow like fire"
        }
      },
      "photography_style": {
        "camera_angle": "low angle, dynamic shot",
        "framing": "waist_up",
        "lens_character": "35mm street photography lens",
        "depth_of_field": "medium (f/2.8)"
      }
    }
  }
}
```

## 来源备注
- 源站作者：Alev Kaya
- 源站 UUID：dxRrJKKqsK
- 源站分类：05_人物肖像与写实摄影

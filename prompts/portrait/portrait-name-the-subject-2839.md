---
id: portrait-name-the-subject-2839
title: "高对比度黑白色调人物肖像海报设计"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["红色", "黑白", "高对比", "海报", "肖像", "墨镜", "男士", "酷感"]
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
  "meta": {
    "project_name": "{"Project Name" "Poster Portrait"}",
    "image_quality": "High",
    "image_type": "Photo (composite / graphic poster)"
  },

  "InputImage": {
    "reference": "<UPLOAD_PORTRAIT_IMAGE>",
    "preserve_identity": true,
    "match_face_structure": true,
    "match_expression": true
  },

  "global_context": {
    "scene_description": "Close-up black-and-white portrait of the uploaded subject wearing sunglasses, face and upper neck visible, composited over a bold repeating typographic background displaying the name '{"Name for Typography" "ENTER_NAME_HERE"}' in large white letters on a solid red backdrop. The subject is positioned in the lower-center of the frame with a confident, expressive pose. The background is flat, graphic, and high-contrast.",
    "environment": "Studio / graphic composite environment",
    "lighting": {
      "source": "Artificial studio lighting",
      "direction": "Frontal with slight top-down angle",
      "quality": "Hard, high-contrast lighting",
      "color_temp": "Neutral grayscale for subject"
    }
  },

  "color_palette": {
    "dominant_colors": ["red", "white", "black"],
    "contrast_level": "Very high"
  },

  "composition": {
    "camera_angle": "Slight low-angle for authority",
    "framing": "Close-up portrait (face dominates frame)",
    "depth_of_field": "Deep focus (subject and background both sharp)",
    "focal_point": "Sunglasses and facial expression"
  },

  "objects": [
    {
      "id": "subject_01",
      "label": "Portrait subject wearing sunglasses",
      "category": "Person",
      "location": "Center-lower foreground",
      "visual_attributes": {
        "color": "Monochrome / grayscale",
        "texture": "Natural skin texture, visible pores, matte finish",
        "accessories": "Dark sunglasses with reflective lenses",
        "state": "Confident, expressive"
      },
      "pose_or_orientation": "Head tilted slightly back or straight-on, facing camera",
      "preserve": [
        "identity",
        "face proportions",
        "natural realism"
      ]
    },
    {
      "id": "background_text",
      "label": "Repeating name typography",
      "category": "Graphic / Text",
      "location": "Full background (tiled)",
      "visual_attributes": {
        "text": "{"Name for Typography" "ENTER_NAME_HERE"}",
        "color": "White text on solid red background",
        "font_style": "Bold, rounded, heavy display font",
        "layout": "Repeated vertically or in a grid pattern"
      }
    }
  ],

  "semantic_relationships": [
    "Subject overlaps and partially obscures the repeated name typography",
    "High contrast between grayscale portrait and red graphic background",
    "Sunglasses act as the visual anchor and attitude-defining element",
    "Typography reinforces identity and poster-style branding"
  ],

  "Rendering": {
    "style": [
      "graphic poster realism",
      "editorial portrait",
      "high-contrast composite"
    ],
    "avoid": "

## 中文译文（源站提供）
```json
{
  "meta": {
    "project_name": "海报肖像",
    "image_quality": "高",
    "image_type": "照片（合成 / 图形海报）"
  },

  "InputImage": {
    "reference": "<UPLOAD_PORTRAIT_IMAGE>",
    "preserve_identity": true,
    "match_face_structure": true,
    "match_expression": true
  },

  "global_context": {
    "scene_description": "上传人物的黑白特写肖像，戴着墨镜，面部和颈部上半部分可见，合成在大胆重复的排版背景之上，背景为纯红色，上面用白色大写字母显示着“{\"Name for Typography\" \"ENTER_NAME_HERE\"}”。人物位于画面中下部，姿态自信且富有表现力。背景扁平、图形化且对比度高。",
    "environment": "工作室 / 图形合成环境",
    "lighting": {
      "source": "人造摄影棚灯光",
      "direction": "正面，略带俯视角度",
      "quality": "硬朗、高对比度照明",
      "color_temp": "人物为中性灰度"
    }
  },

  "color_palette": {
    "dominant_colors": ["红色", "白色", "黑色"],
    "contrast_level": "非常高"
  },

  "composition": {
    "camera_angle": "略微低角度，以彰显权威感",
    "framing": "特写肖像（面部占据画面主导）",
    "depth_of_field": "深景深（人物和背景均清晰）",
    "focal_point": "墨镜和面部表情"
  },

  "objects": [
    {
      "id": "subject_01",
      "label": "戴墨镜的肖像人物",
      "category": "人物",
      "location": "前景中下部",
      "visual_attributes": {
        "color": "单色 / 灰度",
        "texture": "自然皮肤纹理，可见毛孔，哑光效果",
        "accessories": "深色反光墨镜",
        "state": "自信，富有表现力"
      },
      "pose_or_orientation": "头部略微后倾或正对镜头",
      "preserve": [
        "身份",
        "面部比例",
        "自然写实感"
      ]
    },
    {
      "id": "background_text",
      "label": "重复的姓名排版",
      "category": "图形 / 文字",
      "location": "整个背景（平铺）",
      "visual_attributes": {
        "text": "{\"Name for Typography\" \"ENTER_NAME_HERE\"}",
        "color": "白色文字在纯红色背景上",
        "font_style": "粗体、圆润、厚重的展示字体",
        "layout": "垂直重复或网格图案"
      }
    }
  ],

  "semantic_relationships": [
    "人物与重复的姓名排版重叠并部分遮挡",
    "灰度肖像与红色图形背景形成高对比度",
    "墨镜作为视觉焦点和定义态度的元素",
    "排版强化了身份和海报风格的品牌感"
  ],

  "Rendering": {
    "style": [
      "图形海报写实主义",
      "编辑肖像",
      "高对比度合成"
    ],
    "avoid": ""
  }
}
```

## 来源备注
- 源站作者：Nabab Uddin
- 源站 UUID：WHFnA1gg8F
- 源站分类：05_人物肖像与写实摄影

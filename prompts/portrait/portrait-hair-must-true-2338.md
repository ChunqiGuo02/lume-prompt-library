---
id: portrait-hair-must-true-2338
title: "都市停车场时尚人像写真模板"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: industrial-loft
tags: ["沙滩", "美女", "白裙", "露肩", "微笑", "游轮", "海景", "躺椅"]
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
  "scene_description": {
    "environment": "Indoor parking garage, concrete floor, industrial ceiling pipes, columns, urban infrastructure architecture",
    "background": "Wide and empty parking area, perspective depth, industrial atmosphere",
    "floor": "Asphalt/concrete floor, natural texture, slight reflections",
    "mood": "urban, cinematic, minimal, modern"
  },

  "subject": {
    "gender": "female",
    "identity_source": "reference_1",
    "identity_lock": {
      "face": true,
      "hair_color": true,
      "hair_texture": true,
      "hair_style": true,
      "hair_density": true,
      "hairline": true
    },
    "pose": {
      "body_position": "Woman in a squatting position (squat pose), heels on the ground, knees bent",
      "posture": "Balanced, aesthetic squat stance",
      "head_pose": "Head slightly tilted to the side",
      "gaze": "Direct eye contact with the camera",
      "expression": "Calm, cool, slightly mysterious facial expression"
    },
    "hands": {
      "hand_position": "One hand resting on the chin, the other hand in a relaxed position"
    }
  },

  "outfit": {
    "top": "Oversized light-colored sweatshirt",
    "bottom": "Short skirt / mini skirt ({"skirt color" "khaki tone"})",
    "bag": "{"bag color" "Red"} shoulder bag, crossbody strap, modern design",
    "shoes": "{"shoe color" "Red"} high-heeled sandals",
    "style": "urban chic, modern street fashion",
    "fabric_detail": "natural fabric textures, matte surfaces"
  },

  "composition": {
    "framing": "Vertical framing",
    "camera_angle": "Slight low-angle perspective",
    "lens": "50mm natural perspective",
    "depth_of_field": "Mid-range sharpness, slightly blurred background",
    "focus": "Woman as the main focus, cinematic background depth"
  },

  "lighting": {
    "main_light": "Soft frontal light",
    "ambient_light": "Natural artificial lighting inside the parking garage",
    "shadow": "Soft shadows",
    "mood": "cinematic urban lighting"
  },

  "style": {
    "realism": "ultra realistic",
    "texture": "high-detail textures",
    "color_grading": "cinematic color grading",
    "contrast": "medium to high contrast",
    "vibe": "urban, aesthetic, modern, editorial"
  },

  "rules": {
    "identity": "Face and hair must be taken exactly from reference_1",
    "pose_lock": "Pose must be exactly the same as reference_2",
    "scene_lock": "Location, angle, lighting, and composition must be preserved exactly as in reference_2",
    "no_changes": [
      "hair color must not change",
      "hair shape must not change",
      "hair texture must not change",
      "pose must not change",
      "camera angle must not change",
      "lighting setup must not change",
      "location must not change",
      "composition must not change"
    ]
  },

  "quality": {
    "resolution": "8K",
    "detail_level": "ultra high detail",
    "photorealism": true
  },

  "negative_prompt": [
    "wrong hair color",
    "wrong hair style"

## 中文译文（源站提供）
```json
{
  "scene_description": {
    "environment": "室内停车场，混凝土地面，工业天花板管道，立柱，城市基础设施建筑",
    "background": "宽阔空旷的停车区域，透视景深，工业氛围",
    "floor": "沥青/混凝土地面，自然纹理，轻微反光",
    "mood": "都市、电影感、极简、现代"
  },
  "subject": {
    "gender": "女性",
    "identity_source": "reference_1",
    "identity_lock": {
      "face": true,
      "hair_color": true,
      "hair_texture": true,
      "hair_style": true,
      "hair_density": true,
      "hairline": true
    },
    "pose": {
      "body_position": "女性呈蹲姿（下蹲姿势），脚跟触地，膝盖弯曲",
      "posture": "平衡、优美的下蹲姿态",
      "head_pose": "头部略微侧倾",
      "gaze": "与镜头直接眼神接触",
      "expression": "平静、酷飒、略带神秘的面部表情"
    },
    "hands": {
      "hand_position": "一只手托着下巴，另一只手放松放置"
    }
  },
  "outfit": {
    "top": "宽松的浅色卫衣",
    "bottom": "短裙/迷你裙（{\"skirt color\" \"卡其色调\"}）",
    "bag": "{\"bag color\" \"红色\"} 单肩包，斜挎带，现代设计",
    "shoes": "{\"shoe color\" \"红色\"} 高跟凉鞋",
    "style": "都市时尚、现代街头风",
    "fabric_detail": "天然面料纹理，哑光表面"
  },
  "composition": {
    "framing": "垂直构图",
    "camera_angle": "略微低角度透视",
    "lens": "50mm 自然视角",
    "depth_of_field": "中景清晰，背景略微模糊",
    "focus": "女性为主要焦点，电影感的背景景深"
  },
  "lighting": {
    "main_light": "柔和的正面光",
    "ambient_light": "停车场内的自然人工照明",
    "shadow": "柔和的阴影",
    "mood": "电影感的都市照明"
  },
  "style": {
    "realism": "超现实主义",
    "texture": "高细节纹理",
    "color_grading": "电影级调色",
    "contrast": "中高对比度",
    "vibe": "都市、美学、现代、时尚杂志风格"
  },
  "rules": {
    "identity": "面部和发型必须与 reference_1 完全一致",
    "pose_lock": "姿势必须与 reference_2 完全一致",
    "scene_lock": "位置、角度、光线和构图必须与 reference_2 完全保持一致",
    "no_changes": [
      "发色不得改变",
      "发型不得改变",
      "头发质地不得改变",
      "姿势不得改变",
      "拍摄角度不得改变",
      "灯光设置不得改变",
      "位置不得改变",
      "构图不得改变"
    ]
  },
  "quality": {
    "resolution": "8K",
    "detail_level": "超高细节",
    "photorealism": true
  },
  "negative_prompt": [
    "错误的发色",
    "错误的发型"
  ]
}
```

## 来源备注
- 源站作者：manolya
- 源站 UUID：k60XiECu7T
- 源站分类：05_人物肖像与写实摄影

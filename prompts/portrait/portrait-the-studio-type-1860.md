---
id: portrait-the-studio-type-1860
title: "粉色背景下的时尚写真：女子怀抱巨型泰迪熊，身着花卉长裙，展现"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["写实", "粉色", "时尚", "棚拍", "泰迪熊", "美女", "高跟鞋", "连衣裙"]
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
  "prompt_type": "image_generation",
  "image_style": "realistic fashion editorial, DSLR studio photography",
  "camera": {
    "type": "professional full-frame DSLR",
    "lens": "85mm prime",
    "aperture": "f/5.6",
    "iso": 100,
    "shutter_speed": "1/160s",
    "white_balance": "5000-5200K (warm studio tone)"
  },
  "framing": {
    "shot_type": "full body",
    "camera_angle": "eye-level, neutral perspective"
  },
  "subject": {
    "identity": {
      "use_reference_image": true,
      "preserve_facial_identity": true
    },
    "expression": "calm, confident, relaxed facial muscles",
    "face_angle": "three-quarter view toward the camera",
    "gaze": "direct eye contact with the camera",
    "pose": {
      "body_position": "seated sideways",
      "torso_rotation": "approximately 45 degrees toward the camera",
      "legs": {
        "front_leg": "extended forward",
        "back_leg": "bent and slightly elevated"
      },
      "weight_distribution": "resting on the hip"
    },
    "hands": {
      "right_arm": "wrapped around a large object at chest height",
      "left_hand": "resting gently on the object"
    }
  },
  "wardrobe": {
    "outfit": "exact outfit from the second provided reference image",
    "shoes": "closed-toe high heels with glossy finish and thin stiletto heel"
  },
  "hair": {
    "style": "loose hair with soft, controlled waves",
    "finish": "clean, smooth, no frizz"
  },
  "makeup": {
    "style": "editorial glamorous makeup, medium-to-high visual impact",
    "skin": "even tone with natural glow",
    "eyebrows": "defined",
    "eyes": {
      "eyeshadow": "pink eyeshadow extended above the crease",
      "eyeliner": "subtle",
      "mascara": "defined lashes"
    },
    "contour": "soft contouring",
    "lips": "satin finish, natural pink tone"
  },
  "manicure": {
    "nails": "almond-shaped, medium length",
    "finish": "glossy pink"
  },
  "environment": {
    "background": "seamless solid {"background color" "pink"} studio backdrop",
    "floor_to_background_transition": "smooth and continuous"
  },
  "lighting": {
    "style": "high-key studio lighting",
    "key_light": {
      "position": "front, slightly above eye level",
      "quality": "large, diffused"
    },
    "fill_light": "uniform frontal fill",
    "shadows": "extremely soft"
  },
  "props": {
    "object": "giant seated teddy bear",
    "scale": {
      "height": "approximately 150 cm",
      "width": "approximately 110 cm",
      "comparison": "similar in size to a large single-seat sofa"
    }
  },
  "effects": {
    "filters": "none",
    "post_processing": "none"
  },
  "output_quality": {
    "resolution": "high resolution",
    "realism": "photorealistic",
    "genre": "fashion editorial studio photography"
  }
}

## 中文译文（源站提供）
```json
{
  "prompt_type": "image_generation",
  "image_style": "写实时尚大片, 单反影棚摄影",
  "camera": {
    "type": "专业全画幅单反相机",
    "lens": "85mm 定焦镜头",
    "aperture": "f/5.6",
    "iso": 100,
    "shutter_speed": "1/160s",
    "white_balance": "5000-5200K (暖色影棚色调)"
  },
  "framing": {
    "shot_type": "全身照",
    "camera_angle": "平视, 中性视角"
  },
  "subject": {
    "identity": {
      "use_reference_image": true,
      "preserve_facial_identity": true
    },
    "expression": "平静, 自信, 面部肌肉放松",
    "face_angle": "四分之三侧脸朝向镜头",
    "gaze": "与镜头直接眼神接触",
    "pose": {
      "body_position": "侧身坐姿",
      "torso_rotation": "躯干向镜头旋转约 45 度",
      "legs": {
        "front_leg": "前腿向前伸展",
        "back_leg": "后腿弯曲并略微抬高"
      },
      "weight_distribution": "重心落在臀部"
    },
    "hands": {
      "right_arm": "右臂环抱胸高处的一个大物体",
      "left_hand": "左手轻轻放在物体上"
    }
  },
  "wardrobe": {
    "outfit": "与第二张参考图中的服装完全一致",
    "shoes": "包头高跟鞋, 亮面细高跟"
  },
  "hair": {
    "style": "散发, 柔和、有控制的波浪",
    "finish": "干净, 光滑, 无毛躁"
  },
  "makeup": {
    "style": "时尚大片魅力妆容, 中高视觉冲击力",
    "skin": "肤色均匀, 自然光泽",
    "eyebrows": "眉毛清晰",
    "eyes": {
      "eyeshadow": "粉色眼影延伸至眼窝上方",
      "eyeliner": "眼线柔和",
      "mascara": "睫毛根根分明"
    },
    "contour": "柔和修容",
    "lips": "缎面质感, 自然粉色调"
  },
  "manicure": {
    "nails": "杏仁形, 中等长度",
    "finish": "亮面粉色"
  },
  "environment": {
    "background": "无缝纯色 {\"background color\" \"pink\"} 影棚背景",
    "floor_to_background_transition": "平滑连续"
  },
  "lighting": {
    "style": "高调影棚布光",
    "key_light": {
      "position": "前方",
      "quality": "大面积, 柔和"
    },
    "fill_light": "均匀正面补光",
    "shadows": "阴影极其柔和"
  },
  "props": {
    "object": "巨型坐姿泰迪熊",
    "scale": {
      "height": "约 150 厘米",
      "width": "约 110 厘米",
      "comparison": "大小与大型单人沙发相似"
    }
  },
  "effects": {
    "filters": "无",
    "post_processing": "无"
  },
  "output_quality": {
    "resolution": "高分辨率",
    "realism": "超写实",
    "genre": "时尚大片影棚摄影"
  }
}
```

## 来源备注
- 源站作者：Shanvi
- 源站 UUID：9qy25IAnUe
- 源站分类：05_人物肖像与写实摄影

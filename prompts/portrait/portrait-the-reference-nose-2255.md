---
id: portrait-the-reference-nose-2255
title: "超写实车载玫瑰少女肖像生成提示词"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["玫瑰", "汽车", "金发", "粉色", "夜晚", "肖像", "写实", "妩媚"]
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
  "prompt": {
    "reference_image": "uploaded face reference",
    "style": "Ultra-realistic cinematic lifestyle portrait",
    "subject": {
      "identity": {
        "description": "Adult woman (21+), strict 1:1 identity preservation from reference image.",
        "details": "Exact facial structure, proportions, eye shape and color, lips, nose, natural asymmetry, skin tone, and moles. No face morphing, beautification, or AI changes."
      },
      "pose": "Seated in the back seat, body turned openly toward the camera, shoulders angled, posture relaxed and confident. Head slightly tilted back. One hand gently lifts a single pale pink rose, softly touching nose and lips.",
      "expression": "Soft teasing smile, subtly flirtatious but elegant. Eyes look directly into the camera with an intimate, self-assured presence."
    },
    "outfit": {
      "source": "Strictly from the reference image.",
      "styling": "Tasteful emphasis on the neckline through pose and lighting only. No explicit nudity."
    },
    "hair": {
      "style": "Long hair with a precise center part.",
      "texture": "Noticeably fuller volume, soft lift at the roots. Smooth, glossy, healthy with gentle movement and visible individual strands."
    },
    "makeup": {
      "style": "Bright editorial baby-face aesthetic with high-fashion polish. Fresh, youthful, luminous, not heavy glam.",
      "details": {
        "brows": "Softly straight, clearly defined.",
        "eyes": "Light brown/taupe eyeshadow base, clean lifted eyeliner with an elegant visible wing, long separated upper lashes.",
        "blush": "Soft pink placed high on the cheeks and lightly across the nose bridge.",
        "highlight": "Subtle wet highlight on cheekbones, nose tip, cupid’s bow, and inner eye corners.",
        "lips": "Glossy rose-pink gradient, softly overlined in the center, full and juicy."
      }
    },
    "skin": "Ultra-realistic human skin with visible pores, micro-texture, tiny capillaries, and natural unevenness. Soft healthy sheen only. No blur, smoothing, plastic effect, or beauty filters.",
    "accessories": {
      "items": ["One long-stem pale pink rose with green leaves"],
      "excluded": ["No jewelry"]
    },
    "environment": {
      "location": "Luxury car interior.",
      "details": "Black leather seats, visible headrest stitching. Dark window background suggesting evening or nighttime."
    },
    "lighting": "Soft warm flash combined with subtle ambient car lighting. Gentle highlights on collarbones, upper chest, and lips. Minimal shadows. Cozy, seductive nighttime mood without harsh contrast.",
    "camera": {
      "shot_type": "Close-up to medium portrait.",
      "angle": "Slightly lower camera angle.",
      "focus": "Shallow depth of field, sharp focus on the face.",
      "quality": "Natural proportions, ultra-realistic photography, cinematic editorial luxury lifestyle feel. No filters, no AI-art look.",
      "aspect_r"
    }
  }

## 中文译文（源站提供）
```json
{
  "prompt": {
    "reference_image": "上传的面部参考图",
    "style": "超写实电影感生活肖像",
    "subject": {
      "identity": {
        "description": "成年女性（21 岁以上），严格 1:1 保留参考图中的身份特征。",
        "details": "精确的面部结构、比例、眼睛形状和颜色、嘴唇、鼻子、自然的非对称性、肤色和痣。无面部变形、美化或 AI 更改。"
      },
      "pose": "坐在后座，身体开放地转向镜头，肩膀倾斜，姿态放松而自信。头部略微向后倾斜。一只手轻轻举起一朵淡粉色玫瑰，轻柔地触碰鼻子和嘴唇。",
      "expression": "柔和的戏谑笑容，略带挑逗但优雅。眼睛直视镜头，展现出亲密而自信的姿态。"
    },
    "outfit": {
      "source": "严格按照参考图。",
      "styling": "仅通过姿势和光线巧妙地强调颈部线条。无任何裸露。"
    },
    "hair": {
      "style": "长发，精确的中分。",
      "texture": "明显更丰盈，发根处有柔和的提升。光滑、有光泽、健康，带有轻微的动感和可见的独立发丝。"
    },
    "makeup": {
      "style": "明亮、时尚的婴儿脸美学，带有高级时装的精致感。清新、年轻、有光泽，而非浓重艳丽。",
      "details": {
        "brows": "柔和的平眉，轮廓清晰。",
        "eyes": "浅棕色/灰褐色眼影打底，干净上扬的眼线，带有优雅的可见眼尾，纤长分明的上睫毛。",
        "blush": "柔和的粉色腮红，打在颧骨高处并轻扫鼻梁。",
        "highlight": "颧骨、鼻尖、唇峰和内眼角有微妙的水光感高光。",
        "lips": "光泽感玫瑰粉渐变唇，中央轻微外扩，饱满水润。"
      }
    },
    "skin": "超写实人体皮肤，可见毛孔、微纹理、微细血管和自然不均匀。仅有柔和健康的微光。无模糊、平滑、塑料感或美颜滤镜。",
    "accessories": {
      "items": ["一朵带绿叶的长茎淡粉色玫瑰"],
      "excluded": ["无首饰"]
    },
    "environment": {
      "location": "豪华汽车内饰。",
      "details": "黑色皮革座椅，可见头枕缝线。深色车窗背景暗示傍晚或夜晚。"
    },
    "lighting": "柔和温暖的闪光灯结合微妙的车内环境光。锁骨、上胸部和嘴唇有柔和的高光。阴影极少。营造舒适、诱人的夜间氛围，无强烈对比。",
    "camera": {
      "shot_type": "特写到中景肖像。",
      "angle": "略低的拍摄角度。",
      "focus": "浅景深，面部清晰对焦。",
      "quality": "自然比例，超写实摄影，电影感时尚奢华生活方式。无滤镜，无 AI 艺术效果。",
      "aspect_r": "3:2"
    }
  }
}
```

## 来源备注
- 源站作者：Lex
- 源站 UUID：Zi8lvoZK2K
- 源站分类：05_人物肖像与写实摄影

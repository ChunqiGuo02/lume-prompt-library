---
id: meme-hair-emotion-pose-0030
title: "九宫格情绪肖像生成器"
category: meme
subcategory: "16_表情包趣味拼图"
aesthetic: meme-pop-funny
tags: ["卡通", "插画", "九宫格", "拼贴", "女性", "人像", "情绪", "柔和"]
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
  "image_prompt": {
    "format": "3x3 grid collage",
    "subject": {
      "face_reference": "uploaded_photo",
      "identity_preservation": "strict",
      "face_match_accuracy": "100%",
      "style": "high-end smooth 3D cartoon realism",
      "skin_texture": "soft, clean, semi-realistic cartoon finish",
      "facial_proportions": "unchanged from reference"
    },

    "panels": [
      {
        "emotion": "joyful",
        "pose": "bright smile, relaxed shoulders",
        "hair": "high ponytail with soft flyaways",
        "outfit": "pastel hoodie",
        "background": "sky blue gradient"
      },
      {
        "emotion": "surprised",
        "pose": "hands close to face, wide eyes",
        "hair": "loose wavy hair",
        "outfit": "minimal casual t-shirt",
        "background": "peach pastel"
      },
      {
        "emotion": "sad",
        "pose": "head lowered, gentle eyes",
        "hair": "low bun",
        "outfit": "oversized knit sweater",
        "background": "soft lavender"
      },
      {
        "emotion": "tender",
        "pose": "subtle smile, head tilt",
        "hair": "half-up hairstyle",
        "outfit": "neutral soft knit top",
        "background": "warm beige"
      },
      {
        "emotion": "confident",
        "pose": "direct gaze, chin slightly raised",
        "hair": "slicked-back hairstyle",
        "outfit": "modern tailored jacket",
        "background": "deep teal"
      },
      {
        "emotion": "playful pout",
        "pose": "puffed cheeks, curious eyes",
        "hair": "short bob cut",
        "outfit": "striped casual shirt",
        "background": "mint green"
      },
      {
        "emotion": "playful",
        "pose": "wink with finger near cheek",
        "hair": "space buns",
        "outfit": "graphic top",
        "background": "soft pink"
      },
      {
        "emotion": "shocked",
        "pose": "open mouth, raised brows",
        "hair": "messy loose hair",
        "outfit": "simple blouse",
        "background": "light yellow"
      },
      {
        "emotion": "angry",
        "pose": "arms crossed, intense stare",
        "hair": "tight high bun",
        "outfit": "dark fitted top",
        "background": "deep red"
      }
    ],

    "rendering": {
      "lighting": "soft studio light, evenly diffused",
      "shading": "smooth gradients with subtle highlights",
      "resolution": "ultra-high",
      "detail_level": "premium cinematic polish"
    },

    "composition": {
      "alignment": "perfect 3x3 grid",
      "spacing": "uniform margins",
      "border": "clean neutral frame"
    }
  }
}

## 中文译文（源站提供）
```json
{
  "image_prompt": {
    "format": "3x3 网格拼贴",
    "subject": {
      "face_reference": "uploaded_photo",
      "identity_preservation": "严格",
      "face_match_accuracy": "100%",
      "style": "高端流畅的 3D 卡通写实风格",
      "skin_texture": "柔和、干净、半写实卡通质感",
      "facial_proportions": "与参考图保持一致"
    },
    "panels": [
      {
        "emotion": "喜悦",
        "pose": "灿烂笑容，肩膀放松",
        "hair": "高马尾，发丝柔和飞扬",
        "outfit": "柔和色连帽衫",
        "background": "天蓝色渐变"
      },
      {
        "emotion": "惊讶",
        "pose": "双手靠近脸部，眼睛睁大",
        "hair": "蓬松波浪发",
        "outfit": "简约休闲 T 恤",
        "background": "桃粉色柔和背景"
      },
      {
        "emotion": "悲伤",
        "pose": "低头，眼神温柔",
        "hair": "低发髻",
        "outfit": "宽松针织毛衣",
        "background": "柔和薰衣草色"
      },
      {
        "emotion": "温柔",
        "pose": "淡淡微笑，头部微倾",
        "hair": "半扎发型",
        "outfit": "中性柔和针织上衣",
        "background": "暖米色"
      },
      {
        "emotion": "自信",
        "pose": "直视前方，下巴微抬",
        "hair": "背头造型",
        "outfit": "现代剪裁夹克",
        "background": "深青色"
      },
      {
        "emotion": "俏皮嘟嘴",
        "pose": "鼓起脸颊，好奇的眼神",
        "hair": "短波波头",
        "outfit": "条纹休闲衬衫",
        "background": "薄荷绿"
      },
      {
        "emotion": "顽皮",
        "pose": "眨眼，手指靠近脸颊",
        "hair": "太空发髻",
        "outfit": "印花上衣",
        "background": "柔和粉色"
      },
      {
        "emotion": "震惊",
        "pose": "张开嘴巴，眉毛上扬",
        "hair": "凌乱散发",
        "outfit": "简约衬衫",
        "background": "浅黄色"
      },
      {
        "emotion": "愤怒",
        "pose": "双臂交叉，眼神锐利",
        "hair": "紧致高发髻",
        "outfit": "深色修身上衣",
        "background": "深红色"
      }
    ],
    "rendering": {
      "lighting": "柔和影棚光，均匀漫射",
      "shading": "平滑渐变，带有微妙高光",
      "resolution": "超高分辨率",
      "detail_level": "电影级高级细节"
    },
    "composition": {
      "alignment": "完美的 3x3 网格",
      "spacing": "均匀边距",
      "border": "简洁中性边框"
    }
  }
}
```

## 来源备注
- 源站作者：Freddy
- 源站 UUID：Oj4qUjihVj
- 源站分类：16_表情包趣味拼图

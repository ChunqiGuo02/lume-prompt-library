---
id: "portrait-the-identity-lock-001"
title: "超写实低角度婚礼情侣合影，手比心形，蓝天背景"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["婚礼", "浪漫", "婚纱", "仰拍", "蓝天", "情侣", "戒指", "墨镜"]
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
  "request_metadata": {
    "tool": "Nano Banana Pro",
    "task_type": "photoreal_cinematic_poster_style_shoot",
    "quality_preset": "ultra",
    "aspect_ratio": "9:16"
  },
  "references": {
    "female_reference_image": {
      "slot": 1,
      "purpose": "FEMALE_IDENTITY_LOCK",
      "strict_identity_lock": true
    },
    "male_reference_image": {
      "slot": 2,
      "purpose": "MALE_IDENTITY_LOCK",
      "strict_identity_lock": true
    }
  },
  "hard_constraints": [
    "Exactly 2 people only (one female, one male).",
    "Faces must match the uploaded references with maximum similarity (no identity drift).",
    "Photorealistic anatomy, natural skin texture, no beautify filter.",
    "Vertical 9:16, same low-angle composition and pose logic as the reference image.",
    "No readable text, no logos, no watermarks."
  ],
  "camera": {
    "style": "editorial wedding lifestyle photo",
    "lens": "24mm",
    "angle": "extreme low-angle looking up (worm's-eye view)",
    "aperture": "f/2.8",
    "focus": "sharp on hands + faces, gentle background falloff",
    "white_balance": "clean daylight, slightly cool"
  },
  "lighting": {
    "type": "soft natural daylight",
    "contrast": "low-to-medium",
    "shadows": "soft",
    "highlights": "gentle, no clipping"
  },
  "prompt": {
    "scene_summary": "Recreate the reference shot: a romantic, ultra-photoreal low-angle wedding editorial photo against a clean blue sky. The couple forms a heart shape with their hands in the foreground, framing the woman’s face. The man leans in from above and kisses the woman on the temple/forehead. The woman stands below, looking relaxed and confident, wearing black sunglasses and a white bridal look. The veil flows softly around her shoulders. The man wears a crisp white dress shirt with a dark vest/jacket. The entire composition must feel like a real photo, with correct hand anatomy, realistic skin texture, and natural fabric details.",
    "composition": {
      "foreground": "hands forming a perfect heart shape very close to camera, fingers natural, no extra fingers, heart opening centered",
      "subjects_position": "woman centered lower-middle; man above her leaning in from upper-right/upper area",
      "framing": "heart shape frames the woman’s face; man’s face close to her head in a kiss",
      "background": "clean open sky, minimal distractions",
      "pose_lock": "match the reference: heart-hands + kiss + low-angle perspective"
    },
    "wardrobe": {
      "female": "white bridal dress or strapless/clean white top, sheer white veil, black sunglasses; elegant minimal jewelry",
      "male": "white dress shirt + dark vest or dark jacket; clean tailored look"
    },
    "styling_notes": [
      "veil should look airy and translucent with natural folds",
      "hands must be anatomically perfect and symmetrical, no warping",
      "keep facial expressions natural (soft romantic mood)",
      "no added props, no typ

## 中文译文（源站提供）
```json
{
  "request_metadata": {
    "tool": "Nano Banana Pro",
    "task_type": "photoreal_cinematic_poster_style_shoot",
    "quality_preset": "ultra",
    "aspect_ratio": "9:16"
  },
  "references": {
    "female_reference_image": {
      "slot": 1,
      "purpose": "FEMALE_IDENTITY_LOCK",
      "strict_identity_lock": true
    },
    "male_reference_image": {
      "slot": 2,
      "purpose": "MALE_IDENTITY_LOCK",
      "strict_identity_lock": true
    }
  },
  "hard_constraints": [
    "仅限 2 人（一男一女）。",
    "面部必须与上传的参考图最大限度地相似（无身份漂移）。",
    "逼真的解剖结构，自然的皮肤纹理，无美颜滤镜。",
    "垂直 9:16，与参考图相同的低角度构图和姿势逻辑。",
    "无可读文本，无标志，无水印。"
  ],
  "camera": {
    "style": "编辑婚礼生活照风格",
    "lens": "24mm",
    "angle": "极低角度仰视（虫眼视角）",
    "aperture": "f/2.8",
    "focus": "手部 + 面部清晰，背景柔和虚化",
    "white_balance": "干净的日光，略微偏冷"
  },
  "lighting": {
    "type": "柔和自然日光",
    "contrast": "低至中等",
    "shadows": "柔和",
    "highlights": "柔和，无过曝"
  },
  "prompt": {
    "scene_summary": "重现参考镜头：一张浪漫、超逼真的低角度婚礼编辑照片，背景是干净的蓝色天空。前景中，情侣用手比出心形，框住女人的脸。男人从上方倾身，亲吻女人的太阳穴/额头。女人站在下方，看起来放松而自信，戴着黑色墨镜，穿着白色新娘装。头纱在她肩部周围柔和飘动。男人穿着一件干净的白色正装衬衫，搭配深色马甲/夹克。整个构图必须感觉像一张真实的照片，手部解剖结构正确，皮肤纹理逼真，面料细节自然。",
    "composition": {
      "foreground": "非常靠近相机的手比出完美心形，手指自然，无多余手指，心形开口居中",
      "subjects_position": "女人居中偏下；男人在她上方，从右上/上方倾身",
      "framing": "心形框住女人的脸；男人的脸靠近她的头，正在亲吻",
      "background": "干净开阔的天空，干扰最小",
      "pose_lock": "匹配参考图：心形手势 + 亲吻 + 低角度视角"
    },
    "wardrobe": {
      "female": "白色婚纱或无肩带/干净的白色上衣，薄纱白色头纱，黑色墨镜；优雅简约的首饰",
      "male": "白色正装衬衫 + 深色马甲或深色夹克；干净利落的剪裁"
    },
    "styling_notes": [
      "头纱应看起来轻盈半透明，带有自然的褶皱",
      "手部必须解剖学上完美对称，无变形",
      "面部表情保持自然（柔和浪漫的情绪）",
      "无额外道具，无文字"
    ]
  }
}
```

## 来源备注
- 源站作者：Özge Döner
- 源站 UUID：2GUehmWM4a
- 源站分类：05_人物肖像与写实摄影

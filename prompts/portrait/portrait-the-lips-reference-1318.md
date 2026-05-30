---
id: portrait-the-lips-reference-1318
title: "暗夜时尚模特静谧特写"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["美妆", "人像", "时尚", "特写", "神秘", "冷色调", "亮片", "渐变"]
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
    "model": "gemini-3-pro-image-preview",
    "mode": "image-to-image",
    "consistency_id": "midnight-kfashion-editorial",
    "input_reference": {
        "use_user_uploaded_image": true,
        "identity_lock": "strict",
        "notes": "Preserve the same person from the reference image. The person may be male or female—do not change gender expression, age, ethnicity, facial structure, or unique identifiers."
    },
    "prompt": {
        "subject": "The same person from the uploaded reference photo, photorealistic fashion model portrait, natural facial proportions and skin texture preserved.",
        "composition": "Extreme close-up editorial portrait (head fills the frame), eyes near the upper third, slight turn toward camera, tight crop from forehead to chin with the hand entering frame from below.",
        "action": "Perform a 'shh' gesture: one index finger held vertically and gently pressed to the center of the lips. Finger pad lightly compresses the lip surface; lips slightly parted with glossy lip oil; subtle contact shadow where finger meets lips. Expression calm, mysterious, and intimate; eyelids relaxed.",
        "location": "Dark studio backdrop, midnight mood, no visible set elements.",
        "style": "Midnight K-fashion editorial, cinematic high-end beauty photography, clean but dramatic, premium magazine-grade retouching (natural pores, not plastic).",
        "camera": {
            "shot_type": "beauty close-up",
            "lens": "85mm prime",
            "aperture": "f/1.8",
            "focus": "sharp focus on the eyes and lips; finger also sharp at the contact point; soft falloff to hair edges",
            "depth_of_field": "shallow"
        },
        "lighting": {
            "base": "low-key studio lighting with deep blacks",
            "key_light": "soft key from camera-right, slightly above eye level",
            "fill": "very subtle fill from camera-left to keep shadows readable",
            "signature_effect": "a diagonal iridescent prism light band across the face ({"prism color gradient" "cyan-to-violet gradient"}), like a diffraction filter or gel projection; crisp edge with gentle falloff",
            "rim": "faint cool rim light on hair for separation",
            "skin_response": "wet-look specular highlights on cheekbones and lips; realistic micro-shine"
        },
        "beauty_details": [
            "subtle glitter/metallic shimmer on eyelids",
            "tiny reflective specks near the outer corners of the eyes (very minimal)",
            "defined but natural brows",
            "glossy, hydrated lips with high specular highlight"
        ],
        "motion_details": "A few wind-blown hair strands sweep across the cheek and near the lips (dynamic but not messy), no heavy motion blur.",
        "color_grading": "cool midnight grade: deep blacks, cool shadows, slightly desaturated midtones, prism band adds cyan/blue/pur"
    }
}

## 中文译文（源站提供）
```json
{
    "model": "gemini-3-pro-image-preview",
    "mode": "image-to-image",
    "consistency_id": "midnight-kfashion-editorial",
    "input_reference": {
        "use_user_uploaded_image": true,
        "identity_lock": "strict",
        "notes": "保留参考图片中的同一个人。此人可以是男性或女性——请勿改变性别表达、年龄、种族、面部结构或独特识别特征。"
    },
    "prompt": {
        "subject": "上传参考照片中的同一个人，超写实时尚模特肖像，保留自然的五官比例和皮肤纹理。",
        "composition": "特写时尚肖像（头部充满画面），眼睛接近画面上方三分之一处，略微转向镜头，从额头到下巴的紧密裁剪，手从下方进入画面。",
        "action": "做出“嘘”的姿势：一根食指垂直轻轻按压嘴唇中央。指腹轻微按压唇面；嘴唇微张，涂有光泽唇油；手指与嘴唇接触处有微妙的接触阴影。表情平静、神秘、亲密；眼睑放松。",
        "location": "深色工作室背景，午夜氛围，无可见布景元素。",
        "style": "午夜 K-fashion 时尚大片，电影级高端美妆摄影，干净而富有戏剧性，高端杂志级修图（保留自然毛孔，而非塑料感）。",
        "camera": {
            "shot_type": "美妆特写",
            "lens": "85mm 定焦镜头",
            "aperture": "f/1.8",
            "focus": "眼睛和嘴唇清晰对焦；手指在接触点也清晰；发梢柔和虚化",
            "depth_of_field": "浅景深"
        },
        "lighting": {
            "base": "低调工作室照明，深邃的黑色",
            "key_light": "从相机右侧，略高于眼睛高度的柔和主光",
            "fill": "从相机左侧非常微妙的补光，以保持阴影可读性",
            "signature_effect": "一道对角线虹彩棱镜光带穿过脸部（{\"prism color gradient\" \"青色到紫罗兰渐变\"}），如同衍射滤镜或凝胶投影；边缘清晰，柔和渐变",
            "rim": "头发上微弱的冷色轮廓光，用于分离",
            "skin_response": "颧骨和嘴唇上的湿润感高光；逼真的微光泽"
        },
        "beauty_details": [
            "眼睑上微妙的闪粉/金属微光",
            "眼角外侧附近微小的反光斑点（非常少）",
            "清晰但自然的眉毛",
            "光泽、水润的嘴唇，带有高光泽亮点"
        ],
        "motion_details": "几缕被风吹动的发丝掠过脸颊和嘴唇附近（动态但不凌乱），没有明显的运动模糊。",
        "color_grading": "冷调午夜色调：深邃的黑色，冷色阴影，中性色调略微去饱和，棱镜光带增加青色/蓝色/紫色"
    }
}
```

## 来源备注
- 源站作者：katon
- 源站 UUID：x4ojiNrTd4
- 源站分类：05_人物肖像与写实摄影

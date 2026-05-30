---
id: portrait-the-face-reference-2836
title: "高对比度黑白侧脸肖像——背光轮廓与戏剧光影"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["黑白", "高对比", "人像", "肖像", "侧颜", "轮廓光", "短发", "高领"]
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
  "title": "High-Contrast Monochrome Side-Profile Rim-Lit Portrait (use user face reference)",
  "model": "stable-diffusion-xl-v1-0", 
  "size": "2048x3072",
  "reference_image": "face.jpg",
  "use_reference_for": ["face", "hairstyle", "skin_tone", "facial_proportions"],
  "prompt": "Use the provided face reference (preserve identity and same short hairstyle, no face-morphing). Create a stark, high-contrast black-and-white side-profile portrait (monochrome). Subject: gender-neutral / slightly masculine, short hair, clean profile, wearing a dark form-fitting turtleneck that disappears into pure black background. Composition: strict side-profile (face turned ~90° from camera) looking slightly upward and to the side, conveying contemplation/aspiration. Lighting: single extremely hard, concentrated light placed directly behind and slightly to the side of the subject to produce a very narrow, intense rim light that traces the head, jawline, brow, neck and arm — rim should be razor-sharp and bright white against a true black background; the rest of the face should remain in deep shadow with only the rim defining contours. Camera & technical: photorealistic, 85mm medium telephoto, shallow depth of field (tight head-and-shoulders crop), fine film grain, extremely high dynamic range (emphasize bright rim vs deep black), crisp detail at edges, subtle skin texture visible where rim light catches it. Mood & style: cinematic, minimalist, austere, dramatic. Preserve natural facial features, avoid stylization or exaggeration. Ensure the turtleneck blends into the background with no visible seams, and avoid visible props or background elements. Final output: black-and-white, high contrast, ultra-photorealistic, high-resolution.",
  "negative_prompt": "no color, no makeup exaggeration, no glasses, no jewelry, no logos, no text, no watermark, no extra limbs, no face-morphing, no heavy retouching or plastic look, no smiling, no open mouth, no visible teeth, no background details, avoid painterly or illustrative styles, avoid soft or diffuse rim light (rim must be hard and narrow).",
  "sampling": {
    "sampler": "Euler a",
    "steps": 28,
    "cfg_scale": 7.5,
    "seed": -1
  },
  "postprocessing": {
    "convert_to_monochrome": true,
    "contrast_boost": 1.4,
    "sharpen_edges": true,
    "add_film_grain": "subtle"
  },
  "safety": {
    "preserve_identity": true,
    "allow_face_reference": true,
    "consent_required": "user_provided_reference",
    "face_editing_rules": "do not alter identity, maintain hairstyle, no age or gender shifting beyond subtle photorealistic lighting effects"
  },
  "notes_for_operator": "Attach the user's reference image as 'face.jpg' before running. Verify the generator uses the reference only for face & hairstyle; enforce strict negative prompts to prevent stylization or background artifacts. Output requested: one high-resolution PNG, monochrome.

## 中文译文（源站提供）
{
  "标题": "高对比度单色侧身肖像（使用用户面部参考图像）",
  "模型": "stable-diffusion-xl-v1-0",
  "尺寸": "2048x3072",
  "参考图像": "face.jpg",
  "使用参考图像的方面": ["面部特征", "发型", "肤色", "面部比例"],
  "提示": "使用提供的面部参考图像（保持人物身份和相同的短发造型，禁止进行面部变形处理）。创作一幅高对比度的黑白侧身肖像。人物特征：性别中立/略带男性气质，短发，轮廓清晰，穿着深色紧身高领衫，高领衫与纯黑色背景融为一体。构图要求：严格采用侧身视角（面部朝向相机约90°），微微向上并向侧面看，表现出沉思或渴望的情绪。光线处理：在人物正后方及稍偏一侧放置一束强烈、集中的光线，形成一条非常狭窄且明亮的光边，照亮头部、下颌线、眉毛、颈部和手臂；光边应在纯黑色背景下呈现锋利清晰的白色；面部其他部分应处于深色阴影中，仅通过光边来勾勒轮廓。相机与技术参数：追求超写实效果，使用85毫米中焦镜头，浅景深（仅显示头部和肩膀），细腻的胶片颗粒感，极高的动态范围（突出明亮的边缘与深色背景的对比），边缘细节清晰可见，光边照射到的皮肤纹理也需呈现自然效果。风格与氛围：电影感强、极简主义、朴素而富有戏剧性。保持面部特征的自然形态，避免过度修饰或夸张处理。确保高领衫与背景无缝融合，避免出现多余的道具或背景元素。最终输出格式：黑白单色图像，超高对比度，超写实效果，高分辨率。"
  "禁止的元素": "禁止使用彩色、化妆夸张效果、眼镜、珠宝、标识、文字、水印、多余的肢体、面部变形处理、过度修图或过度修饰的脸部轮廓、微笑、张开的嘴巴、露出的牙齿；避免使用绘画或插画风格的构图；光边必须为强烈且狭窄的类型。"
  "采样设置": {
    "采样器": "Euler a",
    "采样步数": 28,
    "配置比例": 7.5,
    "随机种子值": -1
  },
  "后期处理": {
    "转换为单色图像": true,
    "增强对比度": 1.4,
    "锐化边缘": true,
    "添加胶片颗粒感": "轻微"
  },
  "安全设置": {
    "保护人物身份": true,
    "允许使用参考图像": true,
    "需要用户同意": "用户需提供参考图像",
    "面部编辑规则": "不得改变人物身份，保持发型不变，年龄和性别特征的变化仅限于通过光线效果实现的微妙变化"
  },
  "给操作者的提示": "运行生成器前，请将用户的参考图像作为'face.jpg'文件附上。确认生成器仅使用该参考图像来还原面部和发型特征；严格执行禁止的元素要求，以避免风格化或背景瑕疵。最终输出格式为高分辨率PNG文件，单色图像。"
}

## 来源备注
- 源站作者：SimplyAnnisa
- 源站 UUID：c16318f136
- 源站分类：05_人物肖像与写实摄影

---
id: portrait-flash-the-true-1293
title: "晚宴闪光人像风格转换"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["复古", "人像", "室内", "晚装", "闪光", "暖色调", "胶片", "黑色"]
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
"meta":{
"quality":"High-Definition",
"type":"Evening indoor flash portrait",
"ratio":"4:5 vertical",
"device":"iPhone 16 Pro",
"style_reference":"Transform the INPUT PHOTO into this exact aesthetic.",
"look":"Evening flash, warm-toned vintage, real grain, realistic skin texture (NO smoothing)."
},

"identity_lock":{
"preserve_face": true,
"strict": true,
"rules":[
"The face MUST remain IDENTICAL to the input photo.",
"No changes to facial structure, proportions, expression, or identity.",
"No smoothing, no beautify, no retouch, no AI facial alterations."
]
},

"skin_texture_rules":{
"keep_texture": true,
"no_smoothing": true,
"no_blur": true,
"realistic_details": "natural texture preserved.",
"flash_behavior":"Flash highlights should reveal texture, not hide it."
},

"vintage_effect":{
"warmth":"{"warmth" "+18"}",
"contrast":"{"contrast" "+22"}",
"highlights":"{"highlights" "-5"}",
"shadows":"{"shadows" "+12"}",
"grain":"Medium (film-like)",
"vignette":"Soft",
"color_grade":"Warm beige vintage tint",
"sharpness":"Slightly reduced to mimic old camera softness"
},

"global_context":{
"scene_description":"Indoor hallway with wall decor, mirror reflection, white walls and warm flash lighting.",
"time_of_day":"Evening",
"lighting":"Direct warm flash illuminating the subject with strong falloff into the background.",
"environment_details":[
"Mirror behind the subject with reflection visible.",
"White paneled walls.",
"Marble/stone console table with a floral arrangement.",
"Soft shadows created by harsh flash."
]
},

"composition":{
"camera_angle":"Eye-level, straight-on portrait",
"framing":"Knees-up full portrait",
"pose":"Body leaning slightly forward with one hand on console table and the other arm across the torso.",
"expression":"Confident, pouty, soft glamorous gaze.",
"flash_effect":"Glossy highlights on skin and dress."
},

"subject":{
"makeup":{
"style":"Soft glam.",
"lips":"{"lip color" "Pink-brown gloss with warm undertone"}.",
"eyes":"Eyeliner + lashes.",
"blush":"Warm peach."
},
"skin":"Natural undertone, realistic texture, NOT smoothed.",
"outfit":{
"dress":"{"dress description" "Black mini halter dress with deep neckline and satin-like shine"}.",
"fabric_behavior":"Flash creates bright reflections and visible folds."
}
},

"background_objects":[
{
"id":"mirror",
"description":"Large wall mirror reflecting the subject's pose.",
"lighting":"Flash reflection visible but subdued."
},
{
"id":"flowers",
"description":"Vibrant bouquet on the table ({"flower colors" "yellow, purple, green"})."
},
{
"id":"wall",
"description":"White paneled wall with framed signage."
}
],

"rules":{
"identity_constant": true,
"no_face_change": true,
"no_ai_artifacts": true,
"realism":"Ultra realistic evening flash aesthetic with vintage tones."
}
}

## 中文译文（源站提供）
```json
{
"meta":{
"quality":"高清",
"type":"室内夜晚闪光人像",
"ratio":"4:5 垂直",
"device":"iPhone 16 Pro",
"style_reference":"将输入照片转化为这种精确的美学风格。",
"look":"夜晚闪光，暖色调复古，真实颗粒感，逼真皮肤纹理（无平滑处理）。"
},

"identity_lock":{
"preserve_face": true,
"strict": true,
"rules":[
"面部必须与输入照片保持完全一致。",
"面部结构、比例、表情或身份不得有任何改变。",
"无平滑、无美化、无修饰、无 AI 面部改动。"
]
},

"skin_texture_rules":{
"keep_texture": true,
"no_smoothing": true,
"no_blur": true,
"realistic_details": "保留自然纹理。",
"flash_behavior":"闪光高光应显现纹理，而非隐藏纹理。"
},

"vintage_effect":{
"warmth":"{\"warmth\" \"+18\"}",
"contrast":"{\"contrast\" \"+22\"}",
"highlights":"{\"highlights\" \"-5\"}",
"shadows":"{\"shadows\" \"+12\"}",
"grain":"中等（胶片感）",
"vignette":"柔和",
"color_grade":"暖米色复古色调",
"sharpness":"略微降低以模仿老式相机柔和度"
},

"global_context":{
"scene_description":"室内走廊，有墙壁装饰、镜面反射、白色墙壁和温暖的闪光灯照明。",
"time_of_day":"夜晚",
"lighting":"直接的暖色闪光照亮主体，背景光线强烈衰减。",
"environment_details":[
"主体后方有镜子，反射可见。",
"白色镶板墙。",
"大理石/石质控制台桌，摆有花卉布置。",
"强闪光灯造成的柔和阴影。"
]
},

"composition":{
"camera_angle":"平视，正面人像",
"framing":"膝盖以上全身人像",
"pose":"身体略微前倾，一只手放在控制台桌上，另一只手臂横过躯干。",
"expression":"自信，嘟嘴，柔和迷人的凝视。",
"flash_effect":"皮肤和连衣裙上有光泽高光。"
},

"subject":{
"makeup":{
"style":"柔和魅力。",
"lips":"{\"lip color\" \"带暖色调的粉棕色唇彩\"}。",
"eyes":"眼线 + 睫毛。",
"blush":"暖桃色。"
},
"skin":"自然底色，逼真纹理，未平滑处理。",
"outfit":{
"dress":"{\"dress description\" \"黑色迷你露背连衣裙，深领口，缎面光泽\"}。",
"fabric_behavior":"闪光灯产生明亮反射和可见褶皱。"
}
},

"background_objects":[
{
"id":"mirror",
"description":"大型壁镜，反射主体的姿势。",
"lighting":"闪光反射可见但柔和。"
},
{
"id":"flowers",
"description":"桌上鲜艳的花束（{\"flower colors\" \"黄色、紫色、绿色\"}）。"
},
{
"id":"wall",
"description":"带有画框标牌的白色镶板墙。"
}
],

"rules":{
"identity_constant": true,
"no_face_change": true,
"no_ai_artifacts": true,
"realism":"超逼真的夜晚闪光美学，带有复古色调。"
}
}
```

## 来源备注
- 源站作者：Sudee🥀
- 源站 UUID：PL7orYWIpF
- 源站分类：05_人物肖像与写实摄影

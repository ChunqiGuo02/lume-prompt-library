---
id: "product-reference-lock-purpose-001"
title: "圣诞魔法剧组自拍花絮"
category: product
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["幕后", "圣诞", "自拍", "片场", "欧美", "魔法", "壁炉", "温暖"]
recommended_models: 
  - banana-pro
recommended_params:
  aspect_ratio: "16:9"
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
  "request_metadata": { "tool": "NanoBananaPro", "task_type": "ultra_photoreal_bts_selfie", "quality_preset": "ultra", "aspect_ratio": "16:9" },
  "references": {
    "character_reference_image": { "slot": 1, "purpose": "MAIN_SUBJECT_IDENTITY_LOCK", "strict_identity_lock": true },
    "support_character_A_reference": { "slot": 2, "purpose": "HARRY_LOOK_LOCK", "required": false },
    "support_character_B_reference": { "slot": 3, "purpose": "HERMIONE_LOOK_LOCK", "required": false },
    "pose_reference_image": { "required": false, "purpose": "SAME_POSE_SAME_FRAMING" }
  },
  "hard_constraints": [
    "EXACTLY 3 subjects: main reference person + Harry + Hermione. Both must appear and be clearly recognizable via wardrobe/props.",
    "Same couch selfie pose; NO device; flawless anatomy.",
    "Holiday: Santa hats + a themed tree matching wizard-school aesthetic (candles, books, star ornaments) with no readable text or house names.",
    "BTS gear visible (boom mic, camera rig, lights, cables, crew edges)."
  ],
  "camera": { "camera_body": "ARRI_ALEXA_Mini_LF_style", "lens": "Zeiss_Supreme_Prime_24mm", "aperture": "f/2.8", "white_balance": "4300K", "notes": ["warm practicals", "soft haze", "prepared by Ozge Doner", "for Bagel Labs"] },
  "prompt": { "scene_summary": "Ultra-photoreal BTS couch selfie on a wizard-school common-room soundstage. Main reference person seated on couch taking a natural selfie; arm outstretched; NO device visible. Harry and Hermione leaning close near couch between takes. Set: books, candles, magical props (no text). Holiday: themed tree with wizardy ornaments, floating-candle style decor (practical effects), no readable symbols. BTS: boom mic, camera rig, lights, cables, crew edges." },
  "negative_prompt": ["missing character", "extra people", "phone", "deformed hands", "extra fingers", "text", "logo", "watermark"]

## 中文译文（源站提供）
```json
{
  "request_metadata": { "tool": "NanoBananaPro", "task_type": "ultra_photoreal_bts_selfie", "quality_preset": "ultra", "aspect_ratio": "16:9" },
  "references": {
    "character_reference_image": { "slot": 1, "purpose": "MAIN_SUBJECT_IDENTITY_LOCK", "strict_identity_lock": true },
    "support_character_A_reference": { "slot": 2, "purpose": "HARRY_LOOK_LOCK", "required": false },
    "support_character_B_reference": { "slot": 3, "purpose": "HERMIONE_LOOK_LOCK", "required": false },
    "pose_reference_image": { "required": false, "purpose": "SAME_POSE_SAME_FRAMING" }
  },
  "hard_constraints": [
    "精确 3 个主体：主要参考人物 + 哈利 + 赫敏。两人都必须出现，并通过服装/道具清晰可辨。",
    "相同的沙发自拍姿势；无设备；完美的人体结构。",
    "节日：圣诞帽 + 一棵符合巫师学校美学（蜡烛、书籍、星星装饰）的主题树，无任何可读文本或学院名称。",
    "可见的幕后设备（吊杆麦克风、摄像机支架、灯光、线缆、部分工作人员）。"
  ],
  "camera": { "camera_body": "ARRI_ALEXA_Mini_LF_style", "lens": "Zeiss_Supreme_Prime_24mm", "aperture": "f/2.8", "white_balance": "4300K", "notes": ["暖色实用灯光", "柔和薄雾", "由 Ozge Doner 准备", "为 Bagel Labs 制作"] },
  "prompt": { "scene_summary": "在巫师学校公共休息室的摄影棚内，拍摄一张超逼真的幕后沙发自拍。主要参考人物坐在沙发上，自然地自拍；手臂伸展；无设备可见。哈利和赫敏在拍摄间隙靠近沙发。场景：书籍、蜡烛、魔法道具（无文字）。节日：一棵带有巫师主题装饰的树，浮动蜡烛风格的装饰（实际效果），无任何可读符号。幕后：吊杆麦克风、摄像机支架、灯光、线缆、部分工作人员。" },
  "negative_prompt": ["缺少人物", "多余人物", "手机", "变形的手", "多余的手指", "文字", "标志", "水印"]
}
```

## 来源备注
- 源站作者：Özge Döner
- 源站 UUID：u3dQZGX00y
- 源站分类：05_人物肖像与写实摄影

---
id: portrait-reference-lock-female-0221
title: "伊斯坦布尔现代浪漫情侣牵手漫步场景生成"
category: portrait
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["情侣", "浪漫", "黄昏", "城市", "河流", "暖色", "温柔", "街拍"]
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
  "generation_request": {
    "meta_data": {
      "tool": "NanoBanana Pro",
      "task_type": "photoreal_modern_romance",
      "version": "v1.0_ISTANBUL_2026_FINAL",
      "priority": "highest"
    },
    "references": {
      "reference_image_female": { "source": "UPLOAD_REFERENCE_IMAGE", "purpose": "FACE_IDENTITY_LOCK_FEMALE", "strict_lock": true },
      "reference_image_male": { "source": "UPLOAD_REFERENCE_IMAGE", "purpose": "FACE_IDENTITY_LOCK_MALE", "strict_lock": true }
    },
    "creative_prompt": {
      "scene_summary": "Modern {"city" "Istanbul"}. Love that survived all eras.",
      "pose_and_micro_action": "Their hands brush while walking. This time, they interlock fingers.",
      "mood": "complete, eternal"
    }
  }
}

## 中文译文（源站提供）
```json
{
  "generation_request": {
    "meta_data": {
      "tool": "NanoBanana Pro",
      "task_type": "photoreal_modern_romance",
      "version": "v1.0_ISTANBUL_2026_FINAL",
      "priority": "highest"
    },
    "references": {
      "reference_image_female": { "source": "UPLOAD_REFERENCE_IMAGE", "purpose": "FACE_IDENTITY_LOCK_FEMALE", "strict_lock": true },
      "reference_image_male": { "source": "UPLOAD_REFERENCE_IMAGE", "purpose": "FACE_IDENTITY_LOCK_MALE", "strict_lock": true }
    },
    "creative_prompt": {
      "scene_summary": "现代的 {\"city\" \"Istanbul\"}。爱意跨越所有时代，永恒不朽。",
      "pose_and_micro_action": "他们走路时手不经意地触碰。这一次，他们十指相扣。",
      "mood": "完整、永恒"
    }
  }
}
```

## 来源备注
- 源站作者：Özge Döner
- 源站 UUID：xpfGH3ahOM
- 源站分类：05_人物肖像与写实摄影

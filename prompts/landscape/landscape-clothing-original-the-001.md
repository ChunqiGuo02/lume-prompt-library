---
id: "landscape-clothing-original-the-001"
title: "三联画女性肖像：蓝天背景下自然光影的胶片质感人像"
category: landscape
subcategory: "09_故事分镜角色设定"
aesthetic: null
tags: ["三联", "人像", "胶片", "蓝天", "户外", "女性", "阳光", "宁静"]
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
  "type": "image_generation_prompt",
  "format": "triptych",
  "aspect_ratio": "vertical, three stacked panels",
  "identity_preservation": {
    "use_original_image_reference": true,
    "strict_identity_lock": true,
    "face_changes_allowed": false,
    "clothing_changes_allowed": false,
    "notes": "Maintain 100% original facial structure, proportions, moles, eyes, nose, mouth, skin texture, hairstyle, and original clothing exactly as in the reference image."
  },
  "subject": {
    "gender": "female",
    "appearance": {
      "hair": {
        "style": "dark, tousled hair",
        "details": "natural movement with a few strands lifted by breeze"
      },
      "expression_style": "natural, candid, introspective"
    }
  },
  "composition": {
    "layout": "three vertically stacked photographs (triptych)",
    "background": "bright, clear blue sky",
    "setting": "outdoor, rooftop-like environment"
  },
  "panels": {
    "top_panel": {
      "camera_angle": "low angle",
      "pose": "looking down toward the camera",
      "expression": "direct, slightly pensive gaze",
      "lighting": "bright sunlight illuminating one side of face and shoulder with soft shadows"
    },
    "middle_panel": {
      "camera_angle": "eye-level to slightly low",
      "pose": "head turned away, gazing to the right",
      "expression": "thoughtful, distant",
      "environment_detail": "small portion of brown columned roof visible in lower left",
      "composition_note": "subject slightly off-center emphasizing open sky"
    },
    "bottom_panel": {
      "camera_angle": "close-up profile",
      "pose": "eyes closed, head slightly tilted back",
      "expression": "calm, reflective",
      "lighting": "sunlight accentuating facial and neck contours"
    }
  },
  "camera": {
    "type": "35mm film camera aesthetic",
    "lens_aperture": "f/1.8–f/2.8",
    "focus": "sharp focus on face with shallow depth of field",
    "grain": "visible natural film grain"
  },
  "lighting": {
    "source": "natural daylight",
    "time_of_day": "afternoon",
    "quality": "soft, diffused sunlight",
    "direction": "front and side lighting",
    "artificial_light": "none"
  },
  "color_and_style": {
    "palette": [
      "vivid blue sky",
      "warm natural skin tones"
    ],
    "style": "editorial portrait with analog film aesthetic",
    "atmosphere": "calm, airy, serene, nostalgic",
    "contrast": "subtle",
    "saturation": "natural with slight enhancement"
  },
  "quality": {
    "realism": "high",
    "detail": "natural skin texture, realistic lighting",
    "imperfections": "preserved"
  },
  "constraints": [
    "No facial alterations",
    "No clothing changes",
    "No artificial lighting",
    "No digital beauty filters",
    "No CGI or illustration",
    "No text or watermarks"
  ],
  "output_goal": "Create a serene, film-like triptych portrait of the same woman against a clear blue sky, preserving her exact identity, clothing, and natura"
}

## 中文译文（源站提供）
```json
{
  "type": "image_generation_prompt",
  "format": "triptych",
  "aspect_ratio": "vertical, three stacked panels",
  "identity_preservation": {
    "use_original_image_reference": true,
    "strict_identity_lock": true,
    "face_changes_allowed": false,
    "clothing_changes_allowed": false,
    "notes": "保持与参考图像中完全一致的原始面部结构、比例、痣、眼睛、鼻子、嘴巴、皮肤纹理、发型和原始服装。"
  },
  "subject": {
    "gender": "female",
    "appearance": {
      "hair": {
        "style": "深色、蓬松的头发",
        "details": "自然飘动，几缕发丝被微风吹起"
      },
      "expression_style": "自然、率真、内省"
    }
  },
  "composition": {
    "layout": "三张垂直堆叠的照片（三联画）",
    "background": "明亮、湛蓝的天空",
    "setting": "户外，类似屋顶的环境"
  },
  "panels": {
    "top_panel": {
      "camera_angle": "低角度",
      "pose": "向下看向镜头",
      "expression": "直接、略带沉思的目光",
      "lighting": "明亮的阳光照亮脸部和肩膀的一侧，带有柔和的阴影"
    },
    "middle_panel": {
      "camera_angle": "与视线齐平或略低",
      "pose": "头转向一侧，凝视右方",
      "expression": "沉思、遥远",
      "environment_detail": "左下方可见一小部分棕色柱状屋顶",
      "composition_note": "主体略微偏离中心，突出开阔的天空"
    },
    "bottom_panel": {
      "camera_angle": "特写侧面",
      "pose": "闭眼，头略微向后仰",
      "expression": "平静、沉思",
      "lighting": "阳光突出面部和颈部轮廓"
    }
  },
  "camera": {
    "type": "35 毫米胶片相机美学",
    "lens_aperture": "f/1.8–f/2.8",
    "focus": "面部清晰对焦，景深较浅",
    "grain": "可见的自然胶片颗粒"
  },
  "lighting": {
    "source": "自然日光",
    "time_of_day": "下午",
    "quality": "柔和、漫射的阳光",
    "direction": "正面和侧面照明",
    "artificial_light": "无"
  },
  "color_and_style": {
    "palette": [
      "鲜艳的蓝色天空",
      "温暖自然的肤色"
    ],
    "style": "具有模拟胶片美学的编辑肖像",
    "atmosphere": "平静、通透、宁静、怀旧",
    "contrast": "微妙",
    "saturation": "自然，略有增强"
  },
  "quality": {
    "realism": "高",
    "detail": "自然的皮肤纹理，逼真的光线",
    "imperfections": "保留"
  },
  "constraints": [
    "无面部改动",
    "无服装变化",
    "无人工照明",
    "无数字美颜滤镜",
    "无 CGI 或插画",
    "无文字或水印"
  ],
  "output_goal": "创作一幅宁静、电影般的同一位女性的三联画肖像，背景为晴朗的蓝天，精确保留她的身份、服装和自然状态"
}
```

## 来源备注
- 源站作者：𝗦𝗮𝗻𝗶𝗮
- 源站 UUID：li2B4sYc4S
- 源站分类：09_故事分镜角色设定

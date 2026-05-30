---
id: "landscape-type-the-mist-001"
title: "哥斯拉巨兽惊现海面渔船旁"
category: landscape
subcategory: "04_创意脑洞特效合成"
aesthetic: null
tags: ["哥斯拉", "怪兽", "渔船", "海洋", "冷色调", "雾霭", "电影感", "写实"]
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
  "metadata": {
    "camera_simulation": {
      "brand_model": "ARRI ALEXA LF",
      "type": "professional",
      "sensor_type": "large-format digital",
      "focal_length_mm": 35,
      "lens_type": "anamorphic prime",
      "aperture_f": 4.0,
      "shutter_speed": "1/500",
      "ISO": 800,
      "distance_estimate": "extreme close-up on creature / wide for environment"
    },
    "lighting_summary": {
      "direction": "diffused top-down through heavy overcast/fog",
      "color_temperature_k": 6500,
      "light_quality": "ambient",
      "number_of_light_sources": 1,
      "key_fill_back_ratio": "1:1"
    },
    "composition": {
      "aspect_ratio": "4:5",
      "crop_type": "low-angle ground-level shot",
      "camera_height": "sea-level",
      "framing_notes": "subject (Godzilla) towers over a small fishing vessel in the foreground",
      "background_description": "thick, volumetric fog and mist obscuring the distant horizon",
      "background_distance": "infinite/obscured",
      "pose_description": "Godzilla leaning forward, mouth agape in a roar; boat rocking on waves",
      "expression": "menacing, prehistoric rage"
    },
    "subject_description": {
      "age_estimate": "ancient",
      "uncertain_age": false,
      "ethnicity_photographic_terms": "n/a (kaiju/reptilian scales)",
      "body_proportions": "colossal, massive neck and dorsal fins",
      "visible_cleavage": false,
      "clothing": "none",
      "unique_marks": "jagged obsidian-like dorsal plates, wet reptilian skin texture"
    },
    "defects": [
      {
        "name": "volumetric haze/mist",
        "severity": "high",
        "action": "replicate",
        "notes": "ensure the mist realistically occludes the monster's scale to convey size"
      },
      {
        "name": "motion blur on splashing water",
        "severity": "medium",
        "action": "replicate",
        "notes": "reproduce realistic shutter-speed motion on the cresting waves"
      }
    ],
    "resolution_and_texture": {
      "source_resolution": "approx 800x1000",
      "perceived_sharpness": "high in foreground, soft in background mist",
      "grain_level": "fine",
      "target_resolution": "4096x5120"
    },
    "model_hints": {
      "recommended_model": "Gemini Nano Banana Pro",
      "size_hint": "highest-fidelity texture rendering",
      "inference_tips": "prioritize volumetric depth and liquid physics",
      "token_practical_limit": 1500
    }
  },
  "prompt_text": "Photorealistic cinematic photograph; camera: ARRI ALEXA LF (professional), sensor: large-format digital, lens: 35mm anamorphic prime, aperture f/4.0, shutter 1/500, ISO 800; focal plane: foreground boat sharp, creature features detailed through mist; aspect ratio: 4:5; framing: low-angle sea-level perspective looking up at a colossal Godzilla; lighting: diffused ambient daylight filtered through heavy teal-gray"

## 中文译文（源站提供）
```json
{
  "metadata": {
    "camera_simulation": {
      "brand_model": "ARRI ALEXA LF",
      "type": "professional",
      "sensor_type": "large-format digital",
      "focal_length_mm": 35,
      "lens_type": "anamorphic prime",
      "aperture_f": 4.0,
      "shutter_speed": "1/500",
      "ISO": 800,
      "distance_estimate": "生物特写 / 环境广角"
    },
    "lighting_summary": {
      "direction": "通过浓厚的阴天/雾气漫射的顶光",
      "color_temperature_k": 6500,
      "light_quality": "ambient",
      "number_of_light_sources": 1,
      "key_fill_back_ratio": "1:1"
    },
    "composition": {
      "aspect_ratio": "4:5",
      "crop_type": "低角度地面拍摄",
      "camera_height": "海平面",
      "framing_notes": "主体（哥斯拉）在前景的一艘小渔船上方高耸",
      "background_description": "浓密的体积雾和薄雾遮蔽了远处的地平线",
      "background_distance": "无限/模糊",
      "pose_description": "哥斯拉身体前倾，张开大嘴咆哮；船只在波浪中摇晃",
      "expression": "威胁性，史前般的愤怒"
    },
    "subject_description": {
      "age_estimate": "古老",
      "uncertain_age": false,
      "ethnicity_photographic_terms": "不适用（怪兽/爬行动物鳞片）",
      "body_proportions": "巨大，颈部和背鳍巨大",
      "visible_cleavage": false,
      "clothing": "无",
      "unique_marks": "锯齿状黑曜石般的背板，湿润的爬行动物皮肤纹理"
    },
    "defects": [
      {
        "name": "体积雾/薄雾",
        "severity": "高",
        "action": "复制",
        "notes": "确保薄雾真实地遮蔽怪兽的比例以传达其大小"
      },
      {
        "name": "飞溅水花的运动模糊",
        "severity": "中",
        "action": "复制",
        "notes": "在浪尖上重现真实的快门速度运动"
      }
    ],
    "resolution_and_texture": {
      "source_resolution": "约 800x1000",
      "perceived_sharpness": "前景清晰，背景薄雾柔和",
      "grain_level": "细微",
      "target_resolution": "4096x5120"
    },
    "model_hints": {
      "recommended_model": "Gemini Nano Banana Pro",
      "size_hint": "最高保真纹理渲染",
      "inference_tips": "优先处理体积深度和液体物理效果",
      "token_practical_limit": 1500
    }
  },
  "prompt_text": "电影级写实摄影；相机：ARRI ALEXA LF（专业），传感器：大画幅数字，镜头：35mm 变形宽银幕定焦，光圈 f/4.0，快门 1/500，ISO 800；焦平面：前景船只清晰，怪兽特征在薄雾中细节分明；宽高比：4:5；构图：低角度海平面视角，仰视巨大的哥斯拉；光照：通过浓重的青灰色漫射的环境日光"
}
```

## 来源备注
- 源站作者：QuestGlitch
- 源站 UUID：jDCkiTbzji
- 源站分类：04_创意脑洞特效合成

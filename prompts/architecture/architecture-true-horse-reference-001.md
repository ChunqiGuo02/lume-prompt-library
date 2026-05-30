---
id: "architecture-true-horse-reference-001"
title: "奥斯曼风格女子与黑马的写实肖像"
category: architecture
subcategory: "05_人物肖像与写实摄影"
aesthetic: null
tags: ["写实", "历史", "女性", "马", "黑色", "土耳其", "古装", "暖光"]
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
      "task_type": "photoreal_historical_turkish_woman_with_black_horse",
      "version": "v1.0_TR_PERIOD_WOMAN_BLACK_HORSE_EN",
      "priority": "high"
    },
    "references": {
      "reference_image_1": {
        "source": "UPLOAD_REFERENCE_IMAGE (REQUIRED)",
        "purpose": "MAIN_SUBJECT_IDENTITY_AND_STYLE_LOCK",
        "strict_lock": true,
        "preserve_face_identity": true,
        "preserve_facial_proportions": true,
        "preserve_hairstyle_and_headpiece": true,
        "preserve_outfit_silhouette": true,
        "no_beautify_no_face_morph": true,
        "no_age_shift": true
      }
    },
    "output_settings": {
      "aspect_ratio": "match_reference",
      "orientation": "portrait",
      "resolution_target": "ultra_high_res",
      "render_style": "ultra_photoreal_cinematic_editorial",
      "sharpness": "crisp_but_natural",
      "film_grain": "subtle_analog",
      "color_grade": "warm_historical_natural"
    },
    "camera": {
      "camera_style": "cinematic portrait",
      "lens": "85mm",
      "aperture": "f/2.0",
      "shutter_speed": "1/250",
      "iso": 200,
      "white_balance": "daylight_warm"
    },
    "global_scene": {
      "setting": "historical Anatolian / late Ottoman inspired courtyard in front of a traditional wooden mansion, rustic balcony railings, soft greenery, authentic period atmosphere",
      "time_of_day": "late afternoon",
      "lighting": "soft directional natural light, gentle rim light, realistic shadows, no harsh highlights",
      "mood": "dignified, powerful, heritage, cinematic realism"
    },
    "subjects": {
      "primary_subject": {
        "type": "human",
        "description": "old-era Turkish woman (Anatolian / late Ottoman inspiration), keep identity 1:1 with the reference image, strong presence, calm confident expression",
        "wardrobe": "Turkish-blue / turquoise + earthy leather layers, authentic Anatolian/Ottoman embroidery motifs (Rumi + Hatayi floral + Seljuk geometric star), fur-trimmed shoulders, ornate headband with a central gemstone",
        "pose": "standing as in reference, squared shoulders, relaxed hands, upright posture",
        "placement": "center frame"
      },
      "secondary_subject": {
        "type": "horse",
        "description": "majestic {"horse color" "black"} horse, tall and muscular, glossy black coat with subtle sheen, well-groomed mane, elegant stance; Ottoman/Anatolian tack with tasteful brass/bronze metalwork, no modern accessories",
        "pose": "standing beside the woman, calm, head slightly turned toward camera, ears forward, noble expression",
        "placement": "slightly behind and to the woman's side, matching perspective and depth of field"
      }
    },
    "composition": {
      "framing": "medium-full portrait (knees to head) for the woman, include the horse head and upper body clearly, keep the reference framing as close "
    }
}

## 中文译文（源站提供）
```json
{
  "generation_request": {
    "meta_data": {
      "tool": "NanoBanana Pro",
      "task_type": "photoreal_historical_turkish_woman_with_black_horse",
      "version": "v1.0_TR_PERIOD_WOMAN_BLACK_HORSE_EN",
      "priority": "high"
    },
    "references": {
      "reference_image_1": {
        "source": "UPLOAD_REFERENCE_IMAGE (REQUIRED)",
        "purpose": "MAIN_SUBJECT_IDENTITY_AND_STYLE_LOCK",
        "strict_lock": true,
        "preserve_face_identity": true,
        "preserve_facial_proportions": true,
        "preserve_hairstyle_and_headpiece": true,
        "preserve_outfit_silhouette": true,
        "no_beautify_no_face_morph": true,
        "no_age_shift": true
      }
    },
    "output_settings": {
      "aspect_ratio": "match_reference",
      "orientation": "portrait",
      "resolution_target": "ultra_high_res",
      "render_style": "ultra_photoreal_cinematic_editorial",
      "sharpness": "crisp_but_natural",
      "film_grain": "subtle_analog",
      "color_grade": "warm_historical_natural"
    },
    "camera": {
      "camera_style": "cinematic portrait",
      "lens": "85mm",
      "aperture": "f/2.0",
      "shutter_speed": "1/250",
      "iso": 200,
      "white_balance": "daylight_warm"
    },
    "global_scene": {
      "setting": "历史悠久的安纳托利亚 / 奥斯曼帝国晚期风格庭院，前方是传统木制豪宅，带有质朴的阳台栏杆，柔和的绿色植物，真实的时代氛围",
      "time_of_day": "傍晚",
      "lighting": "柔和定向自然光，轻柔的轮廓光，真实的阴影，无刺眼高光",
      "mood": "庄重、强大、传承、电影写实主义"
    },
    "subjects": {
      "primary_subject": {
        "type": "human",
        "description": "古老时代的土耳其女性（安纳托利亚 / 奥斯曼帝国晚期风格），与参考图像保持 1:1 的身份，气场强大，表情平静自信",
        "wardrobe": "土耳其蓝 / 青绿色 + 大地色系皮革多层服装，正宗的安纳托利亚/奥斯曼刺绣图案（鲁米 Rumi + 哈塔伊 Hatayi 花卉 + 塞尔柱 Seljuk 几何星形），毛皮镶边肩部，带有中央宝石的华丽头饰",
        "pose": "如参考图所示站立，肩膀方正，双手放松，姿态挺拔",
        "placement": "画面中央"
      },
      "secondary_subject": {
        "type": "horse",
        "description": "雄伟的 {\"horse color\" \"black\"} 马，高大健壮，乌黑发亮的毛皮带有微妙的光泽，鬃毛打理整齐，姿态优雅；奥斯曼/安纳托利亚风格的马具，配有雅致的黄铜/青铜金属制品，无现代配饰",
        "pose": "站在女性旁边，平静，头部略微转向镜头，耳朵向前，神态高贵",
        "placement": "略微位于女性身后和侧面，匹配透视和景深"
      }
    },
    "composition": {
      "framing": "女性为中景全身肖像（膝盖到头部），清晰展现马的头部和上半身，尽可能保持参考图的构图"
    }
  }
}
```

## 来源备注
- 源站作者：Özge Döner
- 源站 UUID：bSGUW7gD0v
- 源站分类：05_人物肖像与写实摄影

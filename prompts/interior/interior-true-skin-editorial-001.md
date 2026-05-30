---
id: "interior-true-skin-editorial-001"
title: "红裙女性电影感时尚写真九宫格"
category: interior
subcategory: "09_故事分镜角色设定"
aesthetic: null
tags: ["时尚", "写真", "人像", "酒红", "丝绸", "暗调", "室内", "九宫格"]
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
      "task_type": "photoreal_cinematic_fashion_contact_sheet",
      "version": "v1.0_RED_DRESS_INTIMATE_EDITORIAL_3x3_NO_TEXT",
      "priority": "highest"
    },

    "references": {
      "reference_image_1": {
        "source": "UPLOAD_REFERENCE_IMAGE (OPTIONAL)",
        "purpose": "FACE_IDENTITY_LOCK",
        "strict_lock": true,
        "face_similarity_priority": "MAX",
        "no_identity_blending": true,
        "no_beautify": true,
        "preserve_skin_texture": true,
        "preserve_facial_proportions": true
      }
    },

    "output_settings": {
      "aspect_ratio": "1:1",
      "resolution_target": "ultra_high_res",
      "render_style": "cinematic_fashion_editorial",
      "sharpness": "soft_cinematic_focus",
      "film_grain": "subtle_analog_35mm",
      "dynamic_range": "natural_not_hdr",
      "color_grade": "muted_warm_reds_dark_neutrals",
      "skin_rendering": "real_skin_microtexture_no_plastic"
    },

    "layout": {
      "type": "contact_sheet",
      "grid": "3x3",
      "spacing": "thin_clean_dividers",
      "panel_consistency": "same_subject_same_outfit_same_scene",
      "no_text_overlay": true
    },

    "camera": {
      "camera_type": "full_frame_cinema_camera",
      "lens": "50mm_and_85mm_mix",
      "aperture": "f1.8",
      "depth_of_field": "shallow",
      "focus_behavior": "eyes_priority_some_frames_soft_motion",
      "processing": "no_ai_sharpening_no_hdr"
    },

    "lighting": {
      "type": "low_key_cinematic_indoor_light",
      "source": "window_light_side_falloff",
      "contrast": "medium_to_low",
      "shadows": "soft_deep",
      "highlights": "controlled_skin_specular"
    },

    "wardrobe_and_styling": {
      "dress": "deep_red_silk_satin_slip_dress",
      "fabric_behavior": "fluid_realistic_drape_soft_specular",
      "straps": "thin_delicate",
      "overall_style": "intimate_high_fashion_editorial"
    },

    "hair_and_makeup": {
      "hair": "natural_loose_with_soft_bangs",
      "movement": "subtle_natural_motion",
      "makeup_style": "soft_editorial",
      "eyes": "natural_smoky_low_contrast",
      "lips": "muted_rose_nude",
      "skin_finish": "natural_luminous_real"
    },

    "posing_and_storytelling": {
      "poses": [
        "close_up_shoulder_touch",
        "mid_body_turning_away",
        "full_body_walking_away",
        "leaning_against_wall",
        "head_tilted_back_emotional",
        "eyes_closed_intimate",
        "soft_motion_blur_moment",
        "hands_touching_face",
        "dress_detail_closeup"
      ],
      "emotion": "introspective_sensual_vulnerable",
      "movement": "slow_natural_unposed"
    },

    "background": {
      "environment": "dark_interior_gallery_or_room",
      "colors": [
        "deep_red",
        "charcoal_gray",
        "dark_green"
      ],
      "texture": "matte_walls_soft_reflections",
      "distract"

## 中文译文（源站提供）
```json
{
  "generation_request": {
    "meta_data": {
      "工具"："NanoBanana Pro"，
      "task_type": "摄影级电影时尚联系单",，
      "版本": "v1.0_RED_DRESS_INTIMATE_EDITORIAL_3x3_无文字"，
      “priority”：“最高”
    },

参考文献
      "reference_image_1": {
        "source": "上传参考图像（可选）",，
        “目的”：“人脸识别锁定”，
        "strict_lock": true,，
        "face_similarity_priority": "MAX",，
        "no_identity_blending": true,，
        "no_beautify": true,，
        "preserve_skin_texture": true,，
        "preserve_facial_proportions": true
      }
    },

    "output_settings": {
      "aspect_ratio": "1:1",，
      "resolution_target": "ultra_high_res",，
      “render_style”：“电影风格_时尚风格_编辑风格”，
      “锐度”：“柔和电影焦”，
      "film_grain": "subtle_analog_35mm",，
      "dynamic_range": "自然模式，非HDR（高动态范围）"，
      "color_grade": "柔和暖红深中性色调",，
      “skin_rendering”：“真实皮肤微观纹理无塑料”
    },

    "layout": {
      "type": "contact_sheet",，
      "grid": "3x3",，
      "spacing": "thin_clean_dividers",，
      "panel_consistency": "同一主体、同一服装、同一场景",，
      "no_text_overlay": true
    },

    "camera": {
      "camera_type": "全画幅电影摄影机",，
      "镜头"："50mm_and_85mm_mix"，
      "光圈"："f1.8"，
      "景深"： "浅景深"，
      "focus_behavior": "眼睛优先，部分帧柔和运动",，
      “处理”：“无AI锐化无HDR”
    },

    "lighting": {
      "类型"："低调电影室内光线"，
      "source": "window_light_side_falloff",，
      "contrast": "中等到低",，
      "shadows": "soft_deep",，
      “highlights”的属性为“controlled_skin_specular”
    },

    "衣柜与造型"：{
      “连衣裙”：“深红色丝绸缎面吊带裙”，
      "fabric_behavior": "流体真实悬垂柔软镜面反射",，
      "肩带"："轻薄精致"，
      “overall_style”：“私密高级时装编辑”
    },

    "hair_and_makeup": {
      “头发”：“自然蓬松，带有柔和的刘海”，
      "movement": "subtle_natural_motion",，
      "makeup_style": "柔和编辑风格",，
      "眼睛"："自然烟熏低对比度",，
      "嘴唇"："柔和玫瑰裸色"，
      "skin_finish": "自然光泽真实"
    },

    "posing_and_storytelling"：{
      "poses": [
        "特写镜头肩部触碰"，
        “身体转向一侧”，
        “全身走开”，
        “靠在墙上”，
        “情绪化地仰头”，
        “闭眼亲密”，
        "soft_motion_blur_moment"，
        “hands_touching_face”，
        “服装细节特写”
      ],
      “情感”：“内省、感性、脆弱”，
      “运动”：“缓慢自然无姿势”
    },

背景
      "环境"："黑暗的室内画廊或房间"，
      "colors": [
        “深红”，
        "charcoal_gray"，
        “深绿色”
      ],
      "纹理"："matte_walls_soft_reflections"，
      “分散注意力”：否
    }
  }
}
```

## 来源备注
- 源站作者：Özge Döner
- 源站 UUID：l4CHQLk0ma
- 源站分类：09_故事分镜角色设定
